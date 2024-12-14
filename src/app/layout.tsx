import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Mali } from "next/font/google";

//const mali = Mali({
//  subsets: ["latin"],
//  variable: "--font-mali",
//  weight: "200 300 400 500 600 700",
//})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TuuperCove | Kingdoms of Vtubers, I guess...",
  description: "A brand new platform from crazy to project like me?!?!?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
