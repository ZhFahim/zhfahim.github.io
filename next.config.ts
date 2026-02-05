import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/gh/devicons/devicon/icons/**",
      },
      {
        protocol: "https",
        hostname: "niftyitsolution.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
