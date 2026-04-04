# ADR-2024-001 — Migração de Arquitetura Monolítica para Microsserviços

## FinFlow S.A. — Architecture Decision Record Expandido

---

## SEÇÃO 0 — Cabeçalho ADR (Metadados Formais)

| Campo | Valor |
|---|---|
| **ADR-ID** | ADR-2024-001 |
| **Título** | Migração da Arquitetura Monolítica para Microsserviços via Strangler Fig Pattern |
| **Status** | Em Revisão |
| **Data de Criação** | 2024-01-15 |
| **Data de Última Revisão** | 2024-01-15 |
| **Autores / Responsáveis** | Arquiteto-Chefe de Software; Tech Leads dos Squads A, B e C |
| **Revisores** | VP de Engenharia; SRE Lead; Head de Produto |
| **Aprovador Final** | CTO |
| **Sistemas Afetados** | Plataforma FinFlow (backend monolítico Java/Spring Boot); PostgreSQL (schema único); Pipeline CI/CD Jenkins; Infraestrutura AWS (EC2, RDS, ElastiCache) |
| **ADRs Relacionados** | Nenhum predecessor; ADRs futuros a serem criados por serviço extraído |
| **Próxima Revisão Programada** | Ao final da Fase 0 (aproximadamente 6 semanas após aprovação) |

---

## SEÇÃO 1 — Sumário Executivo

A plataforma FinFlow S.A. opera sobre uma arquitetura monolítica que se tornou um gargalo estrutural para o crescimento da empresa. O sistema, construído em Java 17 com Spring Boot 3.x e aproximadamente 180.000 linhas de código, apresenta quatro problemas críticos e mensuráveis: ciclos de entrega de 4 a 6 semanas quando o mercado exige 1 a 2 semanas; consumo desproporcional de recursos pelo módulo de relatórios (70% da capacidade computacional para apenas 10% do tempo de uso); ausência de isolamento de falhas, evidenciada por um incidente no módulo de cobrança que derrubou a plataforma inteira por 4 horas no último trimestre; e conflitos frequentes de desenvolvimento decorrentes de 12 engenheiros trabalhando sobre o mesmo repositório.

Este documento recomenda a adoção de uma **arquitetura de microsserviços**, implementada de forma incremental através do **Strangler Fig Pattern**, ao longo de aproximadamente 12 meses divididos em cinco fases sequenciais. A abordagem incremental foi escolhida deliberadamente para eliminar o risco de uma reescrita completa (*big-bang*), garantindo continuidade de serviço para os 8.000 clientes ativos durante toda a transição.

A estratégia de decomposição prioriza a extração do serviço de **Relatórios** na primeira fase operacional, resolvendo imediatamente o problema de escalabilidade desproporcional e liberando recursos para o restante do sistema. Na sequência, o serviço de **Cobrança** será extraído e isolado, eliminando o risco de que falhas nesse domínio crítico propaguem-se para toda a plataforma. As fases subsequentes completarão a decomposição dos domínios restantes, culminando na aposentadoria do monolito original.

Os resultados esperados ao final da migração incluem: redução do time to market para 1 a 2 semanas por feature; capacidade de escalar individualmente cada serviço conforme demanda; isolamento de falhas com blast radius limitado ao serviço afetado; e autonomia plena dos três squads, cada um com ownership claro de seu domínio e pipeline de deploy independente.

O custo de implementação é real e deve ser reconhecido: aumento temporário de complexidade operacional, necessidade de capacitação da equipe em Kubernetes e observabilidade distribuída, e um incremento estimado de 20 a 35% nos custos de infraestrutura no curto prazo, com expectativa de redução a médio prazo através de escalabilidade granular.

**Solicitação ao CTO e à liderança de engenharia:** revisão e aprovação formal deste ADR para que a Fase 0 (Fundação) possa ser iniciada. Decisões em aberto identificadas na Seção 12 não bloqueiam o início da Fase 0, mas devem ser resolvidas antes do término desta.

