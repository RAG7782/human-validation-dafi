# ADR-2024-001: Migração de Arquitetura Monolítica para Microsserviços

**FinFlow S.A. — Plataforma de Gestão Financeira**

---

| Campo | Valor |
|---|---|
| **ID do Documento** | ADR-2024-001 |
| **Título** | Migração da Arquitetura Monolítica para Microsserviços |
| **Status** | PROPOSTO — Aguardando aprovação do CTO |
| **Autores** | Equipe de Arquitetura de Software |
| **Destinatários** | CTO, Tech Leads, Squads de Engenharia |
| **Data de Criação** | 2024 |
| **Última Revisão** | 2024 |
| **Versão** | 1.0 |
| **Classificação** | Interno — Confidencial |

---

## Sumário Executivo

A FinFlow S.A. enfrenta um ponto de inflexão arquitetural. O monolito Java/Spring Boot que sustenta a plataforma foi adequado para os estágios iniciais da empresa, mas tornou-se um obstáculo estrutural ao crescimento. Com 8.000 clientes ativos, três squads trabalhando em conflito constante sobre o mesmo repositório e um incidente de cobrança que derrubou toda a plataforma por quatro horas, os sinais são inequívocos: a arquitetura atual não suporta o próximo ciclo de crescimento da empresa.

Este documento formaliza a análise, a decisão e o plano de execução para a transição arquitetural. A recomendação é a adoção de uma **arquitetura de microsserviços com decomposição incremental por domínio de negócio**, executada em três fases ao longo de 12 a 18 meses, priorizando os domínios de maior impacto operacional e risco de negócio.

A decisão não é apenas técnica. É uma decisão de negócio sobre velocidade de entrega, resiliência e capacidade de escalar uma empresa de software financeiro competitiva.

---

## Índice

