"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Target,
  BarChart,
} from "lucide-react";
import Link from "next/link";

export default function ProjectManagement() {
  const benefits = [
    "Improved project delivery timelines",
    "Enhanced resource allocation",
    "Reduced operational costs",
    "Increased stakeholder satisfaction",
    "Better risk management",
    "Streamlined communication",
  ];

  const services = [
    {
      title: "Project Planning & Execution",
      description:
        "Comprehensive project planning, scheduling, and execution to ensure your initiatives are delivered on time and within budget.",
      icon: <Clock className="h-6 w-6 text-gray-600" />,
    },
    {
      title: "Team Leadership",
      description:
        "Expert leadership for your project teams, ensuring clear direction, accountability, and optimal performance.",
      icon: <Users className="h-6 w-6 text-gray-600" />,
    },
    {
      title: "Goal Setting & Tracking",
      description:
        "Establish clear project objectives and implement robust tracking mechanisms to monitor progress and ensure success.",
      icon: <Target className="h-6 w-6 text-gray-600" />,
    },
    {
      title: "Performance Analysis",
      description:
        "Detailed analysis of project performance metrics to identify improvement opportunities and optimize future initiatives.",
      icon: <BarChart className="h-6 w-6 text-gray-600" />,
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
                  Professional Services
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
                    Project Management
                  </motion.span>
                  <motion.span
                    className="block text-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    Excellence
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="mt-6 text-xl text-gray-500 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Deliver your projects on time, within budget, and to the
                  highest standards with our expert project management services.
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
                            <span className="text-gray-700 font-bold">PM</span>
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">
                              Project Dashboard
                            </h3>
                            <p className="text-sm text-gray-500">
                              Performance Metrics
                            </p>
                          </div>
                        </div>
                        <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                          Active
                        </span>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                            Project Completion
                          </h4>
                          <div className="mt-2 flex items-center">
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-gray-600 h-2.5 rounded-full"
                                style={{ width: "78%" }}
                              ></div>
                            </div>
                            <span className="ml-3 text-gray-700 font-medium">
                              78%
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
                                On-Time Delivery
                              </p>
                              <p className="text-lg font-semibold text-gray-800">
                                96%
                              </p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <p className="text-xs text-gray-500">
                                Budget Adherence
                              </p>
                              <p className="text-lg font-semibold text-gray-800">
                                92%
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-gray-200">
                          <Button className="w-full bg-gray-700 hover:bg-gray-800 text-white">
                            View Project Details
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

      {/* Benefits Section */}
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
              Benefits of Professional Project Management
            </h2>
            <p className="text-xl text-gray-500">
              Our project management services deliver measurable improvements to
              your business operations and outcomes.
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
              Our Project Management Services
            </h2>
            <p className="text-xl text-gray-500">
              Comprehensive project management solutions tailored to your
              business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <div className="inline-flex items-center justify-center p-3 bg-white rounded-xl mb-5 shadow-sm">
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
                Ready to Transform Your Project Management?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Contact us today to discuss how our project management services
                can help your business achieve its goals more efficiently.
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
                  Our Project Management Success Rate
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>On-Time Delivery</span>
                      <span>96%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-white h-2 rounded-full"
                        style={{ width: "96%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Budget Adherence</span>
                      <span>92%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-white h-2 rounded-full"
                        style={{ width: "92%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Client Satisfaction</span>
                      <span>98%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-white h-2 rounded-full"
                        style={{ width: "98%" }}
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
