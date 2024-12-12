import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        myLightTheme: {
          primary: '#9bb7dd',
          secondary: '#ff9800',
          accent: '#14213d',
          'base-100': '#2A3663',
          'base-content': '#ffffff',
        },
      },
      {
        myDarkTheme: {
          primary: '#0B192C',
          secondary: '#ff9800',
          accent: '#0D92F4',
          'base-100': '#ffffff',
          'base-content': '#2A3663',
        },
      },
    ],
  },
  
} satisfies Config;
