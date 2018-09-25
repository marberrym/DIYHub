const db = require('../database');

let signup = (req, res) => {
  db.one(
    `INSERT INTO diy_users (first_name, last_name, email, password) 
    VALUES ($1, $2, $3, $4);`,
    [req.body.first_name, req.body.last_name, req.body.email, req.body.password]
  )
  .then(() => {
    res.send({status: 'success'})
  })
  .catch(error => {
    console.log(error);
    res.send({status: 'error'})
  })
}
module.exports = signup;