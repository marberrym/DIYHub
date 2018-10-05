const db = require('../database');

let publishProject = (req, res) => {
    db.one(`UPDATE diy_projects SET publish_status=5 WHERE id=${req.params.id}`)
    .then(res.send({status: 'successfully published'}))
    .catch(err => console.log(err));
}
module.exports = publishProject;