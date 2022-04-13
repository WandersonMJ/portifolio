/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "dummyimage.com"],
  },
  optimizeFonts: false,
};

module.exports = nextConfig;
