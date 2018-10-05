const db = require('../database');

let publishProject = (req, res) => {
    db.none(`UPDATE diy_projects SET publish_status=5 WHERE id=${req.params.id}`)
    .then(res.send({status: 'success'}))
    .catch(err => res.send({status: 'error'}));
}
module.exports = publishProject;