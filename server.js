const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const expressJwt = require("express-jwt");
const secret = process.env.JWTSECRET;
const allowCORS = require('./middleware/allow-cors');

const signup = require('./routes/signup');
const authenticate = require('./routes/authenticate');
const validate = require('./routes/validate');
const getFeatured = require('./routes/getFeatured');
const getProject = require('./routes/getProject');
const getProjectList = require('./routes/getProjectList');
const getMyProjects = require('./routes/getMyProjects');
const getCategories = require('./routes/getCategories');
const updateProject = require('./routes/updateProject');
const postProject = require('./routes/postProject');
const saveProject = require('./routes/saveProject');
const postComment = require('./routes/postComment');
const updateVote = require('./routes/updateVote');
const editMyProject = require('./routes/editMyProject');
const searchAmazon = require('./routes/searchAmazon');
const publishProject = require('./routes/publishProject');

const app = express();
const protect = expressJwt({ secret,
  getToken: (req) => req.body.token ? req.body.token : req.headers.token
});
const uploadAvatar = multer({
  dest: 'uploads/avatar/'
})

app.use(bodyParser.json());
app.use(allowCORS);
app.use(express.static('build'));
app.use("/uploads", express.static(__dirname + "/uploads"));

// Sample protected route using middleware: /protected
app.get('/protected', protect, (req, res) => {
  res.send(req.user);
})

// sample unprotected route using default: app
app.get('/unprotected', (req, res) => {
  res.send('Hello, I am unprotected.');
})

// Route to register user into database.
app.post('/signup', uploadAvatar.single('avatar'), signup);
// Route to recieve token.
app.post('/authenticate', authenticate);
// Route to validate token.
app.post('/validate', validate);

// Project routes
app.get('/project/featured', getFeatured);
app.get('/project/my', protect, getMyProjects);
app.get('/project/:id', getProject);
app.get('/project', getProjectList);
app.get('/editproject/:id', protect, editMyProject);
app.post('/editproject/:id', protect, updateProject);
app.post('/project', protect, postProject);
app.post('/project/save', protect, saveProject);
app.post('/startproject', protect, postProject);
app.get('/publishproject/:id', protect, publishProject);

//Comment Posting
app.post('/comment', protect, postComment);

//Update Vote Tally
app.post('/updatevote', protect, updateVote)

// Category route
app.get('/category', getCategories);

// Amazon routes
app.get('/amazon', searchAmazon);

app.listen(5000);