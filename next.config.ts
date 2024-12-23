import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
  images: {
    domains: ["img.icons8.com", "img.freepik.com", "www.freepik.com"],
  },
};

export default nextConfig;
