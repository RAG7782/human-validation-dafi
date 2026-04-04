# MEMORANDO JURÍDICO INTERNO

---

**PARA:** Diretoria Executiva — MedCloud Tecnologia Ltda.
**DE:** Departamento Jurídico e de Compliance
**DATA:** [Data de emissão]
**REF.:** MED-JUR-2024-001
**ASSUNTO:** Análise Jurídica das Alegações Objeto da Notificação da ANPD — Medidas Corretivas Urgentes e Plano de Adequação LGPD
**CLASSIFICAÇÃO:** CONFIDENCIAL — Comunicação Privilegiada Advogado-Cliente

---

## SUMÁRIO EXECUTIVO

Este memorando foi elaborado em resposta à notificação recebida da **Autoridade Nacional de Proteção de Dados (ANPD)**, que solicita esclarecimentos sobre as práticas de tratamento de dados pessoais sensíveis conduzidas pela MedCloud Tecnologia Ltda. A notificação foi motivada por denúncia anônima de ex-funcionário e abrange quatro alegações distintas.

Após análise preliminar das alegações e do contexto operacional da empresa, concluímos que **a situação apresenta riscos jurídicos que variam de médio a crítico**, exigindo resposta imediata à ANPD e implementação urgente de medidas corretivas. A gravidade é agravada pelo fato de a MedCloud operar com **dados pessoais sensíveis de saúde**, categoria que recebe proteção reforçada tanto na Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018) quanto em regulamentações setoriais específicas.

Este documento apresenta, para cada alegação: (i) a análise jurídica da situação; (ii) a avaliação do risco; (iii) as bases legais aplicáveis; e (iv) recomendações de ação corretiva com prazos definidos.

---

## 1. CONTEXTUALIZAÇÃO JURÍDICA PRÉVIA

### 1.1 Natureza dos Dados Tratados pela MedCloud

Antes de analisar cada alegação individualmente, é fundamental que a Diretoria compreenda a classificação jurídica dos dados que a empresa processa, pois isso determina o nível de exigência legal aplicável.

A LGPD, em seu artigo 5º, inciso II, define **dados pessoais sensíveis** como aqueles referentes à saúde ou à vida sexual, à origem racial ou étnica, à convicção religiosa, à opinião política, à filiação a sindicato ou organização de caráter religioso, filosófico ou político, a dado genético ou biométrico, quando vinculado a uma pessoa natural.

No caso da MedCloud, **os três tipos de dados tratados se enquadram como sensíveis**:

| Categoria de Dado | Classificação LGPD | Dispositivo Legal |
|---|---|---|
| Prontuários, diagnósticos CID-10, prescrições, exames | Dado de saúde — **Sensível** | Art. 5º, II, LGPD |
| Impressão digital para acesso a terminais | Dado biométrico — **Sensível** | Art. 5º, II, LGPD |
| Nome, CPF, endereço, contato | Dado pessoal — **Comum** | Art. 5º, I, LGPD |

Para dados sensíveis, a LGPD impõe **bases legais mais restritas** (art. 11), **obrigações adicionais de segurança** e **maior rigor na transferência internacional**. Adicionalmente, o setor de saúde está sujeito a normas regulatórias específicas, notadamente as Resoluções do Conselho Federal de Medicina (CFM), em especial a **Resolução CFM nº 1.821/2007** (prontuários médicos) e a **Resolução CFM nº 2.299/2021** (prontuário eletrônico), além das normas da Agência Nacional de Saúde Suplementar (ANS) e do Ministério da Saúde.

### 1.2 Posição da MedCloud na Cadeia de Tratamento

É igualmente relevante definir o papel jurídico da MedCloud no ecossistema de dados. Na relação com as clínicas e hospitais clientes, a MedCloud atua predominantemente como **operadora de dados** (art. 5º, VII, LGPD), pois trata dados pessoais em nome dos controladores (as clínicas/hospitais). Contudo, na medida em que a empresa define finalidades e meios de tratamento para seus próprios fins (ex.: analytics, melhoria do produto), pode assumir também a posição de **controladora** (art. 5º, VI, LGPD). Essa dualidade de papéis tem implicações diretas para as alegações analisadas abaixo.

---

## 2. ANÁLISE DAS ALEGAÇÕES

---

### ALEGAÇÃO 1 — Ausência de Relatório de Impacto à Proteção de Dados Pessoais (RIPD)

#### 2.1.1 Descrição da Alegação