---

## SEÇÃO 2 — Contexto e Drivers de Decisão

### 2.1 — Descrição do Sistema Atual

A plataforma FinFlow S.A. é um sistema de gestão financeira voltado para pequenas e médias empresas, atendendo atualmente 8.000 clientes ativos. A arquitetura atual é um monolito Java implantado em três instâncias EC2 com balanceamento de carga, com o seguinte stack técnico consolidado:

**Backend:** Java 17, Spring Boot 3.x, arquitetura monolítica com aproximadamente 180.000 linhas de código. Todos os módulos de negócio — relatórios, cobrança, autenticação, gestão de clientes, notificações e conciliação financeira — residem no mesmo processo JVM e são deployados como uma única unidade.

**Banco de Dados:** PostgreSQL 15 em configuração RDS Multi-AZ, com um schema único contendo 147 tabelas. Não há separação lógica ou física de dados por domínio de negócio; joins cross-domínio são comuns e amplamente utilizados na camada de persistência.

**Frontend:** React 18, Single Page Application (SPA), comunicando-se com o backend exclusivamente via REST API. O frontend não é objeto deste ADR.

**Cache:** ElastiCache Redis, utilizado para sessões de usuário e caching de consultas frequentes.

**Infraestrutura:** Três instâncias EC2 c5.2xlarge (8 vCPU, 16 GB RAM cada) atrás de um Application Load Balancer (ALB). Escalabilidade horizontal manual e reativa.

**Pipeline de Deploy:** Jenkins com deploy blue-green executado manualmente. Cadência atual de aproximadamente um deploy por semana, envolvendo todo o sistema independentemente do escopo da mudança.

**Representação simplificada da arquitetura atual (C4 Nível 1):**

```
┌─────────────────────────────────────────────────────────────┐
│                        USUÁRIO (PME)                        │
└──────────────────────────┬──────────────────────────────────┘
                           │ HTTPS
┌──────────────────────────▼──────────────────────────────────┐
│              React 18 SPA (Frontend)                        │
└──────────────────────────┬──────────────────────────────────┘
                           │ REST API
┌──────────────────────────▼──────────────────────────────────┐
│         Application Load Balancer (AWS ALB)                 │
└──────┬───────────────────┬───────────────────┬──────────────┘
       │                   │                   │
┌──────▼──────┐   ┌────────▼──────┐   ┌────────▼──────┐
│  EC2 #1     │   │   EC2 #2      │   │   EC2 #3      │
│ c5.2xlarge  │   │  c5.2xlarge   │   │  c5.2xlarge   │
│             │   │               │   │               │
│ ┌─────────┐ │   │ ┌───────────┐ │   │ ┌───────────┐ │
│ │FinFlow  │ │   │ │ FinFlow   │ │   │ │ FinFlow   │ │
│ │Monolito │ │   │ │ Monolito  │ │   │ │ Monolito  │ │
│ │(Spring  │ │   │ │ (Spring   │ │   │ │ (Spring   │ │
│ │ Boot)   │ │   │ │  Boot)    │ │   │ │  Boot)    │ │
│ └────┬────┘ │   │ └─────┬─────┘ │   │ └─────┬─────┘ │
└──────┼──────┘   └───────┼───────┘   └───────┼───────┘
       │                  │                   │
       └──────────────────┼───────────────────┘
                          │
          ┌───────────────┼───────────────┐
          │               │               │
┌─────────▼──────┐ ┌──────▼──────┐ ┌─────▼──────────┐
│ RDS PostgreSQL │ │ ElastiCache │ │  (sem serviços │
│ Multi-AZ       │ │   Redis     │ │  externos      │
│ 147 tabelas    │ │             │ │  integrados)   │
└────────────────┘ └─────────────┘ └────────────────┘
```

