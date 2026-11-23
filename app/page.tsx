"use client";

import React, { useState, useEffect } from "react";
import { inviteData } from "@/data/invite";
import CoverView from "@/components/CoverView";
import SurpriseHands from "@/components/SurpriseHands";
import HeroSection from "@/components/HeroSection";
import FamiliesSection from "@/components/FamiliesSection";
import CelebrationsSection from "@/components/CelebrationsSection";
import FooterSection from "@/components/FooterSection";
import AudioPlayer from "@/components/AudioPlayer";
import { ChevronUp, X } from "lucide-react";

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

  const handleClose = () => {
    setIsOpen(false);
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
    <div className="min-h-screen w-full flex flex-col items-center justify-start bg-[#F5EEE6] text-[#5A252C]">
      {/* 1. Cover View (Full screen watercolor florals & golden lanterns) */}
      {!isOpen ? (
        <div className="w-full min-h-screen flex items-center justify-center transition-all duration-700 ease-in-out">
          <CoverView data={inviteData} onOpen={handleOpen} />
        </div>
      ) : (
        /* 2. Invitation Page (Continuous scrolling invitation with mobile-first layout) */
        <div className="w-full max-w-[500px] mx-auto min-h-screen flex flex-col items-center animate-fade-in relative shadow-[0_0_50px_rgba(107,45,53,0.06)] bg-[#F5EEE6]">
          
          {/* 
            Single Persistent Top Header Bar with Hashtag and One Circular Close (X) button 
            (Zero duplicate close buttons anywhere on the screen)
          */}
          <header className="sticky top-0 z-30 w-full py-2.5 px-4 flex items-center justify-between bg-[#F5EEE6]/90 backdrop-blur-md border-b border-[#8C6068]/20 text-[11px] font-serif text-[#8C6068]">
            <span className="tracking-wider font-semibold">{inviteData.couple.hashtag}</span>
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close to cover"
              className="w-7 h-7 rounded-full bg-[#635b55] hover:bg-[#4d4640] active:scale-95 text-white flex items-center justify-center shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#8C6068]"
            >
              <X className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </header>

          {/* Section 1: "Surprise For You!" Screen with Swaying Hand Illustration & Ring Sparkles */}
          <div className="w-full">
            <SurpriseHands date="11th December, 2026" eventName="WEDDING CEREMONY" />
          </div>

          {/* Section 2: Hero Section (Shubha Bibaha with Maroon Garland, Names, Mandap) */}
          <div className="w-full">
            <HeroSection data={inviteData} />
          </div>

          {/* Section 3: Families Section with Floral Arch Topper */}
          <div className="w-full">
            <FamiliesSection data={inviteData} />
          </div>

          {/* Section 4: The Celebrations Timeline Section */}
          <div className="w-full">
            <CelebrationsSection data={inviteData} />
          </div>

          {/* Section 5: Footer Section with Floral Corner Sprigs */}
          <div className="w-full">
            <FooterSection data={inviteData} />
          </div>

          {/* Floating Audio Player */}
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
              className="fixed bottom-5 right-5 z-40 p-2.5 rounded-full bg-[#FAF6F0]/95 text-[#6B2D35] border border-[#8C6068]/40 shadow-md backdrop-blur-sm hover:bg-[#EBD7DA]/60 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#8C6068]"
            >
              <ChevronUp className="w-4 h-4 text-[#6B2D35]" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
