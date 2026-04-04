# MEMORANDO JURÍDICO INTERNO
## MedCloud Tecnologia Ltda.

---

```
┌─────────────────────────────────────────────────────────────────────┐
│                    ⚖ DOCUMENTO PRIVILEGIADO                         │
│         Comunicação Protegida pelo Sigilo Advogado-Cliente          │
│      Confidencial — Circulação Restrita à Diretoria Executiva       │
└─────────────────────────────────────────────────────────────────────┘
```

---

| | |
|---|---|
| **PARA** | Diretoria Executiva — MedCloud Tecnologia Ltda. |
| **DE** | Departamento Jurídico e Assessoria de Compliance |
| **DATA** | São Paulo, 14 de julho de 2025 |
| **REF.** | Notificação ANPD — Análise de Compliance LGPD e Plano de Ação Corretiva |
| **N.º DO MEMORANDO** | MJI-2025-047 |
| **CLASSIFICAÇÃO** | 🔴 CONFIDENCIAL — PRIVILEGIADO |
| **PRIORIDADE** | 🔴 URGENTE |

---

---

# SUMÁRIO EXECUTIVO

A MedCloud Tecnologia Ltda. recebeu notificação formal da Autoridade Nacional de Proteção de Dados (ANPD) contendo quatro alegações de irregularidade no tratamento de dados pessoais sensíveis de aproximadamente 150.000 pacientes. Este memorando analisa cada alegação sob o marco regulatório da Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018) e normas correlatas, avalia o nível de risco jurídico associado a cada situação e apresenta um plano de ação corretiva estruturado.

**A conclusão central deste documento é grave: duas das quatro alegações configuram potencial violação crítica da LGPD, com risco imediato de sanções administrativas que podem alcançar R$ 50.000.000,00 (cinquenta milhões de reais) por infração, além de exposição à responsabilidade civil e dano reputacional severo.**

---

## Quadro-Resumo das Alegações e Níveis de Risco

| # | Alegação | Nível de Risco | Sanção Potencial Máxima |
|---|---|---|---|
| 1 | Ausência de RIPD (Relatório de Impacto à Proteção de Dados) | 🟠 **ALTO** | Multa + Advertência |
| 2 | Compartilhamento de dados com empresa de analytics sem base legal | 🔴 **CRÍTICO** | Multa de até R$ 50M + Suspensão |
| 3 | Armazenamento em servidores nos EUA sem cláusulas contratuais padrão | 🔴 **CRÍTICO** | Multa de até R$ 50M + Bloqueio de dados |
| 4 | Ausência de DPO formalmente nomeado | 🟡 **MÉDIO** | Advertência + Multa moderada |

---

## Cinco Ações Prioritárias Imediatas

1. **Responder formalmente à ANPD dentro do prazo notificado**, demonstrando boa-fé, cooperação e compromisso com a regularização — esta ação é a mais urgente e não pode ser postergada sob nenhuma circunstância.
2. **Suspender imediatamente o compartilhamento de dados com a empresa de analytics** até que a base legal seja formalmente estabelecida e documentada.
3. **Iniciar negociação e assinatura de cláusulas contratuais padrão** com o provedor de serviços em nuvem nos Estados Unidos para regularizar a transferência internacional de dados.
4. **Nomear e registrar formalmente o DPO (Encarregado de Dados)**, comunicando sua identidade e dados de contato à ANPD e tornando essas informações públicas.
5. **Contratar ou designar equipe especializada para elaboração do RIPD** com caráter de urgência, priorizando as operações de tratamento de maior risco.

---

---

# SEÇÃO 1 — INTRODUÇÃO E CONTEXTO

## 1.1 Objeto do Memorando

O presente memorando jurídico interno tem por objeto a análise das alegações contidas na notificação encaminhada pela Autoridade Nacional de Proteção de Dados (ANPD) à MedCloud Tecnologia Ltda., empresa que opera plataforma de Software como Serviço (SaaS) voltada à gestão de prontuários eletrônicos para clínicas e hospitais de médio porte.

O documento destina-se exclusivamente à Diretoria Executiva da MedCloud e integra o conjunto de comunicações protegidas pelo sigilo profissional entre advogado e cliente, não devendo ser compartilhado com terceiros sem autorização expressa do Departamento Jurídico.

## 1.2 Origem da Notificação da ANPD

