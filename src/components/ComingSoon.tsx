import React from 'react';
import { Timer } from 'lucide-react';

export function ComingSoon() {
  return (
    <div className="mt-12 animate-fade-in">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Timer className="w-6 h-6 text-amber-400" />
        <span className="font-playfair text-2xl text-amber-400 tracking-widest">COMING VERY SOON</span>
      </div>
      <div className="flex gap-2 justify-center">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-amber-500/50 animate-pulse"
            style={{ animationDelay: `${i * 200}ms` }}
          />
        ))}
      </div>
    </div>
  );
}