const db = require('../database');

let updateUser = (req, res) => {
  db.query(`UPDATE diy_users SET avatar_file=$1 WHERE id=$2`, [req.file.filename, req.user.id])
  .then(() => {
    res.send({status: 'success'});
  })
  .catch((error) => {
    console.log(error);
    res.send({status: 'error'});
  })
}

module.exports = updateUser;