**Equipe:** 3 squads de 4 desenvolvedores cada (12 engenheiros no total), todos trabalhando sobre o mesmo repositório Git monolítico, sem separação de ownership por módulo.

---

### 2.2 — Evidências dos Problemas (Pain Points Quantificados)

Os quatro problemas identificados não são percepções subjetivas — são disfunções mensuráveis com impacto direto na capacidade competitiva e na confiabilidade da plataforma:

| # | Problema | Evidência Atual | Meta de Negócio | Gap |
|---|---|---|---|---|
| **P1** | Time to market excessivo | Features novas levam 4–6 semanas desde concepção até produção | 1–2 semanas | 2–4 semanas de atraso estrutural |
| **P2** | Escalabilidade ineficiente | Módulo de relatórios consome 70% dos recursos computacionais, mas é utilizado apenas 10% do tempo | Escalar apenas o que é necessário, quando necessário | 100% do sistema escala junto com 10% da demanda |
| **P3** | Ausência de isolamento de falhas | Bug no módulo de cobrança causou indisponibilidade total de 4 horas no último trimestre | Falhas isoladas ao serviço afetado; restante da plataforma permanece operacional | Blast radius = sistema inteiro |
| **P4** | Conflitos de desenvolvimento | 12 desenvolvedores em 3 squads trabalhando no mesmo repositório; conflitos de merge frequentes, deploys bloqueados por dependências cruzadas | Squads autônomos com ciclos de deploy independentes | Zero autonomia; um squad bloqueia os outros |

**Detalhamento do Problema P1 — Time to Market:**
O ciclo de 4 a 6 semanas não é causado por lentidão da equipe, mas por fricção estrutural: qualquer mudança, independentemente do escopo, exige testes de regressão do sistema inteiro, coordenação entre squads para evitar conflitos de merge, e um processo de deploy manual que envolve todo o monolito. Uma feature de 3 dias de desenvolvimento carrega 3 a 5 semanas de overhead de processo.

**Detalhamento do Problema P2 — Escalabilidade:**
O módulo de relatórios executa queries analíticas pesadas sobre o PostgreSQL, consumindo CPU e memória de forma desproporcional. Como o sistema só pode ser escalado horizontalmente como uma unidade, adicionar instâncias EC2 para suportar picos de relatórios significa também escalar desnecessariamente os módulos de cobrança, autenticação e gestão de clientes — que não estão sob pressão no mesmo momento. O custo de infraestrutura está inflado em função dessa ineficiência.

**Detalhamento do Problema P3 — Confiabilidade:**
O incidente de 4 horas no módulo de cobrança é o exemplo mais grave, mas não o único. Em um monolito, um vazamento de memória, uma query mal otimizada ou um loop infinito em qualquer módulo afeta a JVM inteira. Não há mecanismo de circuit breaker efetivo entre módulos internos. O MTTR (Mean Time to Recovery) atual é inaceitável para uma plataforma financeira.

**Detalhamento do Problema P4 — Autonomia de Equipe:**
Com 12 desenvolvedores no mesmo repositório, os conflitos de merge são sintoma, não causa. A causa é o acoplamento arquitetural: módulos sem fronteiras claras levam a dependências implícitas, que levam a mudanças com efeitos colaterais inesperados, que levam a ciclos de teste mais longos e deploys mais cautelosos. O resultado é uma equipe que, apesar de capaz, opera abaixo de sua capacidade produtiva real.

---

### 2.3 — Por Que Agir Agora

**Custo da inação:** Projetando os problemas atuais para os próximos 12 meses sem intervenção arquitetural:

