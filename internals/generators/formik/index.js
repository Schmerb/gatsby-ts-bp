/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Component Generator
 */
const fs = require('fs');
const path = require('path');
const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'A Formik form component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Formik',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: () => {
    const formsDirPath = path.resolve(__dirname, '../../../app/components/forms');
    const filePath = path.resolve(__dirname, '../../../app/components/forms/{{properCase name}}');

    // create form dir if it DNE
    if (!fs.existsSync(formsDirPath)) {
      fs.mkdirSync(formsDirPath,{ recurisve:true })
    }

    const actions = [
      {
        type: 'pretty-add',
        path: path.resolve(filePath, 'index.tsx'),
        templateFile: './formik/formik.tsx.hbs',
        abortOnFail: true,
      },
      {
        type: 'pretty-add',
        path: path.resolve(filePath, 'validate.tsx'),
        templateFile: './formik/validate.tsx.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