A ANPD encaminhou notificação formal à MedCloud Tecnologia Ltda. solicitando esclarecimentos sobre práticas de tratamento de dados pessoais sensíveis. A notificação foi motivada por denúncia anônima formulada por ex-funcionário da empresa, que apontou quatro irregularidades específicas nas operações de tratamento de dados realizadas pela companhia.

As alegações formuladas são as seguintes:

- **Alegação 1:** Ausência do Relatório de Impacto à Proteção de Dados Pessoais (RIPD), documento obrigatório para operações de tratamento de dados sensíveis em larga escala;
- **Alegação 2:** Compartilhamento de dados supostamente anonimizados com empresa terceira de analytics, sem base legal claramente estabelecida e documentada;
- **Alegação 3:** Armazenamento de dados pessoais em servidores localizados nos Estados Unidos da América, sem a adoção de cláusulas contratuais padrão ou outros mecanismos de salvaguarda exigidos pela legislação brasileira para transferências internacionais de dados;
- **Alegação 4:** Ausência de nomeação formal do Encarregado pelo Tratamento de Dados Pessoais, conhecido internacionalmente pela sigla DPO (*Data Protection Officer*).

## 1.3 Perfil de Dados Tratados pela MedCloud

A compreensão da extensão e da natureza dos dados tratados pela MedCloud é essencial para a correta avaliação do risco jurídico associado a cada alegação. A plataforma processa dados de aproximadamente **150.000 pacientes**, distribuídos nas seguintes categorias:

- **Dados cadastrais:** nome completo, CPF, endereço, informações de contato — classificados como dados pessoais comuns nos termos do art. 5º, I, da LGPD;
- **Dados de saúde:** prontuários médicos, diagnósticos codificados pelo sistema CID-10, prescrições médicas e resultados de exames — classificados como **dados pessoais sensíveis** nos termos do art. 5º, II, e art. 11 da LGPD, sujeitos a regime jurídico mais restritivo;
- **Dados biométricos:** impressões digitais coletadas para controle de acesso a terminais em clínicas — igualmente classificados como **dados pessoais sensíveis** pelo art. 5º, II, da LGPD.

O fato de a MedCloud tratar predominantemente dados pessoais sensíveis — e em larga escala — é o fator que mais eleva o grau de exposição jurídica da empresa em relação a todas as alegações analisadas neste memorando.

## 1.4 Metodologia de Análise Adotada

A análise contida neste documento foi estruturada da seguinte forma: cada alegação é examinada individualmente, com verificação de sua procedência à luz do arcabouço normativo aplicável, seguida de avaliação do risco jurídico em escala de quatro níveis (Baixo, Médio, Alto e Crítico) e de recomendações corretivas concretas com prazos definidos. As análises individuais são então consolidadas em uma matriz de riscos e em um plano de ação integrado. Por fim, o memorando orienta a estratégia de resposta à ANPD e dimensiona a exposição sancionatória da empresa.

---

---

# SEÇÃO 2 — PANORAMA REGULATÓRIO APLICÁVEL

## 2.1 LGPD — Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018)

A LGPD é o principal marco regulatório aplicável ao caso e estabelece as regras gerais para o tratamento de dados pessoais no Brasil, seja por pessoas físicas ou jurídicas, de direito público ou privado. A lei entrou em vigor em setembro de 2020, com a vigência das sanções administrativas a partir de agosto de 2021.

Para a análise do presente caso, os seguintes dispositivos da LGPD são de aplicação direta:

> **Art. 5º, II** — Define dados pessoais sensíveis como aqueles sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural.

> **Art. 11** — Estabelece que o tratamento de dados pessoais sensíveis somente poderá ocorrer nas hipóteses expressamente previstas na lei, entre as quais: consentimento específico e destacado do titular (inciso I) ou, sem consentimento, para finalidades legítimas e específicas listadas no inciso II, como proteção da vida, tutela da saúde, prevenção de fraudes, entre outras.

> **Art. 38** — Determina que a autoridade nacional poderá determinar ao controlador que elabore relatório de impacto à proteção de dados pessoais, especialmente quando o tratamento tiver como fundamento o legítimo interesse. A Resolução CD/ANPD nº 2/2022 detalhou as hipóteses em que o RIPD é obrigatório independentemente de determinação.

> **Art. 41** — Estabelece a obrigatoriedade de o controlador indicar encarregado pelo tratamento de dados pessoais (DPO), dispondo sobre suas atribuições mínimas.

