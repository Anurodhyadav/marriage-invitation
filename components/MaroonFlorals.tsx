"use client";

import React from "react";

// Maroon Floral Palette
// Deep maroon: #6B2D35
// Burgundy: #7A3340
// Dusty rose: #B07A82
// Soft blush: #E8CFCF
// Muted gold: #C9A96E
// Cream background: #F5EEE6

interface FloralProps {
  className?: string;
}

/**
 * Hanging / arched floral garland border framing "शुभ विवाह"
 * Deep maroon roses, burgundy blossoms, dusty rose petals, soft blush and muted gold leaves
 * With a subtle gentle sway animation (~7s loop)
 */
export function MaroonGarland({ className = "" }: FloralProps) {
  return (
    <div
      className={`w-full max-w-[440px] pointer-events-none select-none overflow-visible ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 500 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible animate-floral-sway"
      >
        <defs>
          <linearGradient id="roseBloomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#8C6068" />
            <stop offset="50%" stop-color="#6B2D35" />
            <stop offset="100%" stop-color="#471B20" />
          </linearGradient>
          <linearGradient id="blushPetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFF5F6" />
            <stop offset="60%" stop-color="#E8CFCF" />
            <stop offset="100%" stop-color="#B07A82" />
          </linearGradient>
          <linearGradient id="goldLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#F5E8CE" />
            <stop offset="60%" stop-color="#C9A96E" />
            <stop offset="100%" stop-color="#9E7836" />
          </linearGradient>
        </defs>

        {/* Delicate Swag Vine (Hanging Arch) */}
        <path
          d="M20 18 Q 130 55 250 56 Q 370 55 480 18"
          stroke="#7A3340"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="4 2"
          opacity="0.8"
        />
        <path
          d="M40 28 Q 140 68 250 70 Q 360 68 460 28"
          stroke="#B07A82"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Left Hanging Sprig */}
        <g transform="translate(45, 15)">
          <path d="M0 0 C 15 25 20 50 15 75" stroke="#7A3340" strokeWidth="1.5" strokeLinecap="round" />
          {/* Leaves */}
          <path d="M5 22 C -8 18 -12 28 -2 32 Z" fill="#B07A82" />
          <path d="M12 40 C 26 36 28 48 16 50 Z" fill="url(#goldLeafGrad)" />
          <path d="M16 60 C 5 62 6 72 14 74 Z" fill="#7A3340" />
          {/* Drooping rosebud */}
          <circle cx="15" cy="78" r="4.5" fill="#6B2D35" />
          <circle cx="15" cy="78" r="2.2" fill="#C9A96E" />
        </g>

        {/* Right Hanging Sprig */}
        <g transform="translate(455, 15) scale(-1, 1)">
          <path d="M0 0 C 15 25 20 50 15 75" stroke="#7A3340" strokeWidth="1.5" strokeLinecap="round" />
          {/* Leaves */}
          <path d="M5 22 C -8 18 -12 28 -2 32 Z" fill="#B07A82" />
          <path d="M12 40 C 26 36 28 48 16 50 Z" fill="url(#goldLeafGrad)" />
          <path d="M16 60 C 5 62 6 72 14 74 Z" fill="#7A3340" />
          {/* Drooping rosebud */}
          <circle cx="15" cy="78" r="4.5" fill="#6B2D35" />
          <circle cx="15" cy="78" r="2.2" fill="#C9A96E" />
        </g>

        {/* Left Cluster of Roses & Foliage */}
        <g transform="translate(135, 38)">
          <path d="M-15 0 C -30 -15 -10 -25 0 -12 Z" fill="url(#goldLeafGrad)" />
          <path d="M-22 8 C -38 12 -30 28 -15 16 Z" fill="#7A3340" />
          {/* Blossom */}
          <circle cx="-5" cy="0" r="11" fill="url(#roseBloomGrad)" />
          <circle cx="-5" cy="0" r="7" fill="url(#blushPetalGrad)" />
          <circle cx="-5" cy="0" r="3.5" fill="#6B2D35" />
          <circle cx="-5" cy="0" r="1.5" fill="#C9A96E" />
          {/* Bud */}
          <circle cx="14" cy="-8" r="5.5" fill="#B07A82" />
          <circle cx="14" cy="-8" r="2" fill="#C9A96E" />
        </g>

        {/* Right Cluster of Roses & Foliage */}
        <g transform="translate(365, 38) scale(-1, 1)">
          <path d="M-15 0 C -30 -15 -10 -25 0 -12 Z" fill="url(#goldLeafGrad)" />
          <path d="M-22 8 C -38 12 -30 28 -15 16 Z" fill="#7A3340" />
          {/* Blossom */}
          <circle cx="-5" cy="0" r="11" fill="url(#roseBloomGrad)" />
          <circle cx="-5" cy="0" r="7" fill="url(#blushPetalGrad)" />
          <circle cx="-5" cy="0" r="3.5" fill="#6B2D35" />
          <circle cx="-5" cy="0" r="1.5" fill="#C9A96E" />
          {/* Bud */}
          <circle cx="14" cy="-8" r="5.5" fill="#B07A82" />
          <circle cx="14" cy="-8" r="2" fill="#C9A96E" />
        </g>

        {/* Center Floral Crest (At arch apex, delicate to frame शुभ विवाह without overlapping) */}
        <g transform="translate(250, 48)">
          {/* Gold & Maroon delicate arching leaves */}
          <path d="M-35 5 C -50 -5 -40 -18 -25 -8 Z" fill="url(#goldLeafGrad)" />
          <path d="M35 5 C 50 -5 40 -18 25 -8 Z" fill="url(#goldLeafGrad)" />
          <path d="M-20 10 C -32 20 -15 28 -10 16 Z" fill="#7A3340" />
          <path d="M20 10 C 32 20 15 28 10 16 Z" fill="#7A3340" />
          
          {/* Central Rose Blossom */}
          <circle cx="0" cy="5" r="13" fill="url(#roseBloomGrad)" />
          <circle cx="0" cy="5" r="8.5" fill="url(#blushPetalGrad)" />
          <circle cx="0" cy="5" r="4.5" fill="#6B2D35" />
          <circle cx="0" cy="5" r="1.8" fill="#C9A96E" />
          
          {/* Flanking Small Buds */}
          <circle cx="-16" cy="4" r="5" fill="#B07A82" />
          <circle cx="-16" cy="4" r="2" fill="#C9A96E" />
          <circle cx="16" cy="4" r="5" fill="#B07A82" />
          <circle cx="16" cy="4" r="2" fill="#C9A96E" />

          {/* Golden pollen drops */}
          <circle cx="-32" cy="-4" r="1.8" fill="#C9A96E" />
          <circle cx="32" cy="-4" r="1.8" fill="#C9A96E" />
          <circle cx="0" cy="22" r="1.8" fill="#C9A96E" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Floral Corner Sprig for Arched Cards and Footer
 */
export function MaroonCornerSprig({ className = "", flip = false }: FloralProps & { flip?: boolean }) {
  return (
    <div
      className={`pointer-events-none select-none ${className} ${flip ? "scale-x-[-1]" : ""}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <defs>
          <linearGradient id="cornerRoseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#8C6068" />
            <stop offset="60%" stop-color="#6B2D35" />
            <stop offset="100%" stop-color="#471B20" />
          </linearGradient>
          <linearGradient id="cornerGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#F5E8CE" />
            <stop offset="60%" stop-color="#C9A96E" />
            <stop offset="100%" stop-color="#9E7836" />
          </linearGradient>
        </defs>

        {/* Stem curve */}
        <path d="M15 85 C 25 55 45 35 85 15" stroke="#7A3340" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Leaves */}
        <path d="M30 62 C 16 58 18 42 32 50 Z" fill="#B07A82" />
        <path d="M42 48 C 38 34 52 28 54 42 Z" fill="url(#cornerGoldGrad)" />
        <path d="M58 35 C 50 20 66 18 68 30 Z" fill="#7A3340" />
        <path d="M72 22 C 70 8 84 10 82 20 Z" fill="url(#cornerGoldGrad)" />

        {/* Corner Rose Flower */}
        <g transform="translate(38, 48)">
          <circle cx="0" cy="0" r="10" fill="url(#cornerRoseGrad)" />
          <circle cx="0" cy="0" r="6" fill="#E8CFCF" />
          <circle cx="0" cy="0" r="3" fill="#6B2D35" />
          <circle cx="0" cy="0" r="1.3" fill="#C9A96E" />
        </g>

        {/* Rosebud */}
        <circle cx="75" cy="18" r="4.5" fill="#B07A82" />
        <circle cx="75" cy="18" r="1.8" fill="#C9A96E" />
      </svg>
    </div>
  );
}

