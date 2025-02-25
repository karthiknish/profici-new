import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Image
              src="https://profici.co.uk/wp-content/themes/proficinew/assets/images/Proficiblack.svg"
              alt="Profici Logo"
              width={150}
              height={150}
              className="-ml-2"
            />
            <p className="mt-4 text-gray-500 text-sm">
              Delivering exceptional digital solutions and strategic business
              services to help your brand succeed.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://www.facebook.com/profici.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com/profici_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://www.linkedin.com/company/profici/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/profici_ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.youtube.com/channel/UCF0or1ZIIrpomvj8QT3oj8A"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600"
              >
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/project-management"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Project Management
                </Link>
              </li>
              <li>
                <Link
                  href="/go-to-market-strategy"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Go-to-Market Strategy
                </Link>
              </li>

              <li>
                <Link
                  href="/digital-marketing"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/web-development"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/business-consulting"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Business Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/quality-management"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Quality Management
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/questionnaire"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Assessment
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="text-base text-gray-500 flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                <a
                  href="mailto:info@profici.co.uk"
                  className="hover:text-gray-900"
                >
                  info@profici.co.uk
                </a>
              </li>
              <li className="text-base text-gray-500 flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-400" />
                <a href="tel:+441513198550" className="hover:text-gray-900">
                  +44 151 319 8550
                </a>
              </li>
              <li className="text-base text-gray-500 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                <span>Liverpool, United Kingdom</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-gray-400">
              © {new Date().getFullYear()} Profici. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-400 hover:text-gray-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-gray-400 hover:text-gray-600"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-gray-400 hover:text-gray-600"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
