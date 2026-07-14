import { Mail, GraduationCap, IdCard } from "lucide-react";
import { Sakura } from "./Sakura";

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-espresso px-6 py-16 text-cream">
      <Sakura className="pointer-events-none absolute -left-8 -top-6 h-28 w-28 text-cream/5" />
      <Sakura className="pointer-events-none absolute bottom-4 right-6 h-20 w-20 text-cream/5" />
      <div className="relative mx-auto max-w-5xl text-center">
        <span className="font-jp text-sm tracking-[0.3em] text-cream/60">
          ありがとう
        </span>
        <h2 className="mt-2 font-serif text-cream" style={{ fontSize: "clamp(1.7rem, 4vw, 2.3rem)" }}>
          Cảm ơn bạn đã ghé thăm
        </h2>
        <p className="mx-auto mt-4 max-w-md text-cream/70" style={{ lineHeight: 1.7 }}>
          Rất vui được kết nối và cùng nhau học hỏi trên hành trình khám phá công
          nghệ số &amp; AI.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-5 py-2.5 text-sm">
            <IdCard className="h-4 w-4" /> MSV 25042185
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-5 py-2.5 text-sm">
            <GraduationCap className="h-4 w-4" /> NN&amp;VH Nhật Bản
          </span>
          <a
            href="mailto:25042185@vnu.edu.vn"
            className="inline-flex items-center gap-2 rounded-full bg-cream px-5 py-2.5 text-sm text-espresso transition-transform hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" /> 25042185@vnu.edu.vn
          </a>
        </div>

        <p className="mt-10 text-xs text-cream/50">
          © 2026 Nguyễn Thị Việt Loan · ĐH Ngoại ngữ – ĐHQGHN
        </p>
      </div>
    </footer>
  );
}
