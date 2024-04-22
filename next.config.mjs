/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node$/,
      use: "raw-loader",
    });
    return config;
  },
};

export default nextConfig;
