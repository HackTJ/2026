import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const publicRoot = fileURLToPath(new URL("../public/", import.meta.url));
const scriptModified = (await stat(fileURLToPath(import.meta.url))).mtimeMs;
let count = 0;

async function optimizeImage(source, destination, width, lossless = false) {
  const sourceModified = (await stat(source)).mtimeMs;
  const outputModified = await stat(destination).then((file) => file.mtimeMs).catch(() => 0);
  if (outputModified >= Math.max(sourceModified, scriptModified)) return;
  await sharp(source).rotate().resize({ width, withoutEnlargement: true })
    .webp({ quality: 80, lossless }).toFile(destination);
  count++;
}

async function optimizeDirectory(directory, width, lossless = false) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const source = join(directory, entry.name);
    if (entry.isDirectory()) {
      await optimizeDirectory(source, width, lossless);
    } else if (/\.(png|jpe?g)$/i.test(entry.name)) {
      const imageWidth = entry.name === "full-team.jpg" ? 1920 : width;
      await optimizeImage(source, source.replace(/\.(png|jpe?g)$/i, ".webp"), imageWidth, lossless);
    }
  }
}

// Next prepares one fixed-size copy per image before building or starting development.
await optimizeDirectory(join(publicRoot, "prev"), 480);
await optimizeDirectory(join(publicRoot, "team"), 720);
await optimizeDirectory(join(publicRoot, "pastwinners"), 960);
await optimizeDirectory(join(publicRoot, "logos"), 640, true);
await optimizeImage(join(publicRoot, "pink_white.png"), join(publicRoot, "pink_white-small.webp"), 140, true);
console.log(`Prepared optimized images (${count} updated).`);
