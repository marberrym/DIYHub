const jwt = require('jsonwebtoken');
const db = require('../database');

let editMyProject = (req, res) => {
    let decoded = jwt.decode(req.headers.token);
    let projectId = req.params.id
    let projectData = {};

    let project = db.one(
        `SELECT diy_projects.id AS id, creation_date, project_title, feature_image_file, time_range, cost_range, project_description FROM diy_projects INNER JOIN diy_users ON diy_projects.user_id = diy_users.id WHERE diy_projects.id = ${projectId}`
      )
      let steps = db.query(
        `SELECT step_order, step_image_file, step_title, step_text FROM diy_steps WHERE project_id=${projectId} ORDER BY step_order`
      )
      let materials = db.query(
        `SELECT title, amazon_asin, quantity from diy_materials INNER JOIN diy_materials_bridge ON diy_materials.id = diy_materials_bridge.material_id WHERE project_id=${projectId}`
      )
    
    
      Promise.all([project, steps, materials])
    .then(data => {
    projectData.project = data[0];
    projectData.steps = data[1];
    projectData.materials = data[2];
    res.send(projectData);
    })
    .catch(err => console.log(err));

}

module.exports = editMyProject;