O ex-funcionário alega que a MedCloud não teria elaborado o **Relatório de Impacto à Proteção de Dados Pessoais (RIPD)**, documento exigido pela LGPD para atividades de tratamento que possam gerar riscos às liberdades civis e aos direitos fundamentais dos titulares.

#### 2.1.2 Análise Jurídica

O RIPD está previsto no **artigo 38 da LGPD**, que estabelece:

> *"A autoridade nacional poderá determinar ao controlador que elabore relatório de impacto à proteção de dados pessoais, inclusive de dados sensíveis, referente a suas operações de tratamento de dados, nos termos de regulamento, observados os segredos comercial e industrial."*

A ANPD regulamentou o tema por meio da **Resolução CD/ANPD nº 2/2022**, que define critérios para obrigatoriedade do RIPD. Segundo esse regulamento, o RIPD é obrigatório, entre outras situações, quando o tratamento:

- Envolve **dados pessoais sensíveis** em larga escala;
- Utiliza **dados biométricos** para identificação única de pessoas;
- Envolve **dados de saúde** de forma sistemática;
- Pode **afetar significativamente interesses ou direitos** dos titulares.

A MedCloud preenche **todos esses critérios simultaneamente**: trata dados sensíveis de saúde e biométricos de aproximadamente **150.000 pacientes** de forma sistemática e em larga escala. A obrigatoriedade do RIPD, portanto, é **inequívoca e não admite interpretação favorável** à empresa na ausência do documento.

Adicionalmente, o **Guia Orientativo de Segurança da Informação para Agentes de Tratamento de Pequeno Porte** e o **Guia de Boas Práticas da ANPD** reforçam que a elaboração do RIPD é uma das medidas basilares de governança em privacidade, especialmente para operadores de dados sensíveis de saúde.

Vale ressaltar que, embora o artigo 38 utilize linguagem aparentemente facultativa ("poderá determinar"), a Resolução nº 2/2022 da ANPD e a interpretação sistemática da LGPD tornam o RIPD **obrigatório de forma proativa** nas situações enquadradas — ou seja, a empresa deve elaborá-lo independentemente de solicitação da autoridade.

#### 2.1.3 Avaliação de Risco

> 🔴 **RISCO: ALTO**

A ausência do RIPD caracteriza **descumprimento direto da LGPD** e da regulamentação da ANPD, podendo ensejar:
- Advertência formal (art. 52, I, LGPD);
- Multa simples de até 2% do faturamento do grupo econômico no Brasil no último exercício, limitada a R$ 50.000.000,00 por infração (art. 52, II, LGPD);
- Publicização da infração, com dano reputacional severo;
- Determinação de suspensão ou bloqueio do banco de dados (art. 52, VIII e IX, LGPD).

O risco é classificado como **alto** (e não crítico) porque o RIPD é um documento que pode ser elaborado retroativamente, mitigando a exposição, desde que feito com urgência e boa-fé demonstrável perante a ANPD.

#### 2.1.4 Bases Legais Aplicáveis

- LGPD, art. 38 (RIPD);
- LGPD, art. 37 (registro de operações de tratamento);
- LGPD, art. 52 (sanções administrativas);
- Resolução CD/ANPD nº 2/2022;
- Resolução CFM nº 2.299/2021 (prontuário eletrônico — segurança);
- Guia de Boas Práticas ANPD (Segurança da Informação).

#### 2.1.5 Recomendações e Prazos

| # | Ação | Responsável | Prazo |
|---|---|---|---|
| 1.1 | Contratar consultoria especializada ou mobilizar equipe jurídica/técnica para iniciar imediatamente a elaboração do RIPD, mapeando todas as operações de tratamento (especialmente dados de saúde e biométricos) | DPO (interino) + TI + Jurídico | **Imediato — 5 dias úteis** |
| 1.2 | Concluir versão preliminar do RIPD com identificação de riscos, medidas mitigadoras e plano de tratamento | DPO (interino) + Jurídico | **30 dias corridos** |
| 1.3 | Aprovar RIPD final pela Diretoria e arquivar com controle de versão | Diretoria + Jurídico | **45 dias corridos** |
| 1.4 | Incluir na resposta à ANPD o cronograma de elaboração do RIPD como demonstração de boa-fé e comprometimento | Jurídico | **Junto à resposta à notificação** |
| 1.5 | Estabelecer processo periódico de revisão do RIPD (mínimo anual ou quando houver mudanças relevantes no tratamento) | DPO | **Após conclusão do RIPD** |

