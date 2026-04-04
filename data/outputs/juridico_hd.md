# MEMORANDO JURÍDICO INTERNO

---

**PARA:** Diretoria da MedCloud Tecnologia Ltda.
**DE:** Departamento Jurídico / Assessoria de Compliance
**ASSUNTO:** Análise Jurídica — Notificação ANPD e Exposição à Lei Geral de Proteção de Dados Pessoais
**CLASSIFICAÇÃO:** CONFIDENCIAL — Privilégio Advogado-Cliente
**DATA:** Junho de 2025
**REFERÊNCIA:** MED-JUR-2025-042

---

## 1. EMENTA

A MedCloud Tecnologia Ltda. recebeu notificação da Autoridade Nacional de Proteção de Dados (ANPD) solicitando esclarecimentos sobre quatro alegações formuladas por ex-funcionário: (i) ausência de Relatório de Impacto à Proteção de Dados Pessoais (RIPD); (ii) compartilhamento de dados com empresa de *analytics* sem base legal clara; (iii) armazenamento de dados em servidores nos Estados Unidos sem cláusulas contratuais padrão; e (iv) ausência de Encarregado (DPO) formalmente nomeado.

A análise das quatro alegações revela **risco alto a crítico em três delas**, com uma classificação de risco médio na quarta. A exposição é agravada pelo fato de a plataforma processar dados pessoais sensíveis de saúde e biométricos de aproximadamente 150.000 pacientes, o que eleva o potencial sancionatório de forma significativa.

**Prazo crítico imediato:** A resposta à notificação da ANPD deve ser encaminhada dentro do prazo legal — presumido como 10 dias úteis a partir do recebimento, na ausência de prazo diverso expressamente indicado na notificação. A inobservância desse prazo agrava qualquer situação de risco.

---

## 2. FATOS DO CASO

**2.1 Identificação da empresa e da plataforma**

A MedCloud Tecnologia Ltda. é pessoa jurídica de direito privado, sediada em São Paulo/SP, dedicada ao desenvolvimento e operação de plataforma de software como serviço (SaaS) voltada à gestão de prontuários eletrônicos para clínicas e hospitais de médio porte.

**2.2 Volume e categorias de dados tratados**

A plataforma processa dados de aproximadamente 150.000 pacientes, distribuídos nas seguintes categorias:

- **Dados cadastrais** (nome, CPF, endereço, contato): dados pessoais comuns, sujeitos ao regime geral da Lei n.º 13.709/2018 (LGPD);
- **Dados de saúde** (prontuários, diagnósticos CID-10, prescrições, resultados de exames): dados pessoais sensíveis, nos termos do Art. 5.º, II, da LGPD, sujeitos ao regime especial e mais restritivo do Art. 11 da mesma lei;
- **Dados biométricos** (impressão digital para acesso a terminais em clínicas): categoria autônoma de dado pessoal sensível, também prevista no Art. 5.º, II, da LGPD, com agravantes próprios decorrentes do Art. 11, § 3.º, que veda o tratamento para fins discriminatórios.

**2.3 Qualificação jurídica da MedCloud no ecossistema de dados**

A MedCloud opera em dupla posição jurídica relevante: como **operadora** em relação às clínicas e hospitais contratantes (que são os controladores dos dados dos pacientes, nos termos do Art. 5.º, VI e VII, da LGPD), agindo por instrução desses controladores (Art. 39 da LGPD); e como **controladora** de dados próprios, como cadastros de funcionários e credenciais de acesso. Essa dupla qualificação é relevante para a aferição de responsabilidades em cada alegação analisada.

**2.4 Evento deflagrador**

A ANPD encaminhou à MedCloud notificação formal solicitando esclarecimentos sobre práticas de tratamento de dados pessoais sensíveis, em decorrência de denúncia anônima formulada por ex-funcionário da empresa. O prazo para resposta, na ausência de informação expressa na notificação, é presumido como **10 dias úteis** a partir do recebimento, adotando-se premissa conservadora.

