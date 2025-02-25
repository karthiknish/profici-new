"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Technical SEO",
    description:
      "We optimize your website's technical foundation to ensure search engines can crawl and index your content effectively, addressing issues like site speed, mobile-friendliness, and structured data.",
    icon: "⚙️",
  },
  {
    title: "On-Page SEO",
    description:
      "Our experts optimize your content, meta tags, headings, and internal linking structure to improve relevance and authority for your target keywords.",
    icon: "📝",
  },
  {
    title: "Off-Page SEO",
    description:
      "We build high-quality backlinks and enhance your online presence through strategic outreach, content marketing, and digital PR campaigns.",
    icon: "🔗",
  },
  {
    title: "Local SEO",
    description:
      "Dominate local search results with optimized Google Business Profile listings, local citations, and location-specific content strategies.",
    icon: "📍",
  },
  {
    title: "Content Strategy",
    description:
      "We develop comprehensive content plans that target valuable keywords while engaging your audience and establishing your brand as an industry authority.",
    icon: "📊",
  },
  {
    title: "SEO Analytics",
    description:
      "Track your SEO performance with detailed reporting on rankings, traffic, conversions, and ROI, with actionable insights for continuous improvement.",
    icon: "📈",
  },
];

const process = [
  {
    step: "1",
    title: "SEO Audit",
    description:
      "We conduct a comprehensive analysis of your website's current SEO performance, identifying technical issues, content gaps, and opportunities for improvement.",
    icon: "🔍",
  },
  {
    step: "2",
    title: "Keyword Research",
    description:
      "Our team identifies high-value keywords that align with your business goals, considering search volume, competition, and user intent.",
    icon: "🔑",
  },
  {
    step: "3",
    title: "Strategy Development",
    description:
      "We create a tailored SEO roadmap with prioritized recommendations for technical improvements, content creation, and link building activities.",
    icon: "📝",
  },
  {
    step: "4",
    title: "Implementation",
    description:
      "Our experts execute the strategy, optimizing your website's technical foundation, enhancing on-page elements, and building high-quality backlinks.",
    icon: "🛠️",
  },
  {
    step: "5",
    title: "Monitoring & Refinement",
    description:
      "We continuously track your SEO performance, making data-driven adjustments to your strategy to ensure long-term growth and visibility.",
    icon: "📊",
  },
];

export default function SEOManagement() {
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
              SEO
              <span className="block mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Management
              </span>
            </h1>
            <p className="text-xl leading-8 text-gray-300 mb-12">
              Drive sustainable organic traffic and improve your search
              visibility with our comprehensive SEO management services. We help
              businesses of all sizes climb the search rankings and connect with
              their target audience.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 transform hover:-translate-y-1">
              Boost Your Rankings
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
                Elevate Your Search Presence
              </h2>
              <p className="text-lg text-[#6A6A6A] mb-8">
                At Profici, we deliver data-driven SEO strategies that focus on
                sustainable, long-term results. Our approach combines technical
                expertise with creative content strategies to improve your
                organic visibility and drive qualified traffic to your website.
                We stay ahead of algorithm updates and industry trends to ensure
                your business maintains a competitive edge in search results.
              </p>
              <div className="flex gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/90 transition-all duration-300">
                  Get a Free SEO Audit
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
              Our SEO Services
            </h2>
            <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
              We offer a comprehensive suite of SEO services designed to improve
              your search visibility and drive qualified organic traffic to your
              website.
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
              Our SEO Process
            </h2>
            <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
              We follow a proven methodology to deliver sustainable SEO results
              for your business.
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
            Ready to Improve Your Search Rankings?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Partner with Profici to develop a customized SEO strategy that
            drives sustainable organic growth for your business. Our data-driven
            approach ensures measurable results and long-term success.
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
              Free SEO Audit
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
