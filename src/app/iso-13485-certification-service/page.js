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
  Heart,
  Microscope,
  FileText,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ISO13485CertificationService() {
  const benefits = [
    {
      title: "Medical Device Regulatory Compliance",
      description:
        "Meet international regulatory requirements for medical devices, facilitating market access globally.",
    },
    {
      title: "Enhanced Product Safety",
      description:
        "Implement robust quality controls that ensure the safety and effectiveness of your medical devices.",
    },
    {
      title: "Risk Management",
      description:
        "Establish comprehensive risk management processes throughout the product lifecycle.",
    },
    {
      title: "Process Optimization",
      description:
        "Streamline manufacturing and quality control processes to improve efficiency and reduce costs.",
    },
    {
      title: "Customer Confidence",
      description:
        "Build trust with customers, regulators, and stakeholders through demonstrated commitment to quality.",
    },
    {
      title: "Continuous Improvement",
      description:
        "Implement systems for ongoing monitoring and enhancement of your quality management processes.",
    },
  ];

  const services = [
    {
      title: "Gap Analysis",
      description:
        "Comprehensive assessment of your current quality management system against ISO 13485 requirements.",
      icon: <ClipboardCheck className="h-6 w-6 text-gray-600" />,
    },
    {
      title: "Documentation Development",
      description:
        "Creation of specialized medical device QMS documentation, including quality manual, procedures, and technical files.",
      icon: <FileText className="h-6 w-6 text-gray-600" />,
    },
    {
      title: "Risk Management",
      description:
        "Implementation of ISO 14971-compliant risk management processes throughout the product lifecycle.",
      icon: <Shield className="h-6 w-6 text-gray-600" />,
    },
    {
      title: "Implementation Support",
      description:
        "Expert guidance throughout the implementation process, including training and awareness programs.",
      icon: <Users className="h-6 w-6 text-gray-600" />,
    },
    {
      title: "Internal Audit",
      description:
        "Thorough internal audits to identify and address non-conformities before certification audit.",
      icon: <BarChart className="h-6 w-6 text-gray-600" />,
    },
    {
      title: "Certification Support",
      description:
        "Expert assistance during the certification audit process with notified bodies and regulatory authorities.",
      icon: <Award className="h-6 w-6 text-gray-600" />,
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Initial Assessment",
      description:
        "We evaluate your current processes and systems to identify gaps against ISO 13485 requirements.",
    },
    {
      number: "02",
      title: "Planning & Documentation",
      description:
        "We develop a detailed implementation plan and create necessary documentation for your medical device QMS.",
    },
    {
      number: "03",
      title: "Risk Management",
      description:
        "We establish comprehensive risk management processes compliant with ISO 14971 for your medical devices.",
    },
    {
      number: "04",
      title: "Implementation",
      description:
        "We guide you through implementing the quality management system across your organization.",
    },
    {
      number: "05",
      title: "Training & Awareness",
      description:
        "We provide specialized training to ensure all staff understand medical device regulations and QMS requirements.",
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
                  Medical Device Certification
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
                    ISO 13485
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
                  Achieve ISO 13485 certification with our specialized medical
                  device quality management system services. We guide you
                  through every step of the process, from gap analysis to
                  successful certification.
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
                              ISO 13485:2016
                            </h3>
                            <p className="text-sm text-gray-500">
                              Medical Devices QMS
                            </p>
                          </div>
                        </div>
                        <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                          Medical
                        </span>
                      </div>

                      <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-xs text-gray-500 mb-1">
                              Success Rate
                            </p>
                            <p className="text-lg font-semibold text-gray-800">
                              95%
                            </p>
                            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                              <div
                                className="bg-black h-1.5 rounded-full"
                                style={{ width: "95%" }}
                              ></div>
                            </div>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-xs text-gray-500 mb-1">
                              Avg. Completion
                            </p>
                            <p className="text-lg font-semibold text-gray-800">
                              6-8 months
                            </p>
                            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                              <div
                                className="bg-black h-1.5 rounded-full"
                                style={{ width: "70%" }}
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
                                Regulatory Compliance
                              </span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-black mt-0.5 mr-2" />
                              <span className="text-sm text-gray-600">
                                Enhanced Product Safety
                              </span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-black mt-0.5 mr-2" />
                              <span className="text-sm text-gray-600">
                                Global Market Access
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
              Benefits of ISO 13485 Certification
            </h2>
            <p className="text-xl text-gray-500">
              ISO 13485 certification offers specialized advantages for medical
              device manufacturers and related service providers.
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
              Our ISO 13485 Certification Services
            </h2>
            <p className="text-xl text-gray-500">
              Specialized support throughout your ISO 13485 certification
              journey for medical devices.
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
                  {React.cloneElement(service.icon, {
                    className: "h-6 w-6 text-black",
                  })}
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
              Our Medical Device Certification Process
            </h2>
            <p className="text-xl text-gray-500">
              A structured approach to achieving ISO 13485 certification
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
              Common questions about ISO 13485 certification for medical
              devices.
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
                What is ISO 13485?
              </h3>
              <p className="mt-3 text-lg text-gray-600">
                ISO 13485 is an international standard that specifies
                requirements for a quality management system (QMS) specific to
                the medical device industry. It is designed to be used by
                organizations involved in the design, production, installation,
                and servicing of medical devices and related services.
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
                How does ISO 13485 differ from ISO 9001?
              </h3>
              <p className="mt-3 text-lg text-gray-600">
                While ISO 13485 is based on the ISO 9001 structure, it is
                specifically tailored for medical device quality management. It
                places greater emphasis on regulatory compliance, risk
                management, and maintaining effective processes. Unlike ISO
                9001, ISO 13485 does not require continual improvement but
                focuses on maintaining the effectiveness of the QMS.
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
                Is ISO 13485 certification mandatory for medical device
                manufacturers?
              </h3>
              <p className="mt-3 text-lg text-gray-600">
                While ISO 13485 certification itself is not mandatory in all
                jurisdictions, many countries and regions require compliance
                with quality management system requirements that align with ISO
                13485. For example, the European Medical Device Regulation (MDR)
                requires manufacturers to have a quality management system in
                place that meets the requirements of ISO 13485.
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
                How long does it take to achieve ISO 13485 certification?
              </h3>
              <p className="mt-3 text-lg text-gray-600">
                The certification process typically takes 6-8 months, depending
                on the size and complexity of your organization, your current
                quality management system, and the classification of your
                medical devices. The process includes gap analysis,
                documentation development, implementation, training, internal
                audits, and the certification audit.
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
                Ready to Begin Your ISO 13485 Certification Journey?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Contact us today to discuss how our ISO 13485 certification
                services can help your medical device organization meet
                regulatory requirements and improve quality management.
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
                  Our ISO 13485 Success Metrics
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Certification Success Rate</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-white h-2 rounded-full"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Client Satisfaction</span>
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
                      <span>Regulatory Approval Rate</span>
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
