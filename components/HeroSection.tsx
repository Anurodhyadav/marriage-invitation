"use client";

import React from "react";
import { WeddingData } from "@/data/invite";
import ShubhVivahCover from "./ShubhVivahCover";

interface HeroSectionProps {
  data?: WeddingData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <ShubhVivahCover
      title={data?.hero.shubhaBibaha ?? "शुभ विवाह"}
      intro={data?.hero.introText ?? "Together with their families, we joyfully invite you to the wedding of"}
      brideName={data?.couple.brideFirstName ?? "Sanjana"}
      groomName={data?.couple.groomFirstName ?? "Anurodh"}
      dateText={data?.hero.weddingDateEnglish ?? "Friday · 11 December 2026"}
      bsDate={data?.hero.weddingDateNepali ?? "25 Mangsir 2083 B.S."}
      imageSrc="/images/mandap.jpg"
      imageAlt="Bride and groom exchanging marigold garlands beneath a decorated mandap arch"
    />
  );
}
