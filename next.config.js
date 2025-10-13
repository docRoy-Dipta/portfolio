/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "negliadesign.com",
      "www.beyondkey.com",
      "www.geckoboard.com",
      "cdn.prod.website-files.com",
      "cdn.pixabay.com",
      "images.unsplash.com",
      "miro.medium.com",
      "lh3.googleusercontent.com",
      "tse1.mm.bing.net",
      "tse2.mm.bing.net",
    ],
  },
};

module.exports = nextConfig;
