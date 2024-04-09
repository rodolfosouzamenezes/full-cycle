import express from 'express';
import { database } from './database.js';

const app = express()
const port = 3000

database.init()

app.get('/', async (req, res) => {
  database.add('Rodolfo')
  const people = await database.getAll()

  res.send(`
    <h1>Full Cycle Rocks!</h1>
    <ul>
      ${people.map((person) => {
        return `<li>${person.id} - ${person.name}</li>`
      })}
    </ul>
  `)
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})