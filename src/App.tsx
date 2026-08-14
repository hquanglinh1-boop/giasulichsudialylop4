import React, { useState } from 'react';
import { Navbar, TabType } from './components/Navbar';
import { QuizSetup, QuizConfig } from './components/QuizSetup';
import { QuizSection } from './components/QuizSection';
import { QuizHistory } from './components/QuizHistory';
import { ThemeExplorer } from './components/ThemeExplorer';
import { HistoricalFiguresList } from './components/HistoricalFiguresList';
import { InteractiveTimeline } from './components/InteractiveTimeline';
import { GlossaryDictionary } from './components/GlossaryDictionary';
import { AiTutorChat } from './components/AiTutorChat';
import { OverviewDashboard } from './components/OverviewDashboard';
import { GameBackground } from './components/GameBackground';
import { GraduationCap, Heart, Award, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('quiz');
  const [quizConfig, setQuizConfig] = useState<QuizConfig | null>(null);

  const handleStartQuiz = (config: QuizConfig) => {
    setQuizConfig(config);
  };

  const handleResetQuizSetup = () => {
    setQuizConfig(null);
  };

  return (
    <GameBackground>
      <div className="flex-1 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors">
        {/* Top Navbar */}
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content Area */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {activeTab === 'quiz' && (
            <>
              {!quizConfig ? (
                <QuizSetup onStartQuiz={handleStartQuiz} />
              ) : (
                <QuizSection config={quizConfig} onResetSetup={handleResetQuizSetup} />
              )}
            </>
          )}

          {activeTab === 'history' && <QuizHistory />}

          {activeTab === 'themes' && (
            <ThemeExplorer
              onSelectLessonQuiz={(lessonId) => {
                setQuizConfig({
                  studentName: quizConfig?.studentName || 'Học sinh Lớp 4',
                  studentClass: quizConfig?.studentClass || 'Lớp 4',
                  questionCount: 10,
                  difficulty: 'all',
                  scopeType: 'lesson',
                  selectedThemeId: '',
                  selectedLessonId: lessonId,
                });
                setActiveTab('quiz');
              }}
            />
          )}

          {activeTab === 'figures' && <HistoricalFiguresList />}

          {activeTab === 'timeline' && <InteractiveTimeline />}

          {activeTab === 'glossary' && <GlossaryDictionary />}

          {activeTab === 'ai-chat' && <AiTutorChat />}

          {activeTab === 'overview' && (
            <OverviewDashboard
              onNavigate={(tab) => {
                if (tab === 'quiz') setQuizConfig(null);
                setActiveTab(tab as TabType);
              }}
            />
          )}
        </main>

        {/* Footer */}
        <footer className="bg-slate-900/90 backdrop-blur text-slate-400 border-t border-slate-800 py-6 px-4 text-center text-xs space-y-2 mt-12">
          <div className="flex flex-wrap items-center justify-center gap-2 font-bold text-amber-300">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>GIA SƯ LỊCH SỬ ĐỊA LÝ LỚP 4</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <Award className="w-3.5 h-3.5" /> TÁC GIẢ: QUANG LINH
            </span>
          </div>
          <p className="text-slate-500">
            Chương trình Ôn tập & Kiểm tra trắc nghiệm Lịch sử và Địa lí 4 (Kết nối tri thức với cuộc sống - NXB Giáo dục Việt Nam)
          </p>
        </footer>
      </div>
    </GameBackground>
  );
}
