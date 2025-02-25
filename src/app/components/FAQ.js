"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is a Fractional C-Suite service?",
      answer:
        "Fractional C-Suite services provide your business with experienced executive leadership on a part-time or project basis. This gives you access to high-level expertise without the cost of a full-time executive, perfect for growing businesses that need strategic guidance but aren't ready for permanent C-level hires.",
    },
    {
      question: "How do I know if my business is ready for Profici's services?",
      answer:
        "If you're generating revenue but struggling with scaling, feeling overwhelmed with day-to-day management, or need strategic guidance to reach the next level, you're likely ready. Our qualification process helps determine if we're the right fit for your business's current stage and goals.",
    },
    {
      question: "What is the typical engagement process?",
      answer:
        "We begin with a comprehensive business assessment, followed by developing a tailored growth strategy. We then implement this strategy through regular consulting sessions, strategic planning, and hands-on guidance, all while measuring and adjusting for optimal results.",
    },
    {
      question: "How long does it typically take to see results?",
      answer:
        "While every business is different, our clients typically start seeing measurable improvements within the first 3-6 months. This includes better operational efficiency, clearer strategic direction, and initial signs of growth acceleration.",
    },
    {
      question: "What industries do you work with?",
      answer:
        "We work with businesses across various industries, including technology, professional services, manufacturing, and e-commerce. Our methodologies are adaptable to different business models while maintaining focus on scalable growth.",
    },
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Everything you need to know about our services and how we can help
            your business grow.
          </p>
        </motion.div>

        <div className="mt-20 max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 transition-all duration-200 hover:border-blue-100"
              >
                <button
                  className="w-full px-6 py-4 flex justify-between items-center focus:outline-none"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="text-lg font-medium text-gray-900 text-left">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </motion.div>
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-500">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