/**
 * Thin floral / leaf divider replacing old diamond ornaments
 */
export function MaroonFloralDivider({ className = "" }: FloralProps) {
  return (
    <div className={`flex items-center justify-center my-3 w-full max-w-[280px] mx-auto ${className}`} aria-hidden="true">
      <svg viewBox="0 0 280 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <defs>
          <linearGradient id="dividerLineL" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#6B2D35" stop-opacity="0" />
            <stop offset="100%" stop-color="#8C6068" stop-opacity="0.8" />
          </linearGradient>
          <linearGradient id="dividerLineR" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#8C6068" stop-opacity="0.8" />
            <stop offset="100%" stop-color="#6B2D35" stop-opacity="0" />
          </linearGradient>
        </defs>

        {/* Left Delicate Vine Line */}
        <line x1="10" y1="12" x2="105" y2="12" stroke="url(#dividerLineL)" strokeWidth="1" />
        {/* Left Leaf Sprig */}
        <path d="M90 12 C 95 6 104 8 102 12 C 104 16 95 18 90 12 Z" fill="#B07A82" />
        <circle cx="82" cy="12" r="1.8" fill="#C9A96E" />

        {/* Center Floral Blossom */}
        <g transform="translate(140, 12)">
          {/* Symmetrical leaves */}
          <path d="M-15 0 C -22 -6 -20 -12 -12 -6 Z" fill="#C9A96E" />
          <path d="M15 0 C 22 -6 20 -12 12 -6 Z" fill="#C9A96E" />
          <path d="M-14 0 C -20 6 -18 12 -10 6 Z" fill="#7A3340" />
          <path d="M14 0 C 20 6 18 12 10 6 Z" fill="#7A3340" />

          {/* Central Rose Blossom */}
          <circle cx="0" cy="0" r="6" fill="#6B2D35" />
          <circle cx="0" cy="0" r="3.8" fill="#E8CFCF" />
          <circle cx="0" cy="0" r="1.8" fill="#6B2D35" />
          <circle cx="0" cy="0" r="0.9" fill="#C9A96E" />
        </g>

        {/* Right Leaf Sprig */}
        <path d="M190 12 C 185 6 176 8 178 12 C 176 16 185 18 190 12 Z" fill="#B07A82" />
        <circle cx="198" cy="12" r="1.8" fill="#C9A96E" />
        {/* Right Delicate Vine Line */}
        <line x1="175" y1="12" x2="270" y2="12" stroke="url(#dividerLineR)" strokeWidth="1" />
      </svg>
    </div>
  );
}

