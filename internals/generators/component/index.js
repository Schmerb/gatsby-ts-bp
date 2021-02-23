/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Component Generator
 */
const path = require("path")
const componentExists = require("../utils/componentExists")

module.exports = {
  description: "Add an unconnected component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Button",
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
  actions: () => {
    const filePath = path.resolve(
      __dirname,
      "../../../src/components/{{properCase name}}"
    )

    const actions = [
      {
        type: "add",
        path: path.resolve(filePath, "index.tsx"),
        templateFile: "./component/index.tsx.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: path.resolve(filePath, "stories/index.stories.tsx"),
        templateFile: "./component/index.stories.tsx.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: path.resolve(filePath, "messages.ts"),
        templateFile: "./component/messages.ts.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: path.resolve(filePath, "loadable.tsx"),
        templateFile: "./component/loadable.tsx.hbs",
        abortOnFail: true,
      },
      {
        type: "prettify",
        path: path.resolve(
          __dirname,
          "../../../app/components/{{properCase name}}"
        ),
      },
    ]

    return actions
  },
}