---

### ALEGAÇÃO 2 — Compartilhamento de Dados "Anonimizados" com Empresa de Analytics sem Base Legal Clara

#### 2.2.1 Descrição da Alegação

O ex-funcionário alega que a MedCloud compartilha dados de pacientes — supostamente anonimizados — com uma empresa terceira de analytics, sem que haja base legal clara para tal operação.

#### 2.2.2 Análise Jurídica

Esta alegação é juridicamente a mais complexa e potencialmente a mais grave, por envolver múltiplas questões sobrepostas.

**a) O conceito de anonimização e seus limites**

A LGPD define **dado anonimizado** no artigo 5º, inciso III, como aquele relativo a titular que não possa ser identificado, considerando a utilização de **meios técnicos razoáveis e disponíveis na ocasião de seu tratamento**. Dados verdadeiramente anonimizados estão, em princípio, fora do escopo de aplicação da LGPD (art. 12, caput).

Contudo, o mesmo artigo 12, § 1º, estabelece que os dados serão tratados como pessoais se o **processo de anonimização puder ser revertido**, utilizando meios próprios ou com auxílio de terceiros. No contexto de dados de saúde — especialmente prontuários médicos, que contêm informações altamente individualizantes como histórico de doenças raras, combinações de medicamentos e datas precisas de atendimento — a **pseudoanonimização ou anonimização deficiente é um risco técnico real e documentado** na literatura científica.

Estudos internacionais demonstraram que dados de saúde "anonimizados" podem ser reidentificados com alta taxa de sucesso quando cruzados com outras bases de dados publicamente disponíveis (ex.: registros de nascimento, redes sociais, dados de geolocalização). A ANPD e reguladores europeus (EDPB — European Data Protection Board) têm adotado postura rigorosa sobre esse tema.

**b) O problema da base legal**

Mesmo que a anonimização seja tecnicamente adequada, há uma questão prévia: **qual a base legal para o compartilhamento dos dados (ainda identificáveis) com a empresa de analytics para fins de anonimização e análise?**

Para dados sensíveis de saúde, as bases legais admissíveis pelo art. 11 da LGPD são taxativas e incluem:
- Consentimento específico e destacado do titular (art. 11, I);
- Cumprimento de obrigação legal ou regulatória (art. 11, II, a);
- Execução de políticas públicas (art. 11, II, b);
- Realização de estudos por órgão de pesquisa, garantida a anonimização (art. 11, II, c);
- Exercício regular de direitos (art. 11, II, d);
- Proteção da vida ou incolumidade física (art. 11, II, e);
- Tutela da saúde, exclusivamente por profissionais de saúde ou autoridades sanitárias (art. 11, II, f);
- Prevenção à fraude e segurança do titular (art. 11, II, g).

O compartilhamento com empresa de analytics para fins comerciais **não se enquadra em nenhuma dessas bases legais** de forma direta. A base do "legítimo interesse" (art. 10, LGPD) **não se aplica a dados sensíveis** (art. 11 não a menciona). O consentimento dos 150.000 pacientes para esse fim específico seria necessário — e muito provavelmente não foi obtido.

**c) Ausência de DPA (Data Processing Agreement)**

Mesmo que houvesse base legal, o compartilhamento com terceiro operador exigiria a celebração de **contrato de processamento de dados** (DPA) nos termos do art. 39 da LGPD, garantindo que o operador (empresa de analytics) trate os dados apenas conforme as instruções do controlador e adote medidas de segurança adequadas.

**d) Implicações setoriais**

A Resolução CFM nº 1.821/2007 e a Resolução CFM nº 2.299/2021 estabelecem que o prontuário médico é **propriedade do paciente** e que seu compartilhamento deve observar sigilo médico e consentimento. O compartilhamento com empresa de tecnologia para fins analíticos pode configurar **violação do sigilo médico** (art. 154 do Código de Ética Médica — Resolução CFM nº 2.217/2018), com implicações disciplinares para os médicos cujos pacientes foram afetados.

#### 2.2.3 Avaliação de Risco

> 🔴🔴 **RISCO: CRÍTICO**

