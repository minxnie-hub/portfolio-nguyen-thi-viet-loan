import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading jp="私について" title="Đôi nét về mình" />
        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-border bg-card p-8 md:col-span-2"
          >
            <p className="text-cocoa/90" style={{ lineHeight: 1.8 }}>
              Mình là <strong>Nguyễn Thị Việt Loan</strong>, sinh viên Khoa Ngôn
              ngữ &amp; Văn hoá Nhật Bản tại Trường Đại học Ngoại ngữ – ĐHQGHN.
              Mình yêu thích văn hoá Nhật, sự tỉ mỉ và tinh thần cầu tiến trong
              học tập. Portfolio này ghi lại quá trình mình tiếp cận công nghệ số
              và AI qua học phần <em>Nhập môn CNS &amp; AI</em> — từ những kỹ năng
              nền tảng đến việc sử dụng AI một cách sáng tạo và có trách nhiệm.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Tiếng Nhật 日本語", "Kỹ năng số", "AI có trách nhiệm", "Sáng tạo nội dung"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full bg-sand/70 px-4 py-1.5 text-sm text-cocoa"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-center gap-5 rounded-3xl bg-espresso p-8 text-cream"
          >
            <div>
              <p className="font-serif" style={{ fontSize: "2rem" }}>6</p>
              <p className="text-cream/70 text-sm">bài tập hoàn thành</p>
            </div>
            <span className="h-px w-full bg-cream/20" />
            <div>
              <p className="font-jp" style={{ fontSize: "2rem" }}>日本語</p>
              <p className="text-cream/70 text-sm">chuyên ngành theo đuổi</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
