import { motion } from "motion/react";
import { Clapperboard, Plane, ChefHat } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const interests = [
  {
    icon: Clapperboard,
    jp: "映画",
    title: "Xem phim",
    desc: "Thư giãn cùng những bộ phim hay và học thêm về văn hoá, ngôn ngữ.",
  },
  {
    icon: Plane,
    jp: "旅行",
    title: "Du lịch",
    desc: "Khám phá vùng đất mới, trải nghiệm và mở rộng góc nhìn của bản thân.",
  },
  {
    icon: ChefHat,
    jp: "料理",
    title: "Nấu ăn",
    desc: "Vào bếp thử những công thức mới, đặc biệt là các món ăn Nhật Bản.",
  },
];

export function Interests() {
  return (
    <section id="interests" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading jp="趣味" title="Sở thích" />
        <div className="grid gap-6 md:grid-cols-3">
          {interests.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 text-center"
            >
              <span className="pointer-events-none absolute -right-2 -top-4 font-jp text-7xl text-sand/60 transition-transform group-hover:scale-110">
                {it.jp}
              </span>
              <div className="relative mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-sakura/40 text-cocoa">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="relative font-serif text-espresso">{it.title}</h3>
              <p className="relative mt-2 text-sm text-cocoa/80" style={{ lineHeight: 1.6 }}>
                {it.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
