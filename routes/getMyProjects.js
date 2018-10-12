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
    'published': 5,
    'collaborations': 6,
  }
  let projectStatus = projectStatusTable[req.query.my];
  let responseData = {};
  if (projectStatus === 6) {
    db.query(`SELECT diy_projects.id as id, project_title, feature_image_file, publish_status, time_range, cost_range FROM diy_projects INNER JOIN diy_collaborators ON diy_projects.id=project_id WHERE diy_collaborators.user_id=${req.user.id} AND diy_collaborators.collab_status=2`)
    .then(data => {
      responseData.status = 'success'
      responseData.projectList = data;
      res.send(responseData)
    })
    .catch(err => console.log(err))
  } else if (projectStatus === 4 || projectStatus === 5) {
    db.query(`SELECT diy_projects.id, project_title, feature_image_file, publish_status, 
    time_range, cost_range, COUNT(diy_collaborators.id) as requests
    FROM diy_projects LEFT JOIN diy_collaborators ON diy_collaborators.project_id = diy_projects.id
    WHERE diy_projects.user_id=${req.user.id} AND (diy_collaborators.collab_status=1 OR diy_collaborators.collab_status IS NULL) AND diy_projects.publish_status=${projectStatus}
    GROUP BY diy_projects.id`) 
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
