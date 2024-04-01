const express = require("express")
const mysql = require("mysql")

const app = express()
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
}

const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Rodolfo')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
  res.send('<h1>NODEJS COM DOCKER</h1>')
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})