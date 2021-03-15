const path = require('path')

// to get the root directry of the project
/*
 you call it in another another file like
 const rootDir = require('this path directory')
 now you can use 'rootDir' when callling path with dirname
 to get the root directory of the project.
*/
module.exports = path.dirname(require.main.filename) // this will handle the root directry