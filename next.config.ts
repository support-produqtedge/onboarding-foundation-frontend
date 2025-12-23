import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',

  async rewrites() {
    return [
      {
        source: '/api/admin/auth/:path*',
        destination: "http://ec2-13-62-76-73.eu-north-1.compute.amazonaws.com:3008/api/v1/admin/auth/:path*"
      },
      {
        source: "/api/admin/superadmin/:path*",
        destination: "http://ec2-13-62-76-73.eu-north-1.compute.amazonaws.com:3008/api/v1/admin/superadmin/:path*"
      },
      {
        source: "/api/admin/superadmin/:path*",
        destination: "http://ec2-13-62-76-73.eu-north-1.compute.amazonaws.com:3008/api/v1/admin/superadmin/:path*"
      }
    ]
  }
};

export default nextConfig;
