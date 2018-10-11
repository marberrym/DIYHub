const db = require('../database');
const jwt = require('jsonwebtoken');

let collabResponse = (req, res) => {
    let decoded = jwt.decode(req.headers.token);
    let method = req.body.method;
    let user = req.body.user_id;

    console.log(decoded);
    console.log(method);
    console.log(user);
}

module.exports = collabResponse;