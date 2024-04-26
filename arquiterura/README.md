# Fundamentos da arquitetura de software
## Tipo de arquiteturas
### Arquitetura de Software
`"É a organização fundamental de um sistema e seus componentes, suas relações, seu ambiente, bem como os pricípio que guiam seu design e evolução." (IEEE Standard 1471)`
- O processo de arquiterar um software estabelece que o que está sendo desenvolvido faça parte de um conjunto maior
- Diretamente ligada ao desenvolvimento de software
- Afeta diretamente a estrutura organizacional da empresa
`"Organizações que desenvolvem sistemas de software tendem a produzir sistemas que são cópia das estruturas de comunicação dessas empresas." (Melvin Conway)`

### Arquitetura de Solução
- Fica entre a área de negócios e  software
- Transforma o requisito de negócio em solução de software
- Desenhos arquiteturais da solução de um software para reproduzir como ele irá funcionar
  - C4
  - UML
  - BPMN
- Analisa impactos comerciais em relação a uma escolha tecnológica
- Pode participar do processo de pré-venda e venda para sanar dúvidas técnicas
- Analisa os custos para o negócios

### Arquitetura de Tecnológica
- Especialidade em tecnologias especificas do mercado
- Gera valor com base nessas especialidades (Arquiteto Java, SQL Server, Elastic, Oracle, etc)

### Arquitetura de Corporativa
- Impacta estrategicamente a organização como um todo
- Avaliação de custos (Com mão de obra ou com tipo de ferramentas)
- Avalição de possíveis novas tecnologias 
- Padronização de tecnologias
- Planejamento de grandes implantações
  - Sitemas "core"
  - Migrações

## Pepel do Arquiteto de Software
- Transforma requisitos de negócio em padrões arquiteturais
- Orquestra desenvolvedores e experts de domínio
- Entender de forma profunda conceitos e modelos arquiteturais
- Auxilia na tomada de decisão nos momentos de crise
- Reforça boas práticas de desenvolvimento
- Code reviews
- Algumas empresas não pussuiem a um cargo de Arquiteto de Software, mas possuem proficionais que acabam realizando esse papel com base nas suas experiências anteriores, normalmente são proficionais mais experientes como Desenvolvedores Seniors e Tech Leads
- Há empresas que apesar de não possuírem o cargo de Arquiteto de Software, possuem um departamento de arquitetura que auxilia os times com questões arquiteturais

## Vantagens de entender sobre arquitetura
- Poder navegar entre uma visão macro para micro de um ou mais softwares
- Entender as diversas opções para desenvolver a mesma coisa, e escolher a melhor dentre elas para esse contexto
- Pensar no projeto a longo prazo e de maneira sustentável
- Entender de padrões de projeto e boas práticas
- Maior clareza do impacto do software 
- Tomar decisões com maior confiança

## Arquitetura (Escopo Global) vs Design (Escopo Local)
`"Atividades relacionadas a arquitetura de software são sempre de design. Entretanto, nem toda atividade de design são sobre arquitetura. O objetivo primário da arquitetura de software é garantir que os atributos de qualidade, restrições de alto nível e os objetivos do negócio, sejam atendidos pelo sistema. Qualquer desisão de design que não tenha relação com este objetivo não é arquitetural. Todas as desisões de design para um componente que não sejam "visíveis" fora dele, geralmente, também não são." (Elemar Jr.)`

## Sustentabilidade de Software
- Desenvolver software é caro
- Software resolve uma "dor"
- Software precisa se pagar ao longo do tempo
- Acompanhar a evolução do negócio
- Quanto mais tempo o software ficar no ar, mais retorno ele gera
- A solução precisa ser arquitetada 

## Pilares da Arquitetura de Software
- Estruturação
- Componentização
- Relacionamento entre sistemas
- Governança

## Requisitos Arquiteturais (RAs)
- Performance
- Armazenamento de dados
- Escalabilidade
- Segurança
- Legal
- Audit
- Marketing

## Características Arquiteturais
### Operacionais
- Disponibilidade
- Recuperação de desastres
- Performance
- Recuperação (backup)
- Confiabilidade e segurança
- Robustez
- Escalabilidade

### Estruturais
- Configurável
- Extensibilidade
- Fácil instalação
- Reuso de componentes
- Internacionalização
- Fácil manutenção
- Portabilidade
- Fácil suporte (logs, debugging)

### Cross-Cutting
- Acessibilidade
- Processo de retenção e recuperação de dados
- Autenticação e Autorização
- Legal
- Privacidade
- Segurança
- Usabilidade

## Perspectivas para arquitetar software de qualidade
### Performance
- É o desempenho que um software possui para completar um determinado workload
- Um software performático é diferente de um software escalável
- Métricas para medira a performance
  - Latência ou "response time" (Diminuir)
    - Normalmente medida em milliseconds
    - É afetada pelo tempo de processamento da aplicação, rede e chamadas externas
  - Throughput (Aumentar)
    - Quantidade de requisições
    - Diretamente ligado a latência
- Principais razões ocasionam em baixa performance
  - Processamento ineficiente
  - Recursos computacionais limitados
  - Trabalhar de forma bloqueante
  - Acesso serial a recursos
- Principais formas para aumentar a eficiência
  - Escala da capacidade computacional (CPU, Disco, Memória, Rede)
  - Lógica por trás do software (Algoritmos, queries, overhead de frameworks)
  - Concorrência e paralelismo
  - Bancos de dados (tipo de bancos, schema)
  - Caching

