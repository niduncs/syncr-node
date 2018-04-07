const express = require('express');
const path = require('path');
const https = require('https');
const http = require('http');
const errorHandler = require('errorhandler');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL
});
const app = express();

app.disable('x-powered-by');

app.use(
  errorHandler({
    dumpExceptions: true,
    showStack: true
  })
);
app.use('/', express.static('build'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  cookieSession({
    name: 'session',
    keys: [process.env.COOKIE_SECRET],
    cookie: {
      httpOnly: false
    }
  })
);

// app.use('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
// });

const api = express.Router();

api.use((req, res, next) => {
  next();
});

const controllers = require('./lib/controllers');

api.get('/shopify/authorize', controllers.shopify.authorize);

api.get('/shopify/callback', (req, res) => {
  // const api = new Shopify({
  //   ...defaultShopifyConfig,
  //   shop: req.params.shop
  // });

  // api.exchange_temporary_token(req.query, (err, data) => {
  //   if (err || !data['access_token']) return res.json({ success: false });
  //   const userData = {};
  //   const user = knex('users').insert(userData, 'id');

  //   res.json({success: true, user});
  // });

  // return res.json({ success: true });
});

api.post('/login', (req, res) => {
  if (!req.params.email || !req.params.password) {
    res.status(422);
    return res.json({ success: false, token: null });
  }
  return res.json({ success: true });
});

api.post('/register', (req, res) => {
  return res.json({ success: true });
});

api.get('/accounts', (req, res) => {
  return res.json({ success: true });
});

api.post('/accounts/create', (req, res) => {
  return res.json({ success: true });
});

api.delete('/accounts/:uid', (req, res) => {
  return res.json({ success: true });
});

api.get('/accounts/:uid', (req, res) => {
  return res.json({ success: true });
});

api.put('/accounts/:uid', (req, res) => {
  return res.json({ success: true });
});

app.use('/api/v1', api);

const server =
  process.env.NODE_ENV !== 'production' ? http.Server(app) : https.Server(app);

server.listen(process.env.PORT);
