// components/featured-products.tsx
"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";

// Structured Product Data Matrix containing requested items with optimized meta categories
const featuredProductsData = [
  {
    id: "inf-flush",
    title: "Infection Flush",
    price: 15000,
    formattedPriceString: "15k",
    category: "Holistic Remedies",
    imagePath: "/images/products/infection-flush.jpg", // Local image pathway within public folder
  },
  {
    id: "detox-drk",
    title: "Detox Drink",
    price: 12000,
    formattedPriceString: "12k",
    category: "Wellness Teas",
    imagePath: "/images/products/detox-drink.jpg",
  },
  {
    id: "weight-loss",
    title: "Weight Loss Drink",
    price: 15000,
    formattedPriceString: "15k",
    category: "Organic Slimming",
    imagePath: "/images/products/weight-loss-drink.jpg",
  },
  {
    id: "men-stamina",
    title: "Men Stamina Tea",
    price: 15000,
    formattedPriceString: "15k",
    category: "Vitality Boosters",
    imagePath: "/images/products/men-stamina-tea.jpg",
  },
];

export default function ProductsLayout() {
  return (
    <section
      id="shop"
      className="w-full py-20 md:py-32 bg-zinc-950 text-white relative"
    >
      {/* Base Structural layout layer container */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12 md:gap-16">
        {/* Header Layout Component Area showcasing SEO contextual framing */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-xl">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold tracking-widest uppercase">
              <span className="w-6 h-px bg-amber-500" />
              <span>Apothecary & Custom Seasonings</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-zinc-100">
              Buy Premium Natural Seasonings & Potent Herbal Remedies Online
            </h2>
          </div>
          <p className="text-zinc-400 font-light text-sm md:text-base max-w-sm leading-relaxed">
            Handcrafted natural wellness remedies formulated individually by our
            master herbalist to cleanse, refresh, and maintain optimal physical
            performance.
          </p>
        </div>

        {/* 4-Column Responsive Grid View */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProductsData.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              formattedPriceString={product.formattedPriceString}
              category={product.category}
              imagePath={product.imagePath}
            />
          ))}
        </div>

        {/* Action routing trigger container heading towards general full product landing directory */}
        <div className="flex justify-center mt-4">
          <Button
            size="lg"
            className="group bg-transparent hover:bg-amber-500 border border-amber-500/50 hover:border-amber-500 text-amber-400 hover:text-zinc-950 font-semibold px-8 py-6 rounded-full transition-all duration-300 text-base flex items-center justify-center gap-2"
          >
            <Link href="/products">
              <span>View All Holistic Products</span>
              <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
