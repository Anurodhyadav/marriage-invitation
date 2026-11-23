"use client";

import React, { type CSSProperties } from "react";
import { WeddingData } from "@/data/invite";

interface FooterSectionProps {
  data: WeddingData;
}

// Falling petals configuration [left %, size px, fall duration s, start delay s, color, border-radius]
type Petal = [number, number, number, number, string, string];

const FOOTER_PETALS: Petal[] = [
  [6.5, 12, 13, -3, "#D9A23A", "150% 0 150% 0"],
  [18.2, 10, 11, -8, "#7A1F30", "100% 0 100% 0"],
  [32.0, 9, 14, -1, "#C47F2C", "60% 40% 60% 40%/90% 90% 30% 30%"],
  [48.5, 11, 12, -6, "#8E2B3C", "150% 0 150% 0"],
  [64.0, 10, 15, -10, "#D8B26A", "150% 0 150% 0"],
  [78.5, 9, 10, -4, "#E6B94F", "60% 40% 60% 40%/90% 90% 30% 30%"],
  [91.0, 11, 13, -9, "#5E1A2A", "100% 0 100% 0"],
];

const footerCss = `
.foot-root {
  position: relative;
  overflow: hidden;
  background: #F5EEE6;
  color: #6B2D35;
  text-align: center;
  width: 100%;
  padding: 16px 16px 40px;
  box-sizing: border-box;
}

.foot-defs {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
}

.foot-toran {
  margin: 0 auto 12px;
  width: 100%;
  max-width: 440px;
  display: block;
  height: auto;
  overflow: visible;
}

.foot-orn {
  width: 150px !important;
  margin: 12px auto 16px;
  display: block;
  height: auto;
  overflow: visible;
}

.foot-strand {
  transform-box: fill-box;
  transform-origin: 50% 0;
  animation: foot-swing 3.8s ease-in-out infinite;
  animation-delay: var(--d);
}

@keyframes foot-swing {
  0%, 100% { transform: rotate(-7deg); }
  50% { transform: rotate(7deg); }
}

.foot-petal {
  position: absolute;
  top: -24px;
  left: var(--x);
  width: var(--s);
  height: var(--s);
  background: var(--k);
  opacity: 0;
  pointer-events: none;
  animation: foot-fall var(--t) linear infinite, foot-drift 4s ease-in-out infinite alternate;
  animation-delay: var(--w), var(--w);
  z-index: 1;
}

@keyframes foot-fall {
  0% { top: -24px; opacity: 0; transform: rotate(0deg); }
  8% { opacity: 0.65; }
  88% { opacity: 0.55; }
  100% { top: 105%; opacity: 0; transform: rotate(300deg); }
}

@keyframes foot-drift {
  from { transform: translateX(-12px); }
  to { transform: translateX(12px); }
}

@media (prefers-reduced-motion: reduce) {
  .foot-strand { animation: none !important; }
  .foot-petal { display: none !important; }
}
`;

