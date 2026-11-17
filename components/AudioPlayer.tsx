"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface AudioPlayerProps {
  src: string;
  autoPlay: boolean;
  isPlaying: boolean;
  onTogglePlay: (playing: boolean) => void;
}

export default function AudioPlayer({
  src,
  autoPlay,
  isPlaying,
  onTogglePlay,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthActiveRef = useRef<boolean>(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const synthIntervalRef = useRef<any>(null);

  // Traditional pentatonic raga notes (Bansuri flute frequencies in Hz)
  const fluteNotes = [293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];

  const startSynthesizer = useCallback(() => {
    if (synthActiveRef.current) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      audioContextRef.current = ctx;
      synthActiveRef.current = true;

      // Soft ambient Tanpura drone
      const droneOsc = ctx.createOscillator();
      const droneGain = ctx.createGain();
      droneOsc.type = "sine";
      droneOsc.frequency.setValueAtTime(146.83, ctx.currentTime); // D3
      droneGain.gain.setValueAtTime(0.04, ctx.currentTime);
      droneOsc.connect(droneGain);
      droneGain.connect(ctx.destination);
      droneOsc.start();

      let noteIdx = 0;
      const melodySequence = [0, 1, 2, 4, 3, 2, 1, 0, 2, 4, 5, 4, 2, 3, 1, 0];

      synthIntervalRef.current = setInterval(() => {
        if (!synthActiveRef.current || ctx.state === "closed") return;
        const noteFreq = fluteNotes[melodySequence[noteIdx % melodySequence.length]];
        noteIdx++;

        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(noteFreq, ctx.currentTime);

        noteGain.gain.setValueAtTime(0.001, ctx.currentTime);
        noteGain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 0.15);
        noteGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

        osc.connect(noteGain);
        noteGain.connect(ctx.destination);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 1.25);
      }, 1000);
    } catch {
      // Audio autoplay policy handled silently
    }
  }, []);

  const stopSynthesizer = useCallback(() => {
    synthActiveRef.current = false;
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close().catch(() => {});
      audioContextRef.current = null;
    }
  }, []);

  // Sync state
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio
        .play()
        .then(() => {
          // If the audio file is just the tiny placeholder frame, also start mellow synth
          if (audio.duration < 1.0) {
            startSynthesizer();
          }
        })
        .catch(() => {
          // Fallback to web audio synth
          startSynthesizer();
        });
    } else {
      audio.pause();
      stopSynthesizer();
    }
  }, [isPlaying, startSynthesizer, stopSynthesizer]);

  useEffect(() => {
    if (autoPlay) {
      onTogglePlay(true);
    }
  }, [autoPlay, onTogglePlay]);

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" />
      
      {/* Floating Audio Controller */}
      <div className="fixed bottom-5 left-5 z-50">
        <button
          type="button"
          onClick={() => onTogglePlay(!isPlaying)}
          aria-label={isPlaying ? "Mute music" : "Play music"}
          className={`group flex items-center gap-2 px-3.5 py-2.5 rounded-full shadow-lg border backdrop-blur-md transition-all duration-300 ${
            isPlaying
              ? "bg-sage-800/90 text-white border-sage-700/80 hover:bg-sage-900"
              : "bg-white/90 text-stone-700 border-stone-300 hover:bg-white"
          }`}
        >
          {isPlaying ? (
            <>
              <Volume2 className="w-4 h-4 text-gold-300 animate-pulse" />
              <div className="flex items-end gap-0.5 h-3">
                <span className="w-0.5 bg-gold-300 rounded-full sound-bar-1" />
                <span className="w-0.5 bg-gold-300 rounded-full sound-bar-2" />
                <span className="w-0.5 bg-gold-300 rounded-full sound-bar-3" />
              </div>
              <span className="text-xs font-serif tracking-wider hidden sm:inline text-cream-100">
                Music Playing
              </span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-stone-500" />
              <span className="text-xs font-serif tracking-wider hidden sm:inline text-stone-600">
                Music Off
              </span>
            </>
          )}
        </button>
      </div>
    </>
  );
}

