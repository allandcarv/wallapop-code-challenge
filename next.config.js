/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'frontend-tech-test-data.s3-eu-west-1.amazonaws.com',
      'paintings.pinotspalette.com',
    ],
  },
};

module.exports = withFonts(nextConfig);
