"use client";

import { useEffect, type CSSProperties } from "react";
import Image from "next/image";

/**
 * ShubhVivahCover: animated wedding-invite cover section.
 *
 * Setup:
 *  1. Copy mandap.jpg into your /public folder (or pass another path via `imageSrc`).
 *  2. Import and render:  <ShubhVivahCover />
 *
 * Everything is self-contained (no extra dependencies besides React and next/image).
 * Animations respect prefers-reduced-motion.
 */

export interface ShubhVivahCoverProps {
  title?: string;
  intro?: string;
  brideName?: string;
  groomName?: string;
  dateText?: string;
  bsDate?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

// [left %, size px, fall duration s, start delay s, colour, border-radius]
type Petal = [number, number, number, number, string, string];

const PAGE_PETALS: Petal[] = [
  [0.9, 16, 16, -14, "#D9A23A", "150% 0 150% 0"],
  [5.8, 16, 9, -12, "#D8B26A", "60% 40% 60% 40%/90% 90% 30% 30%"],
  [11.4, 11, 9, -14, "#C47F2C", "100% 0 100% 0"],
  [17.2, 9, 16, -8, "#A8505E", "60% 40% 60% 40%/90% 90% 30% 30%"],
  [23.9, 9, 10, -12, "#5E1A2A", "100% 0 100% 0"],
  [30.3, 14, 15, -2, "#D9A23A", "60% 40% 60% 40%/90% 90% 30% 30%"],
  [37.0, 9, 11, -7, "#5E1A2A", "150% 0 150% 0"],
  [42.2, 10, 15, -12, "#5E1A2A", "100% 0 100% 0"],
  [47.2, 14, 10, -1, "#8E2B3C", "150% 0 150% 0"],
  [52.6, 11, 12, 0, "#C47F2C", "100% 0 100% 0"],
  [60.2, 12, 12, -7, "#D9A23A", "150% 0 150% 0"],
  [64.4, 8, 10, -3, "#7A1F30", "60% 40% 60% 40%/90% 90% 30% 30%"],
  [71.5, 16, 11, -2, "#8E2B3C", "150% 0 150% 0"],
  [78.2, 9, 13, -13, "#D8B26A", "150% 0 150% 0"],
  [82.9, 15, 14, -16, "#8E2B3C", "60% 40% 60% 40%/90% 90% 30% 30%"],
  [87.7, 9, 16, -2, "#E6B94F", "100% 0 100% 0"],
  [93.7, 10, 14, -11, "#5E1A2A", "60% 40% 60% 40%/90% 90% 30% 30%"],
];

// Petals that fall inside the artwork, over the couple
const STAGE_PETALS: Petal[] = [
  [60.8, 12, 13, -13, "#7A1F30", "100% 0 100% 0"],
  [65.5, 10, 13, -0, "#8E2B3C", "150% 0 150% 0"],
  [42.8, 10, 11, -8, "#5E1A2A", "60% 40% 60% 40%/90% 90% 30% 30%"],
  [27.9, 10, 11, -4, "#8E2B3C", "100% 0 100% 0"],
  [30.9, 8, 9, -9, "#D8B26A", "150% 0 150% 0"],
  [29.4, 7, 9, -12, "#D9A23A", "150% 0 150% 0"],
  [82.8, 11, 10, -3, "#D9A23A", "150% 0 150% 0"],
  [74.7, 10, 11, -4, "#7A1F30", "100% 0 100% 0"],
  [45.2, 9, 10, -1, "#C47F2C", "100% 0 100% 0"],
  [77.9, 7, 12, -10, "#C47F2C", "150% 0 150% 0"],
  [39.4, 11, 11, -11, "#C47F2C", "150% 0 150% 0"],
  [48.9, 9, 8, -4, "#7A1F30", "60% 40% 60% 40%/90% 90% 30% 30%"],
  [37.5, 13, 8, -8, "#A8505E", "100% 0 100% 0"],
  [43.1, 7, 11, -0, "#8E2B3C", "60% 40% 60% 40%/90% 90% 30% 30%"],
  [75.5, 10, 8, -12, "#D9A23A", "100% 0 100% 0"],
  [36.3, 12, 12, -4, "#D8B26A", "150% 0 150% 0"],
  [55.0, 12, 10, -0, "#A8505E", "150% 0 150% 0"],
  [33.7, 12, 9, -5, "#E6B94F", "60% 40% 60% 40%/90% 90% 30% 30%"],
  [54.0, 11, 13, -5, "#E6B94F", "150% 0 150% 0"],
  [66.7, 9, 13, -11, "#E6B94F", "100% 0 100% 0"],
  [31.0, 7, 8, -9, "#A8505E", "150% 0 150% 0"],
  [26.9, 12, 10, -7, "#A8505E", "150% 0 150% 0"],
  [25.1, 7, 11, -5, "#D9A23A", "150% 0 150% 0"],
  [77.0, 9, 13, -12, "#A8505E", "150% 0 150% 0"],
  [20.9, 12, 9, -0, "#A8505E", "100% 0 100% 0"],
  [29.9, 9, 12, -7, "#D8B26A", "60% 40% 60% 40%/90% 90% 30% 30%"],
  [62.9, 14, 10, -4, "#D8B26A", "100% 0 100% 0"],
  [85.4, 8, 11, -13, "#8E2B3C", "60% 40% 60% 40%/90% 90% 30% 30%"],
  [74.5, 12, 9, -1, "#D8B26A", "100% 0 100% 0"],
  [50.9, 12, 8, -12, "#C47F2C", "60% 40% 60% 40%/90% 90% 30% 30%"],
];

const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Tiro+Devanagari+Hindi&display=swap";

const css = `.hj-cover{--m:#6B2D35;--r:#8C6068;--c:#F5EEE6;--g:#B8923F;position:relative;overflow:hidden;background:var(--c);color:var(--m);font-family:'Cormorant Garamond',Georgia,serif;text-align:center;max-width:420px;margin:0 auto;padding:0 20px 28px;box-sizing:border-box}
.hj-cover .hj-defs{position:absolute;width:0;height:0;overflow:hidden}
.hj-cover svg{display:block;width:100%;height:auto;overflow:visible}
.hj-toran{margin:0 -20px;width:calc(100% + 40px)!important}
.hj-hi{font-family:'Tiro Devanagari Hindi','Noto Serif Devanagari',serif;font-size:2.5rem;margin:6px 0 4px;font-weight:400}
.hj-orn{width:150px!important;margin:6px auto 14px}
.hj-intro{font-size:1.15rem;line-height:1.5;margin:0 14px}
.hj-names{font-family:'Great Vibes','Brush Script MT',cursive;font-size:3.1rem;line-height:1.15;margin:12px 0 14px;font-weight:400}
.hj-amp{font-family:'Cormorant Garamond',serif;font-size:1.6rem;color:var(--g);margin:0 .15em;animation:hj-pulse 4s ease-in-out infinite;display:inline-block}
.hj-date{font-size:1rem;letter-spacing:.3em;font-weight:600;font-variant-numeric:lining-nums;text-transform:uppercase;margin:0}
.hj-bs{font-size:1.05rem;color:var(--r);margin:6px 0 0;font-variant-numeric:lining-nums;letter-spacing:.06em}
.hj-in{opacity:0;animation:hj-up .9s ease forwards;animation-delay:var(--i)}
@keyframes hj-up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
.hj-strand{transform-box:fill-box;transform-origin:50% 0;animation:hj-swing 3.8s ease-in-out infinite;animation-delay:var(--d)}
@keyframes hj-swing{0%,100%{transform:rotate(-7deg)}50%{transform:rotate(7deg)}}
@keyframes hj-pulse{0%,100%{opacity:.7}50%{opacity:1}}
.hj-petal{position:absolute;top:-24px;left:var(--x);width:var(--s);height:var(--s);background:var(--k);opacity:0;pointer-events:none;animation:hj-fall var(--t) linear infinite,hj-drift 4s ease-in-out infinite alternate;animation-delay:var(--w),var(--w)}
@keyframes hj-fall{0%{top:-24px;opacity:0;rotate:0deg}8%{opacity:.7}90%{opacity:.55}100%{top:105%;opacity:0;rotate:300deg}}
@keyframes hj-drift{from{translate:-14px 0}to{translate:14px 0}}
.hj-stage{position:relative;overflow:hidden;width:calc(100% + 40px);margin:18px -20px 0}
.hj-stage img{display:block;width:100%;height:auto;-webkit-mask-image:linear-gradient(to right,transparent,#000 4%,#000 96%,transparent),linear-gradient(to bottom,#000 94%,transparent);-webkit-mask-composite:source-in;mask-image:linear-gradient(to right,transparent,#000 4%,#000 96%,transparent),linear-gradient(to bottom,#000 94%,transparent);mask-composite:intersect}
.hj-stage .hj-petal{top:-4%;animation:hj-fall2 var(--t) linear infinite,hj-drift 4s ease-in-out infinite alternate;animation-delay:var(--w),var(--w)}
@keyframes hj-fall2{0%{top:-4%;opacity:0;rotate:0deg}8%{opacity:.9}78%{opacity:.85}100%{top:90%;opacity:0;rotate:320deg}}
@media (prefers-reduced-motion:reduce){.hj-cover *{animation:none!important}.hj-in{opacity:1!important}.hj-petal{display:none}}`;

function Petals({ list }: { list: Petal[] }) {
  return (
    <>
      {list.map(([x, s, t, w, k, r], i) => (
        <span
          key={i}
          className="hj-petal"
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

export default function ShubhVivahCover({
  title = "शुभ विवाह",
  intro = "Together with their families, we joyfully invite you to the wedding of",
  brideName = "Sanjana",
  groomName = "Anurodh",
  dateText = "Friday · 11 December 2026",
  bsDate = "25 Mangsir 2083 B.S.",
  imageSrc = "/images/mandap.jpg",
  imageAlt = "Bride and groom exchanging marigold garlands beneath a decorated mandap arch",
  className = "",
}: ShubhVivahCoverProps) {
  // Load the Google Fonts once (or move this <link> into your root layout / use next/font)
  useEffect(() => {
    if (document.getElementById("hj-fonts")) return;
    const link = document.createElement("link");
    link.id = "hj-fonts";
    link.rel = "stylesheet";
    link.href = FONT_URL;
    document.head.appendChild(link);
  }, []);

  return (
    <section className={`hj-cover ${className}`.trim()}>
      <style>{css}</style>

      {/* Shared gradients and symbols used by the ornament below */}
      <svg className="hj-defs" aria-hidden="true"><defs><linearGradient id="gM" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#8E3F4B"/><stop offset="1" stopColor="#5A222B"/></linearGradient>
<linearGradient id="gG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#EBD6A0"/><stop offset="1" stopColor="#B98F3E"/></linearGradient>
<linearGradient id="gD" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#FFFFFF"/><stop offset="1" stopColor="#EAE3D8"/></linearGradient>
<linearGradient id="gP" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#E6DFD3"/><stop offset=".5" stopColor="#FFFFFF"/><stop offset="1" stopColor="#E2DACD"/></linearGradient>
<linearGradient id="gL" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#F6D3D9"/><stop offset="1" stopColor="#D9939F"/></linearGradient>
<linearGradient id="gF" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#9A4553"/><stop offset="1" stopColor="#C98B97"/></linearGradient>
<radialGradient id="gGlow"><stop offset="0" stopColor="#FFF3E6" stopOpacity=".95"/><stop offset=".6" stopColor="#F6E3DC" stopOpacity=".35"/><stop offset="1" stopColor="#F5EEE6" stopOpacity="0"/></radialGradient>
<g id="fl"><g fill="#7A323C"><circle cy="-8" r="3.6"/><circle cy="8" r="3.6"/><circle cx="-8" r="3.6"/><circle cx="8" r="3.6"/></g><circle r="7.2" fill="url(#gM)"/><circle r="5" fill="#B5606C"/><circle r="3" fill="#F0D5D5"/><circle r="1.4" fill="#C9A24A"/></g>
<path id="lf" d="M0 0C4 -6 12 -8 18 -4C12 2 4 4 0 0Z" fill="url(#gG)"/></defs></svg>

      <Petals list={PAGE_PETALS} />

      {/* Marigold toran */}
      <svg className="hj-toran hj-in" style={{ "--i": "0s" } as CSSProperties} viewBox="0 0 400 120" aria-hidden="true"><defs><g id="md"><g fill="#7A1F30"><circle cy="-6.4" r="3.4"/><circle cy="6.4" r="3.4"/><circle cx="-6.4" r="3.4"/><circle cx="6.4" r="3.4"/><circle cx="4.5" cy="4.5" r="3"/><circle cx="-4.5" cy="4.5" r="3"/><circle cx="4.5" cy="-4.5" r="3"/><circle cx="-4.5" cy="-4.5" r="3"/></g><circle r="5.6" fill="#5E1A2A"/><circle r="4" fill="#D9A23A"/><circle r="2.8" fill="#F5EEE6"/><circle r="1.3" fill="#7A1F30"/></g>
<g id="hl"><path d="M0 0C5 -4.5 15 -4.5 23 0C15 4.5 5 4.5 0 0Z" fill="#C79A3B"/><path d="M1 0H21M7 0l4 -2.2M7 0l4 2.2M13 0l4 -2M13 0l4 2" stroke="#8A6420" strokeWidth=".6" fill="none"/></g>
<g id="ts"><circle r="2" fill="#D9A23A"/><path d="M-2.6 1.5Q-5 8 -3.4 12H3.4Q5 8 2.6 1.5Z" fill="#7A1F30"/><path d="M-3.4 12V21M-1.7 12V22M0 12V23M1.7 12V22M3.4 12V21" stroke="#5E1A2A" strokeWidth="1.1" strokeLinecap="round"/><path d="M-4 7H4" stroke="#D9A23A" strokeWidth=".9"/></g>
<g id="bl"><circle r="1.8" fill="#7A1F30"/><path d="M0 1C-7 7 -8 12 0 17C8 12 7 7 0 1Z" fill="#D9A23A" stroke="#7A1F30" strokeWidth=".7"/><path d="M0 4V15" stroke="#7A1F30" strokeWidth=".6"/><path d="M-5 17V25M-2.5 17.5V26M0 18V27M2.5 17.5V26M5 17V25" stroke="#7A1F30" strokeWidth="1.1" strokeLinecap="round"/></g></defs><path d="M6 8Q200 76 394 8" fill="none" stroke="#8A6420" strokeWidth=".8"/><path d="M6 8Q200 76 394 8" fill="none" stroke="#D9A23A" strokeWidth="7.5" strokeLinecap="round" strokeDasharray=".1 14"/><path d="M6 8Q200 76 394 8" fill="none" stroke="#7A1F30" strokeWidth="7.5" strokeLinecap="round" strokeDasharray=".1 14" strokeDashoffset="-7"/><path d="M6 22Q200 92 394 22" fill="none" stroke="#8A6420" strokeWidth=".8"/><path d="M6 22Q200 92 394 22" fill="none" stroke="#D9A23A" strokeWidth="7.5" strokeLinecap="round" strokeDasharray=".1 14"/><path d="M6 22Q200 92 394 22" fill="none" stroke="#7A1F30" strokeWidth="7.5" strokeLinecap="round" strokeDasharray=".1 14" strokeDashoffset="-7"/><g className="hj-strand" style={{ "--d": "0.2s" } as CSSProperties}><use href="#hl" transform="translate(87.5 40) rotate(68) scale(1)"/><use href="#hl" transform="translate(87.5 40) rotate(112) scale(1)"/><use href="#hl" transform="translate(87.5 43) rotate(90) scale(.85)"/></g><g className="hj-strand" style={{ "--d": "0.9s" } as CSSProperties}><use href="#hl" transform="translate(161.2 50) rotate(68) scale(1)"/><use href="#hl" transform="translate(161.2 50) rotate(112) scale(1)"/><use href="#hl" transform="translate(161.2 53) rotate(90) scale(.85)"/></g><g className="hj-strand" style={{ "--d": "1.6s" } as CSSProperties}><use href="#hl" transform="translate(238.8 50) rotate(68) scale(1)"/><use href="#hl" transform="translate(238.8 50) rotate(112) scale(1)"/><use href="#hl" transform="translate(238.8 53) rotate(90) scale(.85)"/></g><g className="hj-strand" style={{ "--d": "2.2s" } as CSSProperties}><use href="#hl" transform="translate(312.5 40) rotate(68) scale(1)"/><use href="#hl" transform="translate(312.5 40) rotate(112) scale(1)"/><use href="#hl" transform="translate(312.5 43) rotate(90) scale(.85)"/></g><g className="hj-strand" style={{ "--d": "1.2s" } as CSSProperties}><use href="#hl" transform="translate(28 22) rotate(68) scale(1)"/><use href="#hl" transform="translate(28 22) rotate(112) scale(1)"/><use href="#hl" transform="translate(28 25) rotate(90) scale(.85)"/></g><g className="hj-strand" style={{ "--d": "0.5s" } as CSSProperties}><use href="#hl" transform="translate(372 22) rotate(68) scale(1)"/><use href="#hl" transform="translate(372 22) rotate(112) scale(1)"/><use href="#hl" transform="translate(372 25) rotate(90) scale(.85)"/></g><g className="hj-strand" style={{ "--d": "0.4s" } as CSSProperties}><line x1="52.6" y1="28" x2="52.6" y2="54" stroke="#8A6420" strokeWidth=".9"/><circle cx="52.6" cy="37.1" r="1.7" fill="#7A1F30"/><circle cx="52.6" cy="44.9" r="1.7" fill="#D9A23A"/><use href="#ts" transform="translate(52.6 54)"/></g><g className="hj-strand" style={{ "--d": "1.0s" } as CSSProperties}><line x1="122.4" y1="44" x2="122.4" y2="72" stroke="#8A6420" strokeWidth=".9"/><circle cx="122.4" cy="53.8" r="1.7" fill="#7A1F30"/><circle cx="122.4" cy="62.2" r="1.7" fill="#D9A23A"/><use href="#ts" transform="translate(122.4 72)"/></g><g className="hj-strand" style={{ "--d": "1.4s" } as CSSProperties}><line x1="200" y1="50" x2="200" y2="86" stroke="#8A6420" strokeWidth=".9"/><circle cx="200" cy="62.6" r="1.7" fill="#7A1F30"/><circle cx="200" cy="73.4" r="1.7" fill="#D9A23A"/><use href="#bl" transform="translate(200 86)"/></g><g className="hj-strand" style={{ "--d": "1.8s" } as CSSProperties}><line x1="277.6" y1="44" x2="277.6" y2="72" stroke="#8A6420" strokeWidth=".9"/><circle cx="277.6" cy="53.8" r="1.7" fill="#7A1F30"/><circle cx="277.6" cy="62.2" r="1.7" fill="#D9A23A"/><use href="#ts" transform="translate(277.6 72)"/></g><g className="hj-strand" style={{ "--d": "2.3s" } as CSSProperties}><line x1="347.4" y1="28" x2="347.4" y2="54" stroke="#8A6420" strokeWidth=".9"/><circle cx="347.4" cy="37.1" r="1.7" fill="#7A1F30"/><circle cx="347.4" cy="44.9" r="1.7" fill="#D9A23A"/><use href="#ts" transform="translate(347.4 54)"/></g><use href="#md" transform="translate(52.6 22.4) scale(1.05)"/><use href="#md" transform="translate(122.4 36.6) scale(1.15)"/><use href="#md" transform="translate(200 42) scale(1.6)"/><use href="#md" transform="translate(277.6 36.6) scale(1.15)"/><use href="#md" transform="translate(347.4 22.4) scale(1.05)"/></svg>

      <h1 className="hj-hi hj-in" style={{ "--i": ".2s" } as CSSProperties}>
        {title}
      </h1>
      <svg className="hj-orn hj-in" style={{ "--i": ".35s" } as CSSProperties} viewBox="0 0 200 24" aria-hidden="true"><path d="M10 12H78M122 12H190" stroke="#C9A24A" strokeWidth=".9"/><path d="M82 12l4 -3 4 3 -4 3zM110 12l4 -3 4 3 -4 3z" fill="#C9A24A"/><use href="#lf" transform="translate(86 12) rotate(180) scale(.5)"/><use href="#lf" transform="translate(114 12) scale(.5)"/><use href="#fl" transform="translate(100 12) scale(.95)"/></svg>
      <p className="hj-intro hj-in" style={{ "--i": ".5s" } as CSSProperties}>
        {intro}
      </p>
      <h2 className="hj-names hj-in" style={{ "--i": ".7s" } as CSSProperties}>
        {brideName} <span className="hj-amp">&amp;</span> {groomName}
      </h2>
      <p className="hj-date hj-in" style={{ "--i": ".9s" } as CSSProperties}>
        {dateText}
      </p>
      <p className="hj-bs hj-in" style={{ "--i": "1s" } as CSSProperties}>
        {bsDate}
      </p>

      <div className="hj-stage hj-in" style={{ "--i": "1.1s" } as CSSProperties}>
        <Image src={imageSrc} alt={imageAlt} width={896} height={1200} sizes="(max-width: 420px) 100vw, 420px" priority />
        <Petals list={STAGE_PETALS} />
      </div>
    </section>
  );
}
