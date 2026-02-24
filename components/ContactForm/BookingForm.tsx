"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface BookingFormProps {
  onSuccess?: (data: any) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ onSuccess }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(null);

    try {
      const formData = new FormData(e.currentTarget);
      
      const response = await fetch("https://formspree.io/f/xreaovzp", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);
      const responseData = await response.json();
      console.log("Response data:", responseData);

      if (response.ok) {
        setIsSubmitted(true);
        e.currentTarget.reset();
        onSuccess?.(Object.fromEntries(formData));
        
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error(responseData.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitError(
        error instanceof Error ? error.message : "An error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

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

        {/* Success Message */}
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-8 p-4 bg-green-50 border-2 border-green-500 rounded-lg flex items-center gap-3"
          >
            <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-green-900">
                Thank you for your submission!
              </p>
              <p className="text-green-800">
                We will contact you shortly to confirm your consultation. Check your email for details.
              </p>
            </div>
          </motion.div>
        )}

        {/* Error Message */}
        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-8 p-4 bg-red-50 border-2 border-red-500 rounded-lg flex items-center gap-3"
          >
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-red-900">Error</p>
              <p className="text-red-800">{submitError}</p>
            </div>
          </motion.div>
        )}

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
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
              name="_replyto"
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

          {/* Hidden Fields */}
          <input type="hidden" name="_subject" value="New Inquiry from DW Company Website" />

          {/* Submit Button */}
          <motion.div variants={fadeInUp}>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending..." : "Send Message"}
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

        {/* Success Message */}
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-8 p-4 bg-green-50 border-2 border-green-500 rounded-lg flex items-center gap-3"
          >
            <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-green-900">
                Thank you for your submission!
              </p>
              <p className="text-green-800">
                We will contact you shortly to confirm your consultation.
              </p>
            </div>
          </motion.div>
        )}

        {/* Error Message */}
        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-8 p-4 bg-red-50 border-2 border-red-500 rounded-lg flex items-center gap-3"
          >
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
            <div>
              <p className="font-semibold text-red-900">Error</p>
              <p className="text-red-800">{submitError}</p>
            </div>
          </motion.div>
        )}

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
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
              {...register("name")}
              type="text"
              placeholder="Your full name"
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                errors.name
                  ? "border-red-500 focus:ring-red-100"
                  : "border-gray-200 focus:border-green-600"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </motion.div>

          {/* Email */}
          <motion.div variants={fadeInUp}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="your@email.com"
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                errors.email
                  ? "border-red-500 focus:ring-red-100"
                  : "border-gray-200 focus:border-green-600"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </motion.div>

          {/* Phone */}
          <motion.div variants={fadeInUp}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              {...register("phone")}
              type="tel"
              placeholder="+1 (555) 123-4567"
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                errors.phone
                  ? "border-red-500 focus:ring-red-100"
                  : "border-gray-200 focus:border-green-600"
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </motion.div>

          {/* Service */}
          <motion.div variants={fadeInUp}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Service Type *
            </label>
            <select
              {...register("service")}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                errors.service
                  ? "border-red-500 focus:ring-red-100"
                  : "border-gray-200 focus:border-green-600"
              }`}
            >
              <option value="">Select a service</option>
              <option value="Painting">Painting</option>
              <option value="Carpentry">Carpentry</option>
              <option value="Both">Both Services</option>
            </select>
            {errors.service && (
              <p className="mt-1 text-sm text-red-600">
                {errors.service.message}
              </p>
            )}
          </motion.div>

          {/* Address */}
          <motion.div variants={fadeInUp}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Property Address *
            </label>
            <input
              {...register("address")}
              type="text"
              placeholder="123 Main St, City, State 12345"
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                errors.address
                  ? "border-red-500 focus:ring-red-100"
                  : "border-gray-200 focus:border-green-600"
              }`}
            />
            {errors.address && (
              <p className="mt-1 text-sm text-red-600">
                {errors.address.message}
              </p>
            )}
          </motion.div>

          {/* Preferred Date */}
          <motion.div variants={fadeInUp}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Preferred Consultation Date *
            </label>
            <input
              {...register("preferredDate")}
              type="date"
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                errors.preferredDate
                  ? "border-red-500 focus:ring-red-100"
                  : "border-gray-200 focus:border-green-600"
              }`}
            />
            {errors.preferredDate && (
              <p className="mt-1 text-sm text-red-600">
                {errors.preferredDate.message}
              </p>
            )}
          </motion.div>

          {/* Message */}
          <motion.div variants={fadeInUp}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Additional Message
            </label>
            <textarea
              {...register("message")}
              placeholder="Tell us more about your project..."
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 transition-all"
              rows={4}
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            variants={fadeInUp}
            className="flex gap-4 pt-4"
          >
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isLoading}
              className="flex-1"
            >
              {isLoading ? (
                <>
                  <LoadingSpinner size="sm" color="white" className="mr-2" />
                  Submitting...
                </>
              ) : (
                "Book Consultation"
              )}
            </Button>
          </motion.div>

          <p className="text-sm text-gray-600 text-center">
            We'll contact you within 24 hours to confirm your consultation.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

BookingForm.displayName = "BookingForm";
