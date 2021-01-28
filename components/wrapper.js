import React from "react";

export default function Wrapper({ children, meta }) {
  return <div className="prose lg:prose-xl mx-auto my-24">{children}</div>;
}
