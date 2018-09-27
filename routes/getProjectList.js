const db = require('../database');

let getProjectList = (req, res) => {
  // Query database for project list based on query parameters:
  // Favorites
  // Category
  // OrderBy
  // Price
  // Time
  // Offset
  // User

  // Return:
  // Title
  // Image
  // Cost
  // Duration
  let responseData = {}
  db.query(
    `SELECT id, project_title, feature_image_url, time_range, cost_range FROM diy_projects ORDER BY creation_date`
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
module.exports = getProjectList;