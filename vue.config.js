const path = require("path");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/ammout" : "/",
  devServer: {
    proxy: {
      "^/api/v1": {
        target: "http://localhost:1323",
        ws: false,
        changeOrigin: true,
      },
    },
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      extensions: [".vue", ".ts"],
    },
  },
};
