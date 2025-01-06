module.exports = {
  reactStrictMode: true,
  env: {
    // BASE_URL: "https://nexshort.vercel.app",
    BASE_URL: "http://localhost:3000",
    API_URL: "http://localhost:3000/api/v1",
    // MONGODB_URL: "mongodb+srv://dicoding:dicoding@cluster0.tl2bq.mongodb.net/shortLink?retryWrites=true&w=majority",
    MONGODB_URL: "mongodb+srv://nexshort:nexshort@cluster0.bw65i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  },
 
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },
}