**2.5 Alegações objeto da notificação**

As quatro alegações formuladas na denúncia são:

1. Ausência de Relatório de Impacto à Proteção de Dados Pessoais (RIPD);
2. Compartilhamento de dados supostamente anonimizados com empresa de *analytics* sem base legal clara;
3. Armazenamento de dados em servidores localizados nos Estados Unidos sem cláusulas contratuais padrão;
4. Ausência de Encarregado de Dados (DPO) formalmente nomeado.

**2.6 Observação sobre o denunciante**

Recomenda-se verificar imediatamente se os acessos do ex-funcionário denunciante foram devidamente revogados por ocasião de seu desligamento. A manutenção de credenciais ativas após o término do vínculo empregatício configura vulnerabilidade de segurança autônoma e pode indicar falha na política de *offboarding*, com implicações adicionais sob o Art. 46 da LGPD.

---

## 3. ENQUADRAMENTO LEGAL

O presente memorando se apoia no seguinte arcabouço normativo, organizado por diploma:

### 3.1 Lei Geral de Proteção de Dados Pessoais — LGPD (Lei n.º 13.709/2018)

- **Art. 5.º, II**: Define dado pessoal sensível, incluindo expressamente dados sobre saúde e dados biométricos. Toda a análise das alegações é agravada pela incidência desta categoria.
- **Art. 7.º**: Estabelece as bases legais para o tratamento de dados pessoais comuns (consentimento, cumprimento de obrigação legal, execução de contrato, legítimo interesse, entre outras). Aplicável aos dados cadastrais dos pacientes.
- **Art. 11**: Estabelece bases legais específicas e taxativas para o tratamento de dados sensíveis, admitindo, entre outras hipóteses relevantes para o setor saúde: consentimento do titular (inciso I); cumprimento de obrigação legal ou regulatória (inciso II, "a"); tutela da saúde, em procedimento realizado por profissionais de saúde ou entidades sanitárias (inciso II, "f"). O rol é taxativo — não há tratamento de dados sensíveis fora dessas hipóteses.
- **Art. 11, § 3.º**: Veda o tratamento de dados biométricos para fins discriminatórios ilícitos ou abusivos.
- **Art. 14**: Regula o tratamento de dados de crianças e adolescentes, exigindo consentimento parental específico para crianças (até 12 anos). Relevante para plataformas de saúde que tratam dados de pacientes menores de idade.
- **Art. 33**: Estabelece as condições para a transferência internacional de dados pessoais, admitindo-a apenas para países com nível adequado de proteção ou mediante garantias suficientes (cláusulas contratuais padrão, normas corporativas globais, entre outros mecanismos).
- **Art. 37**: Impõe ao controlador e ao operador a obrigação de manter registro das operações de tratamento de dados realizadas, especialmente quando baseadas no legítimo interesse.
- **Art. 38**: Faculta à ANPD determinar ao controlador a elaboração do RIPD, sendo obrigatório nos casos que envolvam dados sensíveis ou que possam gerar riscos às liberdades civis e direitos fundamentais dos titulares.
- **Art. 41**: Determina ao controlador a indicação de Encarregado de Dados (DPO), pessoa natural ou jurídica responsável pela comunicação entre controlador, titulares e ANPD.
- **Art. 46**: Impõe a adoção de medidas de segurança técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas.
- **Art. 52**: Prevê o rol de sanções administrativas aplicáveis pela ANPD, incluindo advertência, multa de até 2% do faturamento bruto do grupo econômico no Brasil no último exercício, limitada a R$ 50 milhões por infração, bloqueio ou eliminação dos dados, suspensão parcial ou total do banco de dados, e proibição parcial ou total do exercício de atividades relacionadas ao tratamento de dados.

### 3.2 Regulamentações da ANPD

