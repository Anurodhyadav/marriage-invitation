"use client";

import React, { useState, useEffect } from "react";
import { inviteData } from "@/data/invite";
import CoverView from "@/components/CoverView";
import HeroSection from "@/components/HeroSection";
import FamiliesSection from "@/components/FamiliesSection";
import CelebrationsSection from "@/components/CelebrationsSection";
import FooterSection from "@/components/FooterSection";
import AudioPlayer from "@/components/AudioPlayer";
import { ChevronUp } from "lucide-react";

export default function WeddingInvitationPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleOpen = (withMusic: boolean) => {
    setIsOpen(true);
    if (withMusic) {
      setIsPlaying(true);
    }
    // Scroll smoothly to top of invitation
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start bg-[#f7f4ee] text-stone-800">
      {/* 1. Cover View (Shown initially or smoothly transitions out) */}
      {!isOpen ? (
        <div className="w-full min-h-screen flex items-center justify-center transition-all duration-700 ease-in-out">
          <CoverView data={inviteData} onOpen={handleOpen} />
        </div>
      ) : (
        /* 2. Invitation Page (One continuous scrolling page) */
        <div className="w-full max-w-[520px] mx-auto min-h-screen flex flex-col items-center animate-fade-in relative shadow-[0_0_50px_rgba(0,0,0,0.03)] bg-[#faf8f3]">
          
          {/* Subtle Top Indicator / Cover Return */}
          <div className="w-full pt-3 pb-1 px-4 flex items-center justify-between text-stone-400 border-b border-stone-200/50 text-[11px] font-serif">
            <span>{inviteData.couple.hashtag}</span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="hover:text-stone-700 underline underline-offset-2 transition-colors"
            >
              Cover Card
            </button>
          </div>

          {/* Hero Section (second.jpeg) */}
          <div className="w-full">
            <HeroSection data={inviteData} />
          </div>

          {/* Families Section (third.jpeg) */}
          <div className="w-full">
            <FamiliesSection data={inviteData} />
          </div>

          {/* The Celebrations Section (fourth & fifth.jpeg) */}
          <div className="w-full">
            <CelebrationsSection data={inviteData} />
          </div>

          {/* Footer Section (sixth.jpeg) */}
          <div className="w-full">
            <FooterSection data={inviteData} />
          </div>

          {/* Floating Music Audio Player */}
          <AudioPlayer
            src={inviteData.music.src}
            autoPlay={false}
            isPlaying={isPlaying}
            onTogglePlay={setIsPlaying}
          />

          {/* Back to top floating button */}
          {showBackToTop && (
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="fixed bottom-5 right-5 z-50 p-2.5 rounded-full bg-white/90 text-stone-600 border border-stone-300 shadow-md backdrop-blur-sm hover:bg-stone-100 transition-all active:scale-95"
            >
              <ChevronUp className="w-4 h-4 text-stone-700" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

