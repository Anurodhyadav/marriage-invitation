"use client";

import React from "react";
import { WeddingData } from "@/data/invite";
import { MaroonCornerSprig, MaroonFloralDivider } from "./MaroonFlorals";

interface FooterSectionProps {
  data: WeddingData;
}

export default function FooterSection({ data }: FooterSectionProps) {
  return (
    <footer className="relative w-full pt-12 pb-24 px-6 flex flex-col items-center text-center overflow-hidden bg-[#F5EEE6]">
      {/* Delicate Maroon Floral Sprigs in Corners */}
      <div className="absolute top-2 left-2 w-20 sm:w-24 pointer-events-none opacity-75">
        <MaroonCornerSprig />
      </div>
      <div className="absolute top-2 right-2 w-20 sm:w-24 pointer-events-none opacity-75">
        <MaroonCornerSprig flip />
      </div>

      <div className="relative z-10 w-full max-w-[420px] flex flex-col items-center">
        {/* Maroon Floral Divider */}
        <MaroonFloralDivider className="mb-4" />

        {/* Nepali Blessing / Thank You Quote */}
        <p className="font-devanagari text-lg sm:text-xl font-normal text-[#6B2D35] leading-relaxed max-w-[340px] mb-3">
          {data.footer.nepaliQuote}
        </p>

        {/* English Translation */}
        <p className="font-serif italic text-sm sm:text-base text-[#8C6068] mb-6 max-w-[300px]">
          {data.footer.englishQuote}
        </p>

        {/* Couple Names in Script */}
        <div className="my-2 flex items-center justify-center flex-wrap gap-x-2">
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

        {/* Wedding Hashtag */}
        <p className="font-serif text-sm sm:text-base tracking-wider text-[#5A252C] font-semibold mt-3">
          {data.couple.hashtag}
        </p>
      </div>
    </footer>
  );
}
