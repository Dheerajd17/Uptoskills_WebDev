/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
      },
    ],
  },
  experimental: {
    optimizeCss: true, // ✅ Keeps CSS optimization
    scrollRestoration: true, // ✅ Smooth scrolling
  },
  
};

export default nextConfig;
