const jwt = require('jsonwebtoken');
const { secret } = require('../env/env');
let authenticate = (req, res) => {
  // Query database to check if password is correct.
  // If correct, return token, incorrect return error.
  let token = jwt.sign(
      {user: req.body.user}, 
      secret,
      {expiresIn: '7d'});
  res.send({ token });
}
module.exports = authenticate;