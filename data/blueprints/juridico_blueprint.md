# Blueprint: Memorando Juridico Interno — Compliance LGPD
# Delivery Architecture (Human-DA) | Condition: Human-Designed
# Genre: Memorando juridico interno brasileiro
# Author: Renato Aparecido Gomes (advogado, 20+ anos experiencia)
# Case: MedCloud Tecnologia Ltda. — Notificacao ANPD

---

## META

- **Tipo documental**: Memorando juridico interno (parecer consultivo)
- **Destinatario**: Diretoria (nao-juristas com poder decisorio)
- **Tom**: Tecnico-acessivel — precisao juridica sem hermetismo
- **Registro linguistico**: Formal brasileiro, terceira pessoa, sem anglicismos desnecessarios
- **Extensao esperada**: 2.500–4.000 palavras
- **Assinatura**: Nome do parecerista, numero OAB, data de emissao. Sem assinatura, o memorando perde valor como evidencia de assessoria juridica qualificada.

---

## ESTRUTURA DE SECOES (ordem fixa)

### 1. EMENTA (5% do documento)
- **Funcao**: Resumo executivo para tomada de decisao imediata
- **Conteudo obrigatorio**:
  - Identificacao do caso (notificacao ANPD, data, objeto)
  - Classificacao geral de risco (sintese: ex. "risco alto predominante")
  - Quantidade de alegacoes analisadas
  - Conclusao-chave em 1-2 frases (ex. "Ha exposicao real em 3 de 4 pontos")
  - Prazo critico mais urgente
- **Densidade**: CONCISO — maximo 200 palavras
- **Formato**: Paragrafo unico ou lista numerada curta
- **NAO PODE**: Conter analise juridica detalhada, citacoes de artigos, ou argumentacao

### 2. FATOS DO CASO (10% do documento)
- **Funcao**: Fixar os fatos relevantes de forma neutra, separando fato de analise
- **Conteudo obrigatorio**:
  - Identificacao da empresa (razao social, sede, atividade)
  - Natureza da plataforma e volume de dados tratados (150.000 pacientes)
  - Categorias de dados: cadastrais, saude (sensiveis), biometricos (sensiveis) — tratar biometria como categoria autonoma com agravantes proprios (Art. 11, par. 3)
  - Evento deflagrador: notificacao ANPD + denuncia de ex-funcionario
  - Listagem das 4 alegacoes na denuncia (sem analise)
  - Status processual: se a empresa ja respondeu a notificacao ou se o prazo esta correndo (reproduzir prazo exato da notificacao; se nao informado, premissa conservadora de 10 dias uteis)
  - Verificar se o acesso do ex-funcionario denunciante foi revogado tempestivamente (risco de acesso pos-desligamento)
- **Densidade**: FACTUAL E ENXUTO — sem adjetivos valorativos
- **Formato**: Paragrafos curtos ou lista
- **NAO PODE**: Antecipar conclusoes, usar termos como "grave", "preocupante", "inaceitavel"

