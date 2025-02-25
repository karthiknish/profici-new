"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  ClipboardCheck,
  Award,
  BarChart,
  Shield,
  Clock,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function ISO9001CertificationService() {
  const benefits = [
    {
      title: "Enhanced Quality Management",
      description:
        "Implement a robust quality management system that ensures consistent product and service quality.",
    },
    {
      title: "Increased Operational Efficiency",
      description:
        "Streamline processes, reduce waste, and improve resource utilization across your organization.",
    },
    {
      title: "Improved Customer Satisfaction",
      description:
        "Meet and exceed customer expectations through standardized processes and continuous improvement.",
    },
    {
      title: "Regulatory Compliance",
      description:
        "Ensure compliance with relevant regulations and standards in your industry.",
    },
    {
      title: "Competitive Advantage",
      description:
        "Differentiate your business from competitors and access new markets with ISO 9001 certification.",
    },
    {
      title: "Risk Mitigation",
      description:
        "Identify and address potential risks before they impact your business operations.",
    },
  ];

  const services = [
    {
      title: "Gap Analysis",
      description:
        "Comprehensive assessment of your current quality management system against ISO 9001 requirements.",
      icon: <ClipboardCheck className="h-6 w-6 text-black" />,
    },
    {
      title: "Documentation Development",
      description:
        "Creation of required documentation, including quality manual, procedures, and work instructions.",
      icon: <Shield className="h-6 w-6 text-black" />,
    },
    {
      title: "Implementation Support",
      description:
        "Guidance and support throughout the implementation process, including training and awareness programs.",
      icon: <Users className="h-6 w-6 text-black" />,
    },
    {
      title: "Internal Audit",
      description:
        "Thorough internal audit to identify and address non-conformities before certification audit.",
      icon: <BarChart className="h-6 w-6 text-black" />,
    },
    {
      title: "Certification Support",
      description:
        "Expert assistance during the certification audit process, including preparation and corrective actions.",
      icon: <Award className="h-6 w-6 text-black" />,
    },
    {
      title: "Post-Certification Maintenance",
      description:
        "Ongoing support to maintain certification, including periodic reviews and continuous improvement.",
      icon: <Clock className="h-6 w-6 text-black" />,
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Initial Assessment",
      description:
        "We evaluate your current processes and systems to identify gaps against ISO 9001 requirements.",
    },
    {
      number: "02",
      title: "Planning & Documentation",
      description:
        "We develop a detailed implementation plan and create necessary documentation for your quality management system.",
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "We guide you through implementing the quality management system across your organization.",
    },
    {
      number: "04",
      title: "Training & Awareness",
      description:
        "We provide comprehensive training to ensure all staff understand and follow the new processes.",
    },
    {
      number: "05",
      title: "Internal Audit",
      description:
        "We conduct thorough internal audits to identify and address any non-conformities.",
    },
    {
      number: "06",
      title: "Certification Audit",
      description:
        "We support you through the certification audit process with an accredited certification body.",
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
                  Certification Services
                </motion.div>

                <motion.h1
                  className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-6xl lg:mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.span
                    className="block text-black"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    ISO 9001
                  </motion.span>
                  <motion.span
                    className="block text-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    Certification Service
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="mt-6 text-xl text-gray-500 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Achieve ISO 9001 certification with our comprehensive support
                  services. We guide you through every step of the process, from
                  gap analysis to successful certification.
                </motion.p>

                <motion.div
                  className="mt-10 flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  <Link
                    href="/contact"
                    className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-black/90 transition-all duration-300 flex items-center justify-center"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/questionnaire"
                    className="bg-white text-black border border-gray-200 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                  >
                    Take Assessment
                  </Link>
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
                    <div className="h-2 bg-black"></div>
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center space-x-2">
                          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                            <span className="text-black font-bold">ISO</span>
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">
                              ISO 9001:2015
                            </h3>
                            <p className="text-sm text-gray-500">
                              Quality Management
                            </p>
                          </div>
                        </div>
                        <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                          Certification
                        </span>
                      </div>

                      <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-xs text-gray-500 mb-1">
                              Success Rate
                            </p>
                            <p className="text-lg font-semibold text-gray-800">
                              98%
                            </p>
                            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                              <div
                                className="bg-black h-1.5 rounded-full"
                                style={{ width: "98%" }}
                              ></div>
                            </div>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-xs text-gray-500 mb-1">
                              Avg. Completion
                            </p>
                            <p className="text-lg font-semibold text-gray-800">
                              4-6 months
                            </p>
                            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                              <div
                                className="bg-black h-1.5 rounded-full"
                                style={{ width: "75%" }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                            Key Benefits
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-black mt-0.5 mr-2" />
                              <span className="text-sm text-gray-600">
                                Enhanced Quality Management
                              </span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-black mt-0.5 mr-2" />
                              <span className="text-sm text-gray-600">
                                Improved Customer Satisfaction
                              </span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-black mt-0.5 mr-2" />
                              <span className="text-sm text-gray-600">
                                Competitive Advantage
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="pt-4 border-t border-gray-200">
                          <button className="w-full bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/90 transition-all duration-300">
                            View Certification Details
                          </button>
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
              Benefits of ISO 9001 Certification
            </h2>
            <p className="text-xl text-gray-500">
              ISO 9001 certification offers numerous advantages for
              organizations of all sizes and industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
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
              Our ISO 9001 Certification Services
            </h2>
            <p className="text-xl text-gray-500">
              Comprehensive support throughout your ISO 9001 certification
              journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300"
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

      {/* Process Section */}
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
              Our Certification Process
            </h2>
            <p className="text-xl text-gray-500">
              A structured approach to achieving ISO 9001 certification
              efficiently and effectively.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-2xl font-bold text-black">
                  {step.number}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-lg text-gray-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-500">
              Common questions about ISO 9001 certification and our services.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            <motion.div
              className="py-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-gray-900">
                What is ISO 9001?
              </h3>
              <p className="mt-3 text-lg text-gray-600">
                ISO 9001 is an international standard for quality management
                systems (QMS). It provides a framework for organizations to
                ensure they can consistently deliver products and services that
                meet customer and regulatory requirements.
              </p>
            </motion.div>
            <motion.div
              className="py-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-gray-900">
                How long does it take to get ISO 9001 certified?
              </h3>
              <p className="mt-3 text-lg text-gray-600">
                The certification process typically takes 4-6 months, depending
                on the size and complexity of your organization, your current
                quality management system, and your team's availability and
                commitment.
              </p>
            </motion.div>
            <motion.div
              className="py-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-gray-900">
                Is ISO 9001 certification suitable for my organization?
              </h3>
              <p className="mt-3 text-lg text-gray-600">
                ISO 9001 is designed to be applicable to organizations of all
                sizes and industries. Whether you're a small business or a large
                enterprise, ISO 9001 can be tailored to your specific needs and
                operations.
              </p>
            </motion.div>
            <motion.div
              className="py-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-gray-900">
                What are the costs involved in ISO 9001 certification?
              </h3>
              <p className="mt-3 text-lg text-gray-600">
                The costs include consulting fees, implementation resources,
                training, and certification audit fees. We provide transparent
                pricing and can tailor our services to fit your budget while
                ensuring successful certification.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
                Ready to Begin Your ISO 9001 Certification Journey?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Contact us today to discuss how our ISO 9001 certification
                services can help your organization improve quality, efficiency,
                and customer satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 transform hover:-translate-y-1 flex items-center justify-center"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/questionnaire"
                  className="bg-transparent border border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  Take Assessment
                </Link>
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
                  Our ISO 9001 Success Metrics
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Certification Success Rate</span>
                      <span>98%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-white h-2 rounded-full"
                        style={{ width: "98%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Client Satisfaction</span>
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
                      <span>First-Time Pass Rate</span>
                      <span>92%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-white h-2 rounded-full"
                        style={{ width: "92%" }}
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
