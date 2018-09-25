let getProject = (req, res) => {
  // Query database for featured project.
  res.send(project);
}
module.exports = getProject;