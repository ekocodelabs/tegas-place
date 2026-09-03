// components/price-list.tsx
"use client";

import React, { useState } from "react";
import { FaWhatsapp, FaTags, FaBoxOpen } from "react-icons/fa";
import { Button } from "@/components/ui/button";

// --- DATA STRUCTURES WITH SEMANTIC CLASSIFICATIONS ---
const premiumSets = [
  {
    name: "Infection Set (Male)",
    includes: "Drink, Powder, Pill",
    price: 25000,
    displayPrice: "25k",
  },
  {
    name: "Infection Set (Female)",
    includes: "Drink, Powder, Pill, Yoni Oil, Boric Acid",
    price: 30000,
    displayPrice: "30k",
  },
  {
    name: "Weight Loss Set (Male)",
    includes: "Drink, Powder, Pill",
    price: 30000,
    displayPrice: "30k",
  },
  {
    name: "Tummy Reduction Set",
    includes: "Oil, Powder, Pill",
    price: 30000,
    displayPrice: "30k",
  },
  {
    name: "Dick Enlargement Set",
    includes: "Tea, Oil, Pill",
    price: 35000,
    displayPrice: "35k",
  },
];

const individualFormulations = [
  { name: "Infection Flush", price: 15000, displayPrice: "15k" },
  { name: "Infection Powder", price: 8000, displayPrice: "8k" },
  { name: "Infection Pill", price: 5000, displayPrice: "5k" },
  { name: "Detox Drink", price: 12000, displayPrice: "12k" },
  { name: "Boric Acid", price: 4000, displayPrice: "4k" },
  { name: "Yoni Oil", price: 5000, displayPrice: "5k" },
  { name: "Weight Loss Drink", price: 15000, displayPrice: "15k" },
  { name: "Weight Loss Powder", price: 10000, displayPrice: "10k" },
  { name: "Weight Loss Pill", price: 10000, displayPrice: "10k" },
  { name: "Flat Tummy Oil", price: 10000, displayPrice: "10k" },
  { name: "Flat Tummy Powder", price: 15000, displayPrice: "15k" },
  { name: "Flat Tummy Pill", price: 10000, displayPrice: "10k" },
  { name: "Men Stamina Tea", price: 15000, displayPrice: "15k" },
  { name: "Dick Enlargement Tea", price: 15000, displayPrice: "15k" },
  { name: "Dick Enlargement Pill", price: 12000, displayPrice: "12k" },
  { name: "Dick Enlargement Oil", price: 10000, displayPrice: "10k" },
];

export default function PriceListLayout() {
  const [activeTab, setActiveTab] = useState<"sets" | "singles">("sets");

  // Factory function generating automated WhatsApp messaging
  const generateWhatsAppLink = (itemName: string, price: number) => {
    const text = encodeURIComponent(
      `Hello Tegas Place, I would like to order the "${itemName}" priced at ₦${price.toLocaleString()}. Kindly advise on availability and pickup/delivery logistics.`,
    );
    return `https://wa.me/2347034382723?text=${text}`; // Swap out with configuration line
  };

  return (
    <section
      id="pricing"
      className="w-full py-20 md:py-32 bg-zinc-950 text-white relative overflow-hidden"
    >
      {/* Decorative Luxury Background Glow */}
      <div className="absolute top-10 right-0 w-100 h-100 bg-emerald-950/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-100 h-100 bg-amber-950/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Heading with Rich Targeted Local SEO Hooks */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold tracking-widest uppercase">
            <span className="w-6 h-px bg-amber-500" />
            <span>Complete Apothecary Catalog</span>
            <span className="w-6 h-px bg-amber-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-zinc-100">
            Premium Wellness Formulations & Pricing
          </h2>
          <p className="text-zinc-400 font-light text-sm md:text-base max-w-xl leading-relaxed">
            Transparent pricing for our premium certified organic herbs in
            Nigeria. Select a complete treatment system or standalone remedies.
          </p>
        </div>

        {/* --- CUSTOM HIGH-END SEGMENTED TAB CONTROLLER --- */}
        <div className="flex justify-center mb-12">
          <div className="p-1.5 bg-zinc-900/90 border border-zinc-800 rounded-full flex items-center gap-2 shadow-2xl">
            <button
              onClick={() => setActiveTab("sets")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "sets"
                  ? "bg-linear-to-r from-amber-500 to-amber-600 text-zinc-950 shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <FaBoxOpen className="text-sm" />
              <span>Curated Full Sets</span>
            </button>
            <button
              onClick={() => setActiveTab("singles")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "singles"
                  ? "bg-linear-to-r from-amber-500 to-amber-600 text-zinc-950 shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <FaTags className="text-sm" />
              <span>Individual Items</span>
            </button>
          </div>
        </div>

        {/* --- TAB CONTENT 1: INTEGRATED SYSTEMS / SETS --- */}
        {activeTab === "sets" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {premiumSets.map((item, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/40 border border-zinc-800/80 p-6 rounded-2xl flex flex-col justify-between gap-6 transition-all duration-300 hover:border-amber-500/30 group"
              >
                <div>
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-serif font-bold text-lg md:text-xl text-zinc-100 group-hover:text-amber-400 transition-colors duration-200">
                      {item.name}
                    </h3>
                    <span className="text-xl font-extrabold font-mono text-white whitespace-nowrap">
                      ₦{item.displayPrice}
                    </span>
                  </div>
                  <div className="mt-2 text-xs text-emerald-400 font-medium tracking-wide uppercase">
                    Includes:{" "}
                    <span className="text-zinc-400 normal-case font-light font-sans ml-1">
                      {item.includes}
                    </span>
                  </div>
                </div>

                <Button className="w-full bg-zinc-800 hover:bg-emerald-600 text-zinc-100 hover:text-white rounded-xl py-5 transition-all duration-300 border border-zinc-700/50 hover:border-emerald-500 flex items-center justify-center gap-2">
                  <a
                    href={generateWhatsAppLink(item.name, item.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="text-base" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Order Complete Set
                    </span>
                  </a>
                </Button>
              </div>
            ))}
          </div>
        )}

        {/* --- TAB CONTENT 2: STANDALONE REMEDIES --- */}
        {activeTab === "singles" && (
          <div className="bg-zinc-900/20 border border-zinc-900 rounded-3xl p-4 md:p-8 flex flex-col gap-1.5 shadow-2xl animate-fadeIn">
            {individualFormulations.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between gap-4 p-3.5 md:p-4 rounded-xl hover:bg-zinc-900/60 border border-transparent hover:border-zinc-800/60 group transition-all duration-200"
              >
                {/* Product Name Layout */}
                <div className="flex flex-col">
                  <span className="font-sans font-medium text-sm md:text-base text-zinc-300 group-hover:text-zinc-100 transition-colors duration-200">
                    {item.name}
                  </span>
                </div>

                {/* Pricing & Interactive CTA Segment */}
                <div className="flex items-center gap-4 md:gap-8 shrink-0">
                  <span className="font-mono font-bold text-sm md:text-base text-amber-400">
                    ₦{item.displayPrice}
                  </span>

                  <Button
                    size="sm"
                    className="bg-zinc-800/80 hover:bg-emerald-600 text-zinc-300 hover:text-white rounded-full h-8 px-4 transition-all duration-300 border border-zinc-700/40 flex items-center gap-1.5"
                  >
                    <a
                      href={generateWhatsAppLink(item.name, item.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp className="text-xs" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">
                        Order
                      </span>
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
