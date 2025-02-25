"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesDropdownRef = useRef(null);
  const servicesTimeoutRef = useRef(null);

  const digitalServices = [
    { href: "/services/web-design", label: "Web Design" },
    { href: "/services/digital-marketing", label: "Digital Marketing" },
    { href: "/services/seo-management", label: "SEO Management" },
    { href: "/services/ppc-management", label: "PPC Management" },
    {
      href: "/services/social-media-management",
      label: "Social Media Management",
    },
    { href: "/services/content-marketing", label: "Content Marketing" },
    {
      href: "/services/certification-services",
      label: "Certification Services",
    },
  ];

  const businessServices = [
    { href: "/services/business-strategy", label: "Business Strategy" },
    { href: "/services/marketing-strategy", label: "Marketing Strategy" },
    { href: "/services/business-consultancy", label: "Business Consultancy" },
    { href: "/services/fractional-c-suite", label: "Fractional C-Suite" },
    {
      href: "/services/leadership-and-people-culture",
      label: "Leadership & People Culture",
    },
    { href: "/services/finance-consultants", label: "Finance Consultants" },
    { href: "/services/business-planning", label: "Business Planning" },
    { href: "/services/business-growth", label: "Business Growth" },
  ];

  const certificationServices = [
    { href: "/project-management", label: "Project Management" },
    { href: "/go-to-market-strategy", label: "Go-to-Market Strategy" },
    {
      href: "/iso-9001-certification-service",
      label: "ISO 9001 Certification",
    },
    {
      href: "/iso-13485-certification-service",
      label: "ISO 13485 Certification",
    },
    {
      href: "/iso-17025-certification-service",
      label: "ISO 17025 Certification",
    },
  ];

  const navItems = [
    { href: "/team", label: "Team" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  // Add effect to prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const handleMobileMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMobileServicesOpen(false);
  };

  const handleMobileServicesClick = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-[100] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="https://profici.co.uk/wp-content/themes/proficinew/assets/images/Proficiblack.svg"
                alt="Profici Logo"
                width={150}
                height={150}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              ref={servicesDropdownRef}
              className="relative group"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button className="text-gray-700 hover:text-gray-900 transition-colors flex items-center py-2">
                Services
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`absolute left-0 w-[480px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform transition-all duration-200 origin-top-left ${
                  isServicesOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Digital Services Column */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">
                        Digital Services
                      </h3>
                      <div className="space-y-2">
                        {digitalServices.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block text-sm text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg px-3 py-2 transition-colors duration-150"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* Business Services Column */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">
                        Business Services
                      </h3>
                      <div className="space-y-2">
                        {businessServices.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block text-sm text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg px-3 py-2 transition-colors duration-150"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Link
                      href="/services"
                      className="text-sm font-medium text-black hover:text-gray-900 flex items-center"
                    >
                      View All Services
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Nav Items */}
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/questionnaire"
              className="bg-black text-white px-4 py-2 rounded-full hover:bg-black/90 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={handleMobileMenuClick}
              className="text-gray-700 hover:text-gray-900"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 inset-x-0 bg-white shadow-lg transition-all duration-200 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        style={{ height: "calc(100vh - 4rem)" }}
      >
        <div className="overflow-y-auto h-full">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <Link
              href="/about"
              className="block py-2 text-base font-medium text-gray-700 hover:text-gray-900"
              onClick={handleMobileMenuClick}
            >
              About Us
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={handleMobileServicesClick}
                className="flex justify-between items-center w-full py-2 text-base font-medium text-gray-700 hover:text-gray-900"
              >
                Services
                <svg
                  className={`ml-1 h-5 w-5 transition-transform duration-200 ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`mt-2 space-y-2 pl-4 ${
                  isMobileServicesOpen ? "block" : "hidden"
                }`}
              >
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">
                    Digital Services
                  </h3>
                  {digitalServices.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 text-base text-gray-700 hover:text-gray-900"
                      onClick={handleMobileMenuClick}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">
                    Business Services
                  </h3>
                  <div className="mt-1 space-y-1">
                    {businessServices.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 text-sm text-gray-700 hover:text-gray-900"
                        onClick={handleMobileMenuClick}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  <div className="pt-4 pb-2">
                    <Link
                      href="/services"
                      className="block py-2 text-base font-medium text-gray-900 hover:text-gray-900"
                      onClick={handleMobileMenuClick}
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Mobile Nav Items */}
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-base font-medium text-gray-700 hover:text-gray-900"
                onClick={handleMobileMenuClick}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/questionnaire"
              className="block w-full text-center bg-black text-white px-4 py-3 rounded-full hover:bg-black/90 transition-colors mt-6"
              onClick={handleMobileMenuClick}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
