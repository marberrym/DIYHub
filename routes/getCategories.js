const db = require('../database');

let getCategories = (req, res) => {
  let responseData = {}
  db.query(
    `SELECT category_title FROM diy_categories`
  )
  .then(data => {
    responseData.status = 'success'
    responseData.categories = data.map(datum => datum.category_title);
    res.send(responseData);
    }
  ).catch(error => {
    res.send({status: 'error'})
  })
}
module.exports = getCategories;