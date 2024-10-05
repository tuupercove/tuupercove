import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased bg-slate-900">
        <Main />
        <NextScript />
      </body>
      <Script src="https://own.vtuberhub.in.th/assets/js/warn.min.js" />
    </Html>
  );
}