- **Resolução CD/ANPD n.º 2/2022**: Regulamenta o processo administrativo sancionador e a dosimetria das sanções. Prevê critérios de agravamento (natureza dos dados, boa-fé, cooperação com a autoridade, reincidência) e de atenuação (adoção de medidas corretivas, ausência de dano efetivo). Fundamental para a classificação de risco de cada alegação.
- **Resolução CD/ANPD n.º 4/2023**: Regulamenta o RIPD, definindo os casos em que sua elaboração é obrigatória, o conteúdo mínimo e o procedimento. Diretamente aplicável à Alegação 1.
- **Resolução CD/ANPD n.º 18/2024**: Regulamenta a atuação do Encarregado de Dados (DPO), definindo competências, forma de nomeação e comunicação à ANPD. Diretamente aplicável à Alegação 4.
- **Resolução CD/ANPD n.º 19/2024**: Regulamenta a transferência internacional de dados pessoais, incluindo as Cláusulas Contratuais Padrão (CPCs). O prazo de adequação para incorporação das CPCs nos contratos vigentes expirou em **23 de agosto de 2025**. Diretamente aplicável à Alegação 3. Os Estados Unidos **não possuem decisão de adequação** reconhecida pela ANPD.
- **Resolução CD/ANPD n.º 15/2024** (verificar vigência): Trata da comunicação de incidentes de segurança, impondo prazo de 3 dias úteis para notificação à ANPD em casos de incidentes relevantes.
- **Resolução CD/ANPD n.º 32/2026** (verificar vigência): Regulamenta a adequação mútua Brasil-União Europeia. Reforça a ausência de equivalente para os Estados Unidos.

### 3.3 Normas Setoriais de Saúde

- **Resolução CFM n.º 1.821/2007**: Regulamentação original do prontuário eletrônico, com padrões de segurança e guarda de documentos. Parcialmente atualizada por normas posteriores.
- **Resolução CFM n.º 2.218/2018**: Revogou a obrigatoriedade do Selo CFM/SBIS para sistemas de prontuário eletrônico, mantendo a certificação como referência de qualidade, não como exigência compulsória.
- **Resolução CFM n.º 2.314/2022**: Regulamenta a telemedicina, exigindo registro em sistema com padrão NGS2, com implicações para plataformas SaaS que suportem atendimento remoto.
- **Resolução CREMESP n.º 385/2024**: Norma mais recente e específica para o Estado de São Paulo (sede da MedCloud), tratando de governança de TI em prontuários eletrônicos, plano de contingência e treinamento de equipes. Diretamente aplicável à MedCloud.
- **Lei n.º 13.787/2018**: Regulamenta a digitalização de prontuários e documentos de saúde, remetendo expressamente à LGPD para aspectos de proteção de dados.
- **Lei n.º 14.510/2022**: Regulamenta a telessaúde em caráter permanente, com observância obrigatória da Lei n.º 13.787/2018 e da LGPD.
- **Decreto n.º 12.560/2025**: Regulamenta a Rede Nacional de Dados em Saúde (RNDS), tornando a interoperabilidade obrigatória para plataformas de saúde, com implicações para o compartilhamento de dados.

### 3.4 Proteção de Dados de Menores

- **Art. 14 da LGPD**: Exige consentimento parental específico para tratamento de dados de crianças (até 12 anos). Para adolescentes (12 a 18 anos), aplica-se o critério do melhor interesse.
- **Lei n.º 15.211/2025 — ECA Digital** (em vigor desde 17/03/2026): Impõe obrigações adicionais a plataformas digitais que atendem menores, com fiscalização pela ANPD.
- **Enunciado CD/ANPD n.º 1/2023**: Admite todas as bases legais dos Arts. 7.º e 11 da LGPD para dados de menores, desde que prevaleça o melhor interesse. Para fins de saúde, a base "tutela da saúde" (Art. 11, II, "f") dispensa consentimento, mas não afasta a exigência de consentimento parental para crianças.

