import type { NextConfig } from "next";

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",              // root
        destination: "/auth/login",
        permanent: false,
      },
      {
        source: "/login",         // /login
        destination: "/auth/login",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
