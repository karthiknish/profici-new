"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Marketing Strategy Roadmap",
    description:
      "We develop a dynamic roadmap that evolves with your business, starting with a deep dive into your business, market, and competitors through comprehensive SWOT analysis.",
    icon: "🗺️",
  },
  {
    title: "Market Research",
    description:
      "Understanding your target audience better and identifying the most effective ways to reach them through detailed market research and analysis.",
    icon: "🔍",
  },
  {
    title: "Competitive Analysis",
    description:
      "Stay ahead of your rivals by uncovering their strengths and weaknesses through our detailed competitive analysis.",
    icon: "📊",
  },
  {
    title: "Digital Marketing",
    description:
      "Leverage the latest technologies and platforms with our robust digital strategy, including SEO, PPC, social media, and content marketing.",
    icon: "💻",
  },
  {
    title: "Brand Strategy",
    description:
      "Build a strong, cohesive brand that resonates with your audience and stands out in the marketplace.",
    icon: "✨",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Track the performance of your marketing efforts with comprehensive analytics and make data-driven decisions.",
    icon: "📈",
  },
];

const questions = [
  "Are you losing potential customers to your competitors?",
  "Do you need more enquiries this quarter to meet your targets?",
  "Is there a need for improved ROI across all marketing channels?",
];

export default function MarketingStrategy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/marketing-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-48">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8">
              Marketing
              <span className="block mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Strategy
              </span>
            </h1>
            <p className="text-xl leading-8 text-gray-300 mb-12">
              Our marketing strategy growth team thrives on collaboration,
              crafting bespoke strategies that drive customer-focused business
              success.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 transform hover:-translate-y-1">
              Transform Your Marketing
            </button>
          </motion.div>
        </div>
      </div>

      {/* Key Questions Section */}
      <div className="relative py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="lg:grid lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="text-4xl font-bold text-black mb-8">
                Marketing Goals
              </h2>
              <div className="space-y-6">
                {questions.map((question, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="text-2xl">❓</div>
                    <p className="text-lg text-[#6A6A6A]">{question}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-12">
                <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/90 transition-all duration-300">
                  Get Answers
                </button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-black/5 to-black/0 p-8">
                <p className="text-lg text-[#6A6A6A] mb-6">
                  At Profici, we help you answer these pressing questions and
                  more. Our team acts as your marketing insight and strategy
                  expert, providing you with the clarity and direction needed to
                  navigate the complexities of the market.
                </p>
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
            <h2 className="text-4xl font-bold text-black mb-6">Our Services</h2>
            <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
              We combine strategic thinking, market insight, and creative
              execution to develop bespoke marketing strategies that drive
              results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative">
                  <div className="flex items-center justify-center w-16 h-16 mb-6 text-4xl bg-black/5 rounded-2xl group-hover:bg-black/10 transition-all duration-300 ease-out">
                    <span className="transform group-hover:scale-105 transition-transform duration-300 ease-out">
                      {service.icon}
                    </span>
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
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Whether you need to increase customer acquisition, improve ROI, or
            enhance your brand's market presence, our team is here to help you
            navigate the challenges and seize the opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 transform hover:-translate-y-1">
              Start Your Journey
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