### 3. ENQUADRAMENTO LEGAL (25% do documento)
- **Funcao**: Mapear o arcabouco normativo aplicavel ANTES de analisar cada alegacao
- **Conteudo obrigatorio**:
  - LGPD (Lei 13.709/2018): artigos nucleares para o caso
    - Art. 5o, II — dado pessoal sensivel (saude, biometria)
    - Art. 7o — bases legais para dados pessoais comuns
    - Art. 11 — bases legais para dados sensiveis (rol taxativo)
    - Art. 14 — tratamento de dados de criancas/adolescentes (se aplicavel ao contexto saude)
    - Art. 33 — transferencia internacional de dados
    - Art. 37 — registro de operacoes de tratamento
    - Art. 38 — Relatorio de Impacto a Protecao de Dados Pessoais (RIPD)
    - Art. 41 — Encarregado (DPO)
    - Art. 46 — medidas de seguranca
    - Art. 52 — sancoes administrativas (multa ate 2% faturamento, limitada a R$ 50mi)
  - Regulamentacoes ANPD:
    - Resolucao CD/ANPD no 2/2022 (dosimetria de sancoes)
    - Resolucao CD/ANPD no 4/2023 (RIPD)
    - Resolucao CD/ANPD no 18/2024 (atuacao do encarregado/DPO — relevante para alegacao 4)
    - Resolucao CD/ANPD no 19/2024 (transferencia internacional de dados — VIGENTE, prazo de adequacao CPCs expirou em 23/08/2025)
    - Resolucao CD/ANPD no 32/2026 (adequacao mutua Brasil-UE — EUA NAO possuem decisao de adequacao)
    - Enunciado CD/ANPD no 1/2023 (bases legais para dados de criancas/adolescentes — ampliativo)
    - Guia orientativo sobre agentes de tratamento
    - Guia orientativo sobre legitimo interesse (secao sobre menores)
  - Normas setoriais de saude:
    - Resolucao CFM no 1.821/2007 (prontuario eletronico — vigente, art. 10 revogado pela CFM 2.218/2018)
    - Resolucao CFM no 2.218/2018 (revoga selo CFM/SBIS obrigatorio)
    - Resolucao CFM no 2.314/2022 (telemedicina — registro em S-RES com NGS2)
    - Resolucao CREMESP no 385/2024 (prontuario eletronico no Estado de SP — norma recente e especifica)
    - Lei 13.787/2018 (digitalizacao de prontuarios — vigente, sem alteracoes, remete expressamente a LGPD)
    - Lei 14.510/2022 (telessaude permanente — observancia obrigatoria da Lei 13.787 e LGPD)
    - Decreto 12.560/2025 (RNDS — Rede Nacional de Dados em Saude, interoperabilidade obrigatoria)
    - Manual SBIS/CFM v5.2 (certificacao S-RES — referencia de qualidade, nao mais obrigatoria)
  - Protecao de menores (se aplicavel ao caso — plataforma de saude pode tratar dados de pacientes menores):
    - Art. 14 LGPD (tratamento de dados de criancas e adolescentes)
    - Lei 15.211/2025 — ECA Digital (em vigor desde 17/03/2026, fiscalizacao ANPD)
    - Decreto 12.880/2025 (regulamenta o ECA Digital)
    - ADI 5.545/STF (coleta compulsoria de dados geneticos de recem-nascidos — invalidada)
    - REsp 2.201.694-SP/STJ (dano moral presumido por compartilhamento indevido de dados)
  - Marco Civil da Internet (Lei 12.965/2014): Art. 11 — citar apenas se necessario para reforcar argumento sobre armazenamento no Brasil; a LGPD e lex specialis
- **Densidade**: DENSA — citar artigos com redacao resumida do dispositivo
- **Formato**: Sublistas agrupadas por diploma normativo
- **NAO PODE**: Repetir integralmente a redacao dos artigos; deve parafrasear e indicar a essencia

### 4. ANALISE DE RISCO POR ALEGACAO (40% do documento — SECAO PRINCIPAL)
- **Funcao**: Nucleo do memorando — analise juridica estruturada de cada alegacao
- **Formato obrigatorio**: Matriz repetida para cada uma das 4 alegacoes

#### Modelo por alegacao:

```
#### 4.X — [TITULO DA ALEGACAO]

**Alegacao**: [descricao factual do que foi denunciado]

**Base legal aplicavel**: [artigos especificos — LGPD, ANPD, setorial]

**Analise**:
- Obrigatoriedade legal: [a empresa tinha obrigacao? qual o fundamento?]
- Situacao factual provavel: [o que a empresa provavelmente fez ou deixou de fazer]
- Agravantes: [dados sensiveis, volume, setor saude, menores, etc.]
- Atenuantes: [boa-fe, medidas parciais, cooperacao, etc.]

**Classificacao de risco**: [BAIXO | MEDIO | ALTO | CRITICO]
- Probabilidade de sancao: [justificativa]
- Impacto potencial: [multa, advertencia, suspensao, reputacional]

**Recomendacao imediata**: [acao corretiva em 1-2 linhas]

**Condicional**: Se a empresa demonstrar que [premissa factual diferente], a classificacao muda para [nivel alternativo].
```

- **Alegacoes a analisar (nesta ordem)**:
  1. Ausencia de RIPD (Art. 38 LGPD + Res. CD/ANPD 4/2023) — analisar sem classificacao previa; justificar a partir da dosimetria
  2. Compartilhamento com analytics sem base legal (Art. 11, Art. 7o LGPD) — avaliar se anonimizacao e real ou pseudonimizacao
  3. Armazenamento em servidores EUA sem clausulas padrao (Art. 33 LGPD + Res. CD/ANPD 19/2024) — analisar sem classificacao previa; considerar que prazo CPCs ja expirou
  4. Ausencia de DPO formal (Art. 41 LGPD + Res. CD/ANPD 18/2024) — analisar sem classificacao previa
