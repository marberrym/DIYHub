const db = require('../database');

let updateUser = (req, res) => {
  let image = req.file.filename;
  if (image) {
    db.none(`UPDATE diy_users SET avatar_file=${req.file.filename} WHERE id=${req.user.id}`)
    .then(() => {
      res.send({status: 'success'});
    })
    .catch((error) => {
      console.log(error);
      res.send({status: 'error'});
    })
  } else {
    res.send({status: 'error'});
  }
}

module.exports = updateUser;
