/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Export a fully static site (out/) — deploys to any static host, incl. Netlify.
  output: "export",
  // Static export has no image optimization server, so serve images as-is.
  images: { unoptimized: true },
  // Emit /about/index.html etc. so deep links resolve cleanly on static hosts.
  trailingSlash: true,
};

export default nextConfig;
