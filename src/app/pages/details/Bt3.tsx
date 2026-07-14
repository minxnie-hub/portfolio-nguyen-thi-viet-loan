import { Block, Lead, Prose, Card, DataTable, Bullets, Shots } from "./ui";
import img1 from "../../assets/proofs/bt3-img1.png";
import img2 from "../../assets/proofs/bt3-img2.png";
import img3 from "../../assets/proofs/bt3-img3.png";
import img4 from "../../assets/proofs/bt3-img4.png";
import img5 from "../../assets/proofs/bt3-img5.png";
import img6 from "../../assets/proofs/bt3-img6.png";
import img7 from "../../assets/proofs/bt3-img7.png";
import img8 from "../../assets/proofs/bt3-img8.png";
import img9 from "../../assets/proofs/bt3-img9.png";
import img10 from "../../assets/proofs/bt3-img10.png";
import img11 from "../../assets/proofs/bt3-img11.png";
import img12 from "../../assets/proofs/bt3-img12.png";
import img13 from "../../assets/proofs/bt3-img13.png";

const tasks = [
  {
    name: "1. Tóm tắt một bài đọc / tài liệu học thuật",
    basic:
      "“hãy tóm tắt văn bản sau một cách ngắn gọn và dễ hiểu: …” (đơn giản, ngắn gọn).",
    basicImgs: [{ src: img1, caption: "Prompt cơ bản trên ChatGPT" }],
    improved:
      "“Hãy tóm tắt văn bản sau theo các yêu cầu: độ dài 150-200 từ; sử dụng ngôn ngữ học thuật, rõ ràng; giữ lại các ý chính; không thêm thông tin bên ngoài.”",
    improvedImgs: [
      { src: img2, caption: "Prompt cải tiến — yêu cầu chi tiết" },
      { src: img3, caption: "Kết quả tóm tắt (tiếp)" },
    ],
    advanced:
      "“Bạn là một giảng viên đại học có chuyên môn, chuyên hướng dẫn đọc hiểu học thuật. Nhiệm vụ: 1. Xác định chủ đề chính văn bản; 2. Tóm tắt các luận điểm quan trọng theo dạng bullet points; 3. Viết lại thành một đoạn tóm tắt hoàn chỉnh (150-200 từ). Yêu cầu: Giữ tính chính xác học thuật, loại bỏ chi tiết không cần thiết, diễn đạt logic, mạch lạc.”",
    advancedImgs: [
      { src: img4, caption: "Prompt nâng cao — gán vai trò + các bước" },
      { src: img5, caption: "Kết quả có cấu trúc (tiếp)" },
    ],
  },
  {
    name: "2. Giải thích một khái niệm phức tạp",
    basic: "“hãy giải thích khái niệm sau một cách ngắn gọn, dễ hiểu: Biến đổi khí hậu”.",
    basicImgs: [{ src: img6, caption: "Prompt cơ bản — giải thích ngắn gọn" }],
    improved:
      "“Hãy giải thích khái niệm sau: Biến đổi khí hậu. Yêu cầu: độ dài 150-200 từ; so sánh với một khái niệm tương tự (nếu có); giải thích dễ hiểu cho sinh viên năm nhất; có ví dụ minh họa cụ thể.”",
    improvedImgs: [{ src: img7, caption: "Prompt cải tiến — có ràng buộc" }],
    advanced:
      "“Bạn là một giảng viên đại học chuyên giảng dạy cho sinh viên mới bắt đầu. Hãy giải thích khái niệm: Biến đổi khí hậu. Thực hiện theo các bước: Định nghĩa khái niệm bằng ngôn ngữ đơn giản; Phân tích từng thành phần của khái niệm; Đưa ra ví dụ thực tế; So sánh với khái niệm tương tự hoặc dễ nhầm lẫn; Kết luận ngắn gọn.”",
    advancedImgs: [
      { src: img8, caption: "Prompt nâng cao — các bước (định nghĩa)" },
      { src: img9, caption: "Phân tích, ví dụ, so sánh, kết luận" },
    ],
  },
  {
    name: "3. Tạo bộ câu hỏi ôn tập cho một chủ đề",
    basic: "“Hãy tạo câu hỏi ôn tập cho chủ đề sau: Môi trường”.",
    basicImgs: [{ src: img10, caption: "Prompt cơ bản — tạo câu hỏi" }],
    improved:
      "“Hãy tạo bộ câu hỏi ôn tập cho chủ đề: Môi trường. Yêu cầu: 5 câu trắc nghiệm (có đáp án); 3 câu tự luận; bao phủ các nội dung quan trọng; mức độ từ dễ đến trung bình.”",
    improvedImgs: [
      { src: img11, caption: "Prompt cải tiến — trắc nghiệm có đáp án" },
      { src: img12, caption: "Câu hỏi tiếp theo (câu 2–3)" },
    ],
    advanced:
      "“Bạn là một giảng viên đại học thiết kế đề kiểm tra. Hãy tạo bộ câu hỏi ôn tập cho chủ đề: Môi trường. Yêu cầu: 5 câu trắc nghiệm (4 lựa chọn, có đáp án và giải thích); 3 câu tự luận (kèm gợi ý trả lời); phân loại theo mức độ tư duy (Bloom): Nhớ (Remember), Hiểu (Understand), Vận dụng (Apply); trình bày rõ ràng, logic, phù hợp với sinh viên đại học.”",
    advancedImgs: [
      { src: img13, caption: "Prompt nâng cao — phân loại theo Bloom" },
    ],
  },
];

