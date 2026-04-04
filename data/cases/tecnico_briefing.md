# Caso: Relatorio de Arquitetura — Migracao de Monolito para Microsservicos

## Contexto

A **FinFlow S.A.** opera uma plataforma de gestao financeira para PMEs com aproximadamente 8.000 clientes ativos. O sistema atual e um monolito em Java (Spring Boot) com as seguintes caracteristicas:

- **Backend:** Java 17, Spring Boot 3.x, monolito unico com ~180.000 LOC
- **Banco de dados:** PostgreSQL 15, schema unico com 147 tabelas
- **Frontend:** React 18, SPA conectada via REST API
- **Infra:** 3 instancias EC2 (c5.2xlarge) + RDS Multi-AZ + ElastiCache Redis
- **Deploy:** Jenkins pipeline, deploy blue-green manual, ~1 deploy por semana

## Problemas atuais

1. **Time to market:** Features novas levam 4-6 semanas (meta: 1-2 semanas)
2. **Escalabilidade:** Modulo de relatorios consome 70% dos recursos mas so e usado em 10% do tempo
3. **Confiabilidade:** Um bug em cobranca derrubou todo o sistema por 4 horas no ultimo trimestre
4. **Equipe:** 3 squads de 4 devs cada, todos trabalhando no mesmo repositorio com conflitos frequentes

## Tarefa

Elabore um **relatorio de arquitetura** no formato ADR (Architecture Decision Record) expandido, cobrindo:

1. Analise dos drivers de decisao (por que migrar, e por que agora)
2. Opcoes consideradas (modular monolith, microsservicos, serverless)
3. Decisao recomendada com justificativa
4. Estrategia de decomposicao (quais dominios extrair primeiro e por que)
5. Plano de migracao em fases com riscos e mitigacoes
6. Impacto em equipe, processos e custos

## Requisitos do documento

- Destinatario: CTO e equipe de engenharia
- Genero: ADR (Architecture Decision Record) expandido
- Tom: Tecnico e decisional
- Extensao: Documento completo, sem limite de palavras
