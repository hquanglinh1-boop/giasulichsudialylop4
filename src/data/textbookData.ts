export interface Lesson {
  id: number;
  number: string;
  title: string;
  themeId: string;
  page: number;
  summary: string;
  keyPoints: string[];
  keywords: string[];
  historicalFigures?: string[];
  heritageSites?: string[];
  geographyFeatures?: string[];
}

export interface Theme {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
  lessonRange: string;
  lessonsCount: number;
  region: string;
}

export interface GlossaryTerm {
  term: string;
  page: number;
  definition: string;
  category: 'Địa lí' | 'Lịch sử' | 'Văn hoá' | 'Tự nhiên';
}

export interface QuizQuestion {
  id: number;
  lessonId: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface HistoricalFigure {
  name: string;
  period: string;
  role: string;
  summary: string;
  lessonId: number;
}

export const BOOK_INFO = {
  title: "Lịch sử và Địa lí 4",
  series: "Kết nối tri thức với cuộc sống",
  publisher: "Nhà xuất bản Giáo dục Việt Nam",
  authorsHistory: "Vũ Minh Giang, Nghiêm Đình Vỳ, Nguyễn Thị Thu Thuỷ, Đào Thị Hồng, Lê Thị Thu Hương",
  authorsGeo: "Đào Ngọc Hưng, Trần Thị Hà Giang, Đặng Tiến Dũng, Đoàn Thị Thanh Phương",
  totalLessons: 29,
  totalThemes: 6,
  targetGrade: "Lớp 4 (Chương trình GDPT 2018)"
};

export const THEMES: Theme[] = [
  {
    id: "mo-dau",
    name: "Mở đầu",
    description: "Làm quen với phương tiện học tập môn Lịch sử và Địa lí",
    color: "from-blue-500 to-cyan-600",
    icon: "Compass",
    lessonRange: "Bài 1",
    lessonsCount: 1,
    region: "Toàn quốc"
  },
  {
    id: "dia-phuong-em",
    name: "Chủ đề 1: Địa phương em",
    description: "Tỉnh, Thành phố trực thuộc Trung ương nơi em sinh sống",
    color: "from-teal-500 to-emerald-600",
    icon: "MapPin",
    lessonRange: "Bài 2 - Bài 3",
    lessonsCount: 2,
    region: "Địa phương"
  },
  {
    id: "trung-du-mien-nui-bac-bo",
    name: "Chủ đề 2: Trung du và miền núi Bắc Bộ",
    description: "Khám phá địa hình núi cao, di sản Đền Hùng và văn hoá xòe Thái, hát Then",
    color: "from-amber-500 to-orange-600",
    icon: "Mountain",
    lessonRange: "Bài 4 - Bài 7",
    lessonsCount: 4,
    region: "Bắc Bộ"
  },
  {
    id: "dong-bang-bac-bo",
    name: "Chủ đề 3: Đồng bằng Bắc Bộ",
    description: "Vựa lúa sông Hồng, văn minh lúa nước, Thăng Long - Hà Nội và Văn Miếu",
    color: "from-emerald-500 to-green-700",
    icon: "Wheat",
    lessonRange: "Bài 8 - Bài 14",
    lessonsCount: 7,
    region: "Bắc Bộ"
  },
  {
    id: "duyen-hai-mien-trung",
    name: "Chủ đề 4: Duyên hải miền Trung",
    description: "Dải đất biển đảo, cố đô Huế, phố cổ Hội An và di sản Hoàng Sa - Trường Sa",
    color: "from-sky-500 to-blue-700",
    icon: "Waves",
    lessonRange: "Bài 15 - Bài 19",
    lessonsCount: 5,
    region: "Miền Trung"
  },
  {
    id: "tay-nguyen",
    name: "Chủ đề 5: Tây Nguyên",
    description: "Vùng đất cao nguyên đỏ ba-dan, không gian văn hoá Cồng chiêng và anh hùng Núp",
    color: "from-red-500 to-amber-700",
    icon: "Trees",
    lessonRange: "Bài 20 - Bài 23",
    lessonsCount: 4,
    region: "Tây Nguyên"
  },
  {
    id: "nam-bo",
    name: "Chủ đề 6: Nam Bộ",
    description: "Đồng bằng sông Cửu Long, Thành phố Hồ Chí Minh và Địa đạo Củ Chi",
    color: "from-indigo-500 to-violet-700",
    icon: "Building2",
    lessonRange: "Bài 24 - Bài 29",
    lessonsCount: 6,
    region: "Nam Bộ"
  }
];

export const LESSONS: Lesson[] = [
  {
    id: 1,
    number: "Bài 1",
    title: "Làm quen với phương tiện học tập môn Lịch sử và Địa lí",
    themeId: "mo-dau",
    page: 6,
    summary: "Giới thiệu các phương tiện hỗ trợ học tập môn Lịch sử và Địa lí bao gồm bản đồ, lược đồ, bảng số liệu, biểu đồ, trục thời gian, hiện vật và tranh ảnh.",
    keyPoints: [
      "Bản đồ là hình vẽ thu nhỏ một khu vực hay toàn bộ bề mặt Trái Đất theo tỉ lệ.",
      "Lược đồ thu nhỏ một khu vực theo tỉ lệ nhất định, nội dung giản lược hơn bản đồ.",
      "Bảng số liệu và biểu đồ thể hiện trực quan các dữ liệu địa lí, lịch sử.",
      "Trục thời gian thể hiện chuỗi sự kiện lịch sử theo thứ tự thời gian.",
      "Hiện vật và tranh ảnh lịch sử, địa lí cung cấp tư liệu trực quan sinh động."
    ],
    keywords: ["Bản đồ", "Lược đồ", "Trục thời gian", "Biểu đồ", "Hiện vật"],
    geographyFeatures: ["Ký hiệu bản đồ", "Chú giải", "Tỉ lệ bản đồ"]
  },
  {
    id: 2,
    number: "Bài 2",
    title: "Thiên nhiên và con người địa phương em",
    themeId: "dia-phuong-em",
    page: 12,
    summary: "Tìm hiểu về vị trí địa lí, đặc điểm tự nhiên (địa hình, khí hậu, sông hồ), kinh tế và ý thức bảo vệ môi trường nơi sinh sống.",
    keyPoints: [
      "Xác định vị trí tỉnh/thành phố trên bản đồ hành chính Việt Nam.",
      "Đặc điểm tự nhiên gồm địa hình, khí hậu, sông ngòi tại địa phương.",
      "Các hoạt động kinh tế chính: nông nghiệp, công nghiệp, dịch vụ và du lịch.",
      "Trách nhiệm bảo vệ môi trường đất, nước, không khí nơi mình sống."
    ],
    keywords: ["Địa phương", "Vị trí địa lí", "Khí hậu", "Hoạt động kinh tế", "Bảo vệ môi trường"]
  },
  {
    id: 3,
    number: "Bài 3",
    title: "Lịch sử và văn hoá truyền thống địa phương em",
    themeId: "dia-phuong-em",
    page: 16,
    summary: "Khám phá nét văn hoá đặc trưng, món ăn truyền thống, lễ hội, trang phục và câu chuyện về các danh nhân lịch sử địa phương.",
    keyPoints: [
      "Mô tả các phong tục, tập quán, nhà ở, lễ hội và món ăn địa phương.",
      "Giới thiệu danh nhân lịch sử có đóng góp cho quê hương.",
      "Lập bảng thống kê văn hoá truyền thống và kế hoạch tham quan di tích."
    ],
    keywords: ["Văn hoá truyền thống", "Danh nhân", "Lễ hội", "Phong tục", "Di tích"]
  },
  {
    id: 4,
    number: "Bài 4",
    title: "Thiên nhiên vùng Trung du và miền núi Bắc Bộ",
    themeId: "trung-du-mien-nui-bac-bo",
    page: 18,
    summary: "Vùng đất phía bắc với địa hình đồi núi cao đồ sộ, khí hậu có mùa đông lạnh nhất cả nước, giàu tiềm năng thuỷ điện và khoáng sản.",
    keyPoints: [
      "Đỉnh Phan-xi-păng (3 143m) thuộc dãy Hoàng Liên Sơn là đỉnh núi cao nhất Việt Nam.",
      "Địa hình đồi núi chiếm diện tích lớn, nhiều cao nguyên (Mộc Châu, Sơn La).",
      "Khí hậu nhiệt đới ẩm gió mùa có mùa đông lạnh, có nơi tuyết rơi (Sa Pa, Mẫu Sơn).",
      "Sông lớn: sông Hồng, sông Đà, sông Chảy, sông Gâm có tiềm năng thuỷ điện lớn.",
      "Khoáng sản phong phú: than, sắt, a-pa-tít, đá vôi."
    ],
    keywords: ["Phan-xi-păng", "Hoàng Liên Sơn", "Mùa đông lạnh", "Sông Đà", "Thuỷ điện", "A-pa-tít"],
    geographyFeatures: ["Dãy Hoàng Liên Sơn", "Sông Hồng", "Sông Đà", "Tuyết rơi Sa Pa"]
  },
  {
    id: 5,
    number: "Bài 5",
    title: "Dân cư và hoạt động sản xuất ở vùng Trung du và miền núi Bắc Bộ",
    themeId: "trung-du-mien-nui-bac-bo",
    page: 24,
    summary: "Nơi sinh sống của nhiều dân tộc (Mường, Thái, Dao, Mông, Tày, Nùng) với hình thức canh tác ruộng bậc thang độc đáo và các công trình thuỷ điện lớn.",
    keyPoints: [
      "Dân số hơn 14 triệu người (2020), mật độ dân cư thưa thớt.",
      "Đa dạng dân tộc: Mường, Thái, Dao, Mông, Tày, Nùng, Kinh...",
      "Ruộng bậc thang (Mù Căng Chải, Sa Pa, Hoàng Su Phì) giúp trồng lúa trên đất dốc và hạn chế sạt lở.",
      "Các nhà máy thuỷ điện lớn: Thác Bà (sông Chảy), Sơn La, Hoà Bình (sông Đà).",
      "Khai thác khoáng sản: than ở Quảng Ninh, a-pa-tít ở Lào Cai."
    ],
    keywords: ["Dân tộc thiểu số", "Ruộng bậc thang", "Mù Căng Chải", "Thuỷ điện Sơn La", "Khai khoáng"],
    heritageSites: ["Danh thắng Ruộng bậc thang Mù Căng Chải", "Thuỷ điện Sơn La"]
  },
  {
    id: 6,
    number: "Bài 6",
    title: "Một số nét văn hoá ở vùng Trung du và miền núi Bắc Bộ",
    themeId: "trung-du-mien-nui-bac-bo",
    page: 28,
    summary: "Văn hoá sắc màu với lễ hội Gầu tào, Lồng tồng, nghệ thuật Hát Then, múa Xoè Thái (UNESCO ghi danh) và sinh hoạt chợ phiên.",
    keyPoints: [
      "Lễ hội Gầu tào (người Mông), Lễ hội Lồng tồng (người Tày, Nùng).",
      "Hát Then của người Tày, Nùng, Thái được UNESCO ghi danh là Di sản văn hoá phi vật thể.",
      "Múa Xoè Thái biểu tượng cho sự đoàn kết, niềm tự hào dân tộc Thái.",
      "Chợ phiên vùng cao (Sa Pa, Bắc Hà, San Thàng) là nơi mua bán và giao lưu văn hoá."
    ],
    keywords: ["Lễ hội Gầu tào", "Lồng tồng", "Hát Then", "Múa Xoè Thái", "Chợ phiên Bắc Hà"],
    heritageSites: ["Nghệ thuật Xoè Thái (UNESCO)", "Thực hành Then (UNESCO)"]
  },
  {
    id: 7,
    number: "Bài 7",
    title: "Đền Hùng và Lễ Giỗ Tổ Hùng Vương",
    themeId: "trung-du-mien-nui-bac-bo",
    page: 32,
    summary: "Tôn vinh cội nguồn dân tộc Việt Nam tại Khu di tích Đền Hùng (Phú Thọ) và ngày Quốc lễ Giỗ Tổ Hùng Vương (10/3 âm lịch).",
    keyPoints: [
      "Khu di tích Đền Hùng thuộc TP. Việt Trì, tỉnh Phú Thọ.",
      "Gồm các công trình: Đền Hạ, Đền Trung, Đền Thượng, Lăng Vua Hùng, đền Quốc Tổ Lạc Long Quân...",
      "Giỗ Tổ Hùng Vương diễn ra vào ngày mồng 10 tháng 3 âm lịch hằng năm.",
      "Truyền thuyết Con Rồng cháu Tiên, Bánh chưng bánh giầy thể hiện đạo lý 'Uống nước nhớ nguồn'."
    ],
    keywords: ["Đền Hùng", "Giỗ Tổ Hùng Vương", "Việt Trì", "10 tháng 3 âm lịch", "Con Rồng cháu Tiên"],
    historicalFigures: ["Vua Hùng", "Lạc Long Quân", "Âu Cơ", "Lang Liêu"],
    heritageSites: ["Tín ngưỡng thờ cúng Hùng Vương (UNESCO)", "Khu di tích Đền Hùng"]
  },
  {
    id: 8,
    number: "Bài 8",
    title: "Thiên nhiên vùng Đồng bằng Bắc Bộ",
    themeId: "dong-bang-bac-bo",
    page: 36,
    summary: "Đồng bằng bồi đắp bởi phù sa sông Hồng và sông Thái Bình, địa hình bằng phẳng, khí hậu nhiệt đới ẩm có mùa đông lạnh.",
    keyPoints: [
      "Được bồi đắp bởi hệ thống sông Hồng và sông Thái Bình, dạng hình tam giác mở rộng về phía biển.",
      "Địa hình tương đối bằng phẳng, độ cao trung bình dưới 25m.",
      "Khí hậu nhiệt đới ẩm gió mùa, mùa đông lạnh ít mưa, mùa hạ nóng mưa nhiều.",
      "Sông ngòi dày đặc: sông Hồng, sông Thái Bình, sông Đáy, sông Đuống..."
    ],
    keywords: ["Sông Hồng", "Sông Thái Bình", "Phù sa", "Tam giác đồng bằng", "Mùa đông lạnh"]
  },
  {
    id: 9,
    number: "Bài 9",
    title: "Dân cư và hoạt động sản xuất ở vùng Đồng bằng Bắc Bộ",
    themeId: "dong-bang-bac-bo",
    page: 41,
    summary: "Vùng đông dân nhất cả nước, trung tâm trồng lúa nước truyền thống, nhiều làng nghề thủ công lâu đời và hệ thống đê sông Hồng kiên cố.",
    keyPoints: [
      "Dân số hơn 21 triệu người (2020), mật độ dân số cao nhất cả nước (chủ yếu người Kinh).",
      "Vựa lúa lớn thứ hai cả nước với quy trình canh tác truyền thống: làm đất, cấy, chăm sóc, thu hoạch.",
      "Làng nghề thủ công nổi tiếng: gốm Bát Tràng (Hà Nội), đúc đồng Đại Bái (Bắc Ninh), thêu Văn Lâm (Ninh Bình), chạm bạc Đồng Xâm (Thái Bình).",
      "Hệ thống đê sông Hồng kiên cố đắp từ lâu đời để ngăn lũ lụt."
    ],
    keywords: ["Trồng lúa nước", "Làng nghề thủ công", "Gốm Bát Tràng", "Hệ thống đê sông Hồng", "Đông dân nhất"],
    heritageSites: ["Làng gốm Bát Tràng", "Hệ thống đê sông Hồng"]
  },
  {
    id: 10,
    number: "Bài 10",
    title: "Một số nét văn hoá ở vùng Đồng bằng Bắc Bộ",
    themeId: "dong-bang-bac-bo",
    page: 46,
    summary: "Không gian làng quê truyền thống với cổng làng, cây đa, giếng nước, đình làng cùng các lễ hội xóm làng mùa xuân.",
    keyPoints: [
      "Kiến trúc làng quê: Cổng làng, cây đa, giếng nước, đình làng (thờ Thành hoàng).",
      "Nhà ở truyền thống bằng gạch/đất, mái lợp lá/ngói, có 3 gian; nhà hiện đại kiên cố hơn.",
      "Lễ hội truyền thống: Hội Lim (Bắc Ninh), hội chùa Hương (Hà Nội), hội Gióng, hội Phủ Giầy.",
      "Trò chơi dân gian: đánh đu, đấu vật, kéo co, cờ người, hát Quan họ."
    ],
    keywords: ["Cổng làng", "Đình làng", "Thành hoàng", "Hội Lim", "Dân ca Quan họ"],
    heritageSites: ["Dân ca Quan họ Bắc Ninh (UNESCO)", "Hội Gióng (UNESCO)"]
  },
  {
    id: 11,
    number: "Bài 11",
    title: "Sông Hồng và văn minh sông Hồng",
    themeId: "dong-bang-bac-bo",
    page: 50,
    summary: "Dòng sông mẹ sản sinh nền văn minh sông Hồng lừng lẫy với Nhà nước Văn Lang, Âu Lạc và kiệt tác Trống đồng Đông Sơn.",
    keyPoints: [
      "Sông Hồng chảy qua Việt Nam dài 556 km, các tên gọi: Nhị Hà, Hồng Hà, sông Cái...",
      "Thành tựu văn minh: Sự ra đời Nhà nước Văn Lang, Âu Lạc, thành Cổ Loa, trống đồng Đông Sơn (trống Ngọc Lũ).",
      "Đời sống người Việt cổ: Ở nhà sàn mái cong, đi lại bằng thuyền, ăn gạo nếp/tẻ, trồng dâu nuôi tằm, nhuộm răng đen, ăn trầu, thờ cúng tổ tiên."
    ],
    keywords: ["Văn minh sông Hồng", "Nhà nước Văn Lang", "Âu Lạc", "Trống đồng Đông Sơn", "Trống Ngọc Lũ"],
    historicalFigures: ["Hùng Vương", "An Dương Vương"],
    heritageSites: ["Trống đồng Ngọc Lũ", "Khu di tích Cổ Loa"]
  },
  {
    id: 12,
    number: "Bài 12",
    title: "Thăng Long - Hà Nội",
    themeId: "dong-bang-bac-bo",
    page: 54,
    summary: "Thủ đô ngàn năm văn hiến từ mốc Chiếu dời đô của Lý Thái Tổ (1010) đến những mốc lịch sử chống ngoại xâm oai hùng.",
    keyPoints: [
      "Năm 1010, vua Lý Thái Tổ dời đô từ Hoa Lư về Đại La và đổi tên thành Thăng Long.",
      "Các tên gọi lịch sử: Đại La, Thăng Long, Đông Quan, Đông Đô, Đông Kinh, Hà Nội (từ 1831).",
      "Sự tích Hồ Gươm (Hồ Hoàn Kiếm) gắn với Lê Lợi trả gươm thần cho Rùa vàng.",
      "Sự kiện lịch sử tiêu biểu: Tổng đốc Hoàng Diệu hy sinh bảo vệ thành (1882), Bác Hồ đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình (2/9/1945), Chiến thắng Điện Biên Phủ trên không (12/1972).",
      "Thủ đô Hà Nội ngày nay là trung tâm chính trị, kinh tế, văn hoá, giáo dục lớn của cả nước."
    ],
    keywords: ["Thăng Long", "Lý Thái Tổ", "Chiếu dời đô", "Sự tích Hồ Gươm", "Quảng trường Ba Đình", "1010"],
    historicalFigures: ["Lý Thái Tổ", "Lê Lợi", "Hoàng Diệu", "Hồ Chí Minh"],
    heritageSites: ["Hoàng thành Thăng Long (UNESCO)", "Hồ Hoàn Kiếm", "Quảng trường Ba Đình"]
  },
  {
    id: 13,
    number: "Bài 13",
    title: "Văn Miếu - Quốc Tử Giám",
    themeId: "dong-bang-bac-bo",
    page: 59,
    summary: "Trường đại học đầu tiên của Việt Nam, nơi tôn vinh truyền thống hiếu học và lưu giữ 82 tấm bia Tiến sĩ (Di sản tư liệu UNESCO).",
    keyPoints: [
      "Xây dựng từ thời nhà Lý (Văn Miếu năm 1070, Quốc Tử Giám năm 1076).",
      "Công trình tiêu biểu: Cổng Văn Miếu, Khuê Văn Các (biểu tượng Hà Nội), nhà bia Tiến sĩ, khu Đại Thành, khu Thái Học.",
      "Lưu giữ 82 tấm bia đá khắc tên các vị Tiến sĩ thời Hậu Lê và Mạc (Di sản tư liệu thế giới UNESCO).",
      "Thể hiện truyền thống tôn sư trọng đạo, hiếu học của dân tộc Việt Nam."
    ],
    keywords: ["Văn Miếu", "Quốc Tử Giám", "Khuê Văn Các", "Bia Tiến sĩ", "Hiếu học"],
    historicalFigures: ["Lý Thánh Tông", "Lý Nhân Tông", "Chu Văn An"],
    heritageSites: ["Bia Tiến sĩ Văn Miếu (UNESCO)", "Khu di tích Văn Miếu - Quốc Tử Giám"]
  },
  {
    id: 14,
    number: "Bài 14",
    title: "Ôn tập chủ đề Trung du miền núi Bắc Bộ và Đồng bằng Bắc Bộ",
    themeId: "dong-bang-bac-bo",
    page: 63,
    summary: "Tổng kết, so sánh đặc điểm địa hình, khí hậu, dân cư, sản xuất và văn hoá giữa hai vùng Bắc Bộ.",
    keyPoints: [
      "Hệ thống hoá kiến thức địa hình, khí hậu, sông ngòi Bắc Bộ.",
      "So sánh mật độ dân cư và hoạt động sản xuất đồi núi vs đồng bằng.",
      "Ôn tập các di sản văn hoá: Đền Hùng, Văn Miếu, Dân ca Quan họ, Xoè Thái, Hát Then."
    ],
    keywords: ["Ôn tập Bắc Bộ", "So sánh địa hình", "Hệ thống hoá di sản"]
  },
  {
    id: 15,
    number: "Bài 15",
    title: "Thiên nhiên vùng Duyên hải miền Trung",
    themeId: "duyen-hai-mien-trung",
    page: 65,
    summary: "Dải đất hẹp ngang kéo dài từ Thanh Hoá đến Bình Thuận, phía tây là dãy Trường Sơn, phía đông là biển đảo, khí hậu khắc nghiệt.",
    keyPoints: [
      "Kéo dài từ Thanh Hoá đến Bình Thuận, dải đồng bằng hẹp bị chia cắt bởi các dãy núi đâm ra biển.",
      "Địa hình có đồi núi phía tây, đồng bằng nhỏ hẹp ven biển, cồn cát và đầm phá (đầm phá Tam Giang lớn nhất Đông Nam Á).",
      "Khí hậu khô nóng vào mùa hạ (gió Tây Nam), bão lũ lớn vào mùa thu đông.",
      "Sông ngòi ngắn và dốc, nước lên nhanh gây lũ quét."
    ],
    keywords: ["Trường Sơn", "Đèo Hải Vân", "Đầm phá Tam Giang", "Gió Tây Nam", "Bão lũ"],
    geographyFeatures: ["Đãy Trường Sơn", "Đèo Hải Vân", "Đầm phá Tam Giang", "Phong Nha - Kẻ Bàng"]
  },
  {
    id: 16,
    number: "Bài 16",
    title: "Dân cư và hoạt động sản xuất ở vùng Duyên hải miền Trung",
    themeId: "duyen-hai-mien-trung",
    page: 70,
    summary: "Dân cư ven biển gắn bó với biển qua nghề làm muối, đánh bắt hải sản, thuyền thúng và kinh tế du lịch biển đảo sầm uất.",
    keyPoints: [
      "Dân số hơn 20 triệu người (2020), gồm các dân tộc Kinh, Chăm, Thái, Mường...",
      "Vật dụng đặc trưng: Thuyền thúng bằng tre để đánh bắt ven bờ và di chuyển.",
      "Các ngành kinh tế biển: Làm muối (Sa Huỳnh - Quảng Ngãi, Cà Ná - Ninh Thuận), đánh bắt & nuôi trồng hải sản, du lịch biển (Sầm Sơn, Lăng Cô, Nha Trang), giao thông cảng biển (Cửa Lò, Đà Nẵng, Dung Quất)."
    ],
    keywords: ["Làm muối Sa Huỳnh", "Thuyền thúng", "Du lịch biển", "Cảng Đà Nẵng", "Cà Ná"],
    geographyFeatures: ["Cánh đồng muối Sa Huỳnh", "Cảng Dung Quất", "Bãi biển Nha Trang"]
  },
  {
    id: 17,
    number: "Bài 17",
    title: "Một số nét văn hoá ở vùng Duyên hải miền Trung",
    themeId: "duyen-hai-mien-trung",
    page: 73,
    summary: "Nơi hội tụ nhiều di sản thế giới UNESCO và các lễ hội biển đảo thiêng liêng như Lễ rước cá Ông, Lễ Ka-tê, Lễ Khao lề thế lính Hoàng Sa.",
    keyPoints: [
      "Vùng đất di sản: Phố cổ Hội An, Cố đô Huế, Thánh địa Mỹ Sơn, Phong Nha - Kẻ Bàng, Nhã nhạc cung đình Huế.",
      "Lễ rước cá Ông (cá voi): Tục thờ thần biển cứu giúp ngư dân khi gặp nạn.",
      "Lễ hội Ka-tê: Lễ hội lớn nhất của đồng bào Chăm tưởng nhớ thần linh và tổ tiên.",
      "Lễ Khao lề thế lính Hoàng Sa (đảo Lý Sơn, Quảng Ngãi): Tri ân Hải đội Hoàng Sa khẳng định chủ quyền biển đảo Tổ quốc."
    ],
    keywords: ["Di sản UNESCO", "Lễ rước cá Ông", "Lễ hội Ka-tê", "Lễ Khao lề thế lính Hoàng Sa", "Đảo Lý Sơn"],
    heritageSites: ["Hội An (UNESCO)", "Cố đô Huế (UNESCO)", "Thánh địa Mỹ Sơn (UNESCO)", "Lễ Khao lề thế lính Hoàng Sa"]
  },
  {
    id: 18,
    number: "Bài 18",
    title: "Cố đô Huế",
    themeId: "duyen-hai-mien-trung",
    page: 77,
    summary: "Kinh đô thời nhà Nguyễn với vẻ đẹp thơ mộng bên dòng sông Hương, núi Ngự Bình cùng quần thể di sản kiến trúc hoàng gia.",
    keyPoints: [
      "Thuộc địa phận TP. Huế, tỉnh Thừa Thiên Huế.",
      "Cảnh quan thiên nhiên: Sông Hương uốn lượn, núi Ngự Bình hùng vĩ.",
      "Kiến trúc: Ba vòng thành (Kinh thành, Hoàng thành, Tử Cấm thành), Chùa Thiên Mụ, các lăng tẩm vua Nguyễn.",
      "Sự kiện lịch sử: Cuộc phản công Kinh thành Huế (Tôn Thất Thuyết, Vua Hàm Nghi 1885), Vua Bảo Đại thoái vị trong Cách mạng tháng Tám (1945)."
    ],
    keywords: ["Cố đô Huế", "Sông Hương", "Núi Ngự Bình", "Ngọ Môn", "Tôn Thất Thuyết", "Vua Hàm Nghi"],
    historicalFigures: ["Tôn Thất Thuyết", "Vua Hàm Nghi", "Vua Bảo Đại"],
    heritageSites: ["Quần thể di tích Cố đô Huế (UNESCO)", "Nhã nhạc cung đình Huế (UNESCO)"]
  },
  {
    id: 19,
    number: "Bài 19",
    title: "Phố cổ Hội An",
    themeId: "duyen-hai-mien-trung",
    page: 81,
    summary: "Thương cảng quốc tế cổ kính bên sông Thu Bồn với các ngôi nhà cổ, hội quán người Hoa và Chùa Cầu biểu tượng.",
    keyPoints: [
      "Nằm ở hạ lưu sông Thu Bồn, tỉnh Quảng Nam; từng là thương cảng sầm uất thế kỷ XVII - XVIII.",
      "Kiến trúc nhà cổ (như nhà cổ Tấn Ký): 1-2 tầng, chiều ngang hẹp, chiều sâu lớn.",
      "Hội quán người Hoa (Phúc Kiến, Quảng Đông) và công trình độc đáo Chùa Cầu (sự tích vây bắt thuỷ quái mamazu).",
      "Được UNESCO công nhận là Di sản văn hoá thế giới năm 1999."
    ],
    keywords: ["Phố cổ Hội An", "Sông Thu Bồn", "Nhà cổ Tấn Ký", "Chùa Cầu", "Di sản UNESCO"],
    heritageSites: ["Đô thị cổ Hội An (UNESCO)", "Chùa Cầu"]
  },
  {
    id: 20,
    number: "Bài 20",
    title: "Thiên nhiên vùng Tây Nguyên",
    themeId: "tay-nguyen",
    page: 85,
    summary: "Vùng duy nhất không giáp biển, nổi bật với các cao nguyên xếp tầng rộng lớn, khí hậu mùa mưa - mùa khô và tài nguyên rừng khộp.",
    keyPoints: [
      "Gồm 5 tỉnh: Kon Tum, Gia Lai, Đắc Lắk, Đắk Nông, Lâm Đồng.",
      "Địa hình cao nguyên xếp tầng: Kon Tum, Pleiku, Đắk Lắk, Lâm Viên, Di Linh, Mơ Nông.",
      "Khí hậu 2 mùa rõ rệt: Mùa mưa (tháng 5-10) và mùa khô (tháng 11-4 năm sau).",
      "Đất đỏ ba-dan màu mỡ, diện tích rừng rộng lớn (rừng rậm nhiệt đới & rừng khộp rụng lá mùa khô)."
    ],
    keywords: ["5 tỉnh Tây Nguyên", "Cao nguyên xếp tầng", "Đất đỏ ba-dan", "Rừng khộp", "Mùa mưa mùa khô"],
    geographyFeatures: ["Cao nguyên Lâm Viên", "Cột mốc Ngã ba đông dương Bờ Y", "Vườn quốc gia Yok Đôn"]
  },
  {
    id: 21,
    number: "Bài 21",
    title: "Dân cư và hoạt động sản xuất ở vùng Tây Nguyên",
    themeId: "tay-nguyen",
    page: 89,
    summary: "Thủ phủ cây công nghiệp lâu năm (cà phê, hồ tiêu, cao su), chăn nuôi trâu bò trên đồng cỏ và hệ thống nhà máy thuỷ điện trên sông lớn.",
    keyPoints: [
      "Dân số gần 6 triệu người (2020), mật độ dân số thấp (109 người/km2). Các dân tộc: Gia Rai, Ê Đê, Ba Na, Mạ, Xơ Đăng...",
      "Vùng trồng cây công nghiệp lâu năm lớn nhất cả nước: Cà phê (Buôn Ma Thuột), hồ tiêu, cao su, chè...",
      "Chăn nuôi gia súc lớn (trâu, bò) phát triển nhờ đồng cỏ tự nhiên.",
      "Nhiều nhà máy thuỷ điện trên các sông lớn: Ialy (sông Sê San), Sê San, Srêpốk, Đồng Nai..."
    ],
    keywords: ["Cà phê Buôn Ma Thuột", "Hồ tiêu", "Thuỷ điện Ialy", "Đồng cỏ chăn nuôi", "Gia Rai Ê Đê"],
    geographyFeatures: ["Thủ phủ cà phê Buôn Ma Thuột", "Thuỷ điện Ialy (Gia Lai)"]
  },
  {
    id: 22,
    number: "Bài 22",
    title: "Một số nét văn hoá và truyền thống yêu nước, cách mạng của đồng bào Tây Nguyên",
    themeId: "tay-nguyen",
    page: 93,
    summary: "Kiến trúc Nhà Rông, Nhà Dài độc đáo, trang phục thổ cẩm, Lễ hội Đua voi cùng tấm gương anh hùng N'Trang Lơng và Anh hùng Núp.",
    keyPoints: [
      "Nhà Rông (Ba Na, Gia Rai) là ngôi nhà chung cao lớn ở trung tâm buôn làng; Nhà Dài (Ê Đê) kéo dài theo quy mô gia tộc.",
      "Trang phục thổ cẩm sắc sỡ, đàn ông đóng khổ, phụ nữ mặc váy tấm.",
      "Lễ hội truyền thống: Lễ hội Đua voi (Buôn Đôn), Lễ Tạ ơn cha mẹ.",
      "Truyền thống yêu nước: Cuộc khởi nghĩa N'Trang Lơng (1911-1935), Anh hùng Núp dùng nỏ bắn Pháp (làng Stơr)."
    ],
    keywords: ["Nhà Rông", "Nhà Dài", "Lễ hội Đua voi", "N'Trang Lơng", "Anh hùng Núp"],
    historicalFigures: ["Anh hùng Núp", "N'Trang Lơng"],
    heritageSites: ["Làng Stơr quê hương Anh hùng Núp"]
  },
  {
    id: 23,
    number: "Bài 23",
    title: "Lễ hội Cồng chiêng Tây Nguyên",
    themeId: "tay-nguyen",
    page: 97,
    summary: "Kiệt tác di sản phi vật thể nhân loại UNESCO với tiếng cồng chiêng ngân vang trong các nghi lễ vòng đời và mừng lúa mới.",
    keyPoints: [
      "Không gian văn hoá Cồng chiêng trải rộng khắp 5 tỉnh Tây Nguyên.",
      "Cồng chiêng là tiếng nói tâm hồn, công cụ giao tiếp với thần linh trong lễ Mừng lúa mới, Lễ Thổi tai, Lễ Trưởng thành...",
      "Năm 2005, UNESCO ghi danh Không gian văn hoá Cồng chiêng Tây Nguyên là Kiệt tác truyền khẩu và phi vật thể của nhân loại.",
      "Được bảo tồn qua các đợt trình diễn, tạc tượng gỗ, dệt thổ cẩm."
    ],
    keywords: ["Cồng chiêng Tây Nguyên", "UNESCO 2005", "Di sản phi vật thể", "Lễ mừng lúa mới"],
    heritageSites: ["Không gian văn hoá Cồng chiêng Tây Nguyên (UNESCO)"]
  },
  {
    id: 24,
    number: "Bài 24",
    title: "Thiên nhiên vùng Nam Bộ",
    themeId: "nam-bo",
    page: 101,
    summary: "Vùng đất Nam Bộ gồm Đông Nam Bộ và Tây Nam Bộ (Đồng bằng sông Cửu Long), có núi Bà Đen, sông Tiền sông Hậu và khí hậu nóng quanh năm.",
    keyPoints: [
      "Gồm 2 tiểu vùng: Đông Nam Bộ và Tây Nam Bộ (Đồng bằng sông Cửu Long).",
      "Địa hình bằng phẳng, thấp; có đỉnh núi Bà Đen (986m - Tây Ninh) là đỉnh núi cao nhất Nam Bộ.",
      "Khí hậu nhiệt đới gió mùa nóng quanh năm (nhiệt độ trung bình >27°C), chia 2 mùa mưa và khô.",
      "Hệ thống sông Mê Công (sông Cửu Long) chẻ thành sông Tiền, sông Hậu bồi đắp phù sa màu mỡ."
    ],
    keywords: ["Đồng bằng sông Cửu Long", "Núi Bà Đen", "Sông Tiền Sông Hậu", "Đông Nam Bộ", "Tây Nam Bộ"],
    geographyFeatures: ["Núi Bà Đen (986m)", "Đồng Tháp Mười", "Cà Mau"]
  },
  {
    id: 25,
    number: "Bài 25",
    title: "Dân cư và hoạt động sản xuất ở vùng Nam Bộ",
    themeId: "nam-bo",
    page: 104,
    summary: "Vựa lúa, trái cây và thuỷ sản lớn nhất nước; ngành công nghiệp khai thác dầu khí, dệt may, điện tử phát triển hàng đầu.",
    keyPoints: [
      "Dân số hơn 35 triệu người (2020), gồm các dân tộc Kinh, Khmer, Hoa, Chăm...",
      "Vựa lúa lớn nhất nước với trình độ cơ giới hoá cao.",
      "Vùng trồng cây ăn quả lớn nhất (sầu riêng, chôm chôm, xoài, dừa) và cây công nghiệp (cao su, điều, hồ tiêu).",
      "Nuôi trồng & chế biến thuỷ sản xuất khẩu hàng đầu (cá tra, cá ba sa, tôm).",
      "Công nghiệp phát triển nhất nước: Khai thác dầu mỏ, khí đốt, dệt may, điện tử, chế biến lương thực."
    ],
    keywords: ["Vựa lúa lớn nhất", "Cây ăn quả", "Cá tra cá ba sa", "Khai thác dầu mỏ", "Khmer Hoa Chăm"],
    geographyFeatures: ["Mỏ dầu Bạch Hổ", "Trang trại nuôi tôm Kiên Giang"]
  },
  {
    id: 26,
    number: "Bài 26",
    title: "Một số nét văn hoá và truyền thống yêu nước, cách mạng của đồng bào Nam Bộ",
    themeId: "nam-bo",
    page: 108,
    summary: "Cuộc sống sông nước với chợ nổi, nhà sàn/nhà nổi, áo bà ba khăn rằn cùng khí chất hào hùng của Trương Định và Nguyễn Thị Định.",
    keyPoints: [
      "Nét văn hoá sông nước: Nhà sàn ven sông, nhà nổi, chợ nổi (Cái Răng, Phong Điền, Ngã Năm...).",
      "Giao thông thuỷ bằng ghe, xuồng; trang phục truyền thống áo bà ba và khăn rằn.",
      "Truyền thống yêu nước: Khởi nghĩa Bình Tây Đại Nguyên soái Trương Định (1862), Nữ tướng Nguyễn Thị Định lãnh đạo phong trào Đồng Khởi (Bến Tre)."
    ],
    keywords: ["Chợ nổi Cái Răng", "Ghe xuồng", "Áo bà ba khăn rằn", "Trương Định", "Nguyễn Thị Định", "Đồng Khởi"],
    historicalFigures: ["Trương Định", "Nguyễn Thị Định"],
    heritageSites: ["Chợ nổi Cái Răng (Cần Thơ)", "Di tích Đồng Khởi Bến Tre"]
  },
  {
    id: 27,
    number: "Bài 27",
    title: "Thành phố Hồ Chí Minh",
    themeId: "nam-bo",
    page: 112,
    summary: "Trung tâm kinh tế, văn hoá, giáo dục lớn nhất Việt Nam; nơi người thanh niên Nguyễn Tất Thành ra đi tìm đường cứu nước năm 1911.",
    keyPoints: [
      "Đô thị lớn nhất cả nước, tên gọi qua các thời kỳ: Sài Gòn, Sài Gòn - Chợ Lớn, Gia Định; đổi tên năm 1976.",
      "Sự kiện lịch sử: Bác Hồ ra đi tìm đường cứu nước tại Bến Nhà Rồng (5/6/1911 trên tàu La-tu-sơ Tơ-rê-vin).",
      "Chiến dịch Hồ Chí Minh lịch sử: Xe tăng húc đổ cổng Dinh Độc Lập ngày 30/4/1975 giải phóng hoàn toàn miền Nam.",
      "Trung tâm kinh tế, khoa học, cảng biển Hiệp Phước, Khu công nghệ cao, Đại học Quốc gia TP.HCM."
    ],
    keywords: ["Thành phố Hồ Chí Minh", "Bến Nhà Rồng", "5/6/1911", "30/4/1975", "Dinh Độc Lập", "Trung tâm kinh tế"],
    historicalFigures: ["Nguyễn Tất Thành (Hồ Chí Minh)", "Bùi Quang Thận"],
    heritageSites: ["Bến Nhà Rồng", "Dinh Độc Lập", "Bảo tàng Lịch sử TP.HCM"]
  },
  {
    id: 28,
    number: "Bài 28",
    title: "Địa đạo Củ Chi",
    themeId: "nam-bo",
    page: 118,
    summary: "Hệ thống đường hầm ngầm kỳ diệu dài 250 km trong lòng đất - 'Đất thép thành đồng' biểu tượng tinh thần du kích sáng tạo.",
    keyPoints: [
      "Nằm ở huyện Củ Chi, TP. Hồ Chí Minh; độ sâu 3 - 10m trong lòng đất, tổng chiều dài khoảng 250 km.",
      "Cấu trúc gồm 3 tầng hầm nối liền nhau, có hầm cứu thương, bếp Hoàng Cầm (nấu ăn không để lộ khói), giếng nước, kho lương thực.",
      "Gắn liền với danh hiệu 'Đất thép thành đồng', bảo tồn tại Bến Dược và Bến Đình."
    ],
    keywords: ["Địa đạo Củ Chi", "250 km đường hầm", "Bếp Hoàng Cầm", "Đất thép thành đồng", "Bến Dược"],
    heritageSites: ["Khu di tích Lịch sử Địa đạo Củ Chi"]
  },
  {
    id: 29,
    number: "Bài 29",
    title: "Ôn tập chủ đề Duyên hải miền Trung, Tây Nguyên và Nam Bộ",
    themeId: "nam-bo",
    page: 121,
    summary: "Hệ thống hoá và so sánh toàn bộ đặc điểm tự nhiên, kinh tế, xã hội và di sản văn hoá của 3 vùng miền Nam và Miền Trung.",
    keyPoints: [
      "So sánh địa hình, khí hậu: miền Trung hẹp núi ăn ra biển, Tây Nguyên cao nguyên xếp tầng, Nam Bộ đồng bằng rộng lớn.",
      "So sánh thế mạnh kinh tế: Miền Trung làm muối & hải sản, Tây Nguyên cà phê & thuỷ điện, Nam Bộ vựa lúa & dầu khí.",
      "Tổng kết các di sản UNESCO và các nhân vật lịch sử tiêu biểu."
    ],
    keywords: ["Ôn tập 3 vùng", "So sánh kinh tế", "Tổng kết di sản"]
  }
];

export const GLOSSARY: GlossaryTerm[] = [
  { term: "Bảo tồn", page: 38, definition: "Hoạt động nhằm bảo vệ, giữ gìn các giá trị lịch sử, văn hoá hoặc vật chất và tinh thần để truyền lại cho thế hệ sau.", category: "Văn hoá" },
  { term: "Bão", page: 67, definition: "Gió mạnh từ cấp 8 trở lên kèm theo mưa to, có sức phá hoại lớn.", category: "Tự nhiên" },
  { term: "Biến đổi khí hậu", page: 39, definition: "Sự thay đổi của khí hậu trong một khoảng thời gian dài do tác động của điều kiện tự nhiên và hoạt động của con người.", category: "Tự nhiên" },
  { term: "Cao nguyên", page: 20, definition: "Vùng đất tương đối bằng phẳng hoặc gợn sóng, thường cao trên 500m so với mực nước biển, sườn dốc.", category: "Địa lí" },
  { term: "Chợ nổi", page: 109, definition: "Loại hình chợ phổ biến vùng sông nước, trong đó người bán và người mua đều dùng ghe, thuyền làm phương tiện vận chuyển.", category: "Văn hoá" },
  { term: "Cồn cát", page: 67, definition: "Những sóng cát khổng lồ có dạng không đối xứng giữa hai sườn, do gió tích tụ thành.", category: "Địa lí" },
  { term: "Cố đô", page: 77, definition: "Kinh đô cũ.", category: "Lịch sử" },
  { term: "Dân cư", page: 24, definition: "Tập hợp những con người cùng cư trú trên một lãnh thổ nhất định.", category: "Địa lí" },
  { term: "Di tích", page: 17, definition: "Dấu vết của quá khứ còn lưu lại trong lòng đất hoặc trên mặt đất có ý nghĩa về mặt văn hoá và lịch sử.", category: "Lịch sử" },
  { term: "Đảo", page: 66, definition: "Bộ phận đất nối có diện tích nhỏ hơn lục địa, xung quanh có biển hoặc đại dương bao bọc.", category: "Địa lí" },
  { term: "Đầm phá", page: 67, definition: "Vùng nước lặng và tương đối nông, thông ra biển và ngăn cách với biển bằng các bờ cát, đụn cát.", category: "Địa lí" },
  { term: "Đồi", page: 20, definition: "Dạng địa hình nhỏ cao. Độ cao của đồi so với các vùng đất xung quanh thường không quá 200 m.", category: "Địa lí" },
  { term: "Đồng bằng", page: 26, definition: "Dạng địa hình thấp có bề mặt khá bằng phẳng hoặc gợn sóng, rộng hàng triệu km2, độ cao dưới 200m.", category: "Địa lí" },
  { term: "Hạn hán", page: 67, definition: "Tình trạng thiếu hụt lượng nước so với giá trị trung bình trong thời gian dài, gây khô hạn nặng.", category: "Tự nhiên" },
  { term: "Không gian văn hoá", page: 97, definition: "Những khu vực, môi trường có các hoạt động văn hoá hoặc gắn với văn hoá.", category: "Văn hoá" },
  { term: "Lăng tầm", page: 78, definition: "Nơi chôn cất và thờ các vua đã mất.", category: "Lịch sử" },
  { term: "Lũ quét", page: 22, definition: "Loại lũ xảy ra khi một khối lượng nước khổng lồ di chuyển nhanh từ địa hình cao xuống thấp.", category: "Tự nhiên" },
  { term: "Mật độ dân số", page: 24, definition: "Số người dân trung bình sống trên một đơn vị diện tích lãnh thổ (người/km2).", category: "Địa lí" },
  { term: "Phục dựng", page: 80, definition: "Khôi phục và dựng lại cho giống như thật.", category: "Văn hoá" },
  { term: "Quần đảo", page: 66, definition: "Nhóm gồm nhiều đảo lớn, nhỏ nằm gần nhau.", category: "Địa lí" },
  { term: "Thành hoàng", page: 47, definition: "Người có công giúp dân, giúp nước trong các cuộc kháng chiến hoặc lập làng, dạy nghề.", category: "Lịch sử" },
  { term: "Thiên tai", page: 79, definition: "Sự thay đổi đột ngột, dữ dội của tự nhiên (bão, lũ quét, động đất) tác động xấu đến môi trường và con người.", category: "Tự nhiên" },
  { term: "Văn minh", page: 50, definition: "Trình độ phát triển đạt đến một mức nhất định của xã hội loài người, có nền văn hoá vật chất và tinh thần đặc trưng.", category: "Lịch sử" },
  { term: "Vịnh", page: 37, definition: "Một bộ phận của biển, đại dương ăn khá sâu vào đất liền nhưng vẫn có sự lưu thông.", category: "Địa lí" }
];

export const HISTORICAL_FIGURES: HistoricalFigure[] = [
  { name: "Vua Hùng", period: "Thời kỳ Văn Lang", role: "Các vị vua đầu tiên dựng nước", summary: "Có công dựng nước Văn Lang, truyền lại ngày Quốc lễ Giỗ Tổ 10/3 âm lịch.", lessonId: 7 },
  { name: "Lý Thái Tổ (Lý Công Uẩn)", period: "Nhà Lý (1010)", role: "Vua khai sáng nhà Lý", summary: "Năm 1010 viết Chiếu dời đô từ Hoa Lư về Đại La và đổi tên thành Thăng Long.", lessonId: 12 },
  { name: "Lê Lợi", period: "Nhà Lê sơ (1428)", role: "Anh hùng dân tộc", summary: "Lãnh đạo khởi nghĩa Lam Sơn đánh đuổi quân Minh, gắn liền sự tích trả gươm thần tại Hồ Gươm.", lessonId: 12 },
  { name: "Hoàng Diệu", period: "Triều Nguyễn (1882)", role: "Tổng đốc Hà Ninh", summary: "Anh dũng chỉ huy nhân dân Hà Nội chống quân Pháp xâm lược năm 1882 và hy sinh để giữ tròn khí tiết.", lessonId: 12 },
  { name: "Chủ tịch Hồ Chí Minh", period: "Thời đại hiện đại", role: "Lãnh tụ vĩ đại của dân tộc", summary: "Ngày 5/6/1911 tại Bến Nhà Rồng ra đi tìm đường cứu nước; đọc Tuyên ngôn Độc lập khai sinh nước VNDCCH ngày 2/9/1945.", lessonId: 27 },
  { name: "Tôn Thất Thuyết & Vua Hàm Nghi", period: "Triều Nguyễn (1885)", role: "Lãnh đạo phong trào Cần Vương", summary: "Chỉ huy cuộc phản công ở Kinh thành Huế chống Pháp năm 1885 và ban chiếu Cần Vương.", lessonId: 18 },
  { name: "Anh hùng Núp", period: "Kháng chiến chống Pháp", role: "Anh hùng lực lượng vũ trang Tây Nguyên", summary: "Người con dân tộc Ba Na ở làng Stơr (Gia Lai) dùng nỏ bắn Pháp và lãnh đạo dân làng chiến đấu.", lessonId: 22 },
  { name: "Trương Định", period: "Kháng chiến chống Pháp (1862)", role: "Bình Tây Đại Nguyên soái", summary: "Thủ lĩnh nghĩa quân chống Pháp ở Nam Bộ, khước từ lệnh giải tán của triều đình để ở lại chiến đấu cùng nhân dân.", lessonId: 26 },
  { name: "Nguyễn Thị Định", period: "Kháng chiến chống Mỹ", role: "Nữ tướng - Lãnh đạo Đồng Khởi", summary: "Khởi xướng và lãnh đạo phong trào Đồng Khởi ở Bến Tre, Phó Tổng Tự lệnh Các lực lượng vũ trang giải phóng miền Nam.", lessonId: 26 }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    lessonId: 4,
    question: "Đỉnh núi nào cao nhất Việt Nam thuộc dãy Hoàng Liên Sơn?",
    options: ["Phan-xi-păng", "Mẫu Sơn", "Bà Đen", "Ngự Bình"],
    correctAnswer: 0,
    explanation: "Đỉnh Phan-xi-păng cao 3 143 m thuộc dãy Hoàng Liên Sơn là đỉnh núi cao nhất nước ta (mệnh danh Nóc nhà Đông Dương)."
  },
  {
    id: 2,
    lessonId: 7,
    question: "Ngày Giỗ Tổ Hùng Vương được tổ chức vào thời gian nào hằng năm?",
    options: ["Mồng 1 tháng 1 âm lịch", "Mồng 10 tháng 3 âm lịch", "Ngày 2 tháng 9 dương lịch", "Ngày 30 tháng 4 dương lịch"],
    correctAnswer: 1,
    explanation: "Giỗ Tổ Hùng Vương là ngày Quốc lễ của Việt Nam, diễn ra vào ngày mồng 10 tháng 3 âm lịch hằng năm tại Đền Hùng (Phú Thọ)."
  },
  {
    id: 3,
    lessonId: 12,
    question: "Vua Lý Thái Tổ quyết định dời đô từ Hoa Lư về Đại La và đổi tên thành Thăng Long vào năm nào?",
    options: ["Năm 938", "Năm 1010", "Năm 1428", "Năm 1802"],
    correctAnswer: 1,
    explanation: "Năm 1010, vua Lý Thái Tổ ban Chiếu dời đô từ Hoa Lư (Ninh Bình) về Đại La và đổi tên thành Thăng Long (Hà Nội ngày nay)."
  },
  {
    id: 4,
    lessonId: 13,
    question: "Di sản tư liệu thế giới UNESCO lưu giữ tại Văn Miếu - Quốc Tử Giám là gì?",
    options: ["82 tấm bia Tiến sĩ", "Trống đồng Đông Sơn", "Mố đê sông Hồng", "Mùa múa Xoè"],
    correctAnswer: 0,
    explanation: "82 tấm bia đá khắc tên các vị đỗ Tiến sĩ thời Hậu Lê và Mạc tại Văn Miếu - Quốc Tử Giám được UNESCO công nhận là Di sản tư liệu thế giới."
  },
  {
    id: 5,
    lessonId: 19,
    question: "Công trình kiến trúc cổ biểu tượng nổi tiếng ở Phố cổ Hội An là gì?",
    options: ["Chùa Cầu", "Chùa Thiên Mụ", "Khuê Văn Các", "Cổng làng Đường Lâm"],
    correctAnswer: 0,
    explanation: "Chùa Cầu (còn gọi là Cầu Nhật Bản) vắt qua lách nước nhỏ là biểu tượng kiến trúc độc đáo của Phố cổ Hội An."
  },
  {
    id: 6,
    lessonId: 20,
    question: "Tây Nguyên gồm bao nhiêu tỉnh và có đặc điểm địa hình gì nổi bật?",
    options: ["3 tỉnh, đồng bằng ven biển", "5 tỉnh, cao nguyên xếp tầng", "7 tỉnh, đồi núi thấp", "4 tỉnh, bán đảo lớn"],
    correctAnswer: 1,
    explanation: "Tây Nguyên gồm 5 tỉnh (Kon Tum, Gia Lai, Đắk Lắk, Đắk Nông, Lâm Đồng) nổi bật với các cao nguyên xếp tầng rộng lớn."
  },
  {
    id: 7,
    lessonId: 23,
    question: "Không gian văn hoá Cồng chiêng Tây Nguyên được UNESCO ghi danh vào năm nào?",
    options: ["Năm 1999", "Năm 2005", "Năm 2010", "Năm 2018"],
    correctAnswer: 1,
    explanation: "Năm 2005, UNESCO ghi danh Không gian văn hoá Cồng chiêng Tây Nguyên là Kiệt tác truyền khẩu và phi vật thể của nhân loại."
  },
  {
    id: 8,
    lessonId: 27,
    question: "Ngày 5/6/1911 tại Bến Nhà Rồng, người thanh niên Nguyễn Tất Thành đã thực hiện sự kiện lịch sử nào?",
    options: ["Đọc Tuyên ngôn Độc lập", "Ra đi tìm đường cứu nước", "Lãnh đạo phong trào Đồng Khởi", "Viết Chiếu dời đô"],
    correctAnswer: 1,
    explanation: "Ngày 5/6/1911 tại Bến Nhà Rồng (Sài Gòn - TP.HCM), Bác Hồ lấy tên Văn Ba xuống tàu La-tu-sơ Tơ-rê-vin ra đi tìm đường cứu nước."
  },
  {
    id: 9,
    lessonId: 28,
    question: "Hệ thống đường hầm bí mật nổi tiếng được mệnh danh 'Đất thép thành đồng' dài khoảng bao nhiêu km?",
    options: ["50 km", "100 km", "250 km", "500 km"],
    correctAnswer: 2,
    explanation: "Địa đạo Củ Chi có tổng chiều dài khoảng 250 km đường hầm ngầm trong lòng đất với cấu trúc 3 tầng độc đáo."
  }
];
