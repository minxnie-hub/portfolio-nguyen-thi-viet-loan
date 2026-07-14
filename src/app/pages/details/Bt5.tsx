import { Block, Lead, Prose, Card, Bullets, Shots, Shot } from "./ui";
import img1 from "../../assets/proofs/bt5-img1.png";
import img2 from "../../assets/proofs/bt5-img2.png";
import img3 from "../../assets/proofs/bt5-img3.png";

export function Bt5() {
  return (
    <>
      <Lead>
        <strong>Báo cáo dự án: Ứng dụng AI tạo sinh trong sáng tạo nội dung số.</strong>{" "}
        Tên dự án: Blog &amp; Infographic “Bản chất của Thời gian: Sự giao thoa giữa
        Vật lý và Triết học”. Công cụ: Google Gemini (Văn bản), DALL·E 3 (Hình ảnh),
        Canva Magic Design (Thiết kế).
      </Lead>

      <Block jp="紹介" title="I. Giới thiệu">
        <div className="grid gap-4 sm:grid-cols-3">
          <Card eyebrow="AI Text" title="Google Gemini">
            <p className="text-sm text-cocoa/80">
              Tạo và tổng hợp văn bản, dàn ý nội dung.
            </p>
          </Card>
          <Card eyebrow="AI Image" title="DALL·E 3">
            <p className="text-sm text-cocoa/80">
              Tạo hình ảnh minh họa theo phong cách surrealism.
            </p>
          </Card>
          <Card eyebrow="AI Design" title="Canva Magic Design">
            <p className="text-sm text-cocoa/80">
              Tự động tạo layout, thiết kế infographic.
            </p>
          </Card>
        </div>
      </Block>

      <Block jp="制作過程" title="II. Quá trình sáng tạo (AI 40% – Cá nhân 60%)">
        <Card title="1. Google Gemini">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Prompt</p>
          <p className="mt-1 italic text-cocoa/80">
            “Hãy đóng vai một chuyên gia vật lý và triết học, viết một dàn ý 3 phần
            giải thích về ‘Hình thức vận động của thời gian’. Yêu cầu: Sử dụng ngôn
            ngữ phổ thông, có ví dụ minh họa từ đời sống, độ dài khoảng 500 từ.”
          </p>
          <p className="mt-3 text-cocoa/85" style={{ lineHeight: 1.7 }}>
            <strong>Kết quả:</strong> dàn ý logic (thời gian tuyến tính Newton vs
            tương đối Einstein).{" "}
            <strong>Cách chỉnh sửa (Human &gt; 50%):</strong> viết lại mở bài bằng
            câu chuyện ẩn dụ chiếc lá rơi, giữ khung logic, bổ sung góc nhìn triết
            học hiện sinh.
          </p>
          <div className="mt-4">
            <Shots
              items={[
                { src: img1, caption: "Prompt & phản hồi của Google Gemini" },
                { src: img2, caption: "Nội dung Gemini tạo ra (tiếp)" },
              ]}
            />
          </div>
        </Card>

        <Card title="2. DALL·E 3">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Prompt</p>
          <p className="mt-1 italic text-cocoa/80">
            “A surreal digital art illustration representing the concept of ‘the
            arrow of time’. It shows a glowing hourglass in space, where the sand
            falling turns into flying stars and galaxies. Deep blue and gold color
            palette, highly detailed, cinematic lighting.”
          </p>
          <p className="mt-3 text-cocoa/85" style={{ lineHeight: 1.7 }}>
            <strong>Kết quả:</strong> 4 ảnh.{" "}
            <strong>Chỉnh sửa:</strong> dùng Expand mở rộng negative space, kéo sáng
            thiên hà.
          </p>
          <div className="mt-4">
            <Shot src={img3} caption="Ảnh do AI tạo sinh (đồng hồ cát giữa vũ trụ)" />
          </div>
        </Card>

        <Card title="3. Canva Magic Design">
          <p className="text-cocoa/85" style={{ lineHeight: 1.7 }}>
            Yêu cầu “Tạo Infographic giáo dục, tông màu tối bí ẩn”; nhận 5 layout.{" "}
            <strong>Chỉnh sửa:</strong> thay font Serif học thuật, căn alignment, vẽ
            đường line kết nối.
          </p>
        </Card>
      </Block>

      <Block jp="比較分析" title="III. So sánh và phân tích">
        <div className="grid gap-4 sm:grid-cols-3">
          <Card title="Gemini">
            <p className="text-sm text-cocoa/80">
              <strong>Mạnh:</strong> tổng hợp nhanh. <strong>Yếu:</strong> thiếu cảm
              xúc.
            </p>
          </Card>
          <Card title="DALL·E 3">
            <p className="text-sm text-cocoa/80">
              <strong>Mạnh:</strong> prompt adherence. <strong>Yếu:</strong> chi tiết
              thừa, không kiểm soát pixel.
            </p>
          </Card>
          <Card title="Canva Magic Design">
            <p className="text-sm text-cocoa/80">
              <strong>Mạnh:</strong> loại bỏ “sợ trang giấy trắng”.{" "}
              <strong>Yếu:</strong> tinh chỉnh thẩm mỹ.
            </p>
          </Card>
        </div>
      </Block>

      <Block jp="倫理" title="IV. Vai trò AI &amp; đạo đức">
        <Card title="1. AI là “Co-pilot”">
          <Prose>
            Vai trò con người chuyển thành “đạo diễn / biên tập viên”
            (Editor/Director); AI &lt; 50%, con người &gt; 50%.
          </Prose>
        </Card>
        <Card title="2. Vấn đề đạo đức">
          <Bullets
            items={[
              "Tính minh bạch",
              "Rủi ro “ảo giác AI” (Hallucination) — cần fact-checking",
              "Bản quyền hình ảnh",
            ]}
          />
        </Card>
      </Block>
    </>
  );
}
