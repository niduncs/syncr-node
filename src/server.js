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

app.use('/api/v1', require('./lib/apiRouter'));

const server =
  process.env.NODE_ENV !== 'production' ? http.Server(app) : https.Server(app);

server.listen(process.env.PORT);
