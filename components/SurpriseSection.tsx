"use client";

import React from "react";
import { WeddingData } from "@/data/invite";
import SurpriseHands from "./SurpriseHands";

interface SurpriseSectionProps {
  data?: WeddingData;
  date?: string;
  eventName?: string;
}

export default function SurpriseSection({
  date = "11th December, 2026",
  eventName = "WEDDING CEREMONY",
}: SurpriseSectionProps) {
  return (
    <SurpriseHands
      title="Our Special day!"
      subtitle="Save our special day"
      date={date}
      eventName={eventName}
      blessing="With the heartfelt blessings of our families and the love of our dear ones,"
    />
  );
}
