"use client";

import React, { type CSSProperties } from "react";
import { WeddingData } from "@/data/invite";

interface FamiliesSectionProps {
  data: WeddingData;
}

// Falling petals configuration [left %, size px, fall duration s, start delay s, color, border-radius]
type Petal = [number, number, number, number, string, string];

const FAMILIES_PETALS: Petal[] = [
  [4.2, 12, 14, -6, "#D9A23A", "150% 0 150% 0"],
  [12.5, 10, 11, -2, "#7A1F30", "100% 0 100% 0"],
  [22.0, 9, 13, -9, "#C47F2C", "60% 40% 60% 40%/90% 90% 30% 30%"],
  [31.8, 11, 10, -4, "#8E2B3C", "150% 0 150% 0"],
  [45.0, 8, 12, -7, "#5E1A2A", "100% 0 100% 0"],
  [58.2, 12, 13, -3, "#D8B26A", "150% 0 150% 0"],
  [70.5, 9, 11, -8, "#E6B94F", "60% 40% 60% 40%/90% 90% 30% 30%"],
  [82.0, 11, 14, -11, "#8E2B3C", "100% 0 100% 0"],
  [91.5, 10, 12, -1, "#D9A23A", "150% 0 150% 0"],
];

const css = `
.fam-root {
  --m: #6B2D35;
  --r: #8C6068;
  --c: #F5EEE6;
  --g: #B8923F;
  position: relative;
  overflow: hidden;
  background: var(--c);
  color: var(--m);
  font-family: 'Cormorant Garamond', Georgia, serif;
  text-align: center;
  max-width: 440px;
  margin: 0 auto;
  padding: 24px 16px 36px;
  box-sizing: border-box;
}
.fam-defs {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
}
.fam-toran {
  margin: 0 -16px;
  width: calc(100% + 32px) !important;
  display: block;
  height: auto;
  overflow: visible;
}
.fam-orn {
  width: 150px !important;
  margin: 8px auto 20px;
  display: block;
  height: auto;
  overflow: visible;
}
.fam-strand {
  transform-box: fill-box;
  transform-origin: 50% 0;
  animation: fam-swing 3.8s ease-in-out infinite;
  animation-delay: var(--d);
}
@keyframes fam-swing {
  0%, 100% { transform: rotate(-7deg); }
  50% { transform: rotate(7deg); }
}
.fam-petal {
  position: absolute;
  top: -24px;
  left: var(--x);
  width: var(--s);
  height: var(--s);
  background: var(--k);
  opacity: 0;
  pointer-events: none;
  animation: fam-fall var(--t) linear infinite, fam-drift 4s ease-in-out infinite alternate;
  animation-delay: var(--w), var(--w);
}
@keyframes fam-fall {
  0% { top: -24px; opacity: 0; rotate: 0deg; }
  8% { opacity: 0.7; }
  90% { opacity: 0.55; }
  100% { top: 105%; opacity: 0; rotate: 300deg; }
}
@keyframes fam-drift {
  from { translate: -12px 0; }
  to { translate: 12px 0; }
}
@media (prefers-reduced-motion: reduce) {
  .fam-strand { animation: none !important; }
  .fam-petal { display: none !important; }
}
`;

