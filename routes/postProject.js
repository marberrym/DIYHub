const db = require('../database');
const jwt = require('jsonwebtoken')

let postProject = async (req, res) => {

  let decoded = jwt.decode(req.body.token);

  db.one(`INSERT INTO diy_projects (creation_date, user_id, project_title, feature_image_file, project_description, publish_status) VALUES (CURRENT_TIMESTAMP, $1, $2, 'project.png', $3, 4) RETURNING id`, [decoded.id, req.body.title, req.body.description])
  .then(response => {
    res.send({
      projectId: response.id,
      status: 'success'
    })
  })
  .catch(err => console.log(err));
  
}
module.exports = postProject;
