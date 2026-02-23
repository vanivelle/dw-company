"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/utils";
import { COMPANY_INFO } from "@/lib/constants";
import { pulse } from "@/lib/animations";

interface WhatsAppButtonProps {
  message?: string;
  position?: "bottom-right" | "bottom-left";
  customPhoneNumber?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message = "Hi! I'm interested in booking a consultation. Can you help me?",
  position = "bottom-right",
  customPhoneNumber = COMPANY_INFO.whatsapp,
}) => {
  const whatsAppLink = generateWhatsAppLink(customPhoneNumber, message);

  const positionClasses = {
    "bottom-right": "bottom-8 right-8",
    "bottom-left": "bottom-8 left-8",
  };

  return (
    <motion.a
      href={whatsAppLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed ${positionClasses[position]} z-40 group`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulsing Background */}
      <motion.div
        className="absolute inset-0 bg-green-500 rounded-full"
        variants={pulse}
        initial="animate"
        animate="animate"
        style={{ opacity: 0.3 }}
      />

      {/* Button */}
      <motion.div
        className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-2xl text-white hover:shadow-3xl transition-all"
        whileHover={{ y: -5 }}
      >
        <MessageCircle className="w-7 h-7" />

        {/* Tooltip */}
        <motion.div
          className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
        >
          Chat with us on WhatsApp
        </motion.div>
      </motion.div>
    </motion.a>
  );
};

WhatsAppButton.displayName = "WhatsAppButton";
