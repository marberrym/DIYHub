let signup = (req, res) => {
  // Check to be sure user does not exist.
  // If new user, add user / password to database.
  // frontend displays message to user, success, auto login, fetch authenticate route.
  res.send('success');
}
module.exports = signup;