- A base de clientes da FinFlow, atualmente em 8.000 PMEs, tende a crescer. Cada novo cliente aumenta a carga sobre um sistema que já não escala eficientemente. O custo de infraestrutura crescerá linearmente com a base, sem ganhos de eficiência.
- O TTM de 4 a 6 semanas, em um mercado de fintech com competidores ágeis, representa perda de posicionamento competitivo. Features que deveriam ser lançadas em fevereiro chegam em abril — e o mercado não espera.
- A probabilidade de um segundo incidente de confiabilidade grave (similar ao de cobrança) aumenta com o crescimento da base e da complexidade do código. O custo reputacional e financeiro de uma indisponibilidade de 4 horas para 8.000 clientes é significativo.
- A rotatividade de engenheiros tende a aumentar em ambientes com alta fricção de desenvolvimento. Perder desenvolvedores sênior que conhecem o monolito representa risco operacional crescente.

**Janela de oportunidade:** A FinFlow está em um momento favorável para iniciar a migração. Com 8.000 clientes e 12 engenheiros, o sistema ainda tem uma complexidade gerenciável para decomposição incremental. Em uma base de 30.000 clientes ou com um monolito de 500.000 LOC, o mesmo processo seria significativamente mais custoso e arriscado. Agir agora, enquanto o sistema é grande o suficiente para justificar a migração mas pequeno o suficiente para ser gerenciável, é estrategicamente correto.

**Alinhamento estratégico:** A meta de redução de TTM para 1 a 2 semanas é um requisito de negócio, não apenas uma aspiração técnica. Atingir essa meta é impossível dentro da arquitetura monolítica atual sem mudanças estruturais. A decisão arquitetural documentada neste ADR é, portanto, um pré-requisito para a execução da estratégia de produto da FinFlow.

---

## SEÇÃO 3 — Restrições e Premissas

### 3.1 — Restrições (Não Negociáveis)

As seguintes restrições delimitam o espaço de soluções aceitáveis e não podem ser relaxadas sem aprovação explícita do CTO e revisão deste ADR:

1. **Continuidade de serviço:** A migração não pode causar downtime planejado superior a 30 minutos em nenhuma janela de manutenção. Os 8.000 clientes ativos não podem ser impactados por decisões arquiteturais internas.

2. **Equipe atual como base:** A migração deve ser executável pelos 12 engenheiros atuais, organizados em 3 squads. Não há previsão orçamentária para contratação massiva de engenheiros durante o período de migração.

3. **Orçamento de infraestrutura:** O custo mensal de infraestrutura não pode mais do que dobrar no curto prazo (primeiros 6 meses). Aumentos acima de 100% do baseline atual requerem aprovação executiva adicional.

4. **Conformidade regulatória:** Toda a arquitetura deve manter conformidade com a LGPD e com as regulações do Banco Central aplicáveis a plataformas de gestão financeira para PMEs. Nenhuma decisão de decomposição de dados pode comprometer a rastreabilidade de transações financeiras ou a privacidade de dados de clientes.

5. **Prazo para primeira entrega de valor:** A Fase 1 (extração do serviço de Relatórios) deve estar em produção em até 4 meses após a aprovação deste ADR. Este é o prazo máximo aceitável para demonstração de valor concreto da iniciativa.

6. **Manutenção do contrato de API externo:** A API REST consumida pelo frontend React não pode ter breaking changes sem versionamento explícito e período de deprecação mínimo de 60 dias.

---

### 3.2 — Premissas (Assumidas como Verdadeiras; Devem Ser Validadas)

As seguintes premissas foram assumidas na elaboração deste ADR. Cada uma possui um responsável pela validação e um prazo:

1. **Reorganização por domínio é viável:** Os 3 squads atuais podem ser reorganizados por domínio de negócio sem impacto crítico na operação. *Responsável pela validação: VP de Engenharia. Prazo: antes do início da Fase 0.*

2. **Competência técnica adquirível:** A equipe tem capacidade de aprender Kubernetes, Docker, observabilidade distribuída e design de APIs durante o período de migração, com suporte de treinamentos e pair programming. *Responsável: Tech Leads. Prazo: avaliação de gaps na Fase 0.*

