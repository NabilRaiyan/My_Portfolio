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
          DEFAULT: "#000",
          100: "#000319",
        },
        bg: {
          DEFAULT: "#f3f3f3",
          100: "#f3f3fa",
        },
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lora: ["Lora", "sans-serif"]
      },

      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        movePingPong1: "movePingPong1 3s ease-in-out infinite",
        movePingPong2: "movePingPong2 2s ease-in-out infinite",
        movePingPong3: "movePingPong3 3s ease-in-out infinite",

      },

      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%, -40%) scale(1.1)",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },

        movePingPong1: {
          "0%": {
              transform: "translateY(0)",
            },
            "50%": {
              transform: "translateY(100%)",
            },
            "100%": {
              transform: "translateY(0)",
            },
        },

        movePingPong2: {
          "0%": {
              transform: "translateY(0)",
            },
            "60%": {
              transform: "translateY(60%)",
            },
            "100%": {
              transform: "translateY(0)",
            },
        },

        movePingPong3: {
          "0%": {
              transform: "translateY(0)",
            },
            "50%": {
              transform: "translateY(100%)",
            },
            "100%": {
              transform: "translateY(0)",
            },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
