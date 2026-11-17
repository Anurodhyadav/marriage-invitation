import React from "react";

interface DiamondDividerProps {
  className?: string;
}

export default function DiamondDivider({ className = "" }: DiamondDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-2 my-3 ${className}`}>
      <span className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent to-gold-400/80" />
      <div className="flex items-center gap-1 text-gold-500">
        <span className="w-1.5 h-1.5 rotate-45 border border-gold-500/70 inline-block" />
        <span className="w-1.5 h-1.5 rotate-45 border border-gold-500/70 inline-block" />
        <span className="w-2 h-2 rotate-45 bg-gold-500 inline-block shadow-sm" />
        <span className="w-1.5 h-1.5 rotate-45 border border-gold-500/70 inline-block" />
        <span className="w-1.5 h-1.5 rotate-45 border border-gold-500/70 inline-block" />
      </div>
      <span className="h-[1px] w-8 md:w-12 bg-gradient-to-l from-transparent to-gold-400/80" />
    </div>
  );
}

