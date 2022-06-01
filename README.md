# Health Insurance Cross-Sell Prediction

<img src="https://github.com/RodrigoBarbo-sa/health_insurance_ranking/tree/main/Images/coverfig.jpg?raw=true" width=70% height=70% title="Health-Insurance-Ranking" alt="project_cover_image"/>

Projeto de rankeamento de clientes interessados na adesão a um plano seguro veicular.

Contextualização:
Os dados do projeto foram obtidos do Kaggle, do desafio "Health Insurance Cross Sell Prediction" e disponibilizados em um banco de dados AWS.

O contexto de negócios é fictício, mas seu planejamento, desenvolvimento e solução  seguem todos os passos de um projeto real.

## 1. Problema de negócios
### 1.1 Problema
A Sandpiper Crossing Health é uma empresa especializada na venda de seguros de saúde.
Através de uma pesquisa, ela obteve retorno de 304 mil clientes sobre o interesse em adquirir um seguro veicular. O novo seguro foi desenvolvido, e está sendo ofertado aos interessados.

Porém existem mais 76 mil clientes, entre novos e antigos, que não responderam a pesquisa.
O call center já sobrecarregado com tarefas de suporte ao cliente, tem capacidade de contatar apenas 20 mil destes clientes potenciais.
Logo, precisa de uma lista ordenada por interesse destes 76 mil clientes, a fim de otimizar a conversão e o faturamento da empresa.

### 1.2 Objetivo
A partir dos dados de interesse em seguro veicular dos 304 mil clientes, construtir um ranking por ordem de interesse (propensão de compra) dos 76 mil potenciais clientes.

As seguintes questões de negócio devem ser respondidas ao gestor do call center:

- Quais são os principais insights sobre os atributos mais relevantes de clientes interessados em seguro veicular?
- Do total de clientes interessados em seguro veicular, qual a porcentagem que o call center conseguirá contatar fazendo 20 mil ligações? Qual é a receita estimada proveniente dessas ligações?
- Se a capacidade do call center aumentar para 40 mil ligações, qual a porcentagem de clientes interessados em adquirir um seguro veicular o call center conseguirá contatar e a estimativa de receita ?
- Quantas ligações o call center precisa fazer para contatar 80% dos clientes interessados em adquirir um seguro veicular?

## 2. Premissas de negócio
- O time de vendas já utiliza o Google Sheets como ferramenta corporativa. É preciso que o ranking de propensão de compra seja incorporado nele.

## 3. Planejamento da solução
### 3.1. Produto final
O que será entregue efetivamente?
- Uma funcionalidade dentro da ferramenta Google Sheets, que ordena os 76 mil clientes (ou quaisquer novos clientes inclusos na planilha) por propensão de compra.

### 3.2. Ferramentas
Quais ferramentas serão usadas no processo?
- Python 3.8.10;
- Jupyter Notebook;
- Git e Github;
- Coggle Mindmaps;
- Heroku Cloud;
- Algoritmos de Regressão e Classificação;
- Pacotes de Machine Learning sklearn e xgboost;
- Técnicas de Seleção de Atributos;
- Flask e Python API's;
- Google Sheets Apps Script.

### 3.3 Processo
#### 3.3.1 Estratégia de solução
Com base no objetivo do projeto, trata-se portanto de um projeto de Learning to Rank (LTR).

Minha estratégia para resolver esse desafio, baseado na metodologia CRISP-DS, é detalhada pelo plano abaixo:

**Step 01. Data Description:**
- Coletar dados em um banco de dados na AWS Cloud.
- Compreender o significado de cada atributo dos interessados.
- Renomear colunas, compreender dimensões e tipos dos dados.
- Identificar e tratar dados nulos.
- Analisar atributos através de estatística descritiva.
- Separar 20% dos dados para teste (aleatoriamente, mas estratificados pela variável resposta).

**Step 02. Feature Engineering:**
- Criar mindmap de hipóteses de negócio.
- Realizar a feature engeneering, criando as features necessárias para validação das hipóteses.

**Step 03. Data Filtering:**
- Filtrar registros e atributos de acordo com restrições de negócio.

**Step 04. Exploratory Data Analysis:**
- Realizar uma análise univariada, avaliando detalhes de cada atributo.
- Realizar uma análise bivariada, validando as hipótestes criadas e gerando insights de negócio.
- Criar tabela de resultados das hipóteses, e relevância estimada dos atributos para o aprendizado dos modelos.

**Step 05. Data Preparation:**
- Padronizar atributos numéricos com distribuição normal.
- Reescalar atributos numéricos com distribuição não normal.
- Codificar atributos categóricos em atributos numéricos.
- Aplicas as transformações acima aos dados de teste.

