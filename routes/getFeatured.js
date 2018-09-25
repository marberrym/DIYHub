let getFeatured = (req, res) => {
  // Query database for featured project.
  res.send(featuredProject);
}
module.exports = getFeatured;