Esta é a alegação de maior gravidade jurídica. Os riscos incluem:
- Multa administrativa da ANPD (até R$ 50 milhões por infração);
- Determinação de **suspensão do tratamento** ou **eliminação dos dados** compartilhados;
- Responsabilidade civil pelos danos morais e materiais causados aos 150.000 titulares (art. 42, LGPD);
- Ação coletiva pelo Ministério Público ou entidades de defesa do consumidor (art. 22, CDC c/c art. 42, LGPD);
- Representação ao CFM contra os médicos e clínicas envolvidas;
- Dano reputacional irreparável com clientes (clínicas e hospitais);
- Eventual responsabilidade penal se configurado o crime de violação de segredo profissional (art. 154, Código Penal) ou acesso indevido a dados (art. 154-A, CP).

#### 2.2.4 Bases Legais Aplicáveis

- LGPD, arts. 5º, III (anonimização), 11 (bases legais para dados sensíveis), 12 (dados anonimizados), 39 (operadores), 42 (responsabilidade);
- Resolução CFM nº 1.821/2007 (prontuários médicos);
- Resolução CFM nº 2.299/2021 (prontuário eletrônico);
- Código de Ética Médica — Resolução CFM nº 2.217/2018, arts. 73-79 (sigilo médico);
- Código Penal, art. 154 (violação de segredo profissional) e art. 154-A (invasão de dispositivo informático);
- CDC, art. 22 (responsabilidade coletiva).

#### 2.2.5 Recomendações e Prazos

| # | Ação | Responsável | Prazo |
|---|---|---|---|
| 2.1 | **Suspender imediatamente** qualquer novo compartilhamento de dados com a empresa de analytics até regularização completa | CTO + Jurídico | **IMEDIATO — 24 horas** |
| 2.2 | Mapear exatamente quais dados foram compartilhados, em que volume, por quanto tempo e para quais finalidades | TI + Jurídico | **5 dias úteis** |
| 2.3 | Contratar perícia técnica independente para avaliar se a anonimização aplicada atende aos padrões da LGPD e da ANPD (técnicas como k-anonimato, l-diversidade, differential privacy) | CTO + Consultoria Externa | **15 dias corridos** |
| 2.4 | Notificar a empresa de analytics para suspender qualquer uso dos dados recebidos e solicitar confirmação de destruição ou devolução | Jurídico | **5 dias úteis** |
| 2.5 | Avaliar a necessidade de **notificação aos titulares** sobre o compartilhamento (art. 48, LGPD — incidente de segurança), com orientação jurídica sobre o timing e conteúdo | Jurídico + DPO | **10 dias úteis** |
| 2.6 | Se a parceria com a empresa de analytics for mantida no futuro, elaborar: (a) base legal adequada, (b) DPA robusto, (c) processo de anonimização certificado, (d) RIPD específico para essa operação | Jurídico + TI | **60 dias corridos** |
| 2.7 | Revisar todos os contratos com terceiros que recebem dados da plataforma para verificar situações similares | Jurídico | **30 dias corridos** |

---

### ALEGAÇÃO 3 — Armazenamento de Dados em Servidores nos EUA sem Cláusulas Contratuais Padrão

#### 2.3.1 Descrição da Alegação

O ex-funcionário alega que a MedCloud armazena dados de pacientes em servidores localizados nos Estados Unidos sem a adoção das **cláusulas contratuais padrão** ou outros mecanismos legais exigidos para transferência internacional de dados.

#### 2.3.2 Análise Jurídica

**a) O regime de transferência internacional na LGPD**

A **transferência internacional de dados pessoais** é regulada pelos artigos 33 a 36 da LGPD. Para que seja lícita, a transferência deve se enquadrar em uma das hipóteses previstas no art. 33, entre as quais se destacam:

- **Inciso I:** Para países ou organismos internacionais que proporcionem grau de proteção de dados pessoais adequado ao da LGPD (reconhecidos pela ANPD);
- **Inciso II:** Quando o controlador oferecer e comprovar garantias de cumprimento dos princípios de proteção de dados, mediante cláusulas contratuais específicas, normas corporativas globais, selos, certificados ou códigos de conduta aprovados pela ANPD;
- **Inciso VIII:** Quando necessário para a execução de contrato ou procedimentos preliminares relacionados a contrato do qual seja parte o titular.

**b) A situação dos EUA**

Os Estados Unidos **não constam da lista de países com nível de proteção adequado reconhecido pela ANPD**. Ao contrário da União Europeia, que possui o mecanismo do "Data Privacy Framework" com os EUA (após o Schrems II e a decisão de adequação de 2023), o Brasil ainda não celebrou acordo de adequação com os EUA. Portanto, a transferência para servidores americanos **não pode se basear no inciso I do art. 33**.

