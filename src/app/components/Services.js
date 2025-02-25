"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  TrendingUp,
  Clock,
  BarChart,
  Briefcase,
  Zap,
  Target,
  CheckSquare,
  Award,
  FileText,
  Clipboard,
  DollarSign,
  Share2,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  initial: "initial",
  whileInView: "animate",
  viewport: { once: true },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Services() {
  const services = [
    {
      title: "Fractional C-Suite Services",
      description:
        "Access experienced executives who work as an extension of your leadership team, providing expertise without the full-time commitment.",
      icon: <Users className="h-6 w-6 text-gray-600" />,
      link: "/services/fractional-c-suite",
    },
    {
      title: "Strategic Growth Planning",
      description:
        "Develop and implement effective strategies to scale your business, optimise operations, and achieve sustainable growth.",
      icon: <TrendingUp className="h-6 w-6 text-gray-600" />,
      link: "/services/strategic-growth",
    },
    {
      title: "Business Transformation",
      description:
        "Transform your business operations and reclaim your time with our expert guidance and proven methodologies.",
      icon: <Clock className="h-6 w-6 text-gray-600" />,
      link: "/services/business-transformation",
    },
    {
      title: "Project Management",
      description:
        "Effective leadership and direction for your teams, ensuring projects are delivered on time, within budget, and to the highest standards.",
      icon: <Clipboard className="h-6 w-6 text-gray-600" />,
      link: "/project-management",
    },
    {
      title: "Go-to-Market Strategy",
      description:
        "Comprehensive action plans to reach target customers and achieve competitive advantage when launching new products or entering new markets.",
      icon: <Target className="h-6 w-6 text-gray-600" />,
      link: "/go-to-market-strategy",
    },
    {
      title: "ISO Certification Services",
      description:
        "Expert guidance for ISO 9001, ISO 13485, and ISO 17025 certifications to improve quality management systems and gain competitive edge.",
      icon: <Award className="h-6 w-6 text-black" />,
      link: "/services/certification-services",
    },
  ];

  const digitalServices = [
    {
      title: "Web Design",
      description:
        "Custom website design and development that creates a powerful online presence and delivers exceptional user experiences.",
      icon: <BarChart className="h-6 w-6 text-black" />,
      link: "/services/web-design",
    },
    {
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies that increase visibility, drive traffic, and generate qualified leads for your business.",
      icon: <Target className="h-6 w-6 text-black" />,
      link: "/services/digital-marketing",
    },
    {
      title: "SEO Management",
      description:
        "Search engine optimisation services that improve your website's visibility in search results and drive organic traffic growth.",
      icon: <TrendingUp className="h-6 w-6 text-black" />,
      link: "/services/seo-management",
    },
    {
      title: "PPC Management",
      description:
        "Strategic pay-per-click advertising campaigns that maximise ROI and deliver targeted traffic to your website.",
      icon: <DollarSign className="h-6 w-6 text-black" />,
      link: "/services/ppc-management",
    },
    {
      title: "Social Media Management",
      description:
        "Comprehensive social media strategies that build brand awareness, engage your audience, and drive meaningful business results.",
      icon: <Share2 className="h-6 w-6 text-black" />,
      link: "/services/social-media-management",
    },
    {
      title: "Content Marketing",
      description:
        "Strategic content creation and distribution that attracts and retains your target audience while driving profitable customer action.",
      icon: <FileText className="h-6 w-6 text-black" />,
      link: "/services/content-marketing",
    },
  ];

  return (
    <motion.div
      className="py-24 bg-white relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-50/50 -skew-y-6 transform origin-top-right z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="flex h-2 w-2 rounded-full bg-gray-600 mr-2"></span>
            Our Services
          </motion.div>

          <motion.h2
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Break Free from the Startup Struggle
          </motion.h2>

          <motion.p
            className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Are you ready to transform your business but feeling overwhelmed?
            We've been there! Partner with Profici's Growth Program to unlock
            your business's true potential.
          </motion.p>
        </motion.div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center p-3 bg-gray-100 rounded-xl mb-5 group-hover:bg-gray-200 transition-colors duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-800">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-base text-gray-500 group-hover:text-gray-600">
                    {service.description}
                  </p>

                  <div className="mt-6">
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-black font-medium hover:text-gray-900 transition-colors"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Digital Services Section */}
      <motion.div
        className="bg-gray-50 py-24 mt-24 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gray-200/50 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gray-300/50 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Digital Services
            </motion.h2>

            <motion.p
              className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Enhance your online presence and reach your target audience with
              our comprehensive digital marketing and web design services.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {digitalServices.map((service, index) => (
              <motion.div
                key={index}
                className="group relative p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center p-3 bg-gray-100 rounded-xl mb-5 group-hover:bg-gray-200 transition-colors duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-800">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-base text-gray-500 group-hover:text-gray-600">
                    {service.description}
                  </p>

                  <div className="mt-6">
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-black font-medium hover:text-gray-900 transition-colors"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="bg-white py-24 mt-24 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gray-200 rounded-full opacity-50"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                  Delegate to Unlock Growth
                </h2>
                <p className="text-lg text-gray-500 mb-6">
                  Many business owners find it difficult to delegate,
                  unintentionally stifling their company's growth. With
                  Profici's Fractional C-Suite Services, you gain access to
                  experienced executives who help drive strategic growth and
                  achieve your goals.
                </p>
                <motion.div className="mt-8" whileHover={{ scale: 1.05 }}>
                  <Button
                    asChild
                    size="lg"
                    className="bg-black hover:bg-black/90 text-white shadow-lg"
                  >
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="mt-12 lg:mt-0 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-gray-100 text-gray-700">
                      <Users className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Executive Expertise
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      Our Fractional C-Suite professionals provide critical
                      business advice through regular consultation and strategy
                      sessions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-gray-100 text-gray-700">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Operational Efficiency
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      From enhancing your operational efficiency to boosting
                      your online presence with tailored marketing strategies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-gray-100 text-gray-700">
                      <Zap className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Scalable Growth
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      We provide the executive leadership your business needs to
                      scale effectively and achieve sustainable long-term
                      growth.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
