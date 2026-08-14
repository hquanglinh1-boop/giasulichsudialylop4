import React, { useState, useEffect } from 'react';
import { QuizResultRecord } from './QuizSection';
import { exportQuizHistoryToExcel, getRankText } from '../utils/excelExport';
import { Trophy, Clock, Calendar, Trash2, Award, BookOpen, Layers, Crown, Sparkles, Medal, FileSpreadsheet, Search, Filter, Download } from 'lucide-react';

export const QuizHistory: React.FC = () => {
  const [history, setHistory] = useState<QuizResultRecord[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRank, setFilterRank] = useState<string>('all');

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem('giasu_quiz_history') || '[]');
      setHistory(data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleClearHistory = () => {
    if (window.confirm('Em có chắc chắn muốn xóa tất cả lịch sử và bảng vinh danh không?')) {
      localStorage.removeItem('giasu_quiz_history');
      setHistory([]);
    }
  };

  const handleExportExcel = () => {
    exportQuizHistoryToExcel(filteredHistory, 'Bang_Diem_Hoc_Sinh_LichSu_DiaLy_Lop4.xlsx');
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}p ${s < 10 ? '0' : ''}${s}s`;
  };

  // Filter history
  const filteredHistory = history.filter(rec => {
    const matchesSearch =
      (rec.studentName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (rec.studentClass || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (rec.scopeText || '').toLowerCase().includes(searchTerm.toLowerCase());

    const rank = getRankText(rec.percentage);
    const matchesRank = filterRank === 'all' || rank === filterRank;

    return matchesSearch && matchesRank;
  });

  // Sort history by points descending for Leaderboard vinh danh
  const sortedHistory = [...filteredHistory].sort((a, b) => {
    const ptsA = a.totalPoints ?? (a.score * 10);
    const ptsB = b.totalPoints ?? (b.score * 10);
    return ptsB - ptsA;
  });

  // Analytics summary
  const totalSubmissions = history.length;
  const avgPoints = totalSubmissions > 0
    ? Math.round(history.reduce((acc, curr) => acc + (curr.totalPoints ?? curr.score * 10), 0) / totalSubmissions)
    : 0;
  const excellentCount = history.filter(h => h.percentage >= 90).length;

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-emerald-600 rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-wrap items-center justify-between gap-4 relative overflow-hidden">
        <div className="space-y-1 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/20 text-amber-200 text-xs font-extrabold backdrop-blur">
            <Trophy className="w-3.5 h-3.5 text-amber-300" /> QUẢN LÝ KẾT QUẢ & BẢNG VINH DANH
          </div>
          <h2 className="text-2xl font-black">
            Lịch Sử Làm Bài & Bảng Điểm Lớp 4
          </h2>
          <p className="text-xs text-amber-100 max-w-md">
            Lưu trữ đầy đủ lịch sử bài làm của học sinh. Hỗ trợ xuất file Excel đầy đủ chi tiết cho giáo viên và phụ huynh!
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 relative z-10">
          {history.length > 0 && (
            <button
              onClick={handleExportExcel}
              className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-2xl text-xs font-black flex items-center gap-2 shadow-lg transition scale-100 hover:scale-105"
            >
              <FileSpreadsheet className="w-4 h-4 text-slate-950" /> Tải File Excel (.xlsx)
            </button>
          )}

          {history.length > 0 && (
            <button
              onClick={handleClearHistory}
              className="px-3.5 py-2.5 bg-black/30 hover:bg-black/40 text-amber-100 rounded-2xl text-xs font-bold flex items-center gap-1.5 border border-amber-300/30 transition"
            >
              <Trash2 className="w-3.5 h-3.5" /> Xóa
            </button>
          )}
        </div>
      </div>

      {/* Summary Stat Cards */}
      {history.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-slate-400 block">Tổng số bài thi đã lưu</span>
              <span className="text-2xl font-black text-slate-900 dark:text-white">{totalSubmissions} bài</span>
            </div>
            <Award className="w-8 h-8 text-amber-500 opacity-80" />
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-slate-400 block">Điểm tích lũy trung bình</span>
              <span className="text-2xl font-black text-emerald-500">{avgPoints} điểm</span>
            </div>
            <Trophy className="w-8 h-8 text-emerald-500 opacity-80" />
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-slate-400 block">Đạt Hoàn Thành Xuất Sắc</span>
              <span className="text-2xl font-black text-amber-500">{excellentCount} lượt</span>
            </div>
            <Crown className="w-8 h-8 text-amber-400 opacity-80" />
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      {history.length > 0 && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-3 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-1 min-w-[200px] bg-slate-50 dark:bg-slate-800 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Tìm theo tên học sinh, lớp hoặc bài học..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none outline-none text-xs w-full text-slate-800 dark:text-slate-100 placeholder-slate-400"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400 shrink-0" />
            <select
              value={filterRank}
              onChange={(e) => setFilterRank(e.target.value)}
              className="bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 outline-none"
            >
              <option value="all">Tất cả xếp loại</option>
              <option value="HOÀN THÀNH XUẤT SẮC">Hoàn Thành Xuất Sắc (≥90%)</option>
              <option value="HOÀN THÀNH TỐT">Hoàn Thành Tốt (80-89%)</option>
              <option value="HOÀN THÀNH">Hoàn Thành (50-79%)</option>
              <option value="CHƯA HOÀN THÀNH">Chưa Hoàn Thành (&lt;50%)</option>
            </select>

            <button
              onClick={handleExportExcel}
              className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition"
            >
              <Download className="w-3.5 h-3.5" /> Xuất Excel
            </button>
          </div>
        </div>
      )}

      {history.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center space-y-3 border border-slate-200 dark:border-slate-800 shadow-sm">
          <Award className="w-14 h-14 text-slate-300 dark:text-slate-700 mx-auto animate-bounce" />
          <h3 className="text-base font-bold text-slate-700 dark:text-slate-300">Bảng Lịch Sử Đang Trống</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Chưa có lượt làm bài nào được ghi nhận. Em hãy vào tab "Gia Sư Ôn Tập", hoàn thành bài thi 10, 20, 30, 40 hoặc 50 câu để ghi nhận điểm số và xuất file Excel nhé!
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center justify-between px-2 text-xs font-bold text-slate-500">
            <span>Danh sách thành tích (Xếp theo Điểm Số cao nhất)</span>
            <span>Hiển thị: {sortedHistory.length} / {history.length} lượt thi</span>
          </div>

          {sortedHistory.map((rec, index) => {
            const points = rec.totalPoints ?? (rec.score * 10);
            const maxPoints = rec.maxPoints ?? (rec.totalQuestions * 10);

            // Medals for top 3
            let badge = null;
            let cardBorder = "border-slate-200 dark:border-slate-800";
            if (index === 0) {
              badge = <span className="px-2.5 py-1 rounded-xl bg-amber-500 text-slate-950 font-black text-xs flex items-center gap-1 shadow-sm"><Crown className="w-3.5 h-3.5" /> TOP 1 • HẠNG NHẤT</span>;
              cardBorder = "border-2 border-amber-500/60 bg-amber-500/5";
            } else if (index === 1) {
              badge = <span className="px-2.5 py-1 rounded-xl bg-slate-300 text-slate-900 font-black text-xs flex items-center gap-1 shadow-sm"><Medal className="w-3.5 h-3.5" /> TOP 2 • HẠNG NHÌ</span>;
              cardBorder = "border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60";
            } else if (index === 2) {
              badge = <span className="px-2.5 py-1 rounded-xl bg-amber-700 text-white font-black text-xs flex items-center gap-1 shadow-sm"><Award className="w-3.5 h-3.5" /> TOP 3 • HẠNG BA</span>;
              cardBorder = "border border-amber-700/40 bg-amber-700/5";
            }

            const rankText = getRankText(rec.percentage);

            return (
              <div
                key={rec.id}
                className={`bg-white dark:bg-slate-900 rounded-3xl p-5 shadow-sm flex flex-wrap items-center justify-between gap-4 transition hover:shadow-md ${cardBorder}`}
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    {badge}
                    <span className="font-extrabold text-base text-slate-900 dark:text-white">{rec.studentName}</span>
                    <span className="px-2.5 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20">
                      {rec.studentClass}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-bold">
                      {rankText}
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1 ml-auto sm:ml-0">
                      <Calendar className="w-3 h-3" /> {rec.date}
                    </span>
                  </div>

                  <div className="text-xs text-slate-600 dark:text-slate-400 flex flex-wrap items-center gap-3">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-teal-500" /> Phạm vi: {rec.scopeText}
                    </span>
                    <span className="flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5 text-indigo-500" /> Mức độ: {rec.difficulty}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-sky-500" /> {formatTime(rec.timeSpentSeconds)}
                    </span>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-2xl font-black text-amber-500">
                    {points} <span className="text-xs font-bold text-slate-400">/ {maxPoints} điểm</span>
                  </div>
                  <div className="text-xs font-extrabold text-emerald-500 flex items-center justify-end gap-1">
                    <Sparkles className="w-3 h-3" /> Đúng {rec.score}/{rec.totalQuestions} câu ({rec.percentage}%)
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
