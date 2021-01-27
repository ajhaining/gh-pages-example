const debug = process.env.NODE_ENV !== "production";

module.exports = {
  basePath: !debug ? "/gh-pages-example/" : "",
  assetPrefix: !debug ? "/gh-pages-example/" : "",
};
