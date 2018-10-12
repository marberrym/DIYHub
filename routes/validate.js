const jwt = require('jsonwebtoken');
const secret = process.env.JWTSECRET;
const db = require('../database');

let validate = (req, res) => {
  jwt.verify(req.body.token, secret, (err, decoded) => {
    if (err) {
      console.log(err);
      res.send({status: 'error'})
    } else {
      db.one(`SELECT avatar_file FROM diy_users WHERE id=${decoded.id}`)
      .then(data => {
        res.send({name: decoded.first, id: decoded.id, avatar: data.avatar_file, status: 'success'});
      })
    }
  });
}
module.exports = validate;