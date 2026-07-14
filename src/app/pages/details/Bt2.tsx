import { Block, Lead, Prose, Card, DataTable, Bullets } from "./ui";

const reliability = [
  ["1", "Trương Thị Mai (2024)", "Giảng viên", "ĐH Hà Nội", "Phân tích", "Có", "Mới", "Rất cao"],
  ["2", "Nghiên cứu gairaigo", "SV/giảng viên", "ĐH", "Phân tích", "Có", "Khá mới", "Cao"],
  ["3", "Watanabe (2018)", "Nhà nghiên cứu", "Quốc tế", "Thực nghiệm", "Nhiều", "Trung", "Rất cao"],
  ["4", "Murata (1994)", "Học giả", "Quốc tế", "Ngôn ngữ học", "Nhiều", "Cũ", "Cao"],
  ["5", "Bond (1996)", "Nhà nghiên cứu", "Quốc tế", "NLP", "Nhiều", "Cũ", "Cao"],
  ["6", "Giáo trình", "NXB", "Giáo dục", "Tổng hợp", "Có", "Trung", "Cao"],
  ["7", "Luận án", "NCS", "ĐH", "Nghiên cứu", "Có", "Mới", "Cao"],
  ["8", "Tiểu luận", "Sinh viên", "Trường", "Đơn giản", "Ít", "Mới", "Trung"],
  ["9", "Website thư viện", "Tổ chức", "ĐH", "Tổng hợp", "Không rõ", "Mới", "Trung"],
  ["10", "Ebook", "Không rõ", "Internet", "Tổng hợp", "Ít", "Không rõ", "Trung"],
];

const summary = [
  ["1", "Trương Thị Mai (2024)", "Bài báo", "Giảng dạy tiếng Nhật", "Rất cao"],
  ["2", "Gairaigo", "Bài báo", "Từ ngoại lai", "Cao"],
  ["3", "Watanabe (2018)", "Quốc tế", "Ngôn ngữ", "Rất cao"],
  ["4", "Murata (1994)", "Quốc tế", "Danh từ", "Cao"],
  ["5", "Bond (1996)", "Quốc tế", "Dịch thuật", "Cao"],
  ["6", "Giáo trình", "Sách", "Ngữ pháp", "Cao"],
  ["7", "Luận án", "NCS", "Ngữ dụng", "Cao"],
  ["8", "Tiểu luận", "SV", "So sánh", "Trung"],
  ["9", "Website", "Internet", "Tổng hợp", "Trung"],
  ["10", "Ebook", "Internet", "Học tập", "Trung"],
];

const references = [
  "Trương Thị Mai (2024), “Nghiên cứu cải tiến tài liệu giảng dạy lí thuyết tiếng Nhật”, ĐH Hà Nội.",
  "Watanabe, H. (2018), “Empirical observations of language change”.",
  "Murata, M. & Nagao, M. (1994), “Determination of referential property in Japanese”.",
  "Bond, F. et al. (1996), “Japanese-English Translation Studies”.",
  "Luận án ngữ dụng học Việt – Nhật (2024).",
  "Giáo trình Ngôn ngữ học đại cương.",
  "Tài liệu tiếng Nhật tổng hợp từ thư viện đại học.",
];

