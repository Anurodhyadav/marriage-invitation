"use client";

import React from "react";
import { WeddingData } from "@/data/invite";
import { MaroonArchTopper, MaroonFloralDivider } from "./MaroonFlorals";

interface FamiliesSectionProps {
  data: WeddingData;
}

export default function FamiliesSection({ data }: FamiliesSectionProps) {
  const { bride, groom } = data.families;

  return (
    <section className="relative w-full py-12 px-3 sm:px-6 flex flex-col items-center text-center overflow-hidden bg-[#F5EEE6]">
      {/* Outer Delicate Arched Frame with Maroon Floral Artwork */}
      <div className="relative w-full max-w-[430px] rounded-[150px_150px_24px_24px] border border-[#8C6068]/30 px-3 py-8 sm:p-8 bg-[#FAF6F0]/85 backdrop-blur-[2px] shadow-sm">
        
        {/* Symmetrical Maroon Floral Arch Topper (Replaces old grey-green ornaments) */}
        <div className="w-full flex justify-center -mt-2 mb-2">
          <MaroonArchTopper />
        </div>

        {/* Section Heading */}
        <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#6B2D35] tracking-wide mt-1">
          {data.families.sectionTitle}
        </h2>

        {/* Maroon Floral / Leaf Divider */}
        <MaroonFloralDivider className="my-2.5" />

        {/* Two Arched Cards Side-by-Side */}
        <div className="relative w-full mt-6 grid grid-cols-2 gap-2 sm:gap-3 items-end">
          
          {/* THE BRIDE CARD */}
          <div className="flex flex-col items-center">
            <div className="relative w-full bg-[#FAF6F0] rounded-[90px_90px_12px_12px] sm:rounded-[110px_110px_16px_16px] border border-[#8C6068]/30 pt-4 pb-6 px-2 sm:px-3 shadow-sm flex flex-col items-center text-center min-h-[290px] sm:min-h-[310px]">
              {/* Mini Maroon Floral Spray at Top Arch */}
              <div className="w-16 h-8 -mt-1 mb-1 flex items-center justify-center" aria-hidden="true">
                <svg viewBox="0 0 60 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                  <path d="M5 18 Q 30 8 55 18" stroke="#7A3340" strokeWidth="1" strokeLinecap="round" />
                  <path d="M18 13 C 12 6 22 5 24 12 Z" fill="#C9A96E" />
                  <path d="M42 13 C 48 6 38 5 36 12 Z" fill="#C9A96E" />
                  <circle cx="30" cy="12" r="5" fill="#6B2D35" />
                  <circle cx="30" cy="12" r="3" fill="#E8CFCF" />
                  <circle cx="30" cy="12" r="1.2" fill="#C9A96E" />
                </svg>
              </div>

              {/* Role */}
              <p className="font-serif text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#8C6068] font-semibold mb-2">
                {bride.role}
              </p>

              {/* Name */}
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#6B2D35] leading-snug mb-3">
                {bride.name}
              </h3>

              {/* Daughter of */}
              <p className="font-serif italic text-xs sm:text-sm text-[#8C6068] mb-1">
                {bride.relation}
              </p>

              {/* Parents */}
              <p className="font-serif text-xs sm:text-sm text-[#5A252C] font-medium whitespace-pre-line leading-relaxed mb-3">
                {bride.parents}
              </p>

              {/* Location */}
              <p className="font-serif text-[11px] sm:text-xs text-[#8C6068] mt-auto">
                {bride.location}
              </p>
            </div>

            {/* Maroon Shelf / Rod at the bottom */}
            <div className="w-[108%] -mt-1 h-2.5 sm:h-3 rounded-full bg-gradient-to-r from-[#5A252C] via-[#8C6068] to-[#5A252C] shadow-md border-t border-[#A7757E]/40 z-10" />
          </div>

          {/* Center Ampersand */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <span className="font-serif italic text-2xl sm:text-3xl text-[#6B2D35] bg-[#F5EEE6] px-2 py-0.5 rounded-full border border-[#8C6068]/40 shadow-sm font-semibold">
              &amp;
            </span>
          </div>

          {/* THE GROOM CARD */}
          <div className="flex flex-col items-center">
            <div className="relative w-full bg-[#FAF6F0] rounded-[90px_90px_12px_12px] sm:rounded-[110px_110px_16px_16px] border border-[#8C6068]/30 pt-4 pb-6 px-2 sm:px-3 shadow-sm flex flex-col items-center text-center min-h-[290px] sm:min-h-[310px]">
              {/* Mini Maroon Floral Spray at Top Arch */}
              <div className="w-16 h-8 -mt-1 mb-1 flex items-center justify-center" aria-hidden="true">
                <svg viewBox="0 0 60 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                  <path d="M5 18 Q 30 8 55 18" stroke="#7A3340" strokeWidth="1" strokeLinecap="round" />
                  <path d="M18 13 C 12 6 22 5 24 12 Z" fill="#C9A96E" />
                  <path d="M42 13 C 48 6 38 5 36 12 Z" fill="#C9A96E" />
                  <circle cx="30" cy="12" r="5" fill="#6B2D35" />
                  <circle cx="30" cy="12" r="3" fill="#E8CFCF" />
                  <circle cx="30" cy="12" r="1.2" fill="#C9A96E" />
                </svg>
              </div>

              {/* Role */}
              <p className="font-serif text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#8C6068] font-semibold mb-2">
                {groom.role}
              </p>

              {/* Name */}
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#6B2D35] leading-snug mb-3">
                {groom.name}
              </h3>

              {/* Son of */}
              <p className="font-serif italic text-xs sm:text-sm text-[#8C6068] mb-1">
                {groom.relation}
              </p>

              {/* Parents */}
              <p className="font-serif text-xs sm:text-sm text-[#5A252C] font-medium whitespace-pre-line leading-relaxed mb-3">
                {groom.parents}
              </p>

              {/* Location */}
              <p className="font-serif text-[11px] sm:text-xs text-[#8C6068] mt-auto">
                {groom.location}
              </p>
            </div>

            {/* Maroon Shelf / Rod at the bottom */}
            <div className="w-[108%] -mt-1 h-2.5 sm:h-3 rounded-full bg-gradient-to-r from-[#5A252C] via-[#8C6068] to-[#5A252C] shadow-md border-t border-[#A7757E]/40 z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
