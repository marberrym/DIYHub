const db = require('../database');

let saveProject = (req, res) => {
  let projectStatusTable = {
    'all': 0,
    'todo': 1,
    'inprogress': 2,
    'completed': 3
  }
  let projectStatus = projectStatusTable[req.body.status];
  db.one(`UPDATE diy_my_projects SET project_status=$1 WHERE user_id=$2 AND project_id=$3 RETURNING project_status`, [projectStatus, req.user.id, req.body.projectId])
  .then(data => {
    res.send({status: 'success'});
  })
  .catch(error => {
    db.one(`INSERT INTO diy_my_projects (user_id, project_id, project_status) VALUES ($1, $2, $3) RETURNING project_status`, [req.user.id, req.body.projectId, projectStatus])
    .then(data => {
      res.send({status: 'success'});
    })
  })
};

module.exports = saveProject;