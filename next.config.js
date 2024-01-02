/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // largePageDataBytes: 128 * 1000, // 128KB by default
    largePageDataBytes: 128 * 10000,
  },
};

module.exports = nextConfig;