**Step 06. Feature Selection:**
- Separar dados de treino e validação.
- Rodar algoritmo para obter sugestão de atributos relevantes.
- Analisar o resultado em conjunto com os atributos relevantes estimado na EDA.
- Selecionar apenas os melhores atributos para treinar os modelos de machine learning.  

**Step 07. Machine Learning Modelling:**
- Rodar algoritmos: KNN classifier, Logistic regression, ExtraTrees classifier, Ramdom Forest e XGBboost classifier.
- Plotar curva de ganho cumulativo e lift, e calcular precison@k/recall@k de cada modelo.
- Criar tabela de performance comparando precison@k/recall@k de cada modelo.

**Step 08. Hyperparameter Fine Tunning:**
- Fazer um ajuste fino de hiperparâmetros no modelo vencedor (segundo critérios de precision@k e recall@k) , identificando o melhor conjunto de parâmetros para maximizar suas capacidades de aprendizagem.
- Aplicar validação cruzada nesse, reduzindo o viés de seleção (teoria da amostragem), por utilizar várias amostras diferentes dos dados.
- Selecionar o modelo com melhor conjunto de hiperparâmetros, e avaliar sua capacidade de aprendizagem.
- Plotar curvas de ganho cumulativo e lift
- Calcular precison@k/recall@k do modelo
- Submeter esse modelo aos dados de teste, e plotar suas curvas de ganho cumulativo e lift.
- Comparar precison@k/recall@k em treino vs. teste, avaliando a capacidade de generalização do modelo (aprendizado com dados inéditos).  

**Step 09. Convert Model Performance to Business Values:**
- Responder as questões de negócio do gestor ao call center.
- Comprarar resultados da lista aleatória com a lista ordenada por propensão de compra.
- Traduzir a performance do modelo em resultados financeiros para a Insurance All.

**Step 10. Deploy Modelo to Production:**
- Criar as classes para publicação em produção.
- Testar as classes localmente.
- Publicar modelo no Heroku Cloud.
- Criar App Script em Google Sheets para consultar o modelo em produção.
- Implementar botão que consulta a propensão de compra dos clientes no Google Sheets, e testar a solução.


## 4. Os 3 principais insights dos dados
Durante a análise exploratória de dados, foram gerados insights ao time de negócio, através da validação das hipóteses.

Insights são informações novas, ou que contrapõe crenças até então estabelecidas do time de negócios. São também acionáveis, possibilitando ação para direcionar resultados futuros.

#### H1 - O interesse é maior em clientes com idade maior.

<img src="https://github.com/nortonvanz/Health-Insurance-Ranking/blob/pa004_norton_vanz/images/h1_age.png?raw=true" alt="h1_validacao" title="Interesse vs Idade" align="center" height="380" class="center"/>

Hipótese falsa. Pode ser observado que clientes entre 40-45 anos são os mais interessados em seguro veicular. Além disso o interesse cresce após os 27 anos e decai a partir dos 45

* Insight de negócio: Utilizar o conhecimento da faixa etária mais interessada em campanhas de marketing direcionadas.

#### H2 - O interesse é maior em clientes que possuem veículos mais novos.

<img src="https://github.com/nortonvanz/Health-Insurance-Ranking/blob/pa004_norton_vanz/images/h2_vehicle_age.png?raw=true" alt="h2_validacao" title="Interesse vs Idade do Veículo" align="center" height="380" class="center"/>

Hipótese falsa. Quando mais velho o veículo, maior é o interesse em seguro veicular:
- 4% dos clientes com veículos abaixo de 1 ano possuem interesse.
- 17% dos clientes com veículos entre 1 e 2 anos possuem interesse.
- 29% dos clientes com veículos com mais de 2 anos possuem interesse.

* Insight de negócio: Buscar dados de acionamento de seguro por clientes com veículos mais velhos, a fim de validar esta possível correlação. Havendo correlação, avaliar necessidade de reajustes no preço dos seguro ofertados a estes clientes.

#### 3 O interesse é maior em clientes que possuíam seu veículo previamente segurado.

<img src="https://github.com/nortonvanz/Health-Insurance-Ranking/blob/pa004_norton_vanz/images/h3_prev_insured.png?raw=true" alt="h3_validacao" title="Interesse vs Segudo Prévio" align="center" height="380" class="center"/>

Hipótese falsa. 22% dos clientes que não possuíam veículo previamente segurado estão interessados em seguro de veículo, enquanto apenas 1% dos clientes que possuíam seguro tem interesse.

* Insight de negócio: Obter informações sobre as condições dos seguros dos clientes que possuem seguro e não possuem interesse, realizando um benchmarking entre a oferta da Insurance All e a da concorrência, visando tornar-se mais atrativo a eles.

# 5. Modelo de Machine Learning aplicado

