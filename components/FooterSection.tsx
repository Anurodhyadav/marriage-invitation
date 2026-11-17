"use client";

import React from "react";
import Image from "next/image";
import { WeddingData } from "@/data/invite";

interface FooterSectionProps {
  data: WeddingData;
}

export default function FooterSection({ data }: FooterSectionProps) {
  return (
    <footer className="relative w-full pt-12 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Delicate Foliage Sprigs in the Corners */}
      <div className="absolute top-0 left-0 w-28 sm:w-36 h-28 pointer-events-none opacity-70">
        <Image
          src="/images/foliage-bouquet.svg"
          alt="Floral corner"
          fill
          className="object-contain object-top-left -rotate-45"
        />
      </div>
      <div className="absolute top-0 right-0 w-28 sm:w-36 h-28 pointer-events-none opacity-70">
        <Image
          src="/images/foliage-bouquet.svg"
          alt="Floral corner"
          fill
          className="object-contain object-top-right rotate-45 scale-x-[-1]"
        />
      </div>

      <div className="relative z-10 w-full max-w-[420px] flex flex-col items-center">
        {/* Lord Ganesha Centerpiece Icon */}
        <div className="relative w-20 h-24 sm:w-24 sm:h-28 mb-4 filter drop-shadow-sm">
          <Image
            src="/images/ganesh.svg"
            alt="Lord Ganesha"
            fill
            className="object-contain"
          />
        </div>

        {/* Nepali Blessing / Thank You Quote */}
        <p className="font-devanagari text-lg sm:text-xl font-normal text-stone-800 leading-relaxed max-w-[340px] mb-3">
          {data.footer.nepaliQuote}
        </p>

        {/* English Translation */}
        <p className="font-serif italic text-sm sm:text-base text-stone-600 mb-6 max-w-[300px]">
          {data.footer.englishQuote}
        </p>

        {/* Couple Names in Script */}
        <div className="my-2 flex items-center justify-center flex-wrap gap-x-2">
          <span className="font-script text-4xl sm:text-5xl text-sage-800 leading-tight">
            {data.couple.brideFirstName}
          </span>
          <span className="font-serif italic text-2xl sm:text-3xl text-gold-500 mx-1">
            &amp;
          </span>
          <span className="font-script text-4xl sm:text-5xl text-sage-800 leading-tight">
            {data.couple.groomFirstName}
          </span>
        </div>

        {/* Wedding Hashtag */}
        <p className="font-serif text-sm sm:text-base tracking-wider text-stone-700 font-medium mt-3">
          {data.couple.hashtag}
        </p>
      </div>
    </footer>
  );
}

