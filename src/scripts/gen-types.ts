import { spawn } from "child_process";
import type { PathLike } from "fs";
import fs, { appendFileSync, readFile, writeFileSync } from "fs";
import klawSync from "klaw-sync";
import { forEach } from "lodash-es";
import { resolve } from "path";
import titleize from "titleize";

/**
 * @description function to delete files and directories
 */
const delDir = (path: PathLike) => {
  const files: string[] = [];
  if (fs.existsSync(path)) {
    files.splice(0, files.length, ...fs.readdirSync(path));
    forEach(files, (file) => {
      const curPath = path + "/" + file;
      if (fs.statSync(curPath).isDirectory()) delDir(curPath);
      else fs.unlinkSync(curPath);
    });
    fs.rmdirSync(path);
  }
};

delDir("./dist/client");
delDir("./dist/scripts");

/**
 * @description delete test files
 */
function deleteTestTypes() {
  klawSync(resolve("./dist/packages"), {
    nofile: true,
  })
    .filter((dir) => dir.path.endsWith("__test__"))
    .forEach((dir) => delDir(dir.path));
}

deleteTestTypes();

/**
 * @description addAllComponents to main d.ts
 */
function addAllComponents() {
  const fileName = resolve("./dist/index.d.ts");
  const order = `export * from "./packages/main";`;
  readFile(fileName, (err, data) => {
    const text = data.toString("utf8");
    const texts = text.split("\n");
    while (texts[texts.length - 1] === "" || texts[texts.length - 1] === order) texts.pop();
    writeFileSync(fileName, texts.join("\n"));
    appendFileSync(fileName, `\n${order}`);

    spawn(/^win/.test(process.platform) ? "eslint.cmd" : "eslint", [fileName, "--fix"]).on("error", function (err) {
      throw err;
    });
  });
}

// addAllComponents();

/**
 * @description add volar
 */
function genGlobalComponentTypes() {
  const globalTypeDir = resolve("./dist/global.d.ts");
  const apis: string[] = [`import "./packages/lib";`];

  let template = `
declare module '@vue/runtime-core' {
   export interface GlobalComponents {
  `;
  klawSync(resolve("./dist/packages"), {
    depthLimit: 0,
    nofile: true,
  })
    .map((dir) => dir.path)
    .filter((dir) => !(dir.endsWith("tool") || dir.endsWith("composables")))
    .forEach((dir) => {
      const componentName = titleize(dir.split("\\").pop() || "");
      const order = `C${componentName}: typeof import("csss-ui")["C${componentName}"]`;
      template += `\n${order}`;
      apis.push(`\nimport "./packages/${componentName.toLowerCase()}/${componentName.toLocaleLowerCase()}Type"`);
    });
  template += `
    }
  }

  export {}
  `;
  writeFileSync(globalTypeDir, template);

  // add api types
  apis.forEach((api) => {
    appendFileSync(globalTypeDir, api);
  });
}

genGlobalComponentTypes();
