import { db } from '../../utils';

const create = (data) => {
  return db.table('users').insert(data, 'id').then(id => id);
}

const update = (data) => {
  return db.table('users').update(data).then(result => result);
}

const findById = (id) => {
  return db.table('users').where({id}).then(result => result);
}

export default {
  create,
  update,
  findById
};
