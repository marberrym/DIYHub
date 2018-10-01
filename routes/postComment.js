const db = require('../database');

let postComment = (req, res) => {
    let comment = req.body;
    console.log(comment);
    db.query(
        `INSERT INTO diy_comments (creation_date, user_id, project_id, comment) VALUES
        (current_timestamp, ${comment.user_id}, ${comment.project_id}, '${comment.comment}');
        `
    )
    .then(response => {
        console.log(response);
        res.end("SUCCESS!")});
}
module.exports = postComment;