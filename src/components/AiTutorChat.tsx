import React, { useState } from 'react';
import { Send, Bot, User, Sparkles, Loader2, BookOpen } from 'lucide-react';

interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
  source?: string;
}

export const AiTutorChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'ai',
      text: 'Xin chào! Tôi là Trợ lý AI học tập Lịch sử và Địa lí Lớp 4 (Bộ sách Kết nối tri thức với cuộc sống).\n\nBạn có thể hỏi tôi bất kỳ câu hỏi nào về nội dung 29 bài học, các nhân vật lịch sử (Lý Thái Tổ, Bác Hồ, Anh hùng Núp...), địa danh (Đền Hùng, Cố đô Huế, Phố cổ Hội An, Địa đạo Củ Chi...) hoặc đặc điểm các vùng miền!',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sampleQuestions = [
    'Tại sao Lý Thái Tổ lại quyết định dời đô về Thăng Long năm 1010?',
    'Nêu những đặc điểm nổi bật về thiên nhiên vùng Tây Nguyên?',
    'Địa đạo Củ Chi có cấu trúc và ý nghĩa lịch sử như thế nào?',
    'Giải thích ý nghĩa ngày Giỗ Tổ Hùng Vương 10 tháng 3 âm lịch?',
  ];

  const handleSend = async (textToSend?: string) => {
    const questionText = textToSend || input;
    if (!questionText.trim() || isLoading) return;

    const newMessages: ChatMessage[] = [...messages, { sender: 'user', text: questionText }];
    setMessages(newMessages);
    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ask-gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: questionText }),
      });

      const data = await response.json();

      if (data.answer) {
        setMessages([...newMessages, { sender: 'ai', text: data.answer, source: data.source }]);
      } else {
        setMessages([
          ...newMessages,
          { sender: 'ai', text: 'Xin lỗi, không nhận được câu trả lời. Vui lòng thử lại câu hỏi khác.' },
        ]);
      }
    } catch (err) {
      setMessages([
        ...newMessages,
        { sender: 'ai', text: 'Có lỗi kết nối mạng. Vui lòng kiểm tra lại đường truyền.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4 animate-fadeIn">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
              <span>Trợ Lý Hỏi Đáp AI Lịch Sử & Địa Lý 4</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 text-[10px] font-bold border border-amber-500/20">
                Gemini AI
              </span>
            </h2>
            <p className="text-xs text-slate-500">
              Giải đáp thắc mắc bài học, chuẩn kiến thức SGK Kết nối tri thức với cuộc sống
            </p>
          </div>
        </div>
      </div>

      {/* Suggested Questions */}
      <div className="space-y-1.5">
        <span className="text-[11px] font-semibold text-slate-400 block px-1">Gợi ý câu hỏi phổ biến:</span>
        <div className="flex overflow-x-auto gap-2 py-1 scrollbar-none">
          {sampleQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="px-3 py-1.5 bg-white dark:bg-slate-900 hover:bg-amber-500/10 border border-slate-200 dark:border-slate-800 hover:border-amber-500/30 rounded-xl text-xs text-slate-700 dark:text-slate-300 whitespace-nowrap transition"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm min-h-[380px] max-h-[500px] overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div
              className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 ${
                msg.sender === 'user'
                  ? 'bg-amber-500 text-white'
                  : 'bg-slate-900 dark:bg-slate-800 text-amber-400 border border-slate-700'
              }`}
            >
              {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            <div
              className={`max-w-[80%] p-4 rounded-2xl text-xs leading-relaxed space-y-2 ${
                msg.sender === 'user'
                  ? 'bg-amber-500 text-white rounded-tr-none font-medium'
                  : 'bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-700 rounded-tl-none whitespace-pre-wrap'
              }`}
            >
              <p>{msg.text}</p>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-2 text-xs text-slate-400 p-2">
            <Loader2 className="w-4 h-4 animate-spin text-amber-500" />
            <span>Trợ lý AI đang tìm kiếm câu trả lời...</span>
          </div>
        )}
      </div>

      {/* Input Box */}
      <div className="flex items-center gap-2 bg-white dark:bg-slate-900 rounded-2xl p-2 border border-slate-200 dark:border-slate-800 shadow-sm">
        <input
          type="text"
          placeholder="Nhập câu hỏi về bài học Lịch sử - Địa lý 4 tại đây..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 bg-transparent px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none"
        />
        <button
          onClick={() => handleSend()}
          disabled={isLoading || !input.trim()}
          className="p-2.5 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white rounded-xl transition"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
