/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react", "@remixicon/react"],
  },
};

export default nextConfig;
