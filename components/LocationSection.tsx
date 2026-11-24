"use client";

import React, { useRef, useState, useEffect } from "react";
import { WeddingData } from "@/data/invite";
import { MapPin, Navigation } from "lucide-react";

interface LocationSectionProps {
  data: WeddingData;
}

export default function LocationSection({ data }: LocationSectionProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Use the venue and mapUrl from the updated data
  const venue = data.celebrations.events[0]?.venue || "Piradi Chowk, Janakpur";
  const mapUrl =
    data.celebrations.events[0]?.mapUrl ||
    "https://maps.app.goo.gl/txKwRGEeYqRQtUuaA";

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-12 sm:py-16 px-4 sm:px-6 flex flex-col items-center bg-[#F5EEE6] overflow-hidden"
    >
      <div
        className="w-full max-w-[440px] text-center transition-all duration-700 ease-out flex flex-col items-center"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(24px)",
        }}
      >
        {/* Flower Ornament Divider */}
        <svg
          className="w-[150px] mb-3 h-auto overflow-visible"
          viewBox="0 0 200 24"
          aria-hidden="true"
        >
          <path d="M10 12H78M122 12H190" stroke="#C9A24A" strokeWidth=".9" />
          <path d="M82 12l4 -3 4 3 -4 3zM110 12l4 -3 4 3 -4 3z" fill="#C9A24A" />
          <circle cx="92" cy="12" r="3.2" fill="#D8B26A" />
          <circle cx="108" cy="12" r="3.2" fill="#D8B26A" />
          <circle cx="100" cy="12" r="6" fill="#8E2B3C" />
          <circle cx="100" cy="12" r="3" fill="#FFF8EC" />
          <circle cx="100" cy="12" r="1.5" fill="#8E2B3C" />
        </svg>

        {/* Section Subtitle */}
        <p className="font-serif text-[11px] sm:text-xs tracking-[0.26em] uppercase text-[#8C6068] font-semibold mb-1">
          VENUE &amp; LOCATION
        </p>

        {/* Section Heading */}
        <h2 className="font-script text-4xl sm:text-5xl text-[#6B2D35] leading-tight mb-6 filter drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
          The Location
        </h2>

        {/* Location Card */}
        <div className="w-full bg-[#FAF6F0] rounded-[24px] sm:rounded-[32px] p-6 sm:p-7 border border-[#8C6068]/20 shadow-[0_12px_36px_-12px_rgba(107,45,53,0.12)] flex flex-col items-center">
          {/* Circular Map Pin Icon */}
          <div className="w-12 h-12 rounded-full bg-[#FAF6F0] border border-[#C9A24A] text-[#6B2D35] flex items-center justify-center shadow-sm mb-3">
            <MapPin className="w-5 h-5 text-[#6B2D35] stroke-[2]" />
          </div>

          {/* Venue Name */}
          <h3 className="font-serif text-2xl sm:text-[26px] font-bold text-[#6B2D35] tracking-wide mb-1">
            Sabaila-11, Inarwa
          </h3>

          {/* City / Country */}
          <p className="font-serif text-xs sm:text-sm uppercase tracking-[0.22em] text-[#8C6068] font-semibold mb-2">
            Dhanusa, Nepal
          </p>

          <p className="font-serif italic text-xs sm:text-sm text-[#5A252C] max-w-[290px] mb-5 leading-relaxed">
            All wedding ceremonies (Mehendi, Haldi &amp; Shubha Bibaha) will take place at this venue.
          </p>

          
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[280px] py-3.5 px-6 rounded-full bg-[#6B2D35] hover:bg-[#5A252C] active:scale-[0.98] text-[#FFF8EC] text-xs sm:text-[13px] tracking-[0.2em] font-serif font-semibold uppercase shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#8C6068]"
          >
            <Navigation className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Bottom Finial */}
        <svg
          className="w-[120px] mt-6 h-auto overflow-visible opacity-75"
          viewBox="0 0 200 24"
          aria-hidden="true"
        >
          <path d="M25 12H78M122 12H175" stroke="#C9A24A" strokeWidth=".9" />
          <path d="M82 12l4 -3 4 3 -4 3zM110 12l4 -3 4 3 -4 3z" fill="#C9A24A" />
          <circle cx="100" cy="12" r="5" fill="#8E2B3C" />
          <circle cx="100" cy="12" r="2.5" fill="#FFF8EC" />
        </svg>
      </div>
    </section>
  );
}
