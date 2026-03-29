'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

type Category = 'all' | 'painting' | 'floors' | 'stairs' | 'bathroom'

interface GalleryImage {
  id: number
  category: Category
  before: string
  after: string
  title: string
}

const images: GalleryImage[] = [
  { id: 1, category: 'painting', before: '/images/projects/painting/interior-painting-white-walls-1.jpg', after: '/images/projects/painting/interior-painting-white-walls-1.jpg', title: 'Interior Painting' },
  { id: 2, category: 'floors', before: '/images/projects/floor-installation/floor-installation-basement-1.jpg', after: '/images/projects/floor-installation/floor-installation-basement-1.jpg', title: 'Floor Refinishing' },
  { id: 3, category: 'stairs', before: '/images/projects/carpentry/wooden-stairs-with-railings-1.jpg', after: '/images/projects/carpentry/wooden-stairs-with-railings-1.jpg', title: 'Staircase Renovation' },
  { id: 4, category: 'stairs', before: '/images/projects/carpentry/wooden-door-closet-1.jpg', after: '/images/projects/carpentry/wooden-door-closet-1.jpg', title: 'Custom Carpentry' },
  { id: 5, category: 'floors', before: '/images/projects/basements/basement-finished-room-1.jpg', after: '/images/projects/basements/basement-finished-room-1.jpg', title: 'Finished Basement' },
  { id: 6, category: 'floors', before: '/images/projects/basements/basement-laundry-finished-1.jpg', after: '/images/projects/basements/basement-laundry-finished-1.jpg', title: 'Laundry Room' },
  { id: 7, category: 'all', before: '/images/projects/bathroom-remodel/bathroom-remodel-marble-modern-1.jpg', after: '/images/projects/bathroom-remodel/bathroom-remodel-marble-modern-1.jpg', title: 'Bathroom Remodel' },
  { id: 8, category: 'floors', before: '/images/projects/basements/basement-storage-closet-1.jpg', after: '/images/projects/basements/basement-storage-closet-1.jpg', title: 'Storage Closet' },
]

export function ImageGallery() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [sliderPosition, setSliderPosition] = useState(50)

  // FILTRAR IMAGENS - SEMPRE RETORNA ARRAY (NUNCA VAZIO)
  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory)

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            See the transformation we bring to every project
          </p>
        </motion.div>

        {/* FILTROS - SEM BUGS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { key: 'all', label: 'All Projects' },
            { key: 'painting', label: 'Painting' },
            { key: 'floors', label: 'Floors' },
            { key: 'stairs', label: 'Stairs' },
            { key: 'bathroom', label: 'Bathroom' },
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key as Category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === cat.key
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* GRID DE IMAGENS - SEM ZOOM EXAGERADO */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedImage(img)}
                className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg cursor-pointer group"
              >
                {/* HOVER SUAVE - SEM ZOOM EXCESSIVO */}
                <Image
                  src={img.after}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* OVERLAY COM TÍTULO */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {img.title}
                    </h3>
                    <p className="text-white/90 text-sm">Click to view details</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* MODAL - BEFORE/AFTER SLIDER */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* BOTÃO FECHAR */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>

                {/* BEFORE/AFTER COMPARISON */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  {/* BEFORE IMAGE */}
                  <Image
                    src={selectedImage.before}
                    alt="Before"
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* AFTER IMAGE - COM CLIP PATH */}
                  <div
                    className="absolute inset-0"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                  >
                    <Image
                      src={selectedImage.after}
                      alt="After"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* SLIDER */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                      <div className="flex gap-1">
                        <div className="w-1 h-4 bg-gray-400 rounded"></div>
                        <div className="w-1 h-4 bg-gray-400 rounded"></div>
                      </div>
                    </div>
                  </div>

                  {/* INPUT RANGE */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={(e) => setSliderPosition(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                  />

                  {/* LABELS */}
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                    <p className="text-sm font-semibold">BEFORE</p>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                    <p className="text-sm font-semibold">AFTER</p>
                  </div>
                </div>

                {/* TÍTULO DO PROJETO */}
                <div className="mt-6 text-center">
                  <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
