const db = require('../database');

let updateUser = (req, res) => {
  db.query(`UPDATE diy_users SET avatar_file='${req.file.filename}' WHERE id=${req.user.id}`)
  .then(() => {
    console.log('send response');
    res.send({status: 'success'});
  })
  .catch((error) => {
    console.log(error);
    res.send({status: 'error'});
  })
}

module.exports = updateUser;
