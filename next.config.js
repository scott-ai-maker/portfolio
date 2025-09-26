/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Removed 'appDir' as it is unrecognized
  },
  images: {
    domains: ["images.unsplash.com"]
  }
};

module.exports = nextConfig;
