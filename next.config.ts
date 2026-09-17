import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sajilowebs.product-api.hamroyouthit.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
