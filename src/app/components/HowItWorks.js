"use client";

import {
  ClipboardCheck,
  LineChart,
  Users,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      icon: <ClipboardCheck className="h-8 w-8 text-gray-600" />,
      title: "Assessment",
      description:
        "Complete our business assessment to help us understand your current situation, challenges, and goals.",
    },
    {
      icon: <LineChart className="h-8 w-8 text-gray-600" />,
      title: "Strategy Development",
      description:
        "We create a tailored growth strategy based on your business's unique needs and market position.",
    },
    {
      icon: <Users className="h-8 w-8 text-gray-600" />,
      title: "Team Integration",
      description:
        "Our experienced executives integrate with your team, providing guidance and expertise where needed.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-gray-600" />,
      title: "Execution & Growth",
      description:
        "We help implement the strategy, measure results, and adjust course to ensure sustainable growth.",
    },
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Our proven process for helping businesses scale effectively and
            sustainably.
          </p>
        </motion.div>

        <div className="mt-20">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-8 left-0 hidden w-full lg:block">
              <div className="h-0.5 w-full bg-gray-200">
                <div className="absolute right-0 -mt-1 h-3 w-3 rotate-45 border-r border-t border-gray-200 bg-white"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 relative z-10">
                      {step.icon}
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
