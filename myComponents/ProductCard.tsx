"use client";

import React from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button"; // Standard shadcn path

interface ProductCardProps {
  imagePath: string;
  title: string;
  price: number;
  formattedPriceString: string; // e.g., "15k" for display fluidity
  category: string;
}

export default function ProductCard({
  imagePath,
  title,
  price,
  formattedPriceString,
  category,
}: ProductCardProps) {
  // Encoded messaging for clean conversion workflow
  const whatsappMessage = encodeURIComponent(
    `Hello Tegas Place, I am interested in purchasing your premium "${title}" priced at ₦${price.toLocaleString()}. Please let me know how to proceed with payment and delivery.`,
  );
  const whatsappUrl = `https://wa.me{whatsappMessage}`; // Replace with actual WhatsApp configuration number

  return (
    <div className="group relative bg-zinc-900/60 border border-zinc-800/80 rounded-2xl overflow-hidden transition-all duration-300 hover:border-amber-500/40 hover:shadow-xl hover:shadow-emerald-950/20 flex flex-col h-full">
      {/* Premium Image Framework container */}
      <div className="relative aspect-square w-full overflow-hidden bg-zinc-950">
        <Image
          src={imagePath}
          alt={`Tegas Place Premium ${title} - Organic Holistic Remedy Nigeria`} // Image tag utilizing dynamic semantic SEO properties
          fill
          sizes="(max-w-7xl) 25vw, (max-w-md) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={false}
        />
        {/* Subtle high-end luxury dark linear gradient mask */}
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Metadata / Content Block */}
      <div className="p-5 flex flex-col grow justify-between gap-4">
        <div>
          {/* Subtle Category Badge Tagging */}
          <span className="text-[10px] tracking-widest font-bold uppercase text-emerald-400 block mb-1">
            {category}
          </span>
          {/* Title */}
          <h3 className="text-zinc-100 font-serif font-semibold text-lg md:text-xl line-clamp-1 group-hover:text-amber-400 transition-colors duration-300">
            {title}
          </h3>
        </div>

        {/* Action Layer with Price & Interaction triggers */}
        <div className="flex items-center justify-between gap-2 pt-2 border-t border-zinc-800/50">
          <div className="flex flex-col">
            <span className="text-zinc-500 text-[10px] uppercase font-medium tracking-wider leading-none">
              Price
            </span>
            <span className="text-xl font-bold font-sans text-white mt-1">
              ₦{formattedPriceString}
            </span>
          </div>

          {/* Quick Order Component trigger matching shadcn style */}
          <Button
            size="sm"
            className="bg-zinc-800 hover:bg-emerald-600 text-zinc-200 hover:text-white rounded-full transition-all duration-300 px-4 flex items-center gap-1.5 border border-zinc-700/60 hover:border-emerald-500"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-sm" />
              <span className="text-xs font-medium">Buy</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
