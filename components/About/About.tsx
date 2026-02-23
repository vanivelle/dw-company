'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'
import { staggerContainer, staggerItem } from '@/lib/animations'

export const About: React.FC = () => {
  const differentials = [
    'Licensed & Insured professionals',
    `${COMPANY_INFO.yearsExperience} years of hands-on experience`,
    'Specialized in residential projects',
    'Free estimates with no obligation',
    'Quality materials and expert techniques',
    'Serving West Hartford, CT and region',
    'Commitment to customer satisfaction',
    'Attention to every detail',
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bringing quality craftsmanship to every project
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Text Content */}
          <motion.div variants={staggerItem} className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              At DW Company, we bring {COMPANY_INFO.yearsExperience} years of professional experience to every project in West Hartford and surrounding areas. What started as a passion for quality craftsmanship has grown into a trusted name in residential painting and carpentry.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Our team specializes in transforming houses into dream homes through meticulous attention to detail and dedication to customer satisfaction. As a licensed and insured company, we take pride in delivering professional results that exceed expectations.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're looking to refresh your home's interior with a fresh coat of paint, install beautiful hardwood floors, remodel your bathroom, or build a custom deck, we have the expertise to bring your vision to life.
            </p>
          </motion.div>

          {/* Differentials */}
          <motion.div variants={staggerItem} className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Differentials
            </h3>
            {differentials.map((differential, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{differential}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

About.displayName = 'About'