> **Arts. 33 a 36** — Regulamentam a transferência internacional de dados pessoais, estabelecendo que somente é permitida para países que proporcionem grau de proteção adequado ou mediante a adoção de salvaguardas específicas, como cláusulas contratuais padrão, normas corporativas globais ou certificações.

> **Art. 42** — Prevê a responsabilidade civil do controlador ou operador que causar dano patrimonial, moral, individual ou coletivo ao titular dos dados.

> **Art. 46** — Determina que os agentes de tratamento devem adotar medidas de segurança, técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas.

> **Art. 52** — Estabelece as sanções administrativas aplicáveis pela ANPD, que incluem: advertência, multa simples de até 2% do faturamento da empresa no Brasil no último exercício, limitada a R$ 50.000.000,00 por infração, multa diária, publicização da infração, bloqueio dos dados pessoais, eliminação dos dados pessoais e suspensão parcial do funcionamento do banco de dados.

---

```
╔══════════════════════════════════════════════════════════════════╗
║  💡 O QUE SÃO DADOS PESSOAIS SENSÍVEIS?                         ║
║                                                                  ║
║  São categorias especiais de dados que, por sua natureza,        ║
║  podem gerar discriminação ou danos mais graves ao titular       ║
║  se tratados de forma inadequada. A LGPD confere proteção        ║
║  reforçada a esses dados, exigindo bases legais mais             ║
║  restritas e maior rigor nas medidas de segurança.               ║
║  Dados de saúde e dados biométricos — como os tratados           ║
║  pela MedCloud — estão nessa categoria.                          ║
╚══════════════════════════════════════════════════════════════════╝
```

---

## 2.2 Regulamentações da ANPD Relevantes

A ANPD, criada pelo Decreto nº 8.771/2016 e reestruturada pela Lei nº 13.853/2019, tem competência para editar normas complementares à LGPD, fiscalizar o cumprimento da lei e aplicar sanções. As seguintes regulamentações da ANPD são diretamente aplicáveis ao caso:

**Resolução CD/ANPD nº 2, de 27 de janeiro de 2022** — Regulamenta a elaboração do Relatório de Impacto à Proteção de Dados Pessoais (RIPD), definindo os casos em que sua elaboração é obrigatória, seu conteúdo mínimo e as diretrizes para sua condução. Esta resolução é central para a análise da Alegação 1.

**Resolução CD/ANPD nº 4, de 24 de fevereiro de 2023** — Aprova o Regulamento de Comunicação de Incidente de Segurança com Dados Pessoais, estabelecendo prazos e procedimentos para notificação de incidentes à ANPD e aos titulares.

**Resolução CD/ANPD nº 6, de 2023** — Regulamenta as hipóteses de transferência internacional de dados pessoais, estabelecendo os mecanismos de adequação e as cláusulas contratuais padrão (CCPs) aplicáveis. Esta resolução é central para a análise da Alegação 3.

**Guia Orientativo para Definições dos Agentes de Tratamento de Dados Pessoais e do Encarregado (2021)** — Documento orientativo da ANPD que esclarece as obrigações do DPO e os critérios para sua indicação, aplicável à Alegação 4.

## 2.3 Normas Setoriais de Saúde

O setor de saúde é regulado por um conjunto adicional de normas que se sobrepõem à LGPD, criando obrigações específicas para empresas que tratam dados médicos. A MedCloud, como operadora de plataforma de prontuários eletrônicos, está sujeita a esse regime setorial.

### 2.3.1 Conselho Federal de Medicina (CFM)

**Resolução CFM nº 1.821/2007** — Aprova as normas técnicas concernentes à digitalização e uso dos sistemas informatizados para a guarda e manuseio dos documentos dos prontuários dos pacientes, autorizando a eliminação do papel e a troca de informação identificada em saúde. Estabelece requisitos de segurança, autenticação e integridade para sistemas de prontuário eletrônico.

**Resolução CFM nº 2.299/2021** — Dispõe sobre a emissão de documentos médicos em meio eletrônico, incluindo prescrições, atestados e relatórios, estabelecendo requisitos de autenticação e validade jurídica. É relevante porque a MedCloud processa prescrições eletrônicas, devendo observar os padrões técnicos estabelecidos.

### 2.3.2 Agência Nacional de Saúde Suplementar (ANS)

