import React from 'react';
import { Award, Trophy, ShieldCheck, Sparkles, CheckCircle2, Calendar, Clock, BookOpen, Star } from 'lucide-react';

export interface CertificateProps {
  studentName: string;
  studentClass: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  totalPoints: number;
  maxPoints: number;
  timeSpentSeconds: number;
  scopeText: string;
  date: string;
}

export function getCertificateStatus(pct: number) {
  if (pct >= 90) {
    return {
      statusText: 'HOÀN THÀNH XUẤT SẮC',
      tagline: 'XUẤT SẮC',
      badgeClass: 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 border-amber-300 shadow-lg shadow-amber-500/20',
      sealClass: 'border-amber-500 text-amber-600 bg-amber-500/10',
      bannerBg: 'bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600',
      textColor: 'text-amber-600 dark:text-amber-400',
      borderGlow: 'border-amber-500/50',
      icon: '🏆',
      message: 'Tuyên dương tinh thần học tập vượt trội, làm chủ xuất sắc các kiến thức Lịch Sử và Địa Lý Lớp 4!'
    };
  } else if (pct >= 80) {
    return {
      statusText: 'HOÀN THÀNH TỐT',
      tagline: 'TỐT',
      badgeClass: 'bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white border-emerald-300 shadow-lg shadow-emerald-500/20',
      sealClass: 'border-emerald-500 text-emerald-600 bg-emerald-500/10',
      bannerBg: 'bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600',
      textColor: 'text-emerald-600 dark:text-emerald-400',
      borderGlow: 'border-emerald-500/50',
      icon: '🌟',
      message: 'Chúc mừng em đã nắm rất vững trọng tâm bài học, đạt kết quả xuất sắc trong bài kiểm tra!'
    };
  } else if (pct >= 50) {
    return {
      statusText: 'HOÀN THÀNH',
      tagline: 'ĐẠT CẦU',
      badgeClass: 'bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 text-white border-sky-300 shadow-lg shadow-sky-500/20',
      sealClass: 'border-sky-500 text-sky-600 bg-sky-500/10',
      bannerBg: 'bg-gradient-to-r from-sky-600 via-blue-500 to-indigo-600',
      textColor: 'text-sky-600 dark:text-sky-400',
      borderGlow: 'border-sky-500/50',
      icon: '👍',
      message: 'Em đã hoàn thành các câu hỏi yêu cầu. Hãy ôn lại những phần chưa chính xác để bứt phá hơn nữa nhé!'
    };
  } else {
    return {
      statusText: 'CHƯA HOÀN THÀNH',
      tagline: 'CẦN CỐ GẮNG',
      badgeClass: 'bg-gradient-to-r from-orange-500 via-rose-500 to-amber-600 text-white border-orange-300 shadow-lg shadow-orange-500/20',
      sealClass: 'border-orange-500 text-orange-600 bg-orange-500/10',
      bannerBg: 'bg-gradient-to-r from-orange-600 via-rose-500 to-amber-600',
      textColor: 'text-orange-600 dark:text-orange-400',
      borderGlow: 'border-orange-500/50',
      icon: '📖',
      message: 'Bài thi chưa đạt điểm tích lũy tối thiểu. Hãy mở mục 29 Bài Học để ôn tập lại và thử sức lại nhé!'
    };
  }
}

