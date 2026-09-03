// components/footer.tsx
"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-950 text-white border-t border-zinc-900/60 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
        {/* Main Footer Layout Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand/Identity Meta Capsule */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-zinc-100 tracking-tight">
              Tegas <span className="text-amber-400">Place</span>
            </h3>
            <p className="text-xs text-zinc-500 max-w-sm leading-relaxed font-light">
              Tegas Place is an authentic African medicinal herbs provider and
              organic Nigerian spices merchant based in Lagos. We curate
              pristine bio-available supplements for complete somatic wellness.
            </p>
          </div>

          {/* Quick Informational Link Index */}
          <div className="md:col-span-6 md:justify-self-end flex flex-wrap gap-x-8 gap-y-4 text-xs font-medium tracking-wide uppercase text-zinc-400">
            <Link
              href="#about"
              className="hover:text-amber-400 transition-colors duration-200"
            >
              About Heritage
            </Link>
            <Link
              href="#shop"
              className="hover:text-amber-400 transition-colors duration-200"
            >
              Shop Remedies
            </Link>
            <Link
              href="#contact"
              className="hover:text-amber-400 transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Base Structural Regulatory Compliance & Attribution Strip */}
        <div className="border-t border-zinc-900/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-light">
          {/* Copyright Metadata */}
          <div>&copy; {currentYear} Tegas Place. All rights reserved.</div>

          {/* Regulatory & Privacy Route Targets */}
          <div className="flex items-center gap-6">
            <Link
              href="/terms"
              className="hover:text-zinc-300 transition-colors duration-200 underline underline-offset-4 decoration-zinc-800"
            >
              Terms of Use
            </Link>
            <Link
              href="/privacy"
              className="hover:text-zinc-300 transition-colors duration-200 underline underline-offset-4 decoration-zinc-800"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Technical Developer Attribution Block */}
          <div className="text-zinc-600 sm:text-right font-sans">
            Crafted with precision by{" "}
            <span className="text-zinc-400 hover:text-amber-400 transition-colors duration-200 cursor-pointer font-medium">
              Ekocodelabs
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
