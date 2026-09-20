// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//     images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "sajilowebs.product-api.hamroyouthit.com",
//         pathname: "/**",
//       },
//     ],
//   },
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sajilowebs.product-api.hamroyouthit.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "templates-api.hamroyouthit.com",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "templates-api.hamroyouthit.com",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;