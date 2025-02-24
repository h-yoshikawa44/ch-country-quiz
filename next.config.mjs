/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'flagcdn.com'
    }],
  },
};

export default nextConfig;
