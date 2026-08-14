import React, { useState } from 'react';
import { LESSONS, THEMES } from '../data/textbookData';
import { DifficultyLevel } from '../data/questionBank';
import { User, GraduationCap, Settings2, PlayCircle, BookOpen, Layers, Award, Sparkles } from 'lucide-react';

export interface QuizConfig {
  studentName: string;
  studentClass: string;
  questionCount: number;
  difficulty: DifficultyLevel | 'all';
  scopeType: 'all' | 'theme' | 'lesson';
  selectedThemeId: string;
  selectedLessonId: number;
}

interface QuizSetupProps {
  onStartQuiz: (config: QuizConfig) => void;
  initialConfig?: QuizConfig;
}

export const QuizSetup: React.FC<QuizSetupProps> = ({ onStartQuiz, initialConfig }) => {
  const [studentName, setStudentName] = useState(initialConfig?.studentName || '');
  const [studentClass, setStudentClass] = useState(initialConfig?.studentClass || 'Lớp 4A');
  const [questionCount, setQuestionCount] = useState(initialConfig?.questionCount || 10);
  const [difficulty, setDifficulty] = useState<DifficultyLevel | 'all'>(initialConfig?.difficulty || 'all');
  const [scopeType, setScopeType] = useState<'all' | 'theme' | 'lesson'>(initialConfig?.scopeType || 'all');
  const [selectedThemeId, setSelectedThemeId] = useState(initialConfig?.selectedThemeId || THEMES[0].id);
  const [selectedLessonId, setSelectedLessonId] = useState(initialConfig?.selectedLessonId || 1);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) {
      setErrorMsg('Vui lòng nhập Tên Học Sinh để bắt đầu bài thi!');
      return;
    }
    setErrorMsg('');
    onStartQuiz({
      studentName: studentName.trim(),
      studentClass: studentClass.trim() || 'Lớp 4',
      questionCount,
      difficulty,
      scopeType,
      selectedThemeId,
      selectedLessonId,
    });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn">
      {/* App Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-600 via-amber-500 to-emerald-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/20 text-amber-200 text-xs font-bold backdrop-blur">
            <Award className="w-4 h-4 text-amber-300" /> Gia Sư Học Tập Thông Minh • Tác giả: Quang Linh
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            GIA SƯ LỊCH SƯ ĐỊA LÝ LỚP 4
          </h1>
          <p className="text-xs sm:text-sm text-amber-100 max-w-xl leading-relaxed">
            Hệ thống ôn luyện trắc nghiệm theo chương trình SGK Kết Nối Tri Thức Với Cuộc Sống. Giúp học sinh nắm chắc kiến thức và tự tin đạt điểm cao!
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
            <Settings2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Thành Lập Hồ Sơ & Đề Thi Ôn Tập</h2>
            <p className="text-xs text-slate-500">Tùy chỉnh cá nhân hóa số câu hỏi, bài học và mức độ phù hợp</p>
          </div>
        </div>

        {errorMsg && (
          <div className="p-3.5 bg-rose-500/10 border border-rose-500/30 rounded-2xl text-rose-600 text-xs font-bold animate-shake">
            ⚠️ {errorMsg}
          </div>
        )}

        {/* 1. Thông tin học sinh */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <User className="w-4 h-4 text-amber-500" /> Tên Học Sinh <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Nhập họ và tên học sinh (VD: Nguyễn Văn An)"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-white"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-emerald-500" /> Lớp Học
            </label>
            <input
              type="text"
              placeholder="VD: Lớp 4A1"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-white"
            />
          </div>
        </div>

        {/* 2. Chọn Số Lượng Câu Hỏi */}
        <div className="space-y-3 pt-2">
          <div className="flex justify-between items-center flex-wrap gap-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-sky-500" /> Chọn Số Lượng Câu Hỏi (Mỗi câu +10 điểm, Tối đa 50 câu)
            </label>
            <span className="px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full text-xs font-extrabold border border-amber-500/20">
              {questionCount} câu hỏi ({questionCount * 10} điểm)
            </span>
          </div>

          <div className="grid grid-cols-6 gap-2">
            {[10, 20, 30, 40, 50].map((num) => (
              <button
                type="button"
                key={num}
                onClick={() => setQuestionCount(num)}
                className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                  questionCount === num
                    ? 'bg-amber-500 text-slate-950 font-black border-amber-500 shadow-md scale-105'
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                }`}
              >
                {num} câu
              </button>
            ))}
          </div>
          <input
            type="range"
            min="5"
            max="50"
            step="5"
            value={questionCount}
            onChange={(e) => setQuestionCount(Number(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer"
          />
          <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
            ✨ Mỗi lượt làm bài hệ thống tự động trộn ngẫu nhiên thứ tự câu hỏi và phương án!
          </p>
        </div>

        {/* 3. Mức Độ Câu Hỏi */}
        <div className="space-y-2 pt-2">
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-indigo-500" /> Mức Độ Nhận Thức
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              { id: 'all', title: 'Tổng hợp 3 mức độ', desc: 'Trộn lẫn Nhận biết, Thông hiểu, Vận dụng (Khuyên dùng)' },
              { id: 'nhan-biet', title: 'Nhận biết', desc: 'Kiểm tra trí nhớ, định nghĩa, mốc lịch sử' },
              { id: 'thong-hieu', title: 'Thông hiểu', desc: 'Giải thích nguyên nhân, ý nghĩa sự kiện' },
              { id: 'van-dung', title: 'Vận dụng', desc: 'Liên hệ thực tế, bảo vệ môi trường, bài học kinh nghiệm' },
            ].map((lvl) => (
              <button
                type="button"
                key={lvl.id}
                onClick={() => setDifficulty(lvl.id as any)}
                className={`p-3.5 rounded-2xl text-left border transition-all ${
                  difficulty === lvl.id
                    ? 'bg-amber-500/15 border-amber-500 text-slate-900 dark:text-white shadow-sm ring-1 ring-amber-500'
                    : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
                }`}
              >
                <div className="font-bold text-xs text-amber-600 dark:text-amber-400">{lvl.title}</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{lvl.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* 4. Chọn Bài Học / Chủ Đề */}
        <div className="space-y-3 pt-2">
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-teal-500" /> Phạm Vi Bài Học
          </label>

          <div className="flex gap-2">
            {[
              { id: 'all', label: 'Toàn Bộ 29 Bài' },
              { id: 'theme', label: 'Theo Chủ Đề' },
              { id: 'lesson', label: 'Bài Học Cụ Thể' },
            ].map((st) => (
              <button
                type="button"
                key={st.id}
                onClick={() => setScopeType(st.id as any)}
                className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                  scopeType === st.id
                    ? 'bg-slate-900 text-white dark:bg-amber-500 border-slate-900 dark:border-amber-500'
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>

          {scopeType === 'theme' && (
            <select
              value={selectedThemeId}
              onChange={(e) => setSelectedThemeId(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-900 dark:text-white"
            >
              {THEMES.map((theme) => (
                <option key={theme.id} value={theme.id}>
                  {theme.name} ({theme.lessonRange})
                </option>
              ))}
            </select>
          )}

          {scopeType === 'lesson' && (
            <select
              value={selectedLessonId}
              onChange={(e) => setSelectedLessonId(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-900 dark:text-white"
            >
              {LESSONS.map((ls) => (
                <option key={ls.id} value={ls.id}>
                  {ls.number}: {ls.title}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Start Button */}
        <button
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-amber-500 via-amber-600 to-emerald-600 hover:from-amber-600 hover:to-emerald-700 text-white font-extrabold text-sm rounded-2xl shadow-lg hover:shadow-xl transition-all transform active:scale-98 flex items-center justify-center gap-2"
        >
          <PlayCircle className="w-5 h-5" /> BẮT ĐẦU ÔN TẬP VỚI GIA SƯ
        </button>
      </form>
    </div>
  );
};
