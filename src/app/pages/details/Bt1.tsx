import { Block, Lead, Card, Shots } from "./ui";
import img1 from "../../assets/proofs/bt1-img1.png";
import img2 from "../../assets/proofs/bt1-img2.png";
import img3 from "../../assets/proofs/bt1-img3.png";
import img4 from "../../assets/proofs/bt1-img4.png";
import img5 from "../../assets/proofs/bt1-img5.png";
import img6 from "../../assets/proofs/bt1-img6.png";
import img7 from "../../assets/proofs/bt1-img7.png";
import img8 from "../../assets/proofs/bt1-img8.png";
import img9 from "../../assets/proofs/bt1-img9.png";
import img10 from "../../assets/proofs/bt1-img10.png";
import img11 from "../../assets/proofs/bt1-img11.png";
import img12 from "../../assets/proofs/bt1-img12.png";
import img13 from "../../assets/proofs/bt1-img13.png";
import img14 from "../../assets/proofs/bt1-img14.png";

const steps: {
  title: string;
  desc: string;
  imgs?: { src: string; caption?: string }[];
}[] = [
  {
    title: "Mở File Explorer",
    desc: "Nhấn tổ hợp phím Windows + E hoặc nhấp vào biểu tượng thư mục màu vàng trên thanh tác vụ.",
  },
  {
    title: "Truy cập ổ đĩa / thư mục",
    desc: "Ở cột bên trái chọn This PC, nhấp đúp vào một ổ không phải ổ hệ thống (ví dụ ổ D: hoặc E:; trên máy ổ hiển thị “Data SSD (E:)”). Nếu chỉ có ổ C: thì vào thư mục Documents.",
    imgs: [{ src: img1, caption: "This PC — chọn ổ Data SSD (E:)" }],
  },
  {
    title: "Tạo thư mục mới",
    desc: "Nhấp chuột phải vào khoảng trống → New → Folder. Đặt tên ThucHanh_hotensinhvien (ví dụ ThucHanh_NguyenVanA; thực tế: ThucHanh_NguyenThiVietLoan) rồi nhấn Enter.",
  },
  {
    title: "Vào thư mục vừa tạo",
    desc: "Nhấp đúp vào thư mục vừa tạo để mở nó.",
    imgs: [{ src: img2, caption: "Thư mục ThucHanh_NguyenThiVietLoan còn trống" }],
  },
  {
    title: "Tạo tệp văn bản",
    desc: "Nhấp chuột phải → New → Text Document. Đặt tên GhiChu.txt rồi nhấn Enter.",
    imgs: [{ src: img3, caption: "Tệp GhiChu.txt vừa được tạo" }],
  },
  {
    title: "Đổi tên tệp",
    desc: "Nhấp chuột phải vào GhiChu.txt → Rename → đổi thành GhiChuQuanTrong.txt rồi nhấn Enter.",
    imgs: [{ src: img4, caption: "Sau khi đổi tên thành GhiChuQuanTrong.txt" }],
  },
  {
    title: "Tạo thư mục con",
    desc: "Nhấp chuột phải → New → Folder → đặt tên TaiLieu.",
    imgs: [{ src: img5, caption: "Thư mục con TaiLieu bên cạnh tệp ghi chú" }],
  },
  {
    title: "Sao chép (Copy & Paste)",
    desc: "Nhấp chuột phải GhiChuQuanTrong.txt → Copy (Ctrl + C); vào thư mục TaiLieu → Paste (Ctrl + V). Kết quả có một bản sao trong TaiLieu.",
    imgs: [{ src: img6, caption: "Bản sao GhiChuQuanTrong.txt trong TaiLieu" }],
  },
  {
    title: "Di chuyển (Cut & Paste)",
    desc: "Quay lại thư mục gốc, tạo tệp DiChuyen.txt; nhấp chuột phải → Cut (Ctrl + X); vào TaiLieu → Paste (Ctrl + V). Tệp gốc biến mất khỏi vị trí cũ.",
    imgs: [
      { src: img7, caption: "Tạo DiChuyen.txt tại thư mục gốc" },
      { src: img8, caption: "DiChuyen.txt sau khi di chuyển vào TaiLieu" },
    ],
  },
  {
    title: "Xóa tệp",
    desc: "Trong thư mục TaiLieu, nhấp chuột phải GhiChuQuanTrong.txt → Delete. Tệp được đưa vào Thùng rác (Recycle Bin).",
    imgs: [
      { src: img9, caption: "TaiLieu chỉ còn DiChuyen.txt sau khi xóa" },
      { src: img10, caption: "GhiChuQuanTrong.txt nằm trong Recycle Bin" },
    ],
  },
  {
    title: "Xóa vĩnh viễn",
    desc: "Chọn tệp DiChuyen.txt, nhấn Shift + Delete → xuất hiện cảnh báo → tệp bị xóa vĩnh viễn, không đi qua Thùng rác.",
    imgs: [
      { src: img11, caption: "Cảnh báo xóa vĩnh viễn DiChuyen.txt" },
      { src: img12, caption: "TaiLieu trống sau khi xóa vĩnh viễn" },
    ],
  },
  {
    title: "Khôi phục từ Thùng rác (tùy chọn)",
    desc: "Mở Recycle Bin → nhấp chuột phải GhiChuQuanTrong.txt → Restore. Tệp trở về vị trí ban đầu.",
    imgs: [
      { src: img13, caption: "Chọn Restore trong Recycle Bin" },
      { src: img14, caption: "Tệp trở về thư mục TaiLieu ban đầu" },
    ],
  },
];

export function Bt1() {
  return (
    <>
      <Lead>
        Bài thực hành thao tác quản lý tệp tin và thư mục trên Windows bằng File
        Explorer, gồm 12 bước từ tạo, đổi tên, sao chép, di chuyển đến xóa và khôi
        phục.
      </Lead>

      <Block jp="ファイル" title="Các bước thực hành">
        <ol className="space-y-4">
          {steps.map((s, i) => (
            <li key={s.title}>
              <Card>
                <div className="flex gap-4">
                  <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-mocha/15 font-serif text-espresso">
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-espresso">{s.title}</h3>
                    <p
                      className="mt-1 text-cocoa/85"
                      style={{ lineHeight: 1.7 }}
                    >
                      {s.desc}
                    </p>
                    {s.imgs && (
                      <div className="mt-4">
                        <Shots items={s.imgs} />
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </Block>
    </>
  );
}
