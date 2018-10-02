const db = require('../database');

let updateVote = (req, res) => {
    let vote = req.body
    console.log(vote);
    db.query(`INSERT INTO diy_votes (user_id, project_id) VALUES (${vote.userid}, ${vote.project_id})`)
    .then(res.send({response: "Successful Vote"}))
    .catch(err => console.log(err))
}

module.exports = updateVote;
