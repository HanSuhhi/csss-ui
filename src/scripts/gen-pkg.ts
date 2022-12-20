import chalk from "chalk";
import { defer, delay } from "lodash-es";
import minimist from "minimist";
import { exec, execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "path";
import { Plop, run } from "plop";
import { spawn } from 'child_process';

const argv = minimist(process.argv.slice(2));

function createPkg() {
  if (argv.name === true) {
    return console.error(`${chalk.bgRedBright.bold(" pkg create failed ")} name is not defined.`);
  }
  const __dirname = dirname(fileURLToPath(import.meta.url));

  Plop.launch(
    {
      configPath: join(__dirname, "plopfile.js"),
    },
    (env) => run(env, undefined, true)
  );

  delay(() => {
    exec("pnpm run gen:components");
    exec("pnpm run lint:eslint");
  }, 300);

}

createPkg();