3. **Separabilidade do schema:** O schema PostgreSQL com 147 tabelas pode ser mapeado por domínio de ownership, e as dependências cross-domínio podem ser resolvidas via eventos assíncronos ou APIs, sem perda de integridade referencial crítica para operações financeiras. *Responsável: Arquiteto-Chefe + DBA. Prazo: Fase 0.*

4. **Strangler Fig é aplicável:** O frontend React pode ser configurado para roteamento via API Gateway sem reescrita significativa, permitindo a implementação do padrão Strangler Fig. *Responsável: Tech Lead do Squad de Frontend. Prazo: spike técnico na Fase 0.*

5. **Mensageria é viável no ambiente AWS:** A infraestrutura AWS atual suporta a adição de um serviço de mensageria gerenciado (Amazon MSK ou SQS) dentro do orçamento de restrição #3. *Responsável: SRE Lead. Prazo: avaliação de custo na Fase 0.*

6. **Dados de baseline estão disponíveis:** As métricas de baseline para os KPIs definidos na Seção 11 podem ser coletadas da infraestrutura atual antes do início da Fase 1. *Responsável: SRE Lead. Prazo: Fase 0.*

---

## SEÇÃO 4 — Opções Consideradas

Três opções arquiteturais foram avaliadas como respostas aos drivers identificados na Seção 2. Cada opção foi analisada de forma honesta, incluindo seus pontos fortes, mesmo quando descartada.

---

### 4.1 — Opção A: Monolito Modular (Modular Monolith)

**Descrição:** O Monolito Modular mantém o sistema como um único processo deployável, mas introduz fronteiras arquiteturais explícitas e rígidas entre módulos internos. No contexto da FinFlow, isso significaria refatorar o código existente para que cada domínio de negócio (relatórios, cobrança, autenticação, etc.) seja encapsulado em um módulo com interfaces públicas bem definidas, sem acesso direto a internals de outros módulos. O banco de dados permaneceria único, mas com schemas lógicos separados por domínio.

**Pontos Fortes:**
- Menor complexidade operacional em comparação com microsserviços (um único processo, um único deploy)
- Elimina a latência de comunicação inter-serviço (chamadas intra-processo são ordens de magnitude mais rápidas)
- Curva de aprendizado menor para a equipe atual
- Resolve parcialmente o problema de conflitos de desenvolvimento, se os módulos forem atribuídos a squads distintos
- Caminho de migração mais curto e menos arriscado
- Facilita refatoração futura para microsserviços, se necessário

**Pontos Fracos:**
- **Não resolve escalabilidade independente:** O processo ainda é deployado como uma unidade; o módulo de relatórios continuará consumindo recursos do mesmo pool que os demais módulos
- **Não resolve isolamento de falhas:** Uma falha na JVM ainda derruba tudo; circuit breakers entre módulos internos são possíveis mas frágeis
- **Resolve apenas parcialmente o TTM:** Reduz conflitos de merge, mas o ciclo de deploy ainda envolve o sistema inteiro
- Requer disciplina arquitetural contínua para manter as fronteiras — sem enforcement técnico, o acoplamento retorna gradualmente (*big ball of mud* recorrente)
- Não endereça o problema de autonomia de deploy por squad

**Adequação ao Contexto da FinFlow:** O Monolito Modular seria uma melhoria incremental útil, mas não resolve os drivers críticos de escalabilidade (P2) e confiabilidade (P3), que exigem isolamento de processo. Para a FinFlow, que tem como driver primário a escalabilidade independente do módulo de relatórios e o isolamento de falhas do módulo de cobrança, essa opção é insuficiente.

**Decisão:** Descartada. Não endereça os drivers de escalabilidade independente (P2) e isolamento de falhas (P3), que são requisitos não negociáveis identificados na Seção 2. Pode ser considerada como estado intermediário durante a migração para microsserviços, mas não como destino final.

---

### 4.2 — Opção B: Microsserviços (Microservices Architecture)

