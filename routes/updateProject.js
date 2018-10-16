const db = require('../database');

let updateProject = async (req, res) => {
  let projectId = await db.query(`UPDATE diy_projects SET project_title=$1, time_range=$2, cost_range=$3, project_description=$4 WHERE id=$5`, [req.body.title, req.body.time, req.body.cost, req.body.description, req.params.id]);
  if (req.files['feature_image']) {
    db.none(`UPDATE diy_projects SET feature_image_file=$1 WHERE id=$2`, [req.files['feature_image'][0].filename]);
  }

  if (req.body.step_title) {
    if (typeof req.body.step_title === 'string') {
      req.body.step_title = [req.body.step_title];
      req.body.step_text = [req.body.step_text];
      req.body.step_order = [req.body.step_order];
    }
    let stepDelete = await db.query(`DELETE FROM diy_steps WHERE project_id=$1`, req.params.id);
    let imageIndex = 0;
    if (typeof req.body.step_image_name === 'string') {
      req.body.step_image_name = [req.body.step_image_name];
    }
    for (let i = 0; i < req.body.step_title.length; i++){
      let step = {
        step_title: req.body.step_title[i],
        step_text: req.body.step_text[i],
        step_order: req.body.step_order[i],
      };
      if (req.body.step_image_name[i] === 'new') {
        step.step_image_file = req.files.step_images[imageIndex].filename;
        imageIndex++;
      } else {
        step.step_image_file = req.body.step_image_name[i];
      }
      console.log()
      let stepQuery = await db.query(`INSERT INTO diy_steps (project_id, step_order, step_image_file, step_title, step_text) VALUES ($1, $2, $3, $4, $5)`, [req.params.id, step.step_order, step.step_image_file || 'project.png', step.step_title, step.step_text]);
    }
  }

  if (req.body.material_title) {
    if (typeof req.body.material_title === 'string') {
      req.body.material_title = [req.body.material_title];
      req.body.material_quantity = [req.body.material_quantity];
      req.body.amazon_asin = [req.body.amazon_asin];
    }
    let materialDelete = await db.query(`DELETE FROM diy_materials_bridge WHERE project_id=$1`, req.params.id);

    for (let j = 0; j < req.body.material_title.length; j++){
      let material = {
        title: req.body.material_title[j],
        quantity: req.body.material_quantity[j],
        amazon_asin: req.body.amazon_asin[j]
      }
      try {
        console.log(`SELECT id from diy_materials WHERE amazon_asin='${material.amazon_asin}'`)
        let materialId = await db.one(`SELECT id from diy_materials WHERE amazon_asin=$1`, material.amazon_asin);
        let materialBridgeQuery = await db.query(`INSERT INTO diy_materials_bridge (project_id, material_id, quantity) VALUES ($1, $2, $3)`, [req.params.id, materialId.id, material.quantity]);
      } catch(error) {
        let materialId = await db.one(`INSERT INTO diy_materials (title, amazon_asin) VALUES ($1, $2) RETURNING id`, [material.title, material.amazon_asin]);
        let materialBridgeQuery = await db.query(`INSERT INTO diy_materials_bridge (project_id, material_id, quantity) VALUES ($1, $2, $3)`, [req.params.id, materialId.id, material.quantity]);
      }
    }
  }
  res.send({status: 'success'});
}
module.exports = updateProject;