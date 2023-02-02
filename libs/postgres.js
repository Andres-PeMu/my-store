const { Client } = require('pg');

async function getConnection(){
  const client = new Client({
    host: 'localhost',
    port: 5452,
    user: 'andres',
    password: 'admin123',
    database: 'my_store'
  });

  await client.connect();
}

module.exports = getConnection;
