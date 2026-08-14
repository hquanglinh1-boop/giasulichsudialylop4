export type DifficultyLevel = 'nhan-biet' | 'thong-hieu' | 'van-dung';

export interface Question {
  id: number;
  lessonId: number;
  themeId: string;
  difficulty: DifficultyLevel;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const QUESTION_BANK: Question[] = [
  // BÀI 1: Phương tiện học tập Lịch sử & Địa lí
  {
    id: 101,
    lessonId: 1,
    themeId: "mo-dau",
    difficulty: "nhan-biet",
    question: "Bản đồ là gì?",
    options: [
      "Hình vẽ thu nhỏ một khu vực hay toàn bộ bề mặt Trái Đất theo tỉ lệ nhất định",
      "Bức ảnh chụp Trái Đất từ vệ tinh không theo tỉ lệ",
      "Mô hình quả cầu nhựa thu nhỏ thể hiện hành tinh",
      "Bảng liệt kê danh sách các tỉnh thành Việt Nam"
    ],
    correctAnswer: 0,
    explanation: "Bản đồ là hình vẽ thu nhỏ một khu vực hay toàn bộ bề mặt Trái Đất lên mặt phẳng theo một tỉ lệ nhất định."
  },
  {
    id: 102,
    lessonId: 1,
    themeId: "mo-dau",
    difficulty: "thong-hieu",
    question: "Điểm khác biệt chính giữa Lược đồ và Bản đồ là gì?",
    options: [
      "Lược đồ có màu sắc sặc sỡ hơn bản đồ",
      "Lược đồ thu nhỏ khu vực theo tỉ lệ nhưng nội dung giản lược hơn bản đồ",
      "Lược đồ chỉ vẽ bằng tay, bản đồ chỉ vẽ bằng máy tính",
      "Lược đồ dùng cho môn Lịch sử, bản đồ dùng cho môn Địa lí"
    ],
    correctAnswer: 1,
    explanation: "Lược đồ cũng là hình vẽ thu nhỏ theo tỉ lệ nhất định nhưng thể hiện nội dung trọng tâm và giản lược hơn so với bản đồ chi tiết."
  },
  {
    id: 103,
    lessonId: 1,
    themeId: "mo-dau",
    difficulty: "van-dung",
    question: "Khi muốn tìm thứ tự thời gian xảy ra các sự kiện lịch sử trong SGK Lớp 4, em nên sử dụng phương tiện học tập nào hiệu quả nhất?",
    options: [
      "Bảng số liệu dân số",
      "Trục thời gian (Niên biểu)",
      "Bản đồ địa hình",
      "Sơ đồ tư duy từ vựng"
    ],
    correctAnswer: 1,
    explanation: "Trục thời gian thể hiện chuỗi các sự kiện lịch sử theo trình tự thời gian liên tục, giúp học sinh dễ hình dung tiến trình lịch sử."
  },

  // BÀI 2: Thiên nhiên và con người địa phương em
  {
    id: 201,
    lessonId: 2,
    themeId: "dia-phuong-em",
    difficulty: "nhan-biet",
    question: "Yếu tố nào sau đây thuộc về đặc điểm tự nhiên của địa phương?",
    options: [
      "Số lượng trường học và bệnh viện",
      "Địa hình, khí hậu, sông ngòi và đất đai",
      "Các khu công nghiệp và siêu thị",
      "Số lượng ô tô và xe máy"
    ],
    correctAnswer: 1,
    explanation: "Các yếu tố tự nhiên bao gồm vị trí địa lí, địa hình, khí hậu, nguồn nước (sông, hồ), đất đai và sinh vật."
  },
  {
    id: 202,
    lessonId: 2,
    themeId: "dia-phuong-em",
    difficulty: "thong-hieu",
    question: "Vì sao chúng ta cần chú trọng bảo vệ nguồn nước sông hồ tại địa phương mình?",
    options: [
      "Vì nước sông hồ là nguồn nước sinh hoạt, sản xuất và duy trì hệ sinh thái",
      "Vì nước sông hồ chỉ dùng để chèo thuyền du lịch",
      "Vì sông hồ không bao giờ bị ô nhiễm",
      "Vì nước sông hồ không ảnh hưởng tới đời sống người dân"
    ],
    correctAnswer: 0,
    explanation: "Nguồn nước sạch cung cấp nước sinh hoạt, tưới tiêu nông nghiệp, nuôi trồng thuỷ sản và giữ cân bằng môi trường sống."
  },

  // BÀI 3: Lịch sử và văn hoá truyền thống địa phương
  {
    id: 301,
    lessonId: 3,
    themeId: "dia-phuong-em",
    difficulty: "nhan-biet",
    question: "Đâu là ví dụ về nét văn hoá truyền thống của địa phương?",
    options: [
      "Trang phục dân tộc, món ăn đặc sản, lễ hội truyền thống",
      "Các trò chơi điện tử trực tuyến",
      "Phim hoạt hình nước ngoài",
      "Điện thoại thông minh"
    ],
    correctAnswer: 0,
    explanation: "Văn hoá truyền thống bao gồm trang phục cổ truyền, các món ăn đặc sản lâu đời, phong tục tập quán và các lễ hội dân gian."
  },

  // BÀI 4: Thiên nhiên vùng Trung du và miền núi Bắc Bộ
  {
    id: 401,
    lessonId: 4,
    themeId: "trung-du-mien-nui-bac-bo",
    difficulty: "nhan-biet",
    question: "Đỉnh núi nào cao nhất Việt Nam thuộc dãy Hoàng Liên Sơn?",
    options: ["Phan-xi-păng", "Mẫu Sơn", "Bà Đen", "Ngự Bình"],
    correctAnswer: 0,
    explanation: "Đỉnh Phan-xi-păng cao 3 143 m thuộc dãy Hoàng Liên Sơn là đỉnh núi cao nhất Việt Nam (mệnh danh Nóc nhà Đông Dương)."
  },
  {
    id: 402,
    lessonId: 4,
    themeId: "trung-du-mien-nui-bac-bo",
    difficulty: "thong-hieu",
    question: "Khí hậu vùng Trung du và miền núi Bắc Bộ có đặc điểm nổi bật nào so với các vùng khác?",
    options: [
      "Nóng quanh năm không có mùa đông",
      "Mùa đông lạnh nhất cả nước, một số vùng núi cao có tuyết rơi",
      "Mưa bão quanh năm không có mùa khô",
      "Mùa hè có băng tuyết bao phủ"
    ],
    correctAnswer: 1,
    explanation: "Do nằm ở phía Bắc đón gió mùa Đông Bắc, vùng này có mùa đông lạnh nhất cả nước. Ở đỉnh Sa Pa hay Mẫu Sơn đôi khi có băng tuyết."
  },
  {
    id: 403,
    lessonId: 4,
    themeId: "trung-du-mien-nui-bac-bo",
    difficulty: "van-dung",
    question: "Thế mạnh nổi bật nhất về thuỷ điện của vùng Trung du và miền núi Bắc Bộ dựa trên yếu tố tự nhiên nào?",
    options: [
      "Đất đỏ ba-dan rộng lớn",
      "Địa hình đồi núi dốc và hệ thống sông lớn như sông Đà, sông Chảy",
      "Bãi biển dài và nhiều đầm phá sâu",
      "Rừng khộp rụng lá mùa khô"
    ],
    correctAnswer: 1,
    explanation: "Địa hình đồi núi cao dốc kết hợp với các dòng sông lớn (sông Đà, sông Chảy) chảy xiết tạo nguồn năng lượng thuỷ điện khổng lồ."
  },

  // BÀI 5: Dân cư và sản xuất ở Trung du miền núi Bắc Bộ
  {
    id: 501,
    lessonId: 5,
    themeId: "trung-du-mien-nui-bac-bo",
    difficulty: "nhan-biet",
    question: "Nhà máy thuỷ điện lớn bậc nhất Việt Nam nằm trên sông Đà thuộc tỉnh Hòa Bình và Sơn La là?",
    options: [
      "Thủy điện Hòa Bình và Thủy điện Sơn La",
      "Thủy điện Ialy",
      "Thủy điện Trị An",
      "Thủy điện Thác Mơ"
    ],
    correctAnswer: 0,
    explanation: "Nhà máy thủy điện Hòa Bình và Sơn La xây dựng trên sông Đà là các công trình thủy điện công suất lớn hàng đầu cả nước."
  },
  {
    id: 502,
    lessonId: 5,
    themeId: "trung-du-mien-nui-bac-bo",
    difficulty: "thong-hieu",
    question: "Tác dụng chính của việc làm Ruộng bậc thang ở vùng đồi núi dốc là gì?",
    options: [
      "Tạo cảnh đẹp thu hút khách du lịch",
      "Giữ nước, giữ đất trồng lúa và hạn chế xói mòn sạt lở đất",
      "Đô thị hoá nhanh chóng vùng cao",
      "Chăn nuôi gia súc lớn"
    ],
    correctAnswer: 1,
    explanation: "Ruộng bậc thang giúp giữ nước mưa trên mặt sườn dốc để cấy lúa nước, đồng thời giảm dòng chảy xói mòn rửa trôi đất sườn đồi."
  },

  // BÀI 6: Văn hoá vùng Trung du miền núi Bắc Bộ
  {
    id: 601,
    lessonId: 6,
    themeId: "trung-du-mien-nui-bac-bo",
    difficulty: "nhan-biet",
    question: "Nghệ thuật múa dân gian tiêu biểu của đồng bào dân tộc Thái được UNESCO ghi danh là Di sản văn hoá phi vật thể là?",
    options: ["Múa Xoè Thái", "Múa Cồng chiêng", "Hát Quan họ", "Hát Bài chòi"],
    correctAnswer: 0,
    explanation: "Nghệ thuật Xoè Thái biểu tượng cho sự đoàn kết và niềm tự hào của người Thái được UNESCO vinh danh năm 2021."
  },
  {
    id: 602,
    lessonId: 6,
    themeId: "trung-du-mien-nui-bac-bo",
    difficulty: "thong-hieu",
    question: "Lễ hội Lồng tồng của đồng bào Tày, Nùng mang ý nghĩa gì?",
    options: [
      "Lễ hội xuống đồng cầu cho mùa màng bội thu, mưa thuận gió hòa",
      "Lễ hội rước cá voi trên biển",
      "Lễ hội đua thuyền trên sông Hồng",
      "Lễ hội tạ ơn thần biển"
    ],
    correctAnswer: 0,
    explanation: "Lồng tồng tiếng Tày có nghĩa là 'Xuống đồng', là lễ hội đầu xuân lớn nhất cầu cho mưa thuận gió hòa, cây cối tốt tươi."
  },

  // BÀI 7: Đền Hùng và Lễ Giỗ Tổ Hùng Vương
  {
    id: 701,
    lessonId: 7,
    themeId: "trung-du-mien-nui-bac-bo",
    difficulty: "nhan-biet",
    question: "Lễ Giỗ Tổ Hùng Vương diễn ra vào ngày mồng mấy âm lịch hằng năm tại Việt Trì, Phú Thọ?",
    options: [
      "Mồng 10 tháng 3 âm lịch",
      "Mồng 1 tháng 1 âm lịch",
      "Ngày 15 tháng 8 âm lịch",
      "Ngày 2 tháng 9 âm lịch"
    ],
    correctAnswer: 0,
    explanation: "Ngày Quốc lễ Giỗ Tổ Hùng Vương diễn ra vào mồng 10 tháng 3 âm lịch tại Khu di tích Đền Hùng (Phú Thọ)."
  },
  {
    id: 702,
    lessonId: 7,
    themeId: "trung-du-mien-nui-bac-bo",
    difficulty: "thong-hieu",
    question: "Câu ca dao 'Dù ai đi ngược về xuôi / Nhớ ngày Giỗ Tổ mùng mười tháng ba' thể hiện truyền thống đạo lý nào?",
    options: [
      "Tôn sư trọng đạo",
      "Uống nước nhớ nguồn, lòng biết ơn tổ tiên dựng nước",
      "Lá lành đùm lá rách",
      "Hiếu học tôn vinh thầy cô"
    ],
    correctAnswer: 1,
    explanation: "Câu ca dao thể hiện truyền thống 'Uống nước nhớ nguồn', lòng tự hào và tri ân các Vua Hùng đã có công dựng nước."
  },

  // BÀI 8: Thiên nhiên vùng Đồng bằng Bắc Bộ
  {
    id: 801,
    lessonId: 8,
    themeId: "dong-bang-bac-bo",
    difficulty: "nhan-biet",
    question: "Đồng bằng Bắc Bộ được bồi đắp chủ yếu bởi hệ thống hai sông lớn nào?",
    options: [
      "Sông Tiền và Sông Hậu",
      "Sông Hồng và Sông Thái Bình",
      "Sông Đồng Nai và Sông Sài Gòn",
      "Sông Hương và Sông Thu Bồn"
    ],
    correctAnswer: 1,
    explanation: "Đồng bằng Bắc Bộ hình thành do phù sa của hai hệ thống sông lớn là sông Hồng và sông Thái Bình bồi đắp."
  },
  {
    id: 802,
    lessonId: 8,
    themeId: "dong-bang-bac-bo",
    difficulty: "thong-hieu",
    question: "Địa hình Đồng bằng Bắc Bộ có đặc điểm gì nổi bật?",
    options: [
      "Tam giác châu bằng phẳng, thấp dần từ tây bắc xuống đông nam",
      "Cao nguyên đá vôi dốc đứng",
      "Chồi núi cao và thung lũng sâu",
      "Các dải đụn cát ven biển khô hạn"
    ],
    correctAnswer: 0,
    explanation: "Đồng bằng Bắc Bộ có dạng hình tam giác châu bằng phẳng, bề mặt có hệ thống đê điều kiên cố."
  },

  // BÀI 9: Dân cư và sản xuất Đồng bằng Bắc Bộ
  {
    id: 901,
    lessonId: 9,
    themeId: "dong-bang-bac-bo",
    difficulty: "nhan-biet",
    question: "Đồng bằng Bắc Bộ nổi tiếng là vựa lúa lớn thứ mấy của Việt Nam?",
    options: ["Thứ nhất", "Thứ hai", "Thứ ba", "Thứ tư"],
    correctAnswer: 1,
    explanation: "Đồng bằng Bắc Bộ là vựa lúa lớn thứ hai cả nước (sau Đồng bằng sông Cửu Long)."
  },
  {
    id: 902,
    lessonId: 9,
    themeId: "dong-bang-bac-bo",
    difficulty: "thong-hieu",
    question: "Vì sao người dân Đồng bằng Bắc Bộ từ xưa đã đắp hệ thống đê sông Hồng kiên cố dài hàng nghìn km?",
    options: [
      "Để làm đường cho xe ô tô chạy",
      "Ngăn lũ lụt mùa hạ bảo vệ xóm làng và đồng ruộng",
      "Để nuôi cá trong hồ nhân tạo",
      "Để giữ đất trồng cà phê"
    ],
    correctAnswer: 1,
    explanation: "Vào mùa mưa hạ, nước sông Hồng dâng rất cao gây lũ lớn. Hệ thống đê kiên cố giữ nước không tràn vào xóm làng."
  },
  {
    id: 903,
    lessonId: 9,
    themeId: "dong-bang-bac-bo",
    difficulty: "van-dung",
    question: "Làng gốm Bát Tràng ở Hà Nội nổi tiếng với sản phẩm thủ công truyền thống nào?",
    options: [
      "Đúc tượng đồng",
      "Đồ sứ, gốm men độc đáo và gạch gốm",
      "Dệt lụa tơ tằm",
      "Chạm khắc bạc"
    ],
    correctAnswer: 1,
    explanation: "Làng gốm Bát Tràng nằm ven sông Hồng (Gia Lâm, Hà Nội) sản xuất các mặt hàng gốm sứ tinh xảo truyền thống hàng trăm năm."
  },

  // BÀI 10: Văn hoá vùng Đồng bằng Bắc Bộ
  {
    id: 1001,
    lessonId: 10,
    themeId: "dong-bang-bac-bo",
    difficulty: "nhan-biet",
    question: "Hình ảnh kiến trúc biểu tượng thân thuộc của làng quê truyền thống Bắc Bộ gồm?",
    options: [
      "Cổng làng, cây đa, giếng nước, đình làng",
      "Nhà Rông, nhà Dài, cồng chiêng",
      "Chợ nổi, ghe xuồng, rừng tràm",
      "Chùa Cầu, nhà cổ, hội quán"
    ],
    correctAnswer: 0,
    explanation: "Cây đa, giếng nước, sân đình và cổng làng là bộ bốn nét không gian tâm linh, sinh hoạt cộng đồng Bắc Bộ."
  },
  {
    id: 1002,
    lessonId: 10,
    themeId: "dong-bang-bac-bo",
    difficulty: "thong-hieu",
    question: "Làn điệu dân ca ngọt ngào, mượt mà tiêu biểu của vùng Bắc Ninh - Bắc Giang được UNESCO vinh danh là?",
    options: ["Dân ca Quan họ Bắc Ninh", "Nhã nhạc cung đình", "Hát Đệm xòe", "Đàn tài tử"],
    correctAnswer: 0,
    explanation: "Dân ca Quan họ Bắc Ninh với lối hát giao duyên đối đáp ngọt ngào được UNESCO ghi danh là Di sản văn hóa phi vật thể đại diện."
  },
  {
    id: 1003,
    lessonId: 10,
    themeId: "dong-bang-bac-bo",
    difficulty: "van-dung",
    question: "Môn nghệ thuật sân khấu dân gian độc đáo của Đồng bằng Bắc Bộ biểu diễn trên mặt nước hồ ao là?",
    options: ["Múa rối nước", "Hát Bội", "Cải lương", "Hát Chèo cổ"],
    correctAnswer: 0,
    explanation: "Múa rối nước gắn liền với văn minh lúa nước sông Hồng, sử dụng con rối gỗ điều khiển qua sào và dây dưới nước."
  },

  // BÀI 11: Sông Hồng và văn minh sông Hồng
  {
    id: 1101,
    lessonId: 11,
    themeId: "dong-bang-bac-bo",
    difficulty: "nhan-biet",
    question: "Nhà nước đầu tiên trong lịch sử dân tộc Việt Nam hình thành ở vùng châu thổ Sông Hồng là?",
    options: ["Nhà nước Văn Lang", "Nhà nước Đại Việt", "Nhà nước Nam Việt", "Nhà nước Đại Nam"],
    correctAnswer: 0,
    explanation: "Nhà nước Văn Lang do các Vua Hùng đứng đầu là nhà nước đầu tiên của dân tộc Việt Nam thời kỳ Văn minh Sông Hồng."
  },
  {
    id: 1102,
    lessonId: 11,
    themeId: "dong-bang-bac-bo",
    difficulty: "thong-hieu",
    question: "Hiện vật đúc bằng đồng tiêu biểu nhất phản ánh trình độ thẩm mỹ và kĩ thuật cao thời kỳ Văn minh Sông Hồng là?",
    options: ["Trống đồng Đông Sơn (như trống Ngọc Lũ)", "Súng thần công", "Bia Tiến sĩ", "Thuyền thúng"],
    correctAnswer: 0,
    explanation: "Trống đồng Đông Sơn với hoa văn ngôi mặt trời, chim lạc, người giã gạo, đua thuyền là kiệt tác nghệ thuật đúc đồng thời cổ đại."
  },

  // BÀI 12: Thăng Long - Hà Nội
  {
    id: 1201,
    lessonId: 12,
    themeId: "dong-bang-bac-bo",
    difficulty: "nhan-biet",
    question: "Vua Lý Thái Tổ ban Chiếu dời đô từ Hoa Lư về Đại La và đổi tên thành Thăng Long vào năm nào?",
    options: ["Năm 1010", "Năm 938", "Năm 1428", "Năm 1945"],
    correctAnswer: 0,
    explanation: "Mùa thu năm 1010, vua Lý Thái Tổ quyết định dời kinh đô về vùng đất Đại La màu mỡ và đổi tên là Thăng Long (Rồng bay lên)."
  },
  {
    id: 1202,
    lessonId: 12,
    themeId: "dong-bang-bac-bo",
    difficulty: "thong-hieu",
    question: "Sự tích Hồ Gươm (Hồ Hoàn Kiếm) gắn liền với vị anh hùng dân tộc nào?",
    options: ["Lê Lợi (Lê Thái Tổ)", "Trần Hưng Đạo", "Quang Trung", "Ngô Quyền"],
    correctAnswer: 0,
    explanation: "Truyền thuyết kể rằng sau khi đánh đuổi quân Minh, Lê Lợi dạo chơi trên hồ gặp Rùa Vàng đòi lại gươm thần Thuận Thiên."
  },
  {
    id: 1203,
    lessonId: 12,
    themeId: "dong-bang-bac-bo",
    difficulty: "van-dung",
    question: "Sự kiện Bác Hồ đọc Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa diễn ra vào thời gian và địa điểm nào?",
    options: [
      "Ngày 2/9/1945 tại Quảng trường Ba Đình (Hà Nội)",
      "Ngày 30/4/1975 tại Dinh Độc Lập",
      "Ngày 5/6/1911 tại Bến Nhà Rồng",
      "Ngày 10/3/1954 tại Điện Biên Phủ"
    ],
    correctAnswer: 0,
    explanation: "Mồng 2 tháng 9 năm 1945, tại Quảng trường Ba Đình lịch sử, Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập vĩ đại."
  },

  // BÀI 13: Văn Miếu - Quốc Tử Giám
  {
    id: 1301,
    lessonId: 13,
    themeId: "dong-bang-bac-bo",
    difficulty: "nhan-biet",
    question: "Văn Miếu - Quốc Tử Giám được xem là công trình gì của Việt Nam?",
    options: [
      "Trường đại học đầu tiên của Việt Nam",
      "Ngôi chùa cổ nhất miền Bắc",
      "Bảo tàng lịch sử quân sự",
      "Lăng mộ hoàng gia"
    ],
    correctAnswer: 0,
    explanation: "Văn Miếu thành lập năm 1070 và Quốc Tử Giám thành lập năm 1076 dưới thời Lý là trường đại học đầu tiên của nước ta."
  },
  {
    id: 1302,
    lessonId: 13,
    themeId: "dong-bang-bac-bo",
    difficulty: "thong-hieu",
    question: "Ý nghĩa của 82 tấm Bia Tiến sĩ dựng trên lưng rùa đá tại Văn Miếu là gì?",
    options: [
      "Tôn vinh hiền tài, khuyến khích tinh thần hiếu học và ghi danh những người đỗ đạt",
      "Đánh dấu mốc ranh giới thành Thăng Long",
      "Kê chân cột nhà Thái Học",
      "Trang trí phong cảnh hồ Văn"
    ],
    correctAnswer: 0,
    explanation: "Bia Tiến sĩ khắc tên họ quê quán những người thi đỗ Tiến sĩ để vinh danh người tài, khuyến học cho muôn đời sau."
  },

  // BÀI 14: Ôn tập Đồng bằng Bắc Bộ
  {
    id: 1401,
    lessonId: 14,
    themeId: "dong-bang-bac-bo",
    difficulty: "van-dung",
    question: "Đâu là việc làm thiết thực của học sinh tiểu học để góp phần giữ gìn di tích lịch sử như Văn Miếu hay Hồ Gươm?",
    options: [
      "Giữ gìn vệ sinh chung, không vẽ bẩn lên hiện vật, tìm hiểu lịch sử dân tộc",
      "Khắc tên mình lên Bia Tiến sĩ để làm kỉ niệm",
      "Bắt rùa ở hồ Hoàn Kiếm mang về nhà nuôi",
      "Hái hoa bẻ cành trong khuôn viên di tích"
    ],
    correctAnswer: 0,
    explanation: "Học sinh cần văn minh tôn trọng di tích, giữ gìn môi trường xanh sạch đẹp và tuyên truyền bảo vệ di sản văn hóa."
  },

  // BÀI 15: Thiên nhiên vùng Duyên hải miền Trung
  {
    id: 1501,
    lessonId: 15,
    themeId: "duyen-hai-mien-trung",
    difficulty: "nhan-biet",
    question: "Đặc điểm nổi bật của địa hình dải đồng bằng Duyên hải miền Trung là?",
    options: [
      "Hẹp ngang, bị các dãy núi đâm ra biển chia cắt thành nhiều đồng bằng nhỏ",
      "Rộng lớn mênh mông như Đồng bằng sông Cửu Long",
      "Toàn là cao nguyên đất đỏ ba-dan",
      "Nhiều đỉnh núi cao trên 3000m bao phủ"
    ],
    correctAnswer: 0,
    explanation: "Lãnh thổ hẹp ngang, dãy Trường Sơn chạy sát biển nên các nhánh núi chia cắt đồng bằng thành những khu vực nhỏ hẹp."
  },
  {
    id: 1502,
    lessonId: 15,
    themeId: "duyen-hai-mien-trung",
    difficulty: "thong-hieu",
    question: "Đầm phá Tam Giang nổi tiếng nằm ở tỉnh nào thuộc miền Trung?",
    options: ["Thừa Thiên Huế", "Quảng Nam", "Nghệ An", "Bình Định"],
    correctAnswer: 0,
    explanation: "Đầm phá Tam Giang - Cầu Hai thuộc tỉnh Thừa Thiên Huế là hệ thống đầm phá nước lợ lớn bậc nhất Đông Nam Á."
  },

  // BÀI 16: Dân cư và sản xuất Duyên hải miền Trung
  {
    id: 1601,
    lessonId: 16,
    themeId: "duyen-hai-mien-trung",
    difficulty: "nhan-biet",
    question: "Cánh đồng muối Sa Huỳnh nổi tiếng nằm ở tỉnh nào?",
    options: ["Quảng Ngãi", "Ninh Thuận", "Khánh Hòa", "Bình Thuận"],
    correctAnswer: 0,
    explanation: "Sa Huỳnh (tỉnh Quảng Ngãi) và Cà Ná (Ninh Thuận) là những vựa muối làm từ nước biển lớn nhất miền Trung."
  },
  {
    id: 1602,
    lessonId: 16,
    themeId: "duyen-hai-mien-trung",
    difficulty: "thong-hieu",
    question: "Phương tiện đánh bắt thủy sản ven bờ hình tròn đặc trưng bằng tre dán dầu rái của ngư dân miền Trung là?",
    options: ["Thuyền thúng", "Ghe vỏ lãi", "Mô tô nước", "Tàu ngầm"],
    correctAnswer: 0,
    explanation: "Thuyền thúng tròn vừa nhỏ gọn, cơ động di chuyển qua sóng surf ven bờ vừa là nét văn hoá độc đáo của ngư dân miền Trung."
  },

  // BÀI 17: Văn hoá vùng Duyên hải miền Trung
  {
    id: 1701,
    lessonId: 17,
    themeId: "duyen-hai-mien-trung",
    difficulty: "nhan-biet",
    question: "Lễ hội đặc sắc của đồng bào Chăm ở miền Trung tưởng nhớ các vị thần và tổ tiên là?",
    options: ["Lễ hội Ka-tê", "Lễ hội Lồng tồng", "Lễ hội Gầu tào", "Lễ Mừng lúa mới"],
    correctAnswer: 0,
    explanation: "Lễ hội Ka-tê diễn ra vào tháng 7 lịch Chăm (tháng 10 dương lịch) tại các tháp Chăm (như Po Klong Garai) với điệu múa xòe quạt."
  },
  {
    id: 1702,
    lessonId: 17,
    themeId: "duyen-hai-mien-trung",
    difficulty: "van-dung",
    question: "Lễ Khao lề thế lính Hoàng Sa diễn ra tại huyện đảo Lý Sơn (Quảng Ngãi) mang ý nghĩa lịch sử sâu sắc gì?",
    options: [
      "Tri ân Hải đội Hoàng Sa năm xưa và khẳng định chủ quyền biển đảo thiêng liêng của Việt Nam",
      "Cầu mưa cho vụ lúa mùa",
      "Thi đua bơi thuyền thúng du lịch",
      "Khai trương mùa làm muối mới"
    ],
    correctAnswer: 0,
    explanation: "Lễ nghi từ thế kỷ XVII tri ân những người lính vâng lệnh triều đình cưỡi sóng ra quần đảo Hoàng Sa cắm mốc chủ quyền."
  },

  // BÀI 18: Cố đô Huế
  {
    id: 1801,
    lessonId: 18,
    themeId: "duyen-hai-mien-trung",
    difficulty: "nhan-biet",
    question: "Dòng sông thơ mộng chảy qua lòng thành phố Huế gắn liền với thắng cảnh núi Ngự Bình là?",
    options: ["Sông Hương", "Sông Hàn", "Sông Thu Bồn", "Sông Trà Khúc"],
    correctAnswer: 0,
    explanation: "Sông Hương núi Ngự là cặp biểu tượng danh thắng nổi tiếng nhất của vùng đất Cố đô Huế."
  },
  {
    id: 1802,
    lessonId: 18,
    themeId: "duyen-hai-mien-trung",
    difficulty: "thong-hieu",
    question: "Quần thể di tích Cố đô Huế bao gồm những công trình chính nào?",
    options: [
      "Kinh thành, Hoàng thành, Tử Cấm thành, các Lăng tẩm vua Nguyễn và Chùa Thiên Mụ",
      "Dinh Độc Lập và Bến Nhà Rồng",
      "Thành Cổ Loa và Đền Hùng",
      "Văn Miếu và Hoàng thành Thăng Long"
    ],
    correctAnswer: 0,
    explanation: "Cố đô Huế là kinh đô triều đại nhà Nguyễn (1802-1945) sở hữu quần thể kiến trúc hoàng gia đồ sộ bên sông Hương."
  },

  // BÀI 19: Phố cổ Hội An
  {
    id: 1901,
    lessonId: 19,
    themeId: "duyen-hai-mien-trung",
    difficulty: "nhan-biet",
    question: "Phố cổ Hội An nằm ở hạ lưu dòng sông nào thuộc tỉnh Quảng Nam?",
    options: ["Sông Thu Bồn", "Sông Tiền", "Sông Mã", "Sông Gianh"],
    correctAnswer: 0,
    explanation: "Đô thị cổ Hội An nằm bên bờ sông Thu Bồn, thế kỷ XVII - XVIII từng là thương cảng quốc tế sầm uất."
  },
  {
    id: 1902,
    lessonId: 19,
    themeId: "duyen-hai-mien-trung",
    difficulty: "thong-hieu",
    question: "Công trình kiến trúc độc đáo vắt qua lách nước nhỏ ở Hội An do thương nhân Nhật Bản xây dựng thế kỷ XVII là?",
    options: ["Chùa Cầu (Cầu Nhật Bản)", "Cầu Tràng Tiền", "Cầu Rồng", "Cầu Long Biên"],
    correctAnswer: 0,
    explanation: "Chùa Cầu là biểu tượng đặc sắc nhất của Hội An, kết hợp phong cách kiến trúc Nhật - Việt - Hoa."
  },

  // BÀI 20: Thiên nhiên vùng Tây Nguyên
  {
    id: 2001,
    lessonId: 20,
    themeId: "tay-nguyen",
    difficulty: "nhan-biet",
    question: "Tây Nguyên gồm bao nhiêu tỉnh và điểm đặc biệt về vị trí là gì?",
    options: [
      "5 tỉnh (Kon Tum, Gia Lai, Đắk Lắk, Đắk Nông, Lâm Đồng) và không giáp biển",
      "3 tỉnh và giáp biển Đông",
      "6 tỉnh và nằm ở miền Bắc",
      "4 tỉnh và nằm hoàn toàn ở đồng bằng"
    ],
    correctAnswer: 0,
    explanation: "Tây Nguyên gồm 5 tỉnh nằm ở phía Tây miền Trung, là vùng duy nhất nước ta không tiếp giáp với biển."
  },
  {
    id: 2002,
    lessonId: 20,
    themeId: "tay-nguyen",
    difficulty: "thong-hieu",
    question: "Địa hình đặc trưng của vùng Tây Nguyên là gì?",
    options: [
      "Các cao nguyên xếp tầng ở những độ cao khác nhau (Kon Tum, Pleiku, Đắk Lắk, Lâm Viên...)",
      "Đồng bằng bằng phẳng chạy dài đến chân núi",
      "Vùng đầm lầy ngập nước quanh năm",
      "Đảo và bán đảo ven bờ"
    ],
    correctAnswer: 0,
    explanation: "Tây Nguyên nổi bật với các bề mặt cao nguyên rộng lớn xếp tầng ở các độ cao 500m, 800m, 1500m so với mực nước biển."
  },

  // BÀI 21: Dân cư và sản xuất ở Tây Nguyên
  {
    id: 2101,
    lessonId: 21,
    themeId: "tay-nguyen",
    difficulty: "nhan-biet",
    question: "Thành phố Buôn Ma Thuột thuộc tỉnh Đắk Lắk nổi tiếng là thủ phủ của loại cây công nghiệp nào?",
    options: ["Cây Cà phê", "Cây Chè", "Cây Lúa nước", "Cây Dừa"],
    correctAnswer: 0,
    explanation: "Nhờ thổ nhưỡng đất đỏ ba-dan màu mỡ, Buôn Ma Thuột trở thành 'Thủ phủ Cà phê' của Việt Nam và xuất khẩu toàn cầu."
  },

  // BÀI 22: Văn hoá và truyền thống Tây Nguyên
  {
    id: 2201,
    lessonId: 22,
    themeId: "tay-nguyen",
    difficulty: "nhan-biet",
    question: "Ngôi nhà chung truyền thống có mái cao vút nằm ở trung tâm buôn làng của người Ba Na, Gia Rai là?",
    options: ["Nhà Rông", "Nhà Dài", "Nhà sàn Nam Bộ", "Nhà ngói 3 gian"],
    correctAnswer: 0,
    explanation: "Nhà Rông là trái tim văn hoá của buôn làng, nơi họp bàn việc làng, tổ chức lễ hội và tiếp khách quý."
  },
  {
    id: 2202,
    lessonId: 22,
    themeId: "tay-nguyen",
    difficulty: "thong-hieu",
    question: "Người anh hùng dân tộc Ba Na nổi tiếng ở làng Stơr (Gia Lai) lãnh đạo dân làng dùng nỏ chống Pháp là?",
    options: ["Anh hùng Núp", "N'Trang Lơng", "Trương Định", "Hoàng Diệu"],
    correctAnswer: 0,
    explanation: "Anh hùng Núp (Đinh Núp) chỉ huy dân làng Stơr đánh Pháp bằng nỏ và bẫy chông, được phong tặng danh hiệu Anh hùng LLVTND."
  },

  // BÀI 23: Lễ hội Cồng chiêng Tây Nguyên
  {
    id: 2301,
    lessonId: 23,
    themeId: "tay-nguyen",
    difficulty: "nhan-biet",
    question: "Không gian văn hoá Cồng chiêng Tây Nguyên được UNESCO công nhận là di sản thế giới vào năm nào?",
    options: ["Năm 2005", "Năm 1999", "Năm 2015", "Năm 2020"],
    correctAnswer: 0,
    explanation: "Năm 2005, Không gian văn hoá Cồng chiêng Tây Nguyên được vinh danh là Kiệt tác truyền khẩu và phi vật thể của nhân loại."
  },

  // BÀI 24: Thiên nhiên vùng Nam Bộ
  {
    id: 2401,
    lessonId: 24,
    themeId: "nam-bo",
    difficulty: "nhan-biet",
    question: "Ngọn núi cao nhất vùng Nam Bộ được mệnh danh là 'Nóc nhà Nam Bộ' (986m) nằm ở tỉnh Tây Ninh là?",
    options: ["Núi Bà Đen", "Núi Cấm", "Núi Chứa Chan", "Núi Ngự Bình"],
    correctAnswer: 0,
    explanation: "Núi Bà Đen tại Tây Ninh cao 986m là ngọn núi cao nhất vùng Nam Bộ."
  },
  {
    id: 2402,
    lessonId: 24,
    themeId: "nam-bo",
    difficulty: "thong-hieu",
    question: "Vùng Nam Bộ chia thành hai khu vực địa hình chính nào?",
    options: [
      "Đông Nam Bộ (đồi bình nguyên dốc thoai thoải) và Tây Nam Bộ (Đồng bằng sông Cửu Long)",
      "Cao nguyên đá và vùng ngập lũ",
      "Dãy núi dốc đứng và bãi cát ven biển",
      "Thung lũng sâu và đồi núi trọc"
    ],
    correctAnswer: 0,
    explanation: "Nam Bộ gồm Đông Nam Bộ có đồi bình nguyên lượn sóng nhẹ và Tây Nam Bộ là vùng đồng bằng phù sa mênh mông."
  },

  // BÀI 25: Dân cư và sản xuất Nam Bộ
  {
    id: 2501,
    lessonId: 25,
    themeId: "nam-bo",
    difficulty: "nhan-biet",
    question: "Vùng Đồng bằng sông Cửu Long thuộc Nam Bộ có vai trò kinh tế nông nghiệp nổi bật nào?",
    options: [
      "Vựa lúa, vựa trái cây và thuỷ sản lớn nhất Việt Nam",
      "Vùng trồng chè lớn nhất",
      "Nơi làm muối lớn nhất",
      "Vùng khai thác gỗ lớn nhất"
    ],
    correctAnswer: 0,
    explanation: "Nhờ đất phù sa màu mỡ và nguồn nước dồi dào, ĐBSCL là trung tâm sản xuất lúa gạo, cây ăn quả và thuỷ sản lớn nhất cả nước."
  },

  // BÀI 26: Văn hoá và truyền thống Nam Bộ
  {
    id: 2601,
    lessonId: 26,
    themeId: "nam-bo",
    difficulty: "nhan-biet",
    question: "Loại hình chợ độc đáo trên sông gắn liền với sinh hoạt sông nước ở Cần Thơ, Tiền Giang là?",
    options: ["Chợ nổi (như chợ nổi Cái Răng)", "Chợ phiên", "Chợ đêm", "Chợ nổi tiếng trên núi"],
    correctAnswer: 0,
    explanation: "Chợ nổi Cái Răng, Phong Điền... là nét sinh hoạt thương mại độc đáo nơi hàng hóa được treo trên cây 'bẹo' đầu thuyền."
  },
  {
    id: 2602,
    lessonId: 26,
    themeId: "nam-bo",
    difficulty: "thong-hieu",
    question: "Nữ tướng lãnh đạo phong trào Đồng Khởi năm 1960 tại Bến Tre là ai?",
    options: ["Bà Nguyễn Thị Định", "Bà Trương Thị Mai", "Bà Võ Thị Sáu", "Bà Nguyễn Thị Minh Khai"],
    correctAnswer: 0,
    explanation: "Nữ tướng Nguyễn Thị Định chỉ huy 'Đội quân tóc dài' lãnh đạo phong trào Đồng Khởi Bến Tre vang dội."
  },

  // BÀI 27: Thành phố Hồ Chí Minh
  {
    id: 2701,
    lessonId: 27,
    themeId: "nam-bo",
    difficulty: "nhan-biet",
    question: "Ngày 5/6/1911 tại Bến Nhà Rồng, sự kiện lịch sử trọng đại nào đã diễn ra?",
    options: [
      "Người thanh niên Nguyễn Tất Thành (Bác Hồ) ra đi tìm đường cứu nước",
      "Chiến thắng Điện Biên Phủ",
      "Giải phóng hoàn toàn miền Nam",
      "Khai mạc Đại hội Đảng"
    ],
    correctAnswer: 0,
    explanation: "Ngày 5/6/1911, Bác Hồ lấy tên Văn Ba xuống tàu Amiral Latouche-Tréville rời Bến Nhà Rồng bắt đầu hành trình cứu nước."
  },
  {
    id: 2702,
    lessonId: 27,
    themeId: "nam-bo",
    difficulty: "thong-hieu",
    question: "Thành phố Sài Gòn - Gia Định chính thức vinh dự mang tên Thành phố Hồ Chí Minh từ năm nào?",
    options: ["Năm 1976", "Năm 1945", "Năm 1954", "Năm 1986"],
    correctAnswer: 0,
    explanation: "Tháng 7 năm 1976, Quốc hội nước Việt Nam thống nhất quyết định chính thức đổi tên thành Thành phố Hồ Chí Minh."
  },

  // BÀI 28: Địa đạo Củ Chi
  {
    id: 2801,
    lessonId: 28,
    themeId: "nam-bo",
    difficulty: "nhan-biet",
    question: "Địa đạo Củ Chi có tổng chiều dài đường hầm ngầm trong lòng đất khoảng bao nhiêu km?",
    options: ["Khoảng 250 km", "Khoảng 50 km", "Khoảng 10 km", "Khoảng 1000 km"],
    correctAnswer: 0,
    explanation: "Kỳ tích Địa đạo Củ Chi gồm hệ thống đường hầm bí mật dài khoảng 250 km đan xỏ nhiều tầng trong lòng đất."
  },
  {
    id: 2802,
    lessonId: 28,
    themeId: "nam-bo",
    difficulty: "thong-hieu",
    question: "Bếp đun nấu cải tiến thông minh trong địa đạo Củ Chi không để lộ khói lên mặt đất có tên là gì?",
    options: ["Bếp Hoàng Cầm", "Bếp ga mini", "Bếp điện từ", "Bếp than tổ xông"],
    correctAnswer: 0,
    explanation: "Bếp Hoàng Cầm tản khói qua các rãnh đất ẩm làm khói tan biến không để máy bay địch phát hiện."
  },

  // BÀI 29: Ôn tập tổng hợp toàn bộ chương trình Lịch sử và Địa lí Lớp 4
  {
    id: 2901,
    lessonId: 29,
    themeId: "mo-dau",
    difficulty: "van-dung",
    question: "Qua chương trình Lịch sử & Địa lí 4, học sinh rút ra bài học sâu sắc nhất về trách nhiệm bản thân là gì?",
    options: [
      "Yêu quê hương đất nước, tự hào về truyền thống dân tộc, có ý thức học tập tốt và bảo vệ môi trường",
      "Chỉ cần đi du lịch khắp nơi mà không cần học hành",
      "Không quan tâm tới lịch sử và di sản của tổ tiên",
      "Chỉ tập trung chơi điện tử sau giờ học"
    ],
    correctAnswer: 0,
    explanation: "Môn Lịch sử & Địa lí 4 bồi dưỡng tình yêu quê hương đất nước, lòng tự hào dân tộc và ý thức trách nhiệm xây dựng đất nước."
  },
  {
    id: 2902,
    lessonId: 29,
    themeId: "mo-dau",
    difficulty: "van-dung",
    question: "Chủ quyền biển đảo thiêng liêng Việt Nam bao gồm hai quần đảo xa bờ trọng yếu nào?",
    options: [
      "Quần đảo Hoàng Sa và Quần đảo Trường Sa",
      "Quần đảo Cát Bà và Côn Đảo",
      "Quần đảo Phú Quốc và Lý Sơn",
      "Quần đảo Hòn Tre và Hòn Đồi"
    ],
    correctAnswer: 0,
    explanation: "Hoàng Sa (thuộc Đà Nẵng) và Trường Sa (thuộc Khánh Hòa) là hai quần đảo thuộc chủ quyền không thể tranh cãi của Việt Nam."
  },
  {
    id: 2903,
    lessonId: 29,
    themeId: "mo-dau",
    difficulty: "van-dung",
    question: "Việc sử dụng hợp lý tài nguyên thiên nhiên (đất, nước, rừng) mang lại lợi ích gì?",
    options: [
      "Phát triển bền vững, giữ gìn môi trường sống cho mai sau",
      "Khai thác hết tài nguyên nhanh chóng để lấy tiền",
      "Không ảnh hưởng tới tương lai",
      "Chỉ làm chậm sự phát triển kinh tế"
    ],
    correctAnswer: 0,
    explanation: "Sử dụng bền vững tài nguyên bảo vệ môi trường, hạn chế thiên tai lũ lụt sạt lở và duy trì tài nguyên cho thế hệ tương lai."
  }
];
