const db = require('../database');

let getProjectList = (req, res) => {
  // Query database for project list based on query parameters
  // To be added: offset

  let responseData = {};
  let sqlConditional = '';
  if (req.query.cat) {
    sqlConditional += `AND category_id=${req.query.cat} `
  }
  if (req.query.cost) {
    sqlConditional += `AND cost_range=${req.query.cost} `
  }
  if (req.query.time) {
    sqlConditional += `AND time_range=${req.query.time} `
  }

  db.query(
    `SELECT id, project_title, feature_image_file, time_range, cost_range FROM diy_projects WHERE (project_title ILIKE '%${req.query.q || ''}%' OR project_description ILIKE '%${req.query.q || ''}%') AND publish_status=5 ${sqlConditional}ORDER BY creation_date`
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