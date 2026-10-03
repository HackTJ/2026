import type { NextConfig } from "next";
import { execFileSync } from "node:child_process";
import { join } from "node:path";
import { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } from "next/constants";

const normalizeBasePath = (value?: string) => {
  if (!value) return "";
  const trimmed = value.trim().replace(/\/+$/, "");
  if (trimmed === "" || trimmed === "/") return "";
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
};

const basePath = normalizeBasePath(process.env.NEXT_BASE_PATH);

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default function config(phase: string): NextConfig {
  if (phase === PHASE_PRODUCTION_BUILD || phase === PHASE_DEVELOPMENT_SERVER) {
    execFileSync(process.execPath, [join(__dirname, "scripts/optimize-images.mjs")], {
      stdio: "inherit",
    });
  }
  return nextConfig;
}
