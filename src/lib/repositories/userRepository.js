const { db } = require('../../utils');

module.exports = {
  create: (data) => {
    return db.table('users').insert(data, 'id').then(id => id);
  },
  update: (data) => {
    return db.table('users').update(data).then(result => result);
  },
  findById: (id) => {
    return db.table('users').where({id}).then(result => result);
  }
};
