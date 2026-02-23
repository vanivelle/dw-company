"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/UI/Button";
import { LoadingSpinner } from "@/components/UI/LoadingSpinner";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const bookingFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"),
  service: z
    .enum(["Painting", "Carpentry", "Both"])
    .refine((val) => val, { message: "Please select a service" }),
  address: z.string().min(10, "Please enter your complete address"),
  preferredDate: z.string().refine((date) => {
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  }, "Please select a future date"),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingFormSchema>;

interface BookingFormProps {
  onSuccess?: (data: BookingFormData) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ onSuccess }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsLoading(true);
    setSubmitError(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form submitted:", data);

      // TODO: Send to EmailJS or API
      // const response = await emailjs.send(...)

      setIsSubmitted(true);
      reset();
      onSuccess?.(data);

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
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
