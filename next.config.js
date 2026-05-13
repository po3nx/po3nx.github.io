/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    // Dangerously allow production builds to complete with type errors
    ignoreBuildErrors: true,
  },
  experimental: {
    // Turn off internal build optimizations that might trigger code crashes
    optimizePackageImports: []
  }
};

module.exports = nextConfig