export function Bt2() {
  return (
    <>
      <Lead>
        <strong>Báo cáo tìm kiếm và đánh giá nguồn tài liệu.</strong> Chủ đề: Hiện
        tượng vay mượn từ ngoại lai (gairaigo) trong tiếng Nhật và ảnh hưởng đến
        người học Việt Nam.
      </Lead>

      <Block jp="研究テーマ" title="I. Đề tài nghiên cứu">
        <Prose>
          Trong bối cảnh toàn cầu hóa, hiện tượng gairaigo (từ ngoại lai) ngày càng
          phổ biến trong tiếng Nhật và trở thành một thách thức đối với sinh viên
          ngành Ngôn ngữ Nhật tại Việt Nam. Mục đích của báo cáo là tìm kiếm, tổng
          hợp và đánh giá các nguồn tài liệu liên quan đến hiện tượng này.
        </Prose>
      </Block>

      <Block jp="検索方法" title="II. Phương pháp tìm kiếm">
        <Bullets
          items={[
            "Cơ sở dữ liệu học thuật (Google Scholar, thư viện đại học).",
            "Tạp chí khoa học chuyên ngành.",
            "Sách và giáo trình.",
            "Luận văn, luận án.",
            "Nguồn internet học thuật.",
          ]}
        />
      </Block>

      <Block jp="内容概要" title="III. Tổng quan nội dung">
        <Card title="1. Khái niệm gairaigo">
          <Prose>
            Gairaigo (外来語) là lớp từ mà tiếng Nhật vay mượn từ ngôn ngữ nước
            ngoài, ví dụ テレビ (television), アルバイト (arbeit – tiếng Đức), パン
            (pão – tiếng Bồ Đào Nha). Cần phân biệt với 和語 (wago – từ thuần Nhật)
            và 漢語 (kango – từ gốc Hán).
          </Prose>
        </Card>

        <Card title="2. Đặc điểm ngôn ngữ">
          <div className="space-y-3 text-cocoa/85" style={{ lineHeight: 1.7 }}>
            <p>
              <strong>a. Biến đổi ngữ âm:</strong> “strike” → ストライク
              (sutoraiku), “coffee” → コーヒー (koohii); thêm nguyên âm, không có
              phụ âm cuối trừ “n”, kéo dài nguyên âm.
            </p>
            <p>
              <strong>b. Biến đổi ngữ nghĩa / wasei-eigo:</strong> マンション
              (mansion → chung cư), サラリーマン (salaryman → nhân viên văn phòng).
            </p>
            <p>
              <strong>c. Hình thức chữ viết:</strong> chủ yếu viết bằng Katakana.
            </p>
            <p>
              <strong>d. Phạm vi sử dụng:</strong> Công nghệ (コンピュータ,
              インターネット), Thời trang (ファッション, ブランド), Đời sống
              (レストラン, スーパー).
            </p>
          </div>
        </Card>

        <Card title="3. Vai trò gairaigo hiện đại &amp; 4. Ảnh hưởng đến người học Việt Nam">
          <div className="space-y-3 text-cocoa/85" style={{ lineHeight: 1.7 }}>
            <p>
              <strong>a. Thuận lợi:</strong> nhiều từ gần với tiếng Anh nên dễ đoán
              nghĩa (テレビ → TV, ホテル → hotel).
            </p>
            <p>
              <strong>b. Khó khăn:</strong> phát âm sai, hiểu sai nghĩa của
              wasei-eigo, lạm dụng tiếng Anh.
            </p>
            <p>
              <strong>c. Nguyên nhân:</strong> khác biệt hệ thống ngữ âm và cách
              vay mượn không theo quy luật cố định.
            </p>
          </div>
        </Card>

        <Card title="5. Ý nghĩa với việc học &amp; 6. Nhận xét tổng hợp">
          <Prose>
            Hiểu rõ gairaigo giúp người học tiếp cận từ vựng hiện đại nhanh hơn, đồng
            thời tránh được các lỗi phát âm và hiểu nghĩa thường gặp.
          </Prose>
        </Card>
      </Block>

      <Block jp="信頼性評価" title="IV. Đánh giá độ tin cậy">
        <DataTable
          head={[
            "STT",
            "Nguồn",
            "Tác giả",
            "Cơ quan",
            "Phương pháp",
            "Trích dẫn",
            "Cập nhật",
            "Độ tin cậy",
          ]}
          rows={reliability}
        />
        <Prose>
          <strong>2. Phân tích chi tiết theo tiêu chí:</strong> (a) Tác giả, (b) Cơ
          quan xuất bản, (c) Phương pháp, (d) Trích dẫn, (e) Tính cập nhật.
        </Prose>
      </Block>

      <Block jp="情報源一覧" title="V. Bảng tổng hợp nguồn thông tin">
        <DataTable
          head={["STT", "Tên tài liệu", "Loại", "Nội dung chính", "Độ tin cậy"]}
          rows={summary}
        />
      </Block>

      <Block jp="結論" title="VI. Kết luận">
        <Prose>
          Gairaigo là bộ phận quan trọng và không thể thiếu của tiếng Nhật hiện đại.
          Việc tìm kiếm và đánh giá nguồn tài liệu một cách hệ thống giúp người học
          nắm chắc kiến thức và sử dụng từ ngoại lai chính xác hơn.
        </Prose>
      </Block>

      <Block jp="参考文献" title="VII. Tài liệu tham khảo">
        <Card>
          <ol className="list-decimal space-y-2 pl-5 text-cocoa/85" style={{ lineHeight: 1.6 }}>
            {references.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ol>
        </Card>
      </Block>
    </>
  );
}
