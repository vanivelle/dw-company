"use client";

import React from "react";
import { Hero } from "@/components/Hero/Hero";
import { ServicesGrid } from "@/components/Services/ServicesGrid";
import { About } from "@/components/About/About";
import { ImageGallery } from "@/components/Gallery/ImageGallery";
import { Testimonials } from "@/components/Services/Testimonials";
import { BookingForm } from "@/components/ContactForm/BookingForm";
import { Footer } from "@/components/Services/Footer";
import { smoothScrollTo } from "@/lib/utils";

export default function Home() {
  const handleBookConsultation = () => {
    smoothScrollTo("#contact");
  };

  const handleViewWork = () => {
    smoothScrollTo("#gallery");
  };

  const handleServiceClick = (serviceId: string) => {
    smoothScrollTo("#contact");
  };

  const handleFormSuccess = (data: unknown) => {
    console.log("Form submitted successfully:", data);
  };

  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <Hero
        videoSrc="/videos/chao/video1.mp4"
        logo="/images/logo/logo.png"
        headline="Transform Your Space Into Your Dream Home"
        subheadline="Professional Painting & Carpentry Services in West Hartford, CT"
        ctaPrimary={{
          text: "Get Free Estimate",
          onClick: handleBookConsultation,
        }}
        ctaSecondary={{
          text: "View Our Work",
          onClick: handleViewWork,
        }}
      />

      {/* Services Section */}
      <ServicesGrid onServiceClick={handleServiceClick} />

      {/* About Section */}
      <About />

      {/* Gallery Section */}
      <ImageGallery />

      {/* Testimonials Section */}
      <Testimonials autoPlay={true} autoPlayInterval={5000} />

      {/* Booking Form Section */}
      <BookingForm onSuccess={handleFormSuccess} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
