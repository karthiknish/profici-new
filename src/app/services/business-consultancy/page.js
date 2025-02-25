"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Strategy",
    description: "A Business Strategy Is Essential For Growing Your Business",
    icon: "📊",
  },
  {
    title: "Marketing Strategy",
    description:
      "Go Beyond Boundaries And Borders With The Right Marketing Strategy",
    icon: "🎯",
  },
  {
    title: "Leadership and People",
    description: "Helping You Succeed Through Leadership, People And Culture",
    icon: "👥",
  },
  {
    title: "Finance Consultants",
    description:
      "Optimise Resources, Enhance Profitability, and Drive Sustainable Growth",
    icon: "💰",
  },
  {
    title: "Business Planning",
    description: "The Best-Made Plans, Tailored To Your Exact Needs",
    icon: "📝",
  },
  {
    title: "Business Growth",
    description:
      "Unlock Your Business Potential Through Strategies That Drive Growth",
    icon: "📈",
  },
  {
    title: "Go-to-Market Strategy",
    description:
      "Go-to-Market Strategy can streamline your product launch and drive market success.",
    icon: "🚀",
  },
  {
    title: "Project Management",
    description: "Give Leadership And Direction To Your Projects",
    icon: "⚡",
  },
  {
    title: "Directors Box",
    description:
      "Gain Access to a Private Members' Club of Like-minded Business Owners",
    icon: "🎁",
  },
];

export default function BusinessConsultancy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/business-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-transparent"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-black/40 to-transparent transform -skew-x-12"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-48">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8">
                Business
                <span className="block mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Consultancy
                </span>
              </h1>
              <p className="text-xl leading-8 text-gray-300 mb-12">
                Navigating business challenges requires more than just effort
                and perseverance; it requires insight, strategy, and a deep
                understanding of the business landscape.
              </p>
              <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 transform hover:-translate-y-1">
                Get Started
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative w-full h-[500px]">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/5 transform -skew-y-6"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">Our Services</h2>
            <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
              We provide comprehensive business consultancy services tailored to
              help your business thrive in today's competitive landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group bg-white backdrop-blur-lg rounded-2xl p-8 hover:bg-gradient-to-br hover:from-white hover:to-gray-50 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rounded-full blur-3xl group-hover:bg-black/10 transition-colors duration-500"></div>
                <div className="relative">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Our dedicated team of business consultants will work with you to
            help you understand the many different facets of your business and
            achieve maximum growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 transform hover:-translate-y-1">
              Contact Us Today
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
