import React, { useState, useEffect, useRef } from 'react';
import { QuizConfig } from './QuizSetup';
import { QUESTION_BANK, Question } from '../data/questionBank';
import { LESSONS, THEMES } from '../data/textbookData';
import { soundFx } from '../utils/soundEffects';
import { Certificate169 } from './Certificate169';
import { exportQuizHistoryToExcel } from '../utils/excelExport';
import { downloadCertificateImage } from '../utils/downloadCertificate';
import {
  HelpCircle, CheckCircle, XCircle, RefreshCw, Trophy, Sparkles,
  Clock, Award, Printer, ArrowLeft, BookOpen, ShieldCheck, Play, Maximize2, Eye, X, FileSpreadsheet, Download
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuizSectionProps {
  config: QuizConfig;
  onResetSetup: () => void;
}

export interface QuizResultRecord {
  id: string;
  studentName: string;
  studentClass: string;
  date: string;
  score: number; // Correct answers count
  totalPoints: number; // Total points earned (e.g., 480 điểm)
  maxPoints: number; // Max possible points (e.g., 500 điểm)
  totalQuestions: number;
  percentage: number;
  timeSpentSeconds: number;
  difficulty: string;
  scopeText: string;
}

export const QuizSection: React.FC<QuizSectionProps> = ({ config, onResetSetup }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ questionId: number; selectedIdx: number; isCorrect: boolean }[]>([]);
  const [showCertModal, setShowCertModal] = useState(false);
  const autoNextTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Clear auto-next timer on unmount
  useEffect(() => {
    return () => {
      if (autoNextTimerRef.current) clearTimeout(autoNextTimerRef.current);
    };
  }, []);

  // Filter & shuffle questions based on config
  useEffect(() => {
    let pool = [...QUESTION_BANK];

    // Filter by Scope
    if (config.scopeType === 'theme') {
      pool = pool.filter(q => q.themeId === config.selectedThemeId);
    } else if (config.scopeType === 'lesson') {
      pool = pool.filter(q => q.lessonId === config.selectedLessonId);
    }

    // Filter by Difficulty
    if (config.difficulty !== 'all') {
      const diffPool = pool.filter(q => q.difficulty === config.difficulty);
      if (diffPool.length >= 3) {
        pool = diffPool;
      }
    }

    // If pool is smaller than requested, pad with remaining questions
    if (pool.length < config.questionCount) {
      const remaining = QUESTION_BANK.filter(q => !pool.some(p => p.id === q.id));
      pool = [...pool, ...remaining];
    }

    // Always Shuffle questions randomly
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(config.questionCount, pool.length));
    setQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setIsFinished(false);
    setTimeSpent(0);
    setUserAnswers([]);
  }, [config]);

  // Timer
  useEffect(() => {
    if (isFinished || questions.length === 0) return;
    const interval = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isFinished, questions]);

  if (questions.length === 0) {
    return (
      <div className="max-w-xl mx-auto p-8 bg-white dark:bg-slate-900 rounded-3xl border text-center space-y-4">
        <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Đang khởi tạo bộ câu hỏi ngẫu nhiên...</p>
      </div>
    );
  }

  const currentQ = questions[currentQuestionIndex];

  const handleSelectOption = (idx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    setShowExplanation(true);

    const isCorrect = idx === currentQ.correctAnswer;
    const newAnswers = [
      ...userAnswers,
      { questionId: currentQ.id, selectedIdx: idx, isCorrect }
    ];
    setUserAnswers(newAnswers);

    const newScore = newAnswers.filter(a => a.isCorrect).length;
    setScore(newScore);

    if (isCorrect) {
      soundFx.playCorrectSound();
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 }
      });

      // Tự động chuyển câu tiếp theo sau 1.3s khi trả lời đúng
      autoNextTimerRef.current = setTimeout(() => {
        handleNextQuestion(newAnswers);
      }, 1300);
    } else {
      soundFx.playIncorrectSound();
    }
  };

  const handleNextQuestion = (latestAnswers?: typeof userAnswers) => {
    if (autoNextTimerRef.current) {
      clearTimeout(autoNextTimerRef.current);
      autoNextTimerRef.current = null;
    }

    const answersList = latestAnswers || userAnswers;
    const finalScore = answersList.filter(a => a.isCorrect).length;

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
      soundFx.playVictoryFanfare();
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.5 }
      });

      // Save result to localStorage
      saveResultToHistory(finalScore);
    }
  };

  const saveResultToHistory = (computedScore?: number) => {
    const total = questions.length;
    const finalScore = computedScore !== undefined ? computedScore : score;
    const pct = Math.round((finalScore / total) * 100);
    const pts = finalScore * 10;
    const maxPts = total * 10;
    
    let scopeTxt = "Toàn bộ 29 bài học";
    if (config.scopeType === 'theme') {
      const th = THEMES.find(t => t.id === config.selectedThemeId);
      if (th) scopeTxt = th.name;
    } else if (config.scopeType === 'lesson') {
      const ls = LESSONS.find(l => l.id === config.selectedLessonId);
      if (ls) scopeTxt = `${ls.number}: ${ls.title}`;
    }

    const record: QuizResultRecord = {
      id: Date.now().toString(),
      studentName: config.studentName,
      studentClass: config.studentClass,
      date: new Date().toLocaleDateString('vi-VN') + ' ' + new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      score: finalScore,
      totalPoints: pts,
      maxPoints: maxPts,
      totalQuestions: total,
      percentage: pct,
      timeSpentSeconds: timeSpent,
      difficulty: config.difficulty === 'all' ? 'Tổng hợp' : config.difficulty,
      scopeText: scopeTxt
    };

    try {
      const existing = JSON.parse(localStorage.getItem('giasu_quiz_history') || '[]');
      localStorage.setItem('giasu_quiz_history', JSON.stringify([record, ...existing]));
    } catch (e) {
      console.error(e);
    }
  };

  const handleRestartCurrent = () => {
    if (autoNextTimerRef.current) {
      clearTimeout(autoNextTimerRef.current);
      autoNextTimerRef.current = null;
    }
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setShowExplanation(false);
    setIsFinished(false);
    setTimeSpent(0);
    setUserAnswers([]);
  };

  const handleResetSetup = () => {
    if (autoNextTimerRef.current) {
      clearTimeout(autoNextTimerRef.current);
      autoNextTimerRef.current = null;
    }
    onResetSetup();
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m} phút ${s < 10 ? '0' : ''}${s} giây`;
  };

  const percentage = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

  const getScopeText = () => {
    if (config.scopeType === 'theme') {
      const th = THEMES.find(t => t.id === config.selectedThemeId);
      if (th) return th.name;
    } else if (config.scopeType === 'lesson') {
      const ls = LESSONS.find(l => l.id === config.selectedLessonId);
      if (ls) return `${ls.number}: ${ls.title}`;
    }
    return "Toàn bộ 29 bài học Lịch Sử & Địa Lý Lớp 4";
  };

  const scopeText = getScopeText();

  const getEvaluation = (pct: number) => {
    if (pct >= 90) {
      return {
        rank: "HOÀN THÀNH XUẤT SẮC 🏆",
        color: "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/30 font-black",
        message: `Tuyên dương em ${config.studentName}! Em đã đạt xếp loại HOÀN THÀNH XUẤT SẮC (${pct}%). Em làm chủ hoàn toàn các kiến thức Lịch Sử và Địa Lý Lớp 4!`
      };
    } else if (pct >= 80) {
      return {
        rank: "HOÀN THÀNH TỐT 🌟",
        color: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/30 font-extrabold",
        message: `Chúc mừng em ${config.studentName}! Em đã đạt xếp loại HOÀN THÀNH TỐT (${pct}%). Em nắm rất vững bài học và các mốc sự kiện!`
      };
    } else if (pct >= 50) {
      return {
        rank: "HOÀN THÀNH 👍",
        color: "text-sky-600 dark:text-sky-400 bg-sky-500/10 border-sky-500/30 font-bold",
        message: `Em ${config.studentName} đã HOÀN THÀNH bài kiểm tra (${pct}%). Hãy xem lại phần giải thích các câu chưa đúng để đạt điểm số cao hơn nhé!`
      };
    } else {
      return {
        rank: "CHƯA HOÀN THÀNH 📖",
        color: "text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-500/30 font-bold",
        message: `Em ${config.studentName} ơi, bài thi đạt ${pct}% (CHƯA HOÀN THÀNH). Em hãy mở lại tóm tắt 29 Bài Học để ôn tập lại và thử sức lại nhé!`
      };
    }
  };

  const evalResult = getEvaluation(percentage);

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn">
      {/* Top Header Card: Student Status Bar */}
      <div className="bg-slate-900 text-white rounded-3xl p-5 shadow-lg border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-extrabold text-lg shadow-md">
            {config.studentName.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm sm:text-base text-amber-300">{config.studentName}</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[11px] font-bold border border-slate-700">
                {config.studentClass}
              </span>
            </div>
            <div className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
              <span>Mức độ: {config.difficulty === 'all' ? 'Tổng hợp' : config.difficulty}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-amber-400" /> {formatTime(timeSpent)}</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleResetSetup}
          className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Đổi cấu hình đề thi
        </button>
      </div>

      {!isFinished ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
          {/* Progress bar */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400 font-bold">
              <span>Câu hỏi {currentQuestionIndex + 1} / {questions.length}</span>
              <span className="text-amber-600 dark:text-amber-400 font-black">
                Điểm số: {score * 10} / {questions.length * 10} điểm ({score} câu đúng)
              </span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 transition-all duration-300 rounded-full"
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Title & Tag */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-lg text-[11px] font-extrabold border border-amber-500/20">
                Bài {currentQ.lessonId}
              </span>
              <span className="px-2.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-[11px] font-semibold">
                Mức độ: {currentQ.difficulty === 'nhan-biet' ? 'Nhận biết' : currentQ.difficulty === 'thong-hieu' ? 'Thông hiểu' : 'Vận dụng'}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
              {currentQ.question}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options.map((option, idx) => {
              let btnStyle = "bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800";

              if (selectedOption !== null) {
                if (idx === currentQ.correctAnswer) {
                  btnStyle = "bg-emerald-500/15 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold shadow-sm";
                } else if (idx === selectedOption) {
                  btnStyle = "bg-rose-500/15 border-rose-500 text-rose-700 dark:text-rose-300 font-bold";
                } else {
                  btnStyle = "bg-slate-50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-800 text-slate-400 opacity-50";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={selectedOption !== null}
                  className={`w-full p-4 rounded-2xl text-xs sm:text-sm text-left border font-medium flex items-center justify-between transition-all ${btnStyle}`}
                >
                  <span className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 ${
                      selectedOption !== null && idx === currentQ.correctAnswer
                        ? 'bg-emerald-500 text-white'
                        : selectedOption !== null && idx === selectedOption
                        ? 'bg-rose-500 text-white'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </span>

                  {selectedOption !== null && idx === currentQ.correctAnswer && (
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                  )}
                  {selectedOption !== null && idx === selectedOption && idx !== currentQ.correctAnswer && (
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation & Next Button */}
          {showExplanation && (
            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800 animate-fadeIn">
              {/* Notice when wrong */}
              {selectedOption !== currentQ.correctAnswer && (
                <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-xs font-bold text-rose-600 dark:text-rose-400 flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 shrink-0 text-rose-500" />
                    <span>Em chưa chọn đúng. Hãy đọc giải thích của Gia sư bên dưới rồi bấm <strong>"Câu tiếp theo →"</strong> nhé!</span>
                  </span>
                </div>
              )}

              <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20 text-xs space-y-1.5">
                <span className="font-bold text-amber-700 dark:text-amber-300 block flex items-center gap-1.5">
                  💡 Gia Sư Quang Linh Giải Thích:
                </span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {currentQ.explanation}
                </p>
              </div>

              <button
                onClick={() => handleNextQuestion()}
                className="w-full py-3.5 bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-600 hover:from-amber-600 hover:to-emerald-700 text-slate-950 font-black rounded-2xl text-xs sm:text-sm shadow-md transition-all scale-100 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <span>{currentQuestionIndex < questions.length - 1 ? 'Chuyển Sang Câu Tiếp Theo ➔' : 'Xem Bảng Điểm & Phiếu Kết Quả 🏆'}</span>
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Result & Certificate Card */
        <div className="space-y-6">
          {/* Certificate 16:9 Preview Block */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-black uppercase text-amber-600 dark:text-amber-400 flex items-center gap-1.5 tracking-wider">
                <Trophy className="w-4 h-4" /> BẰNG CHỨNG NHẬN DÀNH CHO HỌC SINH (TỈ LỆ 16:9)
              </span>
              <button
                onClick={() => setShowCertModal(true)}
                className="text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1"
              >
                <Maximize2 className="w-3.5 h-3.5" /> Xem Phóng To 16:9
              </button>
            </div>

            {/* Render 16:9 Certificate */}
            <div className="shadow-2xl rounded-2xl overflow-hidden transition-all hover:scale-[1.005]">
              <Certificate169
                studentName={config.studentName}
                studentClass={config.studentClass}
                score={score}
                totalQuestions={questions.length}
                percentage={percentage}
                totalPoints={score * 10}
                maxPoints={questions.length * 10}
                timeSpentSeconds={timeSpent}
                scopeText={scopeText}
                date={new Date().toLocaleDateString('vi-VN')}
              />
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border-2 border-amber-500/30 shadow-xl space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <button
                onClick={() => downloadCertificateImage('certificate-169-frame', config.studentName)}
                className="py-3 px-3.5 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black rounded-2xl text-xs flex items-center justify-center gap-1.5 shadow-md transition scale-100 hover:scale-102"
              >
                <Download className="w-4 h-4 text-slate-950" /> Tải Chứng Nhận (PNG 16:9)
              </button>

              <button
                onClick={() => window.print()}
                className="py-3 px-3.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 font-extrabold rounded-2xl text-xs flex items-center justify-center gap-1.5 border border-amber-500/30 transition"
              >
                <Printer className="w-4 h-4" /> In Chứng Nhận
              </button>

              <button
                onClick={() => {
                  try {
                    const data = JSON.parse(localStorage.getItem('giasu_quiz_history') || '[]');
                    exportQuizHistoryToExcel(data, `Bang_Diem_${config.studentName || 'HocSinh'}_Lop4.xlsx`);
                  } catch (e) {
                    console.error(e);
                  }
                }}
                className="py-3 px-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-2xl text-xs flex items-center justify-center gap-1.5 shadow-md transition"
              >
                <FileSpreadsheet className="w-4 h-4" /> Tải File Excel
              </button>

              <button
                onClick={handleRestartCurrent}
                className="py-3 px-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-2xl text-xs font-bold flex items-center justify-center gap-1.5 border border-slate-200 dark:border-slate-700 transition"
              >
                <RefreshCw className="w-4 h-4" /> Làm Lại Đề Này
              </button>

              <button
                onClick={handleResetSetup}
                className="py-3 px-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-xs font-bold flex items-center justify-center gap-1.5 transition"
              >
                <ArrowLeft className="w-4 h-4" /> Đề Thi Mới
              </button>
            </div>

            {/* Evaluation Comment */}
            <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20 text-xs space-y-1.5 text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              <span className="font-extrabold text-amber-600 dark:text-amber-400 block flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" /> Nhận Xét Từ Gia Sư Quang Linh:
              </span>
              <p className="text-xs sm:text-sm">{evalResult.message}</p>
            </div>
          </div>

          {/* Modal Fullscreen Certificate Preview */}
          {showCertModal && (
            <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md p-4 sm:p-8 flex flex-col items-center justify-center animate-fadeIn">
              <div className="w-full max-w-5xl space-y-4">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-2 font-black text-sm text-amber-400">
                    <Trophy className="w-5 h-5 text-amber-400" />
                    GIẤY CHỨNG NHẬN HOÀN THÀNH (TỈ LỆ chuẩn 16:9)
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => downloadCertificateImage('certificate-169-frame', config.studentName)}
                      className="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-xl text-xs flex items-center gap-1.5 shadow"
                    >
                      <Download className="w-3.5 h-3.5" /> Tải Ảnh PNG
                    </button>
                    <button
                      onClick={() => window.print()}
                      className="px-3.5 py-1.5 bg-amber-500 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 hover:bg-amber-400"
                    >
                      <Printer className="w-3.5 h-3.5" /> In Ngay
                    </button>
                    <button
                      onClick={() => setShowCertModal(false)}
                      className="p-1.5 bg-slate-800 text-slate-300 hover:text-white rounded-xl text-xs"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="w-full shadow-2xl overflow-hidden rounded-2xl">
                  <Certificate169
                    studentName={config.studentName}
                    studentClass={config.studentClass}
                    score={score}
                    totalQuestions={questions.length}
                    percentage={percentage}
                    totalPoints={score * 10}
                    maxPoints={questions.length * 10}
                    timeSpentSeconds={timeSpent}
                    scopeText={scopeText}
                    date={new Date().toLocaleDateString('vi-VN')}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Detailed Question Review */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-500" /> Xem Chi Tiết Đáp Án & Giải Thích
            </h3>

            <div className="space-y-4">
              {questions.map((q, idx) => {
                const answerRecord = userAnswers.find(a => a.questionId === q.id);
                const isCorrect = answerRecord?.isCorrect;

                return (
                  <div key={q.id} className="p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-2 text-xs">
                    <div className="flex justify-between items-start gap-2">
                      <span className="font-bold text-slate-900 dark:text-white">
                        Câu {idx + 1}: {q.question}
                      </span>
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold shrink-0 ${
                        isCorrect ? 'bg-emerald-500/15 text-emerald-600' : 'bg-rose-500/15 text-rose-600'
                      }`}>
                        {isCorrect ? 'Đúng ✓' : 'Sai ✗'}
                      </span>
                    </div>

                    <div className="space-y-1 text-slate-600 dark:text-slate-400">
                      <div>
                        Đáp án đúng: <strong className="text-emerald-600 dark:text-emerald-400">{q.options[q.correctAnswer]}</strong>
                      </div>
                      {answerRecord && !isCorrect && (
                        <div>
                          Em đã chọn: <strong className="text-rose-500">{q.options[answerRecord.selectedIdx]}</strong>
                        </div>
                      )}
                      <div className="pt-1 text-[11px] text-slate-500 italic">
                        💡 {q.explanation}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
