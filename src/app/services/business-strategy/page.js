"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    title: "Comprehensive Strategy Design",
    description:
      "We work closely with you to define clear, actionable goals that will drive your business forward, aligning your products, customer segments, and target markets with your overall objectives.",
    icon: "🎯",
  },
  {
    title: "Market Analysis & Positioning",
    description:
      "We conduct comprehensive research to understand the competitive landscape, identify market trends, and uncover opportunities for differentiation.",
    icon: "📊",
  },
  {
    title: "Customer Targeting",
    description:
      "We help you define and segment your target audience, creating detailed customer personas and journey maps to drive engagement and loyalty.",
    icon: "👥",
  },
  {
    title: "Product Innovation",
    description:
      "We identify opportunities for new product development and service enhancements that meet the evolving needs of your customers.",
    icon: "💡",
  },
  {
    title: "Implementation Support",
    description:
      "We provide comprehensive support with detailed action plans, milestones, and KPIs to ensure effective strategy execution.",
    icon: "⚡",
  },
  {
    title: "Continuous Improvement",
    description:
      "We regularly review and refine your business strategy to ensure it remains aligned with your goals and responsive to market changes.",
    icon: "🔄",
  },
];

export default function BusinessStrategy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/strategy-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-48">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8">
              Business Development
              <span className="block mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Strategy
              </span>
            </h1>
            <p className="text-xl leading-8 text-gray-300 mb-12">
              Do you ever wonder why some companies consistently outperform
              their competitors and achieve sustained success? The answer often
              lies in a robust and well-executed business development strategy.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 transform hover:-translate-y-1">
              Start Your Journey
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
                Partner with Profici
              </h2>
              <p className="text-lg text-[#6A6A6A] mb-8">
                At Profici, we partner with businesses to design and implement
                comprehensive business development strategies that are
                meticulously tailored to your unique needs and business goals
                and objectives, be it expanding into new sectors, acquiring new
                business or successful sale and exit.
              </p>
              <div className="flex gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/90 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden">
                <div className="aspect-[4/3] bg-black/5"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="relative py-24 lg:py-32 bg-black/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">Our Approach</h2>
            <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
              We believe in a comprehensive approach to business strategy,
              ensuring every aspect of your business is aligned with your goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group bg-white backdrop-blur-lg rounded-2xl p-8 hover:bg-gradient-to-br hover:from-white hover:to-gray-50 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rounded-full blur-3xl group-hover:bg-black/10 transition-colors duration-500"></div>
                <div className="relative">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[#6A6A6A] group-hover:text-black/80 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 lg:py-32 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>

        <motion.div
          className="relative z-10 max-w-3xl mx-auto text-center px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Partner with Profici
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Our Partner Growth Program brings the strength of a CEO and COO
            along with an expert team of business growth consultants to
            integrate into your business, to help free up time, build growth,
            and help your business succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 transform hover:-translate-y-1">
              Get Started Today
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
