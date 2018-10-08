const db = require('../database');
const jwt = require('jsonwebtoken');

let updateAvatar = (req, res) => {
    if(req.body) {
        console.log(req.body);
        console.log("its here")
    } else {
        console.log("its not")
    }
} 

module.exports = updateAvatar