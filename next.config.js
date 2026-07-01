import path from 'node:path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: path.resolve(process.cwd())
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.scdn.co' },
      { protocol: 'https', hostname: 'image-cdn-ak.spotifycdn.com' },
      { protocol: 'https', hostname: 'blend-playlist-covers.spotifycdn.com' },
      { protocol: 'https', hostname: 'image-cdn-fa.spotifycdn.com' },
      { protocol: 'https', hostname: 'miro.medium.com' },
      { protocol: 'https', hostname: 'cdn-images-1.medium.com' }
    ],
    unoptimized: false
  },
  async redirects() {
    return [
      '/projects/astra',
      '/projects/axo',
      '/projects/m31',
      '/projects/onethoughtaday',
      '/projects/stackers',
      '/projects/stylesync',
      '/projects/tandem-bike'
    ].map((source) => ({
      source,
      destination: '/projects',
      permanent: false
    }));
  }
};

export default nextConfig;
