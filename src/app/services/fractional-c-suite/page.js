"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    title: "Fractional CEO",
    description:
      "Access strategic leadership and vision without the full-time cost. Our fractional CEOs bring decades of experience to drive your business forward, set direction, and make critical decisions.",
    icon: "👑",
  },
  {
    title: "Fractional COO",
    description:
      "Optimize your operations and processes with our experienced COOs who streamline workflows, improve efficiency, and ensure your business runs smoothly day-to-day.",
    icon: "⚙️",
  },
  {
    title: "Fractional CFO",
    description:
      "Gain financial expertise to manage cash flow, budgeting, forecasting, and strategic financial planning without the overhead of a full-time executive.",
    icon: "💼",
  },
  {
    title: "Fractional CMO",
    description:
      "Elevate your marketing strategy with seasoned marketing executives who develop comprehensive plans to increase brand awareness, generate leads, and drive revenue growth.",
    icon: "📈",
  },
  {
    title: "Fractional CTO",
    description:
      "Stay ahead of technological advancements with expert CTOs who guide your tech strategy, infrastructure decisions, and digital transformation initiatives.",
    icon: "💻",
  },
  {
    title: "Fractional CSO",
    description:
      "Accelerate your sales performance with experienced sales leaders who build and optimize sales processes, teams, and strategies to drive revenue growth.",
    icon: "🤝",
  },
];

const questions = [
  {
    question: "What is a Fractional Executive?",
    answer:
      "A fractional executive is a seasoned C-suite professional who works with your company on a part-time or project basis, providing high-level expertise without the full-time salary commitment. This model gives you access to top-tier talent that might otherwise be out of reach for growing businesses.",
  },
  {
    question: "How does the engagement work?",
    answer:
      "We begin with a comprehensive assessment of your business needs, then match you with the ideal executive from our team. Engagements typically range from 1-3 days per week, with flexible terms based on your specific requirements and growth stage.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "Our fractional executives have experience across diverse sectors including technology, manufacturing, professional services, healthcare, retail, and more. We carefully match executives with relevant industry experience to your business.",
  },
  {
    question: "What's the cost compared to hiring full-time?",
    answer:
      "Fractional executives typically cost 30-50% less than their full-time counterparts when considering total compensation packages. This model eliminates recruitment costs, benefits, and other overhead while providing the exact level of expertise you need.",
  },
];

export default function FractionalCSuite() {
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
              Fractional
              <span className="block mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                C-Suite Services
              </span>
            </h1>
            <p className="text-xl leading-8 text-gray-300 mb-12">
              Access world-class executive leadership without the full-time
              cost. Our fractional C-suite services provide the strategic
              expertise your business needs to scale and thrive.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 transform hover:-translate-y-1">
              Explore Our Services
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
                Executive Expertise, When You Need It
              </h2>
              <p className="text-lg text-[#6A6A6A] mb-8">
                At Profici, we understand that growing businesses need
                high-caliber leadership but may not be ready for the financial
                commitment of a full executive team. Our fractional C-suite
                services provide you with experienced executives who work with
                your business on a part-time basis, delivering the strategic
                guidance and operational expertise you need to achieve your
                goals.
              </p>
              <div className="flex gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/90 transition-all duration-300">
                  Schedule a Consultation
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
            <h2 className="text-4xl font-bold text-black mb-6">
              Our Fractional Services
            </h2>
            <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
              We offer a comprehensive range of fractional executive services to
              meet your specific business needs and growth objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group bg-white backdrop-blur-lg rounded-2xl p-8 hover:bg-gradient-to-br hover:from-white hover:to-gray-50 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rounded-full blur-3xl group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 flex items-center justify-center text-3xl mb-6 bg-black/5 rounded-2xl backdrop-blur-sm group-hover:scale-105 transition-all duration-300">
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

      {/* FAQ Section */}
      <div className="relative py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
              Learn more about how our fractional C-suite services can benefit
              your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {questions.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-black mb-4">
                  {item.question}
                </h3>
                <p className="text-[#6A6A6A]">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="relative py-24 lg:py-32 bg-black/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">
              Our Engagement Process
            </h2>
            <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
              We follow a structured approach to ensure our fractional
              executives integrate seamlessly with your team and deliver
              immediate value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full text-xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Discovery & Assessment
              </h3>
              <p className="text-[#6A6A6A]">
                We begin with a comprehensive assessment of your business needs,
                challenges, and goals to determine the exact executive expertise
                required.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full text-xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Executive Matching
              </h3>
              <p className="text-[#6A6A6A]">
                We carefully match you with the ideal executive from our team
                based on industry experience, skill set, and cultural fit with
                your organization.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full text-xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Integration & Execution
              </h3>
              <p className="text-[#6A6A6A]">
                Our executive integrates with your team, develops strategic
                plans, and begins implementing solutions to drive your business
                forward.
              </p>
            </motion.div>
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
            Ready to Elevate Your Leadership?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Take your business to the next level with our fractional C-suite
            services. Schedule a consultation today to discuss how our
            experienced executives can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 transform hover:-translate-y-1">
              Schedule a Consultation
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
