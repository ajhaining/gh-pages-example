const debug = process.env.NODE_ENV !== "production";

module.exports = {
  basePath: !debug ? "/gh-pages-example" : undefined,
  assetPrefix: !debug ? "/gh-pages-example/" : "",
};
