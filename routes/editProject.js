const jwt = require('jsonwebtoken');
const db = require('../database');

let editProject = (req, res) => {
    let decoded = jwt.decode(req.headers.token);
    let projectId = req.params.id;
    let changes = req.body;

    console.log(decoded);
    console.log(projectId);
    console.log(req.body);
    res.send({status: "success"})

}


module.exports = editProject;