- **Nota adicional**: Verificar proativamente se ha vulnerabilidades alem das 4 alegadas (ex.: ausencia de registro de operacoes — Art. 37; base legal principal do tratamento de dados de saude — Art. 11). Se identificadas, incluir como "Observacoes adicionais" ao final da Secao 4, sem formato de alegacao.
- **Analise cruzada obrigatoria**: Apos as 4 analises individuais, incluir paragrafo identificando interacoes entre alegacoes — onde duas ou mais se reforcam mutuamente ou constituem violacao composta (ex.: dados compartilhados com analytics que passam por servidores nos EUA = Alegacoes 2+3 combinadas).
- **Consciencia documental**: O memorando pode ser utilizado como evidencia de boa-fe em eventual processo administrativo da ANPD. Redigir com essa consciencia — fundamentacao robusta beneficia nao apenas a decisao imediata mas a defesa futura.

- **Densidade**: MAXIMA — esta secao deve ser a mais profunda e fundamentada
- **Invariantes de qualidade**:
  - DEVE distinguir "anonimizacao" de "pseudonimizacao" na alegacao 2
  - DEVE mencionar que dados de saude sao sensiveis (Art. 5o, II) e agravam TODAS as alegacoes
  - DEVE considerar a dosimetria (Res. CD/ANPD 2/2022) ao classificar risco
  - DEVE indicar faixa de multa possivel quando classificar risco alto/critico
  - NAO PODE usar classificacao identica para todas as alegacoes (diferenciar gravidades)
  - NAO PODE omitir agravantes decorrentes do setor saude

### 5. RECOMENDACOES COM PRAZOS (15% do documento)
- **Funcao**: Plano de acao executavel pela diretoria
- **Formato obrigatorio**: Tabela ou lista estruturada

```
| # | Acao                          | Prazo        | Responsavel sugerido | Prioridade |
|---|-------------------------------|--------------|----------------------|------------|
| 1 | [acao concreta]               | [XX dias]    | [area/cargo]         | CRITICA    |
```

- **Conteudo obrigatorio**:
  - Resposta a notificacao ANPD (prazo legal — verificar prazo da notificacao). Apresentar 3 cenarios de resposta: (a) reconhecer e cooperar integralmente (atenuante maximo na dosimetria), (b) contestar parcialmente (contestar alegacoes onde ha defesa, cooperar nas demais), (c) contestar integralmente (alto risco — justificavel apenas se empresa tiver evidencia documental de conformidade). Recomendar cenario com justificativa.
  - Linha do tempo visual com marcos: [Hoje] → [Prazo ANPD ~10d] → [DPO nomeado ~15d] → [Analytics suspenso/regularizado ~30d] → [CPCs incorporadas ~45d] → [RIPD concluido ~60d]
  - Elaboracao do RIPD (prazo sugerido: 30-60 dias) — se nao ha competencia interna, sugerir DPO as a Service ou consultoria especializada
  - Nomeacao formal de DPO + comunicacao a ANPD (Res. CD/ANPD 18/2024)
  - Revisao do compartilhamento com analytics — distinguir suspensao total vs suspensao apenas de dados identificaveis (manter analytics com dados anonimizados se anonimizacao for real)
  - Adequacao da transferencia internacional — verificar se provedor cloud ja oferece CPCs pre-aprovadas; se sim, incorporar; se nao, renegociar ou considerar repatriacao
  - Revisao de politica de privacidade e termos de uso
  - Treinamento da equipe
  - Revisao de politica de offboarding (revogacao de acesso a dados pessoais no desligamento)
  - Verificacao/criacao do registro de operacoes de tratamento (Art. 37)
  - Comunicacao de incidentes: implementar processo de notificacao em 3 dias uteis (Res. CD/ANPD 15/2024, se aplicavel)
- **Densidade**: OBJETIVA — acoes concretas, prazos realistas, sem teoria
- **Invariantes**:
  - DEVE ter pelo menos 10 acoes
  - DEVE ter pelo menos uma acao com prazo "imediato" (ate 5 dias uteis)
  - DEVE ter pelo menos uma acao de medio prazo (30-90 dias)
  - NAO PODE sugerir prazos vagos ("o mais breve possivel", "assim que possivel")
  - DEVE incluir coluna "Custo estimado" (faixa: baixo/medio/alto) para cada acao — diretoria decide com base em risco vs custo
  - SE faturamento disponivel, calcular faixa de multa maxima por alegacao (2% faturamento bruto, limitado a R$ 50mi por infracao) para contextualizar custo das recomendacoes vs custo da inacao

