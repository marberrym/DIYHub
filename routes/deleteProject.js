const jwt = require('jsonwebtoken');
const db = require('../database');

let deleteProject = (req, res) => {
    let decoded = jwt.decode(req.headers.token)
    console.log(req.params)
    projectId = req.params.id
    console.log(projectId);

    db.none(`DELETE FROM diy_projects WHERE id=${projectId}`)
    .then(
        db.none(`DELETE FROM diy_steps WHERE project_id=${projectId}`)
    )
    .then(res.send({status: 'success'}))
    .catch(err => {
        console.log(err)
        res.send({status: 'error'})
    })
}

module.exports = deleteProject;