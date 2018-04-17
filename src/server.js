import express from 'express';
import http from 'http';
import https from 'https';
import errorHandler from 'errorhandler';
import bodyParser from 'body-parser';
import session from 'express-session';
import router from './api/router';

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

app.use('/api/v1', router);

const server =
  process.env.NODE_ENV !== 'production' ? http.Server(app) : https.Server(app);

server.listen(process.env.PORT);
