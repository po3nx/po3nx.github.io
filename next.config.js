/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pung.pw",
      },
    ],
  },}

module.exports = nextConfig
