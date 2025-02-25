import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Certification Services | Grow Your Business",
  description:
    "Professional certification services to help your business meet industry standards and gain competitive advantage.",
};

export default function CertificationServicesPage() {
  const certificationServices = [
    {
      id: "project-management",
      title: "Project Management",
      description:
        "Expert project management services to ensure your initiatives are delivered on time, within budget, and to the highest quality standards.",
      href: "/project-management",
      icon: "/icons/project-management.svg",
    },
    {
      id: "go-to-market-strategy",
      title: "Go-to-Market Strategy",
      description:
        "Comprehensive go-to-market strategies to successfully launch new products or enter new markets with maximum impact.",
      href: "/go-to-market-strategy",
      icon: "/icons/go-to-market.svg",
    },
    {
      id: "iso-9001",
      title: "ISO 9001 Certification",
      description:
        "Guidance and support to achieve ISO 9001 certification, implementing quality management systems that improve operational efficiency.",
      href: "/iso-9001-certification-service",
      icon: "/icons/iso-9001.svg",
    },
    {
      id: "iso-13485",
      title: "ISO 13485 Certification",
      description:
        "Specialized assistance for medical device manufacturers to obtain ISO 13485 certification and ensure regulatory compliance.",
      href: "/iso-13485-certification-service",
      icon: "/icons/iso-13485.svg",
    },
    {
      id: "iso-17025",
      title: "ISO 17025 Certification",
      description:
        "Expert guidance for laboratories seeking ISO 17025 accreditation to demonstrate technical competence and reliable results.",
      href: "/iso-17025-certification-service",
      icon: "/icons/iso-17025.svg",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Certification Services
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Achieve industry recognition, improve processes, and gain
              competitive advantage with our professional certification
              services.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/contact"
                className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-black/90 transition-all duration-300 flex items-center justify-center"
              >
                Contact Us
              </Link>
              <Link
                href="/questionnaire"
                className="bg-white text-black border border-gray-200 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                Take Assessment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Our Certification Offerings
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive certification services tailored to your business needs
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificationServices.map((service) => (
            <Link key={service.id} href={service.href} className="group block">
              <div className="h-full flex flex-col rounded-2xl border border-gray-200 p-8 hover:border-black hover:shadow-xl hover:shadow-black/5 transition-all duration-300">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-black">
                  {service.icon ? (
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  ) : (
                    <svg
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-black">
                  {service.title}
                </h3>
                <p className="mb-6 flex-grow text-gray-600">
                  {service.description}
                </p>
                <div className="mt-auto flex items-center text-black font-medium">
                  <span>Learn more</span>
                  <svg
                    className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
              Benefits of Certification
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-500">
              Why investing in professional certification matters for your
              business
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  Enhanced Credibility
                </h3>
              </div>
              <p className="text-gray-600">
                Demonstrate your commitment to quality and standards, building
                trust with customers and partners.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  Improved Efficiency
                </h3>
              </div>
              <p className="text-gray-600">
                Streamline processes, reduce waste, and optimize operations
                through standardized procedures.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  Regulatory Compliance
                </h3>
              </div>
              <p className="text-gray-600">
                Meet industry regulations and standards, avoiding penalties and
                ensuring legal compliance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  Global Market Access
                </h3>
              </div>
              <p className="text-gray-600">
                Expand your business internationally with certifications
                recognized worldwide.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  Customer Satisfaction
                </h3>
              </div>
              <p className="text-gray-600">
                Deliver consistent quality and service, leading to higher
                customer satisfaction and loyalty.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  Risk Management
                </h3>
              </div>
              <p className="text-gray-600">
                Identify and mitigate potential risks before they impact your
                business operations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Ready to get certified?
              </h2>
              <p className="mt-3 text-xl text-gray-300">
                Contact us today to discuss your certification needs and how we
                can help your business grow.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 md:mt-0">
              <Link
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 transform hover:-translate-y-1 flex items-center justify-center"
              >
                Contact Us
              </Link>
              <Link
                href="/questionnaire"
                className="bg-transparent border border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                Take Assessment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
