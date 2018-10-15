const db = require('../database');

let signup = (req, res) => {
  db.none(
    `INSERT INTO diy_users (first_name, last_name, email, password, avatar_file) 
    VALUES ($1, $2, $3, $4, $5);`,
    [req.body.first_name, req.body.last_name, req.body.email.toLowerCase(), req.body.password, req.file ? req.file.filename : 'bulb.png']
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
