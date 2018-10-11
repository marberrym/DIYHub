const db = require('../database');

let deleteCollab = (req, res) => {
    let projectId = req.params.id;
    let userId = req.query.userid;

    db.none(`DELETE FROM diy_collaborators WHERE user_id=${userId} AND project_id=${projectId}`)
    .then(res.send({status: 'success'}))
    .catch(err => console.log(err))
}

module.exports = deleteCollab;