### 3.5 Precedente Jurisprudencial Relevante

- **REsp 2.201.694-SP/STJ**: Reconheceu o dano moral presumido (*in re ipsa*) pelo compartilhamento indevido de dados pessoais, sem necessidade de demonstração de prejuízo concreto. Relevante para a avaliação do risco reputacional e indenizatório da MedCloud.

---

## 4. ANÁLISE DE RISCO POR ALEGAÇÃO

---

### 4.1 — AUSÊNCIA DE RELATÓRIO DE IMPACTO À PROTEÇÃO DE DADOS PESSOAIS (RIPD)

**Alegação:** O ex-funcionário afirma que a MedCloud não elaborou o RIPD, instrumento que documenta os processos de tratamento de dados que podem gerar riscos às liberdades civis e aos direitos fundamentais dos titulares.

**Base legal aplicável:** Art. 38 da LGPD; Resolução CD/ANPD n.º 4/2023; Art. 5.º, II (dados sensíveis como fator de obrigatoriedade); Resolução CD/ANPD n.º 2/2022 (dosimetria).

**Análise:**

*Obrigatoriedade legal:* O Art. 38 da LGPD faculta à ANPD determinar a elaboração do RIPD, mas a Resolução CD/ANPD n.º 4/2023 definiu critérios objetivos de obrigatoriedade, incluindo o tratamento de dados pessoais sensíveis em larga escala. A MedCloud trata dados de saúde e biométricos de 150.000 pacientes — volume que, por si só, já enquadra a empresa na obrigação de elaborar o RIPD de forma proativa, independentemente de determinação expressa da ANPD.

*Situação factual provável:* A ausência do RIPD, se confirmada, indica que a MedCloud não realizou avaliação estruturada dos riscos decorrentes de suas operações de tratamento. Isso significa que potenciais vulnerabilidades — como o próprio compartilhamento com *analytics* (Alegação 2) e a transferência internacional (Alegação 3) — não foram identificadas e mitigadas de forma documentada.

*Agravantes:* (a) Tratamento de dados sensíveis de saúde em escala (150.000 pacientes); (b) Presença de dados biométricos, categoria com proteção reforçada; (c) Possível tratamento de dados de pacientes menores de idade, o que exigiria atenção específica no RIPD; (d) Plataforma SaaS com múltiplos controladores (clínicas e hospitais), aumentando a complexidade do ecossistema de dados; (e) Setor saúde, considerado de alto risco pela ANPD na dosimetria da Resolução n.º 2/2022.

*Atenuantes:* A ausência do RIPD pode ser parcialmente mitigada se a empresa demonstrar que adotou medidas de segurança técnicas e administrativas (Art. 46) e que mantém registros de operações de tratamento (Art. 37), ainda que de forma informal. A boa-fé e a cooperação com a ANPD também são atenuantes expressamente previstos na Resolução n.º 2/2022.

**Classificação de risco: ALTO**

*Probabilidade de sanção:* Alta. A ANPD sinalizou que a ausência de RIPD em operações de alto risco está no radar fiscalizatório, especialmente no setor saúde. A notificação já em curso indica que a autoridade está examinando ativamente as práticas da empresa.

*Impacto potencial:* Advertência com prazo para adequação em primeiro momento; multa administrativa em caso de reincidência ou inércia. Com base no Art. 52 da LGPD e na Resolução n.º 2/2022, a multa pode alcançar até 2% do faturamento bruto anual da MedCloud, limitada a R$ 50 milhões por infração. A ausência de RIPD também enfraquece significativamente a defesa da empresa nas demais alegações, pois demonstra ausência de governança sistêmica.

**Recomendação imediata:** Iniciar imediatamente a elaboração do RIPD, com previsão de conclusão em até 60 dias, priorizando as operações de maior risco (dados de saúde, biometria, transferência internacional e compartilhamento com *analytics*). Considerar a contratação de consultoria especializada ou serviço de DPO as a Service caso não haja competência técnica interna.