export default function FooterSection({ data }: FooterSectionProps) {
  return (
    <footer className="foot-root">
      <style>{footerCss}</style>

      {/* Shared defs for the flower ornament */}
      <svg className="foot-defs" aria-hidden="true">
        <defs>
          <linearGradient id="footGM" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8E3F4B" />
            <stop offset="1" stopColor="#5A222B" />
          </linearGradient>
          <linearGradient id="footGG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#EBD6A0" />
            <stop offset="1" stopColor="#B98F3E" />
          </linearGradient>
          <g id="footFl">
            <g fill="#7A323C">
              <circle cy="-8" r="3.6" />
              <circle cy="8" r="3.6" />
              <circle cx="-8" r="3.6" />
              <circle cx="8" r="3.6" />
            </g>
            <circle r="7.2" fill="url(#footGM)" />
            <circle r="5" fill="#B5606C" />
            <circle r="3" fill="#F0D5D5" />
            <circle r="1.4" fill="#C9A24A" />
          </g>
          <path id="footLf" d="M0 0C4 -6 12 -8 18 -4C12 2 4 4 0 0Z" fill="url(#footGG)" />
        </defs>
      </svg>

      {/* Falling Flower Petals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {FOOTER_PETALS.map(([x, s, t, w, k, r], i) => (
          <span
            key={i}
            className="foot-petal"
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

      <div className="relative z-10 w-full max-w-[440px] mx-auto flex flex-col items-center">
        {/* Animated Marigold Toran Garland (matching Hero and Families sections) */}
        <svg className="foot-toran" viewBox="0 0 400 120" aria-hidden="true">
          <defs>
            <g id="footMd">
              <g fill="#7A1F30">
                <circle cy="-6.4" r="3.4" />
                <circle cy="6.4" r="3.4" />
                <circle cx="-6.4" r="3.4" />
                <circle cx="6.4" r="3.4" />
                <circle cx="4.5" cy="4.5" r="3" />
                <circle cx="-4.5" cy="4.5" r="3" />
                <circle cx="4.5" cy="-4.5" r="3" />
                <circle cx="-4.5" cy="-4.5" r="3" />
              </g>
              <circle r="5.6" fill="#5E1A2A" />
              <circle r="4" fill="#D9A23A" />
              <circle r="2.8" fill="#F5EEE6" />
              <circle r="1.3" fill="#7A1F30" />
            </g>
            <g id="footHl">
              <path d="M0 0C5 -4.5 15 -4.5 23 0C15 4.5 5 4.5 0 0Z" fill="#C79A3B" />
              <path d="M1 0H21M7 0l4 -2.2M7 0l4 2.2M13 0l4 -2M13 0l4 2" stroke="#8A6420" strokeWidth=".6" fill="none" />
            </g>
            <g id="footTs">
              <circle r="2" fill="#D9A23A" />
              <path d="M-2.6 1.5Q-5 8 -3.4 12H3.4Q5 8 2.6 1.5Z" fill="#7A1F30" />
              <path d="M-3.4 12V21M-1.7 12V22M0 12V23M1.7 12V22M3.4 12V21" stroke="#5E1A2A" strokeWidth="1.1" strokeLinecap="round" />
              <path d="M-4 7H4" stroke="#D9A23A" strokeWidth=".9" />
            </g>
            <g id="footBl">
              <circle r="1.8" fill="#7A1F30" />
              <path d="M0 1C-7 7 -8 12 0 17C8 12 7 7 0 1Z" fill="#D9A23A" stroke="#7A1F30" strokeWidth=".7" />
              <path d="M0 4V15" stroke="#7A1F30" strokeWidth=".6" />
              <path d="M-5 17V25M-2.5 17.5V26M0 18V27M2.5 17.5V26M5 17V25" stroke="#7A1F30" strokeWidth="1.1" strokeLinecap="round" />
            </g>
          </defs>

          {/* Double Toran Curved Garland Lines */}
          <path d="M6 8Q200 76 394 8" fill="none" stroke="#8A6420" strokeWidth=".8" />
          <path d="M6 8Q200 76 394 8" fill="none" stroke="#D9A23A" strokeWidth="7.5" strokeLinecap="round" strokeDasharray=".1 14" />
          <path d="M6 8Q200 76 394 8" fill="none" stroke="#7A1F30" strokeWidth="7.5" strokeLinecap="round" strokeDasharray=".1 14" strokeDashoffset="-7" />
          <path d="M6 22Q200 92 394 22" fill="none" stroke="#8A6420" strokeWidth=".8" />
          <path d="M6 22Q200 92 394 22" fill="none" stroke="#D9A23A" strokeWidth="7.5" strokeLinecap="round" strokeDasharray=".1 14" />
          <path d="M6 22Q200 92 394 22" fill="none" stroke="#7A1F30" strokeWidth="7.5" strokeLinecap="round" strokeDasharray=".1 14" strokeDashoffset="-7" />

          {/* Swaying Mango Leaves */}
          <g className="foot-strand" style={{ "--d": "0.2s" } as CSSProperties}>
            <use href="#footHl" transform="translate(87.5 40) rotate(68) scale(1)" />
            <use href="#footHl" transform="translate(87.5 40) rotate(112) scale(1)" />
            <use href="#footHl" transform="translate(87.5 43) rotate(90) scale(.85)" />
          </g>
          <g className="foot-strand" style={{ "--d": "0.9s" } as CSSProperties}>
            <use href="#footHl" transform="translate(161.2 50) rotate(68) scale(1)" />
            <use href="#footHl" transform="translate(161.2 50) rotate(112) scale(1)" />
            <use href="#footHl" transform="translate(161.2 53) rotate(90) scale(.85)" />
          </g>
          <g className="foot-strand" style={{ "--d": "1.6s" } as CSSProperties}>
            <use href="#footHl" transform="translate(238.8 50) rotate(68) scale(1)" />
            <use href="#footHl" transform="translate(238.8 50) rotate(112) scale(1)" />
            <use href="#footHl" transform="translate(238.8 53) rotate(90) scale(.85)" />
          </g>
          <g className="foot-strand" style={{ "--d": "2.2s" } as CSSProperties}>
            <use href="#footHl" transform="translate(312.5 40) rotate(68) scale(1)" />
            <use href="#footHl" transform="translate(312.5 40) rotate(112) scale(1)" />
            <use href="#footHl" transform="translate(312.5 43) rotate(90) scale(.85)" />
          </g>
          <g className="foot-strand" style={{ "--d": "1.2s" } as CSSProperties}>
            <use href="#footHl" transform="translate(28 22) rotate(68) scale(1)" />
            <use href="#footHl" transform="translate(28 22) rotate(112) scale(1)" />
            <use href="#footHl" transform="translate(28 25) rotate(90) scale(.85)" />
          </g>
          <g className="foot-strand" style={{ "--d": "0.5s" } as CSSProperties}>
            <use href="#footHl" transform="translate(372 22) rotate(68) scale(1)" />
            <use href="#footHl" transform="translate(372 22) rotate(112) scale(1)" />
            <use href="#footHl" transform="translate(372 25) rotate(90) scale(.85)" />
          </g>

          {/* Swaying Marigold & Tassel Strands */}
          <g className="foot-strand" style={{ "--d": "0.4s" } as CSSProperties}>
            <line x1="52.6" y1="28" x2="52.6" y2="54" stroke="#8A6420" strokeWidth=".9" />
            <circle cx="52.6" cy="37.1" r="1.7" fill="#7A1F30" />
            <circle cx="52.6" cy="44.9" r="1.7" fill="#D9A23A" />
            <use href="#footTs" transform="translate(52.6 54)" />
          </g>
          <g className="foot-strand" style={{ "--d": "1.0s" } as CSSProperties}>
            <line x1="122.4" y1="44" x2="122.4" y2="72" stroke="#8A6420" strokeWidth=".9" />
            <circle cx="122.4" cy="53.8" r="1.7" fill="#7A1F30" />
            <circle cx="122.4" cy="62.2" r="1.7" fill="#D9A23A" />
            <use href="#footTs" transform="translate(122.4 72)" />
          </g>
          <g className="foot-strand" style={{ "--d": "1.4s" } as CSSProperties}>
            <line x1="200" y1="50" x2="200" y2="86" stroke="#8A6420" strokeWidth=".9" />
            <circle cx="200" cy="62.6" r="1.7" fill="#7A1F30" />
            <circle cx="200" cy="73.4" r="1.7" fill="#D9A23A" />
            <use href="#footBl" transform="translate(200 86)" />
          </g>
          <g className="foot-strand" style={{ "--d": "1.8s" } as CSSProperties}>
            <line x1="277.6" y1="44" x2="277.6" y2="72" stroke="#8A6420" strokeWidth=".9" />
            <circle cx="277.6" cy="53.8" r="1.7" fill="#7A1F30" />
            <circle cx="277.6" cy="62.2" r="1.7" fill="#D9A23A" />
            <use href="#footTs" transform="translate(277.6 72)" />
          </g>
          <g className="foot-strand" style={{ "--d": "2.3s" } as CSSProperties}>
            <line x1="347.4" y1="28" x2="347.4" y2="54" stroke="#8A6420" strokeWidth=".9" />
            <circle cx="347.4" cy="37.1" r="1.7" fill="#7A1F30" />
            <circle cx="347.4" cy="44.9" r="1.7" fill="#D9A23A" />
            <use href="#footTs" transform="translate(347.4 54)" />
          </g>

          {/* Marigold Flower Rosettes */}
          <use href="#footMd" transform="translate(52.6 22.4) scale(1.05)" />
          <use href="#footMd" transform="translate(122.4 36.6) scale(1.15)" />
          <use href="#footMd" transform="translate(200 42) scale(1.6)" />
          <use href="#footMd" transform="translate(277.6 36.6) scale(1.15)" />
          <use href="#footMd" transform="translate(347.4 22.4) scale(1.05)" />
        </svg>

        {/* Flower Ornament Divider (matching the sections above) */}
        <svg className="foot-orn" viewBox="0 0 200 24" aria-hidden="true">
          <path d="M10 12H78M122 12H190" stroke="#C9A24A" strokeWidth=".9" />
          <path d="M82 12l4 -3 4 3 -4 3zM110 12l4 -3 4 3 -4 3z" fill="#C9A24A" />
          <use href="#footLf" transform="translate(86 12) rotate(180) scale(.5)" />
          <use href="#footLf" transform="translate(114 12) scale(.5)" />
          <use href="#footFl" transform="translate(100 12) scale(.95)" />
        </svg>

        {/* Nepali Blessing / Thank You Quote */}
        <p className="font-devanagari text-lg sm:text-xl font-normal text-[#6B2D35] leading-relaxed max-w-[340px] mb-2 px-2">
          {data.footer.nepaliQuote}
        </p>

        {/* English Translation */}
        <p className="font-serif italic text-sm sm:text-base text-[#8C6068] mb-6 max-w-[320px] px-2">
          {data.footer.englishQuote}
        </p>

        {/* Couple Names in Script */}
        <div className="my-2 flex items-center justify-center flex-wrap gap-x-2">
          <span className="font-script text-4xl sm:text-5xl md:text-[54px] text-[#6B2D35] leading-tight filter drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
            {data.couple.brideFirstName}
          </span>
          <span className="font-serif italic text-2xl sm:text-3xl text-[#8C6068] mx-1">
            &amp;
          </span>
          <span className="font-script text-4xl sm:text-5xl md:text-[54px] text-[#6B2D35] leading-tight filter drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
            {data.couple.groomFirstName}
          </span>
        </div>

        {/* Wedding Hashtag */}
        <p className="font-serif text-sm sm:text-base tracking-[0.16em] text-[#5A252C] font-semibold mt-3">
          {data.couple.hashtag}
        </p>

        {/* Bottom Flower Ornament Finial */}
        <svg className="foot-orn mt-4" viewBox="0 0 200 24" aria-hidden="true">
          <path d="M25 12H78M122 12H175" stroke="#C9A24A" strokeWidth=".9" />
          <path d="M82 12l4 -3 4 3 -4 3zM110 12l4 -3 4 3 -4 3z" fill="#C9A24A" />
          <use href="#footLf" transform="translate(86 12) rotate(180) scale(.5)" />
          <use href="#footLf" transform="translate(114 12) scale(.5)" />
          <use href="#footFl" transform="translate(100 12) scale(.95)" />
        </svg>
      </div>
    </footer>
  );
}
