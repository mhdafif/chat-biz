"use client";

import Link from "next/link";
import { MessageSquare } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Chat Biz</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/features"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium"
            >
              Pricing
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p>
              Chat Biz ("we", "us", "our", or "Company") operates the Chat Biz
              website and application. This page informs you of our policies
              regarding the collection, use, and disclosure of personal data
              when you use our service and the choices you have associated with
              that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Information Collection and Use
            </h2>
            <p>
              We collect several different types of information for various
              purposes to provide and improve our service to you.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
              Types of Data Collected:
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong>Personal Data:</strong> Email address, first name, last
                name, phone number, address, city, state, zip code, country
              </li>
              <li>
                <strong>Usage Data:</strong> Browser type, IP address, pages
                visited, time and date of visit, time spent on those pages, and
                other diagnostic data
              </li>
              <li>
                <strong>Communication Data:</strong> Messages, files, and other
                content you send through our platform
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Use of Data
            </h2>
            <p>Chat Biz uses the collected data for various purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>
                To allow you to participate in interactive features of our
                service
              </li>
              <li>To provide customer support</li>
              <li>
                To gather analysis or valuable information so we can improve our
                service
              </li>
              <li>To monitor the usage of our service</li>
              <li>
                To detect, prevent and address technical and security issues
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Security of Data
            </h2>
            <p>
              The security of your data is important to us, but remember that no
              method of transmission over the Internet or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your personal data, we cannot
              guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "effective date" at the top of this Privacy
              Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
              <br />
              Email: help@chatbiz.space
              <br />
              Address: Jl super puma raya, Cimahi, Indonesia
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Your Rights
            </h2>
            <p>
              You have the right to access, update, or delete the information we
              have on you. If you would like to exercise this right, please
              contact us.
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-bold">Chat Biz</span>
              </div>
              <p className="text-sm">Automate your business conversations.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/features" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-sm text-center">
            <p>&copy; 2025 Chat Biz. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
