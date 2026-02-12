// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#050505] to-black text-white border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black uppercase">
              <span className="text-white">Fit</span>
              <span className="text-lime-400">Zone</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering your fitness journey with world-class facilities and
              expert guidance. United by strength, powered by community.
            </p>
            {/* Social Links */}
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-lime-400 flex items-center justify-center transition-all group"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-lime-400 flex items-center justify-center transition-all group"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 ..." />
                </svg>
              </a>

              {/* Repeat for Twitter, YouTube */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-lime-400 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-lime-400 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/classes"
                  className="text-gray-400 hover:text-lime-400 transition-colors text-sm"
                >
                  Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/trainers"
                  className="text-gray-400 hover:text-lime-400 transition-colors text-sm"
                >
                  Our Trainers
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-lime-400 transition-colors text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-lime-400 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 uppercase">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/personal-training"
                  className="text-gray-400 hover:text-lime-400 transition-colors text-sm"
                >
                  Personal Training
                </Link>
              </li>
              <li>
                <Link
                  href="/services/group-classes"
                  className="text-gray-400 hover:text-lime-400 transition-colors text-sm"
                >
                  Group Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/services/nutrition"
                  className="text-gray-400 hover:text-lime-400 transition-colors text-sm"
                >
                  Nutrition Coaching
                </Link>
              </li>
              <li>
                <Link
                  href="/services/yoga"
                  className="text-gray-400 hover:text-lime-400 transition-colors text-sm"
                >
                  Yoga & Pilates
                </Link>
              </li>
              <li>
                <Link
                  href="/services/spa"
                  className="text-gray-400 hover:text-lime-400 transition-colors text-sm"
                >
                  Spa & Recovery
                </Link>
              </li>
              <li>
                <Link
                  href="/services/online"
                  className="text-gray-400 hover:text-lime-400 transition-colors text-sm"
                >
                  Online Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 uppercase">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-lime-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-400 text-sm">
                  123 Fitness Street, Gym City, GC 12345
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-lime-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-lime-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-400 text-sm">info@fitzone.com</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-lime-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="text-gray-400 text-sm">
                  <p>Mon - Fri: 5:00 AM - 11:00 PM</p>
                  <p>Sat - Sun: 7:00 AM - 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} FitZone. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-lime-400 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-lime-400 text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-500 hover:text-lime-400 text-sm transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
