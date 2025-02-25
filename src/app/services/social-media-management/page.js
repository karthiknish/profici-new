"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Organic Social Media",
    description:
      "Build a strong brand presence and engage your audience with strategic content creation, community management, and consistent posting across all relevant social platforms.",
    icon: "📱",
  },
  {
    title: "Paid Social Advertising",
    description:
      "Reach your ideal customers with highly targeted paid campaigns across Facebook, Instagram, LinkedIn, Twitter, and TikTok that drive engagement, leads, and sales.",
    icon: "💰",
  },
  {
    title: "Content Creation",
    description:
      "Capture attention with professionally designed graphics, engaging videos, and compelling copy that resonates with your audience and reflects your brand identity.",
    icon: "🎨",
  },
  {
    title: "Community Management",
    description:
      "Build meaningful relationships with your audience through active engagement, timely responses, and fostering a positive community around your brand.",
    icon: "👥",
  },
  {
    title: "Social Media Analytics",
    description:
      "Gain valuable insights into your social media performance with comprehensive reporting and analytics that inform strategy refinements and demonstrate ROI.",
    icon: "📊",
  },
  {
    title: "Influencer Partnerships",
    description:
      "Expand your reach and build credibility through strategic partnerships with relevant influencers who can authentically promote your brand to their engaged audiences.",
    icon: "🌟",
  },
];

const process = [
  {
    step: "1",
    title: "Social Media Audit",
    description:
      "We analyze your current social media presence, competitor activity, and industry benchmarks to identify opportunities and establish a baseline for growth.",
    icon: "🔍",
  },
  {
    step: "2",
    title: "Strategy Development",
    description:
      "Based on our findings, we create a comprehensive social media strategy aligned with your business goals, target audience, and brand positioning.",
    icon: "📝",
  },
  {
    step: "3",
    title: "Content Creation",
    description:
      "Our creative team develops engaging, on-brand content tailored to each platform, including graphics, videos, copy, and paid ad creative.",
    icon: "✏️",
  },
  {
    step: "4",
    title: "Implementation & Management",
    description:
      "We handle the day-to-day management of your social media channels, including content scheduling, community engagement, and paid campaign management.",
    icon: "⚙️",
  },
  {
    step: "5",
    title: "Monitoring & Optimization",
    description:
      "We continuously monitor performance, engage with your audience, and optimize your strategy based on data-driven insights to maximize results.",
    icon: "📈",
  },
];

export default function SocialMediaManagement() {
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
              Social Media
              <span className="block mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Management
              </span>
            </h1>
            <p className="text-xl leading-8 text-gray-300 mb-12">
              Build meaningful connections with your audience and drive business
              growth through strategic social media management. We help brands
              thrive across all major platforms with both organic and paid
              strategies.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 transform hover:-translate-y-1">
              Elevate Your Social Presence
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
                Strategic Social Media Management
              </h2>
              <p className="text-lg text-[#6A6A6A] mb-8">
                At Profici, we help businesses harness the full potential of
                social media to build brand awareness, engage with their
                audience, and drive measurable results. Our comprehensive
                approach combines creative content development, strategic paid
                advertising, and data-driven optimization to ensure your social
                media presence contributes to your overall business objectives.
                We stay ahead of platform changes and emerging trends to keep
                your brand at the forefront of social media innovation.
              </p>
              <div className="flex gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/90 transition-all duration-300">
                  Get a Free Social Media Audit
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
              Our Social Media Services
            </h2>
            <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
              We offer a comprehensive suite of social media services designed
              to build your brand, engage your audience, and drive measurable
              business results.
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
              Our Social Media Process
            </h2>
            <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
              We follow a proven methodology to develop and implement effective
              social media strategies for your business.
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
            Ready to Transform Your Social Media Presence?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Partner with Profici to develop a strategic social media presence
            that builds your brand, engages your audience, and drives measurable
            business results.
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
              Free Social Media Audit
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
