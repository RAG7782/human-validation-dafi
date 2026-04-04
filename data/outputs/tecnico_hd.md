# ADR-2024-001: Migração de Arquitetura Monolítica para Microsserviços

**Status:** Proposto — Aguardando Aprovação do CTO
**Data:** Abril de 2026
**Autores:** Equipe de Arquitetura
**Revisores:** CTO, Tech Leads dos três squads
**Versão:** 1.0

---

## Índice

1. [Contexto e Declaração do Problema](#1-contexto-e-declaração-do-problema)
2. [Drivers de Decisão](#2-drivers-de-decisão)
3. [Opções Consideradas](#3-opções-consideradas)
4. [Decisão](#4-decisão)
5. [Estratégia de Decomposição por Domínio](#5-estratégia-de-decomposição-por-domínio)
6. [Plano de Migração](#6-plano-de-migração)
7. [Impacto na Equipe](#7-impacto-na-equipe)
8. [Análise de Custos](#8-análise-de-custos)
9. [Registro de Riscos (RAID)](#9-registro-de-riscos-raid)

---

## 1. Contexto e Declaração do Problema

### Arquitetura Atual

- **Stack:** Java 17, Spring Boot 3.x, monolito único com ~180.000 LOC; PostgreSQL 15 com schema único de 147 tabelas; React 18 SPA via REST; 3 instâncias EC2 c5.2xlarge + RDS Multi-AZ + ElastiCache Redis
- **Escala:** 8.000 clientes ativos, crescimento contínuo
- **Equipe:** 3 squads de 4 desenvolvedores cada (12 devs no total), repositório único
- **Deploy:** Jenkins com blue-green manual, frequência média de 1 deploy por semana

### Dores Quantificadas

- **Time to market degradado:** Features novas levam 4–6 semanas do início ao deploy em produção. A meta de negócio é 1–2 semanas. O gargalo primário é a coordenação entre squads no repositório único e o ciclo de testes de regressão do monolito inteiro a cada mudança.
- **Desperdício de recursos:** O módulo de relatórios consome 70% dos recursos computacionais, mas é utilizado em apenas 10% do tempo. Não há como escalar esse módulo independentemente — qualquer pico de geração de relatórios degrada a performance das APIs transacionais para todos os 8.000 clientes.
- **Confiabilidade comprometida:** Um bug no módulo de cobrança derrubou o sistema inteiro por 4 horas no último trimestre. Ausência de isolamento de falhas significa que qualquer componente pode ser um ponto único de falha para toda a plataforma.
- **Fricção de desenvolvimento:** 3 squads trabalhando no mesmo repositório geram conflitos de merge frequentes, acoplamento acidental entre domínios e ausência de ownership claro. Nenhum squad consegue fazer deploy independente.

### Por Que Agora

O incidente de 4 horas no módulo de cobrança é o evento-gatilho que torna a inação insustentável. Com 8.000 clientes ativos em uma plataforma financeira, uma indisponibilidade dessa magnitude tem consequências diretas em SLA, churn e reputação. O risco não é hipotético — ele se materializou. Simultaneamente, a base de clientes continua crescendo, o que significa que cada semana de inação amplifica tanto o risco de reincidência quanto o custo de uma migração futura.

---

## 2. Drivers de Decisão

Os critérios abaixo governam a avaliação de todas as opções. A soma dos pesos é 100%. Drivers negativos (colunas de custo e risco) são incluídos deliberadamente — ignorá-los produziria uma análise desonesta.

| # | Driver | Peso | Justificativa |
|---|--------|------|---------------|
| D1 | Deployabilidade independente | 25% | Endereça diretamente o gargalo de time to market (4–6 semanas → 1–2 semanas). Sem deploys independentes por squad, o problema não é resolvível. |
| D2 | Escalabilidade seletiva | 20% | O módulo de relatórios consome 70% dos recursos em 10% do tempo. A solução requer a capacidade de escalar esse componente isoladamente sem afetar as APIs transacionais. |
| D3 | Isolamento de falhas | 20% | O incidente de 4h prova que o modelo atual não tolera falhas localizadas. Um bug em cobrança não deve ser capaz de derrubar autenticação, relatórios ou notificações. |
| D4 | Autonomia de equipe | 15% | Lei de Conway: a arquitetura atual força 3 squads a coordenarem cada mudança. A estrutura organizacional e a arquitetura técnica devem ser alinhadas para eliminar essa dependência. |
| D5 | Tolerância à complexidade operacional | 10% | Reconhecimento honesto: microsserviços aumentam a complexidade de operação, observabilidade e debugging. Esse custo deve ser avaliado, não ignorado. |
| D6 | Apetite a risco de migração | 10% | A migração em si é um risco operacional. O plano deve ser faseado e reversível, com critérios explícitos de abandono para proteger a estabilidade do produto durante a transição. |

---

## 3. Opções Consideradas

### Opção A: Monolito Modular

**Descrição:** Reestruturar o monolito existente em módulos bem definidos com boundaries claros, usando packages Java com visibilidade controlada, sem alterar o modelo de deployment. O sistema continua sendo deployado como uma única unidade, mas com separação interna de responsabilidades e redução de acoplamento acidental.

**Prós:**
- Menor risco de migração — nenhuma mudança de infraestrutura, sem sistemas distribuídos
- Implementação mais rápida (estimativa: 3–4 meses vs. 7+ meses para microsserviços)
- Elimina conflitos de merge via ownership de módulos e regras de dependency enforced em build time
- Sem overhead de latência de rede entre componentes
- Equipe não precisa adquirir expertise em sistemas distribuídos imediatamente
- Reversibilidade total — não há ponto sem retorno

**Contras:**
- **Não resolve escalabilidade seletiva (D2):** O módulo de relatórios continuaria consumindo recursos das APIs transacionais — impossível escalar independentemente dentro de um único processo
- **Isolamento de falhas limitado (D3):** Um bug que corrompe o processo JVM ainda pode derrubar todo o sistema; o modelo de falha não muda fundamentalmente
- **Deployabilidade independente parcial (D1):** Squads podem ter ownership de módulos, mas o deploy ainda é coordenado — um módulo com bug bloqueia o deploy de todos
- Não resolve o gargalo de testes de regressão do sistema inteiro
- Pode se tornar um passo intermediário que adia a migração real sem resolver os problemas críticos

**Pontuação por Driver:**

| Driver | Peso | Pontuação (0–5) | Contribuição Ponderada |
|--------|------|-----------------|------------------------|
| D1 — Deployabilidade independente | 25% | 2 | 0,50 |
| D2 — Escalabilidade seletiva | 20% | 1 | 0,20 |
| D3 — Isolamento de falhas | 20% | 2 | 0,40 |
| D4 — Autonomia de equipe | 15% | 3 | 0,45 |
| D5 — Complexidade operacional | 10% | 5 | 0,50 |
| D6 — Risco de migração | 10% | 5 | 0,50 |
| **Total** | | | **2,55 / 5,00** |

**Veredicto:** Opção válida como passo intermediário, mas não resolve os dois problemas de maior peso (escalabilidade seletiva e isolamento de falhas), tornando-a insuficiente para os objetivos de negócio da FinFlow.

---

### Opção B: Microsserviços (Recomendada)

**Descrição:** Decomposição orientada a domínio (DDD) do monolito em serviços independentemente deployáveis, cada um com seu próprio datastore, pipeline de CI/CD e ownership de squad. Implementação via padrão Strangler Fig — migração incremental e reversível, sem big-bang.

**Prós:**
- Endereça diretamente os quatro drivers de maior peso (D1–D4)
- Deployabilidade verdadeiramente independente por squad e por domínio
- Escalabilidade seletiva: o serviço de relatórios pode ser escalado horizontalmente sem afetar transações
- Isolamento de falhas: um serviço degradado não propaga falha para os demais (com circuit breakers)
- Alinhamento org-arquitetura via Lei de Conway — cada squad tem ownership claro de seu domínio
- Padrão Strangler Fig permite migração incremental com rollback por fase
- Melhora a testabilidade: cada serviço tem seu escopo de testes reduzido e bem definido

**Contras:**
- Aumenta significativamente a complexidade operacional (D5): observabilidade distribuída, tracing, gestão de múltiplos pipelines
- Introduz problemas de sistemas distribuídos: consistência eventual, transações distribuídas, latência de rede
- Cada chamada síncrona entre serviços adiciona 5–15ms de latência; um fluxo de cobrança com 3 hops pode adicionar 15–45ms
- Custo de infraestrutura aumenta 40–60% durante a migração (dual-running) e 15–25% no estado estável
- Requer aquisição de expertise em sistemas distribuídos, event-driven architecture e observabilidade
- Risco de "monolito distribuído" se os boundaries de domínio forem mal definidos
- Com 12 desenvolvedores, estamos no limiar mínimo onde os benefícios se materializam (pesquisa InfoQ/2025 indica threshold de ~10 devs); atrito reduziria esse benefício

**Pontuação por Driver:**

| Driver | Peso | Pontuação (0–5) | Contribuição Ponderada |
|--------|------|-----------------|------------------------|
| D1 — Deployabilidade independente | 25% | 5 | 1,25 |
| D2 — Escalabilidade seletiva | 20% | 5 | 1,00 |
| D3 — Isolamento de falhas | 20% | 4 | 0,80 |
| D4 — Autonomia de equipe | 15% | 5 | 0,75 |
| D5 — Complexidade operacional | 10% | 2 | 0,20 |
| D6 — Risco de migração | 10% | 2 | 0,20 |
| **Total** | | | **4,20 / 5,00** |

**Veredicto:** Única opção que endereça os quatro drivers críticos. O custo em complexidade operacional e risco de migração é real e deve ser gerenciado — não minimizado.

---

### Opção C: Serverless-First

**Descrição:** Reescrever os domínios como funções AWS Lambda com serviços gerenciados (SQS, SNS, DynamoDB/Aurora Serverless), adotando arquitetura event-driven como modelo primário.

**Prós:**
- Zero gestão de servidores — AWS gerencia provisionamento e scaling
- Escalabilidade extrema e automática por função
- Modelo de custo pay-per-invocation pode ser econômico em cargas muito variáveis
- Sem overhead de gerenciamento de instâncias EC2

**Contras:**
- **Cold start latency é crítico para APIs financeiras:** Funções Lambda em Java podem ter cold starts de 1–5 segundos. Para uma plataforma financeira onde clientes esperam respostas em <200ms, isso é inaceitável sem mitigações complexas (Provisioned Concurrency, que elimina o benefício de custo)
- **Processos de longa duração são problemáticos:** Geração de relatórios financeiros pode levar minutos — Lambda tem timeout de 15 minutos e não é adequado para processamento batch complexo
- **Vendor lock-in severo:** Migração para Lambda implica dependência profunda da AWS; mudança futura de cloud provider torna-se extremamente custosa
- **Debugging e observabilidade complexos:** Rastrear uma transação financeira através de múltiplas funções Lambda com invocações assíncronas é significativamente mais difícil que microsserviços com tracing distribuído padrão
- **Consistência transacional:** Funções stateless com estado em serviços gerenciados tornam transações ACID (críticas para dados financeiros) muito mais complexas de implementar
- Curva de aprendizado da equipe é a maior das três opções
- Requer reescrita completa — sem possibilidade de migração incremental via Strangler Fig

**Pontuação por Driver:**

| Driver | Peso | Pontuação (0–5) | Contribuição Ponderada |
|--------|------|-----------------|------------------------|
| D1 — Deployabilidade independente | 25% | 4 | 1,00 |
| D2 — Escalabilidade seletiva | 20% | 5 | 1,00 |
| D3 — Isolamento de falhas | 20% | 4 | 0,80 |
| D4 — Autonomia de equipe | 15% | 3 | 0,45 |
| D5 — Complexidade operacional | 10% | 1 | 0,10 |
| D6 — Risco de migração | 10% | 1 | 0,10 |
| **Total** | | | **3,45 / 5,00** |

**Veredicto:** Pontuação intermediária, mas os contras são disqualificadores para uma plataforma financeira: cold start latency incompatível com SLAs financeiros, vendor lock-in severo e ausência de caminho incremental de migração tornam essa opção inadequada para o contexto da FinFlow.

---

### Resumo Comparativo

| Opção | Pontuação Ponderada | Resolve D1+D2+D3 | Risco de Migração | Complexidade Operacional |
|-------|--------------------|--------------------|-------------------|--------------------------|
| A: Monolito Modular | 2,55 / 5,00 | Parcialmente | Baixo | Baixa |
| **B: Microsserviços** | **4,20 / 5,00** | **Sim** | **Médio-Alto (gerenciável)** | **Alta (gerenciável)** |
| C: Serverless | 3,45 / 5,00 | Sim | Alto (reescrita) | Muito Alta |

---

## 4. Decisão

**Recomendamos a Opção B: Microsserviços, implementada via padrão Strangler Fig em migração faseada.**

Essa decisão é sustentada pelos três drivers de maior peso combinados (D1 + D2 + D3 = 65% do peso total): somente a decomposição em serviços independentemente deployáveis resolve simultaneamente o gargalo de time to market, o desperdício de recursos do módulo de relatórios e o risco de falha em cascata demonstrado pelo incidente de 4 horas. Nenhuma das outras opções endereça os três.

**O que estamos aceitando como trade-off:** Aumento real de complexidade operacional (D5) e risco durante a migração (D6). Esses custos são gerenciáveis com o plano faseado descrito na Seção 6, mas não são triviais — a equipe precisará adquirir expertise em sistemas distribuídos e a infraestrutura de observabilidade deve estar operacional antes de qualquer extração de serviço.

**Critério de abandono:** Se qualquer fase exceder 2× a duração ou custo estimado, o CTO deve convocar revisão estratégica com as opções de continuar, pausar ou reverter.

---

## 5. Estratégia de Decomposição por Domínio

### 5.1 Bounded Contexts Identificados

A análise do monolito (~180.000 LOC, 147 tabelas) identificou os seguintes Bounded Contexts, listados em ordem de extração recomendada:

| Prioridade | Bounded Context | Justificativa da Ordem |
|------------|----------------|------------------------|
| 1º | **Notificações** | Baixo risco, assíncrono, mínima migração de dados — ideal para aprendizado da equipe com o novo modelo operacional |
| 2º | **Cobrança / Faturamento** | Maior blast radius comprovado (incidente de 4h); maior valor de negócio ao ser isolado; prioridade de risco |
| 3º | **Relatórios / Analytics** | Maior ganho de escalabilidade (70% dos recursos); CQRS natural; reduz carga nas APIs transacionais imediatamente após extração |
| 4º | **Gestão de Usuários / Auth** | Cross-cutting concern; extração habilita autonomia plena dos demais serviços; avaliação buy vs. build necessária |
| 5º | **Financial Core** (Ledger/Transações) | Maior risco e maior complexidade transacional; permanece no monolito até que os demais contextos estejam estáveis — decisão deliberada |

### 5.2 Context Map

O Context Map abaixo representa as relações entre os Bounded Contexts identificados. Relações são descritas usando terminologia DDD padrão.

```
┌─────────────────────────────────────────────────────────────────────┐
│                         CONTEXT MAP — FinFlow                       │
│                                                                     │
│  ┌─────────────────────┐         ┌─────────────────────────────┐   │
│  │   Financial Core    │         │    Billing / Invoicing      │   │
│  │   (Monolith Core)   │◄────────│                             │   │
│  │                     │Customer │  Aggregate: Invoice         │   │
│  │  Aggregate: Account │Supplier │  Aggregate: PaymentOrder    │   │
│  │  Aggregate: Ledger  │         │                             │   │
│  │  Aggregate: Tx      │         └─────────────────────────────┘   │
│  └──────────┬──────────┘                      │                    │
│             │                                 │ Domain Event:      │
│             │ Customer-Supplier               │ InvoicePaid        │
│             │ (read-only events)              │ InvoiceOverdue     │
│             ▼                                 ▼                    │
│  ┌─────────────────────┐         ┌─────────────────────────────┐   │
│  │  Reporting/Analytics│         │      Notifications          │   │
│  │                     │         │                             │   │
│  │  Pattern: CQRS      │         │  Async / Event-driven       │   │
│  │  (Read-optimized)   │         │  Consumes: Domain Events    │   │
│  │                     │         │  from all contexts          │   │
│  └─────────────────────┘         └─────────────────────────────┘   │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │              User Management / Auth                         │   │
│  │                                                             │   │
│  │  Shared Kernel (durante transição): token JWT compartilhado │   │
│  │  Target: Identity Provider dedicado (Keycloak / Auth0)      │   │
│  │  Todos os serviços consomem — upstream provider             │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │         Anticorruption Layer (ACL)                          │   │
│  │                                                             │   │
│  │  Presente em cada novo serviço na fronteira com o monolito  │   │
│  │  Traduz o modelo de domínio legado para o modelo do serviço │   │
│  │  Impede que o modelo anêmico do monolito "vaze" para os     │   │
│  │  novos bounded contexts                                     │   │
│  └─────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘

Relações:
  Financial Core → Billing:      Customer-Supplier (Financial Core é upstream)
  Financial Core → Reporting:    Customer-Supplier (eventos de leitura apenas)
  Billing → Notifications:       Published Language (Domain Events via broker)
  Financial Core → Notifications: Published Language (Domain Events)
  Auth → Todos os serviços:      Shared Kernel (JWT) → Open Host Service (target)
  Monolith → Novos serviços:     Anticorruption Layer (obrigatório em cada extração)
```

### 5.3 Grafo de Dependências em Runtime

```
                    ┌─────────────┐
                    │  API Gateway │
                    └──────┬──────┘
                           │ Roteamento por path/header
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
   │   Billing   │  │  Reporting  │  │   Monolith  │
   │  Service    │  │   Service   │  │  (residual) │
   └──────┬──────┘  └──────┬──────┘  └──────┬──────┘
          │ sync            │ async           │
          ▼                ▼                ▼
   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
   │  Financial  │  │  Analytical │  │  Auth/User  │
   │    Core     │  │     DB      │  │   Service   │
   │  (Monolith) │  │ (columnar)  │  │             │
   └─────────────┘  └─────────────┘  └─────────────┘
          │
          ▼ Domain Events (async)
   ┌─────────────┐
   │Notifications│
   │   Service   │
   └─────────────┘

Chamadas síncronas: Billing → Financial Core (consulta de saldo/limite)
Chamadas assíncronas: Billing → Notifications (via message broker)
                      Financial Core → Reporting (CDC / event stream)
Sem ciclos identificados nos bounded contexts propostos.
```

### 5.4 Estratégia de Dados por Extração

**Princípio central:** Cada serviço é dono exclusivo de seus dados. Nenhum banco de dados é compartilhado entre serviços após a extração. Violações desse princípio criam acoplamento de dados que é mais difícil de desfazer que acoplamento de código.

**Mecanismo de migração de dados — CDC (Change Data Capture):**
- Ferramenta: Debezium com PostgreSQL WAL (Write-Ahead Log)
- Fluxo: Monolito escreve no schema legado → Debezium captura mudanças do WAL → eventos publicados no broker → novo serviço consome e popula seu próprio datastore
- **Não usar dual-write em nível de aplicação:** anti-padrão conhecido — quando uma das duas escritas falha, os dados ficam inconsistentes sem mecanismo de reconciliação confiável
- Shadow reads: durante período de validação, o novo serviço responde às queries mas o monolito ainda serve como fonte de verdade; comparação automática de resultados detecta divergências antes do cutover

**Por Bounded Context:**

| Bounded Context | Tabelas Estimadas | Estratégia de Migração | Datastore Alvo |
|----------------|-------------------|------------------------|----------------|
| Notificações | 5–8 tabelas | Event-driven rebuild (sem estado histórico crítico) | PostgreSQL dedicado |
| Cobrança/Faturamento | 25–35 tabelas | CDC via Debezium + shadow reads 2 semanas | PostgreSQL dedicado |
| Relatórios/Analytics | Views + tabelas de agregação | CDC + rebuild em datastore analítico | PostgreSQL + extensão columnar (ex: TimescaleDB) ou Redshift |
| Auth/Usuários | 10–15 tabelas | Migração gradual com Shared Kernel JWT durante transição | Keycloak / Auth0 (buy vs. build) |
| Financial Core | 60–80 tabelas (estimativa) | Permanece no monolito — sem migração nesta fase | PostgreSQL existente |

### 5.5 Aggregates para as Primeiras Extrações

**Bounded Context: Cobrança/Faturamento**
- `Invoice` (Aggregate Root): contém InvoiceItems, status de pagamento, vencimento
- `PaymentOrder` (Aggregate Root): representa uma instrução de pagamento, com estado de ciclo de vida (pendente → processado → confirmado → falhou)
- Invariante de negócio protegida: o total de um Invoice não pode mudar após emissão; PaymentOrder é imutável após confirmação

**Bounded Context: Notificações**
- `NotificationRequest` (Aggregate Root): canal, destinatário, template, status de entrega
- Sem estado de negócio crítico — falhas são toleráveis com retry; sem transações distribuídas necessárias

---

## 6. Plano de Migração

### Padrão Strangler Fig

Este plano segue o padrão **Strangler Fig** (Martin Fowler, 2004): em vez de reescrever o sistema de uma vez (big-bang), novos serviços são construídos ao redor do monolito existente. O API Gateway roteia gradualmente o tráfego para os novos serviços enquanto o código equivalente no monolito é mantido em standby e, eventualmente, removido. O monolito "murcha" progressivamente à medida que os novos serviços assumem responsabilidades — nunca há um corte abrupto.

**Garantia de compatibilidade de API:** O API Gateway mantém os contratos de API existentes inalterados durante toda a migração. O frontend React e quaisquer integrações externas não percebem a decomposição interna. A migração é transparente para os clientes da API.

**Critério de abandono global:** Se qualquer fase exceder 2× a duração ou custo estimado, o CTO convoca revisão estratégica imediata com três opções na mesa: continuar, pausar e estabilizar, ou reverter a fase. Não há "continuar por inércia".

---

### Fase 0: Fundação (Semanas 1–6)

**Objetivo:** Construir a infraestrutura que torna a migração segura e reversível. Nenhum serviço de negócio é extraído nesta fase.

**Pré-requisito absoluto:** Toda a Fase 0 deve ser concluída antes de qualquer extração de serviço. A tentação de começar a extrair serviços antes de ter observabilidade e feature flags é o caminho mais rápido para um incidente em produção.

**Entregáveis obrigatórios:**

**1. Baseline de SLOs documentado**
Antes de qualquer mudança, medir e documentar os SLOs atuais do monolito. Todos os rollback triggers das fases subsequentes são relativos a esse baseline — não a valores arbitrários.

| Métrica | Como Medir | Responsável |
|---------|-----------|-------------|
| Latência p50 / p95 / p99 por endpoint crítico | APM atual ou instrumentação temporária | Tech Lead |
| Taxa de erros por endpoint (4xx, 5xx) | Logs de acesso + alertas | DevOps |
| Disponibilidade (uptime %) | Monitoramento existente | DevOps |
| Throughput (req/s) em horário de pico | Métricas EC2 + ALB | DevOps |

**2. API Gateway**
- Implementar AWS API Gateway ou Kong em frente ao monolito existente
- Configurar roteamento por path com capacidade de traffic splitting por percentual
- Validar que p99 de latência adicionada pelo gateway é ≤15ms vs. baseline. Se exceder, pausar e investigar antes de prosseguir.
- Manter todos os contratos de API existentes inalterados

**3. Stack de Observabilidade**
A observabilidade não é opcional — é o mecanismo de segurança que torna os rollback triggers acionáveis.

Critério de "ready" para observabilidade:
- [ ] Distributed tracing com 100% de sampling em staging (Jaeger ou Datadog APM)
- [ ] Logs centralizados com ingestão <30s (ELK Stack ou CloudWatch Logs)
- [ ] Dashboards de SLO por serviço configurados e validados
- [ ] Alertas configurados para todos os rollback triggers das fases 1–4
- [ ] Health checks padronizados em todos os endpoints

**4. CI/CD Multi-Serviço**
- Refatorar pipeline Jenkins para suportar múltiplos repositórios independentes
- Pipeline por serviço: build → test → contract test → staging → produção
- Cada serviço tem seu próprio ciclo de deploy — deploys coordenados são o sinal de que os boundaries estão errados

**5. Sistema de Feature Flags**
- Implementar LaunchDarkly, Unleash ou solução customizada
- Cada extração de serviço recebe uma feature flag que permite reverter instantaneamente para o código path do monolito sem re-roteamento de tráfego
- Testar o mecanismo de rollback via feature flag antes da Fase 1

**6. Auditoria do ElastiCache Redis**
- Documentar todos os padrões de uso atual do cache Redis
- Identificar chaves que cruzam boundaries de domínio (ex: cache de sessão compartilhado entre cobrança e relatórios)
- Definir estratégia de particionamento de cache por domínio antes das extrações

**7. Contract Testing**
- Implementar Pact (ou equivalente) para consumer-driven contracts
- Estabelecer contracts entre o monolito e os futuros serviços antes de extrair qualquer um
- Os contracts são a rede de segurança que detecta quebras de compatibilidade de API antes do deploy

**8. Testes de Caracterização**
- Para cada Bounded Context a ser extraído, garantir cobertura de testes suficiente no monolito para detectar regressões
- Foco nos fluxos de negócio críticos: emissão de invoice, cálculo de cobrança, geração de relatório

**Gate de Saída da