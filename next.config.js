/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add the domains of your external images here
  },
  // Font optimization configuration
  optimizeFonts: true,
};

module.exports = nextConfig;