**Resolução Normativa ANS nº 452/2020** — Dispõe sobre a Política de Segurança da Informação e Comunicações (POSIC) aplicável às operadoras de planos de saúde e estabelece diretrizes para o tratamento seguro de dados de beneficiários. Embora dirigida às operadoras, é relevante como parâmetro setorial de segurança da informação em saúde, aplicável por analogia aos prestadores de serviços tecnológicos do setor.

### 2.3.3 Ministério da Saúde

A **Estratégia de Saúde Digital para o Brasil (ESD28)** e as normas relativas à **Rede Nacional de Dados em Saúde (RNDS)** estabelecem padrões de interoperabilidade e segurança para sistemas de informação em saúde, incluindo requisitos de proteção de dados que se somam às obrigações da LGPD.

## 2.4 Interação Entre os Regimes Normativos

Um ponto de atenção crucial para a MedCloud é que a LGPD e as normas setoriais de saúde **não se excluem — aplicam-se cumulativamente**. Isso significa que a empresa deve atender simultaneamente às exigências da LGPD, às resoluções do CFM sobre prontuários eletrônicos e às normas da ANS e do Ministério da Saúde. O descumprimento de qualquer um desses regimes pode gerar sanções independentes e simultâneas perante diferentes autoridades regulatórias.

---

```
╔══════════════════════════════════════════════════════════════════╗
║  💡 CONTROLADOR vs. OPERADOR — QUAL É O PAPEL DA MEDCLOUD?      ║
║                                                                  ║
║  A LGPD distingue dois agentes de tratamento:                    ║
║  • CONTROLADOR: quem toma as decisões sobre o tratamento         ║
║    (finalidade, meios, duração). As clínicas e hospitais         ║
║    clientes da MedCloud são os controladores dos dados           ║
║    de seus pacientes.                                            ║
║  • OPERADOR: quem trata os dados em nome do controlador.         ║
║    A MedCloud, como fornecedora da plataforma SaaS, atua         ║
║    como OPERADORA em relação aos dados dos pacientes.            ║
║                                                                  ║
║  Atenção: a distinção não isenta a MedCloud de                   ║
║  responsabilidade. O operador responde solidariamente            ║
║  quando descumpre a lei ou as instruções do controlador          ║
║  (art. 42, §1º, I, LGPD).                                        ║
╚══════════════════════════════════════════════════════════════════╝
```

---

---

# SEÇÃO 3 — ANÁLISE DAS ALEGAÇÕES

---

## 3.1 Alegação 1 — Ausência de Relatório de Impacto à Proteção de Dados Pessoais (RIPD)

### 3.1.1 Descrição da Alegação

O ex-funcionário afirma que a MedCloud não elaborou o Relatório de Impacto à Proteção de Dados Pessoais (RIPD) — documento que deve descrever os processos de tratamento de dados pessoais que podem gerar riscos às liberdades civis e aos direitos fundamentais dos titulares, bem como as medidas e salvaguardas adotadas para mitigar tais riscos.

No contexto da MedCloud, a alegação é particularmente relevante porque a empresa trata, em larga escala, dados pessoais sensíveis (dados de saúde e dados biométricos) de 150.000 pacientes — exatamente a hipótese em que a elaboração do RIPD é considerada obrigatória pela regulamentação da ANPD.

### 3.1.2 Análise Jurídica

**Fundamento normativo:** O art. 38 da LGPD estabelece que a ANPD poderá determinar ao controlador a elaboração do RIPD. A Resolução CD/ANPD nº 2/2022, por sua vez, vai além e define hipóteses em que o RIPD deve ser elaborado proativamente, independentemente de determinação da autoridade.

A Resolução nº 2/2022 estabelece que o RIPD é **obrigatório** quando o tratamento de dados:

- Envolver dados pessoais sensíveis (art. 11 da LGPD) — **situação da MedCloud**;
- For realizado em larga escala — **situação da MedCloud** (150.000 titulares);
- Utilizar novas tecnologias ou modelos de negócio inovadores — **potencialmente aplicável** à plataforma SaaS;
- Envolver monitoramento sistemático de titulares — **potencialmente aplicável** ao uso de biometria.

A MedCloud enquadra-se, de forma inequívoca, em pelo menos dois dos critérios que tornam o RIPD obrigatório: trata dados sensíveis e o faz em larga escala. A ausência do documento, portanto, configura descumprimento direto da regulamentação da ANPD.

