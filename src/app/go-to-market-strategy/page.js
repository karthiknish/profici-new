"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Target,
  BarChart,
  Users,
  Zap,
  Globe,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function GoToMarketStrategy() {
  const benefits = [
    "Accelerated market entry",
    "Increased customer acquisition",
    "Improved product-market fit",
    "Enhanced competitive positioning",
    "Optimized marketing ROI",
    "Clear strategic direction",
  ];

  const services = [
    {
      title: "Market Research & Analysis",
      description:
        "Comprehensive market research to identify opportunities, understand customer needs, and analyze competitive landscape.",
      icon: <Globe className="h-6 w-6 text-gray-600" />,
    },
    {
      title: "Target Audience Definition",
      description:
        "Precise identification and segmentation of your ideal customers to ensure your marketing efforts reach the right people.",
      icon: <Target className="h-6 w-6 text-gray-600" />,
    },
    {
      title: "Positioning & Messaging",
      description:
        "Development of compelling positioning and messaging that resonates with your target audience and differentiates your offering.",
      icon: <Zap className="h-6 w-6 text-gray-600" />,
    },
    {
      title: "Channel Strategy",
      description:
        "Strategic selection and optimization of marketing and sales channels to effectively reach and convert your target audience.",
      icon: <TrendingUp className="h-6 w-6 text-gray-600" />,
    },
  ];

  const phases = [
    {
      number: "01",
      title: "Discovery & Research",
      description:
        "We conduct thorough market research, competitor analysis, and customer interviews to understand the landscape.",
    },
    {
      number: "02",
      title: "Strategy Development",
      description:
        "Based on research insights, we develop a comprehensive go-to-market strategy tailored to your business goals.",
    },
    {
      number: "03",
      title: "Implementation Planning",
      description:
        "We create detailed implementation plans, including timelines, resources, and key performance indicators.",
    },
    {
      number: "04",
      title: "Execution Support",
      description:
        "Our team provides ongoing support during the execution phase to ensure successful implementation.",
    },
    {
      number: "05",
      title: "Measurement & Optimization",
      description:
        "We continuously measure results and optimize the strategy to maximize return on investment.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gray-50/50 rounded-l-3xl transform -translate-x-10 skew-x-3 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div>
                <motion.div
                  className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="flex h-2 w-2 rounded-full bg-gray-600 mr-2"></span>
                  Strategic Services
                </motion.div>

                <motion.h1
                  className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-6xl lg:mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.span
                    className="block bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    Go-to-Market
                  </motion.span>
                  <motion.span
                    className="block text-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    Strategy
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="mt-6 text-xl text-gray-500 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Launch new products, enter new markets, and achieve
                  competitive advantage with our comprehensive go-to-market
                  strategy services.
                </motion.p>

                <motion.div
                  className="mt-10 flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700 text-white shadow-lg shadow-gray-400/20"
                  >
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-gray-300 hover:bg-gray-50"
                  >
                    <Link href="/questionnaire">Take Assessment</Link>
                  </Button>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="mt-12 lg:mt-0 lg:relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-gray-200/50 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gray-300/50 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>

                  {/* Main card */}
                  <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="h-2 bg-gradient-to-r from-gray-600 to-gray-500"></div>
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center space-x-2">
                          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                            <span className="text-gray-700 font-bold">GTM</span>
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">
                              Market Strategy
                            </h3>
                            <p className="text-sm text-gray-500">
                              Performance Dashboard
                            </p>
                          </div>
                        </div>
                        <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                          Strategic
                        </span>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                            Market Penetration
                          </h4>
                          <div className="mt-2 flex items-center">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-gray-600 h-2.5 rounded-full"
                                style={{ width: "65%" }}
                              ></div>
                            </div>
                            <span className="ml-3 text-gray-700 font-medium">
                              65%
                            </span>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                            Key Metrics
                          </h4>
                          <div className="mt-2 grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <p className="text-xs text-gray-500">
                                Customer Acquisition
                              </p>
                              <p className="text-lg font-semibold text-gray-800">
                                +42%
                              </p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <p className="text-xs text-gray-500">
                                Market Share
                              </p>
                              <p className="text-lg font-semibold text-gray-800">
                                +28%
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-gray-200">
                          <Button className="w-full bg-gray-700 hover:bg-gray-800 text-white">
                            View Strategy Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              Our Go-to-Market Process
            </h2>
            <p className="text-xl text-gray-500">
              A structured approach to developing and implementing effective
              go-to-market strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-2xl font-bold text-gray-700">
                  {phase.number}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {phase.title}
                  </h3>
                  <p className="mt-2 text-lg text-gray-600">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              Benefits of a Strategic Go-to-Market Approach
            </h2>
            <p className="text-xl text-gray-500">
              Our go-to-market strategy services deliver measurable improvements
              to your market entry and growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-gray-600" />
                </div>
                <p className="ml-3 text-lg text-gray-600">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              Our Go-to-Market Services
            </h2>
            <p className="text-xl text-gray-500">
              Comprehensive go-to-market solutions tailored to your business
              needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <div className="inline-flex items-center justify-center p-3 bg-gray-100 rounded-xl mb-5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
                Ready to Transform Your Market Strategy?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Contact us today to discuss how our go-to-market strategy
                services can help your business achieve its growth objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-gray-800 hover:bg-gray-100"
                >
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Link href="/questionnaire">Take Assessment</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="mt-12 lg:mt-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">
                  Our Go-to-Market Success Rate
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Market Entry Success</span>
                      <span>94%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-white h-2 rounded-full"
                        style={{ width: "94%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Revenue Growth</span>
                      <span>+38%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-white h-2 rounded-full"
                        style={{ width: "38%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Client Satisfaction</span>
                      <span>97%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-white h-2 rounded-full"
                        style={{ width: "97%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
