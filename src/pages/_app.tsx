import "@/styles/globals.css";
import "@/styles/loading.css";
import type { AppProps } from "next/app";
import * as pace from "pace-js"

import * as Turbo from "@hotwired/turbo"

import {NextUIProvider} from "@nextui-org/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </div>
  );
}
