/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // largePageDataBytes: 128 * 1000, // 128KB by default
    largePageDataBytes: 128 * 10000,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kampung-media.com",
      },
    ],
  },
};

module.exports = nextConfig;
