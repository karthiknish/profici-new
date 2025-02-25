/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#000000",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#6A6A6A",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#000000",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#6A6A6A",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#000000",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#000000",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#000000",
        },
        gray: {
          DEFAULT: "#6A6A6A",
          light: "#F5F5F5",
          dark: "#404040",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#000000",
            a: {
              color: "#000000",
              "&:hover": {
                color: "#6A6A6A",
              },
            },
            '[class~="lead"]': {
              color: "#6A6A6A",
            },
            strong: {
              color: "#000000",
            },
            "ol > li::before": {
              color: "#6A6A6A",
            },
            "ul > li::before": {
              backgroundColor: "#6A6A6A",
            },
            hr: {
              borderColor: "#6A6A6A",
            },
            blockquote: {
              color: "#000000",
              borderLeftColor: "#6A6A6A",
            },
            h1: {
              color: "#000000",
            },
            h2: {
              color: "#000000",
            },
            h3: {
              color: "#000000",
            },
            h4: {
              color: "#000000",
            },
            "figure figcaption": {
              color: "#6A6A6A",
            },
            code: {
              color: "#000000",
            },
            "a code": {
              color: "#000000",
            },
            pre: {
              color: "#000000",
              backgroundColor: "#F5F5F5",
            },
            thead: {
              color: "#000000",
              borderBottomColor: "#6A6A6A",
            },
            "tbody tr": {
              borderBottomColor: "#6A6A6A",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
