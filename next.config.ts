import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: '/links',
        destination: '/links.html',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/privacy-policy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/terms-of-service',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/disclaimer',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/project/:slug',
        destination: '/projects/:slug',
        permanent: true,
      },
      {
        source: '/projects/trident-plots-panipat',
        destination: '/projects/trident-parktown',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;


