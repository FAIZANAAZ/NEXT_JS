import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.freepik.com", // Wildcard ka use karain taake subdomains bhi cover hoon
      },
    ],
  },
};

export default nextConfig;
