"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Play, Pause } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const features = [
    "Expert Fractional C-Suite Services",
    "Strategic Growth Planning",
    "Business Transformation",
    "Operational Excellence",
  ];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative bg-white pt-24 pb-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gray-50/50 rounded-l-3xl transform -translate-x-10 skew-x-3 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div>
              <motion.div
                className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="flex h-2 w-2 rounded-full bg-gray-600 mr-2"></span>
                Trusted by 100+ Growing Businesses
              </motion.div>

              <motion.h1
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-6xl lg:mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.span
                  className="block text-black"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Ready to Scale
                </motion.span>
                <motion.span
                  className="block text-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Your Business?
                </motion.span>
              </motion.h1>

              <motion.p
                className="mt-6 text-xl text-gray-500 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Complete our short questionnaire to see if you qualify to become
                a Profici Growth Partner and unlock your business's true
                potential.
              </motion.p>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    >
                      <CheckCircle className="h-5 w-5 text-black mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="mt-10 flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-black text-white hover:bg-black/90 shadow-lg shadow-gray-400/20"
                >
                  <Link href="/questionnaire">
                    Start Assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-gray-300 hover:bg-gray-50"
                >
                  <Link href="/services/certification-services">
                    Our Services
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="mt-12 lg:mt-0 lg:relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-gray-200/50 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gray-300/50 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>

                {/* Main card */}
                <div className="relative">
                  <video
                    ref={videoRef}
                    className="w-full h-full rounded-2xl shadow-xl"
                    autoPlay
                    playsInline
                  >
                    <source
                      src="https://profici.co.uk/wp-content/uploads/2024/11/Unlock-Business-Potential-Cash-Flow.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>

                  {/* Video overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>

                  {/* Centered Play/Pause button */}
                  <button
                    onClick={togglePlay}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white/80 rounded-full hover:bg-white transition-colors duration-200"
                  >
                    {isPlaying ? (
                      <Pause className="h-8 w-8 text-gray-800" />
                    ) : (
                      <Play className="h-8 w-8 text-gray-800" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
