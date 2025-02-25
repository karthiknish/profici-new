"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "SEO Management",
    description:
      "Improve your search engine rankings and drive organic traffic with our comprehensive SEO strategies.",
    icon: "🔍",
    link: "/services/seo-management",
  },
  {
    title: "PPC Management",
    description:
      "Maximize your ROI with targeted pay-per-click campaigns across multiple platforms.",
    icon: "💰",
    link: "/services/ppc-management",
  },
  {
    title: "Social Media Management",
    description:
      "Build genuine connections with your audience through engaging social media content and management.",
    icon: "📱",
    link: "/services/social-media-management",
  },
  {
    title: "Competitor Analysis",
    description:
      "Stay ahead of the competition with in-depth market research and competitor tracking.",
    icon: "📊",
  },
  {
    title: "Content Marketing",
    description:
      "Engage your audience with compelling content that tells your story and drives conversions.",
    icon: "✍️",
    link: "/services/content-marketing",
  },
  {
    title: "Web Design",
    description:
      "We design websites that tell your story and grow your business with purpose and style.",
    icon: "🎨",
    link: "/services/web-design",
  },
];

const process = [
  {
    step: "1",
    title: "Discovery",
    description:
      "Through a comprehensive discovery workshop, we determine what makes your business tick, examining everything from your audience, central principles, tone of voice, brand and competitors.",
    icon: "🔍",
  },
  {
    step: "2",
    title: "Strategy",
    description:
      "Drawing upon the insights we uncovered in our discovery workshop, we develop a rigorous marketing strategy that encompasses graphic design, content, video and lead generation.",
    icon: "📝",
  },
  {
    step: "3",
    title: "Buildout",
    description:
      "Upon approval of your strategy, we then put together the foundations on which to launch your campaign, giving it every opportunity to succeed and flourish.",
    icon: "🛠️",
  },
  {
    step: "4",
    title: "Launch",
    description:
      "After we have completed our fundamental research, we launch your campaign into the wider world encompassing everything from social media to email marketing and more.",
    icon: "🚀",
  },
  {
    step: "5",
    title: "Optimise",
    description:
      "We closely monitor your ads to ensure you get the best out of your campaign, constantly amending it and reporting on it to guarantee you the best results possible.",
    icon: "📈",
  },
];

export default function DigitalMarketing() {
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
              Digital
              <span className="block mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Marketing
              </span>
            </h1>
            <p className="text-xl leading-8 text-gray-300 mb-12">
              Our honest and results-driven approach to digital marketing sets
              us apart. We deliver a personal, passionate, creative, and
              tailored service to each of our clients.
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
                Comprehensive Digital Services
              </h2>
              <p className="text-lg text-[#6A6A6A] mb-8">
                Our digital marketing services encompass a wide range of
                innovative methods and disciplines, including SEO, PPC, social
                media management, and content marketing. We understand that
                every business is different, and we tailor our approach to
                ensure maximum impact and return on investment.
              </p>
              <div className="flex gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/90 transition-all duration-300">
                  Learn More
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
            <h2 className="text-4xl font-bold text-black mb-6">Our Services</h2>
            <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
              From SEO management and PPC campaigns to social media management
              and content marketing, our comprehensive services cover all
              aspects of digital marketing.
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
                  <div className="flex items-center justify-center w-16 h-16 mb-6 text-4xl bg-black/5 rounded-2xl group-hover:bg-black/10 transition-all duration-300 ease-out">
                    <span className="transform group-hover:scale-105 transition-transform duration-300 ease-out">
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[#6A6A6A] group-hover:text-black/80 transition-colors duration-300 mb-4">
                    {service.description}
                  </p>
                  {service.link && (
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-black font-medium hover:underline"
                    >
                      Learn more
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  )}
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
            <h2 className="text-4xl font-bold text-black mb-6">Our Process</h2>
            <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
              We follow a proven process to ensure your digital marketing
              success.
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
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Partner with Profici to develop a comprehensive digital marketing
            strategy that drives measurable results for your business. Our
            data-driven approach ensures maximum ROI and long-term success.
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
              Free Digital Audit
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
