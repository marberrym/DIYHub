const db = require('../database');

let updateProject = async (req, res) => {
  let projectId = await db.query(`UPDATE diy_projects SET project_title='${req.body.title}', feature_image_file='${req.files['feature_image'][0] ? req.files['feature_image'][0].filename : 'bulb.png' }', time_range=${req.body.time}, cost_range=${req.body.cost},project_description='${req.body.description}' WHERE id=${req.params.id}`);
  let stepDelete = await db.query(`DELETE FROM diy_steps WHERE project_id=${req.params.id}`);

  let stepDataInsert = '';
  for (let i = 0; i < req.body.step_title.length; i++){
    let step = {
      step_title: req.body.step_title[i],
      step_text: req.body.step_text[i],
      step_order: req.body.step_order[i],
      step_image_file: req.files['step_images'][i] ? req.files['step_images'][i].filename : 'bulb.png'
    };
    stepDataInsert += ` (${req.params.id}, ${step.step_order}, '${step.step_image_file}', '${step.step_title}', '${step.step_text}'),`;
  }
  let stepQuery = await db.query(`INSERT INTO diy_steps (project_id, step_order, step_image_file, step_title, step_text) VALUES${stepDataInsert.slice(0,-1)}`);

  let materialDelete = await db.query(`DELETE FROM diy_materials_bridge WHERE project_id=${req.params.id}`);

  for (let j = 0; j < req.body.material_title.length; j++){
    let material = {
      title: req.body.material_title[j],
      quantity: req.body.material_quantity[j],
      amazon_asin: req.body.amazon_asin[j]
    }
    try {
      let materialId = await db.one(`SELECT id from diy_materials WHERE amazon_asin='${material.amazon_asin}'`);
      let materialBridgeQuery = await db.query(`INSERT INTO diy_materials_bridge (project_id, material_id, quantity) VALUES (${req.params.id}, ${materialId.id}, ${material.quantity})`);
    } catch(error) {
      let materialId = await db.one(`INSERT INTO diy_materials (title, amazon_asin) VALUES ('${material.title}', '${material.amazon_asin}') RETURNING id`);
      let materialBridgeQuery = await db.query(`INSERT INTO diy_materials_bridge (project_id, material_id, quantity) VALUES (${req.params.id}, ${materialId.id}, ${material.quantity})`);
    }
  }
  res.send({status: 'success'});
}
module.exports = updateProject;