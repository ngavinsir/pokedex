module.exports = {
  images: {
    domains: ["raw.githubusercontent.com"]
  },
  webpack: (config, { isServer }) => {
    // Fixes packages that depend on fs/module module
    if (!isServer) {
      config.node = { fs: "empty", module: "empty" }
    }

    return config
  },
  async rewrites() {
    return [
      {
        source: "/:any*",
        destination: "/"
      }
    ]
  }
}
