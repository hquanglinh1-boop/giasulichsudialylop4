import React, { useState } from 'react';
import { Compass, Sparkles, Trophy, Map, Crown, Castle, TreePine, Mountain, Star, Globe, Shield, Scroll } from 'lucide-react';

export type GameBgTheme = 'history-gold' | 'geography-emerald' | 'ocean-blue' | 'night-thanglong';

interface GameBackgroundProps {
  children: React.ReactNode;
}

export const GameBackground: React.FC<GameBackgroundProps> = ({ children }) => {
  const [bgTheme, setBgTheme] = useState<GameBgTheme>('history-gold');

  // Background Theme Definitions
  const themeStyles: Record<GameBgTheme, { bgClass: string; accentGlow1: string; accentGlow2: string; name: string; icon: string }> = {
    'history-gold': {
      bgClass: 'bg-gradient-to-br from-amber-50 via-orange-50/60 to-amber-100/80 dark:from-slate-950 dark:via-amber-950/20 dark:to-slate-900',
      accentGlow1: 'bg-amber-400/20 dark:bg-amber-600/15',
      accentGlow2: 'bg-emerald-400/20 dark:bg-emerald-600/15',
      name: '🏛️ Hoàng Thành Lịch Sử',
      icon: '🏛️'
    },
    'geography-emerald': {
      bgClass: 'bg-gradient-to-br from-emerald-50 via-teal-50/60 to-amber-50/80 dark:from-slate-950 dark:via-emerald-950/20 dark:to-slate-900',
      accentGlow1: 'bg-emerald-400/25 dark:bg-emerald-500/15',
      accentGlow2: 'bg-sky-400/20 dark:bg-sky-600/15',
      name: '⛰️ Sông Núi Địa Lý',
      icon: '⛰️'
    },
    'ocean-blue': {
      bgClass: 'bg-gradient-to-br from-sky-50 via-indigo-50/60 to-cyan-50/80 dark:from-slate-950 dark:via-sky-950/25 dark:to-slate-900',
      accentGlow1: 'bg-sky-400/25 dark:bg-sky-500/15',
      accentGlow2: 'bg-indigo-400/20 dark:bg-indigo-600/15',
      name: '🌊 Biển Đảo Việt Nam',
      icon: '🌊'
    },
    'night-thanglong': {
      bgClass: 'bg-gradient-to-br from-slate-900 via-amber-950/40 to-slate-950 text-slate-100',
      accentGlow1: 'bg-amber-500/20',
      accentGlow2: 'bg-rose-500/15',
      name: '🌌 Đêm Thăng Long',
      icon: '🌌'
    }
  };

  const currentTheme = themeStyles[bgTheme];

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${currentTheme.bgClass} bg-game-grid`}>
      {/* Dynamic Floating Game Elements Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        {/* Soft Glowing Ambient Orbs */}
        <div className={`absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl ${currentTheme.accentGlow1} animate-pulse-slow`} />
        <div className={`absolute top-1/3 -right-24 w-96 h-96 rounded-full blur-3xl ${currentTheme.accentGlow2} animate-pulse-slow`} />
        <div className={`absolute -bottom-24 left-1/3 w-80 h-80 rounded-full blur-3xl ${currentTheme.accentGlow1} animate-pulse-slow`} />

        {/* Floating Game Decorative Icons - Top Left */}
        <div className="absolute top-20 left-6 sm:left-12 opacity-25 dark:opacity-20 animate-float">
          <Castle className="w-16 h-16 text-amber-600 dark:text-amber-400" />
        </div>
        <div className="absolute top-48 left-1/4 opacity-20 dark:opacity-15 animate-float-reverse">
          <Compass className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
        </div>

        {/* Floating Game Decorative Icons - Top Right */}
        <div className="absolute top-24 right-8 sm:right-16 opacity-25 dark:opacity-20 animate-float-reverse">
          <Mountain className="w-16 h-16 text-teal-600 dark:text-teal-400" />
        </div>
        <div className="absolute top-64 right-1/4 opacity-20 dark:opacity-15 animate-float">
          <Scroll className="w-12 h-12 text-amber-600 dark:text-amber-400" />
        </div>

        {/* Floating Game Decorative Icons - Mid/Bottom */}
        <div className="absolute bottom-40 left-10 opacity-20 dark:opacity-15 animate-float">
          <Globe className="w-14 h-14 text-sky-600 dark:text-sky-400" />
        </div>
        <div className="absolute bottom-24 right-12 opacity-25 dark:opacity-20 animate-float-reverse">
          <Trophy className="w-16 h-16 text-amber-500" />
        </div>

        {/* Stars Accent */}
        <div className="absolute top-36 left-1/3 opacity-30 text-amber-400 animate-wiggle">
          <Star className="w-6 h-6 fill-amber-400" />
        </div>
        <div className="absolute top-80 right-1/3 opacity-30 text-amber-400 animate-wiggle">
          <Sparkles className="w-7 h-7 text-amber-500" />
        </div>
      </div>

      {/* Floating Theme Switcher Floating Widget (Top Right Game Bar) */}
      <div className="fixed bottom-4 right-4 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-2 rounded-2xl shadow-xl border border-amber-500/30 flex items-center gap-1.5 transition-all">
        <span className="text-[11px] font-extrabold text-slate-600 dark:text-slate-300 px-2 hidden sm:inline flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Nền Trò Chơi:
        </span>
        {(Object.keys(themeStyles) as GameBgTheme[]).map((key) => {
          const t = themeStyles[key];
          const isSelected = bgTheme === key;
          return (
            <button
              key={key}
              onClick={() => setBgTheme(key)}
              title={t.name}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                isSelected
                  ? 'bg-amber-500 text-slate-950 font-black shadow-md scale-105'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              <span>{t.icon}</span>
              <span className="hidden md:inline">{t.name.split(' ')[1]}</span>
            </button>
          );
        })}
      </div>

      {/* App Main Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
};
