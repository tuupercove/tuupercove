import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script src="https://unpkg.com/twemoji@latest/dist/twemoji.min.js" crossOrigin="anonymous" />
        <Script src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js" />
        <Script src="https://github.com/CcNicebruh/WebBio/raw/refs/heads/main/assets/js/warn.min.js" />
        <link rel="stylesheet" href="https://github.com/CcNicebruh/lottery_prankehe/raw/refs/heads/master/flash.css" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
