const db = require('../database');

let saveProject = (req, res) => {
  let projectStatusTable = {
    'all': 0,
    'todo': 1,
    'inprogress': 2,
    'completed': 3
  }
  let projectStatus = projectStatusTable[req.body.status];
  db.one(`UPDATE diy_my_projects SET project_status=${projectStatus} WHERE user_id=${req.user.id} AND project_id=${req.body.projectId} RETURNING project_status`)
  .then(data => {
    res.send({status: 'success'});
  })
  .catch(error => {
    db.one(`INSERT INTO diy_my_projects (user_id, project_id, project_status) VALUES (${req.user.id}, ${req.body.projectId}, ${projectStatus}) RETURNING project_status`)
    .then(data => {
      res.send({status: 'success'});
    })
  })
};

module.exports = saveProject;