**Descrição:** Decomposição do monolito em serviços independentes, cada um responsável por um domínio de negócio, com seu próprio processo, banco de dados e pipeline de deploy. Os serviços comunicam-se via APIs REST/gRPC para operações síncronas e via mensageria (Kafka, RabbitMQ ou AWS SQS/SNS) para operações assíncronas. A migração seria implementada via Strangler Fig Pattern — extração incremental de serviços do monolito, sem reescrita completa. A orquestração de containers seria realizada via Kubernetes (Amazon EKS).

**Pontos Fortes:**
- Escalabilidade independente por serviço: o módulo de relatórios pode ter seu próprio pool de recursos, escalado apenas quando necessário
- Isolamento de falhas por processo: uma falha em cobrança não afeta relatórios, autenticação ou gestão de clientes
- Autonomia de squads: cada squad faz deploy do seu serviço de forma independente, sem coordenação com outros squads
- Redução estrutural do TTM: pipelines independentes permitem deploys múltiplos por dia por serviço
- Alinhamento com Conway's Law: a estrutura de times (3 squads) mapeia naturalmente para a estrutura de serviços
- Tecnologia madura e amplamente adotada no setor financeiro

**Pontos Fracos:**
- Aumento significativo de complexidade operacional: service discovery, distributed tracing, gerenciamento de falhas de rede, consistência eventual
- Necessidade de capacitação da equipe em Kubernetes, observabilidade distribuída e design de APIs
- Latência de comunicação inter-serviço (rede vs. chamada intra-processo)
- Desafios de consistência de dados: transações distribuídas requerem padrões como Saga, substituindo transações ACID simples
- Custo de infraestrutura inicial mais alto
- Risco de over-engineering se os domínios não forem bem definidos (microsserviços muito granulares)

**Adequação ao Contexto da FinFlow:** É a única opção que endereça todos os quatro drivers identificados na Seção 2. O tamanho atual da equipe (12 engenheiros em 3 squads) e a base de clientes (8.000) justificam a complexidade operacional adicional. O Strangler Fig Pattern mitiga o risco de migração ao permitir extração incremental.

**Decisão:** Selecionada. Justificativa detalhada na Seção 6.

---

### 4.3 — Opção C: Serverless / Function-as-a-Service (FaaS)

**Descrição:** Decomposição da lógica de negócio em funções independentes (AWS Lambda), acionadas por eventos ou requisições HTTP via API Gateway. Cada função implementa uma operação de negócio específica. O banco de dados seria migrado para serviços gerenciados como DynamoDB ou Aurora Serverless. O modelo de billing é por invocação, eliminando custo de infraestrutura ociosa.

**Pontos Fortes:**
- Escalabilidade automática e granular por função, sem gestão de servidores
- Custo potencialmente menor para cargas de trabalho com padrão de uso irregular (como relatórios)
- Eliminação completa da gestão de infraestrutura de compute
- Deploy independente por função
- Modelo de billing alinhado com uso real

**Pontos Fracos:**
- **Cold start:** Funções com baixa frequência de invocação sofrem latência de inicialização inaceitável para uma plataforma financeira transacional
- **Limites de execução:** AWS Lambda tem limite de 15 minutos de execução — inadequado para relatórios analíticos complexos que podem levar mais tempo
- **Complexidade de migração:** A transição de um monolito Spring Boot para Lambda exigiria reescrita substancial, não migração incremental
- **Estado e transações:** Lógica financeira com transações complexas é difícil de implementar em um modelo stateless de funções
- **Vendor lock-in:** Dependência profunda de AWS Lambda, com portabilidade muito limitada
- **Observabilidade:** Rastrear fluxos transacionais através de dezenas de funções é significativamente mais complexo do que em microsserviços com containers
- Curva de aprendizado diferente e mais abrupta para uma equipe com background em Spring Boot

