const db = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL
});

module.exports = {
  create: data => {
    db.table('integrations').insert(data, 'id').then(id => id);
  },
  update: data => {
    db.table('integrations').update(data).then(result => result);
  },
  findById: id => {
    db.table('integrations')
      .where({id})
      .then(result => {
        return result.length ? result[0] : null;
      })
      .catch(err => {
        // todo: log this somewhere
        return err;
      });
  },
  all: userId => {
    db.table('integrations')
      .where({user_id: userId})
      .then(result => {
        return result;
      })
      .catch(err => {
        // todo: log this somewhere
        return err;
      });
  }
};
