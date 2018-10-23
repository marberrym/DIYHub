const jwt = require('jsonwebtoken');
const secret = process.env.JWTSECRET;
const db = require('../database');

let validate = (req, res) => {
  jwt.verify(req.body.token, secret, (err, decoded) => {
    if (err) {
      console.log(err);
      res.send({status: 'error'})
    } else {
      let p1 = db.one(`SELECT admin, avatar_file FROM diy_users WHERE id=$1`, decoded.id)
      let p2 = db.query(`SELECT DISTINCT project_id, project_title FROM diy_collaborators INNER JOIN diy_projects ON project_id=diy_projects.id WHERE diy_projects.user_id=$1 AND collab_status=1`, decoded.id)
      Promise.all([p1, p2])
      .then(data => {
        res.send({name: decoded.first, id: decoded.id, avatar: data[0].avatar_file, admin: data[0].admin, collaborations: data[1], status: 'success'});
      })
    }
  });
}
module.exports = validate;