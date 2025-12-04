"use client"

import Link from "next/link"
import { MessageSquare, Zap, Users, BarChart3, Shield, Smartphone, Clock, Workflow, Database } from "lucide-react"

export default function FeaturesPage() {
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
            <Link href="/" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Home
            </Link>
            <Link href="/features" className="text-blue-600 font-medium text-sm">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Pricing
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 text-balance">Powerful Features for Your Business</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to automate customer conversations and scale your business.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Instant Responses</h3>
            <p className="text-gray-700">
              Set up automated replies and intelligent workflows to respond to customers instantly, 24/7.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Team Collaboration</h3>
            <p className="text-gray-700">
              Work seamlessly with your team, assign conversations, and maintain accountability across your business.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Analytics & Insights</h3>
            <p className="text-gray-700">
              Track performance metrics and gain insights to improve your customer engagement strategies.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 border border-orange-200">
            <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Multi-Channel Support</h3>
            <p className="text-gray-700">
              Connect WhatsApp, Telegram, Instagram, and more in one unified platform for seamless management.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 border border-red-200">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Security & Privacy</h3>
            <p className="text-gray-700">
              Enterprise-grade security with end-to-end encryption and compliance with data protection standards.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-8 border border-cyan-200">
            <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-6">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">AI Integration</h3>
            <p className="text-gray-700">
              Leverage artificial intelligence to understand customer intent and provide smarter, context-aware
              responses.
            </p>
          </div>

          {/* Feature 7 */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-8 border border-indigo-200">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Scheduled Messages</h3>
            <p className="text-gray-700">
              Schedule messages to send at optimal times and automate follow-ups with your customers.
            </p>
          </div>

          {/* Feature 8 */}
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-8 border border-pink-200">
            <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-6">
              <Workflow className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Workflow Automation</h3>
            <p className="text-gray-700">
              Create complex automation workflows without coding using our intuitive drag-and-drop builder.
            </p>
          </div>

          {/* Feature 9 */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-8 border border-teal-200">
            <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-6">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Data Management</h3>
            <p className="text-gray-700">
              Organize and manage customer data efficiently with advanced search and segmentation capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 my-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 text-balance">Ready to Get Started?</h2>
          <p className="text-blue-100 text-lg mb-8">Experience the power of Chat Biz today with a free trial.</p>
          <Link
            href="/"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition"
          >
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
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
  )
}
