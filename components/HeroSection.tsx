"use client";

import React from "react";
import Image from "next/image";
import { WeddingData } from "@/data/invite";
import { MaroonGarland, MaroonFloralDivider } from "./MaroonFlorals";

interface HeroSectionProps {
  data: WeddingData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative w-full pt-4 pb-6 flex flex-col items-center text-center overflow-hidden bg-[#F5EEE6]">
      {/* 
        Hanging / Arched Maroon Floral Garland Border 
        Deep maroon, burgundy, dusty rose with muted gold accents.
        Framing the "शुभ विवाह" heading without overlapping the text, with subtle gentle sway.
      */}
      <div className="w-full flex justify-center px-2 pt-2 -mb-2 z-10">
        <MaroonGarland />
      </div>

      <div className="relative z-10 w-full max-w-[430px] px-6 pt-2 flex flex-col items-center">
        {/* शुभ विवाह */}
        <h1 className="font-devanagari text-3xl sm:text-4xl font-medium tracking-wide text-[#6B2D35] my-1">
          {data.hero.shubhaBibaha}
        </h1>

        {/* Thin Maroon Floral / Leaf Divider */}
        <MaroonFloralDivider className="my-2.5" />

        {/* Invitation Sentence */}
        <p className="font-serif text-sm sm:text-base text-[#5A252C] leading-relaxed max-w-[320px] my-2">
          {data.hero.introText}
        </p>

        {/* Names in Script */}
        <div className="my-3 flex items-center justify-center flex-wrap gap-x-2">
          <span className="font-script text-4xl sm:text-5xl text-[#6B2D35] leading-tight">
            {data.couple.brideFirstName}
          </span>
          <span className="font-serif italic text-2xl sm:text-3xl text-[#8C6068] mx-1">
            &amp;
          </span>
          <span className="font-script text-4xl sm:text-5xl text-[#6B2D35] leading-tight">
            {data.couple.groomFirstName}
          </span>
        </div>

        {/* Western Date */}
        <p className="font-serif text-xs sm:text-sm uppercase tracking-[0.25em] text-[#6B2D35] font-semibold mt-3 mb-1">
          {data.hero.weddingDateEnglish}
        </p>

        {/* Nepali Bikram Sambat Date */}
        <p className="font-serif text-sm sm:text-base text-[#8C6068] tracking-wider">
          {data.hero.weddingDateNepali}
        </p>

        {/* Centerpiece: Couple Under Gazebo / Mandap (Recolored to Maroon & Rose, zero green) */}
        <div className="relative w-full max-w-[380px] mt-6 filter drop-shadow-[0_4px_16px_rgba(107,45,53,0.08)]">
          <Image
            src="/images/gazebo-couple.svg"
            alt="Wedding Couple under Royal Mandap"
            width={500}
            height={620}
            priority
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
