# Blueprint: Expanded ADR — Monolith to Microservices Migration

## Meta

- **Case:** FinFlow S.A. — Monolith Migration
- **Genre:** Architecture Decision Record (Expanded)
- **Audience:** CTO + Engineering Team
- **Tone:** Technical, decisional, evidence-based
- **Condition:** Human-DA (human-designed blueprint)

---

## 1. Section Structure

The document MUST follow this exact section order. Each section header uses ADR conventions where applicable, extended with engineering-specific sections.

| # | Section | Priority Weight | Approx. Density |
|---|---------|----------------|-----------------|
| 1 | Title + Status + Date | — | 1 line each |
| 2 | Context and Problem Statement | 7% | High narrative density. Quantified pain points as bullets. |
| 3 | Decision Drivers | 8% | Prioritized list with explicit weights (must sum to 100%). |
| 4 | Options Considered | 15% | 3 options minimum, each with structured pros/cons/fit-score. |
| 5 | Decision | 5% (part of 15% block) | Short. Links recommendation to top-weighted drivers. |
| 6 | Domain Decomposition Strategy | 20% | DDD language mandatory. Context map diagram (text). |
| 7 | Migration Plan | 25% | Phased. Strangler fig. Milestones with dates and rollback triggers. |
| 8 | Team Impact | 5% (absorbed into context block) | Conway's Law analysis. Squad-to-service mapping. |
| 9 | Cost Analysis | 10% | TCO table: current vs migration vs target steady-state. |
| 10 | Risk Register | 15% | RAID format. Quantified probability and impact. |

---

## 2. Section-by-Section Directives

### 2.1 Context and Problem Statement

**Purpose:** Establish urgency and scope. Answer "why migrate, why now."

**MUST include:**
- Current architecture summary (stack, scale, team size) — keep factual, 3-4 bullets
- Four quantified pain points from the briefing:
  - Time to market: 4-6 weeks vs 1-2 week target
  - Resource waste: reporting module = 70% resources, 10% usage
  - Reliability: single-point-of-failure incident (4h outage from billing bug)
  - Developer friction: 3 squads, 1 repo, merge conflicts
- A "trigger event" paragraph: the 4-hour outage + growing customer base creates a NOW imperative

**MUST NOT:**
- Pad with generic "microservices are the future" rhetoric
- Omit the quantified metrics — every pain point needs a number

**Density:** Tight. No more than 400 words. Facts, not persuasion.

### 2.2 Decision Drivers

**Purpose:** Make the evaluation criteria explicit and weighted before presenting options.

**MUST include a prioritized table:**

| Driver | Weight | Rationale |
|--------|--------|-----------|
| Independent deployability | 25% | Direct fix for time-to-market bottleneck |
| Selective scalability | 20% | Reporting module resource waste |
| Fault isolation | 20% | Prevent cascade failures (the 4h outage) |
| Team autonomy | 15% | Conway's Law alignment for 3 squads |
| Operational complexity tolerance | 10% | Honest acknowledgment of increased ops burden |
| Migration risk appetite | 10% | Board/CTO risk tolerance constraint |

**MUST NOT:**
- List drivers without weights
- Ignore negative drivers (operational complexity, migration risk)

### 2.3 Options Considered

**Purpose:** Fair, honest evaluation. No straw men.

**Three options minimum:**

**Option A: Modular Monolith**
- Restructure into well-defined modules within single deployable
- Pros: lowest risk, no distributed systems complexity, fastest to implement
- Cons: does NOT solve selective scalability, limited fault isolation
- Score against drivers

**Option B: Microservices (Recommended)**
- Domain-driven decomposition into independently deployable services
- Pros: addresses all top-4 drivers directly
- Cons: distributed systems complexity, higher ops cost, migration risk
- Score against drivers

**Option C: Serverless-First**
- Event-driven functions (AWS Lambda) with managed services
- Pros: zero server management, extreme scalability
- Cons: vendor lock-in, cold start latency (critical for financial APIs), debugging complexity, poor fit for long-running processes (report generation)
- Score against drivers

**Format per option:**
```
### Option [X]: [Name]
**Description:** [2-3 sentences]
**Pros:** [bulleted]
**Cons:** [bulleted]  
**Driver Fit Score:** [table scoring each driver 0-5]
**Verdict:** [1 sentence]
```

**MUST NOT:**
- Present Option B as obviously superior — the analysis must be genuinely balanced
- Omit cold-start latency analysis for serverless (critical for financial platform)
- Ignore modular monolith as a serious intermediate option

### 2.4 Decision

**Purpose:** State the recommendation clearly.

**Format:**
- "We recommend Option B: Microservices, implemented via phased strangler fig migration."
- 2-3 sentences linking the decision to the highest-weighted drivers
- Explicit acknowledgment of what is being traded off (increased operational complexity)

