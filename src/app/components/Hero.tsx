import { motion } from "motion/react";
import { GraduationCap, IdCard, MapPin, ArrowDown } from "lucide-react";
import { ImageWithFallback } from "./media/ImageWithFallback";
import { Sakura } from "./Sakura";
import avatar from "../../imports/avt.jpg";

const facts = [
  { icon: IdCard, label: "MSV", value: "25042185" },
  { icon: GraduationCap, label: "Khoa", value: "NN&VH Nhật Bản" },
  { icon: MapPin, label: "Trường", value: "ĐH Ngoại ngữ – ĐHQGHN" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-20 pt-32 md:pt-40"
    >
      <Sakura className="pointer-events-none absolute -left-6 top-24 h-24 w-24 text-clay/40 md:h-32 md:w-32" />
      <Sakura className="pointer-events-none absolute right-8 top-52 h-16 w-16 text-sakura/50" />
      <Sakura className="pointer-events-none absolute bottom-10 left-1/3 h-12 w-12 text-clay/30" />

      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-sand/70 px-4 py-1.5 text-sm text-cocoa">
            <span className="h-2 w-2 rounded-full bg-matcha" />
            <span className="font-jp">ようこそ</span> · Portfolio cá nhân
          </p>
          <h1 className="font-serif text-espresso" style={{ fontSize: "clamp(2.4rem, 6vw, 3.6rem)", lineHeight: 1.15 }}>
            Nguyễn Thị<br />Việt Loan
          </h1>
          <p className="mt-5 max-w-md text-cocoa/85" style={{ lineHeight: 1.7 }}>
            Sinh viên ngành Ngôn ngữ &amp; Văn hoá Nhật Bản. Đây là nơi tổng hợp
            các bài tập trong học phần <em>Nhập môn Công nghệ số &amp; AI</em> —
            hành trình làm quen với kỹ năng số và trí tuệ nhân tạo.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {facts.map((f) => (
              <div
                key={f.label}
                className="rounded-2xl border border-border bg-card/70 p-4 backdrop-blur-sm"
              >
                <f.icon className="mb-2 h-5 w-5 text-mocha" />
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  {f.label}
                </p>
                <p className="text-sm text-espresso">{f.value}</p>
              </div>
            ))}
          </div>

          <a
            href="#projects"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-mocha px-6 py-3 text-cream transition-transform hover:-translate-y-0.5 hover:bg-cocoa"
          >
            Xem các bài tập
            <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-xs"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-sakura/50 via-clay/40 to-sand/50 blur-xl" />
          <div className="relative overflow-hidden rounded-[2rem] border-4 border-card shadow-[0_30px_60px_-25px_rgba(92,68,51,0.55)]">
            <ImageWithFallback
              src={avatar}
              alt="Chân dung Nguyễn Thị Việt Loan"
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 rounded-2xl bg-espresso px-4 py-2 text-cream shadow-lg">
            <span className="font-jp">こんにちは</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
