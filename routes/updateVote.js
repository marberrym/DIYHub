const db = require('../database');

let updateVote = (req, res) => {
    let vote = req.body
    console.log(vote);
    db.query(`UPDATE diy_projects SET votes=${vote.votes} WHERE id=${vote.project_id}`)
    .then(
        db.query(`INSERT INTO diy_votes (user_id, project_id) VALUES (${vote.userid}, ${vote.project_id})`)
    )
    .then(res.send({response: "Successful Vote"}))
}

module.exports = updateVote;