const analysis = [
  {
    title: "1. Prompt cơ bản (Basic Prompt)",
    feature: "Ngắn gọn, ít ràng buộc; không quy định rõ đầu ra.",
    good: ["Dễ viết, nhanh", "Phù hợp với yêu cầu đơn giản"],
    limit: [
      "Kết quả thiếu nhất quán",
      "Dễ bỏ sót thông tin quan trọng",
      "Phụ thuộc nhiều vào cách hiểu của AI",
    ],
    conclusion:
      "Hiệu quả thấp trong các nhiệm vụ học thuật yêu cầu độ chính xác và cấu trúc cao.",
  },
  {
    title: "2. Prompt cải tiến (Structured Prompt)",
    feature: "Yêu cầu rõ ràng (độ dài, nội dung, format); có cấu trúc (bullet points, tiêu chí).",
    good: [
      "Kết quả đầy đủ và ổn định hơn",
      "Giảm sai lệch thông tin",
      "Dễ kiểm soát chất lượng đầu ra",
    ],
    limit: [
      "Vẫn thiếu định hướng tư duy sâu",
      "Chưa tận dụng hết khả năng reasoning của AI",
    ],
    conclusion:
      "Hiệu quả tốt cho học tập, đặc biệt với các nhiệm vụ như tóm tắt và tạo câu hỏi.",
  },
  {
    title: "3. Prompt nâng cao (Advanced Prompt – Prompt Engineering)",
    feature:
      "Role prompting (gán vai trò); Step-by-step / chain-of-thought; Structured output; Constraint rõ ràng.",
    good: [
      "Kết quả sâu sắc, logic hơn",
      "Phản ánh tư duy học thuật rõ ràng",
      "Giảm lỗi và tăng tính nhất quán",
    ],
    limit: ["Mất thời gian thiết kế", "Có thể dư thừa nếu bài toán đơn giản"],
    conclusion:
      "Hiệu quả cao nhất, đặc biệt trong các nhiệm vụ phân tích, giải thích và thiết kế câu hỏi.",
  },
];

const principles = [
  ["1. Cụ thể hóa yêu cầu", "Không tốt: “Tóm tắt văn bản”. Tốt: “Tóm tắt 150 từ, giữ ý chính, không thêm thông tin”. Càng cụ thể thì kết quả càng chính xác."],
  ["2. Sử dụng cấu trúc rõ ràng", "Bullet points, Steps, Format đầu ra — giúp AI hiểu rõ nhiệm vụ và tổ chức thông tin tốt hơn."],
  ["3. Gán vai trò (Role Prompting)", "Ví dụ: “Bạn là giảng viên đại học”, “Bạn là chuyên gia ngôn ngữ” — làm tăng chất lượng và độ phù hợp của câu trả lời."],
  ["4. Chia nhỏ nhiệm vụ (Step-by-step)", "Định nghĩa → Phân tích → Ví dụ — giúp AI reasoning tốt hơn."],
  ["5. Đặt ràng buộc (Constraints)", "Độ dài, số lượng ý, định dạng — tránh output lan man hoặc thiếu ý."],
  ["6. Xác định đối tượng người đọc", "Ví dụ: Sinh viên năm nhất, người mới học — giúp điều chỉnh mức độ khó phù hợp."],
  ["7. Yêu cầu định dạng đầu ra", "Bảng, Bullet, Đoạn văn — tăng tính rõ ràng và dễ sử dụng."],
];

