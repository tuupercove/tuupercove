import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head />
      <body className="min-h-screen bg-background font-sans antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export const runtime = "experimental-edge";