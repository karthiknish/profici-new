"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Content Strategy",
    description:
      "Develop a comprehensive content strategy aligned with your business goals, target audience, and marketing objectives to guide all content creation efforts.",
    icon: "📝",
  },
  {
    title: "Blog Writing",
    description:
      "Engage your audience with informative, SEO-optimized blog posts that establish your authority, drive organic traffic, and nurture leads through your marketing funnel.",
    icon: "📰",
  },
  {
    title: "Website Copy",
    description:
      "Convert more visitors with compelling website copy that clearly communicates your value proposition, addresses customer pain points, and drives action.",
    icon: "💻",
  },
  {
    title: "Email Marketing",
    description:
      "Nurture leads and strengthen customer relationships with strategic email campaigns featuring engaging, personalized content that drives conversions.",
    icon: "📧",
  },
  {
    title: "Social Media Content",
    description:
      "Build brand awareness and engagement with platform-specific social media content that resonates with your audience and supports your marketing goals.",
    icon: "📱",
  },
  {
    title: "Case Studies & Whitepapers",
    description:
      "Showcase your expertise and generate high-quality leads with in-depth case studies and whitepapers that address complex industry challenges.",
    icon: "📊",
  },
];

const process = [
  {
    step: "1",
    title: "Discovery & Research",
    description:
      "We begin by understanding your business, audience, and objectives through in-depth research, competitor analysis, and stakeholder interviews.",
    icon: "🔍",
  },
  {
    step: "2",
    title: "Strategy Development",
    description:
      "Based on our findings, we create a comprehensive content strategy that defines your content pillars, messaging framework, and distribution channels.",
    icon: "📋",
  },
  {
    step: "3",
    title: "Content Creation",
    description:
      "Our expert writers develop high-quality, engaging content tailored to your audience and optimized for your specific marketing channels and goals.",
    icon: "✏️",
  },
  {
    step: "4",
    title: "Distribution & Promotion",
    description:
      "We implement a strategic distribution plan to ensure your content reaches the right audience through the most effective channels and formats.",
    icon: "🚀",
  },
  {
    step: "5",
    title: "Measurement & Optimization",
    description:
      "We continuously monitor content performance, gather insights, and refine our approach to maximize engagement, conversions, and ROI.",
    icon: "📈",
  },
];

export default function ContentMarketing() {
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
              Content
              <span className="block mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Marketing
              </span>
            </h1>
            <p className="text-xl leading-8 text-gray-300 mb-12">
              Engage your audience with compelling, strategic content that
              builds your brand, drives traffic, and converts prospects into
              customers. Our content marketing services deliver measurable
              results across all channels.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 transform hover:-translate-y-1">
              Elevate Your Content Strategy
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
                Strategic Content Marketing
              </h2>
              <p className="text-lg text-[#6A6A6A] mb-8">
                At Profici, we help businesses connect with their audience
                through strategic, value-driven content that educates,
                entertains, and inspires action. Our comprehensive approach
                combines deep audience insights, creative storytelling, and
                data-driven optimization to ensure your content marketing
                efforts drive meaningful business results. From blog posts and
                social media content to case studies and email campaigns, we
                create content that resonates with your audience at every stage
                of the customer journey.
              </p>
              <div className="flex gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/90 transition-all duration-300">
                  Get a Free Content Audit
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
              Our Content Marketing Services
            </h2>
            <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
              We offer a comprehensive suite of content marketing services
              designed to engage your audience, build your brand, and drive
              measurable business results.
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
              Our Content Marketing Process
            </h2>
            <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
              We follow a proven methodology to develop and implement effective
              content marketing strategies for your business.
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
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Partner with Profici to develop a strategic content marketing
            approach that engages your audience, builds your brand, and drives
            measurable business results.
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
              Free Content Audit
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
