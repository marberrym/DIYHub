const jwt = require('jsonwebtoken');
const secret = process.env.JWTSECRET;
let validate = (req, res) => {
  jwt.verify(req.body.token, secret, (err, decoded) => {
    if (err) {
      res.send({status: 'error'})
    } else {
      res.send({name: decoded.first, id: decoded.id, status: 'success'});
    }
  });
}
module.exports = validate;