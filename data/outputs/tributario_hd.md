# PARECER TRIBUTÁRIO

---

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PARECER TRIBUTÁRIO N.º 001/2026
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Cliente:         TechNova Brasil Ltda.
Assunto:         Enquadramento tributário por frente de receita;
                 impacto da Reforma Tributária (IBS/CBS);
                 operações internacionais (IRRF, CIDE, tratados,
                 transfer pricing); comparativo Lucro Presumido vs.
                 Lucro Real; estratégia de reestruturação
Data:            Abril de 2026
Legislação de
referência:      Vigente em abril de 2026
Parecerista:     [Nome do Advogado Tributarista Sênior]
                 OAB/SP n.º [XXXXX]
Classificação:   CONFIDENCIAL — Privilégio Advogado-Cliente
Natureza:        Consultiva preventiva
Complexidade:    Alta (pluritributário + internacional + reforma)
Validade:        Até 31/12/2026 ou até ocorrência de gatilho de
                 revisão (ver MT7 — Protocolo de Atualização Viva)
Índice de
Confiança:       0,71 [Alto — Consistente, com pontos monitoráveis]
Versão:          v1.0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## SUMÁRIO EXECUTIVO RÁPIDO

> *Para o CFO que dispõe de cinco minutos: a tabela abaixo condensa o parecer. As seções seguintes fundamentam cada posição.*

| Frente de Receita | Tratamento Atual (Status Quo) | Recomendação Prioritária |
|---|---|---|
| Licenciamento de software próprio | ISS (subitem 1.05 da LC 116/2003) — pós-STF 2021 | Manter ISS; segregar contratualmente; revisar NF |
| SaaS / acesso remoto à plataforma | ISS (subitens 1.05 e/ou 1.09) — risco de conflito municipal | Segregar; mapear municípios dos tomadores; monitorar LC 214/2025 |
| Serviços técnicos especializados | ISS (subitens 1.07 e 1.08) — inequívoco | Segregar NFs por subitem; verificar retenção na fonte |
| Regime tributário | Lucro Presumido | Migrar para Lucro Real se margem operacional ≥ 22% — decidir até **31/01/2027** |
| Operações internacionais (18% RB) | IRRF 15–25% + CIDE 10% (quando aplicável) | Revisar contratos; mapear tratados; estruturar transfer pricing |
| Reforma Tributária | ISS + PIS/COFINS vigentes | Preparar modelo de precificação SaaS para carga IBS+CBS ~26,5% |

> ⚠️ **PRAZO FATAL — IRRETRATÁVEL:** A opção pelo Lucro Real para o exercício de **2027** deve ser formalizada até **31 de janeiro de 2027** (primeiro pagamento de IRPJ estimado no regime). A decisão é irretratável para o exercício inteiro. Recomenda-se que o CFO e o Conselho deliberem sobre esta opção até **novembro de 2026**, com base na projeção de margem operacional do exercício corrente.

---

## ÍNDICE GERAL

