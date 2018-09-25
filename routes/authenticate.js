const jwt = require('jsonwebtoken');
const { secret } = require('../env/env');
let authenticate = (req, res) => {
  let token = jwt.sign(
      {user: req.body.user}, 
      secret,
      {expiresIn: '7d'});
  res.send({ token });
}
module.exports = authenticate;