**Condicional:** Se a empresa demonstrar que realizou avaliação de riscos documentada, ainda que sob denominação diversa (como Análise de Impacto de Privacidade ou Privacy Impact Assessment), e que esse documento cobre as operações críticas, a classificação pode ser reduzida para MÉDIO, desde que o documento seja formalmente adequado aos requisitos da Resolução CD/ANPD n.º 4/2023.

---

### 4.2 — COMPARTILHAMENTO DE DADOS COM EMPRESA DE *ANALYTICS* SEM BASE LEGAL CLARA

**Alegação:** O ex-funcionário afirma que dados supostamente anonimizados foram compartilhados com empresa de *analytics* sem base legal clara para tal operação.

**Base legal aplicável:** Art. 5.º, II e III (dado pessoal sensível e dado anonimizado); Art. 11 da LGPD (bases legais taxativas para dados sensíveis); Art. 7.º (bases legais para dados comuns); Art. 37 (registro de operações); Resolução CD/ANPD n.º 2/2022 (dosimetria); REsp 2.201.694-SP/STJ (dano presumido).

**Análise:**

*Distinção fundamental — Anonimização versus Pseudonimização:* Esta é a questão jurídica mais relevante desta alegação. O Art. 5.º, III, da LGPD define dado anonimizado como aquele "relativo a titular que não possa ser identificado, considerando a utilização de meios técnicos razoáveis e disponíveis na ocasião de seu tratamento". Se os dados realmente são anonimizados de forma irreversível, a LGPD não se aplica a eles — e o compartilhamento seria juridicamente livre.

Contudo, a experiência prática e a literatura técnica demonstram que a **pseudonimização** — substituição de identificadores diretos por códigos ou pseudônimos, sem eliminação da possibilidade de reidentificação — é frequentemente confundida com anonimização. Dados de saúde são particularmente vulneráveis à reidentificação: a combinação de diagnóstico, data de nascimento, município de residência e especialidade médica é suficiente, em muitos casos, para identificar o paciente, ainda que o CPF e o nome tenham sido removidos. Se os dados compartilhados com a empresa de *analytics* permitem reidentificação por cruzamento com outros bancos de dados, **não há anonimização real e a LGPD se aplica integralmente**, incluindo o regime especial do Art. 11.

*Obrigatoriedade legal:* Se os dados compartilhados são genuinamente anonimizados, não há violação à LGPD. Se são pseudonimizados ou identificáveis por cruzamento, o compartilhamento com empresa de *analytics* exige base legal específica do Art. 11 (para dados sensíveis de saúde), cujo rol é taxativo. As hipóteses mais prováveis seriam: consentimento do titular (Art. 11, I) ou tutela da saúde (Art. 11, II, "f"). O uso de dados de saúde para fins de *analytics* comercial ou de inteligência de negócios não se enquadra na hipótese de "tutela da saúde", que pressupõe finalidade assistencial. O consentimento, por sua vez, exige que seja específico, destacado e livre — o que raramente é obtido para finalidades secundárias de análise de dados.

*Situação factual provável:* A empresa provavelmente adotou técnicas de pseudonimização (remoção de CPF e nome) e as classificou internamente como anonimização, sem realizar avaliação técnica rigorosa do risco de reidentificação. O compartilhamento com empresa de *analytics* pode ter finalidade de melhoria do produto ou monetização de dados — ambas as finalidades potencialmente incompatíveis com a finalidade original de tratamento (gestão de prontuários).

*Agravantes:* (a) Dados de saúde são sensíveis por natureza — qualquer tratamento inadequado é agravado; (b) A finalidade de *analytics* pode ser incompatível com a finalidade de tratamento declarada ao titular; (c) A empresa de *analytics* pode ser sediada no exterior, combinando esta alegação com a Alegação 3 (ver análise cruzada); (d) Ausência de registro documentado da operação de compartilhamento (Art. 37); (e) Precedente RaiaDrogasil (2025): a ANPD adotou medida preventiva em caso envolvendo biometria e dados de saúde sem alternativa adequada de identificação — contexto parcialmente análogo ao da MedCloud.

