import mysql from 'mysql';

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
}

const executeQuery = (query, callback) => {
  const connection = mysql.createConnection(config)
  connection.query(query, callback)
  connection.end()
}

const init = () => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS people(
      id INT NOT NULL AUTO_INCREMENT, 
      name VARCHAR(255) NOT NULL, 
      PRIMARY KEY(id)
    )
  `

  executeQuery(createTableQuery)
}

const add = (name) => {
  const addQuery = `
    INSERT INTO people(name) values('${name}')
  `
  executeQuery(addQuery)
}

const getAll = async () => {
  const getAllQuery = `SELECT * FROM people`;

  const people = await new Promise((resolve, reject) => {
    executeQuery(getAllQuery, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
  
  return people;
}


export const database = {
  init,
  add,
  getAll,
}