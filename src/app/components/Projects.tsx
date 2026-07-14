import { motion } from "motion/react";
import { ArrowUpRight, Download } from "lucide-react";
import { Link } from "react-router";
import { SectionHeading } from "./SectionHeading";
import { projects } from "../data/projects";
import { pdfHref } from "../data/pdfs";

export function Projects() {
  return (
    <section id="projects" className="bg-cream-deep/50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          jp="課題"
          title="Các bài tập"
          subtitle="Sáu bài tập trong học phần Nhập môn Công nghệ số & AI — nhấn vào từng thẻ để xem toàn bộ bài làm hoặc tải PDF minh chứng."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 text-left shadow-[0_10px_30px_-24px_rgba(92,68,51,0.6)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(92,68,51,0.7)]"
            >
              <Link to={`/bai/${p.id}`} className="flex flex-1 flex-col">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-mocha/15 px-3 py-1 font-serif text-xs tracking-widest text-cocoa">
                    {p.code}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-clay transition-colors group-hover:text-mocha" />
                </div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  {p.kicker}
                </p>
                <h3 className="mt-1 font-serif text-espresso">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm text-cocoa/80" style={{ lineHeight: 1.6 }}>
                  {p.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-sand/60 px-2.5 py-1 text-xs text-cocoa"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-mocha">
                  Xem bài làm
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>

              <a
                href={pdfHref(p.id)}
                target="_blank"
                rel="noreferrer"
                download
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-mocha/25 bg-cream/70 px-4 py-2 text-sm text-cocoa transition-colors hover:bg-mocha hover:text-cream"
              >
                <Download className="h-4 w-4" />
                Tải PDF minh chứng
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
