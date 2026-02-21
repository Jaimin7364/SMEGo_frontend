import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Skip ESLint during production builds; CI/lint can still run separately.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
