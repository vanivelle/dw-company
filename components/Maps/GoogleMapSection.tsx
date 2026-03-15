"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export const GoogleMapSection: React.FC = () => {
  const googleMapsUrl =
    "https://www.google.com/maps/place/310+Newington+Rd,+West+Hartford,+CT+06110";
  const embedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2956.6234567890123!2d-72.7456!3d41.7833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7a5e5e5e5e5e5%3A0x1234567890abcdef!2s310%20Newington%20Rd%2C%20West%20Hartford%2C%20CT%2006110!5e0!3m2!1sen!2sus!4v1234567890";

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Find Us on Google Maps
          </h2>
          <p className="text-xl text-gray-600">
            Visit our location in West Hartford, CT
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Map Embed */}
          <motion.div variants={fadeInUp} className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={embedUrl}
              className="w-full"
            ></iframe>
          </motion.div>

          {/* Location Info */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Location
              </h3>
              <p className="text-gray-600 mb-6">
                Visit us at our main office in West Hartford. We serve the entire Connecticut area with professional painting and carpentry services.
              </p>
            </div>

            {/* Address Card */}
            <div className="bg-white border-2 border-green-100 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg text-green-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                  <p className="text-gray-600">
                    310 Newington Rd<br />
                    West Hartford, CT 06110<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Open in Google Maps Button */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl w-full justify-center"
            >
              <MapPin className="w-5 h-5" />
              Open in Google Maps
              <ExternalLink className="w-5 h-5" />
            </a>

            {/* Hours Notice */}
            <p className="text-sm text-gray-500 italic">
              📍 Click the button above to see our location and directions on Google Maps
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

GoogleMapSection.displayName = "GoogleMapSection";