- [S0 — Identificação e Objeto](#s0)
- [S1 — Premissas Fáticas](#s1)
- [S2 — Enquadramento Tributário por Frente de Receita](#s2)
- [S3 — Impacto da Reforma Tributária — IBS/CBS](#s3)
- [S4 — Operações Internacionais](#s4)
- [S5 — Comparativo Lucro Presumido vs. Lucro Real](#s5)
- [S6 — Estratégia de Reestruturação](#s6)
- [S7 — Riscos e Contingências](#s7)
- [S8 — Conclusão e Encaminhamentos](#s8)
- [Apêndice — Índice de Confiança Composto e Protocolo de Atualização](#apendice)

---

<a name="s0"></a>
## S0. IDENTIFICAÇÃO E OBJETO

### S0.1 Partes

**Consulente:** TechNova Brasil Ltda., sociedade empresária limitada, CNPJ n.º [XX.XXX.XXX/0001-XX], com sede na cidade de São Paulo, Estado de São Paulo, inscrita no NIRE n.º [XXXXXXXXXXXXXXX], doravante denominada simplesmente **"TechNova"** ou **"Consulente"**.

**Parecerista:** [Nome completo], advogado inscrito na OAB/SP sob o n.º [XXXXX], especialista em Direito Tributário Empresarial, com atuação há mais de vinte anos em assessoria tributária corporativa, planejamento tributário e contencioso administrativo e judicial.

### S0.2 Objeto Preciso da Consulta

O presente Parecer Tributário foi elaborado a pedido do Chief Financial Officer e do Conselho de Administração da TechNova, tendo por objeto a análise técnica das seguintes cinco questões, conforme delimitação acordada entre as partes:

1. **Enquadramento tributário** adequado para cada uma das três frentes de receita da Consulente, com análise da incidência de ISS versus ICMS versus ambos os tributos;
2. **Impacto da Reforma Tributária** (EC 132/2023 e LC 214/2025 — IBS/CBS) nas três frentes de receita;
3. **Tratamento das operações internacionais**, abrangendo IRRF, CIDE-Tecnologia, tratados para evitar dupla tributação, transfer pricing e aspectos cambiais;
4. **Análise comparativa** entre os regimes de Lucro Presumido e Lucro Real para o perfil econômico-financeiro atual e projetado da Consulente;
5. **Recomendações de reestruturação** tributária e societária, com cronograma de implementação faseado.

### S0.3 Regime Tributário Atual e Dados Financeiros Relevantes

A TechNova encontra-se atualmente enquadrada no regime de **Lucro Presumido**, tendo apurado receita bruta anual de **R$ 12.000.000,00** (doze milhões de reais) no exercício de referência. A opção pelo Simples Nacional encontra-se vedada pelo superamento do limite de receita bruta anual de R$ 4.800.000,00 (quatro milhões e oitocentos mil reais) estabelecido pela Lei Complementar n.º 123/2006, conforme detalhado em S1.

### S0.4 Natureza e Limitações do Parecer

Este parecer tem natureza consultiva e preventiva, não constituindo defesa em processo administrativo ou judicial. As conclusões aqui expressas baseiam-se nas informações fornecidas pela Consulente e na legislação vigente em abril de 2026, estando sujeitas às ressalvas de atualização previstas no Protocolo de Atualização Viva (MT7). Informações fáticas adicionais, especialmente relativas à composição de despesas dedutíveis e à margem operacional efetiva, poderão modificar as conclusões quantitativas da Seção S5.

---

<a name="s1"></a>
## S1. PREMISSAS FÁTICAS

### S1.1 Caracterização das Três Frentes de Receita

A TechNova opera em três frentes de receita com naturezas econômicas e jurídicas distintas. Esta distinção é fundamental, pois a classificação tributária decorre da **natureza econômica da operação**, não da nomenclatura adotada nos contratos ou nas notas fiscais. Contratos denominados genericamente como "contrato de tecnologia" ou "contrato de software" não determinam o tratamento fiscal — a substância da obrigação assumida é o elemento determinante.

> **Analogia executiva para o CFO:** As três frentes de receita são como classes de ativos em um portfólio — cada uma com perfil de risco/retorno tributário distinto. A segregação contratual e fiscal é equivalente a separar os ativos para otimizar a tributação por classe. Tratar os três como "receita de software" é o erro mais comum e mais caro neste tipo de estrutura.

#### Frente A — Licenciamento de Software Próprio

Contratos anuais renováveis pelos quais a TechNova concede ao cliente o direito de uso de software desenvolvido internamente, sem transferência de titularidade ou do código-fonte. A obrigação central é a **cessão temporária do direito de uso** de bem imaterial (programa de computador). O software é desenvolvido pela própria Consulente e não sob encomenda específica do cliente.

#### Frente B — SaaS / Acesso Remoto à Plataforma

Cobrança mensal recorrente pela qual o cliente acessa, via internet, plataforma tecnológica hospedada em infraestrutura de nuvem (AWS us-east-1, localizada nos Estados Unidos). O cliente não instala o software em seus equipamentos — acessa funcionalidades remotamente. A obrigação central é a **disponibilização contínua de infraestrutura e funcionalidades tecnológicas** por meio de acesso remoto, configurando modelo de Software como Serviço (SaaS).

#### Frente C — Serviços Técnicos Especializados

Prestação de serviços de implantação, parametrização, treinamento, suporte técnico e customização do software. A obrigação central é inequivocamente uma **obrigação de fazer**, caracterizando prestação de serviços em sentido estrito. Trata-se da frente de menor controvérsia tributária, mas que exige segregação cuidadosa quando prestada em conjunto com as Frentes A e B (contratos mistos).

### S1.2 Dados da Operação Internacional

- **Participação na receita bruta:** 18% da receita bruta anual, correspondendo a aproximadamente **R$ 2.160.000,00** (dois milhões, cento e sessenta mil reais) por ano;
- **Moeda:** Contratos denominados em dólar americano (USD), com liquidação via fechamento de câmbio no Brasil;
- **Infraestrutura:** Servidores parcialmente hospedados fora do Brasil (AWS us-east-1 — região Leste dos EUA), implicando contratação de serviços do exterior e pagamentos em moeda estrangeira;
- **Clientes internacionais:** Pessoas jurídicas domiciliadas no exterior que contratam serviços da TechNova (fluxo de recebimento do exterior para o Brasil);
- **Aspectos cambiais:** As operações de fechamento de câmbio estão sujeitas ao IOF à alíquota de 0,38% (Decreto n.º 6.306/2007, art. 15-B), incidente sobre o valor convertido. A existência ou não de instrumentos de hedge cambial não foi confirmada e deve ser verificada (ver S4).

### S1.3 Regime Tributário Atual e Verificações Preliminares

**Simples Nacional:** Descartado. A receita bruta anual de R$ 12.000.000,00 supera em 2,5 vezes o limite de R$ 4.800.000,00 estabelecido pela LC 123/2006, art. 3.º, inciso II. A opção pelo Simples Nacional é juridicamente vedada.

**Lucro Presumido:** Regime vigente. Compatível com a receita bruta anual (limite de R$ 78.000.000,00 para LP, nos termos do art. 13, §1.º, da Lei n.º 9.718/1998, com redação dada pela Lei n.º 12.814/2013). A Consulente está dentro do limite.

**Desoneração da Folha (CPRB — Lei 12.546/2011):** Não confirmado se a TechNova optou pela Contribuição Previdenciária sobre a Receita Bruta à alíquota de 4,5% em substituição à contribuição patronal de 20% sobre a folha de salários. Esta verificação é **obrigatória** antes de concluir a análise comparativa LP/LR (S5), pois a opção pela CPRB altera substancialmente a equação de custo trabalhista. Para fins de modelagem em S5, serão apresentados cenários com e sem a CPRB. **Recomenda-se que o CFO confirme este dado antes de tomar a decisão de migração de regime.**

**PIS/COFINS:** No Lucro Presumido, a TechNova recolhe PIS (0,65%) e COFINS (3%) no regime cumulativo, sem direito a créditos. No Lucro Real, passaria ao regime não cumulativo (PIS 1,65% e COFINS 7,6%), com direito a créditos sobre insumos e despesas permitidas em lei.

**Receitas financeiras:** Se a TechNova mantém caixa relevante ou aplica em instrumentos financeiros, as receitas financeiras estão sujeitas ao PIS de 0,65% e COFINS de 3% no LP, e a 0,65% + 4% (total 4,65%) no LR, nos termos do Decreto n.º 8.426/2015. Este ponto deve ser verificado.

---

<a name="s2"></a>
## S2. ENQUADRAMENTO TRIBUTÁRIO POR FRENTE DE RECEITA

> *Esta é a seção central do parecer. Uma classificação equivocada aqui invalida toda a estratégia tributária subsequente. Cada frente é tratada como um mini-parecer independente.*

### S2.1 Frente A — Licenciamento de Software Próprio

#### S2.1.1 Marco Normativo Aplicável

A tributação do licenciamento de software no Brasil foi objeto de décadas de conflito entre os Fiscos estadual (ICMS) e municipal (ISS), tendo sido definitivamente resolvida pelo Supremo Tribunal Federal em 2021.

**Legislação aplicável:**
- **LC 116/2003**, art. 1.º e Lista Anexa, **subitem 1.05** ("Licenciamento ou cessão de direito de uso de programas de computação")
- **LC 116/2003**, art. 3.º (local de incidência do ISS)
- **LC 157/2016** (alíquota mínima de 2%)
- **Convenio ICMS 106/2017** (operações com software via download — analisado abaixo)
- **ADI 1.945/STF** e **ADI 5.659/STF** — julgamento conjunto concluído em 24/02/2021

#### S2.1.2 O Marco Divisório: STF 2021 — ADIs 1.945 e 5.659

O Supremo Tribunal Federal, ao julgar conjuntamente as ADIs 1.945 e 5.659 em **24 de fevereiro de 2021**, encerrou a controvérsia histórica sobre a tributação do software. O STF fixou as seguintes teses vinculantes:

1. **Superação da distinção** entre "software de prateleira" (off-the-shelf) e "software sob encomenda" para fins de definição do tributo competente — distinção que havia sido adotada pelo próprio STF no RE 176.626 (1998) e que gerou décadas de insegurança jurídica;
2. **Prevalência do ISS** sobre o ICMS para todas as modalidades de licenciamento e cessão de direito de uso de software, independentemente da forma de comercialização ou distribuição;
3. **Inconstitucionalidade** da incidência do ICMS sobre operações com software, por violação à competência municipal estabelecida no art. 156, III, da Constituição Federal;
4. **Modulação de efeitos:** Os efeitos da decisão foram modulados para produzir efeitos a partir de **24/02/2021**, ressalvadas as ações judiciais e os procedimentos administrativos pendentes até aquela data.

> **[MT2 — Sinalizacao de Tese]** A tese de prevalência do ISS sobre o ICMS no licenciamento de software é **CONSOLIDADA** — decorre de decisão do STF com repercussão geral reconhecida e efeito vinculante (ADIs 1.945 e 5.659). Segurança: **Alta**.

> **[MT5 — Calibração Epistêmica]** Classificação: **FORTE** (>90%). A jurisprudência está pacificada no mais alto tribunal do país, com efeito vinculante sobre todos os órgãos do Poder Judiciário e da Administração Pública.

#### S2.1.3 Situação Pré-2021 — Avaliação de Repetição de Indébito

Em razão da modulação de efeitos, o ICMS pago sobre operações com software **antes de 24/02/2021** não é automaticamente recuperável. Contudo, se a TechNova ajuizou ação judicial ou apresentou impugnação administrativa antes desta data questionando a incidência do ICMS, preserva o direito à restituição retroativa.

**Recomendação imediata:** O CFO deve verificar com a equipe jurídica se há ações ou impugnações pendentes que preservem o direito à repetição de indébito do ICMS pago sobre software antes de 24/02/2021. O prazo prescricional de 5 anos (LC 118/2005) para ações de repetição de indébito ajuizadas após 2021 está a se esgotar.

#### S2.1.4 Convenio ICMS 106/2017 — Inaplicabilidade Pós-STF 2021

O Convenio ICMS 106/2017, celebrado no âmbito do CONFAZ, pretendia autorizar os Estados a cobrar ICMS sobre operações com software realizadas por transferência eletrônica (download ou streaming). Este convenio foi o fundamento normativo utilizado por diversos Estados para autuar contribuintes após 2017.

**Posição pós-STF 2021:** O Convenio ICMS 106/2017 é **inaplicável** às operações de licenciamento de software, pois o STF declarou inconstitucional a incidência do ICMS sobre tais operações, independentemente da forma de distribuição (física, download ou streaming). O convenio não tem o condão de superar decisão do STF em controle concentrado de constitucionalidade.

> **[MT4 — Contraditório Interno]** O Fisco estadual poderia argumentar que o Convenio ICMS 106/2017 permanece vigente para operações de streaming de software que não se enquadram no conceito de "licenciamento" da LC 116/2003 — ou seja, quando não há cessão de direito de uso identificável, mas mero acesso a funcionalidades (aproximando-se do modelo SaaS). Este argumento tem **baixa probabilidade de êxito** diante do STF 2021, mas explica por que autuações estaduais persistem na prática, especialmente nas Frentes A e B combinadas. A TechNova deve estar preparada para contestar eventuais autuações estaduais com base nas ADIs 1.945 e 5.659.

#### S2.1.5 ISS — Alíquota, Base de Cálculo e Obrigações Operacionais

- **Subitem aplicável:** 1.05 da Lista Anexa à LC 116/2003 ("Licenciamento ou cessão de direito de uso de programas de computação")
- **Alíquota ISS no Município de São Paulo:** 2% (Lei Municipal n.º 13.701/2003, com alterações posteriores, art. 16, inciso I — alíquota mínima estabelecida pela LC 157/2016)
- **Base de cálculo:** Preço do serviço (valor da licença anual), nos termos do art. 7.º da LC 116/2003
- **Local de incidência:** Município do estabelecimento prestador (São Paulo), nos termos do art. 3.º, caput, da LC 116/2003, salvo nas hipóteses de exceção previstas nos incisos do mesmo artigo
- **Retenção na fonte:** Obrigatória quando o tomador está localizado em São Paulo e a alíquota é igual ou superior a 2% (Lei Municipal n.º 13.701/2003, arts. 9.º e seguintes)

**Recomendação operacional — Frente A:**
- Emitir Nota Fiscal de Serviços Eletrônica (NFS-e) com enquadramento no subitem **1.05** da LC 116/2003
- CNAE principal ou secundário: **6201-5/01** (Desenvolvimento de programas de computador sob encomenda) ou **6202-3/00** (Desenvolvimento e licenciamento de programas de computador customizáveis) — verificar qual melhor reflete a atividade para fins de enquadramento municipal
- Verificar obrigatoriedade de retenção ISS pelo tomador (quando o tomador é pessoa jurídica estabelecida em São Paulo)
- **Não emitir** Nota Fiscal de Produto (NF-e) para esta frente — a emissão de NF-e implicaria reconhecimento de operação sujeita ao ICMS, atraindo autuação estadual

---

### S2.2 Frente B — SaaS / Plataforma em Nuvem

> *Esta é a frente de maior controvérsia tributária. A análise a seguir é mais extensa em razão da complexidade jurídica envolvida.*

#### S2.2.1 Natureza Jurídica do SaaS — Obrigação de Fazer vs. Cessão de Direito de Uso

O modelo SaaS (Software as a Service) caracteriza-se pela disponibilização de software via acesso remoto (internet/nuvem), sem instalação local pelo usuário e sem cessão formal do direito de uso do programa. O cliente não obtém uma licença de uso — acessa funcionalidades enquanto paga pela assinatura.

Esta característica gera a seguinte dicotomia jurídica:

| Caracterização | Tributo | Fundamento |
|---|---|---|
| Cessão de direito de uso de software | ISS — subitem 1.05 | LC 116/2003 + STF ADIs 1.945/5.659 |
| Prestação de serviço de disponibilização de acesso | ISS — subitem 1.09 | LC 116/2003 — "Disponibilização de acesso a redes de computadores" |
| Prestação de serviço genérico de tecnologia | ISS — subitens 1.07/1.08 | LC 116/2003 |
| Fornecimento de infraestrutura (bem) | ICMS | Tese dos Estados — baixa probabilidade pós-STF |

**Posição deste parecer:** O SaaS configura **prestação de serviço** sujeita ao **ISS**, enquadrável nos subitens **1.05** e/ou **1.09** da Lista Anexa à LC 116/2003. A natureza do SaaS é essencialmente uma **obrigação de fazer** — a empresa se obriga a disponibilizar, manter, atualizar e garantir o acesso à plataforma — não uma obrigação de dar (transferência de bem). O fato de o acesso ocorrer remotamente não transforma a prestação de serviço em circulação de mercadoria.

> **[MT2 — Sinalizacao de Tese]** A tributação do SaaS pelo ISS é **MAJORITÁRIA** — há posição prevalente na doutrina e em manifestações da Receita Federal e de Municípios, mas sem precedente vinculante específico do STF sobre SaaS stricto sensu (a decisão de 2021 tratou do licenciamento tradicional). Segurança: **Média-Alta**.

> **[MT5 — Calibração Epistêmica]** Classificação: **PROVÁVEL** (65–90%). A extensão do raciocínio do STF 2021 ao SaaS é logicamente consistente, mas não há decisão vinculante específica sobre o modelo SaaS.

#### S2.2.2 Subitens Aplicáveis da LC 116/2003

**Subitem 1.05:** "Licenciamento ou cessão de direito de uso de programas de computação." Aplicável quando o SaaS envolve, ainda que remotamente, a cessão do direito de uso de software específico da TechNova.

**Subitem 1.09:** "Disponibilização de acesso a redes de computadores." Aplicável quando o objeto principal é o acesso à infraestrutura e funcionalidades da plataforma, sem cessão identificável de direito de uso de programa específico.

**Recomendação:** A TechNova deve avaliar, com base no conteúdo econômico de seus contratos SaaS, qual subitem melhor caracteriza cada modalidade contratual. Em caso de dúvida, o subitem 1.05 oferece maior segurança jurídica em razão do precedente STF 2021.

#### S2.2.3 Soluções de Consulta COSIT Relevantes

A Receita Federal do Brasil, por meio da Coordenação-Geral de Tributação (COSIT), manifestou-se sobre a tributação de serviços de tecnologia em diversas oportunidades:

- **Solução de Consulta COSIT n.º 191/2017:** Reconheceu a incidência do PIS/COFINS sobre receitas de licenciamento de software como receitas de prestação de serviços, afastando o tratamento como receita de venda de mercadoria.
- **Solução de Consulta COSIT n.º 100/2021:** Tratou da tributação de serviços de computação em nuvem (cloud computing), reconhecendo a natureza de serviço para fins de PIS/COFINS.

> **Nota:** Não há, até a data deste parecer, Solução de Consulta COSIT específica e definitiva sobre ISS no SaaS. A ausência de manifestação formal da RFB sobre ISS (tributo de competência municipal) é esperada, mas a ausência de Solução de Consulta Municipal específica para São Paulo aumenta o risco de autuação.

#### S2.2.4 Competência Municipal — Risco de Bitributação (LC 157/2016)

Este é o **ponto crítico** da Frente B. A LC 157/2016 alterou a regra de competência para cobrança do ISS em determinados serviços, incluindo serviços de tecnologia, deslocando a competência do **município do estabelecimento prestador** para o **município do domicílio do tomador** (art. 3.º, XXIII, da LC 116/2003, com redação da LC 157/2016).

**Impacto prático para a TechNova:**

- Se os clientes SaaS estão localizados em múltiplos municípios brasileiros, o ISS pode ser devido a cada um desses municípios, nas respectivas alíquotas (mínimo de 2%, máximo de 5%);
- A TechNova teria obrigações acessórias em cada município onde há tomador de serviço;
- O risco de **bitributação municipal** é real: o Município de São Paulo (sede da TechNova) pode exigir ISS com base na regra geral (estabelecimento prestador), enquanto o município do tomador exige com base na regra especial da LC 157/2016.

> **[MT4 — Contraditório Interno]** O Fisco do Município de São Paulo poderia argumentar que a regra do domicílio do tomador, inserida pela LC 157/2016, é inconstitucional por violar o princípio da territorialidade tributária e por criar obrigações acessórias desproporcionais. De fato, o STJ tem precedentes reconhecendo a inconstitucionalidade de determinadas extensões da competência municipal. Contudo, a LC 157/2016 está vigente e municípios do interior têm autuado prestadores de serviços de tecnologia com base nela. **O risco de bitributação é concreto e deve ser provisionado** (ver S7).

> **[MT3 — Teste "E se estiver errado?"]** Se a TechNova recolher ISS apenas para São Paulo e o município do tomador autuar com base na LC 157/2016: autuação retroativa de até 5 anos, com multa de 75% sobre o valor do ISS não recolhido, acrescida de juros SELIC. Para uma receita SaaS de, por exemplo, R$ 5.000.000,00 ao ano, o passivo máximo seria de aproximadamente **R$ 3.750.000,00** em 5 anos (5% ISS x R$ 5M x 5 anos x 1,75 de multa e juros).

#### S2.2.5 Recomendação Operacional — Frente B

- Emitir NFS-e com enquadramento no **subitem 1.05 ou 1.09** da LC 116/2003 (conforme análise contratual)
- CNAE: **6319-4/00** (Portais, provedores de conteúdo e outros serviços de informação na internet) ou **6311-9/00** (Tratamento de dados, provedores de serviços de aplicação e serviços de hospedagem na internet)
- Mapear **todos os municípios** dos tomadores de serviço SaaS e avaliar a necessidade de inscrição municipal e recolhimento de ISS em cada localidade
- Incluir nos contratos SaaS **cláusula tributária** que defina responsabilidade pelo ISS e preveja repasse ao tomador em caso de autuação por município diverso do de São Paulo
- Monitorar a jurisprudência do STJ sobre a constitucionalidade da regra de domicílio do tomador da LC 157/2016

---

### S2.3 Frente C — Serviços Técnicos Especializados

#### S2.3.1 Natureza Jurídica e Enquadramento

A Frente C abrange implantação, parametrização, treinamento, suporte técnico e customização. Trata-se, inequivocamente, de **prestação de serviços** (obrigação de fazer), sem qualquer controvérsia quanto ao tributo competente: **ISS**.

Os subitens aplicáveis da LC 116/2003 são:

| Atividade | Subitem LC 116/2003 |
|---|