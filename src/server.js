const express = require('express');
const https = require('https');
const http = require('http');
const errorHandler = require('errorhandler');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

app.disable('x-powered-by');

app.use(
  errorHandler({
    dumpExceptions: true,
    showStack: true
  })
);

app.use(session({
  name: 'syncr.session',
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: false,
    maxAge: 2592000, // 30 days
    secure: process.env.NODE_ENV === 'production'
  },
  resave: false,
  saveUninitialized: false
}));

app.use('/', express.static('build'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
// });

app.use('/api/v1', require('./api/router'));

const server =
  process.env.NODE_ENV !== 'production' ? http.Server(app) : https.Server(app);

server.listen(process.env.PORT);
