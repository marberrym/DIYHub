const db = require('../database');
const jwt = require('jsonwebtoken');
const secret = process.env.JWTSECRET;
let authenticate = (req, res) => {
  // Query database to check if password is correct.
  // If correct, return token, incorrect return error.
  db.one(
    `SELECT 
      *
    FROM
      diy_users
    WHERE
    email = $1 and password = $2;`,
    [req.body.email, req.body.password]
  )
  .then(data => {
    let token = jwt.sign({ id: data.id, first: data.first_name, avatar: data.avatar_file }, secret, { expiresIn: "7d" });
    res.send({token, status: 'success'});
  })
  .catch(error => {
    console.log('authenticate failed: ' + error);
    res.send({status: 'error'});
  })
}
module.exports = authenticate;