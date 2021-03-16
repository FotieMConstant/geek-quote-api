const path = require('path')
const rootDir = require('../utils/path')

exports.pageNotFound = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "404.html"));
};
