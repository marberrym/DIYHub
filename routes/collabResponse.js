const db = require('../database');

let collabResponse = (req, res) => {
    let method = req.body.method;
    let user = req.body.user_id;
    let projectId = req.params.id;

    if (method === 'approve'){
        db.none(`UPDATE diy_collaborators SET collab_status=2 WHERE user_id=$1 AND project_id=$2`, [user, projectId])
        .then(res.send({status: 'success',
                        method: 'approved'}))
        .catch(err => console.log(err))
    } else if (method === 'deny') {
        db.none(`DELETE FROM diy_collaborators WHERE user_id=$1 AND project_id=$2`, [user, projectId])
        .then(res.send({status: 'success',
                        method: 'denied'}))
        .catch(err => console.log(err))
    } else {
        console.log('invalid response.')
    }
}

module.exports = collabResponse;