**Agravante setorial:** O CFM, por meio de suas resoluções sobre prontuários eletrônicos, exige que sistemas de informação em saúde adotem medidas formais de avaliação de risco à segurança dos dados médicos. A ausência do RIPD pode ser interpretada como descumprimento simultâneo das normas do CFM, expondo a empresa a sanções perante esse conselho profissional adicionalmente às da ANPD.

**Ponderação relevante:** O RIPD não é um documento público. Trata-se de instrumento de governança interna que a ANPD pode solicitar a qualquer momento. Sua ausência não significa necessariamente que os riscos não foram avaliados na prática, mas a falta de documentação formal é, por si só, uma irregularidade. Caso a MedCloud tenha realizado avaliações de risco informais ou parciais, isso pode ser utilizado como argumento atenuante na resposta à ANPD, desde que haja evidências documentais.

---

```
╔══════════════════════════════════════════════════════════════════╗
║  💡 O QUE É O RIPD?                                              ║
║                                                                  ║
║  O Relatório de Impacto à Proteção de Dados Pessoais é um        ║
║  documento interno que descreve: (1) quais dados são             ║
║  coletados e por quê; (2) quais riscos o tratamento pode         ║
║  causar aos titulares; e (3) quais medidas a empresa adota       ║
║  para reduzir esses riscos. É comparável a uma auditoria         ║
║  de risco focada na privacidade dos dados. Sua elaboração        ║
║  demonstra responsabilidade e boa-fé perante a ANPD.            ║
╚══════════════════════════════════════════════════════════════════╝
```

---

### 3.1.3 Avaliação de Risco

```
┌─────────────────────────────────────────────────────────────────┐
│  🟠 RISCO: ALTO                                                  │
│                                                                  │
│  Justificativa:                                                  │
│  A ausência do RIPD é irregularidade formal de elevada           │
│  gravidade, dado que a obrigação é inequívoca para operações     │
│  de tratamento de dados sensíveis em larga escala. A ANPD        │
│  tende a tratar a ausência do RIPD como indicativo de            │
│  ausência de governança de privacidade mais ampla, o que         │
│  pode ampliar o escopo da investigação. A sanção mais            │
│  provável é advertência com prazo para regularização,            │
│  podendo evoluir para multa caso a empresa não demonstre         │
│  comprometimento com a elaboração do documento. O risco          │
│  não atinge nível CRÍTICO porque a irregularidade é             │
│  regularizável e não implica, por si só, dano direto            │
│  comprovado aos titulares.                                       │
└─────────────────────────────────────────────────────────────────┘
```

**Fatores agravantes:**
- Tratamento de dados sensíveis (saúde + biometria)
- Escala elevada (150.000 titulares)
- Ausência de documentação de qualquer avaliação de risco

**Fatores atenuantes:**
- Irregularidade regularizável em prazo relativamente curto
- Ausência de dano direto comprovado
- Possibilidade de demonstrar boa-fé mediante início imediato da elaboração do RIPD

### 3.1.4 Recomendações e Prazos

| Ação | Responsável | Prazo | Base Legal |
|---|---|---|---|
| Contratar consultoria especializada em privacidade ou designar equipe interna para elaboração do RIPD | DPO (a ser nomeado) + Diretoria de TI | **Imediato (D+0 a D+5)** | Art. 38, LGPD; Res. CD/ANPD nº 2/2022 |
| Mapear todas as operações de tratamento de dados (data mapping) como base para o RIPD | Equipe de TI + Jurídico | **D+5 a D+30** | Res. CD/ANPD nº 2/2022, art. 3º |
| Elaborar e aprovar internamente o RIPD completo | DPO + Jurídico + Diretoria | **D+30 a D+60** | Art. 38, LGPD; Res. CD/ANPD nº 2/2022 |
| Informar à ANPD, na resposta à notificação, que o RIPD está em elaboração com prazo definido | Jurídico | **Dentro do prazo da notificação** | Art. 52, §1º, I, LGPD (boa-fé como atenuante) |
| Implementar processo de revisão periódica do RIPD (anual ou quando houver mudança relevante nas operações) | DPO | **D+60 (processo contínuo)** | Res. CD/ANPD nº 2/2022 |

---

