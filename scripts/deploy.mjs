import { spawnSync } from "node:child_process";
import { rmSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const usage = "Usage: node scripts/deploy.mjs [event|homepage|all]";

function originRepository() {
  const result = spawnSync("git", ["config", "--get", "remote.origin.url"], {
    cwd: projectRoot,
    encoding: "utf8",
  });

  if (result.error) {
    throw result.error;
  }

  const repository = result.stdout?.trim();
  if (result.status !== 0 || !repository) {
    throw new Error("Set the origin Git remote or provide EVENT_REPO.");
  }

  return repository;
}

function runNodeCommand(module, args, env = process.env) {
  const script = require.resolve(module);
  console.log(`+ node ${module} ${args.join(" ")}`);

  // Run JavaScript entry points directly so Windows does not need a shell or .cmd wrapper.
  const result = spawnSync(process.execPath, [script, ...args], {
    cwd: projectRoot,
    env,
    stdio: "inherit",
  });

  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    throw new Error(`${module} failed (${result.signal || result.status}).`);
  }
}

function deploy(target, timestamp) {
  const isEvent = target === "event";
  const basePath = isEvent ? "/2026" : "";
  const branch = isEvent ? "gh-pages" : "main";
  const repository = isEvent
    ? process.env.EVENT_REPO || originRepository()
    : process.env.HOMEPAGE_REPO || "git@github.com:HackTJ/hacktj.github.io.git";
  const domain = process.env.HOMEPAGE_DOMAIN || "hacktj.org";

  console.log(`\nDeploying ${target} (base path: ${basePath || "/"})`);
  runNodeCommand("next/dist/bin/next", ["build"], {
    ...process.env,
    NEXT_BASE_PATH: basePath,
    NEXT_PUBLIC_BASE_PATH: basePath,
  });

  const cnamePath = join(projectRoot, "out", "CNAME");
  console.log(isEvent ? "+ remove out/CNAME" : `+ write out/CNAME: ${domain}`);
  if (isEvent) {
    rmSync(cnamePath, { force: true });
  } else {
    writeFileSync(cnamePath, `${domain}\n`);
  }

  runNodeCommand("gh-pages/bin/gh-pages.js", [
    "--dist",
    "out",
    "--dotfiles",
    "--message",
    `Update ${timestamp}`,
    "--branch",
    branch,
    "--repo",
    repository,
  ]);
}

function main() {
  const args = process.argv.slice(2);
  if (args.length === 1 && args[0] === "--help") {
    console.log(usage);
    return;
  }

  const target = args[0] || "event";
  if (args.length > 1 || !["event", "homepage", "all"].includes(target)) {
    throw new Error(usage);
  }

  const timestamp = new Date().toISOString();
  const destinations = target === "all" ? ["event", "homepage"] : [target];
  for (const destination of destinations) {
    deploy(destination, timestamp);
  }
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
