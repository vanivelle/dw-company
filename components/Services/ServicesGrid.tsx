"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Hammer,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Card } from "@/components/UI/Card";
import { Button } from "@/components/UI/Button";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  onLearnMore?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  onLearnMore,
}) => {
  return (
    <motion.div variants={staggerItem}>
      <Card variant="glass" hover className="h-full">
        <div className="space-y-4">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center text-white shadow-lg">
              {icon}
            </div>
          </motion.div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>

          {/* Description */}
          <p className="text-gray-600">{description}</p>

          {/* Features */}
          <div className="space-y-2">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            variant="outline"
            size="md"
            onClick={onLearnMore}
            className="w-full mt-4"
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

interface ServicesGridProps {
  onServiceClick?: (serviceId: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  onServiceClick,
}) => {
  const services = [
    {
      id: "interiorPainting",
      icon: <Palette className="w-8 h-8" />,
      title: "Interior Painting",
      description: "Professional interior painting for homes and offices",
      features: [
        "High-quality finishes",
        "Free Color Consultation",
        "Clean & Efficient",
      ],
    },
    {
      id: "exteriorPainting",
      icon: <Palette className="w-8 h-8" />,
      title: "Exterior Painting",
      description: "Weather-resistant exterior painting",
      features: [
        "Enhance curb appeal",
        "Premium Quality Paint",
        "Professional Finish",
      ],
    },
    {
      id: "commercialPainting",
      icon: <Palette className="w-8 h-8" />,
      title: "Commercial Painting",
      description: "Professional painting services for businesses",
      features: [
        "Minimal disruption",
        "Expert finish",
        "Timely completion",
      ],
    },
    {
      id: "customCarpentry",
      icon: <Hammer className="w-8 h-8" />,
      title: "Custom Carpentry",
      description: "Tailored woodwork solutions for your space",
      features: [
        "Built-ins & Shelving",
        "Custom furniture",
        "Professional Craftsmanship",
      ],
    },
    {
      id: "deckInstallation",
      icon: <Hammer className="w-8 h-8" />,
      title: "Deck Installation & Repair",
      description: "Beautiful outdoor decks built to last",
      features: [
        "Expert design",
        "Quality materials",
        "Professional installation",
      ],
    },
    {
      id: "floorInstallation",
      icon: <Hammer className="w-8 h-8" />,
      title: "Floor Installation",
      description: "Professional hardwood and laminate flooring",
      features: [
        "Precise installation",
        "Attention to detail",
        "Quality materials",
      ],
    },
    {
      id: "bathroomRemodeling",
      icon: <Hammer className="w-8 h-8" />,
      title: "Bathroom Remodeling",
      description: "Complete bathroom renovations",
      features: [
        "Modern designs",
        "Quality craftsmanship",
        "Professional finish",
      ],
    },
    {
      id: "kitchenRemodeling",
      icon: <Hammer className="w-8 h-8" />,
      title: "Kitchen Remodeling",
      description: "Transform your kitchen into your dream space",
      features: [
        "Custom cabinets",
        "Quality countertops",
        "Expert design",
      ],
    },
    {
      id: "drywallRepair",
      icon: <Hammer className="w-8 h-8" />,
      title: "Drywall Repair",
      description: "Expert drywall installation and repair",
      features: [
        "Seamless finish",
        "Professional installation",
        "Expert repair",
      ],
    },
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-gray-50 to-white">
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
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional painting and carpentry solutions tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              onLearnMore={() => onServiceClick?.(service.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

ServicesGrid.displayName = "ServicesGrid";
