/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['image.tmdb.org', 'tailwindui.com', 'cdn.sanity.io'],
  },
};

module.exports = nextConfig;
