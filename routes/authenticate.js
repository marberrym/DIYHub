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
    console.log(data);
    let token = jwt.sign({ id: data.id }, secret, { expiresIn: "7d" });
    res.send({token, status: 'success'});
  })
  .catch(error => {
    console.log(error);
    res.send({status: 'error'});
  })
}
module.exports = authenticate;