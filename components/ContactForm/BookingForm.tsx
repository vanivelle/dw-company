"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export const BookingForm: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom max-w-2xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Book Your Free Consultation
          </h2>
          <p className="text-xl text-gray-600">
            Schedule a free consultation with our experts today
          </p>
        </motion.div>

        {/* Form - Using Formspree native HTML form submission */}
        <motion.form
          action="https://formspree.io/f/xreaovzp"
          method="POST"
          className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Name */}
          <motion.div variants={fadeInUp}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all"
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={fadeInUp}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all"
            />
          </motion.div>

          {/* Phone */}
          <motion.div variants={fadeInUp}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+1 (860) 123-4567"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all"
            />
          </motion.div>

          {/* Service */}
          <motion.div variants={fadeInUp}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Service Interested In
            </label>
            <select
              name="service"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all"
            >
              <option value="">Select a service...</option>
              <option value="Interior Painting">Interior Painting</option>
              <option value="Exterior Painting">Exterior Painting</option>
              <option value="Commercial Painting">Commercial Painting</option>
              <option value="Custom Carpentry">Custom Carpentry</option>
              <option value="Deck Installation">Deck Installation & Repair</option>
              <option value="Floor Installation">Floor Installation</option>
              <option value="Bathroom Remodeling">Bathroom Remodeling</option>
              <option value="Kitchen Remodeling">Kitchen Remodeling</option>
              <option value="Drywall Repair">Drywall Repair</option>
              <option value="Other">Other</option>
            </select>
          </motion.div>

          {/* Address */}
          <motion.div variants={fadeInUp}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Property Address *
            </label>
            <input
              type="text"
              name="address"
              required
              placeholder="123 Main St, West Hartford, CT 06110"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all"
            />
          </motion.div>

          {/* Message */}
          <motion.div variants={fadeInUp}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Project Details *
            </label>
            <textarea
              name="message"
              required
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all resize-none"
              rows={4}
            />
          </motion.div>

          {/* Hidden Fields for Formspree */}
          <input type="hidden" name="_subject" value="New Inquiry from DW Company Website" />
          <input type="hidden" name="_captcha" value="false" />

          {/* Submit Button */}
          <motion.div variants={fadeInUp}>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </motion.div>

          <p className="text-sm text-gray-600 text-center">
            We'll respond within 24 hours. For immediate assistance, call{" "}
            <a href="tel:+18607097832" className="text-green-600 font-semibold hover:underline">
              (860) 709-7832
            </a>
          </p>
        </motion.form>
      </div>
    </section>
  );
};

BookingForm.displayName = "BookingForm";
