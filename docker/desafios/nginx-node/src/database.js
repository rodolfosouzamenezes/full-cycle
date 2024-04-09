import mysql from 'mysql';

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
}

const executeQuery = (query) => {
  const connection = mysql.createConnection(config)
  connection.query(query)
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
  const connection = mysql.createConnection(config);

  const people = await new Promise((resolve, reject) => {
    connection.query(getAllQuery, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
  
  connection.end();
  return people;
}


export const database = {
  init,
  add,
  getAll,
}