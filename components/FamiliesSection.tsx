"use client";

import React from "react";
import Image from "next/image";
import { WeddingData } from "@/data/invite";
import DiamondDivider from "./DiamondDivider";

interface FamiliesSectionProps {
  data: WeddingData;
}

export default function FamiliesSection({ data }: FamiliesSectionProps) {
  const { bride, groom } = data.families;

  return (
    <section className="relative w-full py-12 px-3 sm:px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Outer Delicate Arched Frame with Corner Florals */}
      <div className="relative w-full max-w-[430px] rounded-[150px_150px_24px_24px] border border-sage-600/25 px-3 py-10 sm:p-8 bg-[#faf8f2]/60 backdrop-blur-[2px]">
        
        {/* Top Corner Leafy Accents */}
        <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none opacity-60">
          <Image
            src="/images/foliage-frame.svg"
            alt="Floral Garland"
            fill
            className="object-contain object-top"
          />
        </div>

        {/* Section Heading */}
        <h2 className="font-serif text-2xl sm:text-3xl font-normal text-sage-800 tracking-wide mt-2">
          {data.families.sectionTitle}
        </h2>

        {/* Diamond Divider */}
        <DiamondDivider className="my-3" />

        {/* Two Arched Cards Side-by-Side */}
        <div className="relative w-full mt-6 grid grid-cols-2 gap-2 sm:gap-3 items-end">
          
          {/* THE BRIDE CARD */}
          <div className="flex flex-col items-center">
            <div className="relative w-full bg-white/90 rounded-[90px_90px_12px_12px] sm:rounded-[110px_110px_16px_16px] border border-sage-600/35 pt-4 pb-6 px-2 sm:px-3 shadow-sm flex flex-col items-center text-center min-h-[290px] sm:min-h-[310px]">
              {/* Mini Floral Bouquet at Top Arch */}
              <div className="relative w-20 h-10 -mt-2 mb-1">
                <Image
                  src="/images/foliage-bouquet.svg"
                  alt="Floral sprig"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Role */}
              <p className="font-serif text-[10px] sm:text-xs tracking-[0.2em] uppercase text-stone-500 font-semibold mb-2">
                {bride.role}
              </p>

              {/* Name */}
              <h3 className="font-serif text-base sm:text-lg font-bold text-stone-800 leading-snug mb-3">
                {bride.name}
              </h3>

              {/* Daughter of */}
              <p className="font-serif italic text-xs sm:text-sm text-stone-500 mb-1">
                {bride.relation}
              </p>

              {/* Parents */}
              <p className="font-serif text-xs sm:text-sm text-stone-700 font-medium whitespace-pre-line leading-relaxed mb-3">
                {bride.parents}
              </p>

              {/* Location */}
              <p className="font-serif text-[11px] sm:text-xs text-stone-500 mt-auto">
                {bride.location}
              </p>
            </div>

            {/* Wooden brown shelf / rod at the bottom */}
            <div className="w-[108%] -mt-1 h-2.5 sm:h-3 rounded-full bg-gradient-to-r from-wood-700 via-wood-500 to-wood-800 shadow-md border-t border-wood-400/40 z-10" />
          </div>

          {/* Golden Ampersand in the Center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <span className="font-serif italic text-2xl sm:text-3xl text-gold-500 bg-[#f7f5ef] px-1.5 py-0.5 rounded-full border border-gold-300/40 shadow-sm">
              &amp;
            </span>
          </div>

          {/* THE GROOM CARD */}
          <div className="flex flex-col items-center">
            <div className="relative w-full bg-white/90 rounded-[90px_90px_12px_12px] sm:rounded-[110px_110px_16px_16px] border border-sage-600/35 pt-4 pb-6 px-2 sm:px-3 shadow-sm flex flex-col items-center text-center min-h-[290px] sm:min-h-[310px]">
              {/* Mini Floral Bouquet at Top Arch */}
              <div className="relative w-20 h-10 -mt-2 mb-1">
                <Image
                  src="/images/foliage-bouquet.svg"
                  alt="Floral sprig"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Role */}
              <p className="font-serif text-[10px] sm:text-xs tracking-[0.2em] uppercase text-stone-500 font-semibold mb-2">
                {groom.role}
              </p>

              {/* Name */}
              <h3 className="font-serif text-base sm:text-lg font-bold text-stone-800 leading-snug mb-3">
                {groom.name}
              </h3>

              {/* Son of */}
              <p className="font-serif italic text-xs sm:text-sm text-stone-500 mb-1">
                {groom.relation}
              </p>

              {/* Parents */}
              <p className="font-serif text-xs sm:text-sm text-stone-700 font-medium whitespace-pre-line leading-relaxed mb-3">
                {groom.parents}
              </p>

              {/* Location */}
              <p className="font-serif text-[11px] sm:text-xs text-stone-500 mt-auto">
                {groom.location}
              </p>
            </div>

            {/* Wooden brown shelf / rod at the bottom */}
            <div className="w-[108%] -mt-1 h-2.5 sm:h-3 rounded-full bg-gradient-to-r from-wood-700 via-wood-500 to-wood-800 shadow-md border-t border-wood-400/40 z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}

