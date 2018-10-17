const db = require('../database');

let getProjectList = (req, res) => {
  // Query database for project list based on query parameters
  // To be added: offset

  let responseData = {};
  let sqlConditional = '';
  let sqlArray = [];
  let searchConditional;
  if (req.query.q) {
    searchConditional = `project_title ILIKE '%${req.query.q}%' `;
  } else {
    searchConditional = `project_title ILIKE '%%' `;
  }
  sqlArray.push(req.query.q || '');
  if (+req.query.cost) {
    sqlConditional += `AND cost_range=${req.query.cost} `
    sqlArray.push(req.query.cost);
  }
  if (+req.query.time) {
    sqlConditional += `AND time_range=${req.query.time} `
    sqlArray.push(req.query.time);
  }
  console.log(`SELECT id, project_title, feature_image_file, time_range, cost_range FROM diy_projects WHERE ${searchConditional}${sqlConditional}ORDER BY creation_date DESC`);
  db.query(
    `SELECT id, project_title, feature_image_file, time_range, cost_range FROM diy_projects WHERE ${searchConditional}${sqlConditional}ORDER BY creation_date DESC`, sqlArray
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