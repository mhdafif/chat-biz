"use client"

import Link from "next/link"
import { MessageSquare, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses",
      price: "$29",
      period: "/month",
      features: [
        "Up to 1,000 conversations/month",
        "2 team members",
        "Basic automation",
        "Single channel support",
        "Email support",
        "Basic analytics",
      ],
      cta: "Start Free Trial",
      highlighted: false,
    },
    {
      name: "Professional",
      description: "For growing businesses",
      price: "$79",
      period: "/month",
      features: [
        "Up to 10,000 conversations/month",
        "10 team members",
        "Advanced automation",
        "Multi-channel support (up to 5)",
        "Priority email support",
        "Advanced analytics",
        "Custom workflows",
        "API access",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "For large-scale operations",
      price: "Custom",
      period: "",
      features: [
        "Unlimited conversations",
        "Unlimited team members",
        "Custom automation",
        "All channels supported",
        "24/7 phone & email support",
        "Custom analytics",
        "Dedicated account manager",
        "Custom integrations",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ]

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
            <Link href="/features" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Features
            </Link>
            <Link href="/pricing" className="text-blue-600 font-medium text-sm">
              Pricing
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4 text-balance">Simple, Transparent Pricing</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
          Choose the perfect plan for your business. All plans include a 14-day free trial.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 transition-all ${
                plan.highlighted
                  ? "bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-2xl scale-105"
                  : "bg-white border border-gray-200 text-gray-900"
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={plan.highlighted ? "text-blue-100 mb-6" : "text-gray-600 mb-6"}>{plan.description}</p>
              <div className="mb-8">
                <span className="text-5xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className={plan.highlighted ? "text-blue-100" : "text-gray-600"}>{plan.period}</span>
                )}
              </div>
              <Button
                className={`w-full rounded-lg font-semibold py-2 mb-8 ${
                  plan.highlighted
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {plan.cta}
              </Button>
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-white" : "text-blue-600"}`}
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can I change plans anytime?</h3>
              <p className="text-gray-600">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Is there a long-term contract?</h3>
              <p className="text-gray-600">
                No, we operate on a month-to-month basis. You can cancel anytime without penalties.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, and we also offer invoice billing for Enterprise customers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Do you offer discounts for annual billing?</h3>
              <p className="text-gray-600">
                Yes! Save 20% when you switch to annual billing. Contact our sales team for more details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 text-balance">Ready to Get Started?</h2>
          <p className="text-blue-100 text-lg mb-8">Start with a free 14-day trial. No credit card required.</p>
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
