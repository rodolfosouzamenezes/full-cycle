const express = require("express")

const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('<h1>NODEJS COM DOCKER</h1>')
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})