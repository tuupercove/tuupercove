import type { Config } from "tailwindcss";

import {nextui} from "@nextui-org/react";

const config: Config = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  // important: '#_next',
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui(),
  ]
};
export default config;
