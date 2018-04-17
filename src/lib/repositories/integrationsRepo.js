import { db } from '../../utils';

const create = (data) => {
  db.table('integrations').insert(data, 'id').then(id => id);
}

const update = (data) => {
  db.table('integrations').update(data).then(result => result);
}

const findById = (id) => {
  db.table('integrations')
    .where({id})
    .then(result => {
      return result.length ? result[0] : null;
    })
    .catch(err => {
      // todo: log this somewhere
      return err;
    });
}

const all = (userId) => {
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

export default {
  create,
  update,
  findById,
  all
};
