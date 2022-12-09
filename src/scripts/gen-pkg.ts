import chalk from "chalk";
import minimist from "minimist";
import { fileURLToPath } from "node:url";
import { dirname, join } from "path";
import { Plop, run } from "plop";

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
    (env) => {
      return run(env, undefined, true);
    },
  );
}

createPkg();
