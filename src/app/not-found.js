"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
// Metadata won't work in client components
// Move metadata to a separate layout.js file

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-48">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8">
              404
              <span className="block mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Page Not Found
              </span>
            </h1>
            <p className="text-xl leading-8 text-gray-300 mb-12">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/" className="inline-block">
              <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 transform hover:-translate-y-1">
                Back to Home
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Suggestions Section */}
      <div className="flex-grow py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-black mb-6">
              You might be looking for
            </h2>
            <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
              Here are some helpful links that might get you back on track.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <Link href="/services" className="block h-full">
                <div className="p-6">
                  <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    Our Services
                  </h3>
                  <p className="text-[#6A6A6A]">
                    Explore our comprehensive range of business and digital
                    services.
                  </p>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <Link href="/blog" className="block h-full">
                <div className="p-6">
                  <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">📝</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Blog</h3>
                  <p className="text-[#6A6A6A]">
                    Read our latest insights, tips, and industry updates.
                  </p>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <Link href="/contact" className="block h-full">
                <div className="p-6">
                  <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">📞</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    Contact Us
                  </h3>
                  <p className="text-[#6A6A6A]">
                    Get in touch with our team for any questions or inquiries.
                  </p>
                </div>
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-[#6A6A6A]">
              If you believe this is an error, please{" "}
              <Link
                href="/contact"
                className="text-black font-medium hover:underline"
              >
                contact our support team
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
