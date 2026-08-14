import React from 'react';
import { BOOK_INFO, THEMES, LESSONS, GLOSSARY, HISTORICAL_FIGURES } from '../data/textbookData';
import { BookOpen, Award, Compass, MapPin, Sparkles, CheckCircle2, ChevronRight, Globe2 } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';

interface OverviewDashboardProps {
  onSelectTheme: (themeId: string) => void;
  onNavigateTab: (tab: any) => void;
}

export const OverviewDashboard: React.FC<OverviewDashboardProps> = ({ onSelectTheme, onNavigateTab }) => {
  const chartData = THEMES.map((t) => ({
    name: t.name.replace('Chủ đề ', '').replace(':', ''),
    lessons: t.lessonsCount,
  }));

  const COLORS = ['#0284c7', '#0d9488', '#d97706', '#16a34a', '#2563eb', '#dc2626', '#7c3aed'];

  const unescoSites = [
    { name: "Nghệ thuật Xoè Thái", category: "Di sản phi vật thể (2021)", region: "Tây Bắc" },
    { name: "Thực hành Then Tày, Nùng, Thái", category: "Di sản phi vật thể (2019)", region: "Đông Bắc" },
    { name: "Tín ngưỡng thờ cúng Hùng Vương", category: "Di sản phi vật thể", region: "Phú Thọ" },
    { name: "Dân ca Quan họ Bắc Ninh", category: "Di sản phi vật thể (2009)", region: "Bắc Ninh" },
    { name: "Bia Tiến sĩ Văn Miếu - Quốc Tử Giám", category: "Di sản tư liệu (2010)", region: "Hà Nội" },
    { name: "Quần thể di tích Cố đô Huế", category: "Di sản thế giới (1993)", region: "Thừa Thiên Huế" },
    { name: "Đô thị cổ Hội An", category: "Di sản thế giới (1999)", region: "Quảng Nam" },
    { name: "Thánh địa Mỹ Sơn", category: "Di sản thế giới (1999)", region: "Quảng Nam" },
    { name: "Vườn quốc gia Phong Nha - Kẻ Bàng", category: "Di sản thiên nhiên (2003)", region: "Quảng Bình" },
    { name: "Không gian văn hoá Cồng chiêng Tây Nguyên", category: "Kiệt tác truyền khẩu/phi vật thể (2005)", region: "Tây Nguyên" },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Banner Top */}
      <div className="relative rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 sm:p-8 text-white overflow-hidden border border-slate-800 shadow-xl">
        <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> Phân Tích Toàn Diện Dữ Liệu Giáo Trình
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-snug">
            {BOOK_INFO.title}
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Phân tích chi tiết bộ sách giáo khoa <span className="text-amber-300 font-semibold">{BOOK_INFO.series}</span> thuộc Nhà xuất bản Giáo dục Việt Nam. Bao gồm tổng cộng <span className="font-bold text-white">29 bài học</span> trải dài trên <span className="font-bold text-white">6 chủ đề trọng tâm</span> từ địa phương, các miền vùng địa lý đất nước đến dòng chảy lịch sử văn hoá Việt Nam.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 text-xs">
            <div className="bg-slate-800/60 backdrop-blur rounded-xl p-3 border border-slate-700/50">
              <span className="text-slate-400 block mb-0.5">Tổng số chủ đề</span>
              <span className="text-xl font-bold text-amber-400">6 Chủ đề</span>
            </div>
            <div className="bg-slate-800/60 backdrop-blur rounded-xl p-3 border border-slate-700/50">
              <span className="text-slate-400 block mb-0.5">Tổng bài học</span>
              <span className="text-xl font-bold text-emerald-400">29 Bài</span>
            </div>
            <div className="bg-slate-800/60 backdrop-blur rounded-xl p-3 border border-slate-700/50">
              <span className="text-slate-400 block mb-0.5">Danh nhân lịch sử</span>
              <span className="text-xl font-bold text-sky-400">{HISTORICAL_FIGURES.length} Nhân vật</span>
            </div>
            <div className="bg-slate-800/60 backdrop-blur rounded-xl p-3 border border-slate-700/50">
              <span className="text-slate-400 block mb-0.5">Thuật ngữ cốt lõi</span>
              <span className="text-xl font-bold text-violet-400">{GLOSSARY.length} Từ khóa</span>
            </div>
          </div>
        </div>
      </div>

      {/* Structure Chart & Key Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recharts Bar Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Phân Bổ Số Bài Học Theo 6 Chủ Đề
              </h3>
              <p className="text-xs text-slate-500">Cấu trúc phân phối dung lượng nội dung trong bộ sách</p>
            </div>
            <BookOpen className="w-5 h-5 text-amber-500" />
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                <XAxis dataKey="name" tick={{ fontSize: 10 }} interval={0} angle={-15} textAnchor="end" />
                <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                  formatter={(val) => [`${val} bài`, 'Số lượng bài học']}
                />
                <Bar dataKey="lessons" radius={[6, 6, 0, 0]}>
                  {chartData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Authors & Publication Information Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm">
            <Award className="w-5 h-5" />
            <span>Thông Tin Xuất Bản & Tác Giả</span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <span className="text-slate-500 block">Bộ sách:</span>
              <p className="font-semibold text-slate-800 dark:text-slate-200">{BOOK_INFO.series}</p>
            </div>
            <div>
              <span className="text-slate-500 block">Nhà xuất bản:</span>
              <p className="font-semibold text-slate-800 dark:text-slate-200">{BOOK_INFO.publisher}</p>
            </div>
            <div>
              <span className="text-slate-500 block">Tác giả phần Lịch sử:</span>
              <p className="text-slate-700 dark:text-slate-300 leading-snug">{BOOK_INFO.authorsHistory}</p>
            </div>
            <div>
              <span className="text-slate-500 block">Tác giả phần Địa lí:</span>
              <p className="text-slate-700 dark:text-slate-300 leading-snug">{BOOK_INFO.authorsGeo}</p>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => onNavigateTab('ai-chat')}
              className="w-full py-2 px-3 bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition"
            >
              <span>Tra cứu cùng Trợ lý AI</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 6 Core Themes Cards Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-slate-900 dark:text-white text-lg">
            Khám Phá Các Chủ Đề Trong Chương Trình
          </h3>
          <span className="text-xs text-slate-500">Nhấn vào chủ đề để xem bài học chi tiết</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {THEMES.map((theme) => (
            <div
              key={theme.id}
              onClick={() => {
                onSelectTheme(theme.id);
                onNavigateTab('themes');
              }}
              className="group cursor-pointer bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 hover:shadow-md transition-all space-y-3 relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {theme.lessonRange}
                </span>
                <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1 group-hover:translate-x-0.5 transition">
                  {theme.lessonsCount} bài học <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-amber-600 dark:group-hover:text-amber-400 transition">
                  {theme.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                  {theme.description}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2 text-xs text-slate-400 border-t border-slate-100 dark:border-slate-800/80">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Khu vực: {theme.region}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* UNESCO Heritage Sites Matrix Section */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-base">
            <Globe2 className="w-5 h-5" />
            <span>Các Di Sản Thế Giới & Phi Vật Thể Nổi Bật Trong SGK</span>
          </div>
          <span className="text-xs text-slate-500">Ghi danh bởi UNESCO</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {unescoSites.map((site, index) => (
            <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
              <div>
                <h5 className="font-bold text-xs text-slate-900 dark:text-slate-100">{site.name}</h5>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">{site.category}</p>
                <span className="inline-block mt-1 text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 px-1.5 py-0.5 rounded">
                  {site.region}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
