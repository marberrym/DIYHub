const db = require('../database');
const jwt = require('jsonwebtoken');

let collabResponse = (req, res) => {
    let decoded = jwt.decode(req.headers.token);
    let method = req.body.method;
    let user = req.body.user_id;
    let projectId = req.params.id;

    if (method === 'approve'){
        db.none(`UPDATE diy_collaborators SET collab_status=2 WHERE user_id=${user} AND project_id=${projectId}`)
        .then(res.send({status: 'success',
                        method: 'approved'}))
        .catch(err => console.log(err))
    } else if (method === 'deny') {
        db.none(`DELETE FROM diy_collaborators WHERE user_id=${user} AND project_id=${projectId}`)
        .then(res.send({status: 'success',
                        method: 'denied'}))
        .catch(err => console.log(err))
    } else {
        console.log('invalid response.')
    }

    console.log(decoded);
    console.log(method);
    console.log(user);
}

module.exports = collabResponse;