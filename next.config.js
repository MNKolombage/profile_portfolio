/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
  experimental: {
    optimizeCss: true
  }
}

module.exports = nextConfig