"use client";

import React, { useState, useEffect } from "react";
import { WeddingData, EventItem } from "@/data/invite";
import { Heart, X, MapPin, Calendar, Clock, Palette } from "lucide-react";

interface CelebrationsSectionProps {
  data: WeddingData;
  onClose?: () => void;
}

// Helpers for auto-calculating weekday and formatting dates
function parseDateParts(dateStr: string) {
  // strip out weekday if already in string, e.g. "Thursday, 10 December 2026"
  const cleaned = dateStr.replace(/^[A-Za-z]+,\s*/, "").trim();
  const parsed = new Date(cleaned);

  let weekday = "DAY";
  let formattedDate = cleaned;

  if (!isNaN(parsed.getTime())) {
    weekday = parsed.toLocaleDateString("en-US", { weekday: "long" }).toUpperCase();
    const day = parsed.getDate();
    const getSuffix = (n: number) => {
      if (n >= 11 && n <= 13) return "th";
      switch (n % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    };
    const month = parsed.toLocaleDateString("en-US", { month: "long" });
    const year = parsed.getFullYear();
    formattedDate = `${day}${getSuffix(day)} ${month}, ${year}`;
  } else {
    // Fallback extraction
    const match = dateStr.match(/^([A-Za-z]+),\s*(.*)$/);
    if (match) {
      weekday = match[1].toUpperCase();
      formattedDate = match[2];
    }
  }

  return { weekday, formattedDate };
}

export default function CelebrationsSection({ data, onClose }: CelebrationsSectionProps) {
  const { title, events } = data.celebrations;
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedEvent(null);
      }
    };
    if (selectedEvent) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedEvent]);

  // Helper for Google Calendar link
  const createGoogleCalendarUrl = (event: EventItem) => {
    const title = encodeURIComponent(`${event.title} - ${data.couple.brideFirstName} & ${data.couple.groomFirstName}`);
    const details = encodeURIComponent(`${event.description}\n\nVenue: ${event.venue}\nDress Code: ${event.dressCodeText}`);
    const location = encodeURIComponent(event.venue);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  return (
    <section className="relative w-full py-12 px-4 sm:px-6 flex flex-col items-center bg-[#F5EEE6]">
      {/* Top Right Circular Grey Close (X) Button (matching Image 2 when used as overlay/section) */}
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-8 h-8 rounded-full bg-[#635b55] hover:bg-[#4d4640] active:scale-95 text-white flex items-center justify-center shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8C6068]"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>
      )}

      <div className="w-full max-w-[440px]">
        {/* Section Title: The Celebrations in maroon script font matching Image 2 */}
        <div className="text-center mb-10">
          <h2 className="font-script text-4xl sm:text-5xl md:text-[54px] text-[#6B2D35] leading-tight filter drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
            {title}
          </h2>
        </div>

        {/* Vertical Maroon Timeline */}
        <div className="relative pl-7 sm:pl-8">
          {/* Main Maroon Line running vertically on the left (Image 2) */}
          <div className="absolute left-2.5 sm:left-3 top-3 bottom-0 w-[3px] bg-[#6B2D35] z-0">
            {/* Last segment gradient fade-out at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent via-[#6B2D35]/50 to-[#F5EEE6]" />
          </div>

          {/* Event Items */}
          <div className="space-y-10 sm:space-y-12 relative z-10">
            {events.map((event: EventItem, index: number) => {
              const { weekday, formattedDate } = parseDateParts(event.fullDate);
              const isLast = index === events.length - 1;

              return (
                <div key={event.id} className="relative flex items-start group">
                  {/* Timeline Heart Marker centered on vertical line */}
                  <div
                    className="absolute -left-[27px] sm:-left-[29px] top-1.5 w-6 h-6 rounded-full bg-[#F5EEE6] flex items-center justify-center z-10"
                    aria-hidden="true"
                  >
                    <Heart className="w-4 h-4 fill-[#6B2D35] text-[#6B2D35] transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Event Content (Matching Image 2 exact 4-row layout) */}
                  <div className="w-full pl-2 sm:pl-3 flex flex-col">
                    {/* Row 1: Event Name on left (semi-bold serif, maroon) & Time right-aligned in dark text */}
                    <div className="flex items-baseline justify-between gap-3 mb-1">
                      <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#6B2D35] leading-snug">
                        {event.title}
                      </h3>
                      <span className="font-serif text-sm sm:text-base text-[#5A252C] font-normal tracking-wide whitespace-nowrap">
                        {event.time}
                      </span>
                    </div>

                    {/* Row 2: Full date on left (darker serif) & Weekday in uppercase on right */}
                    <div className="flex items-baseline justify-between gap-3 mb-1.5">
                      <span className="font-serif text-sm sm:text-base text-[#5A252C] font-semibold tracking-wide">
                        {formattedDate}
                      </span>
                      <span className="font-serif text-xs sm:text-sm text-[#5A252C] font-semibold tracking-[0.15em] uppercase">
                        {weekday}
                      </span>
                    </div>

                    {/* Row 3: Venue and city in lighter muted-maroon serif */}
                    <div className="mb-4">
                      <p className="font-serif text-sm sm:text-[15px] text-[#8C6068] font-normal">
                        {event.venue}
                      </p>
                    </div>

                    {/* Row 4: Two pill-shaped buttons side by side */}
                    <div className="flex items-center gap-2.5 sm:gap-3 pt-0.5">
                      {/* Get Directions Button */}
                      <a
                        href={event.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 sm:px-4 rounded-full bg-[#8C6068] hover:bg-[#6B2D35] active:scale-[0.98] text-[#FFF8EC] text-center font-serif text-xs sm:text-sm font-medium tracking-wide shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8C6068]/50"
                      >
                        Get Directions
                      </a>

                      {/* Event Details Button */}
                      <button
                        type="button"
                        onClick={() => setSelectedEvent(event)}
                        className="flex-1 py-2 px-3 sm:px-4 rounded-full bg-[#8C6068] hover:bg-[#6B2D35] active:scale-[0.98] text-[#FFF8EC] text-center font-serif text-xs sm:text-sm font-medium tracking-wide shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8C6068]/50"
                      >
                        Event Details
                      </button>
                    </div>

                    {/* Subtle divider between items for mobile clarity */}
                    {!isLast && (
                      <div className="w-full mt-7 border-b border-[#8C6068]/15" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-event-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="relative w-full max-w-[420px] bg-[#F5EEE6] rounded-[28px] p-6 sm:p-7 shadow-2xl border border-[#8C6068]/30 flex flex-col text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button (Circular grey with white X) */}
            <button
              type="button"
              onClick={() => setSelectedEvent(null)}
              aria-label="Close event details"
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#635b55] hover:bg-[#4d4640] active:scale-95 text-white flex items-center justify-center shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#8C6068]"
            >
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Modal Header */}
            <div className="pr-8 mb-4">
              <span className="font-serif text-[11px] uppercase tracking-[0.25em] text-[#8C6068] font-semibold">
                Event Details
              </span>
              <h3
                id="modal-event-title"
                className="font-serif text-2xl sm:text-3xl font-semibold text-[#6B2D35] mt-0.5 leading-snug"
              >
                {selectedEvent.title}
              </h3>
            </div>

            {/* Event Meta Items */}
            <div className="space-y-2.5 py-3 border-y border-[#8C6068]/20 font-serif text-sm sm:text-base text-[#5A252C]">
              {/* Date & Weekday */}
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-[#8C6068] flex-shrink-0" />
                <span className="font-semibold">
                  {parseDateParts(selectedEvent.fullDate).formattedDate}
                </span>
                <span className="text-xs uppercase px-2 py-0.5 rounded bg-[#8C6068]/15 text-[#6B2D35] font-semibold">
                  {parseDateParts(selectedEvent.fullDate).weekday}
                </span>
              </div>

              {/* Timing */}
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#8C6068] flex-shrink-0" />
                <span>{selectedEvent.time}</span>
              </div>

              {/* Venue */}
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#8C6068] flex-shrink-0" />
                <span>{selectedEvent.venue}</span>
              </div>
            </div>

            {/* Description */}
            <div className="my-4">
              <p className="font-serif text-sm sm:text-base text-[#5A252C] leading-relaxed italic">
                &ldquo;{selectedEvent.description}&rdquo;
              </p>
            </div>

            {/* Dress Code Section */}
            {selectedEvent.dressCodeText && (
              <div className="p-3.5 rounded-2xl bg-[#EBD7DA]/40 border border-[#8C6068]/20 mb-5">
                <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-[#6B2D35] font-semibold mb-2">
                  <Palette className="w-3.5 h-3.5 text-[#8C6068]" />
                  <span>Dress Code</span>
                </div>
                <p className="font-serif text-xs sm:text-sm text-[#5A252C] mb-2.5">
                  {selectedEvent.dressCodeText}
                </p>
                {/* Palette color dots */}
                {selectedEvent.dressCodePalette && selectedEvent.dressCodePalette.length > 0 && (
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-serif text-[#8C6068]">Recommended tones:</span>
                    <div className="flex items-center gap-1.5">
                      {selectedEvent.dressCodePalette.map((color, idx) => (
                        <span
                          key={idx}
                          className="w-4 h-4 rounded-full border border-black/15 shadow-sm inline-block"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Modal Action Buttons */}
            <div className="flex items-center gap-2.5">
              <a
                href={selectedEvent.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-full bg-[#8C6068] hover:bg-[#6B2D35] text-[#FFF8EC] text-center font-serif text-xs sm:text-sm font-medium tracking-wide shadow-sm hover:shadow transition-all"
              >
                Get Directions
              </a>
              <a
                href={createGoogleCalendarUrl(selectedEvent)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-full border border-[#8C6068] text-[#6B2D35] hover:bg-[#8C6068]/15 text-center font-serif text-xs sm:text-sm font-medium tracking-wide transition-all"
              >
                Add to Calendar
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
