/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const path = require('path');
const { exec } = require('child_process');
const componentGenerator = require('./component/index.js');
const languageGenerator = require('./language/index.js');
const formikGenerator = require('./formik/index.js');
const reduxStateGenerator = require('./reduxState/index.js');

module.exports = plop => {
  plop.load("plop-prettier");
  
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('language', languageGenerator);
  plop.setGenerator('formik', formikGenerator);
  plop.setGenerator('reduxState', reduxStateGenerator);

  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
  
  plop.setActionType('prettify', (answers, config) => {
    const folderPath = `${path.join(
      __dirname,
      '/../../app/',
      config.path,
      plop.getHelper('properCase')(answers.name),
      '**.js',
    )}`;
    exec(`npm run prettify -- "${folderPath}"`);
    return folderPath;
  });
};
