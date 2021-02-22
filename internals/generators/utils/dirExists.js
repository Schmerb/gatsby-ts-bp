/**
 * 
 * Checks if directory exists and creates it if not
 * 
 */

const fs = require('fs');

module.exports = (dirPath) => {
  // create form dir if it DNE
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recurisve: true })
  }
}