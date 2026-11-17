"use client";

import React from "react";
import { WeddingData, EventItem } from "@/data/invite";
import DiamondDivider from "./DiamondDivider";
import { ExternalLink } from "lucide-react";

interface CelebrationsSectionProps {
  data: WeddingData;
}

export default function CelebrationsSection({ data }: CelebrationsSectionProps) {
  const { subtitle, title, events } = data.celebrations;

  return (
    <section className="relative w-full py-12 px-4 sm:px-6 flex flex-col items-center">
      <div className="w-full max-w-[430px]">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="font-serif text-[11px] sm:text-xs tracking-[0.25em] uppercase text-stone-500 font-semibold mb-1">
            {subtitle}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-sage-800 font-normal">
            {title}
          </h2>
          <DiamondDivider className="my-3" />
        </div>

        {/* Vertical Wooden Signpost Timeline */}
        <div className="relative pl-6 sm:pl-8">
          {/* Main Wooden Pole running vertically */}
          <div className="absolute left-2 sm:left-3 top-0 bottom-6 w-3 sm:w-3.5 bg-gradient-to-r from-wood-800 via-wood-600 to-wood-700 rounded-full shadow-md">
            {/* Wooden top finial/cap */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-4 rounded-full bg-wood-700 border border-wood-500 shadow-sm" />
          </div>

          {/* Event Items */}
          <div className="space-y-8 sm:space-y-10">
            {events.map((event: EventItem) => (
              <div key={event.id} className="relative flex flex-col">
                
                {/* Wooden Arrow Signpost Header */}
                <div className="relative z-10 flex items-center -ml-6 sm:-ml-8 mb-3">
                  {/* Brass rivet connecting sign to pole */}
                  <div className="relative z-20 left-3 sm:left-4 w-2.5 h-2.5 rounded-full bg-amber-200 border border-amber-800 shadow-inner" />

                  {/* Wooden Arrow Plaque */}
                  <div
                    className="wood-signpost pl-7 sm:pl-8 pr-8 py-2.5 bg-gradient-to-r from-wood-700 via-wood-600 to-wood-700 text-left shadow-md border-y border-wood-500/40 min-w-[210px] sm:min-w-[240px]"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 4px)",
                    }}
                  >
                    <p className="font-serif text-[10px] tracking-[0.2em] uppercase text-amber-200/90 font-medium">
                      {event.badgeDate}
                    </p>
                    <h3 className="font-serif text-lg sm:text-xl text-cream-100 font-medium tracking-wide">
                      {event.title}
                    </h3>
                  </div>
                </div>

                {/* Event Details Card */}
                <div className="relative bg-white/95 rounded-2xl p-5 sm:p-6 shadow-sm border border-stone-200/90 ml-1 sm:ml-2">
                  {/* Date */}
                  <p className="font-serif text-base sm:text-lg text-stone-800 font-medium mb-1">
                    {event.fullDate}
                  </p>

                  {/* Time */}
                  <p className="font-serif text-sm sm:text-base text-sage-700 font-semibold mb-3">
                    {event.time}
                  </p>

                  {/* Description */}
                  <p className="font-serif text-sm sm:text-base text-stone-600 leading-relaxed mb-4">
                    {event.description}
                  </p>

                  {/* Venue & Map Link */}
                  <div className="flex items-center flex-wrap gap-1.5 font-serif text-sm sm:text-base text-stone-800 mb-4">
                    <span>{event.venue}</span>
                    <a
                      href={event.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sage-800 hover:text-sage-950 font-semibold underline underline-offset-2 ml-1 transition-colors"
                    >
                      <span>Map</span>
                      <span className="p-0.5 rounded bg-sage-100 text-sage-800 border border-sage-300">
                        <ExternalLink className="w-3 h-3" />
                      </span>
                    </a>
                  </div>

                  {/* Dress Code Palette & Info */}
                  <div className="flex items-center gap-2.5 pt-2 border-t border-stone-100">
                    {/* 3 Color Palette Dots */}
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      {event.dressCodePalette.map((color, idx) => (
                        <span
                          key={idx}
                          className="w-4 h-4 rounded-full border border-black/10 shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>

                    {/* Dress Code Text */}
                    <p className="font-serif text-xs sm:text-sm text-stone-600">
                      {event.dressCodeText}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

