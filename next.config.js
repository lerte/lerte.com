/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true
  },
  async rewrites() {
    return [
      {
        source: '/google/:path*',
        has: [
          {
            type: 'query',
            key: 'q',
            value: '(?<path>.*)' // Named capture group to match anything on the value
          }
        ],
        destination: 'https://www.google.com/search'
      }
    ]
  }
}

module.exports = nextConfig
