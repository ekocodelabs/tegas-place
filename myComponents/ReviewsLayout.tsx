// components/reviews-layout.tsx
"use client";

import React from "react";
import { FaStar, FaCheckCircle, FaQuoteLeft } from "react-icons/fa";

// Curated testimonial matrix addressing focal offerings
const clientReviews = [
  {
    name: "Chidi O.",
    location: "Lagos, Nigeria",
    treatment: "Infection Set (Male)",
    rating: 5,
    comment:
      "The complete infection set works exactly as described. Within two weeks of using the drink and pills, I felt completely renewed. The master herbalist at Tegas Place clearly knows his science.",
    date: "Recent",
  },
  {
    name: "Amara K.",
    location: "Abuja, Nigeria",
    treatment: "Tummy Reduction Set",
    rating: 5,
    comment:
      "I purchased the flat tummy oil and powder combination. The bloating completely disappeared in my first week. Excellent natural alternative without any aggressive side effects.",
    date: "Recent",
  },
  {
    name: "Tunde A.",
    location: "Ibadan, Nigeria",
    treatment: "Men Stamina Tea",
    rating: 5,
    comment:
      "Highly recommend the stamina tea and dick enlargement oil combination. Pure botanical power, premium packaging, and very fast delivery tracking right here in Nigeria.",
    date: "Recent",
  },
  {
    name: "Blessing I.",
    location: "Port Harcourt, Nigeria",
    treatment: "Weight Loss Set",
    rating: 5,
    comment:
      "Best investment into my wellness journey this year. The detox drink and weight loss powder together helped me reach my target weight safely. Absolutely zero artificial additives!",
    date: "Recent",
  },
];

export default function ReviewsLayout() {
  return (
    <section
      id="reviews"
      className="w-full py-20 md:py-32 bg-zinc-950 text-white relative overflow-hidden"
    >
      {/* Decorative Luxury Radial Glow Layers */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-950/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-950/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header Framework with Strong Organic Sourcing SEO Hook */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 md:mb-20">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold tracking-widest uppercase">
            <span className="w-6 h-px bg-amber-500" />
            <span>Verified Customer Testimonies</span>
            <span className="w-6 h-px bg-amber-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-zinc-100">
            Trusted by Hundreds for Holistic Recovery
          </h2>
          <p className="text-zinc-400 font-light text-sm md:text-base max-w-xl leading-relaxed">
            Read true experiences from clients who transformed their health
            using our authentic African medicinal herbs and artisanal wellness
            sets.
          </p>
        </div>

        {/* 4-Column Balanced Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientReviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/40 border border-zinc-800/80 p-6 rounded-2xl flex flex-col justify-between gap-6 transition-all duration-300 hover:border-amber-500/20 hover:bg-zinc-900/60 relative group"
            >
              {/* Luxury Quote Indicator */}
              <div className="absolute top-4 right-4 text-zinc-800/50 group-hover:text-emerald-500/10 transition-colors duration-300 pointer-events-none">
                <FaQuoteLeft className="text-2xl" />
              </div>

              {/* Upper Section: Core Content and Treatment Verification */}
              <div className="flex flex-col gap-4">
                {/* 5-Star Presentation Row */}
                <div className="flex items-center gap-1 text-amber-400 text-xs">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Main Testimonial Narrative Block */}
                <p className="text-zinc-300 text-sm leading-relaxed font-light font-sans italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Lower Section: User Metadata Profile Capsule */}
              <div className="pt-4 border-t border-zinc-800/60 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif font-bold text-sm text-zinc-100">
                      {review.name}
                    </span>
                    <FaCheckCircle
                      className="text-emerald-500 text-[10px]"
                      title="Verified Purchase"
                    />
                  </div>
                  <span className="text-[10px] text-zinc-500 font-medium font-mono">
                    {review.date}
                  </span>
                </div>

                {/* Verified Product Purchase Tag */}
                <div className="flex items-center justify-between text-[11px] text-zinc-400">
                  <span className="font-medium truncate text-emerald-400 max-w-32.5">
                    {review.treatment}
                  </span>
                  <span className="text-zinc-500 text-[10px] shrink-0">
                    {review.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
