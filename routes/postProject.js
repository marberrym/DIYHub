const db = require('../database');
const jwt = require('jsonwebtoken')

let postProject = async (req, res) => {
  console.log(req.body)

  let decoded = jwt.decode(req.body.token);
  console.log(decoded);

  db.one(`INSERT INTO diy_projects (creation_date, user_id, project_title, feature_image_url, project_description, publish_status) VALUES (CURRENT_TIMESTAMP, ${decoded.id}, '${req.body.title}', './images/bulb.png', '${req.body.description}', 4)`)
  .then(response => res.send({status: 'success'}))
  .catch(err => console.log(err));

  // db.one(`INSERT INTO diy_projects (creation_date, user_id, project_title, feature_image_url, time_range, cost_range, category_id,project_description) VALUES (CURRENT_TIMESTAMP, ${req.user.id}, '${req.body.title}', '${req.body.feature_image_url}', ${req.body.time}, ${req.body.cost}, ${req.body.category}, '${req.body.description}')`);
  
  
  // let stepDataInsert = '';
  // for (let i = 0; i < req.body.steps.length; i++){
  //   let step = req.body.steps[i];
  //   stepDataInsert += ` (${projectId.id}, ${step.step_order}, '${step.step_image_URL}', '${step.steptitle}', '${step.stepdescription}'),`;
  // }
  // let stepQuery = await db.query(`INSERT INTO diy_steps (project_id, step_order, step_image_URL, step_title, step_text) VALUES${stepDataInsert.slice(0,-1)}`);

  // for (let j = 0; j < req.body.materials.length; j++){
  //   let material = req.body.materials[j];
  //   try {
  //     let materialId = await db.one(`SELECT id from diy_materials WHERE amazon_asin='${material.amazon_asin}'`);
  //     let materialBridgeQuery = await db.query(`INSERT INTO diy_materials_bridge (project_id, material_id, quantity) VALUES (${projectId.id}, ${materialId.id}, ${material.quantity})`);
  //   } catch(error) {
  //     let materialId = await db.one(`INSERT INTO diy_materials (title, amazon_asin) VALUES ('${material.title}', '${material.amazon_asin}') RETURNING id`);
  //     let materialBridgeQuery = await db.query(`INSERT INTO diy_materials_bridge (project_id, material_id, quantity) VALUES (${projectId.id}, ${materialId.id}, ${material.quantity})`);
  //   }
  // }
  // res.send({status: 'success'});
}
module.exports = postProject;