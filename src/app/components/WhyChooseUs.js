"use client";

import {
  TrendingUp,
  Users,
  Clock,
  Target,
  CheckCircle,
  Shield,
  Award,
  Briefcase,
  BarChart,
} from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const stats = [
    {
      icon: <TrendingUp className="h-6 w-6 text-gray-600" />,
      title: "Growth Success",
      value: "150%",
      description: "Average revenue growth for our partners",
      iconBg: "bg-gray-100",
      valueBg: "bg-gray-50",
    },
    {
      icon: <Users className="h-6 w-6 text-gray-600" />,
      title: "Business Partners",
      value: "100+",
      description: "Successful business transformations",
      iconBg: "bg-gray-100",
      valueBg: "bg-gray-50",
    },
    {
      icon: <Clock className="h-6 w-6 text-gray-600" />,
      title: "Time Saved",
      value: "20hrs",
      description: "Average weekly hours saved for owners",
      iconBg: "bg-gray-100",
      valueBg: "bg-gray-50",
    },
    {
      icon: <Target className="h-6 w-6 text-gray-600" />,
      title: "ROI",
      value: "3x",
      description: "Average return on investment",
      iconBg: "bg-gray-100",
      valueBg: "bg-gray-50",
    },
  ];

  const benefits = [
    {
      title: "Expert Leadership",
      description:
        "Access to experienced C-suite executives without the full-time cost",
      icon: <Award className="h-5 w-5 text-gray-600" />,
    },
    {
      title: "Proven Systems",
      description:
        "Implement battle-tested strategies that drive measurable growth",
      icon: <CheckCircle className="h-5 w-5 text-gray-600" />,
    },
    {
      title: "Dedicated Support",
      description: "Ongoing guidance and accountability to ensure your success",
      icon: <Shield className="h-5 w-5 text-gray-600" />,
    },
  ];

  return (
    <div className="bg-gray-50 py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-gray-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-gray-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="flex h-2 w-2 rounded-full bg-gray-600 mr-2"></span>
            Integrated Growth Approach
          </motion.div>

          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Profici?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We combine strategic business expertise with cutting-edge digital
            solutions to create a comprehensive growth ecosystem for your
            business.
          </p>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500">
            Our approach addresses both operational excellence and digital
            presence, ensuring your business thrives in today's competitive
            landscape.
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <motion.div
                      className={`p-3 ${stat.iconBg} rounded-xl`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <h3 className="ml-3 text-lg font-semibold text-gray-900">
                      {stat.title}
                    </h3>
                  </div>
                  <div className="mt-2">
                    <div
                      className={`inline-block px-4 py-2 rounded-lg ${stat.valueBg}`}
                    >
                      <motion.p
                        className="text-4xl font-bold text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                      >
                        {stat.value}
                      </motion.p>
                    </div>
                    <p className="mt-3 text-sm text-gray-600">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                The Profici Advantage
              </h3>
              <p className="text-gray-600 mb-8">
                Our approach combines strategic expertise with practical
                implementation, ensuring you have both a roadmap for growth and
                the support to execute it effectively.
              </p>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 p-2 bg-gray-100 rounded-lg">
                      {benefit.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">
                        {benefit.title}
                      </h4>
                      <p className="mt-1 text-gray-500">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gray-100 rounded-full opacity-50"></div>
              <div className="relative bg-white p-8 rounded-xl border border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <h4 className="font-medium text-gray-900">
                        How We're Different
                      </h4>
                      <p className="text-sm text-gray-500">Our Unique Value</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h5 className="font-medium text-gray-900 mb-2">
                      Executive Expertise
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Access to C-suite talent without the full-time cost,
                      bringing enterprise-level strategy to growing businesses.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h5 className="font-medium text-gray-900 mb-2">
                      Holistic Approach
                    </h5>
                    <p className="text-gray-600 text-sm">
                      We address both strategic planning and tactical execution,
                      ensuring complete alignment across your business.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h5 className="font-medium text-gray-900 mb-2">
                      Proven Methodology
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Our proprietary growth framework has been refined through
                      hundreds of successful business transformations.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <h5 className="font-medium text-gray-900 mb-2">
                      Accountability Focus
                    </h5>
                    <p className="text-gray-600 text-sm">
                      We partner with you to implement changes and measure
                      results with clear metrics, not just provide advice.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
