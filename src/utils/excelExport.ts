import * as XLSX from 'xlsx';
import { QuizResultRecord } from '../components/QuizSection';

export function getRankText(pct: number) {
  if (pct >= 90) return 'HOÀN THÀNH XUẤT SẮC';
  if (pct >= 80) return 'HOÀN THÀNH TỐT';
  if (pct >= 50) return 'HOÀN THÀNH';
  return 'CHƯA HOÀN THÀNH';
}

export function formatTimeSecs(secs: number) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}p ${s < 10 ? '0' : ''}${s}s`;
}

export function exportQuizHistoryToExcel(records: QuizResultRecord[], filename = 'Bang_Diem_LichSu_DiaLy_Lop4.xlsx') {
  if (!records || records.length === 0) {
    alert('Không có dữ liệu lịch sử bài làm để xuất file Excel!');
    return;
  }

  // Map records to formatted rows for Excel
  const excelData = records.map((rec, idx) => {
    const pts = rec.totalPoints ?? (rec.score * 10);
    const maxPts = rec.maxPoints ?? (rec.totalQuestions * 10);
    const rank = getRankText(rec.percentage);

    return {
      'STT': idx + 1,
      'Họ Và Tên Học Sinh': rec.studentName || 'Học sinh',
      'Lớp': rec.studentClass || '4A',
      'Điểm Số Tích Lũy': `${pts} / ${maxPts} điểm`,
      'Số Câu Đúng': `${rec.score} / ${rec.totalQuestions} câu`,
      'Tỷ Lệ Chính Xác (%)': `${rec.percentage}%`,
      'Kết Quả Xếp Loại': rank,
      'Phạm Vi Bài Ôn Tập': rec.scopeText,
      'Mức Độ Câu Hỏi': rec.difficulty,
      'Thời Gian Làm Bài': formatTimeSecs(rec.timeSpentSeconds),
      'Ngày Giờ Nộp Bài': rec.date,
    };
  });

  // Create worksheet and workbook
  const worksheet = XLSX.utils.json_to_sheet(excelData);

  // Set column widths for beautiful layout in Excel
  const colWidths = [
    { wch: 6 },  // STT
    { wch: 24 }, // Họ tên
    { wch: 10 }, // Lớp
    { wch: 20 }, // Điểm số
    { wch: 16 }, // Số câu đúng
    { wch: 20 }, // Tỷ lệ %
    { wch: 24 }, // Xếp loại
    { wch: 35 }, // Phạm vi
    { wch: 16 }, // Mức độ
    { wch: 18 }, // Thời gian
    { wch: 22 }, // Ngày nộp
  ];
  worksheet['!cols'] = colWidths;

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Lịch Sử Làm Bài');

  // Trigger Excel file download
  XLSX.writeFile(workbook, filename);
}
