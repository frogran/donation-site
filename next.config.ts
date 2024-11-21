/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Define common device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    
    // Define image sizes for smaller images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Enable WebP format for better compression
    formats: ['image/webp'],
    
    // Add this if you need to use external images
    remotePatterns: [
      /* Example for external images:
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/images/**',
      },
      */
    ],
    
    // Set maximum image size (optional)
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true, // Since you're using SVG files
  },
}

module.exports = nextConfig
