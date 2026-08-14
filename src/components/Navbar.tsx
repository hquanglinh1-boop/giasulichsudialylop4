import React from 'react';
import { BookOpen, Map, Users, Clock, GraduationCap, MessageSquare, BarChart3, Award, History, Trophy } from 'lucide-react';

export type TabType = 'quiz' | 'history' | 'themes' | 'figures' | 'timeline' | 'glossary' | 'ai-chat' | 'overview';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navItems: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'quiz', label: 'Gia Sư Ôn Tập', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'history', label: 'Bảng Vinh Danh', icon: <Trophy className="w-4 h-4" /> },
    { id: 'themes', label: '6 Chủ Đề & 29 Bài', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'figures', label: 'Nhân Vật Lịch Sử', icon: <Users className="w-4 h-4" /> },
    { id: 'timeline', label: 'Trục Thời Gian', icon: <Clock className="w-4 h-4" /> },
    { id: 'glossary', label: 'Từ Điển Thuật Ngữ', icon: <Map className="w-4 h-4" /> },
    { id: 'ai-chat', label: 'Hỏi Đáp Gia Sư AI', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'overview', label: 'Tổng Quan', icon: <BarChart3 className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('quiz')}>
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-600 to-emerald-500 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg ring-2 ring-amber-400/30">
              4
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-black text-sm sm:text-base leading-tight text-amber-300 tracking-wide uppercase">
                  GIA SƯ LỊCH SỬ ĐỊA LÝ LỚP 4
                </h1>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                  <Award className="w-3 h-3 inline mr-1" /> Quang Linh
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium hidden md:block">
                Tác giả: Quang Linh • SGK Kết Nối Tri Thức Với Cuộc Sống
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 font-extrabold shadow-md'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Scrollable Nav for tablet & mobile */}
        <div className="xl:hidden flex overflow-x-auto py-2 gap-2 border-t border-slate-800 scrollbar-none">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
