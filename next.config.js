/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // From first config
  eslint: {
    ignoreDuringBuilds: true, // From second config
  },
  images: {
    unoptimized: true, // From second config
  },
};

module.exports = nextConfig;
