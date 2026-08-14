import React, { useState } from 'react';
import { THEMES, LESSONS, Lesson } from '../data/textbookData';
import { Search, BookOpen, MapPin, CheckCircle, ChevronRight, User, Award, Tag } from 'lucide-react';

interface ThemeExplorerProps {
  selectedThemeId: string;
  setSelectedThemeId: (id: string) => void;
}

export const ThemeExplorer: React.FC<ThemeExplorerProps> = ({ selectedThemeId, setSelectedThemeId }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(LESSONS[0]);

  const filteredLessons = LESSONS.filter((lesson) => {
    const matchesTheme = selectedThemeId === 'all' || lesson.themeId === selectedThemeId;
    const matchesSearch =
      lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTheme && matchesSearch;
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Search and Theme Filter Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h2 className="font-bold text-slate-900 dark:text-white text-lg flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-500" />
            <span>Khám Phá 29 Bài Học SGK</span>
          </h2>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm bài học, từ khóa, địa danh..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            />
          </div>
        </div>

        {/* Theme Pills */}
        <div className="flex overflow-x-auto gap-2 py-1 scrollbar-none border-t border-slate-100 dark:border-slate-800/80 pt-3">
          <button
            onClick={() => setSelectedThemeId('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
              selectedThemeId === 'all'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Tất cả chủ đề (29)
          </button>
          {THEMES.map((theme) => (
            <button
              key={theme.id}
              onClick={() => setSelectedThemeId(theme.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                selectedThemeId === theme.id
                  ? 'bg-amber-500 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {theme.name} ({theme.lessonsCount})
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Layout: Sidebar Lesson List + Lesson Detail View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Lesson List (Left Column) */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2 max-h-[700px] overflow-y-auto">
          <div className="text-xs font-semibold text-slate-400 px-2 pb-2 border-b border-slate-100 dark:border-slate-800 flex justify-between">
            <span>Danh sách bài học ({filteredLessons.length})</span>
            <span>Trang SGK</span>
          </div>

          {filteredLessons.length === 0 ? (
            <div className="text-center py-8 text-slate-400 text-xs">
              Không tìm thấy bài học phù hợp với từ khóa "{searchQuery}"
            </div>
          ) : (
            filteredLessons.map((lesson) => {
              const isSelected = activeLesson?.id === lesson.id;
              return (
                <div
                  key={lesson.id}
                  onClick={() => setActiveLesson(lesson)}
                  className={`cursor-pointer rounded-xl p-3 text-xs transition-all space-y-1 ${
                    isSelected
                      ? 'bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/40 text-slate-900 dark:text-white shadow-sm'
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-transparent text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold">
                    <span className="text-amber-600 dark:text-amber-400">{lesson.number}</span>
                    <span className="text-[11px] text-slate-400">Trang {lesson.page}</span>
                  </div>
                  <h4 className="font-semibold text-sm line-clamp-1">{lesson.title}</h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">{lesson.summary}</p>
                </div>
              );
            })
          )}
        </div>

        {/* Detailed Lesson Viewer (Right Column) */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          {activeLesson ? (
            <div className="space-y-6">
              {/* Header */}
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold border border-amber-500/20">
                    {activeLesson.number} • SGK Trang {activeLesson.page}
                  </span>
                  <span className="text-xs text-slate-400">
                    Chủ đề: {THEMES.find((t) => t.id === activeLesson.themeId)?.name}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug">
                  {activeLesson.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
                  {activeLesson.summary}
                </p>
              </div>

              {/* Key Knowledge Points */}
              <div className="space-y-3">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                   Kiến Thức Trọng Tâm Bài Học
                </h4>
                <ul className="space-y-2">
                  {activeLesson.keyPoints.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/30 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800"
                    >
                      <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Keywords / Tags */}
              <div className="space-y-2">
                <h4 className="font-bold text-xs text-slate-500 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" /> Từ khóa cốt lõi
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeLesson.keywords.map((kw, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-medium rounded-lg border border-amber-500/20"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Heritage / Historical Figures / Geo Features if present */}
              {(activeLesson.historicalFigures || activeLesson.heritageSites || activeLesson.geographyFeatures) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                  {activeLesson.historicalFigures && (
                    <div className="p-3 bg-sky-500/5 rounded-xl border border-sky-500/20 space-y-1">
                      <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 flex items-center gap-1">
                        <User className="w-3.5 h-3.5" /> Nhân vật liên quan
                      </span>
                      <p className="text-xs text-slate-700 dark:text-slate-300">
                        {activeLesson.historicalFigures.join(', ')}
                      </p>
                    </div>
                  )}

                  {activeLesson.heritageSites && (
                    <div className="p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/20 space-y-1">
                      <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <Award className="w-3.5 h-3.5" /> Di sản & Di tích
                      </span>
                      <p className="text-xs text-slate-700 dark:text-slate-300">
                        {activeLesson.heritageSites.join(', ')}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 text-slate-400 text-xs">
              Chọn một bài học từ danh sách bên trái để xem nội dung phân tích chi tiết.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
