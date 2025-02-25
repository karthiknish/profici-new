"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Google Ads Management",
    description:
      "Maximize your visibility on the world's largest search engine with expertly crafted search, display, shopping, and video campaigns that drive qualified traffic and conversions.",
    icon: "🔍",
  },
  {
    title: "Social Media Advertising",
    description:
      "Reach your ideal audience on platforms like Facebook, Instagram, LinkedIn, and Twitter with highly targeted campaigns that drive engagement, leads, and sales.",
    icon: "📱",
  },
  {
    title: "Remarketing Campaigns",
    description:
      "Re-engage visitors who have shown interest in your business with strategic remarketing campaigns that bring them back to complete their purchase or inquiry.",
    icon: "🔄",
  },
  {
    title: "Landing Page Optimization",
    description:
      "Convert more of your paid traffic with high-performing landing pages designed to maximize conversions and improve your campaign ROI.",
    icon: "📊",
  },
  {
    title: "Conversion Tracking",
    description:
      "Gain complete visibility into your campaign performance with comprehensive conversion tracking and attribution modeling across all channels.",
    icon: "📈",
  },
  {
    title: "PPC Audits & Strategy",
    description:
      "Identify opportunities for improvement in your existing campaigns with our comprehensive PPC audits and data-driven strategy development.",
    icon: "🔎",
  },
];

const process = [
  {
    step: "1",
    title: "Discovery & Analysis",
    description:
      "We begin by understanding your business goals, target audience, and competitive landscape to develop a strategic foundation for your PPC campaigns.",
    icon: "🔍",
  },
  {
    step: "2",
    title: "Campaign Structure",
    description:
      "Our team creates a logical, organized campaign structure with targeted ad groups, keywords, and audience segments to maximize relevance and quality scores.",
    icon: "📋",
  },
  {
    step: "3",
    title: "Creative Development",
    description:
      "We craft compelling ad copy, design eye-catching visuals, and develop high-converting landing pages that resonate with your target audience.",
    icon: "✏️",
  },
  {
    step: "4",
    title: "Launch & Optimization",
    description:
      "After launching your campaigns, we continuously monitor performance, making data-driven adjustments to improve results and maximize your advertising budget.",
    icon: "🚀",
  },
  {
    step: "5",
    title: "Reporting & Analysis",
    description:
      "We provide transparent, detailed reporting on your campaign performance, with actionable insights and strategic recommendations for ongoing improvement.",
    icon: "📊",
  },
];

export default function PPCManagement() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-48">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8">
              PPC
              <span className="block mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Management
              </span>
            </h1>
            <p className="text-xl leading-8 text-gray-300 mb-12">
              Drive immediate, targeted traffic and maximize your ROI with our
              data-driven PPC management services. We help businesses of all
              sizes achieve their advertising goals across search, social, and
              display networks.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 transform hover:-translate-y-1">
              Boost Your Campaigns
            </button>
          </motion.div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="relative py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="lg:grid lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">
                Strategic Paid Advertising
              </h2>
              <p className="text-lg text-[#6A6A6A] mb-8">
                At Profici, we deliver results-focused PPC campaigns that
                maximize your advertising budget and drive measurable business
                growth. Our approach combines strategic targeting, compelling
                creative, and continuous optimization to ensure your campaigns
                consistently deliver a strong return on investment. We stay
                ahead of platform changes and industry trends to give your
                business a competitive edge in the paid advertising landscape.
              </p>
              <div className="flex gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/90 transition-all duration-300">
                  Get a Free PPC Audit
                </button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative py-24 lg:py-32 bg-black/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">
              Our PPC Services
            </h2>
            <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
              We offer a comprehensive suite of PPC services designed to
              maximize your advertising ROI across multiple platforms and
              channels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group bg-white backdrop-blur-lg rounded-2xl p-8 hover:bg-gradient-to-br hover:from-white hover:to-gray-50 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rounded-full blur-3xl group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 flex items-center justify-center text-3xl mb-6 bg-black/5 rounded-2xl backdrop-blur-sm group-hover:scale-105 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[#6A6A6A] group-hover:text-black/80 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">
              Our PPC Process
            </h2>
            <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
              We follow a proven methodology to deliver high-performing PPC
              campaigns for your business.
            </p>
          </motion.div>

          <div className="space-y-12">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                className="flex flex-col md:flex-row gap-8 items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 text-4xl bg-black text-white rounded-2xl">
                    {step.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-4">
                    {step.title}
                    <span className="text-3xl">{step.icon}</span>
                  </h3>
                  <p className="text-lg text-[#6A6A6A]">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 lg:py-32 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80"></div>
        <div className="absolute inset-0 bg-grid-white opacity-10"></div>

        <motion.div
          className="relative z-10 max-w-3xl mx-auto text-center px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Maximize Your Ad Spend?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Partner with Profici to develop high-performing PPC campaigns that
            drive qualified traffic and conversions. Our data-driven approach
            ensures measurable results and strong ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 transform hover:-translate-y-1"
            >
              Get Started Today
            </Link>
            <Link
              href="/questionnaire"
              className="border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
            >
              Free PPC Audit
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
