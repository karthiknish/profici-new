"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <main className="pt-16">
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          {/* Hero Section */}
          <section className="relative min-h-[90vh] flex items-center justify-center bg-white overflow-hidden">
            {/* Pattern Background */}
            <div className="absolute inset-0 bg-grid-gray opacity-30"></div>
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
              <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#00000008_0%,#00000002_50%,#00000008_100%)] opacity-20"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1
                  className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Transform Your Business
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">
                    {" "}
                    Vision Into Reality
                  </span>
                </motion.h1>
                <motion.p
                  className="mt-6 max-w-3xl mx-auto text-xl text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  We empower ambitious SMEs to reach their full potential
                  through strategic growth partnerships and expert business
                  consultancy.
                </motion.p>
                <motion.div
                  className="mt-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Link href="/questionnaire">
                    <Button
                      size="lg"
                      className="bg-black text-white hover:bg-black/90 shadow-lg shadow-gray-400/20 z-20 rounded-full"
                    >
                      Start Your Journey
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Animated Shapes */}
            <div className="absolute bottom-0 left-0 w-full h-64 overflow-hidden">
              <svg
                className="absolute bottom-0 left-0 w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
              >
                <path
                  fill="#f9fafb"
                  fillOpacity="1"
                  d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,213.3C840,224,960,224,1080,202.7C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                ></path>
              </svg>
            </div>
          </section>

          {/* Mission Statement */}
          <section className="py-24 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-gray opacity-20"></div>
            <motion.div
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-3xl mx-auto text-center space-y-8">
                <motion.p
                  className="text-lg md:text-xl text-gray-600 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  In the fast-paced world of business, time is a precious
                  commodity that often seems to slip away. As a business owner,
                  you undoubtedly dream of a stress-free life, where you can
                  allocate your time to the things that matter most.
                </motion.p>
                <motion.p
                  className="text-lg md:text-xl text-gray-600 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  What sets Profici apart is our commitment to being more than
                  just a service provider – we strive to be your strategic
                  growth partner.
                </motion.p>
              </div>
            </motion.div>
          </section>

          {/* Growth Journey & Pillars */}
          <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-gray opacity-10"></div>
            <motion.div
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-4xl font-bold text-center text-gray-900 mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Our Growth Journey & Pillars Of Success
              </motion.h2>

              {/* Growth Journey Steps */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {["CHALLENGE", "INNOVATE", "INTEGRATE", "ACCELERATE"].map(
                  (step, index) => (
                    <motion.div
                      key={index}
                      className="relative group"
                      variants={fadeIn}
                    >
                      <div className="absolute inset-0 bg-black rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative bg-white rounded-xl p-8 shadow-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                        <div className="text-5xl font-bold text-black/20 mb-4">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-black transition-colors duration-300">
                          {step}
                        </h3>
                      </div>
                    </motion.div>
                  )
                )}
              </motion.div>

              {/* Success Pillars */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  {
                    number: "01",
                    title: "Honest Communication And Feedback",
                    description:
                      "Transparency is at the core of our communication strategy. We believe in open and honest dialogue with our clients, fostering a relationship built on trust.",
                  },
                  {
                    number: "02",
                    title: "Creating A Tailored Roadmap For You",
                    description:
                      "We understand that a well-defined roadmap is crucial for navigating the complexities of today's business landscape. Our strategic planning empowers your business with a clear path forward.",
                  },
                  {
                    number: "03",
                    title: "Full Integration Into Your Business",
                    description:
                      "Unlike conventional partnerships, we go beyond being just an external service provider. We fully integrate ourselves into the fabric of your business.",
                  },
                  {
                    number: "04",
                    title: "Effective Strategy Implementation",
                    description:
                      "We don't just plan; we execute with precision. Our team is dedicated to delivering results through the effective implementation of our strategies.",
                  },
                ].map((pillar) => (
                  <motion.div
                    key={pillar.number}
                    variants={fadeIn}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="flex items-start gap-6">
                        <div className="text-5xl font-bold bg-clip-text text-transparent bg-black">
                          {pillar.number}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-black transition-colors duration-300">
                            {pillar.title}
                          </h3>
                          <p className="text-gray-600">{pillar.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </section>

          {/* Services Overview */}
          <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-gray opacity-10"></div>
            <motion.div
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-16"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div className="space-y-6" variants={fadeIn}>
                  <div className="h-16 w-16 rounded-2xl bg-black flex items-center justify-center mb-8">
                    <svg
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Business Consultancy
                  </h3>
                  <p className="text-gray-600">
                    Our core offering revolves around providing critical
                    business advice through regular consultancy meetings. These
                    sessions serve as a platform for in-depth discussions and
                    strategic planning.
                  </p>
                </motion.div>
                <motion.div className="space-y-6" variants={fadeIn}>
                  <div className="h-16 w-16 rounded-2xl bg-black flex items-center justify-center mb-8">
                    <svg
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Digital Marketing Excellence
                  </h3>
                  <p className="text-gray-600">
                    In today's digital age, a robust online presence is
                    paramount to success. Our team of digital marketing experts
                    employ innovative strategies to elevate your brand.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </section>

          {/* Call to Action */}
          <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-black"></div>
            <div className="absolute inset-0 bg-grid-white opacity-20"></div>
            <motion.div
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center">
                <motion.h2
                  className="text-4xl font-bold text-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  Ready to Transform Your Business?
                </motion.h2>
                <motion.p
                  className="text-xl text-gray-50 mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Let us help you reclaim your time and scale your business to
                  new heights.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <Link href="/contact">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="bg-white text-black hover:bg-gray-50 rounded-full"
                    >
                      Get Started Today
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
    </>
  );
}
