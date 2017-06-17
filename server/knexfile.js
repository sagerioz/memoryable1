'use strict'

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/memoryable_dev'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/memoryable_test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
