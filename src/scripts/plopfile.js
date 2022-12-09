import { resolve } from "path";
import fs from "fs";

module.exports = function (/** @type {import("plop").NodePlopAPI;} */ plop) {
  plop.setGenerator("component", {
    description: "create a component",
    prompts: [
      {
        name: "name",
        validate: (name) => {
          if (checkComponentName(name)) return "please rename a pkg use 'kebab-case' ";
          if (checkComponentExist(name)) return `${name} is already registered`;
          return true;
        },
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "../packages/{{name}}/",
        base: "../template",
        templateFiles: `../template/**/**`,
      },
    ],
  });
};

const checkComponentName = (componentName) => {
  return !/^[a-z][a-z|-]*[a-z]$/.test(componentName);
};

const checkComponentExist = (componentName) => {
  return fs.existsSync(resolve(__dirname, `../src/packages/${componentName}`));
};
