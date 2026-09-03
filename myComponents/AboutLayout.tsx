// components/about-section.tsx
"use client";

import React from "react";
import Image from "next/image";
import { FaGraduationCap, FaSeedling, FaAward } from "react-icons/fa";

export default function AboutLayout() {
  return (
    <section
      id="about"
      className="relative w-full py-20 md:py-32 bg-zinc-950 text-white overflow-hidden"
    >
      {/* Subtle background glow mimicking organic luxury */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* ==================== LEFT COLUMN: MULTI-VIDEO SHOWCASE ==================== */}
        <div className="lg:col-span-6 grid grid-cols-12 gap-4 relative">
          {/* Video 1: Primary Cinematic Video (Master Herbalist & Consultations) */}
          <div className="col-span-8 relative aspect-3/4 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl group">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/images/aboutimage.jpg"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
              <source src="/images/aboutvid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Dark glassmorphism framing layer */}
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent" />
          </div>

          {/* Video 2: Secondary Offset Video (Artisanal Spice Grinding & Sourcing) */}
          <div className="col-span-4 relative aspect-9/16 rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl self-end mb-8 group">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/images/aboutimage.jpg"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
              <source src="/images/herbalbanner2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-emerald-950/20 mix-blend-multiply" />
          </div>

          {/* Luxury Floating Leaf Branding Stamp */}
          <div className="absolute -bottom-6 left-6 z-10 bg-amber-500 text-zinc-950 p-4 rounded-2xl shadow-xl hidden sm:flex items-center gap-3 border border-amber-400">
            <FaSeedling className="text-2xl animate-pulse" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider leading-none">
                100% Organic
              </p>
              <p className="text-sm font-extrabold font-serif">
                Ethically Sourced
              </p>
            </div>
          </div>
        </div>

        {/* ==================== RIGHT COLUMN: SEO TEXT CONTENT ==================== */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* Section Sub-heading */}
          <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold tracking-widest uppercase">
            <span className="w-8 h-px bg-amber-500" />
            <span>The Heritage of Tegas Place</span>
          </div>

          {/* Core SEO Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight leading-tight text-zinc-100">
            Pioneering Traditional Holistic Healing Practitioners in Nigeria
          </h2>

          {/* Narrative Content infused with Keywords */}
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light">
            At <strong className="text-white font-medium">Tegas Place</strong>,
            we bridge ancient African therapeutic wisdom with modern clean
            wellness standards. Led by our certified master herbalist, we
            specialize in curating potent{" "}
            <span className="text-amber-400 font-medium">
              certified organic herbs in Nigeria
            </span>{" "}
            and proprietary{" "}
            <span className="text-emerald-400 font-medium">
              authentic African spice blends in Lagos
            </span>{" "}
            designed to heal, nourish, and revitalize.
          </p>

          <p className="text-zinc-400 text-base leading-relaxed font-light">
            Every batch of our medicinal infusions, roots, and gourmet spices is
            globally sourced but proudly hand-milled locally. We produce natural
            immune boosters in West Africa free from synthetic preservatives,
            MSG, or artificial fillers.
          </p>

          {/* Trust Pillars / Authority Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-6 border-t border-zinc-900">
            {/* Pillar 1: Certified Clinical Expertise */}
            <div className="flex gap-4 items-start p-3 rounded-xl hover:bg-zinc-900/50 transition-colors duration-300">
              <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-400 shrink-0">
                <FaGraduationCap className="text-xl" />
              </div>
              <div>
                <h4 className="text-zinc-200 font-semibold text-base">
                  Master Naturopathy
                </h4>
                <p className="text-zinc-500 text-xs mt-1 leading-snug">
                  Expert formulations grounded in clinical botanical science.
                </p>
              </div>
            </div>

            {/* Pillar 2: Premium Sourcing */}
            <div className="flex gap-4 items-start p-3 rounded-xl hover:bg-zinc-900/50 transition-colors duration-300">
              <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20 text-amber-400 shrink-0">
                <FaAward className="text-xl" />
              </div>
              <div>
                <h4 className="text-zinc-200 font-semibold text-base">
                  Artisanal Quality
                </h4>
                <p className="text-zinc-500 text-xs mt-1 leading-snug">
                  100% pure, traceable raw materials with rich flavor profiles.
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Background Asset Reference Requirement */}
          <div className="absolute right-0 bottom-0 opacity-5 hidden xl:block pointer-events-none">
            <Image
              src="/images/aboutimage.jpg" // Monochromatic herb sketch inside public/images
              alt="Herbal Illustration"
              width={350}
              height={350}
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
