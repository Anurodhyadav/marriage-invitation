import React from "react";

interface DiamondDividerProps {
  className?: string;
}

export default function DiamondDivider({ className = "" }: DiamondDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-2 my-3 ${className}`}>
      <span className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent to-[#8C6068]/60" />
      <div className="flex items-center gap-1 text-[#8C6068]">
        <span className="w-1.5 h-1.5 rotate-45 border border-[#8C6068]/70 inline-block" />
        <span className="w-1.5 h-1.5 rotate-45 border border-[#8C6068]/70 inline-block" />
        <span className="w-2 h-2 rotate-45 bg-[#6B2D35] inline-block shadow-sm" />
        <span className="w-1.5 h-1.5 rotate-45 border border-[#8C6068]/70 inline-block" />
        <span className="w-1.5 h-1.5 rotate-45 border border-[#8C6068]/70 inline-block" />
      </div>
      <span className="h-[1px] w-8 md:w-12 bg-gradient-to-l from-transparent to-[#8C6068]/60" />
    </div>
  );
}
