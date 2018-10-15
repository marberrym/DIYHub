const db = require('../database');

let postComment = (req, res) => {
    let comment = req.body;
    db.none(
        `INSERT INTO diy_comments (creation_date, user_id, project_id, comment) VALUES
        (current_timestamp, $1, $2, $3);
        `, [comment.user_id, comment.project_id, comment.comment])
    .then(response => {
        res.send({status: 'success'})
    })
}
module.exports = postComment;