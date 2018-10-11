const db = require('../database');
const jwt = require('jsonwebtoken');

let userCollab = (req, res) => {
    let decoded = jwt.decode(req.headers.token);
    let projectId = req.params.id;

    db.none(`INSERT into diy_collaborators (user_id, project_id, collab_status) VALUES (${decoded.id}, ${projectId}, 1)`)
    .then(res.send({status: 'success'}))
    .catch(err => {
        console.log(err)
        res.send({status: 'error'})
    })
}

module.exports = userCollab;