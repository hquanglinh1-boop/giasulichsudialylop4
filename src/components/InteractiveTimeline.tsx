import React from 'react';
import { Clock, Landmark, Flag, Flame, ArrowRight } from 'lucide-react';

export interface TimelineEvent {
  year: string;
  title: string;
  location: string;
  description: string;
  lessonNumber: string;
  category: 'Dựng nước' | 'Phong kiến' | 'Chống Pháp' | 'Hiện đại';
}

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "Thời cổ đại",
    title: "Nhà nước Văn Lang - Âu Lạc & Văn minh sông Hồng",
    location: "Bắc Bộ (Đồng bằng sông Hồng, Cổ Loa)",
    description: "Sự ra đời của Nhà nước Văn Lang, Âu Lạc, đúc trống đồng Đông Sơn (trống Ngọc Lũ) và xây dựng thành Cổ Loa.",
    lessonNumber: "Bài 11",
    category: "Dựng nước"
  },
  {
    year: "Năm 1010",
    title: "Vua Lý Thái Tổ dời đô về Thăng Long",
    location: "Thăng Long (Hà Nội)",
    description: "Lý Thái Tổ ban Chiếu dời đô từ Hoa Lư về Đại La và đổi tên thành Thăng Long, mở đầu cho kỷ nguyên ngàn năm văn hiến.",
    lessonNumber: "Bài 12",
    category: "Phong kiến"
  },
  {
    year: "Năm 1070 - 1076",
    title: "Xây dựng Văn Miếu - Quốc Tử Giám",
    location: "Thăng Long (Hà Nội)",
    description: "Khởi công Văn Miếu (1070) và thành lập Quốc Tử Giám (1076) - trường đại học đầu tiên của Việt Nam.",
    lessonNumber: "Bài 13",
    category: "Phong kiến"
  },
  {
    year: "Năm 1428",
    title: "Khởi nghĩa Lam Sơn thắng lợi & Sự tích Hồ Gươm",
    location: "Thăng Long - Hà Nội",
    description: "Lê Lợi đại phá quân Minh lên ngôi vua. Sự tích trả gươm thần cho Rùa vàng gắn liền với tên gọi Hồ Hoàn Kiếm.",
    lessonNumber: "Bài 12",
    category: "Phong kiến"
  },
  {
    year: "Năm 1862",
    title: "Khởi nghĩa Trương Định tại Nam Bộ",
    location: "Gia Định, Bến Tre, An Giang",
    description: "Trương Định khước từ lệnh triều đình, ở lại cùng nhân dân Nam Bộ chống thực dân Pháp với danh hiệu 'Bình Tây Đại Nguyên soái'.",
    lessonNumber: "Bài 26",
    category: "Chống Pháp"
  },
  {
    year: "Năm 1882",
    title: "Tổng đốc Hoàng Diệu hy sinh bảo vệ Hà Nội",
    location: "Thành Hà Nội",
    description: "Thực dân Pháp tiến đánh Bắc Kỳ lần thứ 2. Tổng đốc Hoàng Diệu kiên cường chỉ huy chiến đấu và hy sinh bảo vệ khí tiết.",
    lessonNumber: "Bài 12",
    category: "Chống Pháp"
  },
  {
    year: "Năm 1885",
    title: "Cuộc phản công ở Kinh thành Huế & Ban chiếu Cần Vương",
    location: "Kinh thành Huế, Quảng Trị",
    description: "Tôn Thất Thuyết và Vua Hàm Nghi tổ chức phản công quân Pháp tại Huế, phát động phong trào Cần Vương yêu nước.",
    lessonNumber: "Bài 18",
    category: "Chống Pháp"
  },
  {
    year: "Năm 1911 (5/6)",
    title: "Bác Hồ ra đi tìm đường cứu nước",
    location: "Bến Nhà Rồng (Sài Gòn - TP.HCM)",
    description: "Người thanh niên Nguyễn Tất Thành lấy tên Văn Ba xuống tàu La-tu-sơ Tơ-rê-vin rời Bến Nhà Rồng ra đi tìm đường cứu nước.",
    lessonNumber: "Bài 27",
    category: "Chống Pháp"
  },
  {
    year: "Năm 1945 (2/9)",
    title: "Bác Hồ đọc Tuyên ngôn Độc lập",
    location: "Quảng trường Ba Đình (Hà Nội)",
    description: "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hoà.",
    lessonNumber: "Bài 12",
    category: "Hiện đại"
  },
  {
    year: "Năm 1960",
    title: "Phong trào Đồng Khởi Bến Tre",
    location: "Bến Tre, Nam Bộ",
    description: "Nữ tướng Nguyễn Thị Định lãnh đạo nhân dân Bến Tre nổi dậy 'Đồng Khởi', làm tan rã bộ máy chính quyền địch ở nông thôn.",
    lessonNumber: "Bài 26",
    category: "Hiện đại"
  },
  {
    year: "Năm 1972 (12/1972)",
    title: "Chiến thắng Điện Biên Phủ trên không",
    location: "Hà Nội",
    description: "Quân và dân Hà Nội đập tan cuộc tập kích chiến lược bằng máy bay B-52 của đế quốc Mỹ trong 12 ngày đêm lịch sử.",
    lessonNumber: "Bài 12",
    category: "Hiện đại"
  },
  {
    year: "Năm 1975 (30/4)",
    title: "Giải phóng hoàn toàn miền Nam, thống nhất đất nước",
    location: "Dinh Độc Lập (Sài Gòn - TP.HCM)",
    description: "Xe tăng 390 và 843 húc đổ cổng Dinh Độc Lập lúc 11h30 ngày 30/4/1975, kết thúc thắng lợi Chiến dịch Hồ Chí Minh.",
    lessonNumber: "Bài 27",
    category: "Hiện đại"
  }
];

export const InteractiveTimeline: React.FC = () => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
        <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-lg">
          <Clock className="w-5 h-5" />
          <h2>Trục Thời Gian Lịch Sử Việt Nam Trong SGK Lớp 4</h2>
        </div>
        <p className="text-xs text-slate-500 leading-relaxed">
          Theo dõi các mốc sự kiện lịch sử cốt lõi theo dòng thời gian được biên soạn trong chương trình SGK Lịch sử và Địa lí 4.
        </p>
      </div>

      <div className="relative border-l-2 border-amber-500/30 ml-4 sm:ml-8 pl-6 space-y-8 my-4">
        {TIMELINE_EVENTS.map((evt, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-white dark:border-slate-900 group-hover:scale-125 transition-transform" />

            {/* Event Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-amber-500/40 transition space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-extrabold text-xs rounded-lg border border-amber-500/20">
                  {evt.year}
                </span>
                <span className="text-[11px] font-medium text-slate-400">
                  Bài học: {evt.lessonNumber}
                </span>
              </div>

              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                {evt.title}
              </h3>

              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Landmark className="w-3.5 h-3.5 text-amber-500" />
                <span>Địa điểm: {evt.location}</span>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                {evt.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
