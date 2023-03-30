/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ['@webcontainer/api'],
  async rewrites() {
    return [
      {
        source: '/:path*',
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
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin'
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp'
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-site'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
