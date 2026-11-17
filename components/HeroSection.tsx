"use client";

import React from "react";
import Image from "next/image";
import { WeddingData } from "@/data/invite";
import DiamondDivider from "./DiamondDivider";

interface HeroSectionProps {
  data: WeddingData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative w-full pt-8 pb-4 flex flex-col items-center text-center overflow-hidden">
      {/* Top Foliage Frame */}
      <div className="absolute top-0 left-0 right-0 h-32 sm:h-40 pointer-events-none opacity-80 z-0">
        <Image
          src="/images/foliage-frame.svg"
          alt="Floral Garland"
          fill
          priority
          className="object-contain object-top"
        />
      </div>

      <div className="relative z-10 w-full max-w-[430px] px-6 pt-4 flex flex-col items-center">
        {/* Religious Inscription */}
        <p className="font-devanagari text-xs sm:text-sm tracking-widest text-stone-600 mb-1">
          {data.hero.shreeGanesh}
        </p>

        {/* शुभ विवाह */}
        <h1 className="font-devanagari text-3xl sm:text-4xl font-medium tracking-wide text-sage-800 my-1">
          {data.hero.shubhaBibaha}
        </h1>

        {/* Diamond Divider */}
        <DiamondDivider className="my-2.5" />

        {/* Invitation Sentence */}
        <p className="font-serif text-sm sm:text-base text-stone-600 leading-relaxed max-w-[320px] my-2">
          {data.hero.introText}
        </p>

        {/* Names in Script */}
        <div className="my-3 flex items-center justify-center flex-wrap gap-x-2">
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

        {/* Western Date */}
        <p className="font-serif text-xs sm:text-sm uppercase tracking-[0.25em] text-stone-800 font-medium mt-3 mb-1">
          {data.hero.weddingDateEnglish}
        </p>

        {/* Nepali Bikram Sambat Date */}
        <p className="font-serif text-sm sm:text-base text-stone-600 tracking-wider">
          {data.hero.weddingDateNepali}
        </p>

        {/* Centerpiece: Couple Under Gazebo with Peacocks */}
        <div className="relative w-full max-w-[380px] mt-6 filter drop-shadow-sm">
          <Image
            src="/images/gazebo-couple.svg"
            alt="Wedding Couple under Gazebo"
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

