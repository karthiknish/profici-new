"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Responsive Web Design",
    description:
      "We create websites that look and perform beautifully on any device, from desktops to smartphones, ensuring flawless user experience and increased conversions.",
    icon: "📱",
  },
  {
    title: "Custom Website Design",
    description:
      "Our bespoke website designs are tailored to your specific business needs and brand identity, perfectly aligned with your overall business strategy.",
    icon: "🎨",
  },
  {
    title: "Shopify Websites",
    description:
      "We design Shopify websites that combine powerful e-commerce solutions with stunning design, optimized for conversions and easy management.",
    icon: "🛍️",
  },
  {
    title: "WordPress Websites",
    description:
      "Leverage the power of WordPress with our secure, scalable, and SEO-friendly website designs that are easy to manage and maintain.",
    icon: "📝",
  },
  {
    title: "UI/UX Design",
    description:
      "Create intuitive user experiences with our expert UI/UX design services, ensuring your website is both beautiful and functional.",
    icon: "✨",
  },
  {
    title: "Website Maintenance",
    description:
      "Keep your website running smoothly with our comprehensive maintenance and support services, ensuring optimal performance.",
    icon: "🔧",
  },
];

const features = [
  {
    title: "Expert Team",
    description:
      "Our team of more than 20 expert web developers brings a wealth of experience and creativity to every project.",
    icon: "👥",
  },
  {
    title: "Custom Solutions",
    description:
      "We believe in creating bespoke websites that truly reflect the unique characteristics of each business.",
    icon: "💡",
  },
  {
    title: "Future-Proof Design",
    description:
      "By focusing on responsive design and the latest web technologies, we ensure your website is future-proof and ready to meet evolving digital trends.",
    icon: "🚀",
  },
  {
    title: "Complete Support",
    description:
      "From initial design to final launch and beyond, Profici offers ongoing support and maintenance to ensure your website continues to perform at its best.",
    icon: "��️",
  },
];

export default function WebDesign() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/web-design-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-48">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8">
              Website
              <span className="block mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Design
              </span>
            </h1>
            <p className="text-xl leading-8 text-gray-300 mb-12">
              We specialise in creating exceptional websites that are not just
              visually appealing but also highly functional and responsive,
              ensuring your brand's integrity across all devices.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 transform hover:-translate-y-1">
              Start Your Project
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
                Modern Web Solutions
              </h2>
              <p className="text-lg text-[#6A6A6A] mb-8">
                In the digital age, a responsive website is not a luxury—it's a
                necessity. Our team excels in crafting websites that look and
                perform beautifully on any device, providing a flawless
                experience that enhances user engagement and increases
                conversions.
              </p>
              <div className="flex gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-black/90 transition-all duration-300">
                  View Our Work
                </button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden">
                <div className="aspect-[4/3] bg-black/5"></div>
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
            <h2 className="text-4xl font-bold text-black mb-6">Our Services</h2>
            <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
              From responsive design to e-commerce solutions, we offer
              comprehensive web design services tailored to your needs.
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
                  <div className="flex items-center justify-center w-16 h-16 mb-6 text-4xl bg-black/5 rounded-2xl group-hover:bg-black/10 transition-all duration-300 ease-out">
                    <span className="transform group-hover:scale-105 transition-transform duration-300 ease-out">
                      {service.icon}
                    </span>
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

      {/* Features Section */}
      <div className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">
              Why Choose Us
            </h2>
            <p className="text-lg text-[#6A6A6A] max-w-2xl mx-auto">
              Partner with us to create a website that stands out in today's
              crowded digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="flex gap-6 items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 text-4xl bg-black/5 rounded-2xl">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-[#6A6A6A]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 lg:py-32 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>

        <motion.div
          className="relative z-10 max-w-3xl mx-auto text-center px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Let's work together to create a website that not only looks stunning
            but also drives business growth and enhances your brand's online
            visibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 transform hover:-translate-y-1">
              Start Your Project
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
