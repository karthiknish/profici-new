import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: {
    default: "Profici | Business Growth & Digital Marketing Agency",
    template: "%s | Profici",
  },
  description:
    "Profici is a leading business growth and digital marketing agency specializing in web design, digital marketing, business strategy, and marketing strategy services.",
  keywords: [
    "business growth",
    "digital marketing",
    "web design",
    "business strategy",
    "marketing strategy",
    "Liverpool agency",
  ],
  authors: [{ name: "Profici" }],
  creator: "Profici",
  publisher: "Profici",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