*Atenuantes:* Se a empresa puder demonstrar que realizou avaliação técnica de anonimização e que os dados efetivamente não permitem reidentificação, a alegação perde substância jurídica. A existência de contrato de processamento de dados com a empresa de *analytics*, ainda que imperfeito, também é atenuante.

**Classificação de risco: CRÍTICO** (se dados são pseudonimizados) / **BAIXO** (se anonimização é real e irreversível)

*Probabilidade de sanção:* Alta a muito alta, caso a ANPD conclua que os dados permitem reidentificação. O ônus de demonstrar a efetividade da anonimização recai sobre a empresa.

*Impacto potencial:* Multa de até 2% do faturamento bruto anual, limitada a R$ 50 milhões por infração (Art. 52 da LGPD); bloqueio ou eliminação dos dados compartilhados; suspensão do compartilhamento; danos reputacionais significativos. O precedente do STJ (REsp 2.201.694-SP) indica que pacientes prejudicados poderiam pleitear dano moral presumido, sem necessidade de demonstrar prejuízo concreto.

**Recomendação imediata:** Suspender imediatamente o compartilhamento de dados com a empresa de *analytics* até que seja realizada avaliação técnica independente do nível de anonimização. Se confirmada a anonimização real, documentar o processo e retomar o compartilhamento com base legal adequada. Se confirmada a pseudonimização, regularizar a base legal ou encerrar definitivamente o compartilhamento.

**Condicional:** Se a empresa demonstrar, mediante laudo técnico independente, que os dados compartilhados são irreversivelmente anonimizados e que não permitem reidentificação por nenhum meio técnico razoável disponível, a classificação se reduz para BAIXO, com recomendação apenas de documentação formal do processo de anonimização.

---

### 4.3 — ARMAZENAMENTO DE DADOS EM SERVIDORES NOS EUA SEM CLÁUSULAS CONTRATUAIS PADRÃO

**Alegação:** O ex-funcionário afirma que dados pessoais de pacientes são armazenados em servidores localizados nos Estados Unidos sem a adoção de cláusulas contratuais padrão (CPCs) ou outro mecanismo de garantia previsto na LGPD para transferências internacionais.

**Base legal aplicável:** Art. 33 da LGPD (transferência internacional); Resolução CD/ANPD n.º 19/2024 (CPCs — prazo de adequação expirado em 23/08/2025); Art. 46 da LGPD (medidas de segurança); Art. 52 da LGPD (sanções); Resolução CD/ANPD n.º 2/2022 (dosimetria).

**Análise:**

*Obrigatoriedade legal:* O Art. 33 da LGPD admite a transferência internacional de dados pessoais apenas para países ou organismos internacionais que proporcionem grau de proteção adequado, ou mediante a adoção de garantias suficientes. A Resolução CD/ANPD n.º 19/2024 regulamentou as CPCs como principal mecanismo de garantia e estabeleceu prazo de adequação para contratos vigentes, encerrado em **23 de agosto de 2025**. Os **Estados Unidos não possuem decisão de adequação** reconhecida pela ANPD — ao contrário da União Europeia, que obteve reconhecimento mútuo via Resolução CD/ANPD n.º 32/2026. Portanto, qualquer transferência de dados pessoais para servidores nos EUA, após 23/08/2025, sem CPCs incorporadas ao contrato com o provedor de nuvem, configura violação direta ao Art. 33 da LGPD.

*Situação factual provável:* A MedCloud utiliza infraestrutura de nuvem de provedor com servidores nos EUA — prática comum entre empresas de SaaS brasileiras — sem ter formalizado as CPCs exigidas pela Resolução n.º 19/2024. O prazo de adequação já se encerrou, o que significa que a violação, se existente, é atual e contínua.

