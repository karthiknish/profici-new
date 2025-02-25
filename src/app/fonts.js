import { Inter } from "next/font/google";
import localFont from "next/font/local";

// Configure Inter font with fallback
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
  preload: true,
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

// Alternative: Use local font files if Google Fonts continues to have issues
export const interLocal = localFont({
  src: [
    {
      path: "../../public/fonts/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-inter",
});

// Use this font in your app
export const primaryFont = inter;
// If Google Fonts continues to fail, switch to:
// export const primaryFont = interLocal;
