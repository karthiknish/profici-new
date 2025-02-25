"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    title: "Growth Strategy Development",
    description:
      "We help you create comprehensive growth strategies that identify the most promising opportunities and outline clear paths to achieve your expansion goals.",
    icon: "📈",
  },
  {
    title: "Market Expansion",
    description:
      "We assist you in identifying and entering new markets, developing market entry strategies, and adapting your offerings to meet local needs and preferences.",
    icon: "🌐",
  },
  {
    title: "Sales & Revenue Optimization",
    description:
      "We help you optimize your sales processes, pricing strategies, and revenue streams to maximize your business's financial performance.",
    icon: "💰",
  },
  {
    title: "Customer Acquisition & Retention",
    description:
      "We develop strategies to attract new customers and build loyalty among existing ones, creating a sustainable foundation for long-term growth.",
    icon: "🤝",
  },
  {
    title: "Operational Scaling",
    description:
      "We help you scale your operations efficiently, ensuring your infrastructure, processes, and team can support your growth objectives.",
    icon: "⚙️",
  },
  {
    title: "Performance Measurement",
    description:
      "We establish key performance indicators and monitoring systems to track your progress and make data-driven adjustments to your growth strategy.",
    icon: "📊",
  },
];

export default function BusinessGrowth() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/growth-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-48">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8">
              Business
              <span className="block mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Growth
              </span>
            </h1>
            <p className="text-xl leading-8 text-gray-300 mb-12">
              Accelerate your business growth with our expert consulting
              services that help you expand your market share and increase
              revenue.
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
                Accelerate Your Growth
              </h2>
              <p className="text-lg text-[#6A6A6A] mb-8">
                At Profici, we specialize in helping businesses achieve
                sustainable growth through strategic planning, market expansion,
                and operational optimization. Our business growth services are
                designed to help you identify and capitalize on opportunities,
                overcome challenges, and achieve your expansion goals.
              </p>
              <p className="text-lg text-[#6A6A6A] mb-8">
                Whether you're looking to enter new markets, launch new
                products, or scale your operations, our experienced consultants
                work closely with you to develop and implement growth strategies
                that deliver measurable results.
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
              We offer a comprehensive suite of business growth services
              designed to help your organization expand and thrive.
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
            Grow Your Business Today
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Ready to take your business to the next level? Partner with Profici
            to develop and implement growth strategies that deliver measurable
            results.
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
