// import pg from 'pg'
const pg = require('pg')
const { Pool } = pg

const pool = new Pool({
  user: 'postgres',
  password: '',
  database: 'likeme',
  port: 5432,
  host: '127.0.0.1',
  allowExitOnIdle: true
})

module.exports = { pool }
