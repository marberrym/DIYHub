const db = require('../database');

let updateVote = (req, res) => {
    let vote = req.body
    if (vote.method === "add") {
        db.query(`INSERT INTO diy_votes (user_id, project_id) VALUES ($1, $2)`, [vote.userid, vote.project_id])
        .then(res.send({response: "Successful Vote"}))
        .catch(err => console.log(err))
    } else if (vote.method === "remove") {
        db.query(`DELETE FROM diy_votes WHERE user_id=$1 AND project_id=$2`, [vote.userid, vote.project_id])
        .then(res.send({response: "Successful Vote"}))
        .catch(err => console.log(err))
    }
    
}

module.exports = updateVote;
