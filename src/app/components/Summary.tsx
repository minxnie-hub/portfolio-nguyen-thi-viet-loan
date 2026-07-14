import { motion } from "motion/react";
import { FolderTree, BookOpenCheck, Sparkles, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const takeaways = [
  {
    icon: FolderTree,
    jp: "基礎",
    title: "Kỹ năng số nền tảng",
    desc: "Từ Bài 1, mình thành thạo thao tác quản lý tệp – thư mục và biết tổ chức tài nguyên học tập một cách khoa học.",
  },
  {
    icon: BookOpenCheck,
    jp: "情報",
    title: "Tìm & đánh giá thông tin",
    desc: "Bài 2 rèn kỹ năng tìm kiếm, đánh giá độ tin cậy nguồn học thuật và trình bày tài liệu tham khảo có hệ thống.",
  },
  {
    icon: Sparkles,
    jp: "AI",
    title: "Làm việc cùng AI",
    desc: "Bài 3–5 giúp mình viết prompt hiệu quả, hợp tác nhóm trực tuyến và dùng AI tạo sinh để sáng tạo nội dung số.",
  },
  {
    icon: ShieldCheck,
    jp: "倫理",
    title: "AI có trách nhiệm",
    desc: "Bài 6 hình thành bộ nguyên tắc dùng AI minh bạch, đúng đạo đức — con người luôn giữ vai trò kiểm chứng cuối cùng.",
  },
];

export function Summary() {
  return (
    <section id="summary" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          jp="まとめ"
          title="Tổng kết"
          subtitle="Nhìn lại hành trình sáu bài tập của học phần Nhập môn Công nghệ số & AI — từ kỹ năng số cơ bản đến việc dùng AI một cách sáng tạo và có trách nhiệm."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {takeaways.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-5 rounded-3xl border border-border bg-card p-6"
            >
              <span className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-mocha/15 text-mocha">
                <t.icon className="h-6 w-6" />
              </span>
              <div>
                <span className="font-jp text-xs tracking-[0.25em] text-mocha/70">
                  {t.jp}
                </span>
                <h3 className="font-serif text-espresso">{t.title}</h3>
                <p className="mt-2 text-sm text-cocoa/80" style={{ lineHeight: 1.7 }}>
                  {t.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-3xl bg-espresso p-8 text-center text-cream"
        >
          <p className="mx-auto max-w-2xl" style={{ lineHeight: 1.8 }}>
            Qua học phần này, mình không chỉ học cách <strong>dùng</strong> công
            nghệ mà còn học cách <strong>làm chủ</strong> nó: chủ động trong tư
            duy, cẩn trọng khi kiểm chứng và luôn giữ tinh thần trách nhiệm khi
            ứng dụng AI vào học tập &amp; nghiên cứu.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
