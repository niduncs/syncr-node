const db = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL
});

const defaultUserSettings = {
  
}

module.exports = {
  create: (data) => {

  },
  update: (data) => {

  },
  findById: (id) => {

  }
}