A alternativa mais comum e robusta seria a adoção de **cláusulas contratuais padrão** aprovadas pela ANPD (art. 33, II, a, LGPD). A ANPD publicou, em 2023, minuta de regulamento sobre transferência internacional, mas o processo regulatório ainda está em curso. Nesse cenário de transição, a ANPD tem aceito provisoriamente o uso de cláusulas contratuais baseadas nos modelos internacionais (SCCs da União Europeia adaptadas), desde que adequadas ao contexto brasileiro.

**c) Agravante: dados sensíveis de saúde**

Para dados sensíveis, a transferência internacional é ainda mais restrita. O art. 11 da LGPD, ao estabelecer bases legais específicas para dados sensíveis, implicitamente exige que qualquer operação com esses dados — incluindo a transferência — observe as mesmas limitações. A transferência de prontuários médicos e dados biométricos de 150.000 pacientes para servidores nos EUA sem mecanismo legal adequado é uma **violação grave e de alta exposição**.

**d) Normas setoriais adicionais**

A **Resolução CFM nº 2.299/2021**, que trata do prontuário eletrônico, estabelece que os dados de prontuários devem ser armazenados em território nacional ou, quando no exterior, com garantias equivalentes às exigidas pela legislação brasileira. Essa norma reforça a necessidade de mecanismos contratuais robustos.

Adicionalmente, a **Lei nº 12.965/2014 (Marco Civil da Internet)**, em seu art. 11, estabelece que operações de coleta, armazenamento, guarda e tratamento de dados de brasileiros devem observar a legislação brasileira, mesmo que os servidores estejam no exterior.

**e) Avaliação da situação atual**

É provável que a MedCloud utilize serviços de cloud computing de grandes provedores americanos (AWS, Google Cloud, Microsoft Azure), o que é prática comum. Esses provedores oferecem contratos de processamento de dados com cláusulas de proteção e, em alguns casos, a opção de armazenamento em regiões específicas (incluindo Brasil). A questão não é necessariamente a escolha do provedor, mas **a ausência de instrumentos contratuais adequados e a eventual falta de configuração de armazenamento em região brasileira**.

#### 2.3.3 Avaliação de Risco

> 🟠 **RISCO: ALTO**

O risco é classificado como alto (e não crítico) porque:
- Existe possibilidade de regularização contratual relativamente rápida;
- Os grandes provedores de cloud já possuem modelos contratuais adequados;
- A ANPD ainda está consolidando sua regulamentação sobre transferência internacional, o que cria alguma zona de incerteza interpretativa favorável à empresa.

Contudo, a ausência total de qualquer instrumento jurídico para a transferência, especialmente de dados sensíveis de saúde, é **inaceitável** e deve ser corrigida com urgência.

#### 2.3.4 Bases Legais Aplicáveis

- LGPD, arts. 33-36 (transferência internacional);
- LGPD, art. 11 (dados sensíveis);
- Resolução CD/ANPD nº 19/2024 (em elaboração — regulamento de transferência internacional);
- Marco Civil da Internet (Lei nº 12.965/2014), art. 11;
- Resolução CFM nº 2.299/2021;
- SCCs da União Europeia (referência comparativa para elaboração de cláusulas).

#### 2.3.5 Recomendações e Prazos

| # | Ação | Responsável | Prazo |
|---|---|---|---|
| 3.1 | Mapear todos os provedores de cloud e serviços terceirizados que armazenam ou processam dados da MedCloud fora do Brasil | CTO + TI | **5 dias úteis** |
| 3.2 | Verificar se os contratos vigentes com provedores (ex.: AWS, Azure, Google Cloud) já incluem cláusulas de proteção de dados e DPA — muitos provedores já oferecem esses instrumentos | Jurídico + TI | **10 dias úteis** |
| 3.3 | Avaliar a viabilidade técnica e de custo de migrar o armazenamento de dados sensíveis para **regiões brasileiras** dos provedores de cloud (ex.: AWS São Paulo — sa-east-1), o que eliminaria a questão da transferência internacional | CTO + Financeiro | **15 dias corridos** |
| 3.4 | Caso a migração para servidores brasileiros não seja imediatamente viável, celebrar **aditivos contratuais** com os provedores incluindo cláusulas contratuais padrão adequadas à LGPD | Jurídico | **20 dias corridos** |
| 3.5 | Incluir na política de segurança da informação e no RIPD (Alegação 1) a análise de riscos da transferência internacional e as medidas adotadas | DPO + Jurídico | **Junto ao RIPD** |
| 3.6 | Monitorar a publicação da regulamentação definitiva da ANPD sobre transferência internacional e adaptar os instrumentos contratuais quando necessário | DPO + Jurídico | **Contínuo** |

