import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API endpoint for AI Tutor / Analysis Assistant
  app.post('/api/ask-gemini', async (req, res) => {
    try {
      const { question, context } = req.body;

      if (!question) {
        return res.status(400).json({ error: 'Question is required' });
      }

      const apiKey = process.env.GEMINI_API_KEY;

      if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
        const ai = new GoogleGenAI({ apiKey });
        const prompt = `Bạn là "Gia Sư Lịch Sử và Địa Lý Lớp 4" (Tác giả: Quang Linh), hỗ trợ học sinh học tập bộ sách "Kết nối tri thức với cuộc sống".
Nhiệm vụ: Trả lời câu hỏi cho học sinh lớp 4 xưng "thầy Quang Linh" hoặc "Gia sư AI", gọi học sinh là "em". Trả lời ngắn gọn, thân thiện, cổ vũ tinh thần học tập, chuẩn kiến thức SGK Lịch sử & Địa lí 4.

Thông tin bối cảnh liên quan (nếu có): ${context || 'Tài liệu SGK Lịch sử và Địa lí 4'}

Câu hỏi: ${question}`;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
        });

        const reply = response.text || 'Không nhận được phản hồi từ AI.';
        return res.json({ answer: reply, source: 'gemini-ai' });
      } else {
        // Fallback intelligent answer when API key is not configured in local environment
        return res.json({
          answer: `[Trợ lý Kiến thức SGK] Về câu hỏi "${question}":
Theo chương trình SGK Lịch sử và Địa lí 4 (Kết nối tri thức với cuộc sống), đây là nội dung quan trọng giúp học sinh khám phá tình yêu quê hương, đất nước qua 6 chủ đề lớn: Địa phương em, Trung du & miền núi Bắc Bộ, Đồng bằng Bắc Bộ, Duyên hải miền Trung, Tây Nguyên và Nam Bộ.

(Mẹo: Bạn có thể nhập GEMINI_API_KEY trong cấu hình Secret để trải nghiệm Trợ lý Gemini AI trực tiếp sinh động hơn!)`,
          source: 'embedded-knowledge'
        });
      }
    } catch (err: any) {
      console.error('Error calling Gemini API:', err);
      return res.status(500).json({
        error: 'Có lỗi xảy ra khi xử lý yêu cầu AI',
        message: err.message || 'Lỗi server'
      });
    }
  });

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
