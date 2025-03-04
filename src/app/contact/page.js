"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { submitToGravityForms } from "@/lib/gravityForms";

export default function ContactPage() {
  // Initialize form data with the exact field IDs from the Gravity Forms API
  const [formData, setFormData] = useState({
    // Name field components
    12.3: "", // First name (required)
    // Other required fields
    4: "", // Email (required)
    7: "", // Company (required)
    9: "", // Phone (required)
    11: "", // Message (optional)
    14.1: "", // Consent checkbox - use empty string initially
    form_id: 14, // explicitly set form ID to 14
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      console.log("Submitting form data:", formData);

      // Submit the form data with the 'contact' form type
      const result = await submitToGravityForms(formData, "contact");

      if (!result.success) {
        console.error("Form submission failed:", result);
        throw new Error(result.error || "Failed to submit form");
      }

      setSubmitStatus({
        type: "success",
        message:
          result.confirmationMessage ||
          "Thank you for your message. We will be in touch shortly.",
      });

      // Reset form
      setFormData({
        12.3: "", // First name
        4: "", // Email
        7: "", // Company
        9: "", // Phone
        11: "", // Message
        14.1: "", // Consent
        form_id: 14,
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "There was an error submitting the form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (checked ? "1" : "") : value,
    }));
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
            Contact Us
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#6A6A6A]">
            Get in touch with our team to discuss how we can help your business
            grow.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto mb-24"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="12.3"
                className="block text-sm font-medium text-black"
              >
                Name *
              </label>
              <input
                type="text"
                name="12.3"
                id="12.3"
                required
                value={formData["12.3"]}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-[#6A6A6A] shadow-sm focus:border-black focus:ring-black bg-white text-black"
                placeholder="First Name"
                autoComplete="given-name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="4"
                className="block text-sm font-medium text-black"
              >
                Email *
              </label>
              <input
                type="email"
                name="4"
                id="4"
                required
                value={formData["4"]}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-[#6A6A6A] shadow-sm focus:border-black focus:ring-black bg-white text-black"
                autoComplete="email"
              />
            </div>

            {/* Company Field */}
            <div>
              <label
                htmlFor="7"
                className="block text-sm font-medium text-black"
              >
                Company *
              </label>
              <input
                type="text"
                name="7"
                id="7"
                required
                value={formData["7"]}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-[#6A6A6A] shadow-sm focus:border-black focus:ring-black bg-white text-black"
                autoComplete="organization"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="9"
                className="block text-sm font-medium text-black"
              >
                Phone *
              </label>
              <input
                type="tel"
                name="9"
                id="9"
                required
                value={formData["9"]}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-[#6A6A6A] shadow-sm focus:border-black focus:ring-black bg-white text-black"
                autoComplete="tel"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="11"
                className="block text-sm font-medium text-black"
              >
                Your Message (optional)
              </label>
              <textarea
                name="11"
                id="11"
                rows={4}
                value={formData["11"]}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-[#6A6A6A] shadow-sm focus:border-black focus:ring-black bg-white text-black"
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  name="14.1"
                  id="14.1"
                  required
                  checked={formData["14.1"] === "1"}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-[#6A6A6A] text-black focus:ring-black"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="14.1"
                  className="font-medium text-[#6A6A6A]"
                  dangerouslySetInnerHTML={{
                    __html:
                      " I agree to the storage and processing of my personal data in accordance with Profici's <a href='https://staging.profici.co.uk/proficinew/privacy-policy/' class='underline'>Privacy Policy</a>. *",
                  }}
                />
              </div>
            </div>

            {/* Status Messages */}
            {submitStatus.message && (
              <div
                className={`p-4 rounded-md ${
                  submitStatus.type === "success"
                    ? "bg-black/5 text-black"
                    : "bg-black/5 text-black"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </motion.div>
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-black mb-4 text-center">
            Our Locations
          </h2>
        </div>
        {/* Locations Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Liverpool HQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-black mb-4 text-center">
              Liverpool (HQ)
            </h3>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="overflow-hidden rounded-lg relative">
                <div className="w-full h-[400px] bg-gray-200 animate-pulse absolute inset-0" />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.4324440425837!2d-2.9906499!3d53.4097872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b213127d147ef%3A0xf5c99958b3fad49c!2sExchange%20Station%2C%20Tithebarn%20St%2C%20Liverpool%20L2%202QP!5e0!3m2!1sen!2suk!4v1624551234567!5m2!1sen!2suk"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full relative z-10"
                  onLoad={(e) =>
                    e.target.previousSibling.classList.add("hidden")
                  }
                ></iframe>
              </div>
              <div className="text-[#6A6A6A] space-y-2 lg:text-left text-center">
                <p className="text-lg">Profici (NW) Ltd</p>
                <p className="text-lg">Exchange Station,</p>
                <p className="text-lg">Tithebarn Street,</p>
                <p className="text-lg">Liverpool, L2 2QP</p>
                <div className="pt-6">
                  <p className="text-lg">
                    Email:{" "}
                    <a
                      href="mailto:info@profici.co.uk"
                      className="hover:underline"
                    >
                      info@profici.co.uk
                    </a>
                  </p>
                  <p className="text-lg">
                    Phone:{" "}
                    <a href="tel:01513198550" className="hover:underline">
                      0151 319 8550
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* London Office */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <h3 className="text-xl font-bold text-black mb-4">London</h3>
            <div className="mb-6 overflow-hidden rounded-lg relative">
              <div className="w-full h-[250px] bg-gray-200 animate-pulse absolute inset-0" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2744314677264!2d-0.1428899!3d51.5144872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d49f4b3399%3A0x9e4fb85f3c54c5b0!2s11%20Argyll%20St%2C%20London%20W1F%207TH!5e0!3m2!1sen!2suk!4v1624551234567!5m2!1sen!2suk"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full relative z-10"
                onLoad={(e) => e.target.previousSibling.classList.add("hidden")}
              ></iframe>
            </div>
            <div className="text-[#6A6A6A] space-y-2">
              <p>Profici (NW) Ltd</p>
              <p>3rd Floor,</p>
              <p>11 Argyll Street,</p>
              <p>London, W1F 7TH</p>
              <div className="pt-4">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@profici.co.uk"
                    className="hover:underline"
                  >
                    info@profici.co.uk
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:01513198550" className="hover:underline">
                    0151 319 8550
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Singapore Office */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-xl font-bold text-black mb-4">Singapore</h3>
            <div className="mb-6 overflow-hidden rounded-lg relative">
              <div className="w-full h-[250px] bg-gray-200 animate-pulse absolute inset-0" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7978514844785!2d103.8319444!3d1.3072222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a0baac3875%3A0x88ce2c4d9810a97f!2sShaw%20Centre!5e0!3m2!1sen!2ssg!4v1624551234567!5m2!1sen!2ssg"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full relative z-10"
                onLoad={(e) => e.target.previousSibling.classList.add("hidden")}
              ></iframe>
            </div>
            <div className="text-[#6A6A6A] space-y-2">
              <p>Profici (NW) Ltd</p>
              <p>1 Scotts Road,</p>
              <p>Shaw Centre,</p>
              <p>Singapore, 228208</p>
              <div className="pt-4">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@profici.co.uk"
                    className="hover:underline"
                  >
                    info@profici.co.uk
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:01513198550" className="hover:underline">
                    0151 319 8550
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
