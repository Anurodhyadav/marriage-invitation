"use client";

import React, { useState, useEffect, useRef, type CSSProperties } from "react";
import { WeddingData, EventItem } from "@/data/invite";
import { Heart, X } from "lucide-react";

interface CelebrationsSectionProps {
  data: WeddingData;
  onClose?: () => void;
}

// Falling petals configuration [left %, size px, fall duration s, start delay s, color, border-radius]
type Petal = [number, number, number, number, string, string];

const CELEBRATIONS_PETALS: Petal[] = [
  [3.5, 13, 14, -4, "#D9A23A", "150% 0 150% 0"],
  [10.2, 11, 10, -11, "#7A1F30", "100% 0 100% 0"],
  [18.7, 9, 13, -2, "#C47F2C", "60% 40% 60% 40%/90% 90% 30% 30%"],
  [27.4, 12, 11, -8, "#8E2B3C", "150% 0 150% 0"],
  [36.8, 8, 15, -13, "#5E1A2A", "100% 0 100% 0"],
  [45.3, 14, 12, -3, "#D8B26A", "150% 0 150% 0"],
  [54.9, 10, 14, -9, "#D9A23A", "60% 40% 60% 40%/90% 90% 30% 30%"],
  [63.5, 9, 11, -1, "#7A1F30", "100% 0 100% 0"],
  [72.1, 13, 13, -7, "#8E2B3C", "150% 0 150% 0"],
  [80.6, 11, 15, -12, "#E6B94F", "60% 40% 60% 40%/90% 90% 30% 30%"],
  [89.2, 12, 12, -5, "#C47F2C", "150% 0 150% 0"],
  [95.8, 8, 14, -10, "#5E1A2A", "100% 0 100% 0"],
];

const celebrationsCss = `
.cel-petal {
  position: absolute;
  top: -24px;
  left: var(--x);
  width: var(--s);
  height: var(--s);
  background: var(--k);
  opacity: 0;
  pointer-events: none;
  animation: cel-fall var(--t) linear infinite, cel-drift 4.2s ease-in-out infinite alternate;
  animation-delay: var(--w), var(--w);
  z-index: 1;
}

@keyframes cel-fall {
  0% { top: -24px; opacity: 0; transform: rotate(0deg); }
  8% { opacity: 0.65; }
  88% { opacity: 0.55; }
  100% { top: 104%; opacity: 0; transform: rotate(320deg); }
}

@keyframes cel-drift {
  from { transform: translateX(-12px); }
  to { transform: translateX(12px); }
}

@media (prefers-reduced-motion: reduce) {
  .cel-petal { display: none !important; }
  .cel-animated-item {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
`;

// Helper for calculating weekday and formatted date
function parseDateParts(dateStr: string) {
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
    const match = dateStr.match(/^([A-Za-z]+),\s*(.*)$/);
    if (match) {
      weekday = match[1].toUpperCase();
      formattedDate = match[2];
    }
  }

  return { weekday, formattedDate };
}

// Single timeline item framed symmetrically by both left & right heart markers
function TimelineEventItem({
  event,
  isLast,
  index,
}: {
  event: EventItem;
  isLast: boolean;
  index: number;
}) {
  const { weekday, formattedDate } = parseDateParts(event.fullDate);
  const itemRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className="relative flex items-start group cel-animated-item"
    >
      {/* 1. Left Timeline Heart Marker centered on left vertical line */}
      <div
        className="absolute -left-[28px] sm:-left-[32px] top-1.5 w-6 h-6 rounded-full bg-[#F5EEE6] flex items-center justify-center z-10 transition-all duration-700 ease-out"
        style={{
          transform: isVisible ? "scale(1)" : "scale(0.3)",
          opacity: isVisible ? 1 : 0,
          transitionDelay: `${index * 90}ms`,
        }}
        aria-hidden="true"
      >
        <Heart className="w-4 h-4 fill-[#6B2D35] text-[#6B2D35] transition-transform duration-300 group-hover:scale-110" />
      </div>

      {/* 2. Right Timeline Heart Marker centered on right vertical line */}
      <div
        className="absolute -right-[28px] sm:-right-[32px] top-1.5 w-6 h-6 rounded-full bg-[#F5EEE6] flex items-center justify-center z-10 transition-all duration-700 ease-out"
        style={{
          transform: isVisible ? "scale(1)" : "scale(0.3)",
          opacity: isVisible ? 1 : 0,
          transitionDelay: `${index * 90}ms`,
        }}
        aria-hidden="true"
      >
        <Heart className="w-4 h-4 fill-[#6B2D35] text-[#6B2D35] transition-transform duration-300 group-hover:scale-110" />
      </div>

      {/* Event Content Container */}
      <div className="w-full px-2 sm:px-3 flex flex-col">
        {/* Row 1: Event Name & Time with scroll slide-up reveal */}
        <div
          className="flex items-baseline justify-between gap-3 mb-1.5 transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(18px)",
            transitionDelay: `${index * 90 + 40}ms`,
          }}
        >
          <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#6B2D35] leading-snug">
            {event.title}
          </h3>
          <span className="font-serif text-sm sm:text-base text-[#5A252C] font-normal tracking-wide whitespace-nowrap">
            {event.time}
          </span>
        </div>

        {/* Row 2: Full date & Weekday with scroll slide-up reveal */}
        <div
          className="flex items-baseline justify-between gap-3 mb-2 transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(18px)",
            transitionDelay: `${index * 90 + 120}ms`,
          }}
        >
          <span className="font-serif text-sm sm:text-base text-[#5A252C] font-semibold tracking-wide">
            {formattedDate}
          </span>
          <span className="font-serif text-xs sm:text-sm text-[#5A252C] font-semibold tracking-[0.15em] uppercase">
            {weekday}
          </span>
        </div>

        {/* Row 3: Venue in muted-maroon serif with scroll slide-up reveal */}
        <div
          className="transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(18px)",
            transitionDelay: `${index * 90 + 200}ms`,
          }}
        >
          <p className="font-serif text-sm sm:text-[15px] text-[#8C6068] font-normal">
            {event.venue}
          </p>
        </div>

        {/* Subtle divider between items for mobile clarity */}
        {!isLast && (
          <div
            className="w-full mt-8 sm:mt-10 border-b border-[#8C6068]/15 transition-opacity duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transitionDelay: `${index * 90 + 260}ms`,
            }}
          />
        )}
      </div>
    </div>
  );
}