1. [Contexto e Motivação](#1-contexto-e-motivação)
2. [Drivers de Decisão](#2-drivers-de-decisão)
3. [Restrições e Premissas](#3-restrições-e-premissas)
4. [Opções Consideradas](#4-opções-consideradas)
5. [Decisão Recomendada](#5-decisão-recomendada)
6. [Estratégia de Decomposição por Domínio](#6-estratégia-de-decomposição-por-domínio)
7. [Plano de Migração em Fases](#7-plano-de-migração-em-fases)
8. [Riscos e Mitigações](#8-riscos-e-mitigações)
9. [Impacto em Equipe, Processos e Custos](#9-impacto-em-equipe-processos-e-custos)
10. [Critérios de Sucesso e Métricas](#10-critérios-de-sucesso-e-métricas)
11. [Decisão Final e Próximos Passos](#11-decisão-final-e-próximos-passos)
12. [Apêndices](#12-apêndices)

---

## 1. Contexto e Motivação

### 1.1 Estado Atual da Plataforma

A plataforma FinFlow é sustentada por um monolito Java 17 com Spring Boot 3.x, composto por aproximadamente 180.000 linhas de código. Toda a lógica de negócio — autenticação, gestão de clientes, contas a pagar, contas a receber, cobrança, relatórios, integrações com bancos e emissão de documentos fiscais — reside em um único artefato deployável.

A base de dados é um PostgreSQL 15 com schema único contendo 147 tabelas, sem separação lógica por domínio. A infraestrutura consiste em três instâncias EC2 c5.2xlarge atrás de um load balancer, com RDS Multi-AZ e ElastiCache Redis para cache de sessão e dados frequentemente acessados.

O ciclo de deploy é semanal, executado via Jenkins com estratégia blue-green manual. Embora a estratégia blue-green reduza o downtime de deploy, ela não resolve o problema fundamental: qualquer deploy carrega o risco de toda a aplicação, independentemente de qual módulo foi alterado.

### 1.2 Por Que Esta Análise Agora

Três eventos convergentes tornam este o momento adequado para a decisão:

**Evento 1 — Incidente de Cobrança (Q3 2024):** Um bug no módulo de cobrança provocou uma falha em cascata que derrubou toda a plataforma por quatro horas. O impacto foi transversal: clientes que não tinham qualquer relação com cobrança naquele momento também ficaram sem acesso. Este evento expõe o risco sistêmico mais grave de uma arquitetura monolítica: a ausência de isolamento de falhas.

**Evento 2 — Degradação Progressiva do Time to Market:** O tempo médio de entrega de uma nova funcionalidade cresceu para 4 a 6 semanas. Parte desse tempo é gasto em coordenação entre squads, resolução de conflitos de merge, regressões causadas por alterações em código compartilhado e ciclos longos de testes de integração. A meta da empresa é 1 a 2 semanas.

**Evento 3 — Escala Assimétrica de Recursos:** O módulo de relatórios consome 70% dos recursos computacionais, mas é utilizado em apenas 10% do tempo. Isso significa que, na maior parte do tempo, 70% da capacidade instalada está ociosa ou sendo consumida de forma ineficiente. Não é possível escalar seletivamente um monolito.

---

## 2. Drivers de Decisão

Os drivers foram classificados em duas categorias: **drivers primários** (que por si só justificam a mudança) e **drivers secundários** (que reforçam e qualificam a decisão).

### 2.1 Drivers Primários

#### D1 — Resiliência e Isolamento de Falhas

**Evidência:** O incidente de cobrança do Q3 resultou em 4 horas de indisponibilidade total. Para uma plataforma financeira com 8.000 clientes PME, cada hora de indisponibilidade representa impacto direto nas operações financeiras dos clientes, risco de churn e potencial exposição regulatória.

**Problema estrutural:** Em um monolito, um erro não tratado em qualquer módulo pode propagar exceções para o pool de threads compartilhado, esgotar conexões de banco de dados ou corromper o estado da JVM. Não existe fronteira de contenção.

**Impacto desejado:** Microsserviços com circuit breakers, bulkheads e timeouts independentes garantem que uma falha no serviço de cobrança não afete o serviço de autenticação, dashboard ou relatórios.

#### D2 — Autonomia e Velocidade de Entrega dos Times

**Evidência:** Três squads de quatro desenvolvedores cada trabalham sobre o mesmo repositório. O número de conflitos de merge, regressões cruzadas e necessidade de coordenação de deploy cresce de forma superlinear com o número de contribuidores em um único artefato.

**Problema estrutural:** Conway's Law é implacável: a arquitetura do sistema tende a espelhar a estrutura de comunicação da organização. Com três squads forçados a operar em um único repositório, o acoplamento técnico cria acoplamento organizacional. Decisões técnicas de um squad bloqueiam ou afetam os outros.

**Impacto desejado:** Cada squad passa a ser proprietário de um ou mais serviços com repositório, pipeline e ciclo de deploy independentes. A velocidade de entrega de cada squad deixa de ser limitada pela velocidade do squad mais lento ou pelo risco de regressão de código alheio.

#### D3 — Escalabilidade Granular e Eficiência de Custos

**Evidência:** O módulo de relatórios consome 70% dos recursos em apenas 10% do tempo. As três instâncias EC2 c5.2xlarge precisam ser dimensionadas para o pico de carga do módulo mais exigente, mesmo que esse pico seja temporário e localizado.

**Problema estrutural:** Um monolito escala horizontalmente como uma unidade indivisível. Para aumentar a capacidade do módulo de relatórios, é necessário adicionar instâncias completas da aplicação, carregando consigo todos os outros módulos, mesmo que eles não precisem de mais recursos.

**Impacto desejado:** O serviço de relatórios pode ser escalado de forma independente, com instâncias dedicadas de maior capacidade computacional (possivelmente com perfil otimizado para CPU ou memória), enquanto os demais serviços operam com instâncias menores e mais econômicas.

### 2.2 Drivers Secundários

#### D4 — Flexibilidade Tecnológica

Com serviços independentes, é possível adotar a tecnologia mais adequada para cada problema. O serviço de relatórios pode se beneficiar de uma linguagem ou runtime diferente, de um banco de dados analítico (como ClickHouse ou Redshift) em vez do PostgreSQL transacional, ou de processamento assíncrono com filas. Isso não é possível em um monolito sem impactar toda a base de código.

#### D5 — Onboarding e Retenção de Talentos

Desenvolvedores seniores no mercado atual têm familiaridade e preferência por arquiteturas distribuídas. Um monolito de 180.000 LOC com schema de 147 tabelas tem uma curva de onboarding alta. Serviços menores e bem delimitados reduzem o tempo de rampa de novos engenheiros e tornam a plataforma tecnicamente mais atrativa.

#### D6 — Preparação para Crescimento

A FinFlow tem meta de crescimento de base de clientes. Uma arquitetura que já apresenta gargalos com 8.000 clientes não é uma base sólida para 50.000 ou 100.000 clientes. A decisão de migrar agora, antes que o sistema entre em colapso sob carga, é estrategicamente mais barata do que migrar em modo de emergência no futuro.

---

## 3. Restrições e Premissas

### 3.1 Restrições Não Negociáveis

| # | Restrição | Implicação |
|---|---|---|
| R1 | Zero downtime planejado durante a migração | Exige strangler fig pattern; não é possível big bang |
| R2 | Conformidade com LGPD e regulações financeiras (BACEN) durante toda a transição | Cada serviço deve implementar controles de privacidade e auditoria desde o dia 1 |
| R3 | Os 8.000 clientes ativos não podem ser afetados funcionalmente | Testes de regressão rigorosos a cada fase |
| R4 | Budget incremental, sem aumento exponencial imediato de custos | Migração deve ser auto-financiável via ganhos de eficiência |
| R5 | Equipe atual como executora principal (sem contratação massiva antecipada) | Capacitação progressiva; eventual contratação pontual de especialistas |

### 3.2 Premissas

- A liderança da empresa está comprometida com a migração como iniciativa estratégica de médio prazo.
- Os tech leads dos três squads participarão ativamente das decisões de design dos novos serviços.
- Será possível alocar ao menos um engenheiro de plataforma/infraestrutura dedicado à construção do ambiente de orquestração (Kubernetes, service mesh, observabilidade).
- O monolito continuará sendo mantido e evoluído durante a migração; não haverá congelamento de features.

---

## 4. Opções Consideradas

Três opções arquiteturais foram analisadas em profundidade antes da recomendação final.

---

### Opção A: Modular Monolith (Monolito Modular)

#### Descrição

Reorganizar o código existente em módulos fortemente encapsulados dentro do mesmo artefato deployável, utilizando os mecanismos de módulos do Java (JPMS — Java Platform Module System) ou simplesmente fronteiras de pacotes com regras de arquitetura impostas por ferramentas como ArchUnit. Cada módulo teria seu próprio conjunto de interfaces públicas e não poderia acessar diretamente as classes internas de outros módulos.

O banco de dados permaneceria único, mas com schemas lógicos separados por domínio (ex: `schema_cobranca`, `schema_relatorios`), com acesso cruzado proibido por convenção e verificado em CI.

#### Vantagens

- **Menor risco de execução:** Não requer mudanças de infraestrutura, orquestração ou comunicação distribuída.
- **Menor complexidade operacional:** Um único artefato para monitorar, deployar e depurar.
- **Rápido de implementar:** Pode ser feito em 3 a 6 meses com refatoração progressiva.
- **Resolve parcialmente o problema de time to market:** Módulos bem definidos reduzem conflitos de merge e regressões cruzadas.
- **Custo de infraestrutura inalterado:** Sem overhead de orquestração de containers, service mesh ou API gateway.

#### Desvantagens

- **Não resolve escalabilidade granular:** O módulo de relatórios continua escalando junto com o resto da aplicação.
- **Não resolve isolamento de falhas:** Um erro no módulo de cobrança ainda pode derrubar toda a JVM.
- **Deploy continua acoplado:** Mesmo com módulos separados, o deploy é do artefato completo. Uma mudança no módulo de autenticação exige deploy de toda a aplicação.
- **Solução paliativa:** Endereça os sintomas organizacionais, mas não os problemas estruturais de resiliência e escalabilidade.
- **Risco de erosão:** Sem fronteiras físicas, a disciplina de não cruzar fronteiras de módulos tende a se degradar ao longo do tempo, especialmente sob pressão de entrega.

#### Avaliação

O monolito modular é uma opção válida como **passo intermediário** ou como destino final para empresas com equipes menores e menor pressão de escalabilidade. Para a FinFlow, com os drivers D1 (resiliência) e D3 (escalabilidade) sendo primários e não opcionais, esta opção resolve apenas parcialmente o problema. Ela seria adequada se o driver principal fosse exclusivamente a velocidade de entrega do time.

**Veredicto: Descartada como solução definitiva. Considerada como tática de transição dentro da Fase 1 da migração.**

---

### Opção B: Microsserviços (Arquitetura Distribuída por Domínio)

#### Descrição

Decomposição do monolito em serviços independentes, cada um responsável por um domínio de negócio bem definido, com seu próprio banco de dados, ciclo de deploy e contrato de API. Os serviços se comunicam via APIs REST síncronas para operações transacionais e via mensageria assíncrona (ex: Apache Kafka ou AWS SQS/SNS) para eventos de domínio.

A infraestrutura migra para containers Docker orquestrados por Kubernetes (EKS na AWS), com API Gateway para exposição externa, service mesh (Istio ou Linkerd) para comunicação interna, observabilidade centralizada (Prometheus, Grafana, Jaeger/OpenTelemetry) e pipelines CI/CD independentes por serviço.

#### Vantagens

- **Isolamento de falhas real:** Cada serviço falha de forma independente. Circuit breakers e bulkheads previnem propagação.
- **Escalabilidade granular:** O serviço de relatórios pode ter seu próprio pool de instâncias, dimensionado de forma independente.
- **Deploy independente:** Cada squad pode deployar seu serviço sem coordenação com outros squads.
- **Autonomia tecnológica:** Cada serviço pode escolher a tecnologia mais adequada ao seu problema.
- **Alinhamento organizacional:** Um serviço por squad elimina os conflitos de repositório.
- **Resiliência de longo prazo:** A arquitetura suporta crescimento de base de clientes sem refatorações estruturais.

#### Desvantagens

- **Alta complexidade operacional:** Distributed systems are hard. Problemas como consistência eventual, rastreamento distribuído, gerenciamento de configuração, service discovery e segurança entre serviços requerem investimento significativo em plataforma.
- **Latência de rede:** Chamadas que antes eram in-process passam a ser chamadas de rede, introduzindo latência e pontos de falha.
- **Consistência de dados:** Transações distribuídas são complexas. O padrão ACID do banco único é substituído por consistência eventual e padrões como Saga, o que aumenta a complexidade do código de negócio.
- **Overhead de infraestrutura:** EKS, API Gateway, service mesh, múltiplos bancos de dados e filas de mensagens representam custo adicional e complexidade de operação.
- **Curva de aprendizado:** A equipe precisará dominar conceitos de sistemas distribuídos, Kubernetes, observabilidade e padrões como Circuit Breaker, Saga, Outbox e CQRS.
- **Risco de over-engineering:** Serviços mal dimensionados (muito granulares) criam um "distributed monolith" — a pior combinação possível.

#### Avaliação

Esta é a opção que mais diretamente endereça todos os drivers primários. Os riscos são reais, mas gerenciáveis com uma estratégia de migração incremental e investimento adequado em plataforma e capacitação.

**Veredicto: Opção recomendada, com execução incremental e disciplinada.**

---

### Opção C: Serverless (Funções como Serviço)

#### Descrição

Migração dos módulos do monolito para funções AWS Lambda, com API Gateway gerenciado pela AWS, banco de dados migrado para serviços gerenciados (Aurora Serverless, DynamoDB) e orquestração de workflows via AWS Step Functions.

#### Vantagens

- **Escalabilidade automática e granular:** Lambda escala por invocação, sem provisionamento manual.
- **Custo por uso:** Paga-se apenas pelo tempo de execução, eliminando custo de instâncias ociosas.
- **Zero gerenciamento de infraestrutura:** A AWS gerencia patching, disponibilidade e escalabilidade da plataforma de execução.
- **Deploy independente por função:** Cada Lambda é um artefato independente.

#### Desvantagens

- **Cold start:** Funções Java em Lambda têm cold start de 1 a 5 segundos, inaceitável para APIs financeiras síncronas com SLA de latência.
- **Limites de execução:** Lambda tem timeout máximo de 15 minutos, inadequado para processamentos de relatórios longos.
- **Vendor lock-in severo:** A migração para serverless AWS cria dependência profunda de serviços proprietários (Step Functions, SQS, DynamoDB), tornando futuras migrações extremamente custosas.
- **Complexidade de debugging e observabilidade:** Rastreamento de uma transação que passa por múltiplas Lambdas é significativamente mais complexo do que em um serviço tradicional.
- **Não adequado para workloads financeiros de alta frequência:** Operações transacionais com consistência forte são difíceis de implementar em arquiteturas serverless puras.
- **Custo imprevisível em alta carga:** O modelo de custo por invocação pode ser mais caro que instâncias reservadas em cenários de alta utilização contínua.

#### Avaliação

Serverless é uma excelente opção para workloads específicos e bem definidos (ex: processamento de webhooks de bancos, geração assíncrona de relatórios, notificações). Não é adequado como arquitetura primária para uma plataforma financeira transacional com os requisitos de latência e consistência da FinFlow.

**Veredicto: Descartada como arquitetura primária. Considerada para casos de uso específicos dentro da arquitetura de microsserviços (ex: processamento assíncrono de relatórios, notificações por e-mail/SMS).**

---

### 4.1 Matriz de Decisão

| Critério | Peso | Monolito Modular | Microsserviços | Serverless |
|---|---|---|---|---|
| Isolamento de falhas | 25% | ⭐⭐ (2) | ⭐⭐⭐⭐⭐ (5) | ⭐⭐⭐⭐ (4) |
| Escalabilidade granular | 20% | ⭐ (1) | ⭐⭐⭐⭐⭐ (5) | ⭐⭐⭐⭐⭐ (5) |
| Autonomia de deploy | 20% | ⭐⭐ (2) | ⭐⭐⭐⭐⭐ (5) | ⭐⭐⭐⭐⭐ (5) |
| Complexidade operacional (inverso) | 15% | ⭐⭐⭐⭐⭐ (5) | ⭐⭐⭐ (3) | ⭐⭐ (2) |
| Adequação ao domínio financeiro | 10% | ⭐⭐⭐⭐ (4) | ⭐⭐⭐⭐⭐ (5) | ⭐⭐ (2) |
| Risco de execução (inverso) | 10% | ⭐⭐⭐⭐⭐ (5) | ⭐⭐⭐ (3) | ⭐⭐ (2) |
| **Score Ponderado** | **100%** | **2,75** | **4,40** | **3,60** |

*Escala: 1 (muito baixo) a 5 (muito alto). Critérios "inverso" pontuam mais alto quando o risco/complexidade é menor.*

---

## 5. Decisão Recomendada

### 5.1 Decisão

**Adotar arquitetura de microsserviços com decomposição incremental por domínio de negócio, utilizando o Strangler Fig Pattern como estratégia de transição.**

### 5.2 Justificativa

A decisão por microsserviços não é uma escolha de moda tecnológica. É a única das três opções que endereça simultaneamente os três drivers primários: isolamento de falhas (D1), autonomia de entrega (D2) e escalabilidade granular (D3).

O Strangler Fig Pattern — extrair serviços do monolito de forma incremental, redirecionando tráfego gradualmente — é a estratégia de migração escolhida porque:

1. **Elimina o risco de big bang:** O monolito permanece operacional durante toda a migração. Não existe um "dia D" em que tudo muda de uma vez.
2. **Permite aprendizado incremental:** A equipe aprende a operar microsserviços com um serviço de menor criticidade antes de migrar os domínios mais sensíveis.
3. **Entrega valor incremental:** Cada serviço extraído já traz benefícios reais (deploy independente, escalabilidade isolada) antes que a migração esteja completa.
4. **Reversível em cada etapa:** Se um serviço extraído apresentar problemas, o tráfego pode ser revertido para o monolito sem impacto nos demais.

### 5.3 Princípios Arquiteturais da Nova Arquitetura

Os seguintes princípios guiarão todas as decisões de design durante e após a migração:

**P1 — Database per Service:** Cada microsserviço possui seu próprio banco de dados ou schema isolado. Nenhum serviço acessa diretamente o banco de dados de outro serviço. A comunicação entre domínios é sempre via API ou eventos.

**P2 — Design para Falha:** Todo serviço assume que os serviços dos quais depende podem falhar. Circuit breakers (Resilience4j), timeouts explícitos e fallbacks são obrigatórios em todas as chamadas inter-serviço.

**P3 — Contrato Primeiro (API-First):** Antes de implementar um serviço, seu contrato de API (OpenAPI 3.x) é definido, revisado e versionado. Mudanças de contrato seguem versionamento semântico e política de deprecação.

**P4 — Observabilidade como Cidadão de Primeira Classe:** Logs estruturados (JSON), métricas (Prometheus), rastreamento distribuído (OpenTelemetry) e alertas são implementados desde o primeiro commit de cada serviço, não como adição posterior.

**P5 — Ownership Claro:** Cada serviço tem um squad proprietário. O squad proprietário é responsável por design, implementação, testes, deploy, monitoramento e on-call do serviço.

**P6 — Comunicação Assíncrona por Padrão:** Quando não há necessidade de resposta síncrona imediata, a comunicação entre serviços deve ser assíncrona via eventos (Kafka). Isso reduz acoplamento temporal e aumenta resiliência.

**P7 — Idempotência:** Todas as operações que modificam estado devem ser idempotentes, especialmente em contextos de processamento de mensagens assíncronas.

### 5.4 Visão da Arquitetura Alvo

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENTES                                  │
│              React SPA / Mobile / Integrações                    │
└─────────────────────────┬───────────────────────────────────────┘
                          │ HTTPS
┌─────────────────────────▼───────────────────────────────────────┐
│                    API GATEWAY (AWS API GW / Kong)               │
│         Autenticação JWT, Rate Limiting, Roteamento              │
└──┬──────────┬──────────┬──────────┬──────────┬──────────────────┘
   │          │          │          │          │
   ▼          ▼          ▼          ▼          ▼
┌──────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌──────────┐
│ Auth │ │Clientes│ │Cobranç.│ │Relatór.│ │  Fiscal  │
│ Svc  │ │  Svc   │ │  Svc   │ │  Svc   │ │   Svc    │
│      │ │        │ │        │ │        │ │          │
│ PG   │ │  PG    │ │  PG    │ │ClickH. │ │   PG     │
└──────┘ └────────┘ └────────┘ └────────┘ └──────────┘
   │          │          │          │          │
   └──────────┴──────────┴──────────┴──────────┘
                          │
              ┌───────────▼───────────┐
              │    Apache Kafka       │
              │  (Event Bus Central)  │
              └───────────────────────┘
                          │
              ┌───────────▼───────────┐
              │  Notification Service │
              │  (E-mail, SMS, Push)  │
              └───────────────────────┘

Infraestrutura: AWS EKS + RDS por serviço + ElastiCache
Observabilidade: Prometheus + Grafana + Jaeger + ELK Stack
```

---

## 6. Estratégia de Decomposição por Domínio

### 6.1 Identificação dos Domínios de Negócio

A decomposição foi realizada aplicando os princípios de Domain-Driven Design (DDD), especificamente a técnica de Event Storming para identificar bounded contexts. Os domínios identificados são:

| Domínio | Responsabilidade | Criticidade | Acoplamento Atual |
|---|---|---|---|
| **Autenticação/Identidade** | Login, sessões, permissões, MFA | Crítica | Alto (transversal) |
| **Clientes/Tenants** | Cadastro, configurações, planos | Alta | Alto |
| **Contas a Receber** | Faturas, recebimentos, conciliação | Crítica | Alto |
| **Cobrança** | Régua de cobrança, inadimplência, negativação | Crítica | Médio |
| **Contas a Pagar** | Fornecedores, pagamentos, aprovações | Alta | Médio |
| **Relatórios** | Dashboards, exportações, analytics | Média | Baixo |
| **Fiscal/Tributário** | NF-e, NFS-e, obrigações acessórias | Alta | Médio |
| **Integrações Bancárias** | Open Banking, boletos, PIX, TED | Crítica | Baixo |
| **Notificações** | E-mail, SMS, push, webhooks | Baixa | Baixo |

### 6.2 Critérios de Priorização para Extração

Os domínios foram priorizados com base em quatro critérios:

1. **Impacto no negócio se extraído:** Quanto valor a extração deste domínio entrega imediatamente?
2. **Risco de extração:** Quão complexo e arriscado é extrair este domínio?
3. **Acoplamento com o monolito:** Quantas dependências internas precisam ser desfeitas?
4. **Alinhamento com os drivers primários:** Este domínio está diretamente relacionado aos problemas de resiliência, velocidade ou escalabilidade?

### 6.3 Sequência Recomendada de Extração

#### Primeiro a Extrair: Relatórios (Driver D3 — Escalabilidade)

**Justificativa:** O módulo de relatórios apresenta o maior desequilíbrio entre consumo de recursos e frequência de uso (70% dos recursos em 10% do tempo). É também o domínio com menor acoplamento transacional com o restante do sistema — relatórios são predominantemente operações de leitura, não modificam estado e podem tolerar eventual consistency.

A extração do serviço de relatórios permite:
- Escalar o módulo de forma independente (instâncias maiores, apenas quando necessário)
- Migrar para um banco de dados analítico (ClickHouse ou Amazon Redshift) mais adequado para queries OLAP
- Liberar imediatamente 70% dos recursos das instâncias do monolito, reduzindo custos
- Validar a estratégia de extração com um domínio de menor risco transacional

#### Segundo a Extrair: Notificações (Domínio de Suporte)

**Justificativa:** Notificações são um domínio de suporte com acoplamento unidirecional — outros domínios disparam notificações, mas notificações não depend