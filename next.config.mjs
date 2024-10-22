/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/w500/**',
      },
    ],
  },
  env: {
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
    REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
    NEXT_PUBLIC_BASEIMGURL: process.env.NEXT_PUBLIC_BASEIMGURL,
    REACT_APP_ACCOUNT_ID: process.env.REACT_APP_ACCOUNT_ID,
    REACT_APP_TOKEN_KEY: process.env.REACT_APP_TOKEN_KEY,
    // Tambahkan variabel lain yang diperlukan di sini
  },
};

export default nextConfig;
