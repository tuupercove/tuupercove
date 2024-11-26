import Image from "next/image";
import localFonts from "next/font/local";
import {Button} from "@nextui-org/react"

const itim = localFonts({
  src: "../styles/font/Itim-Regular.ttf",
  variable: "--font-itim",
  weight: "400",
});

export default function Home() {
  return (
    <div className={`${itim.variable} font-[family-name:var(--font-itim)]`} >
      <p>Hello</p>
    </div>
  );
}
