import React from 'react';
import { HISTORICAL_FIGURES, LESSONS } from '../data/textbookData';
import { UserCheck, Calendar, BookOpen, ShieldAlert } from 'lucide-react';

export const HistoricalFiguresList: React.FC = () => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
        <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-lg">
          <UserCheck className="w-5 h-5" />
          <h2>Các Danh Nhân & Anh Hùng Lịch Sử Trong SGK Lớp 4</h2>
        </div>
        <p className="text-xs text-slate-500 leading-relaxed">
          Tổng hợp các nhân vật lịch sử tiêu biểu được giảng dạy trong chương trình, từ thời kỳ Vua Hùng dựng nước đến các vị anh hùng dân tộc trong kháng chiến chống Pháp, chống Mỹ và xây dựng đất nước.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {HISTORICAL_FIGURES.map((figure, idx) => {
          const lesson = LESSONS.find((l) => l.id === figure.lessonId);
          return (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-amber-500/40 transition flex flex-col justify-between space-y-3 relative"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[11px] font-semibold border border-amber-500/20">
                    {figure.period}
                  </span>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <BookOpen className="w-3 h-3" /> Bài {lesson?.number}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug">
                  {figure.name}
                </h3>

                <p className="text-xs font-medium text-amber-700 dark:text-amber-300">
                  {figure.role}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                  {figure.summary}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400">
                Gắn liền với bài học: <span className="text-slate-700 dark:text-slate-300 font-semibold">{lesson?.title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
