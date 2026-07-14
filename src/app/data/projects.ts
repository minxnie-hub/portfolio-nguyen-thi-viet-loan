export interface Project {
  id: string;
  code: string;
  title: string;
  kicker: string;
  summary: string;
  tags: string[];
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "bt1",
    code: "BÀI 1",
    title: "Quản lý tệp tin & thư mục trên Windows",
    kicker: "Kỹ năng số cơ bản",
    summary:
      "Thực hành các thao tác nền tảng với File Explorer: tạo cây thư mục, đổi tên, sao chép, di chuyển, xoá và khôi phục tệp tin.",
    tags: ["Windows", "File Explorer", "Recycle Bin"],
    highlights: [
      "Tạo thư mục thực hành ThucHanh_NguyenThiVietLoan",
      "Tạo, đổi tên, sao chép & di chuyển các tệp .txt",
      "Xoá tạm thời, xoá vĩnh viễn và khôi phục từ Thùng rác",
    ],
  },
  {
    id: "bt2",
    code: "BÀI 2",
    title: "Từ ngoại lai (Gairaigo) trong tiếng Nhật",
    kicker: "Tìm kiếm & đánh giá nguồn tài liệu",
    summary:
      "Báo cáo nghiên cứu về hiện tượng vay mượn từ ngoại lai (外来語) và ảnh hưởng của nó đến người học tiếng Nhật ở Việt Nam.",
    tags: ["Nghiên cứu", "外来語", "Đánh giá nguồn"],
    highlights: [
      "Tổng hợp & phân tích hiện tượng gairaigo trong tiếng Nhật",
      "Đánh giá độ tin cậy của 10 nguồn tài liệu tham khảo",
      "Rút ra ảnh hưởng thực tế tới người học Việt Nam",
    ],
  },
  {
    id: "bt3",
    code: "BÀI 3",
    title: "Thử nghiệm & phân tích Prompt trong học tập",
    kicker: "Prompt Engineering",
    summary:
      "So sánh prompt cơ bản – cải tiến – nâng cao khi làm việc với ChatGPT và đúc kết nguyên tắc viết prompt hiệu quả.",
    tags: ["ChatGPT", "Prompting", "So sánh"],
    highlights: [
      "Thử nghiệm 3 cấp độ prompt trên cùng một chủ đề",
      "Lập bảng so sánh chất lượng phản hồi",
      "Đúc kết nguyên tắc viết prompt rõ ràng & hiệu quả",
    ],
  },
  {
    id: "bt4",
    code: "BÀI 4",
    title: "Báo cáo các công cụ số đã sử dụng",
    kicker: "Công cụ cộng tác",
    summary:
      "Đánh giá cá nhân về Trello, Google Docs, Google Drive và Microsoft Teams theo nhiệm vụ, hiệu quả, hạn chế và giải pháp.",
    tags: ["Trello", "Google Workspace", "MS Teams"],
    highlights: [
      "Trello cho quản lý dự án & Google Docs cho soạn thảo",
      "Google Drive lưu trữ, Teams cho trao đổi nhóm",
      "Phân tích hiệu quả – hạn chế – hướng khắc phục",
    ],
  },
  {
    id: "bt5",
    code: "BÀI 5",
    title: "Ứng dụng AI tạo sinh trong sáng tạo nội dung số",
    kicker: "Generative AI",
    summary:
      'Dự án blog & infographic "Bản chất của Thời gian: Sự giao thoa giữa Vật lý và Triết học" với Gemini, DALL·E 3 và Canva.',
    tags: ["Gemini", "DALL·E 3", "Canva"],
    highlights: [
      "Viết blog cùng Google Gemini",
      "Tạo hình ảnh minh hoạ bằng DALL·E 3",
      "Thiết kế infographic với Canva Magic Design",
    ],
  },
  {
    id: "bt6",
    code: "BÀI 6",
    title: "Sử dụng AI có trách nhiệm & đạo đức",
    kicker: "AI Ethics",
    summary:
      "Xây dựng quy trình human-in-the-loop và bộ 6 nguyên tắc cá nhân để dùng AI một cách có trách nhiệm trong học tập.",
    tags: ["Đạo đức AI", "Human-in-the-loop", "Trách nhiệm"],
    highlights: [
      "Tìm hiểu chính sách sử dụng AI của nhà trường",
      "Thiết kế quy trình làm việc có con người kiểm soát",
      "Bộ 6 nguyên tắc: Nghĩ trước – Trợ lý không phải tác giả – Kiểm chứng 100% – Minh bạch – Bảo mật – Chịu trách nhiệm",
    ],
  },
];
