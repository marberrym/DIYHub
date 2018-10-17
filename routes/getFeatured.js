const db = require('../database');

let getFeatured = (req, res) => {
  db.query(
    `select id, project_title, feature_image_file as pic from diy_projects ORDER BY creation_date DESC limit 5;`
  )
  .then(data => {
    res.send(data);
  })
  .catch(error => {
    console.log(error);
    res.send({status: 'error'})
  })
}
module.exports = getFeatured;