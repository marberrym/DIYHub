const db = require('../database');

let getMyProjects = (req, res) => {
  // Query database for project list based on query parameters
  // To be added: offset
  let projectStatusTable = {
    'all': 0,
    'todo': 1,
    'inprogress': 2,
    'completed': 3,
    'unpublished': 4,
    'published': 5
  }
  let projectStatus = projectStatusTable[req.query.my];
  let responseData = {};
  if (projectStatus === 4 || projectStatus === 5) {
    db.query(`SELECT id, project_title, feature_image_file, publish_status, time_range, cost_range FROM diy_projects WHERE user_id=${req.user.id} AND publish_status=${projectStatus}`)
    .then(data => {
      responseData.status = 'success'
      responseData.projectList = data;
      res.send(responseData)
      }
    ).catch(error => {
      res.send({status: 'error'})
    })
  } else {
    db.query(
      `SELECT id, project_title, feature_image_file, time_range, cost_range FROM diy_projects INNER JOIN diy_my_projects ON diy_projects.id=project_id WHERE diy_my_projects.user_id=${req.user.id}${projectStatus ? ` AND project_status=${ projectStatus}` : ''}`
    )
    .then(data => {
      responseData.status = 'success'
      responseData.projectList = data;
      res.send(responseData)
      }
    ).catch(error => {
      res.send({status: 'error'})
    })
  }
}

module.exports = getMyProjects;
