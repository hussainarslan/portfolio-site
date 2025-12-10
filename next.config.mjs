/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export', // Changed from 'standalone' to 'export'
  trailingSlash: true, // Optional but recommended for static hosting
}

export default nextConfig
