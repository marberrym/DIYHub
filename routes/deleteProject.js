const jwt = require('jsonwebtoken');
const db = require('../database');

let deleteProject = (req, res) => {
    projectId = req.params.id

    db.none(`DELETE FROM diy_projects WHERE id=$1`, projectId)
    .then(
        db.none(`DELETE FROM diy_steps WHERE project_id=$1`, projectId)
    )
    .then(res.send({status: 'success'}))
    .catch(err => {
        console.log(err)
        res.send({status: 'error'})
    })
}

module.exports = deleteProject;