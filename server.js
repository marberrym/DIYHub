const express = require("express");
const bodyParser = require("body-parser");
const expressJwt = require("express-jwt");
const { secret } = require('./env/env')
const allowCORS = require('./middleware/allow-cors');

const authenticate = require('./routes/authenticate')

const app = express();
const authRouter =  new express.Router();
authRouter.use(expressJwt({ secret,
  getToken: (req) => req.headers.authorization
}));

app.use(bodyParser.json());
app.use(allowCORS);
app.use(express.static('public'));
app.use('/api', authRouter);

// Sample protected route using authRouter: /api/protected
authRouter.get('/protected', (req, res) => {
  res.end('Hi ' + req.user.user + '! You found the hidden treasure!');
})

// sample unprotected route using default: app
app.get('/unprotected', (req, res) => {
  res.send('Hello, I am unprotected.');
})

// Route to recieve token, currently not linked to database.
app.post('/authenticate', authenticate);

app.listen(3000);