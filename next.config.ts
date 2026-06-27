import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  webpack: (config) => {
    config.module.rules.push({ test: /\.glsl$/, type: 'asset/source' });
    return config;
  },
};

export default nextConfig;
