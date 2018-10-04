const db = require('../database');
const jwt = require('jsonwebtoken')

let postProject = async (req, res) => {
  console.log(req.body)

  let decoded = jwt.decode(req.body.token);
  console.log(decoded);

  db.none(`INSERT INTO diy_projects (creation_date, user_id, project_title, feature_image_url, project_description, publish_status) VALUES (CURRENT_TIMESTAMP, ${decoded.id}, '${req.body.title}', './images/bulb.png', '${req.body.description}', 4)`)
  .then(response => res.send({status: 'success'}))
  .catch(err => console.log(err));
  
}
module.exports = postProject;
