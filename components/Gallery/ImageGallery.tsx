'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

type Category = 'all' | 'painting' | 'floors' | 'stairs' | 'bathroom'

interface GalleryImage {
  id: number
  category: Category
  image: string
  title: string
}

const images: GalleryImage[] = [
  { id: 1, category: 'painting', image: '/images/projects/painting/interior-painting-white-walls-1.jpg', title: 'Interior Painting' },
  { id: 2, category: 'floors', image: '/images/projects/floor-installation/floor-installation-basement-1.jpg', title: 'Floor Refinishing' },
  { id: 3, category: 'stairs', image: '/images/projects/carpentry/wooden-stairs-with-railings-1.jpg', title: 'Staircase Renovation' },
  { id: 4, category: 'stairs', image: '/images/projects/carpentry/wooden-door-closet-1.jpg', title: 'Custom Carpentry' },
  { id: 5, category: 'floors', image: '/images/projects/basements/basement-finished-room-1.jpg', title: 'Finished Basement' },
  { id: 6, category: 'floors', image: '/images/projects/basements/basement-laundry-finished-1.jpg', title: 'Laundry Room' },
  { id: 7, category: 'bathroom', image: '/images/projects/bathroom-remodel/bathroom-remodel-marble-modern-1.jpg', title: 'Bathroom Remodel' },
  { id: 8, category: 'floors', image: '/images/projects/basements/basement-storage-closet-1.jpg', title: 'Storage Closet' },
]

export function ImageGallery() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

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
                  src={img.image}
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

        {/* MODAL - IMAGEM SIMPLES */}
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
                className="relative w-full max-w-3xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* BOTÃO FECHAR */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
                >
                  <X className="w-8 h-8" />
                </button>

                {/* IMAGEM */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* TÍTULO */}
                <div className="mt-4 text-center">
                  <h3 className="text-white text-xl font-bold">{selectedImage.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
