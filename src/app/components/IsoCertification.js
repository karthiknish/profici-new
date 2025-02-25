"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function IsoCertification() {
  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-black/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-6 md:gap-12">
            <Image
              src="https://profici.co.uk/wp-content/themes/proficinew/assets/images/BSILogoBlack.svg"
              alt="BSI Logo"
              width={120}
              height={80}
              className="object-contain"
            />
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-black">ISO 9001:2015</h3>
              <p className="text-[#6A6A6A]">
                Certified Quality Management System
              </p>
            </div>
          </div>

          <div className="max-w-xl">
            <p className="text-[#6A6A6A]">
              We are an award-winning company that works to the very highest of
              standards by following the procedures set out in our ISO9001
              Certified Quality Management System.
            </p>
          </div>
          <Link
            href="/services/certification-services"
            className="whitespace-nowrap bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/90 transition-all duration-300"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
