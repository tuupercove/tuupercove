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
    <div className={`${itim.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-itim)]`} >
      <div className="glass">
        <p>hello</p>
        <Button href="/info">info</Button>
      </div>
    </div>
  );
}
