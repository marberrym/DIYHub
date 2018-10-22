const jwt = require('jsonwebtoken');
const db = require('../database');
const fs = require('fs');

let deleteProject = (req, res) => {
    projectId = req.params.id;
    db.query(`DELETE FROM diy_steps WHERE project_id=$1 RETURNING step_image_file`, projectId)
    .then((data) => {
        data.forEach(file => {
            try {
                fs.unlinkSync("uploads/project/" + file.step_image_file);
            } catch(err) {
                console.log(err);
            }
        })
        db.none(`DELETE FROM diy_materials_bridge WHERE project_id=$1`, projectId);
    })
    .then(
    db.one(`DELETE FROM diy_projects WHERE id=$1 RETURNING feature_image_file`, projectId)
    .then(data => {
        try {
            fs.unlinkSync("uploads/project/" + data.feature_image_file);
        } catch(err) {
            console.log(err);
        }
    }))
    .then(
        res.send({status: 'success'})
    )
    .catch(err => {
        console.log(err)
        res.send({status: 'error'})
    })
}

module.exports = deleteProject;