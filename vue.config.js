const path = require("path");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/ammout" : "/",
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      extensions: [".vue", ".ts"],
    },
  },
};
