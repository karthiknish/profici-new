"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    title: "Leadership Development",
    description:
      "We design and deliver customized leadership development programs that build the capabilities your organization needs to succeed in today's complex business environment.",
    icon: "👑",
  },
  {
    title: "Culture Assessment & Transformation",
    description:
      "We help you assess your current culture, define your desired culture, and implement strategies to bridge the gap and create a workplace where people thrive.",
    icon: "🔄",
  },
  {
    title: "Team Building & Collaboration",
    description:
      "We facilitate team-building activities and workshops that improve communication, trust, and collaboration across your organization.",
    icon: "🤝",
  },
  {
    title: "Employee Engagement",
    description:
      "We help you create strategies and programs that foster employee engagement, motivation, and commitment to your organization's mission and goals.",
    icon: "⭐",
  },
  {
    title: "Talent Management",
    description:
      "We develop comprehensive talent management strategies that help you attract, develop, and retain top talent in your industry.",
    icon: "🌟",
  },
  {
    title: "Change Management",
    description:
      "We guide your organization through periods of change, ensuring smooth transitions and minimizing disruption to your operations and people.",
    icon: "📈",
  },
];

export default function LeadershipAndPeopleCulture() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/leadership-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-48">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8">
              Leadership and
              <span className="block mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                People Culture
              </span>
            </h1>
            <p className="text-xl leading-8 text-gray-300 mb-12">
              Transform your organization with strong leadership and a positive
              workplace culture that drives engagement, innovation, and
              sustainable growth.
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
                Build a High-Performance Culture
              </h2>
              <p className="text-lg text-[#6A6A6A] mb-8">
                At Profici, we believe that strong leadership and a positive
                workplace culture are the foundations of business success. Our
                leadership and people culture services help you develop the
                capabilities and environment needed to drive engagement,
                innovation, and sustainable growth.
              </p>
              <p className="text-lg text-[#6A6A6A] mb-8">
                We work with organizations of all sizes to assess their current
                leadership capabilities and cultural dynamics, identify areas
                for improvement, and implement strategies that create lasting
                positive change.
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
              We offer a comprehensive suite of leadership and people culture
              services designed to help your organization thrive.
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
            Transform Your Organization
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Ready to build a high-performance culture that drives business
            success? Partner with Profici to develop strong leadership
            capabilities and create a workplace where people thrive.
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
