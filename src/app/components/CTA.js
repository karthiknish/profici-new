"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const statsAnimation = {
  initial: { scale: 0.8, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  viewport: { once: true },
};

export default function CTA() {
  const benefits = [
    "Expert C-Suite guidance",
    "Strategic growth planning",
    "Operational efficiency",
    "Increased profitability",
  ];

  return (
    <div className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white opacity-10"></div>
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <motion.div
                className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white mb-6"
                variants={fadeInUp}
              >
                <span className="flex h-2 w-2 rounded-full bg-white mr-2"></span>
                Take Action Today
              </motion.div>

              <motion.h2
                className="text-3xl font-extrabold text-white sm:text-4xl"
                variants={fadeInUp}
              >
                Ready to Scale Your Business?
              </motion.h2>

              <motion.p
                className="mt-4 text-lg text-gray-100"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                Take the first step towards transforming your business. Complete
                our assessment to see if you qualify for the Profici Growth
                Program.
              </motion.p>

              <motion.div
                className="mt-8"
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
              >
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-white"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    >
                      <CheckCircle className="h-5 w-5 text-white/70 mr-3" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="mt-10 flex flex-col sm:flex-row gap-4"
                variants={fadeInUp}
                transition={{ delay: 0.8 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-gray-800 hover:bg-gray-50 shadow-lg shadow-gray-900/20 rounded-full"
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
                  className="border-white text-white bg-white/10 hover:bg-white/10 rounded-full"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-16 lg:mt-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/5 rounded-full"></div>

                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <h3 className="font-medium text-white">
                          Advantages of Delegating Growth
                        </h3>
                        <p className="text-sm text-gray-300">
                          Partner with experts
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full">
                      Results
                    </span>
                  </div>

                  <div className="space-y-6">
                    {/* Delegation Advantages */}
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: "20hrs", label: "Time Saved Weekly" },
                        { value: "40%", label: "Reduced Overhead" },
                        { value: "3x", label: "Faster Implementation" },
                        { value: "150%", label: "Focus on Core Business" },
                      ].map((stat, index) => (
                        <motion.div
                          key={index}
                          className="bg-white/5 rounded-lg p-4 text-center"
                          variants={statsAnimation}
                          initial="initial"
                          whileInView="whileInView"
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * index, duration: 0.5 }}
                          whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 },
                          }}
                        >
                          <motion.div
                            className="text-2xl font-bold text-white"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 * index, duration: 0.5 }}
                          >
                            {stat.value}
                          </motion.div>
                          <motion.div
                            className="mt-1 text-xs text-gray-300"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 * index, duration: 0.5 }}
                          >
                            {stat.label}
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-white/10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-gray-300">
                          Client Satisfaction
                        </span>
                        <span className="text-sm font-medium text-white">
                          92%
                        </span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-1.5">
                        <div
                          className="bg-white h-1.5 rounded-full"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                      <p className="mt-3 text-sm text-gray-300">
                        92% of businesses report significant improvements after
                        delegating growth strategies to our experts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
