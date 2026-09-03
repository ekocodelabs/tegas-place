// components/contact-section.tsx
"use client";

import React from "react";
import { FaWhatsapp, FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function ContactLayout() {
  // Production-ready messaging payloads
  const encodedWhatsappMsg = encodeURIComponent(
    "Hello Tegas Place, I would like to schedule a private wellness consultation regarding your master herbalist services.",
  );

  const channels = [
    {
      name: "WhatsApp Direct",
      label: "Order & Consult Live",
      value: "+234 XX XXX XXXX",
      href: `https://wa.me{encodedWhatsappMsg}`,
      icon: FaWhatsapp,
      colorClass: "hover:text-emerald-400 hover:border-emerald-500/30",
      bgGlow: "group-hover:bg-emerald-500/5",
    },
    {
      name: "Email Address",
      label: "Corporate & Wholesale Inquiries",
      value: "hello@tegasplace.com",
      href: "mailto:hello@tegasplace.com",
      icon: FaEnvelope,
      colorClass: "hover:text-amber-400 hover:border-amber-500/30",
      bgGlow: "group-hover:bg-amber-500/5",
    },
    {
      name: "Instagram",
      label: "Daily Wellness Tips & Community",
      value: "@TegasPlace",
      href: "https://instagram.com",
      icon: FaInstagram,
      colorClass: "hover:text-pink-400 hover:border-pink-500/30",
      bgGlow: "group-hover:bg-pink-500/5",
    },
    {
      name: "TikTok",
      label: "Herbal Remedies & Recipes",
      value: "@TegasPlaceHerbal",
      href: "https://tiktok.com",
      icon: FaTiktok,
      colorClass: "hover:text-cyan-400 hover:border-cyan-500/30",
      bgGlow: "group-hover:bg-cyan-500/5",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full py-20 md:py-32 bg-zinc-950 text-white relative overflow-hidden"
    >
      {/* Structural ambient light layer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-emerald-950/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading Setup */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 mb-16">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold tracking-widest uppercase">
            <span className="w-6 h-px bg-amber-500" />
            <span>Secure Your Consultation</span>
            <span className="w-6 h-px bg-amber-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-zinc-100">
            Consult a Custom Master Herbalist Online
          </h2>
          <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">
            Have questions about specific organic remedies, bulk order
            fulfillment within Nigeria, or custom spice formulations? Reach out
            across our digital channels.
          </p>
        </div>

        {/* Channels Grid Arrangement */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((channel, i) => {
            const Icon = channel.icon;
            return (
              <a
                key={i}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block p-6 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 flex-col gap-4 relative overflow-hidden ${channel.colorClass}`}
              >
                {/* Micro Ambient Hover Glow Panel */}
                <div
                  className={`absolute inset-0 transition-colors duration-300 pointer-events-none ${channel.bgGlow}`}
                />

                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                    {channel.name}
                  </span>
                  <Icon className="text-xl text-zinc-400 group-hover:scale-110 transition-transform duration-300" />
                </div>

                <div className="mt-2 relative z-10">
                  <h4 className="text-xs text-zinc-400 font-light font-sans">
                    {channel.label}
                  </h4>
                  <p className="text-zinc-100 text-base md:text-lg font-medium font-mono mt-1 break-all">
                    {channel.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