*Agravantes:* (a) Os dados transferidos incluem dados sensíveis de saúde e biométricos de 150.000 pacientes — a natureza dos dados é critério de agravamento expresso na Resolução n.º 2/2022; (b) Os EUA estão sujeitos ao **CLOUD Act** e à **Seção 702 do Foreign Intelligence Surveillance Act (FISA)**, que permitem acesso governamental norte-americano a dados armazenados por empresas sob jurisdição dos EUA, independentemente de localização física dos servidores — fator de risco adicional que deve constar do RIPD e de eventual Avaliação de Impacto de Transferência (*Transfer Impact Assessment* — TIA); (c) Os EUA não possuem lei federal abrangente de proteção de dados pessoais, o que fragiliza as garantias de proteção equivalente; (d) O prazo de adequação já expirou, eliminando qualquer argumento de boa-fé baseado em transição gradual; (e) A ANPD sinalizou publicamente que transferência internacional está no radar fiscalizatório ativo, o que aumenta a probabilidade de sanção.

*Atenuantes:* Se o provedor de nuvem utilizado pela MedCloud já oferece CPCs pré-aprovadas em seus contratos padrão (como é o caso de provedores como AWS, Google Cloud e Microsoft Azure, que disponibilizaram CPCs adequadas à Resolução n.º 19/2024), a regularização pode ser feita de forma relativamente célere, mediante aditivo contratual. A cooperação com a ANPD e a adoção imediata de medidas corretivas são atenuantes expressamente previstos na dosimetria.

**Classificação de risco: ALTO**

*Probabilidade de sanção:* Alta. O prazo de adequação já expirou e os dados envolvidos são sensíveis. A ANPD tem competência para aplicar sanções por violação ao Art. 33 independentemente da existência de dano concreto.

*Impacto potencial:* Multa de até 2% do faturamento bruto anual, limitada a R$ 50 milhões por infração (Art. 52 da LGPD); determinação de suspensão da transferência internacional até regularização; bloqueio ou repatriação dos dados. O impacto operacional de uma eventual determinação de suspensão seria significativo, considerando que a plataforma SaaS depende da infraestrutura em nuvem para sua operação.

**Recomendação imediata:** Verificar, em até 5 dias úteis, se o contrato com o provedor de nuvem já contém CPCs adequadas à Resolução CD/ANPD n.º 19/2024. Em caso positivo, documentar formalmente a existência das CPCs e incluir essa informação na resposta à ANPD. Em caso negativo, iniciar imediatamente a negociação do aditivo contratual e, como medida complementar, implementar criptografia de ponta a ponta e pseudonimização dos dados armazenados na nuvem.

**Condicional:** Se a empresa demonstrar que as CPCs já estavam incorporadas ao contrato com o provedor antes do prazo de 23/08/2025, a classificação se reduz para MÉDIO, com recomendação apenas de formalização documental e elaboração do TIA.

---

### 4.4 — AUSÊNCIA DE ENCARREGADO DE DADOS (DPO) FORMALMENTE NOMEADO

**Alegação:** O ex-funcionário afirma que a MedCloud não possui Encarregado de Dados (DPO) formalmente nomeado, em descumprimento ao Art. 41 da LGPD.

**Base legal aplicável:** Art. 41 da LGPD; Resolução CD/ANPD n.º 18/2024 (atuação do Encarregado); Resolução CD/ANPD n.º 2/2022 (dosimetria); precedente Telekall (2023).

**Análise:**

*Obrigatoriedade legal:* O Art. 41 da LGPD determina que o controlador indique Encarregado de Dados, pessoa natural ou jurídica responsável por: (a) aceitar reclamações e comunicações dos titulares; (b) prestar esclarecimentos e adotar providências; (c) receber comunicações da ANPD e adotar providências; (d)