export default function CelebrationsSection({ data, onClose }: CelebrationsSectionProps) {
  const { title, events } = data.celebrations;
  const titleRef = useRef<HTMLDivElement | null>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTitleVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 flex flex-col items-center bg-[#F5EEE6] overflow-hidden">
      <style>{celebrationsCss}</style>

      {/* Falling Flower Petals across Celebrations Section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {CELEBRATIONS_PETALS.map(([x, s, t, w, k, r], i) => (
          <span
            key={i}
            className="cel-petal"
            style={
              {
                "--x": `${x}%`,
                "--s": `${s}px`,
                "--t": `${t}s`,
                "--w": `${w}s`,
                "--k": k,
                borderRadius: r,
              } as CSSProperties
            }
          />
        ))}
      </div>

      {/* Top Right Circular Grey Close (X) Button (if passed via props) */}
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

      <div className="w-full max-w-[460px] relative z-10">
        {/* Section Title: The Celebrations in maroon script font with scroll fade-in */}
        <div
          ref={titleRef}
          className="text-center mb-12 sm:mb-16 transition-all duration-700 ease-out"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <h2 className="font-script text-4xl sm:text-5xl md:text-[56px] text-[#6B2D35] leading-tight filter drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
            {title}
          </h2>
        </div>

        {/* Dual Symmetrical Vertical Maroon Timelines (Left & Right) */}
        <div className="relative px-8 sm:px-10">
          {/* 1. Left Maroon Vertical Line */}
          <div className="absolute left-[15px] sm:left-[19px] top-3 bottom-0 w-[2.5px] bg-[#6B2D35] z-0">
            {/* Last segment gradient fade-out at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#6B2D35]/50 to-[#F5EEE6]" />
            {/* Subtle bottom decorative gold leaf accent near fade-out */}
            <span
              className="absolute bottom-5 -left-1.5 w-3 h-3 rounded-full opacity-70 pointer-events-none"
              style={{
                backgroundColor: "#D9A23A",
                borderRadius: "150% 0 150% 0",
                transform: "rotate(-25deg)",
              }}
              aria-hidden="true"
            />
          </div>

          {/* 2. Right Maroon Vertical Line */}
          <div className="absolute right-[15px] sm:right-[19px] top-3 bottom-0 w-[2.5px] bg-[#6B2D35] z-0">
            {/* Last segment gradient fade-out at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#6B2D35]/50 to-[#F5EEE6]" />
            {/* Subtle bottom decorative gold leaf accent near fade-out */}
            <span
              className="absolute bottom-5 -right-1.5 w-3 h-3 rounded-full opacity-70 pointer-events-none"
              style={{
                backgroundColor: "#D9A23A",
                borderRadius: "0 150% 0 150%",
                transform: "rotate(25deg)",
              }}
              aria-hidden="true"
            />
          </div>

          {/* Event Items with generous vertical breathing room */}
          <div className="space-y-12 sm:space-y-16 relative z-10">
            {events.map((event: EventItem, index: number) => (
              <TimelineEventItem
                key={event.id}
                event={event}
                index={index}
                isLast={index === events.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
