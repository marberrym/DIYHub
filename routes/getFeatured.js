const db = require('../database');

let getFeatured = (req, res) => {
  db.query(
    `select id, project_title, feature_image_url as pic from diy_projects limit 5;`
  )
  .then(data => {
    console.log(data);
    res.send(data);
  })
  .catch(error => {
    console.log(error);
    res.send({status: 'error'})
  })
}
module.exports = getFeatured;