**Density:** Maximum 150 words. Decisive, not defensive.

### 2.5 Domain Decomposition Strategy

**Purpose:** Answer "what do we extract, in what order, and why."

**MUST include:**
- Bounded contexts identified from the monolith (minimum 5):
  1. **Billing/Invoicing** (extract first — highest blast radius, as proven by the outage)
  2. **Reporting/Analytics** (extract second — biggest scalability gain, 70% resource consumer)
  3. **User Management / Auth** (extract third — cross-cutting, enables team autonomy)
  4. **Financial Core** (ledger, transactions — extract later, highest risk)
  5. **Notifications** (low risk, good early candidate for team learning)
- Context Map (text-based): show relationships between bounded contexts
  - Customer-Supplier between Financial Core and Reporting
  - Anticorruption Layer between legacy monolith and new services
  - Shared Kernel for User/Auth during transition
- Runtime dependency graph: who calls whom, sync vs async, identify cycles and coupling
- Aggregate identification for the first two extractions
- Data ownership strategy: each service owns its data, no shared database
- Database migration strategy per extraction: CDC (Debezium), event-driven rebuild, or gradual via views — NOT big-bang schema migration

**MUST use DDD terminology:**
- Bounded Context, Aggregate, Context Map, Anticorruption Layer, Shared Kernel, Customer-Supplier
- Do NOT use vague terms like "module" or "component" when DDD terms apply

**MUST NOT:**
- Propose extracting Financial Core first (highest risk, should be last)
- Skip the context map — relationships between contexts drive integration decisions

### 2.6 Migration Plan

**Purpose:** Phased execution plan. This is the largest section (25% of document).

**MUST follow Strangler Fig pattern:**

**Phase 0: Foundation (Weeks 1-6)**
> Duration extended from 4 to 6 weeks to accommodate realistic scope. Consider managed observability (Datadog, New Relic) to accelerate if timeline is critical.
- Document current SLOs as baseline BEFORE any change: p50/p95/p99 latency, error rate, availability per endpoint. All rollback triggers in subsequent phases are relative to this baseline.
- API Gateway setup (route-level traffic splitting) — MUST maintain existing API contracts unchanged. Decomposition is internal; clients must not perceive the migration.
- CI/CD pipeline per service
- Observability stack — ready when: distributed tracing with 100% sampling in staging, centralized logging with <30s ingestion, SLO dashboards per service, alerting configured
- Redis/cache audit: document current usage patterns of ElastiCache Redis. If shared cache between bounded contexts, include cache partitioning strategy
- Feature flag system (LaunchDarkly, Unleash, or custom) — each extraction gets a flag enabling instant revert to monolith code path without re-routing
- Service mesh or lightweight alternative
- Contract testing framework setup (Pact or equivalent) — consumer-driven contracts between monolith and new services
- Rollback trigger: if gateway adds >15ms p99 latency vs baseline, pause and investigate

**Pre-Phase 1 Gate:**
- Retrospective readiness: baseline SLOs documented, observability validated, contract testing passing, feature flags operational
- Characterization tests: monolith must have sufficient test coverage on the bounded context being extracted to detect regressions
- Go/no-go decision by CTO

**Phase 1: Notifications Service (Weeks 5-8)**
- Low-risk bounded context for team learning
- Event-driven (async), minimal data migration
- Milestone: notifications served 100% from new service, zero monolith calls
- Rollback trigger: error rate >1% or latency >200ms p95

**Inter-Phase Gate (after Phase 1):**
- Formal retrospective: what worked, what didn't, lessons learned
- Coupling health check: if new service required coordinated changes with monolith in >30% of deploys, bounded context was poorly defined — pause and re-decompose
- Migration velocity check: if team velocity dropped below 60% of normal for 2+ sprints, assess capacity before proceeding
- Go/no-go for Phase 2

**Phase 2: Billing/Invoicing (Weeks 9-16)**
- Highest business value extraction
- Data migration via Change Data Capture (CDC — Debezium or equivalent), NOT dual-write at application level (known anti-pattern: inconsistency when one write fails)
- Shadow reads for validation period before cutover
- Milestone: billing fully decoupled, monolith billing code deprecated
- Rollback trigger: any billing calculation discrepancy >0.01%, or transaction failure rate >0.1%

**Phase 3: Reporting/Analytics (Weeks 17-22)**
- CQRS pattern — read-optimized service
- Separate datastore (could be columnar/analytical DB)
- Milestone: reporting scales independently, no impact on transactional workloads
- Rollback trigger: report generation time >2x current baseline

**Phase 4: Auth/User Management (Weeks 23-26)**
- Evaluate buy vs build: Auth0, Keycloak, or AWS Cognito may be superior to custom OAuth2/OIDC service. Build only if regulatory or integration constraints require it.
- Token-based auth replacing session-based
- Milestone: all services authenticate via new auth service
- Rollback trigger: auth failure rate >0.05%

