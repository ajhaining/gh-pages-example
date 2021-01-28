const debug = process.env.NODE_ENV !== "production";

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  basePath: !debug ? "/gh-pages-example" : undefined,
  assetPrefix: !debug ? "/gh-pages-example/" : "",
  pageExtensions: ["js", "jsx", "md", "mdx"],
});