Nas tabela abaixo, precision@k e recall@k são exibidas para os diferentes modelos que foram aplicados ao nosso problema de negócio. Pelo fato de a equipe do call center ter a capacidade de realizar 20.000 ligações e isso representar 26% da base de teste (76 mil clientes), os indicadores foram aplicados para essa mesma proporção para avaliação dos modelos aplicados com a base de treino.

Precision@k: conta quantas previsões foram corretas até k e divide por todas as previsões feitas até k.

Ex: Precisão top 40% (ou 12196) k = 0,25 - Significa que em 40% da base, o modelo acertou 25% em relação ao modelo perfeito, que acertaria 60% no top 40%, sendo que depois de 12%, já capturou todos os interessados, e passaria a capturar apenas não interessados.

Recall@k: conta quantas previsões foram corretas até k e divide por todos os exemplos verdadeiros.

Ex: Recall top 40% (ou 12196) k = 0,8 - Significa que 80% do total de clientes interessados aparecem nos top 40% resultados da lista ordenada.

|Model|Precision at 26%|Recall at 26% |
|----------------|:------------------:|:-----------------------:|
| XGBoost | 0.33 | 0.70 |
| Extra Trees Classifier | 0.30 | 0.63 |
| Random Forest | 0.30 | 0.63 | 
| KNN Classifier| 0.29 | 0.63 | 
| Logistic Regression | 0.28 | 0.60 |

O melhor modelo portanto foi o XGBoost Classifier, e por isso foi eleito para deploy em produção.
Após a escolha do Modelo XGBoost, foram selecionados valores de hiperparâmetros aleatoriamente, e para cada conjunto de hiperparâmetros foi realizada a validação cruzada. Na tabela abaixo, pode-se verificar quais combinações de hiperparâmetros foram utilidas e qual desempenho de cada uma em termos  de precision@k e recall@k.

═════════╤═══════════════════════╤═══════════════════════╤════════════════════════════════════════════════════════════╕
│ model   │ precision@k           │ recall@k              │ hyperparameters                                            │
╞═════════╪═══════════════════════╪═══════════════════════╪════════════════════════════════════════════════════════════╡
│ #1      │ 0.329570 +/- 0.002956 │ 0.699128 +/- 0.006302 │ 'n_estimators': 100, 'max_depth': 2, 'scale_pos_weight': 2 │
├─────────┼───────────────────────┼───────────────────────┼────────────────────────────────────────────────────────────┤
│ #2      │ 0.332913 +/- 0.002856 │ 0.706219 +/- 0.006080 │ 'n_estimators': 120, 'max_depth': 3, 'scale_pos_weight': 1 │
├─────────┼───────────────────────┼───────────────────────┼────────────────────────────────────────────────────────────┤
│ #3      │ 0.329570 +/- 0.002956 │ 0.699128 +/- 0.006302 │ 'n_estimators': 100, 'max_depth': 2, 'scale_pos_weight': 2 │
├─────────┼───────────────────────┼───────────────────────┼────────────────────────────────────────────────────────────┤
│ #4      │ 0.332093 +/- 0.003029 │ 0.704480 +/- 0.006449 │ 'n_estimators': 100, 'max_depth': 3, 'scale_pos_weight': 1 │
├─────────┼───────────────────────┼───────────────────────┼────────────────────────────────────────────────────────────┤
│ #5      │ 0.333714 +/- 0.002653 │ 0.707919 +/- 0.005659 │ 'n_estimators': 110, 'max_depth': 4, 'scale_pos_weight': 1 │
╘═════════╧═══════════════════════╧═══════════════════════╧════════════════════════════════════════════════════════════╛



# 6. Performance do modelo de Machine Learning
Com o uso dos dados de teste (dados inéditos), é feita a simulação de performance do modelo em ambiente de produção.

As curvas de ganho cumulativo e lift dos dados de teste são apresentadas abaixo.

<img src="https://github.com/nortonvanz/Health-Insurance-Ranking/blob/pa004_norton_vanz/images/gain_lift_test_final.png?raw=true" alt="curva lift final" title="Curva Lift - Comparação dos modelos" align="center" height="700" class="center"/>

Na sequência, as duas tabelas demonstram os valores de precision@k e recall@k do XGBoost.

É possível observar que comparando-se o modelo de treino e validação com o modelo de teste, as métricas permaneceram muito parecidas.

|Model XGBoost|Precision at 26%|Recall at 26% |
|----------------|:------------------:|:-----------------------:|
| Apllied at Validation Dataset | 0.332 | 0.705 |
| Apllied at Test Dataset | 0.328 | 0.702 |


Isto evidencia que o modelo tem uma boa capacidade de generalização, ou seja, é capaz de aprender com dados nunca antes vistos.


# 7. Resultados de Negócio