**Phase 5: Consolidation (Weeks 27-30)**
- Remove dead code from monolith
- Financial Core remains in monolith (deliberate decision — extract only when necessary)
- Full observability validation
- Milestone: monolith reduced to Financial Core only

**Per-phase MUST include:**
- Clear entry criteria (what must be true before starting)
- Exit criteria / milestone definition
- Success metric (measurable outcome, not just completion — e.g., "deploy frequency increases from X to Y")
- Rollback trigger with quantified threshold (relative to baseline SLOs)
- Estimated duration
- Team allocation
- Error budget consumption: if SLA is 99.9%, how much downtime budget does this phase consume?

**Quality invariant:** MUST NOT recommend big-bang migration under any framing. Every phase must be independently reversible.

### 2.7 Team Impact

**Purpose:** Conway's Law analysis — how org structure maps to architecture.

**MUST include:**
- Current state: 3 squads x 4 devs, all in 1 repo, stepping on each other
- Target state: squad-per-domain alignment
  - Squad 1 → Billing + Notifications
  - Squad 2 → Reporting + Analytics
  - Squad 3 → Auth + Financial Core (monolith stewards during migration)
- Platform/enablement needs: who builds shared infra (gateway, observability, CI/CD)?
  - Recommendation: temporary platform engineering rotation, 1 dev from each squad
- Skill gaps to address: distributed systems debugging, observability tooling, event-driven architecture

**MUST NOT:**
- Ignore the need for platform/enablement work
- Assume current team has distributed systems expertise without noting the gap

### 2.8 Cost Analysis

**Purpose:** Honest TCO comparison.

**MUST include a table with three columns:**

| Cost Category | Current (Annual) | Migration Period (12mo) | Target Steady-State (Annual) |
|--------------|-----------------|------------------------|------------------------------|
| Infrastructure (compute, DB, cache) | Baseline | +40-60% (dual running) | +15-25% (more instances, but right-sized) |
| Tooling (observability, service mesh, CI/CD) | Baseline | +$X/month | +$Y/month (ongoing) |
| Personnel (training, hiring, contractor) | Baseline | +1-2 platform eng hires or contractors | Neutral (absorbed) |
| Opportunity cost (slower feature dev during migration) | N/A | 30-40% velocity reduction for 6 months | +50-80% velocity improvement |
| Incident cost (outages) | $Z/year (based on 4h outage) | Decreasing | Significantly reduced |
| **Cost of inaction** | Continued outage risk + talent attrition + feature velocity degradation | Increasing | N/A — this is the baseline if no migration |

**MUST include:**
- Break-even estimate: when does the investment pay for itself?
- Use realistic ranges, not false precision
- Factor in the cost of NOT migrating (continued outage risk, talent attrition from frustrating DX)

**MUST NOT:**
- Present only the happy path costs
- Ignore the dual-running cost during migration phases

### 2.9 Risk Register

**Purpose:** RAID format risk management.

**Format:**

| ID | Type | Description | Probability | Impact | Mitigation | Owner |
|----|------|-------------|-------------|--------|------------|-------|
| R1 | Risk | Data inconsistency during dual-write phases | High | Critical | Reconciliation jobs, shadow reads, automated comparison | Tech Lead |
| R2 | Risk | Distributed transaction failures (billing) | Medium | Critical | Saga pattern, compensating transactions, idempotency | Billing Squad |
| R3 | Risk | Increased latency from service-to-service calls | Medium | High | Circuit breakers, caching, async where possible | Platform |
| R4 | Risk | Team lacks distributed systems experience | High | Medium | Training budget, pair with external consultant for Phase 1 | Engineering Manager |
| R5 | Risk | Scope creep — extracting too many services too fast | Medium | High | Strict phase gates, no parallel extractions initially | CTO |
| A1 | Action | Set up observability before any extraction | — | — | Phase 0 prerequisite | Platform |
| I1 | Issue | Current CI/CD pipeline not designed for multi-service | — | — | Rebuild pipeline in Phase 0 | DevOps |
| D1 | Decision | Financial Core stays in monolith until post-migration review | — | — | Revisit at 6-month retrospective | CTO |

**Minimum 5 Risks, 2 Actions, 1 Issue, 1 Decision.**

**MUST quantify:**
- Latency impact estimate: each synchronous service call adds 5-15ms; billing flow with 3 hops = 15-45ms added latency
- Probability as High/Medium/Low with rough percentages
- Impact as Critical/High/Medium/Low with business consequence

---

## 3. Quality Invariants (Hard Rules)

These are non-negotiable. Any output violating these is defective.

