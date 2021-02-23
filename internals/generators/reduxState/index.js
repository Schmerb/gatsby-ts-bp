/* eslint-disable @typescript-eslint/no-var-requires */
/**
 *
 * Redux State Generator
 *
 */
const path = require("path")
const dirExists = require("../utils/dirExists")
const componentExists = require("../utils/componentExists")
const { camelCase } = require("../utils/strings")

module.exports = {
  description: "Add redux state actions and reducer",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Formik",
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? "A component or container with this name already exists"
            : true
        }

        return "The name is required"
      },
    },
  ],
  actions: (...props) => {
    const appPath = path.resolve(__dirname, "../../../src")
    const dirPath = path.resolve(__dirname, "../../../src/state")
    const filePath = path.resolve(
      __dirname,
      "../../../src/state/{{camelCase name}}"
    )

    dirExists(dirPath)

    const { name } = props[0]

    const actions = [
      {
        type: "pretty-add",
        path: path.resolve(filePath, `${camelCase(name)}Actions.tsx`),
        templateFile: "./reduxState/actions.tsx.hbs",
        abortOnFail: true,
      },
      {
        type: "pretty-add",
        path: path.resolve(filePath, `${camelCase(name)}Reducer.tsx`),
        templateFile: "./reduxState/reducer.tsx.hbs",
        abortOnFail: true,
      },
      {
        type: "modify",
        path: path.resolve(appPath, "state/store.tsx"),
        pattern: "// import",
        templateFile: `./reduxState/reducerImport.hbs`,
        abortOnFail: true,
      },
      {
        type: "modify",
        path: path.resolve(appPath, "state/store.tsx"),
        pattern: "// reducer",
        templateFile: `./reduxState/reducerAddToList.hbs`,
        abortOnFail: true,
      },
    ]

    return actions
  },
}