export function Bt3() {
  return (
    <>
      <Lead>
        <strong>Báo cáo thử nghiệm và phân tích prompt trong học tập.</strong> Thử
        nghiệm ba cấp độ prompt (cơ bản, cải tiến, nâng cao) với ChatGPT trên ba
        nhiệm vụ học tập, phân tích hiệu quả và rút ra nguyên tắc viết prompt.
      </Lead>

      <Block jp="実験" title="I. Thử nghiệm các prompt với một công cụ AI (như ChatGPT)">
        <div className="space-y-4">
          {tasks.map((t) => (
            <Card key={t.name} title={t.name}>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    Prompt cơ bản (đơn giản, ngắn gọn)
                  </p>
                  <p className="mt-1 italic text-cocoa/80">{t.basic}</p>
                  <div className="mt-3">
                    <Shots items={t.basicImgs} />
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    Prompt cải tiến (chi tiết hơn, có cấu trúc)
                  </p>
                  <p className="mt-1 italic text-cocoa/80">{t.improved}</p>
                  <div className="mt-3">
                    <Shots items={t.improvedImgs} />
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    Prompt nâng cao (role prompting, chain-of-thought, few-shot)
                  </p>
                  <p className="mt-1 italic text-cocoa/80">{t.advanced}</p>
                  <div className="mt-3">
                    <Shots items={t.advancedImgs} />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Block>

      <Block jp="分析" title="II. Phân tích hiệu quả của các loại prompt">
        <Prose>
          Kết quả thử nghiệm cho thấy hiệu quả của prompt phụ thuộc chủ yếu vào mức
          độ cụ thể, cấu trúc và định hướng tư duy mà prompt cung cấp cho mô hình
          AI.
        </Prose>
        <div className="space-y-4">
          {analysis.map((a) => (
            <Card key={a.title} title={a.title}>
              <p className="text-cocoa/85" style={{ lineHeight: 1.7 }}>
                {a.feature}
              </p>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="mb-1 font-serif text-espresso">Ưu điểm</p>
                  <Bullets items={a.good} />
                </div>
                <div>
                  <p className="mb-1 font-serif text-espresso">Hạn chế</p>
                  <Bullets items={a.limit} />
                </div>
              </div>
              <p className="mt-3 text-cocoa/85">
                <strong>Kết luận:</strong> {a.conclusion}
              </p>
            </Card>
          ))}
        </div>
      </Block>

      <Block jp="比較表" title="III. Bảng so sánh các loại prompt và kết quả">
        <DataTable
          head={["Tiêu chí", "Prompt cơ bản", "Prompt cải tiến", "Prompt nâng cao"]}
          rows={[
            ["Độ rõ ràng", "Thấp", "Trung bình", "Cao"],
            ["Kiểm soát đầu ra", "Thấp", "Trung bình", "Cao"],
            ["Độ chính xác", "Trung bình", "Cao", "Rất cao"],
            ["Tính logic", "Thấp", "Trung bình", "Cao"],
            ["Tính học thuật", "Thấp", "Trung bình", "Cao"],
            ["Độ ổn định", "Thấp", "Cao", "Rất cao"],
            ["Độ khó khi viết", "Dễ", "Trung bình", "Khó"],
          ]}
        />
      </Block>

      <Block jp="原則" title="IV. Nguyên tắc viết prompt hiệu quả">
        <div className="space-y-3">
          {principles.map(([title, desc]) => (
            <Card key={title} title={title}>
              <p className="text-cocoa/85" style={{ lineHeight: 1.7 }}>
                {desc}
              </p>
            </Card>
          ))}
        </div>
      </Block>

      <Block jp="コツ" title="V. Mẹo viết prompt hiệu quả">
        <Bullets
          items={[
            "Luôn kiểm tra lại prompt trước khi dùng",
            "Bắt đầu đơn giản → cải tiến dần",
            "Kết hợp nhiều kỹ thuật (role + structure + constraint)",
            "Tránh prompt mơ hồ, thiếu mục tiêu",
            "Không yêu cầu quá nhiều thứ trong một prompt nếu không cần",
          ]}
        />
      </Block>

      <Block jp="結論" title="VI. Kết luận">
        <Prose>
          Qua quá trình thử nghiệm, có thể khẳng định rằng chất lượng của prompt ảnh
          hưởng trực tiếp đến chất lượng đầu ra của AI. Prompt càng rõ ràng, có cấu
          trúc và định hướng tư duy, thì kết quả càng chính xác và mang tính học
          thuật cao. Do đó, việc rèn luyện kỹ năng viết prompt là một năng lực quan
          trọng trong học tập và nghiên cứu hiện đại.
        </Prose>
      </Block>
    </>
  );
}
