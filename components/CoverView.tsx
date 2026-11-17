"use client";

import React from "react";
import Image from "next/image";
import { WeddingData } from "@/data/invite";
import DiamondDivider from "./DiamondDivider";

interface CoverViewProps {
  data: WeddingData;
  onOpen: (withMusic: boolean) => void;
}

export default function CoverView({ data, onOpen }: CoverViewProps) {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center p-3 sm:p-6 overflow-hidden">
      {/* Background Watercolor Foliage Sprigs Framing the Viewport */}
      <div className="absolute inset-0 pointer-events-none opacity-90 z-0">
        <Image
          src="/images/foliage-cover-bg.svg"
          alt="Botanical Foliage"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Main Arch Invitation Card */}
      <div className="relative z-10 w-full max-w-[430px] my-auto bg-[#faf8f3]/95 backdrop-blur-sm rounded-[170px_170px_28px_28px] shadow-[0_12px_45px_-10px_rgba(55,80,55,0.18)] p-3 border border-gold-300/60 animate-fade-in">
        
        {/* Inner Delicate Arch Line Border */}
        <div className="relative w-full rounded-[158px_158px_20px_20px] border border-sage-600/30 p-6 sm:p-8 flex flex-col items-center text-center">
          
          {/* Decorative Corner Foliage Accents Inside Card */}
          <div className="absolute top-0 left-0 right-0 h-28 pointer-events-none opacity-60">
            <Image
              src="/images/foliage-frame.svg"
              alt="Foliage Garland"
              fill
              className="object-contain object-top"
            />
          </div>

          {/* Lord Ganesha Illustration */}
          <div className="relative w-28 h-32 sm:w-32 sm:h-36 mt-4 mb-2 filter drop-shadow-sm transition-transform duration-500 hover:scale-105">
            <Image
              src="/images/ganesh.svg"
              alt="Lord Ganesha"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Auspicious Inscription */}
          <h2 className="font-devanagari text-2xl sm:text-3xl font-medium tracking-wide text-sage-800 mt-2 mb-1">
            {data.cover.blessing}
          </h2>

          {/* Diamond Motif Divider */}
          <DiamondDivider className="my-2" />

          {/* Couple Names in Flowing Romantic Script Font */}
          <div className="my-3 flex items-center justify-center flex-wrap gap-x-2">
            <span className="font-script text-4xl sm:text-5xl text-stone-800 leading-tight">
              {data.couple.brideFirstName}
            </span>
            <span className="font-serif italic text-2xl sm:text-3xl text-gold-500 mx-1">
              &amp;
            </span>
            <span className="font-script text-4xl sm:text-5xl text-stone-800 leading-tight">
              {data.couple.groomFirstName}
            </span>
          </div>

          {/* Invitation Callout */}
          <p className="font-serif text-sm sm:text-base tracking-wide text-stone-600 my-4 max-w-[280px]">
            {data.cover.invitationNote}
          </p>

          {/* Primary Action: OPEN THE INVITATION (Plays Music) */}
          <button
            type="button"
            onClick={() => onOpen(true)}
            className="w-full max-w-[280px] mt-2 mb-3 py-3.5 px-6 rounded-full bg-[#36513a] hover:bg-[#2b422f] active:scale-[0.98] text-white text-xs sm:text-sm tracking-[0.2em] font-sans font-semibold uppercase shadow-md transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sage-600/40"
          >
            {data.cover.openWithMusicButton}
          </button>

        </div>
      </div>
    </main>
  );
}

