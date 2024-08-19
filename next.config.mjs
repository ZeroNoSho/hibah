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
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "script-src 'self' 'unsafe-eval';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
