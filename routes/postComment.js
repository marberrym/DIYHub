const db = require('../database');

let postComment = (req, res) => {
    console.log(req);
    db.query(
        `INSERT INTO diy_comments (creation_date, user_id, project_id, comment) VALUES
        (current_timestamp, )
        `
    )
    .then(response => res.end("SUCCESS!"))
}