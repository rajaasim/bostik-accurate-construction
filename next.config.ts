import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/mail",
        destination: "https://www.spacemail.com/login/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
