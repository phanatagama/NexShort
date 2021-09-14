module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL: "https://nexshort.vercel.app",
    MONGODB_URL: "mongodb+srv://dicoding:dicoding@cluster0.tl2bq.mongodb.net/shortLink?retryWrites=true&w=majority",
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },
}