## 3.2 Alegação 2 — Compartilhamento de Dados com Empresa de Analytics sem Base Legal Clara

### 3.2.1 Descrição da Alegação

O ex-funcionário afirma que a MedCloud compartilhou dados de pacientes — supostamente submetidos a processo de anonimização — com empresa terceira prestadora de serviços de analytics (análise de dados), sem que houvesse base legal claramente definida e documentada para esse compartilhamento.

A alegação levanta dois problemas jurídicos distintos e igualmente graves: (i) a efetividade do processo de anonimização aplicado aos dados antes do compartilhamento; e (ii) a ausência de base legal para o compartilhamento, independentemente da questão da anonimização.

### 3.2.2 Análise Jurídica

**Problema 1 — A questão da anonimização**

A LGPD, em seu art. 5º, III, define dado anonimizado como aquele "relativo a titular que não possa ser identificado, considerando a utilização de meios técnicos razoáveis e disponíveis na ocasião de seu tratamento". Dados verdadeiramente anonimizados estão, em princípio, fora do escopo de aplicação da LGPD (art. 12).

Contudo, a lei estabelece uma condição crítica: **se o processo de anonimização puder ser revertido com o uso de meios técnicos razoáveis, os dados continuam sendo considerados pessoais** (art. 12, §1º). Este é o conceito de **pseudonimização** — técnica que substitui informações identificadoras por pseudônimos, mas que não elimina completamente a possibilidade de reidentificação se combinada com outras bases de dados.

---

```
╔══════════════════════════════════════════════════════════════════╗
║  💡 ANONIMIZAÇÃO vs. PSEUDONIMIZAÇÃO                             ║
║                                                                  ║
║  ANONIMIZAÇÃO: processo irreversível de remoção de               ║
║  identificadores. Dados verdadeiramente anonimizados             ║
║  não são mais dados pessoais e saem do escopo da LGPD.           ║
║                                                                  ║
║  PSEUDONIMIZAÇÃO: substituição de identificadores por            ║
║  códigos ou pseudônimos. Os dados permanecem pessoais            ║
║  porque a reidentificação é tecnicamente possível.               ║
║                                                                  ║
║  ⚠ No setor de saúde, a anonimização verdadeira é               ║
║  extremamente difícil: dados como diagnóstico + idade +          ║
║  localização + data de atendimento frequentemente                ║
║  permitem reidentificação por combinação com outras              ║
║  bases de dados. Estudos acadêmicos demonstram que               ║
║  mais de 87% dos americanos podem ser identificados              ║
║  unicamente por CEP, data de nascimento e sexo.                  ║
╚══════════════════════════════════════════════════════════════════╝
```

---

No contexto de dados de saúde — que incluem diagnósticos CID-10, prescrições, resultados de exames e dados biométricos —, a anonimização verdadeira é tecnicamente complexa e raramente alcançada por processos simples de remoção de nome e CPF. A combinação de dados clínicos com informações demográficas frequentemente permite a reidentificação dos titulares por técnicas de *linkage* de dados.

Portanto, há forte probabilidade de que os dados compartilhados com a empresa de analytics sejam, na verdade, **dados pseudonimizados** e não genuinamente anonimizados — o que os mantém sob a proteção da LGPD e, sendo dados de saúde, sob o regime reforçado do art. 11.

**Problema 2 — A ausência de base legal**

Mesmo que a anonimização fosse efetiva, a ausência de documentação sobre a base legal do compartilhamento é uma irregularidade autônoma. A LGPD exige que todo tratamento de dados pessoais tenha uma base legal expressamente prevista no art. 7º (dados comuns) ou no art. 11 (dados sensíveis).

Para dados sensíveis de saúde, as bases legais disponíveis são restritas e incluem:

- **Consentimento específico e destacado do titular** (art. 11, I) — improvável que tenha sido obtido para fins de analytics;
- **Tutela da saúde, exclusivamente em procedimento realizado por profissionais de saúde** (art. 11, II, f) — não aplicável a analytics comercial;
- **Proteção da vida ou da incolumidade física** (art. 11, II, e) — não aplicável;
- **Garantia da prevenção à fraude e à segurança do titular** (art. 11, II, g) — não aplicável a analytics genérico;
- **Cumprimento de obrigação legal ou regulatória** (art. 11, II, a) — não identificada obrigação legal que fundamente o compartilhamento com empresa de analytics.

A análise indica que