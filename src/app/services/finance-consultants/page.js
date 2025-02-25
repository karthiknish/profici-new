"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    title: "Fractional CFO Services",
    description:
      "Access high-level financial expertise without the cost of a full-time CFO. Our fractional CFO services provide strategic financial leadership tailored to your business needs.",
    icon: "💼",
  },
  {
    title: "Financial Planning & Analysis",
    description:
      "We help you develop comprehensive financial plans and conduct in-depth analysis to support informed decision-making and strategic growth.",
    icon: "📊",
  },
  {
    title: "Cash Flow Management",
    description:
      "Optimize your cash flow with strategies that improve liquidity, reduce cash conversion cycles, and ensure you have the capital needed for operations and growth.",
    icon: "💰",
  },
  {
    title: "Profitability Improvement",
    description:
      "We identify opportunities to enhance your profit margins through cost optimization, pricing strategies, and operational efficiencies.",
    icon: "📈",
  },
  {
    title: "Financial Reporting & Analysis",
    description:
      "Get clear, actionable insights from your financial data with our comprehensive reporting and analysis services.",
    icon: "📝",
  },
  {
    title: "Fundraising & Investment Support",
    description:
      "We help you prepare for fundraising rounds, create compelling investor presentations, and navigate the investment process.",
    icon: "🏦",
  },
];

export default function FinanceConsultants() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/finance-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-48">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8">
              Finance
              <span className="block mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Consultants
              </span>
            </h1>
            <p className="text-xl leading-8 text-gray-300 mb-12">
              Optimize your financial operations and drive sustainable growth
              with our expert finance consulting services.
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
                Strategic Financial Guidance
              </h2>
              <p className="text-lg text-[#6A6A6A] mb-8">
                At Profici, we provide expert financial consulting services that
                help businesses optimize their financial operations, improve
                profitability, and drive sustainable growth. Our team of
                experienced finance professionals brings a wealth of knowledge
                and expertise to help you navigate complex financial challenges
                and capitalize on opportunities.
              </p>
              <p className="text-lg text-[#6A6A6A] mb-8">
                Whether you need fractional CFO services, financial planning and
                analysis, or support with fundraising and investment, we tailor
                our approach to meet your specific needs and objectives.
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
            <h2 className="text-4xl font-bold text-black mb-6">Our Services</h2>
            <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
              We offer a comprehensive suite of finance consulting services
              designed to help your business thrive.
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
            Optimize Your Financial Operations
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Ready to take your financial operations to the next level? Partner
            with Profici to access expert financial guidance and drive
            sustainable growth for your business.
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