function FamiliesPetals({ list }: { list: Petal[] }) {
  return (
    <>
      {list.map(([x, s, t, w, k, r], i) => (
        <span
          key={i}
          className="fam-petal"
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
    </>
  );
}

export default function FamiliesSection({ data }: FamiliesSectionProps) {
  const { bride, groom } = data.families;

  return (
    <section className="fam-root">
      <style>{css}</style>

      {/* Shared defs for the flower ornament */}
      <svg className="fam-defs" aria-hidden="true">
        <defs>
          <linearGradient id="famGM" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8E3F4B" />
            <stop offset="1" stopColor="#5A222B" />
          </linearGradient>
          <linearGradient id="famGG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#EBD6A0" />
            <stop offset="1" stopColor="#B98F3E" />
          </linearGradient>
          <g id="famFl">
            <g fill="#7A323C">
              <circle cy="-8" r="3.6" />
              <circle cy="8" r="3.6" />
              <circle cx="-8" r="3.6" />
              <circle cx="8" r="3.6" />
            </g>
            <circle r="7.2" fill="url(#famGM)" />
            <circle r="5" fill="#B5606C" />
            <circle r="3" fill="#F0D5D5" />
            <circle r="1.4" fill="#C9A24A" />
          </g>
          <path id="famLf" d="M0 0C4 -6 12 -8 18 -4C12 2 4 4 0 0Z" fill="url(#famGG)" />
        </defs>
      </svg>

      {/* Falling Marigold and Rose Petals */}
      <FamiliesPetals list={FAMILIES_PETALS} />

      {/* Outer Arched Frame Container */}
      <div className="relative w-full rounded-[140px_140px_28px_28px] border border-[#8C6068]/30 px-3 sm:px-6 pt-2 pb-8 bg-[#FAF6F0]/85 backdrop-blur-[2px] shadow-[0_4px_24px_rgba(107,45,53,0.06)] overflow-hidden">
        
        {/* Animated Marigold Toran Garland (from mandap design) with swaying strands */}
        <svg className="fam-toran" viewBox="0 0 400 120" aria-hidden="true">
          <defs>
            <g id="famMd">
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
            <g id="famHl">
              <path d="M0 0C5 -4.5 15 -4.5 23 0C15 4.5 5 4.5 0 0Z" fill="#C79A3B" />
              <path d="M1 0H21M7 0l4 -2.2M7 0l4 2.2M13 0l4 -2M13 0l4 2" stroke="#8A6420" strokeWidth=".6" fill="none" />
            </g>
            <g id="famTs">
              <circle r="2" fill="#D9A23A" />
              <path d="M-2.6 1.5Q-5 8 -3.4 12H3.4Q5 8 2.6 1.5Z" fill="#7A1F30" />
              <path d="M-3.4 12V21M-1.7 12V22M0 12V23M1.7 12V22M3.4 12V21" stroke="#5E1A2A" strokeWidth="1.1" strokeLinecap="round" />
              <path d="M-4 7H4" stroke="#D9A23A" strokeWidth=".9" />
            </g>
            <g id="famBl">
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
          <g className="fam-strand" style={{ "--d": "0.2s" } as CSSProperties}>
            <use href="#famHl" transform="translate(87.5 40) rotate(68) scale(1)" />
            <use href="#famHl" transform="translate(87.5 40) rotate(112) scale(1)" />
            <use href="#famHl" transform="translate(87.5 43) rotate(90) scale(.85)" />
          </g>
          <g className="fam-strand" style={{ "--d": "0.9s" } as CSSProperties}>
            <use href="#famHl" transform="translate(161.2 50) rotate(68) scale(1)" />
            <use href="#famHl" transform="translate(161.2 50) rotate(112) scale(1)" />
            <use href="#famHl" transform="translate(161.2 53) rotate(90) scale(.85)" />
          </g>
          <g className="fam-strand" style={{ "--d": "1.6s" } as CSSProperties}>
            <use href="#famHl" transform="translate(238.8 50) rotate(68) scale(1)" />
            <use href="#famHl" transform="translate(238.8 50) rotate(112) scale(1)" />
            <use href="#famHl" transform="translate(238.8 53) rotate(90) scale(.85)" />
          </g>
          <g className="fam-strand" style={{ "--d": "2.2s" } as CSSProperties}>
            <use href="#famHl" transform="translate(312.5 40) rotate(68) scale(1)" />
            <use href="#famHl" transform="translate(312.5 40) rotate(112) scale(1)" />
            <use href="#famHl" transform="translate(312.5 43) rotate(90) scale(.85)" />
          </g>
          <g className="fam-strand" style={{ "--d": "1.2s" } as CSSProperties}>
            <use href="#famHl" transform="translate(28 22) rotate(68) scale(1)" />
            <use href="#famHl" transform="translate(28 22) rotate(112) scale(1)" />
            <use href="#famHl" transform="translate(28 25) rotate(90) scale(.85)" />
          </g>
          <g className="fam-strand" style={{ "--d": "0.5s" } as CSSProperties}>
            <use href="#famHl" transform="translate(372 22) rotate(68) scale(1)" />
            <use href="#famHl" transform="translate(372 22) rotate(112) scale(1)" />
            <use href="#famHl" transform="translate(372 25) rotate(90) scale(.85)" />
          </g>

          {/* Swaying Marigold & Tassel Strands */}
          <g className="fam-strand" style={{ "--d": "0.4s" } as CSSProperties}>
            <line x1="52.6" y1="28" x2="52.6" y2="54" stroke="#8A6420" strokeWidth=".9" />
            <circle cx="52.6" cy="37.1" r="1.7" fill="#7A1F30" />
            <circle cx="52.6" cy="44.9" r="1.7" fill="#D9A23A" />
            <use href="#famTs" transform="translate(52.6 54)" />
          </g>
          <g className="fam-strand" style={{ "--d": "1.0s" } as CSSProperties}>
            <line x1="122.4" y1="44" x2="122.4" y2="72" stroke="#8A6420" strokeWidth=".9" />
            <circle cx="122.4" cy="53.8" r="1.7" fill="#7A1F30" />
            <circle cx="122.4" cy="62.2" r="1.7" fill="#D9A23A" />
            <use href="#famTs" transform="translate(122.4 72)" />
          </g>
          <g className="fam-strand" style={{ "--d": "1.4s" } as CSSProperties}>
            <line x1="200" y1="50" x2="200" y2="86" stroke="#8A6420" strokeWidth=".9" />
            <circle cx="200" cy="62.6" r="1.7" fill="#7A1F30" />
            <circle cx="200" cy="73.4" r="1.7" fill="#D9A23A" />
            <use href="#famBl" transform="translate(200 86)" />
          </g>
          <g className="fam-strand" style={{ "--d": "1.8s" } as CSSProperties}>
            <line x1="277.6" y1="44" x2="277.6" y2="72" stroke="#8A6420" strokeWidth=".9" />
            <circle cx="277.6" cy="53.8" r="1.7" fill="#7A1F30" />
            <circle cx="277.6" cy="62.2" r="1.7" fill="#D9A23A" />
            <use href="#famTs" transform="translate(277.6 72)" />
          </g>
          <g className="fam-strand" style={{ "--d": "2.3s" } as CSSProperties}>
            <line x1="347.4" y1="28" x2="347.4" y2="54" stroke="#8A6420" strokeWidth=".9" />
            <circle cx="347.4" cy="37.1" r="1.7" fill="#7A1F30" />
            <circle cx="347.4" cy="44.9" r="1.7" fill="#D9A23A" />
            <use href="#famTs" transform="translate(347.4 54)" />
          </g>

          {/* Marigold Flower Rosettes */}
          <use href="#famMd" transform="translate(52.6 22.4) scale(1.05)" />
          <use href="#famMd" transform="translate(122.4 36.6) scale(1.15)" />
          <use href="#famMd" transform="translate(200 42) scale(1.6)" />
          <use href="#famMd" transform="translate(277.6 36.6) scale(1.15)" />
          <use href="#famMd" transform="translate(347.4 22.4) scale(1.05)" />
        </svg>

        {/* Section Heading */}
        <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#6B2D35] tracking-wide mt-2">
          {data.families.sectionTitle}
        </h2>

        {/* Flower Ornament Divider (matching mandap section) */}
        <svg className="fam-orn" viewBox="0 0 200 24" aria-hidden="true">
          <path d="M10 12H78M122 12H190" stroke="#C9A24A" strokeWidth=".9" />
          <path d="M82 12l4 -3 4 3 -4 3zM110 12l4 -3 4 3 -4 3z" fill="#C9A24A" />
          <use href="#famLf" transform="translate(86 12) rotate(180) scale(.5)" />
          <use href="#famLf" transform="translate(114 12) scale(.5)" />
          <use href="#famFl" transform="translate(100 12) scale(.95)" />
        </svg>

        {/* 
          BRIDE & GROOM DETAILS IN A VERTICAL COLUMN (rather than row)
          Provides spacious, clean, and elegant reading experience
        */}
        <div className="flex flex-col gap-6 w-full max-w-[340px] mx-auto mt-2">
          
          {/* 1. THE BRIDE CARD */}
          <div className="relative w-full bg-[#FAF6F0] rounded-[32px] border border-[#8C6068]/30 pt-5 pb-6 px-4 sm:px-6 shadow-[0_6px_20px_rgba(107,45,53,0.05)] flex flex-col items-center text-center">
            {/* Top Flower Rosette Motif */}
            <div className="w-8 h-8 -mt-1 mb-2 flex items-center justify-center" aria-hidden="true">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <circle cx="20" cy="20" r="14" fill="#7A1F30" />
                <circle cx="20" cy="20" r="10" fill="#D9A23A" />
                <circle cx="20" cy="20" r="6" fill="#F5EEE6" />
                <circle cx="20" cy="20" r="3" fill="#5E1A2A" />
              </svg>
            </div>

            {/* Role */}
            <p className="font-serif text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#8C6068] font-semibold mb-1.5">
              {bride.role}
            </p>

            {/* Name */}
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#6B2D35] leading-snug mb-2">
              {bride.name}
            </h3>

            {/* Daughter of */}
            <p className="font-serif italic text-xs sm:text-sm text-[#8C6068] mb-1">
              {bride.relation}
            </p>

            {/* Parents */}
            <p className="font-serif text-sm sm:text-[15px] text-[#5A252C] font-medium whitespace-pre-line leading-relaxed mb-3">
              {bride.parents}
            </p>

            {/* Location */}
            <p className="font-serif text-xs text-[#8C6068] tracking-wider mt-auto pt-2 border-t border-[#8C6068]/15 w-full">
              {bride.location}
            </p>
          </div>

          {/* Central Connecting Ampersand with Marigold Motifs */}
          <div className="flex items-center justify-center gap-3 my-0.5">
            <span className="h-[1px] w-14 bg-gradient-to-r from-transparent to-[#C9A24A]" />
            <div className="w-9 h-9 rounded-full bg-[#FAF6F0] border border-[#C9A24A] text-[#6B2D35] flex items-center justify-center font-serif italic text-xl shadow-sm">
              &amp;
            </div>
            <span className="h-[1px] w-14 bg-gradient-to-l from-transparent to-[#C9A24A]" />
          </div>

          {/* 2. THE GROOM CARD */}
          <div className="relative w-full bg-[#FAF6F0] rounded-[32px] border border-[#8C6068]/30 pt-5 pb-6 px-4 sm:px-6 shadow-[0_6px_20px_rgba(107,45,53,0.05)] flex flex-col items-center text-center">
            {/* Top Flower Rosette Motif */}
            <div className="w-8 h-8 -mt-1 mb-2 flex items-center justify-center" aria-hidden="true">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <circle cx="20" cy="20" r="14" fill="#7A1F30" />
                <circle cx="20" cy="20" r="10" fill="#D9A23A" />
                <circle cx="20" cy="20" r="6" fill="#F5EEE6" />
                <circle cx="20" cy="20" r="3" fill="#5E1A2A" />
              </svg>
            </div>

            {/* Role */}
            <p className="font-serif text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#8C6068] font-semibold mb-1.5">
              {groom.role}
            </p>

            {/* Name */}
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#6B2D35] leading-snug mb-2">
              {groom.name}
            </h3>

            {/* Son of */}
            <p className="font-serif italic text-xs sm:text-sm text-[#8C6068] mb-1">
              {groom.relation}
            </p>

            {/* Parents */}
            <p className="font-serif text-sm sm:text-[15px] text-[#5A252C] font-medium whitespace-pre-line leading-relaxed mb-3">
              {groom.parents}
            </p>

            {/* Location */}
            <p className="font-serif text-xs text-[#8C6068] tracking-wider mt-auto pt-2 border-t border-[#8C6068]/15 w-full">
              {groom.location}
            </p>
          </div>

        </div>

        {/* Bottom Decorative Maroon Bar */}
        <div className="w-full max-w-[340px] mx-auto mt-6 h-2 rounded-full bg-gradient-to-r from-[#5A252C] via-[#8C6068] to-[#5A252C] shadow-sm border-t border-[#A7757E]/30" />

      </div>
    </section>
  );
}
