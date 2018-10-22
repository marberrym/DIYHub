const jwt = require('jsonwebtoken');
const db = require('../database');
const fs = require('fs');

let deleteProject = (req, res) => {
    projectId = req.params.id;
    let p1 = db.none(`DELETE FROM diy_materials_bridge WHERE project_id=$1`, projectId);
    let p2 = db.none(`DELETE FROM diy_votes WHERE project_id=$1`, projectId);
    let p3 = db.none(`DELETE FROM diy_collaborators WHERE project_id=$1`, projectId);
    let p4 = db.none(`DELETE FROM diy_comments WHERE project_id=$1`, projectId);
    let p5 = db.none(`DELETE FROM diy_my_projects WHERE project_id=$1`, projectId);
    Promise.all([p1, p2, p3, p4, p5])
    .then(
    db.query(`DELETE FROM diy_steps WHERE project_id=$1 RETURNING step_image_file`, projectId)
    .then((data) => {
        data.forEach(file => {
            if (file.step_image_file !== 'project.png') {
                try {
                    fs.unlinkSync("uploads/project/" + file.step_image_file);
                } catch(err) {
                    console.log(err);
                }
            }
        })
    })
    .then(
    db.one(`DELETE FROM diy_projects WHERE id=$1 RETURNING feature_image_file`, projectId)
    .then(data => {
        if (data.feature_image_file !== 'project.png'){
            try {
                fs.unlinkSync("uploads/project/" + data.feature_image_file);
            } catch(err) {
                console.log(err);
            }
        }
    })))
    .then(
        res.send({status: 'success'})
    )
    .catch(err => {
        console.log(err)
        res.send({status: 'error'})
    })
}

module.exports = deleteProject;