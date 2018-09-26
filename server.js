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

// Route to recieve token, currently not linked to database.
app.post('/authenticate', authenticate);
app.post('/signup', signup);
app.post('/validate', validate);

// Project routes
app.get('/project/featured', getFeatured);
app.get('/project/:id', getProject);
app.get('/project', getProjectList);
app.put('/project/:id', protect, updateProject);
app.post('/project', protect, postProject);


// Category routes
app.get('/category', getCategories);

// Favorite route
app.listen(5000);