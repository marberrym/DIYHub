const db = require('../database');
const jwt = require('jsonwebtoken')

let protectProject = (type) => {
  return (req, res, next) => {
    if (type === "author") {
      db.one(`SELECT user_id FROM diy_projects WHERE id=${req.params.id}`)
      .then(data => {
        if (req.user.id === data.user_id) {
          next();
        } else {
          res.send({status: 'error'});
        }
      })
    } else if (type === 'admin') {
      let decoded = jwt.decode(req.headers.token)
      db.one(`SELECT admin FROM diy_users WHERE id=${decoded.id}`)
      .then(data => {
        if (data.admin === 1) {
          next();
        } else {
          res.send({status: 'error'})
        }
      })
    } else if (type === 'collaborator') {
      let p1 = db.one(`SELECT user_id FROM diy_projects WHERE id=${req.params.id}`);
      let p2 = db.query(`SELECT user_id FROM diy_collaborators WHERE project_id=${req.params.id} AND collab_status=2`);
      Promise.all([p1, p2])
      .then(data => {
        let validIds = [data[0].user_id, ...data[1].map(obj => obj.user_id)];
        if (validIds.includes(req.user.id)) {
          next();
        } else {
          res.send({status: 'error'});
        }
      })
    }
  }
}
module.exports = protectProject;