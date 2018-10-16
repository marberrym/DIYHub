const db = require('../database');

let deleteCollab = (req, res) => {
    let projectId = req.params.id;
    let userId = req.query.userid;

    db.none(`DELETE FROM diy_collaborators WHERE user_id=$1 AND project_id=$2`, [userId, projectId])
    .then(res.send({status: 'success'}))
    .catch(err => console.log(err))
}

module.exports = deleteCollab;