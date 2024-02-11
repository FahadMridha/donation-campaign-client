/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**',
           
          },
        ],
      },
      transpilePackages: ['@mui/x-charts'],
};

export default nextConfig;
