import "tailwindcss/tailwind.css";

import { MDXProvider } from "@mdx-js/react";
import Wrapper from "../components/wrapper";

const components = {
  wrapper: Wrapper,
};

export default function App({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
