##  1. Desafio GO
- Publicar uma imagem no docker hub
- Quando executar a imagem terá o seguinte resultado: `Full Cycle Rocks!!`
- A imagem ter menos de 2MB

## 2. Desafio Nginx com NodeJS
- Realizar um proxy reverso com Nginx e NodeJS
- Ao acessar o Nginx, realizará um registro de um nome na tabela people de um banco de dados MySQL
- Gere o docker-compose de uma forma que basta apenas rodarmos: `docker-compose up -d` que tudo deverá estar funcionando e disponível na porta: 8080.
- O retorno da aplicação NodeJS para o Nginx deverá ser:
```
<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.
```