/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.sipolma.id",
        port: "",
      },
    ],
  },
};

export default nextConfig;