### 6. RESSALVAS (parte dos 10% ementa+ressalvas)
- **Funcao**: Disclaimers profissionais e limitacoes da analise
- **Conteudo obrigatorio**:
  - Analise baseada nas informacoes fornecidas (sem auditoria in loco)
  - Necessidade de verificacao factual das alegacoes junto a equipe tecnica
  - Legislacao e regulamentacao sujeitas a alteracao (especialmente ANPD)
  - Parecer nao substitui assessoria especializada em protecao de dados (se aplicavel)
  - Privilegio advogado-cliente (confidencialidade do memorando)
  - A inacao apos ciencia dos riscos apresentados neste memorando pode ser interpretada como negligencia deliberada em eventual processo administrativo da ANPD
- **Densidade**: BREVE — 4-6 itens em lista
- **NAO PODE**: Ser tao extenso que dilua a forca do memorando

---

## INVARIANTES GLOBAIS DE QUALIDADE

### DEVE (hard requirements)
1. Usar numeracao consistente de artigos (ex. "Art. 11 da LGPD", nao "artigo 11", nao "Art. 11, LGPD")
2. Citar pelo menos 8 dispositivos legais distintos (artigos de lei ou resolucoes)
3. Classificar riscos usando escala de 4 niveis: BAIXO / MEDIO / ALTO / CRITICO
4. Manter separacao estrita entre FATOS (secao 2) e ANALISE (secao 4)
5. Incluir referencia a sancoes possiveis (Art. 52 LGPD) em pelo menos 2 alegacoes
6. Tratar dados de saude e biometricos como categorias sensiveis distintas
7. Enderecar a questao da anonimizacao vs. pseudonimizacao
8. Incluir pelo menos 1 referencia a norma setorial de saude
9. Manter coerencia interna: risco classificado na secao 4 deve refletir prioridade na secao 5 (CRITICO = prazo imediato 1-5 dias; ALTO = curto prazo 15-30 dias; MEDIO = medio prazo 30-90 dias; BAIXO = programavel)
10. Citar pelo menos 1 precedente sancionatorio da ANPD como ancora de referencia (ex.: caso Telekall — multa de R$14.400 por tratamento sem base legal e ausencia de DPO)
11. Priorizar 5-6 normas nucleares na analise; citar as demais apenas quando diretamente aplicaveis a alegacao especifica

### NAO PODE (hard prohibitions)
1. Inventar numeros de resolucao ANPD — se incerto, indicar "verificar vigencia"
2. Usar linguagem alarmista ou sensacionalista
3. Omitir qualquer das 4 alegacoes
4. Copiar trechos longos de legislacao (parafrasear)
5. Sugerir que a empresa esta "em conformidade" sem evidencia
6. Usar ingles quando ha equivalente tecnico em portugues (ex. usar "encarregado" alem de "DPO")
7. Fazer afirmacoes categoricas sobre resultado de eventual processo administrativo

---

## DIRETIVAS DE DENSIDADE

| Secao              | Densidade | Justificativa                                           |
|--------------------|-----------|--------------------------------------------------------|
| Ementa             | Baixa     | Tomador de decisao precisa do resumo, nao do detalhe    |
| Fatos              | Media     | Precisao factual sem analise — conciso mas completo     |
| Enquadramento      | Alta      | Fundamentacao normativa robusta, mas sem copiar artigos |
| Analise de risco   | Maxima    | Nucleo do memorando — profundidade total                |
| Recomendacoes      | Media     | Concreto e executavel, sem teoria juridica              |
| Ressalvas          | Baixa     | Protocolar — breve e padronizado                        |

---

## ALOCACAO DE PRIORIDADE

```
Analise de risco por alegacao ████████████████████ 40%
Enquadramento legal            ██████████████      25%
Recomendacoes com prazos       ████████            15%
Fatos do caso                  █████               10%
Ementa                         ███                  5%
Ressalvas                      ███                  5%
```

---

## NOTAS DO ESPECIALISTA (heuristicas de pratica profissional)

1. **Alegacao 2 (analytics)**: A distincao anonimizacao/pseudonimizacao e decisiva. Se os dados compartilhados permitem reidentificacao (ex. cruzamento com outros bancos), nao ha anonimizacao real e a LGPD se aplica integralmente. Este ponto deve ser tratado com nuance.

