/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "*.cdn.britannica.com", // Wildcard ka use karain taake subdomains bhi cover hoon
        },
      ],
    },
  };
  

export default nextConfig;
