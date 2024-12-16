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
        black: {
          DEFAULT: '#000',
          100: '#000319'
        },

        bg: {
          DEFAULT: '#f3f3f3',
          100: '#f3f3fa'
        }
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1.1)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
