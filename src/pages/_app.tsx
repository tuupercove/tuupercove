import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes"

// UI Component
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";

// Dir
import Layout from "@/Layout/Layout";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class">
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </NextUIProvider>
  );
}
