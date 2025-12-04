"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageSquare, Zap, Users, BarChart3, Shield, Smartphone } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Chat Biz</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Home
            </Link>
            <Link href="/features" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Pricing
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 text-sm font-semibold mb-4">Chat Biz</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 text-balance">
              Automate Your Business Chats.
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Streamline customer communication across WhatsApp, Telegram, and more. Manage multiple conversations with
              AI-powered automation.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
              Start Free Trial
            </Button>
          </div>

          {/* Featured Cards */}
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
              <p className="text-sm text-blue-200 mb-2">Easy Integration</p>
              <h3 className="text-3xl font-bold mb-4">Smart Automation</h3>
              <p className="text-blue-100 mb-6">Automate responses 24/7 and respond instantly to customer inquiries.</p>
              <a href="#" className="inline-flex items-center text-blue-300 hover:text-blue-200">
                Learn more →
              </a>
            </div>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
              <p className="text-sm text-slate-300 mb-2">Messages & Templates</p>
              <h3 className="text-3xl font-bold mb-4">Multi-Channel Management</h3>
              <p className="text-slate-200 mb-6">
                Manage and organize conversations across multiple messaging platforms.
              </p>
              <a href="#" className="inline-flex items-center text-slate-300 hover:text-slate-200">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-balance">Powerful Features for Your Business</h2>
            <p className="text-gray-600 text-lg">Everything you need to manage customer communication at scale.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Responses</h3>
              <p className="text-gray-600">
                Set up automated replies and intelligent workflows to respond to customers instantly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Team Collaboration</h3>
              <p className="text-gray-600">
                Work seamlessly with your team, assign conversations, and maintain accountability.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics & Insights</h3>
              <p className="text-gray-600">
                Track performance metrics and gain insights to improve your customer engagement.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Channel</h3>
              <p className="text-gray-600">Connect WhatsApp, Telegram, Instagram and more in one unified platform.</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Security & Privacy</h3>
              <p className="text-gray-600">Enterprise-grade security with end-to-end encryption and data protection.</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Integration</h3>
              <p className="text-gray-600">Leverage AI to understand customer intent and provide smarter responses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 text-balance">Ready to Transform Your Business?</h2>
          <p className="text-blue-100 text-lg mb-8">Start automating your customer conversations today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-blue-700 rounded-full px-8 bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
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
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms
                  </a>
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
