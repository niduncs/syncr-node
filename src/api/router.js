import express from 'express';
import controllers from '../lib/controllers';

const api = express.Router();

api.use((req, res, next) => {
  // todo: auth middleware
  next();
});

api.get('/shopify/authorize', controllers.shopify.authorize);

api.get('/shopify/callback', controllers.shopify.install);

api.post('/login', controllers.login.login);

api.post('/register', controllers.login.register);

api.post('/integrations/create', controllers.integrations.create);

api.delete('/integrations/:uid', controllers.integrations.destroy);

api.get('/integrations/:uid', controllers.integrations.getById);

api.put('/integrations/:uid', controllers.integrations.update);

api.put('user/settings', controllers.users.update);

export default api;
