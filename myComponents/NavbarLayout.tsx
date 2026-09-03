// components/navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaWhatsapp, FaLeaf } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function NavbarLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll depth to apply high-end background transition effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Structural Navigation links mapping to sections
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Our Heritage", href: "#about" },
    { label: "Shop Remedies", href: "#shop" },
    { label: "Contact Us", href: "#contact" },
  ];

  // Pre-compiled WhatsApp connection string matching prior structures
  const encodedWhatsappMsg = encodeURIComponent(
    "Hello Tegas Place, I am visiting your website and would love to learn more about your premium spices and master herbalist consultations.",
  );
  const whatsappUrl = `https://wa.me{encodedWhatsappMsg}`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950/85 backdrop-blur-md border-b border-zinc-900/80 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* 1. Brand Logo Block */}
          <Link href="/" className="flex items-center gap-2 group">
            <FaLeaf className="text-amber-500 text-xl md:text-2xl transition-transform duration-500 group-hover:rotate-12" />
            <span className="font-serif font-bold text-xl md:text-2xl tracking-tight text-white">
              Tegas{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-500">
                Place
              </span>
            </span>
          </Link>

          {/* 2. Desktop Navigation Center Matrix */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium tracking-wide text-zinc-300 hover:text-amber-400 transition-colors duration-200 uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* 3. Desktop Action Trigger */}
          <div className="hidden md:block">
            <Button
              size="sm"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full px-5 transition-all duration-300 flex items-center gap-2"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-base" />
                <span>Consult Live</span>
              </a>
            </Button>
          </div>

          {/* 4. Mobile Menu Burger Button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 text-zinc-300 hover:text-amber-400 transition-colors duration-200 z-50 focus:outline-none"
          >
            {isOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
      </nav>

      {/* 5. Full Screen Responsive Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-zinc-950/98 backdrop-blur-lg md:hidden flex flex-col justify-center items-center transition-all duration-300 transform ${
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-center px-6 w-full max-w-sm">
          {/* Identity Stamp within Menu */}
          <div className="flex items-center gap-2 mb-4">
            <FaLeaf className="text-amber-500 text-2xl" />
            <span className="font-serif font-bold text-2xl text-white">
              Tegas Place
            </span>
          </div>

          {/* Mobile Links Stack */}
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={toggleMenu} // Smoothly dismiss menu layer when interacting
              className="text-xl font-medium tracking-widest text-zinc-200 hover:text-amber-400 transition-colors duration-200 uppercase w-full py-2 border-b border-zinc-900/50"
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Direct Action Trigger */}
          <Button
            size="lg"
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full py-6 mt-4 flex items-center justify-center gap-3 shadow-lg shadow-emerald-950/40"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              <FaWhatsapp className="text-xl" />
              <span>Consult on WhatsApp</span>
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