Dos 76.220 clientes, 9.342 estão interessados em seguros de veículos. (12,2% do total)
Vamos assumir que o ticket médio para um seguro veicular anual da Sandpiper Crossing Health é: $ 2000 e que todos os clientes interessados no mesmo irão assinar o contrato.

As questões de negócios abaixo serão respondidas com base nas premissas citadas.

### Qual a porcentagem de clientes interessados em seguro veicular, o call center conseguirá contatar fazendo 20 mil ligações?

<img src="https://github.com/nortonvanz/Health-Insurance-Ranking/blob/pa004_norton_vanz/images/20k_calls_results.png?raw=true" alt="20 k calls" title="Resultados com 20 mil ligações" align="center" height="700" class="center"/>

Pela lista aleatória:
 - A equipe de vendas contata 26% dos interessados em seguro veicular: 2.429 clientes.
  ==> Receita estimada: 2.429 * 2000 = US$ 4,858 milhões por ano.

Pela lista ordenada (modelo):
 - A equipe de vendas contata 70% dos interessados em seguro veicular: 6.539 clientes.
  ==> Receita estimada: 6.539 *  = US$ 13,078 milhões por ano.

RESULTADO: O modelo é aproximadamente 2,7 vezes melhor que a lista aleatória (ver Lift: linha azul x verde).
Portanto, a receita estimada é 2,7 vezes maior que a lista aleatória: uma diferença de  US$ 8,220 milhões.


### Se a capacidade do call center aumentar para 40 mil ligações, qual a porcentagem de clientes interessados em adquirir um seguro veicular o call center conseguirá contatar?

<img src="https://github.com/nortonvanz/Health-Insurance-Ranking/blob/pa004_norton_vanz/images/40k_calls_results.png?raw=true" alt="40 k calls" title="Resultados com 40 mil ligações" align="center" height="700" class="center"/>

Pela lista aleatória:
  - A equipe de vendas contata 52% dos interessados em seguro veicular: 4858 clientes (ver Ganho: cruzamento linha preta x verde).
  ==> Receita estimada = 4858 * 2000 = US$ 9,716 milhões por ano.

Pela lista ordenada (modelo):
  - A equipe de vendas contata 99,3% dos interessados em seguro veicular: 9.249 clientes (ver Ganho: cruzamento linha azul x verde).
  ==> Receita estimada: 9.249 * 2000 = US$ 18,498 milhões por ano.

RESULTADO: O modelo é 1,9 vezes melhor que a lista aleatória (ver Lift: cruzamento linha azul x verde).
Portanto, a receita estimada é 1,9 vezes maior que a lista aleatória: uma diferença de US$ 8,782 milhões.


### Quantas ligações o call center precisa fazer para contatar 80% dos clientes interessados em adquirir um seguro veicular?

De acordo com o modelo, para alcançar 80% das pessoas interessadas, seria necessário ligar para cerca de 24000 pessoas da lista. Isso representa aproximadamente 31% da base.


### Planilha funcional em Google Sheets

<img src="/images/gif_800.gif" alt="cumulative gains curve and lift curve" title="Demontração da solução" align="center" height="600" class="center"/>

Acesso a planilha: [Google Sheets - Health Insurance Ranking](https://docs.google.com/spreadsheets/d/1GM-Ul_8zbroP7pNapIoZuXfV3NJNghgihs9lYQiDqPI/edit#gid=0)


# 8. Conclusões

Com base nos resultados de negócio, conclui-se que o objetivo do projeto foi acançado.

Com a solução de dados entregue, a Sandpiper Crossing Health possui agora uma vantagem competitiva frente aos seus concorrentes que não utilizam Machine Learning em seu modelo de negócios, reduzindo o custo de aquisição de clientes, e aumentando o seu faturamento.

Pelo fato da solução implementada via planilha poder ser utilizada para novos clientes que ainda nem foram consquistados, é esperado um incremento ainda maior no faturamento esperado.  


# 9. Melhorias futuras
- Criar mais atributos a partir dos já existentes, buscando gerar mais insumos para o aprendizado dos modelos e otimizar indicadores de desempenho.
- Utilizar a validação cruzada em todos os modelos de machine learning no próximo ciclo do projeto.
- Aproveitar as informações da base e traçar perfis de clientes, que podem servir como base para o setor de ecommerce da empresa realizar uma segmentação na hora de prospectar clientes online.


## 10 Referências
* O Dataset foi obtido no [Kaggle](https://www.kaggle.com/datasets/anmolkumar/health-insurance-cross-sell-prediction).
* A imagem utilizada é de uso livre e foi obtida no [Pexels](https://www.pexels.com/pt-br/foto/onibus-branco-ao-lado-da-estrutura-de-concreto-2889806/).
