import { spawn } from "child_process";
import fs from "fs";
import klawSync from "klaw-sync";
import { CWD, packagesPath } from "./constant";

/**
 * @description total files
 */
const totalStyle = klawSync(packagesPath, {
  nodir: true,
  depthLimit: 1,
})
  .filter((file) => file.path.endsWith("index.ts"))
  .map((file) => file.path);

/**
 * @description write all files to
 */
function writeStyleEntries() {
  const styleEntryFileName = `${CWD}/src/packages/main.ts`;
  let template = `/* Auto Generate with \`gen:components\` */`;
  totalStyle.map((file) => {
    const paths = file.split("\\").slice(-2);
    const path = `./${paths[0]}`;
    template += `\n export * from "${path}";`;
  });

  fs.writeFileSync(styleEntryFileName, template);

  spawn(/^win/.test(process.platform) ? "eslint.cmd" : "eslint", [styleEntryFileName, "--fix"]).on("error", function (err) {
    throw err;
  });
}

writeStyleEntries();