2. **Alegacao 3 (servidores EUA)**: A Resolucao CD/ANPD 19/2024 regulamentou a transferencia internacional e o prazo de adequacao das CPCs expirou em 23/08/2025. Os EUA NAO possuem decisao de adequacao (apenas a UE tem, via Res. 32/2026). A MedCloud DEVE ter CPCs incorporadas integralmente nos contratos com provedores cloud nos EUA. Agravantes: CLOUD Act e FISA Section 702 (vigilancia governamental dos EUA), ausencia de lei federal abrangente de protecao de dados nos EUA, e precedente Schrems I/II da UE. A ANPD sinalizou que transferencia internacional esta "no radar fiscalizatorio" (Migalhas, marco/2026). Recomendacao pratica: CPCs + Transfer Impact Assessment (TIA) + criptografia + pseudonimizacao.

3. **Setor saude como agravante transversal**: Todas as 4 alegacoes sao agravadas pelo fato de tratar dados de saude. A dosimetria da ANPD (Res. 2/2022) considera a natureza dos dados como criterio. Isso deve permear toda a analise, nao ser mencionado apenas uma vez.

4. **Tom para a diretoria**: Memorando interno nao e petitorial. Nao advoga por uma posicao — apresenta riscos e opcoes. O tom deve ser de aconselhamento ("recomenda-se", "sugere-se a adocao"), nao de imposicao.

5. **Prazo da notificacao ANPD**: A resposta a notificacao deve ser a primeira recomendacao. Prazos da ANPD sao tipicamente de 10-15 dias uteis. Perder o prazo agrava qualquer situacao.

6. **Dados de menores (Art. 14)**: Se a plataforma de saude da MedCloud trata dados de pacientes menores de 18 anos (provavel em contexto de saude), incide dupla protecao: Art. 11 (dados sensiveis de saude) + Art. 14 (menores). O Enunciado CD/ANPD 1/2023 permite todas as bases legais dos Arts. 7 e 11, desde que prevaleca o melhor interesse. Para saude, a base legal "tutela da saude" (Art. 11, II, "f") dispensa consentimento, mas o Art. 14, par. 1 exige consentimento parental especifico para criancas (ate 12 anos). Distinguir crianca (ate 12 — consentimento parental obrigatorio) de adolescente (12-18 — melhor interesse sem exigencia de consentimento parental). O ECA Digital (Lei 15.211/2025, em vigor desde 17/03/2026) adiciona obrigacoes para plataformas digitais que atendem menores.

7. **Normas setoriais atualizadas**: O arcabouco de prontuario eletronico se expandiu significativamente alem da CFM 1.821/2007. A Resolucao CREMESP 385/2024 e a mais recente e especifica para SP (governanca de TI, plano de contingencia, treinamento). O Decreto 12.560/2025 (RNDS) torna a interoperabilidade obrigatoria. A certificacao SBIS nao e mais obrigatoria (CFM 2.218/2018 revogou art. 10), mas continua como referencia de qualidade.

8. **Precedentes sancionatorios relevantes**:
   - Caso Telekall (2023): primeira multa ANPD — R$14.400 por tratamento sem base legal e ausencia de DPO (microempresa)
   - Caso RaiaDrogasil (2025): medida preventiva + processo administrativo sancionador por uso de biometria em programa de fidelidade de farmacias sem alternativa de identificacao. Precedente direto para a MedCloud: biometria + saude + ausencia de alternativa = agravantes combinados
   - ANPD fiscalizou 20 empresas por falta de encarregado e canal de comunicacao adequado (2024) — demonstra que Alegacao 4 (ausencia de DPO) esta no radar ativo

9. **Controlador vs. Operador**: A MedCloud provavelmente e OPERADORA em relacao as clinicas/hospitais (que sao controladores dos dados dos pacientes) e CONTROLADORA de dados proprios (funcionarios, cadastros). Essa dupla qualificacao afeta responsabilidades: como operadora, a MedCloud age por instrucao do controlador (Art. 39); como controladora, responde diretamente. O memorando deve enderecar essa distincao na Secao 2 (Fatos).

10. **Quadro-sintese visual**: Instruir o modelo a incluir, ao final da Secao 4, uma matriz 2x2 (Probabilidade x Impacto) posicionando as 4 alegacoes. Facilita comunicacao visual com diretoria nao-jurista.
