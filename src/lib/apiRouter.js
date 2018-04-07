const express = require('express');
const api = express.Router();

api.use((req, res, next) => {
  next();
});

const controllers = require('./controllers')

api.get('/shopify/authorize', controllers.shopify.authorize);

api.get('/shopify/callback', controllers.shopify.install);

api.post('/login', controllers.login.login);

api.post('/register', (req, res) => {
  return res.json({ success: true });
});

api.get('/integrations', (req, res) => {
  return res.json({ success: true });
});

api.post('/integrations/create', (req, res) => {
  return res.json({ success: true });
});

api.delete('/integrations/:uid', (req, res) => {
  return res.json({ success: true });
});

api.get('/integrations/:uid', (req, res) => {
  return res.json({ success: true });
});

api.put('/integrations/:uid', (req, res) => {
  return res.json({ success: true });
});

api.put('user/settings', (req, res) => {});

module.exports = api;
