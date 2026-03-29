'use client'

import Link from 'next/link'
import { CheckCircle, Phone, Mail } from 'lucide-react'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white px-4">
      <div className="max-w-2xl w-full text-center py-12">
        <CheckCircle className="w-24 h-24 text-green-600 mx-auto mb-8" />
        
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Thank You!
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          We've received your message and will get back to you within 24 hours.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What Happens Next?
          </h2>
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">We Review Your Request</h3>
                <p className="text-gray-600 text-sm">Our team will carefully review your project details.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">We'll Contact You</h3>
                <p className="text-gray-600 text-sm">Expect a call, email, or SMS within 24 hours to discuss your project.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Free Estimate</h3>
                <p className="text-gray-600 text-sm">We'll provide a detailed, no-obligation estimate for your project.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-3">Need Immediate Assistance?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18607097832"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call (860) 709-7832
            </a>
            <a
              href="mailto:ace.silva64@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold hover:border-green-600 hover:text-green-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>

        <Link
          href="/"
          className="inline-block text-green-600 hover:text-green-700 font-semibold"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
