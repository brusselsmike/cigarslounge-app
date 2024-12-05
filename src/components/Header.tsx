import React from 'react';
import { GlassWater, Cigarette } from 'lucide-react';
import { ComingSoon } from './ComingSoon';

export function Header() {
  return (
    <div className="animate-fade-in backdrop-blur-sm bg-black/40 p-8 rounded-lg border border-amber-900/20 shadow-2xl">
      <div className="flex justify-center items-center gap-4 mb-6">
        <Cigarette className="w-12 h-12 text-amber-500" />
        <GlassWater className="w-10 h-10 text-amber-500" />
      </div>
      <h1 className="font-playfair text-5xl md:text-7xl font-bold text-amber-50 mb-4 tracking-wider">
        CigarsLounges
      </h1>
      <p className="font-playfair text-xl md:text-2xl text-amber-200/90 mb-8">
        International Directory
      </p>
      <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-500/80 to-transparent mx-auto mb-8"></div>
      <p className="text-amber-100/80 max-w-2xl mx-auto text-lg italic">
        "Discover the world's finest cigar lounges, where luxury meets tradition"
      </p>
      <ComingSoon />
    </div>
  );
}