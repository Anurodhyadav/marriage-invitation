"use client";

import React from "react";
import Image from "next/image";
import { WeddingData } from "@/data/invite";

interface CoverViewProps {
  data: WeddingData;
  onOpen: (withMusic: boolean) => void;
}

export default function CoverView({ data, onOpen }: CoverViewProps) {
  const { cover, couple } = data;

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6 overflow-hidden bg-[#F5EEE6]">
      {/* Background Floral Watercolor with Lanterns (Image 3) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cover-bg.webp"
          alt="Wedding floral background with golden lanterns"
          fill
          priority
          className="object-cover object-center filter sepia-[0.16] saturate-[0.88] brightness-[1.01]"
        />
        {/* Subtle warm cream overlay to harmonise sage tones with maroon palette */}
        <div className="absolute inset-0 bg-[#F5EEE6]/20 pointer-events-none" />
      </div>

      {/* Main Elegant Content Container positioned within the empty central canvas */}
      <div className="relative z-10 w-full max-w-[430px] my-auto bg-[#F5EEE6]/88 backdrop-blur-[2px] rounded-[28px] sm:rounded-[36px] shadow-[0_16px_50px_-10px_rgba(90,37,44,0.18)] p-6 sm:p-9 border border-[#8C6068]/25 text-center flex flex-col items-center animate-fade-in">
        
        {/* Header Lines: TOGETHER / WITH THEIR FAMILIES */}
        <div className="mb-3 sm:mb-4">
          <p className="font-serif text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#6B2D35] font-semibold leading-relaxed">
            {cover.headerTop}
          </p>
          <p className="font-serif text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#8C6068] font-medium mt-0.5">
            {cover.headerSub}
          </p>
        </div>

        {/* Bride Name in Script */}
        <h1 className="font-script text-4xl sm:text-5xl md:text-[54px] text-[#6B2D35] leading-[1.15] mt-1 filter drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
          {couple.brideFullName}
        </h1>

        {/* "And" Connector in Script */}
        <p className="font-script text-2xl sm:text-3xl text-[#8C6068] my-0.5">
          And
        </p>

        {/* Groom Name in Script */}
        <h2 className="font-script text-4xl sm:text-5xl md:text-[54px] text-[#6B2D35] leading-[1.15] mb-3 sm:mb-4 filter drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
          {couple.groomFullName}
        </h2>

        {/* Formal Request Lines */}
        <div className="max-w-[340px] mb-4 sm:mb-5">
          <p className="font-serif text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#5A252C] leading-relaxed">
            {cover.requestLine1}
          </p>
          <p className="font-serif text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#5A252C] leading-relaxed mt-0.5">
            {cover.requestLine2}
          </p>
        </div>

        {/* Iconic Date Display with Maroon Vertical Bars */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 my-2 sm:my-3">
          {/* Month */}
          <span className="font-serif text-xs sm:text-sm uppercase tracking-[0.25em] text-[#5A252C] font-semibold min-w-[45px] text-right">
            {cover.month}
          </span>

          {/* Left Divider Bar */}
          <span className="h-9 w-[1.5px] bg-[#8C6068]/50" />

          {/* Day of Week & Big Day Number */}
          <div className="flex flex-col items-center justify-center px-1">
            <span className="font-serif text-[10px] uppercase tracking-[0.22em] text-[#8C6068] font-bold -mb-1">
              {cover.dayOfWeek}
            </span>
            <span className="font-serif text-3xl sm:text-4xl text-[#6B2D35] font-semibold leading-tight">
              {cover.dayNumber}
            </span>
          </div>

          {/* Right Divider Bar */}
          <span className="h-9 w-[1.5px] bg-[#8C6068]/50" />

          {/* Year */}
          <span className="font-serif text-xs sm:text-sm tracking-[0.25em] text-[#5A252C] font-semibold min-w-[45px] text-left">
            {cover.year}
          </span>
        </div>

        {/* Year in Words & Time */}
        <div className="mt-1 mb-3">
          <p className="font-serif text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#6B2D35] font-medium">
            {cover.yearInWords}
          </p>
          <p className="font-serif text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#8C6068] mt-0.5">
            {cover.timeInWords}
          </p>
        </div>

        {/* Venue & Location */}
        <div className="my-2">
          <p className="font-serif text-xs sm:text-sm uppercase tracking-[0.26em] text-[#6B2D35] font-bold">
            {cover.venueName}
          </p>
          <p className="font-serif text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#5A252C] mt-0.5">
            {cover.venueLocation}
          </p>
        </div>

        {/* "reception to follow" */}
        <p className="font-script text-2xl sm:text-[28px] text-[#6B2D35] mt-2 mb-4">
          {cover.receptionNote}
        </p>

        {/* Primary Action Button: OPEN THE INVITATION */}
        <button
          type="button"
          onClick={() => onOpen(true)}
          className="w-full max-w-[270px] py-3.5 px-6 rounded-full bg-[#8C6068] hover:bg-[#6B2D35] active:scale-[0.98] text-[#FFF8EC] text-xs tracking-[0.22em] font-sans font-semibold uppercase shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8C6068]/60"
        >
          {cover.openWithMusicButton}
        </button>

        {/* Open Without Music Link */}
        <button
          type="button"
          onClick={() => onOpen(false)}
          className="mt-2.5 font-serif text-xs text-[#8C6068] hover:text-[#5A252C] underline underline-offset-4 tracking-wider transition-colors"
        >
          {cover.openWithoutMusicLink}
        </button>

      </div>
    </main>
  );
}
