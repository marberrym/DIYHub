const db = require('../database');

let getMyProjects = (req, res) => {
  // Query database for project list based on query parameters
  // To be added: offset
  let projectStatusTable = {
    'all': 0,
    'todo': 1,
    'inprogress': 2,
    'completed': 3
  }
  let projectStatus = projectStatusTable[req.query.my];
  let responseData = {};
  console.log(`SELECT id, project_title, feature_image_url, time_range, cost_range FROM diy_projects INNER JOIN diy_my_projects ON diy_projects.id=project_id WHERE diy_my_projects.user_id=${req.user.id}${projectStatus ? ` AND project_status=${ projectStatus}` : ''}`);
  
  db.query(
    `SELECT id, project_title, feature_image_url, time_range, cost_range FROM diy_projects INNER JOIN diy_my_projects ON diy_projects.id=project_id WHERE diy_my_projects.user_id=${req.user.id}${projectStatus ? ` AND project_status=${ projectStatus}` : ''}`
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
module.exports = getMyProjects;