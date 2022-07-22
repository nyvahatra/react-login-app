const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'react',
  password: 'postgres',
  port: 5433,
});

pool.connect(function(error){
  if(!!error){
    console.log(error);
  }else{
    console.log('Connected!:)');
  }
});

module.exports = pool;