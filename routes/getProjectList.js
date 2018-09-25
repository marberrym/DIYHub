let getProjectList = (req, res) => {
  // Query database for project list based on query parameters:
  // Favorites
  // Category
  // OrderBy
  // Price
  // Time
  // Offset
  // User
  res.send(projectList);
}
module.exports = getProjectList;