"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface BookingFormProps {
  onSuccess?: (data: unknown) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ onSuccess }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    address: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao enviar email");
      }

      // Send SMS notification in parallel (non-blocking)
      fetch("/api/send-sms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).catch((err) => {
        // SMS failure doesn't affect the form submission
        console.error("SMS notification failed:", err);
      });

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        address: "",
        message: "",
      });

      console.log("Form submitted successfully:", data);

      // Call onSuccess callback if provided
      if (onSuccess) {
        onSuccess(data);
      }

      // Redirect to thank you page after 2 seconds
      setTimeout(() => {
        router.push("/thank-you");
      }, 2000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Erro desconhecido"
      );
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
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

        {/* Form - Using custom API endpoint */}
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
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.phone}
              onChange={handleChange}
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
              value={formData.service}
              onChange={handleChange}
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
              value={formData.address}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all resize-none"
              rows={4}
            />
          </motion.div>

          {/* Status Messages */}
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-lg bg-green-50 border-2 border-green-200"
            >
              <p className="text-green-700 font-semibold">
                ✓ Email enviado com sucesso! Em breve entraremos em contato.
              </p>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-lg bg-red-50 border-2 border-red-200"
            >
              <p className="text-red-700 font-semibold">
                ✗ Erro ao enviar: {errorMessage}
              </p>
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.div variants={fadeInUp}>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? "Enviando..." : "Send Message"}
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
