let getCategories = (req, res) => {
  // Query database for project list based on query parameters:
  // Favorites
  // Category
  // OrderBy
  // Price
  // Time
  // Offset
  res.send(categories);
}
module.exports = getCategories;