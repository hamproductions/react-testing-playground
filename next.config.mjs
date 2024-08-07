/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