/**
 * Symmetrical Arch Topper for "With the blessings of our families" & cards
 */
export function MaroonArchTopper({ className = "" }: FloralProps) {
  return (
    <div className={`w-full max-w-[220px] mx-auto pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 220 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <defs>
          <linearGradient id="topperRose" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#8C6068" />
            <stop offset="50%" stop-color="#6B2D35" />
            <stop offset="100%" stop-color="#471B20" />
          </linearGradient>
          <linearGradient id="topperGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#F5E8CE" />
            <stop offset="60%" stop-color="#C9A96E" />
            <stop offset="100%" stop-color="#9E7836" />
          </linearGradient>
        </defs>

        {/* Flowing Arched Vine */}
        <path d="M20 38 Q 65 20 110 20 Q 155 20 200 38" stroke="#7A3340" strokeWidth="1.2" strokeLinecap="round" />

        {/* Leaves Left */}
        <path d="M45 28 C 35 18 50 12 55 24 Z" fill="url(#topperGold)" />
        <path d="M68 22 C 60 10 75 8 78 20 Z" fill="#B07A82" />
        <path d="M90 20 C 85 8 100 8 100 18 Z" fill="#7A3340" />

        {/* Leaves Right */}
        <path d="M175 28 C 185 18 170 12 165 24 Z" fill="url(#topperGold)" />
        <path d="M152 22 C 160 10 145 8 142 20 Z" fill="#B07A82" />
        <path d="M130 20 C 135 8 120 8 120 18 Z" fill="#7A3340" />

        {/* Center Rose */}
        <g transform="translate(110, 20)">
          <circle cx="0" cy="0" r="9" fill="url(#topperRose)" />
          <circle cx="0" cy="0" r="5.5" fill="#E8CFCF" />
          <circle cx="0" cy="0" r="2.8" fill="#6B2D35" />
          <circle cx="0" cy="0" r="1.2" fill="#C9A96E" />
          {/* Flanking rosebuds */}
          <circle cx="-13" cy="2" r="3.8" fill="#B07A82" />
          <circle cx="-13" cy="2" r="1.5" fill="#C9A96E" />
          <circle cx="13" cy="2" r="3.8" fill="#B07A82" />
          <circle cx="13" cy="2" r="1.5" fill="#C9A96E" />
        </g>
      </svg>
    </div>
  );
}
