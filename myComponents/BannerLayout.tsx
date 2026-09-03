// components/banner-layout.tsx
"use client";

import React from "react";
import Image from "next/image";
import { FaWhatsapp, FaLeaf } from "react-icons/fa";
import { Button } from "@/components/ui/button"; // Standard shadcn path

export default function BannerLayout() {
  // Encoded message for direct professional engagement over WhatsApp
  const whatsappMessage = encodeURIComponent(
    "Hello Tegas Place, I would like to make an inquiry about your premium spices and master herbalist consultations.",
  );
  const whatsappUrl = `https://wa.me{whatsappMessage}`; // Replace XXXXXXXXXX with your Nigerian phone number

  return (
    <section className="relative w-full h-[85vh] md:h-screen overflow-hidden bg-emerald-950 flex items-center justify-center">
      {/* 1. Background Video Layer with Smooth Fallback Poster */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/banner.jpg" // High-end placeholder image from public/images
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/images/herbalbanner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 2. Dark Premium Gradient Overlay for Readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-emerald-950/95 via-emerald-950/70 to-transparent z-10" />

      {/* 3. Luxury Decorative Pattern Elements */}
      <div className="absolute top-10 right-10 z-10 opacity-10 animate-pulse hidden md:block">
        <Image
          src="/images/leaf-pattern.png" // Decorative pattern assets from public/images
          alt="Tegas Place Pattern"
          width={180}
          height={180}
          className="object-contain"
        />
      </div>

      {/* 4. Responsive Content Container */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center flex flex-col items-center gap-6 md:gap-8 mt-12">
        {/* Elite Subtle Badge */}
        <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full text-amber-400 text-xs md:sm mt-25 font-medium tracking-wide uppercase">
          <FaLeaf className="text-amber-500 animate-spin-slow" />
          <span>Nigeria's Foremost Master Herbalist & Spice Merchant</span>
        </div>

        {/* High-End SEO Rich H1 Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.15] md:leading-[1.1]">
          Elevate Your Health & Culinary Experience with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
            Tegas Place
          </span>
        </h1>

        {/* Conversational & Localized SEO Supporting Paragraph */}
        <p className="text-zinc-300 text-base md:text-xl max-w-2xl font-light leading-relaxed">
          Discover premium, 100% natural organic Nigerian spices and bespoke
          holistic wellness remedies crafted meticulously by our certified
          master herbalist.
        </p>

        {/* Actionable Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
          {/* WhatsApp Direct Integration Button using Shadcn Token Styling */}
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-semibold px-8 py-6 text-base md:text-lg shadow-lg shadow-emerald-900/30 transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto flex items-center justify-center gap-3"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-xl md:text-2xl" />
              <span>Order on WhatsApp</span>
            </a>
          </Button>

          {/* Luxury Outline Secondary Action Button */}
          <Button
            variant="outline"
            size="lg"
            className="border-amber-500/50 hover:border-amber-500 text-amber-400 hover:text-amber-300 bg-transparent hover:bg-amber-500/10 rounded-full font-semibold px-8 py-6 text-base md:text-lg transition-all duration-300 w-full sm:w-auto"
          >
            Explore Remedies
          </Button>
        </div>
      </div>

      {/* 5. Minimalistic Bottom Border Gradient Transition */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent z-20" />
    </section>
  );
}
