import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yzidfofruhqoxujkbvdi.supabase.co",
        pathname: "/storage/v1/object/public/media/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;