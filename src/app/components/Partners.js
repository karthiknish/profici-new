"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  {
    name: "Google Partner",
    logo: "/images/google-partner.png",
    description: "Certified Google Ads & Analytics Partner",
  },
  {
    name: "Meta Partner",
    logo: "/images/meta-partner.png",
    description: "Business & Marketing Partner",
  },
  {
    name: "Shopify Partner",
    logo: "/images/shopify-partner.png",
    description: "Expert E-commerce Partner",
  },
  {
    name: "WordPress Partner",
    logo: "/images/wordpress-partner.png",
    description: "Professional Solutions Partner",
  },
  {
    name: "TikTok Partner",
    logo: "/images/tiktok-partner.png",
    description: "Official Marketing Partner",
  },
];

export default function Partners() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-black mb-6">
            Trusted Partnerships
          </h2>
          <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
            We are proud to be official partners with the world's leading
            digital platforms, ensuring we deliver the highest quality solutions
            for our clients.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="group relative bg-white rounded-2xl p-6 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="aspect-square w-full mb-4 flex items-center justify-center bg-gray-50 rounded-xl ">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  {partner.name}
                </h3>
                <p className="text-sm text-[#6A6A6A]">{partner.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
