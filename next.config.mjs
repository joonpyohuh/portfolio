/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Avoid stale chunk 404s during heavy HMR on Windows
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
