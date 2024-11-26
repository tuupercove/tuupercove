import "@/styles/globals.css";
import "@/styles/loading.css";
import type { AppProps } from "next/app";

import LayoutRoot from "@/layout/layoutRoot"

import {NextUIProvider} from "@nextui-org/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NextUIProvider>
        <LayoutRoot>
          <Component {...pageProps} />
        </LayoutRoot>
      </NextUIProvider>
    </div>
  );
}