export const Certificate169: React.FC<CertificateProps> = ({
  studentName,
  studentClass,
  score,
  totalQuestions,
  percentage,
  totalPoints,
  maxPoints,
  timeSpentSeconds,
  scopeText,
  date,
}) => {
  const statusInfo = getCertificateStatus(percentage);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}p ${s < 10 ? '0' : ''}${s}s`;
  };

  return (
    <div
      id="certificate-169-frame"
      className="w-full max-w-4xl mx-auto aspect-[16/9] bg-amber-50/90 dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-2xl p-4 sm:p-7 md:p-9 border-[6px] border-amber-500/40 shadow-2xl relative flex flex-col justify-between overflow-hidden select-none print:aspect-[16/9] print:max-w-none print:w-full print:border-amber-600 print:bg-white"
      style={{
        backgroundImage: `radial-gradient(circle at center, rgba(251, 191, 36, 0.08) 0%, transparent 70%)`
      }}
    >
      {/* Decorative Outer Frame Ornaments */}
      <div className="absolute inset-2 border-2 border-dashed border-amber-500/30 rounded-xl pointer-events-none"></div>
      
      {/* Top Corners Floral Ornaments */}
      <div className="absolute top-3 left-3 text-amber-500/40 text-xl font-black font-serif select-none pointer-events-none">
        ❖
      </div>
      <div className="absolute top-3 right-3 text-amber-500/40 text-xl font-black font-serif select-none pointer-events-none">
        ❖
      </div>
      <div className="absolute bottom-3 left-3 text-amber-500/40 text-xl font-black font-serif select-none pointer-events-none">
        ❖
      </div>
      <div className="absolute bottom-3 right-3 text-amber-500/40 text-xl font-black font-serif select-none pointer-events-none">
        ❖
      </div>

      {/* Header Banner */}
      <div className="text-center space-y-1 z-10 relative">
        <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 text-[10px] sm:text-xs font-black uppercase tracking-widest border border-amber-500/30">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          HỆ THỐNG GIA SƯ LỊCH SỬ & ĐỊA LÝ LỚP 4
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
        </div>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-serif font-black tracking-wide text-amber-800 dark:text-amber-200 uppercase drop-shadow-sm">
          GIẤY CHỨNG NHẬN KẾT QUẢ ÔN TẬP
        </h1>
        <p className="text-[10px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 italic">
          Ghi nhận thành tích tự luyện tập kiến thức Lịch Sử và Địa Lý Lớp 4
        </p>
      </div>

      {/* Main Body Content */}
      <div className="text-center space-y-2 sm:space-y-3 my-auto z-10 relative">
        <div className="text-xs sm:text-sm font-serif italic text-slate-600 dark:text-slate-300">
          Trao chứng nhận này cho học sinh:
        </div>

        <div className="space-y-0.5">
          <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-amber-300 font-serif tracking-tight underline decoration-amber-500/50 decoration-2 underline-offset-4">
            {studentName || 'Học Sinh Lớp 4'}
          </div>
          <div className="text-xs sm:text-sm font-bold text-emerald-700 dark:text-emerald-400">
            Học sinh Lớp: <span className="uppercase">{studentClass || '4A'}</span>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 max-w-xl mx-auto font-medium">
          Đã hoàn thành bài kiểm tra trắc nghiệm phạm vi: <strong className="text-amber-700 dark:text-amber-300">{scopeText}</strong>
        </div>

        {/* Certificate Classification Badge */}
        <div className="pt-1 flex flex-col items-center justify-center gap-1.5">
          <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-2xl text-xs sm:text-sm font-black border-2 ${statusInfo.badgeClass}`}>
            <span className="text-base">{statusInfo.icon}</span>
            <span>XẾP LOẠI: {statusInfo.statusText}</span>
          </div>
          <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium italic max-w-md">
            "{statusInfo.message}"
          </p>
        </div>
      </div>

      {/* Bottom Metrics Bar & Official Seal/Signatures */}
      <div className="grid grid-cols-3 items-end pt-2 border-t border-amber-500/20 z-10 relative text-xs">
        {/* Left: Performance Details */}
        <div className="space-y-1 text-left text-[10px] sm:text-xs">
          <div className="font-extrabold text-amber-700 dark:text-amber-400 flex items-center gap-1">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span>ĐIỂM SỐ: {totalPoints} / {maxPoints} ĐIỂM</span>
          </div>
          <div className="text-slate-600 dark:text-slate-400 flex items-center gap-1 font-semibold">
            <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Đúng {score}/{totalQuestions} câu ({percentage}%)
          </div>
          <div className="text-slate-500 dark:text-slate-400 flex items-center gap-1 font-semibold">
            <Clock className="w-3 h-3 text-sky-500" /> Thời gian: {formatTime(timeSpentSeconds)}
          </div>
        </div>

        {/* Center: Official Stamp / Emblem */}
        <div className="flex flex-col items-center justify-center">
          <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-dashed flex flex-col items-center justify-center p-1 text-center shadow-inner ${statusInfo.sealClass}`}>
            <ShieldCheck className="w-5 h-5" />
            <span className="text-[8px] font-black uppercase tracking-tighter leading-tight mt-0.5">
              {statusInfo.tagline}
            </span>
            <span className="text-[7px] text-slate-500 font-bold">100% CHUẨN</span>
          </div>
        </div>

        {/* Right: Signature & Date */}
        <div className="text-right space-y-0.5 text-[10px] sm:text-xs">
          <div className="text-slate-500 dark:text-slate-400 font-medium italic">
            Ngày cấp: {date}
          </div>
          <div className="font-bold text-slate-800 dark:text-slate-200">
            Gia Sư Lịch Sử & Địa Lý 4
          </div>
          <div className="font-serif italic text-amber-600 dark:text-amber-400 font-black text-sm pt-0.5">
            Quang Linh
          </div>
          <div className="text-[9px] text-slate-400">
            ThS. Quang Linh (Biên soạn)
          </div>
        </div>
      </div>
    </div>
  );
};
