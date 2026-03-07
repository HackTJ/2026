import type { NextConfig } from "next";

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

export default nextConfig;
