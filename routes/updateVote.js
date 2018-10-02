const db = require('../database');

let updateVote = (req, res) => {
    let vote = req.body
    console.log(vote);
    if (vote.method === "add") {
        db.query(`INSERT INTO diy_votes (user_id, project_id) VALUES (${vote.userid}, ${vote.project_id})`)
        .then(res.send({response: "Successful Vote"}))
        .catch(err => console.log(err))
    } else if (vote.method === "remove") {
        db.query(`DELETE FROM diy_votes WHERE user_id=${vote.userid} AND project_id=${vote.project_id}`)
        .then(res.send({response: "Successful Vote"}))
        .catch(err => console.log(err))
    }
    
}

module.exports = updateVote;
