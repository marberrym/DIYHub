const express = require("express");
const bodyParser = require("body-parser");
const expressJwt = require("express-jwt");
const secret = process.env.JWTSECRET;
const allowCORS = require('./middleware/allow-cors');

const signup = require('./routes/signup');
const authenticate = require('./routes/authenticate');
const validate = require('./routes/validate');
const getFeatured = require('./routes/getFeatured');
const getProject = require('./routes/getProject');
const getProjectList = require('./routes/getProjectList');
const getCategories = require('./routes/getCategories');
const updateProject = require('./routes/updateProject');
const postProject = require('./routes/postProject');

const app = express();
const protect = expressJwt({ secret,
  getToken: (req) => req.body.token
});

app.use(bodyParser.json());
app.use(allowCORS);
app.use(express.static('public'));

// Sample protected route using middleware: /protected
app.get('/protected', protect, (req, res) => {
  res.end('Hi ' + req.user.user + '! You found the hidden treasure!');
})

// sample unprotected route using default: app
app.get('/unprotected', (req, res) => {
  res.send('Hello, I am unprotected.');
})

// Route to register user into database.
app.post('/signup', signup);
// Route to recieve token.
app.post('/authenticate', authenticate);
// Route to validate token.
app.post('/validate', validate);

// Project routes
app.get('/project/featured', getFeatured);
app.get('/project/:id', getProject);
app.get('/project', getProjectList);
app.put('/project/:id', protect, updateProject);
app.post('/project', protect, postProject);


// Category route
app.get('/category', getCategories);

app.listen(5000);