**Adequação ao Contexto da FinFlow:** O modelo serverless é atraente para workloads event-driven e intermitentes, mas inadequado para uma plataforma financeira transacional com requisitos de latência consistente, transações complexas e relatórios de longa duração. A migração de 180.000 LOC de Spring Boot para Lambda seria, na prática, uma reescrita completa — violando a restrição de continuidade de serviço e extrapolando a capacidade da equipe atual.

**Decisão:** Descartada. Os limites técnicos do modelo FaaS (cold start, tempo máximo de execução, complexidade transacional) são incompatíveis com os requisitos de uma plataforma financeira. O custo e o risco de migração para esse modelo são superiores aos de microsserviços sem benefícios compensatórios no contexto específico da FinFlow.

---

## SEÇÃO 5 — Análise Comparativa das Opções

### Tabela de Critérios Ponderados

A tabela abaixo apresenta a avaliação comparativa das três opções em relação aos critérios derivados diretamente dos drivers identificados na Seção 2. A escala de pontuação é de 1 a 5, onde **1 = muito inadequado** e **5 = muito adequado**. Os pesos refletem a prioridade relativa de cada critério conforme os drivers de negócio da FinFlow.

| Critério | Peso | Justificativa do Peso | Monolito Modular | Microsserviços | Serverless |
|---|---|---|---|---|---|
| Redução de TTM | Alto (×3) | Driver P1: meta de 1–2 semanas é requisito de negócio | 2 | 5 | 4 |
| Escalabilidade independente | Alto (×3) | Driver P2: 70% dos recursos para 10% do tempo | 1 | 5 | 5 |
| Isolamento de falhas | Alto (×3) | Driver P3: incidente de 4h é inaceitável | 2 | 5 | 4 |
| Autonomia de squads | Médio (×2) | Driver P4: 12 devs no mesmo repo | 3 | 5 | 4 |
| Complexidade operacional | Médio (×2) | Restrição: equipe atual sem expansão | 5 | 2 | 2 |
| Custo de implementação | Médio (×2) | Restrição: orçamento não pode dobrar no curto prazo | 4 | 3 | 2 |
| Risco de migração | Alto (×3) | Restrição: continuidade para 8.000 clientes | 4 | 3 | 1 |
| Maturidade da equipe | Médio (×2) | Equipe com background Java/Spring Boot | 5 | 3 | 2 |
| Adequação ao domínio financeiro | Alto (×3) | Transações complexas, compliance, latência | 4 | 5 | 2 |
| **Score bruto (soma ponderada)** | — | — | **76** | **100** | **68** |
| **Score normalizado (% do máximo)** | — | — | **62%** | **82%** | **56%** |

*Nota: Score máximo possível = 5 × (3+3+3+2+2+2+3+2+3) = 5 × 23 = 115 pontos.*

**Interpretação dos Resultados:**

Os microsserviços obtiveram o maior score ponderado (100/115, 87% do máximo) por uma razão estrutural: são a única opção que atende simultaneamente os três drivers de alta prioridade — redução de TTM, escalabilidade independente e isolamento de falhas. Os pontos negativos (complexidade operacional e risco de migração) receberam penalizações, mas foram parcialmente compensados pelo alto score nos critérios de negócio.

O Monolito Modular obteve score intermediário (76/115, 66%). Sua vantagem em complexidade operacional e maturidade da equipe não compensa sua incapacidade de resolver escalabilidade independente e isolamento de falhas — os dois drivers que representam os problemas mais graves e mensuráveis da FinFlow hoje.

O Serverless obteve o menor score (68/115, 59%), penalizado fortemente pelo risco de migração (reescrita praticamente completa) e inadequação ao domínio financeiro transacional. Seus pontos fortes em escalabilidade não compensam os riscos e limitações técnicas no contexto específico da FinFlow.

---

## SEÇÃO 6 — Decisão Recomendada e Justificativa

### 6.1 — Declaração da Decisão

> **"Decidimos adotar uma arquitetura de microsserviços, implementada de forma incremental via Strangler Fig Pattern ao longo de aproximadamente 12 meses,