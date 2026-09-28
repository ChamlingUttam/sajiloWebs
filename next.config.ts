

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: new URL(process.env.NEXT_PUBLIC_SAJILOWEBS_API_URL!).hostname,
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: new URL(process.env.NEXT_PUBLIC_TEMPLATES_API_URL!).hostname,
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: new URL(process.env.NEXT_PUBLIC_TEMPLATES_API_URL!).hostname,
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;