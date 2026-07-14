import { Block, Lead, Prose, Card, Bullets, Shot } from "./ui";
import img1 from "../../assets/proofs/bt4-img1.png";
import img2 from "../../assets/proofs/bt4-img2.png";
import img3 from "../../assets/proofs/bt4-img3.png";
import img4 from "../../assets/proofs/bt4-img4.png";

const tools = [
  {
    jp: "計画",
    category: "Công cụ quản lí dự án",
    name: "Trello",
    img: { src: img1, caption: "Bảng Trello quản lí công việc nhóm" },
    tasks: [
      "Tạo mục kế hoạch kèm deadline",
      "Cập nhật, tick hoàn thành công việc",
      "Theo dõi và nhận thông báo",
    ],
    good: [
      "Dễ thao tác, thân thiện với học sinh – sinh viên",
      "Nhận thông báo nhắc nhở",
      "Chia phần việc rõ ràng",
    ],
    limit: [
      "Giao diện rối (thẻ/danh sách khó tìm khi nhiều)",
      "Bản free giới hạn (cần premium)",
    ],
    fix: [
      "Check thường xuyên và tick hoàn thành",
      "Dùng Filter và Label",
    ],
  },
  {
    jp: "文書",
    category: "Công cụ soạn thảo tài liệu",
    name: "Google Docs",
    img: { src: img2, caption: "Bảng phân công nhiệm vụ trên Google Docs" },
    tasks: [
      "Soạn script bài nhóm",
      "Chia sẻ cho thành viên chỉnh sửa",
      "Đóng góp nội dung",
    ],
    good: [
      "Comment tại chỗ",
      "Lịch sử chỉnh sửa",
      "Bảo mật cao (chỉ người có link)",
    ],
    limit: [
      "Nhiều người sửa cùng lúc gây lag/lệch font",
      "Quá tải; định trang/tạo bảng bất tiện",
    ],
    fix: [
      "Thống nhất tiêu chuẩn định dạng (font/cỡ/giãn dòng)",
      "Nhắc thành viên không nhiệm vụ hạn chế truy cập",
    ],
  },
  {
    jp: "保存",
    category: "Công cụ lưu trữ và chia sẻ tệp",
    name: "Google Drive",
    img: { src: img3, caption: "Thư mục chia sẻ trên Google Drive" },
    tasks: [
      "Lập file, đặt tên thư mục rõ ràng",
      "Gửi nội dung/video/tham khảo vào drive nhóm",
    ],
    good: [
      "Chia sẻ, phân quyền tinh gọn (đường liên kết)",
      "15GB miễn phí",
      "Đa nền tảng (Android/iOS)",
    ],
    limit: [
      "Tốc độ upload/download file nặng chưa tối ưu (lỗi file)",
    ],
    fix: [
      "Chia file nhỏ",
      "Đặt tên file rõ ràng theo tên nhóm/đề tài",
    ],
  },
  {
    jp: "会議",
    category: "Công cụ giao tiếp nhóm",
    name: "Microsoft Teams",
    img: { src: img4, caption: "Kênh nhóm học tập trên Microsoft Teams" },
    tasks: [
      "Họp nhóm bàn kế hoạch/nội dung",
      "Gọi, chia sẻ ý kiến",
    ],
    good: [
      "Breakout rooms, Whiteboard, phụ đề tự động, khử tiếng ồn AI",
      "Ghi âm lưu đám mây",
      "Bảo mật tốt",
    ],
    limit: [
      "Nhiều tính năng khó thao tác",
      "Thông báo không tốt (quá hạn không nhắc)",
      "Dễ lag/nghẽn khi đông",
    ],
    fix: [
      "Dùng bản web",
      "Check thông báo thường xuyên, tắt bớt kênh không quan trọng",
    ],
  },
];

export function Bt4() {
  return (
    <>
      <Lead>
        <strong>Báo cáo cá nhân các công cụ đã sử dụng.</strong> Bốn công cụ số dùng
        trong học tập và làm việc nhóm, phân tích theo: tác vụ – hiệu quả – hạn chế
        – cách giải quyết.
      </Lead>

      {tools.map((t) => (
        <Block key={t.name} jp={t.jp} title={`${t.category}: ${t.name}`}>
          <Shot src={t.img.src} caption={t.img.caption} />
          <Card>
            <div className="space-y-4">
              <div>
                <p className="font-serif text-espresso">Các tác vụ</p>
                <Bullets items={t.tasks} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="font-serif text-espresso">Hiệu quả (+)</p>
                  <Bullets items={t.good} />
                </div>
                <div>
                  <p className="font-serif text-espresso">Hạn chế (+)</p>
                  <Bullets items={t.limit} />
                </div>
              </div>
              <div>
                <p className="font-serif text-espresso">Cách giải quyết (→)</p>
                <Bullets items={t.fix} />
              </div>
            </div>
          </Card>
        </Block>
      ))}

      <Block jp="まとめ" title="Tóm lại">
        <Prose>
          Mỗi công cụ có ưu và nhược điểm riêng; cần khai thác ưu điểm và giảm thiểu
          nhược điểm. Kết hợp các công cụ một cách khoa học giúp làm việc nhóm hiệu
          quả, đẩy nhanh tiến độ và tránh sai sót.
        </Prose>
      </Block>
    </>
  );
}
