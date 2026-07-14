import { Block, Lead, Prose, Card, Bullets, Shots } from "./ui";
import img1 from "../../assets/proofs/bt6-img1.png";
import img2 from "../../assets/proofs/bt6-img2.png";

const principles = [
  ["1", "“Tư duy đi trước” (Think First, Prompt Later)"],
  ["2", "“Trợ lý, không phải Tác giả”"],
  ["3", "“Kiểm chứng 100%”"],
  ["4", "“Minh bạch tuyệt đối”"],
  ["5", "“Bảo mật dữ liệu”"],
  ["6", "“Chịu trách nhiệm cuối cùng”"],
];

export function Bt6() {
  return (
    <>
      <Lead>
        <strong>Báo cáo thực hành — Đề tài: Sử dụng trí tuệ nhân tạo (AI) có trách
        nhiệm và đạo đức trong học tập và nghiên cứu.</strong> Họ tên: Nguyễn Thị
        Việt Loan · MSV 25042185.
      </Lead>

      <Block jp="はじめに" title="Lời mở đầu">
        <Prose>
          Sự phát triển của các mô hình ngôn ngữ lớn (LLMs) như ChatGPT, Gemini,
          Claude đặt ra ranh giới giữa việc dùng AI như một trợ lý học tập và việc
          gian lận học thuật.
        </Prose>
      </Block>

      <Block jp="方針" title="I. Nghiên cứu chính sách trường">
        <Card title="1. Tóm tắt 3 điểm">
          <Bullets
            items={[
              "Không cấm đoán tuyệt đối (AI hỗ trợ brainstorming/tìm tài liệu).",
              "Quy định về Đạo văn (Plagiarism).",
              "Yêu cầu minh bạch (Declare prompt ở Phụ lục).",
            ]}
          />
        </Card>
        <Card title="2. Nhận định">
          <Prose>
            So với RMIT (thang 4 cấp), trường đang ở mức “Quản lý rủi ro cơ bản”.
          </Prose>
        </Card>
      </Block>

      <Block jp="実践" title="II. Thực hiện nhiệm vụ với AI">
        <Card title="1. Nhiệm vụ">
          <Prose>
            “Tổng hợp tài liệu và lập dàn ý chi tiết cho bài thuyết trình môn [Điền
            tên môn học] với chủ đề ‘Tác động của biến đổi khí hậu đến Đồng bằng sông
            Cửu Long’.”
          </Prose>
        </Card>
        <Card title="2. Công cụ Gemini — Prompt (Zero-shot)">
          <p className="italic text-cocoa/80">
            “Hãy đóng vai một chuyên gia môi trường tại Việt Nam. Lập một dàn ý chi
            tiết gồm 3 phần chính cho bài thuyết trình dài 10 phút về tác động của
            biến đổi khí hậu đến Đồng bằng sông Cửu Long. Yêu cầu: Tập trung vào xâm
            nhập mặn, sụt lún và đề xuất giải pháp thích ứng. Sử dụng giọng văn học
            thuật.”
          </p>
          <p className="mt-3 text-cocoa/85" style={{ lineHeight: 1.7 }}>
            <strong>Đầu ra (trích lược):</strong> I. Mở đầu; II. Tác động cốt lõi (1.
            Xâm nhập mặn; 2. Sụt lún đất); III. Giải pháp thích ứng (lúa-tôm, thủy
            lợi, hợp tác quốc tế).
          </p>
        </Card>
        <Card title="3. Human-in-the-loop">
          <Bullets
            items={[
              "Đánh giá kết quả.",
              "Chỉnh sửa & tích hợp: giữ khung 3 phần, tự tìm số liệu từ Bộ TN&MT, đổi “hợp tác quốc tế” → “Nghị quyết 120/NQ-CP”.",
              "Trích dẫn minh bạch.",
            ]}
          />
        </Card>
      </Block>

      <Block jp="倫理分析" title="III. Phân tích đạo đức">
        <Card title="1. Ranh giới hỗ trợ hợp lý vs gian lận">
          <Prose>
            Ghostwriting đặt ra câu hỏi: “Ai là tác giả thực sự của tư duy?”.
          </Prose>
        </Card>
        <Card title="2. Quyền sở hữu trí tuệ & trích dẫn">
          <Prose>
            Rủi ro “Ảo giác” (Hallucination); trách nhiệm giải trình — sinh viên chịu
            100%.
          </Prose>
        </Card>
        <Card title="3. Tác động học tập">
          <Prose>
            <strong>Tích cực:</strong> gia sư 24/7. <strong>Tiêu cực:</strong>
            “Outsourcing tư duy”, biến người học thành “thợ gõ prompt”.
          </Prose>
        </Card>
      </Block>

      <Block jp="6つの原則" title="IV. Bộ 6 quy tắc “AI trách nhiệm”">
        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map((p) => (
            <div
              key={p[0]}
              className="flex gap-4 rounded-3xl border border-border bg-card p-5"
            >
              <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-mocha font-serif text-cream">
                {p[0]}
              </span>
              <h3 className="self-center font-serif text-espresso">{p[1]}</h3>
            </div>
          ))}
        </div>
      </Block>

      <Block jp="インフォグラフィック" title="V. Infographic — Quy trình 4 bước">
        <Shots
          items={[
            { src: img1, caption: "Infographic: 4 bước học thuật" },
            { src: img2, caption: "Infographic: Quy trình 4 bước (chuẩn liêm chính)" },
          ]}
        />
      </Block>

      <Block jp="結論" title="Kết luận">
        <Prose>
          AI là công cụ mạnh mẽ nhưng cần được sử dụng có trách nhiệm và đạo đức. Con
          người luôn giữ vai trò kiểm soát, kiểm chứng và chịu trách nhiệm cuối cùng
          cho sản phẩm học thuật của mình.
        </Prose>
      </Block>
    </>
  );
}