| # | Invariant | Enforcement |
|---|-----------|-------------|
| Q1 | Every migration phase MUST have an explicit rollback strategy with quantified trigger | Check each phase section |
| Q2 | MUST NOT recommend or imply big-bang migration | Search for any "all at once", "single cutover", "flag day" language |
| Q3 | MUST quantify latency impact of service decomposition | Dedicated analysis in Risk Register + Migration Plan |
| Q4 | All four pain points from briefing MUST appear with their original numbers | Cross-check Context section against briefing |
| Q5 | Options analysis MUST be genuinely balanced — no straw men | Each option must have real pros, not just token ones |
| Q6 | DDD terminology MUST be used correctly in Domain Decomposition | Bounded Context, Aggregate, Context Map are mandatory |
| Q7 | Cost analysis MUST include migration-period costs, not just before/after | Three-column TCO table required |
| Q8 | RAID register MUST have quantified probability and impact | No unquantified risks |
| Q9 | Strangler Fig pattern MUST be named and explained | Not just "phased migration" — the actual pattern |
| Q10 | Conway's Law MUST be referenced in Team Impact | Explicit org-architecture alignment analysis |
| Q11 | Testing strategy MUST be defined per phase | Contract testing, integration testing, canary deployment |
| Q12 | API backward compatibility MUST be guaranteed during migration | Gateway maintains existing contracts; clients unaware of decomposition |
| Q13 | Feature flags MUST be used for each extraction | Instant revert without re-routing |
| Q14 | Current SLOs MUST be documented as baseline before Phase 1 | All triggers relative to measured baseline, not arbitrary |
| Q15 | Migration MUST have explicit abandon criteria | If any phase exceeds 2x estimated duration or cost, trigger strategic review (continue/pause/revert) |
| Q16 | Each phase MUST have a measurable success metric beyond completion | Deploy frequency, error rate, latency — measured improvement, not just "done" |

---

## 4. Density Directives

| Section | Density Profile | Notes |
|---------|----------------|-------|
| Context & Problem | High narrative, low filler | Every sentence must carry data. No throat-clearing. |
| Decision Drivers | Tabular, weighted | Table format mandatory. Rationale column required. |
| Options Considered | Structured, balanced | Pro/con format. Driver-fit scoring. No advocacy. |
| Decision | Ultra-dense | Max 150 words. Decisive. |
| Domain Decomposition | Technical, DDD-native | Use domain language. Context map is structural, not decorative. |
| Migration Plan | Operational, milestone-driven | Timelines, triggers, criteria. Gantt-like precision in text. |
| Team Impact | Analytical | Conway's Law as analytical lens, not buzzword. |
| Cost Analysis | Tabular, range-based | Ranges over false precision. Include uncertainty. |
| Risk Register | Tabular, RAID | Structured format. No narrative risks — table only. |

---

## 5. Anti-Patterns to Avoid

1. **Technology tourism** — Do not explore Kubernetes, Istio, Kafka, etc. as shiny objects. Mention only when solving a specific stated problem.
2. **Premature optimization** — Do not recommend event sourcing for everything. CQRS only where read/write patterns diverge (reporting).
3. **Ignoring the monolith option** — Modular monolith is a real choice. Treat it seriously.
4. **Buzzword density** — "Cloud-native", "12-factor", "DevOps culture" without concrete meaning = noise. Every term must be operationalized.
5. **Missing the human side** — Team skill gaps, hiring needs, and training costs are as real as infrastructure costs.
6. **Happy-path bias** — If the risk register has no High-probability risks, it is dishonest.
7. **Strangler Fig Stall** — Migration stops mid-way, leaving two systems to maintain with neither complete. Include explicit "abandon criteria": if Phase 2 exceeds 2x estimated duration or cost, trigger strategic review (continue, pause, revert).
8. **Dual-write at application level** — Known anti-pattern for data migration. Use CDC (Change Data Capture) instead.
9. **Missing baseline** — Defining rollback triggers without measuring current SLOs is guesswork. Baseline first, triggers second.
10. **Distributed monolith** — If services require coordinated deploys in >30% of releases, you built a distributed monolith (worse than the original). Coupling health check per phase is mandatory.
11. **Team size threshold** — Research shows microservices benefits only appear with teams >10 developers (InfoQ/Medium 2025). FinFlow has 12 — just above threshold. If attrition drops below 10, reassess.

**Precedentes historicos relevantes (pesquisa web abr/2026):**
- Healthcare portal migration: 9 months of work, release crashed immediately, locked all users out — lesson: never go-live without canary/shadow deployment (InfoQ 2025)
- "90% of microservices teams still batch deploy like monoliths" (2024 survey) — lesson: independent deployability must be measured, not assumed
- "342 YAML files, DevOps team on brink of burnout, cloud bills like phone numbers" — lesson: operational complexity cost must be in TCO, not discovered post-migration
- Agoda case study: successful migration by leading with client-centric bounded contexts, not technical layers — validates our DDD approach
