const db = require('../database');
// // diy_projects:
// // creation_date
// // project_title
// // feature_image_url
// // time_range
// // cost_range

// // diy_users: on user_id
// // first_name
// // last_name

// // diy_categories: on category_id
// // category_title
// SELECT first_name, last_name, category_title, creation_date, project_title, feature_image_url, time_range, cost_range FROM diy_projects INNER JOIN diy_users ON diy_projects.user_id = diy_users.id INNER JOIN diy_categories ON diy_projects.category_id = diy_categories.id WHERE diy_projects.id=1

// // diy_steps: on project_id
// // step_order
// // step_image_url
// // step_title
// // step_text
// SELECT step_order, step_image_url, step_title, step_text FROM diy_steps WHERE project_id=1

// // diy_materials: on diy_materials_bridge project_id - material_id
// // title
// // amazon_asin
// // quantity
// SELECT title, amazon_asin, quantity from diy_materials INNER JOIN diy_materials_bridge ON diy_materials.id = diy_materials_bridge.material_id WHERE project_id=1



let getFeatured = (req, res) => {
  let featured = 1;
  let projectData = {};
  let project = db.one(
    `SELECT id, first_name, last_name, category_title, creation_date, project_title, feature_image_url, time_range, cost_range FROM diy_projects INNER JOIN diy_users ON diy_projects.user_id = diy_users.id INNER JOIN diy_categories ON diy_projects.category_id = diy_categories.id WHERE diy_projects.id=${featured}`
  )
  let steps = db.query(
    `SELECT step_order, step_image_url, step_title, step_text FROM diy_steps WHERE project_id=${featured} ORDER BY step_order`
  )
  let materials = db.query(
    `SELECT title, amazon_asin, quantity from diy_materials INNER JOIN diy_materials_bridge ON diy_materials.id = diy_materials_bridge.material_id WHERE project_id=${featured}`
  )
  Promise.all([project, steps, materials])
  .then(data => {
    projectData.project = data[0];
    projectData.steps = data[1];
    projectData.materials = data[2];
    projectData.status = 'success';
    res.send(projectData);
  })
  .catch(error => {
    console.log(error);
    res.send({status: 'error'})
  })
}
module.exports = getFeatured;