- Diferença entre concorrência e paralelismo <br>
`"Concorrência é sobre lidar com muitas coisas ao mesmo tempo. Paralelismo é fazer muitas coisas ao mesmo tempo." (Rob Pike)`

- Trabalhando de forma serial - único processo
  - Atendendo 5 requests de 10s
  - Irá atender todos com 50s
- Trabalhando de forma paralela/concorrente
  - Atendendo 5 requests
  - Usará 5 threads
  - Irá atender todos em 10s, pois irá atende-los em paralelo

- Uso de Caching
  - Dados estáticos
  - Páginas web
  - Funções internas 
    - Evita reprocessamento de algoritmos pesados
    - Acesso ao banco de dados
  - Cache Exclusivo
    - Baixa latência
    - Duplicado entre nós
    - Problemas relacionados a sessões
  - Cache Compartilhado
    - Maior latência
    - Não há duplicação
    - Sessões compartilhadas
    - Banco de dados externo
      - Redis
      - Memcache
      - MySQL
  - Edge computing (Cache na Borda)
    - Cache realizado mais próximo ao usuário
    - Evita a requisição chegar até o Cloud Provider / Infra
    - Normalmente arquivos estáticos
    - CDN - Content Delivery Network
    - Cloudflare workers
    - Vercel
    - Akamai

### Escalabilidade
`"Ecalabilidade é a capacidade de sisitemas suportarem o aumento (ou a redução) dos workloads incrementando (ou reduzindo) o custo em menos ou igual proporção." (Elemar Jr.)`

- Escalabilidade x Performance <br>
  A Performance tem o foco em reduzir a latência e aumentar o throughtput, já a escalabilidade visa termos a possibilidade de aumentar ou diminuir o throughput adicionando ou removendo a capacidade computacional

- Escala vertical: Recursos computacionais
- Escala horizontal: Quantidade de máquinas
- É _imposivel escalar verticalmente para sempre_, pois em algum momento irá atingir o limite computacional daquela máquina. <br>
  Por isso é _mais comum escalar horizontalmente_.

- Descentralização <br>
  Quando vamos escalar o software horizontalmente é necessário descentraliza-lo, para que as máquinas sejam descartáveis.
  - Disco efêmero
  - Servidor de aplicação x Servidor de assets
  - Cache centralizado
  - Sessões centralizadas
  - `Tudo pode ser destruído e criado facilmente`

- Escala de Banco de Dados
  - Aumento de recursos computacionais
  - Distribuindo responsabilidades: criar banco de dados especificos para escrita/leitura <br>
    Toda vez que escrever algo será inserido na réplica, e caso tenha que fazer a leitura de algum dado, buscarei na réplica
  - Shards de forma horizontal
  - Serverless
  - Otimização de queries e índices
    - Tabalhe com índices de forma consistente
    - Sistema de APM (Application Performance Monitoring)
    - Explain nas queries
    - CQRS (Command Query Responsability Segregation): separa escrita e leitura

- Proxy reverso
  - É um servidor que fica na frente dos servidores web e encaminha as solicitações do cliente (por exemplo, navegador web) para esses servidores web
  - Soluções populares
    - Nginx
    - HAProxy (HA = High Availability)
    - Traefik

### Resiliência
Resiliência é o conjunto de estratégias adotadas intencionalmente para a _adaptação_ de um sistema quando ocorre uma falha.

- Minimizar os riscos de perda de dados e transações para o negócio
- Proteger e ser protegido
  - Um sistema em uma arquitetura distribuída precisa adotar mecanismos de autopreservação para garantir ao máximo sua operação com qualidade
  - Um sistema não pode ser "egoísta" ao ponto de realizar mais requisições em um sistema que está falhando
  - Um sistema lento no ar muitas vezes é pior que um sistema fora do ar (Efeito dominó)
  - Health Check
    - Sem sinais vitais, não é possível saber a "saúde" de um sistema
    - Um sistema qua não está saudável possui uma chance de se recuperar caso o tráfego pare de ser direcionado a ele temporariamente
    - Caso eu tenha ciência que o sistema não está "saudável", com base no health check, posso criar estratégias para evitar mandar requisições para aquele sistema, para que ele consiga ter um self healing 
    - Health check de qualidade
      - Retorna a média do tempo das últimas requisições
      - Faz alguma consulta no banco
  - Rate Limiting
    - Protege o sistema com base no que ele foi projetado para suportar
      - Se o sistema aguenta 100 RPS, se passar desse valor ele irá retornar um status 500
    - Referência programada por tipo de client
      - Colocar um limite de RPS por cliente
  - Circuit Breaker
    - Protege o sistema fazendo com que as requisições feitas para ele sejam negadas
    - Status
      - Circuito fechado: Requisições chegam normalmente 
      - Circuito fechado: Requisições não chegam ao sistema. Erro instantâneo ao client
      - Circuito Meio aberto: Permite uma quantidade limitada de requisições para verificação se o sistema tem condições de voltar ao ar integralmente
    - Podemos aplicar essa tática no nosso sitema, porém podemos aplicar essa estratégio na rede, usando por exemplo o Service Mesh
  - API Gateway
    - Garante que requisições "inapropriadas" cheguem atá o sistema:
      - Usuário não autenticado
    - Implementa políticas de Rate Limiting, Health Check...
    - Transformar XLM em JSON, executar uma Lambda Function, trabalhar com logs...
    - Kong 

