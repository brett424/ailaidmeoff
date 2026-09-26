/** @type {import('next').NextConfig} */
const nextConfig = process.env.NETLIFY_STATIC_EXPORT === '1'
  ? { output: 'export', trailingSlash: true }
  : {}

export default nextConfig
