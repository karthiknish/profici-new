"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const digitalServices = [
  {
    title: "Web Design",
    description:
      "Create exceptional websites that are visually stunning, highly functional, and responsive across all devices.",
    icon: "🎨",
    href: "/services/web-design",
  },
  {
    title: "Digital Marketing",
    description:
      "Transform your online presence with comprehensive digital marketing strategies that drive real results.",
    icon: "📱",
    href: "/services/digital-marketing",
  },
  {
    title: "SEO Management",
    description:
      "Improve your search engine rankings and drive organic traffic with our comprehensive SEO strategies.",
    icon: "🔍",
    href: "/services/seo-management",
  },
  {
    title: "PPC Management",
    description:
      "Maximize your ROI with targeted pay-per-click campaigns across multiple platforms.",
    icon: "💰",
    href: "/services/ppc-management",
  },
  {
    title: "Social Media Management",
    description:
      "Build genuine connections with your audience through engaging social media content and management.",
    icon: "📱",
    href: "/services/social-media-management",
  },
  {
    title: "Content Marketing",
    description:
      "Engage your audience with compelling content that tells your story and drives conversions.",
    icon: "✍️",
    href: "/services/content-marketing",
  },
];

const businessServices = [
  {
    title: "Business Strategy",
    description:
      "Develop effective business strategies that drive growth and success with our expert consultants.",
    icon: "📈",
    href: "/services/business-strategy",
  },
  {
    title: "Marketing Strategy",
    description:
      "Create powerful marketing strategies that connect with your audience and deliver measurable results.",
    icon: "🎯",
    href: "/services/marketing-strategy",
  },
  {
    title: "Business Consultancy",
    description:
      "Get expert guidance on business operations, growth strategies, and process optimization to achieve your goals.",
    icon: "💼",
    href: "/services/business-consultancy",
  },
  {
    title: "Fractional C-Suite",
    description:
      "Access world-class executive leadership without the full-time cost. Get the strategic expertise your business needs to scale.",
    icon: "👑",
    href: "/services/fractional-c-suite",
  },
];

export default function Services() {
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
              Our
              <span className="block mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl leading-8 text-gray-300 mb-12">
              Comprehensive solutions tailored to your needs. Whether you're
              looking to enhance your digital presence or strengthen your
              business strategy, we've got you covered.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Digital Services Section */}
      <div className="relative py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">
              Digital Services
            </h2>
            <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
              Transform your digital presence with our comprehensive range of
              digital services, from stunning web design to results-driven
              digital marketing strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {digitalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <div className="group bg-white backdrop-blur-lg rounded-2xl p-8 hover:bg-gradient-to-br hover:from-white hover:to-gray-50 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 relative overflow-hidden h-full">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rounded-full blur-3xl group-hover:bg-black/10 transition-colors duration-300"></div>
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
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Business Services Section */}
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
              Business Services
            </h2>
            <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
              Take your business to the next level with our strategic consulting
              services, designed to drive growth and achieve your business
              objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {businessServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <div className="group bg-white backdrop-blur-lg rounded-2xl p-8 hover:bg-gradient-to-br hover:from-white hover:to-gray-50 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 relative overflow-hidden h-full">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rounded-full blur-3xl group-hover:bg-black/10 transition-colors duration-300"></div>
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
                  </div>
                </Link>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Let's work together to create a comprehensive strategy that drives
            your business forward, combining our digital expertise with
            strategic business insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/questionnaire"
              className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 transform hover:-translate-y-1"
            >
              Get Started Today
            </Link>
            <Link
              href="/contact"
              className="border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
