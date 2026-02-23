'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Phone, Calendar } from 'lucide-react'

interface HeroProps {
  videoSrc?: string
  logo?: string
  headline?: string
  subheadline?: string
  ctaPrimary?: {
    text: string
    onClick: () => void
  }
  ctaSecondary?: {
    text: string
    onClick: () => void
  }
}

export function Hero({
  videoSrc = "/videos/chao/video1.mp4",
  logo,
  headline = "Transform Your Space Into Your Dream Home",
  subheadline = "Professional Painting & Carpentry Services",
  ctaPrimary,
  ctaSecondary,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* IMAGE BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/carpentry-bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
     </div>

      {/* CONTEÚDO */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
        
        {/* LOGO */}
        {logo && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Image
              src={logo}
              alt="DW Company Logo"
              width={200}
              height={80}
              className="mx-auto drop-shadow-2xl"
              priority
            />
          </motion.div>
        )}

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
        >
          {headline}
        </motion.h1>

        {/* SUBHEADLINE - CORRIGIDO (BRANCO FORTE) */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-3xl font-bold text-white mb-12 drop-shadow-lg max-w-3xl mx-auto"
        >
          {subheadline}
        </motion.p>

        {/* FEATURES RÁPIDAS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mb-12 text-white"
        >
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full">
            <span className="text-2xl">✓</span>
            <span className="font-semibold">Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full">
            <span className="text-2xl">✓</span>
            <span className="font-semibold">6 Years of Excellence</span>
          </div>
        </motion.div>

        {/* CTAs */}
        {(ctaPrimary || ctaSecondary) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* CTA PRIMÁRIO */}
            {ctaPrimary && (
              <button
                onClick={ctaPrimary.onClick}
                className="group relative px-8 py-5 bg-yellow-400 text-gray-900 rounded-xl font-bold text-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Calendar className="w-6 h-6" />
                  {ctaPrimary.text}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            )}

            {/* CTA SECUNDÁRIO */}
            {ctaSecondary && (
              <button
                onClick={ctaSecondary.onClick}
                className="px-8 py-5 bg-white/10 backdrop-blur-md text-white border-2 border-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-6 h-6" />
                {ctaSecondary.text}
              </button>
            )}
          </motion.div>
        )}

        {/* SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
