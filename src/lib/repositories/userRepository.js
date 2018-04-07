const db = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL
});

module.exports = {
  create: (data) => {
    db.table('users').insert(data, 'id').then(id => id);
  },
  update: (data) => {
    db.table('users').update(data).then(result => result);
  },
  findById: (id) => {
    db.table('users').where({id}).then(result => result);
  }
};