---

### ALEGAÇÃO 4 — Ausência de DPO (Encarregado de Dados) Formalmente Nomeado

#### 2.4.1 Descrição da Alegação

O ex-funcionário alega que a MedCloud não possui um **Encarregado pelo Tratamento de Dados Pessoais** (DPO — Data Protection Officer) formalmente nomeado e divulgado, conforme exigido pela LGPD.

#### 2.4.2 Análise Jurídica

**a) Obrigatoriedade do DPO**

O artigo 41 da LGPD estabelece que o controlador deverá indicar encarregado pelo tratamento de dados pessoais. A norma não condiciona essa obrigação ao porte da empresa ou ao volume de dados tratados — trata-se de **obrigação geral aplicável a todos os controladores**.

A **Resolução CD/ANPD nº 2/2022** flexibilizou essa exigência para **agentes de tratamento de pequeno porte**, permitindo formas simplificadas de cumprimento. Contudo, a MedCloud, com 150.000 titulares de dados sensíveis e operação SaaS para o setor de saúde, **não se enquadra como agente de pequeno porte** — muito pelo contrário, trata-se de empresa de médio porte com operações de alta complexidade e risco.

**b) Funções do DPO**

O DPO tem funções legalmente definidas no art. 41, § 2º, LGPD:
- Aceitar reclamações e comunicações dos titulares, prestar esclarecimentos e adotar providências;
- Receber comunicações da ANPD e adotar providências;
- Orientar os funcionários e contratados da entidade sobre as práticas a serem tomadas em relação à proteção de dados pessoais;
- Executar as demais atribuições determinadas pelo controlador ou estabelecidas em normas complementares.

**c) Publicidade da identidade do DPO**

O art. 41, § 1º, LGPD determina que **a identidade e as informações de contato do encarregado devem ser divulgadas publicamente**, de forma clara e objetiva, preferencialmente no sítio eletrônico do controlador. A ausência dessa divulgação é, por si só, uma infração autônoma.

**d) DPO interno ou externo**

A LGPD permite que o DPO seja pessoa física ou jurídica, interna ou externa à organização. Assim, a MedCloud pode nomear um funcionário qualificado ou contratar uma consultoria especializada para exercer a função — ambas as opções são igualmente válidas do ponto de vista legal.

**e) Impacto na situação atual com a ANPD**

A ausência de DPO tem implicação direta e imediata na situação presente: a ANPD notificou a empresa, e **não há um canal formal designado para receber e responder a comunicações da autoridade**, o que é precisamente uma das funções do DPO. Isso demonstra à ANPD que a empresa opera sem governança básica de proteção de dados.

#### 2.4.3 Avaliação de Risco

> 🟡 **RISCO: MÉDIO**

O risco é classificado como médio porque:
- A irregularidade é **facilmente sanável** com a nomeação imediata de um DPO (interno ou externo);
- A ANPD tem sido relativamente tolerante com empresas que demonstram boa-fé e tomam medidas corretivas rápidas;
- Isoladamente, a ausência de DPO raramente resulta nas sanções mais severas da LGPD.

Contudo, no contexto das demais alegações — especialmente as de maior gravidade —, a ausência de DPO **agrava a percepção da ANPD sobre a cultura de compliance da empresa** e pode influenciar negativamente a avaliação global das infrações.

#### 2.4.4 Bases Legais Aplicáveis

- LGPD, art. 41 (encarregado);
- LGPD, art. 52 (sanções);
- Resolução CD/ANPD nº 2/2022 (agentes de pequeno porte — inaplicável ao caso);
- Guia de Boas Práticas ANPD — Encarregado.

#### 2.4.5 Recomendações e Prazos

| # | Ação | Responsável | Prazo |
|---|---|---|---|
| 4.1 | Nomear **imediatamente** um DPO interino — pode ser um advogado interno, o responsável de TI com conhecimento em privacidade, ou uma consultoria externa contratada em regime de urgência | CEO + RH + Jurídico | **IMEDIATO — 48 horas** |
| 4.2 | Publicar nome e contato do DPO no site institucional da MedCloud e na plataforma, em local de fácil acesso | Marketing + TI | **5 dias úteis** |
| 4.3 | Definir se o modelo será DPO