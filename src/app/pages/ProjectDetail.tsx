import { useParams, Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { projects } from "../data/projects";
import { pdfHref } from "../data/pdfs";
import { Sakura } from "../components/Sakura";
import { Bt1 } from "./details/Bt1";
import { Bt2 } from "./details/Bt2";
import { Bt3 } from "./details/Bt3";
import { Bt4 } from "./details/Bt4";
import { Bt5 } from "./details/Bt5";
import { Bt6 } from "./details/Bt6";

const bodies: Record<string, () => JSX.Element> = {
  bt1: Bt1,
  bt2: Bt2,
  bt3: Bt3,
  bt4: Bt4,
  bt5: Bt5,
  bt6: Bt6,
};

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const index = projects.findIndex((p) => p.id === id);
  const project = projects[index];
  const Body = id ? bodies[id] : undefined;

  if (!project || !Body) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-40 text-center">
        <h1 className="font-serif text-espresso">Không tìm thấy bài tập</h1>
        <Link to="/" className="mt-4 inline-block text-mocha">
          ← Về trang chủ
        </Link>
      </div>
    );
  }

  const prev = projects[index - 1];
  const next = projects[index + 1];
  const pdfUrl = pdfHref(project.id);

  return (
    <article>
      <header className="relative overflow-hidden bg-cream-deep/60 px-6 pb-14 pt-32 md:pt-40">
        <Sakura className="pointer-events-none absolute -right-6 top-28 h-28 w-28 text-clay/30" />
        <div className="mx-auto max-w-3xl">
          <button
            onClick={() => navigate("/#projects")}
            className="mb-6 inline-flex items-center gap-2 text-sm text-cocoa/80 transition-colors hover:text-espresso"
          >
            <ArrowLeft className="h-4 w-4" /> Tất cả bài tập
          </button>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="rounded-full bg-mocha/15 px-3 py-1 font-serif text-xs tracking-widest text-cocoa">
              {project.code} · {project.kicker}
            </span>
            <h1
              className="mt-4 font-serif text-espresso"
              style={{ fontSize: "clamp(1.8rem, 5vw, 2.6rem)", lineHeight: 1.2 }}
            >
              {project.title}
            </h1>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-sand/60 px-3 py-1 text-xs text-cocoa"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              download
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-mocha px-5 py-2.5 text-sm text-cream shadow-[0_14px_30px_-20px_rgba(92,68,51,0.8)] transition-transform hover:-translate-y-0.5 hover:bg-cocoa"
            >
              <Download className="h-4 w-4" />
              Tải PDF minh chứng
            </a>
          </motion.div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-14">
        <Body />

        <nav className="mt-16 flex items-center justify-between gap-4 border-t border-border pt-8">
          {prev ? (
            <Link
              to={`/bai/${prev.id}`}
              className="inline-flex items-center gap-2 text-sm text-cocoa/80 transition-colors hover:text-espresso"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">{prev.code}</span> Trước
            </Link>
          ) : (
            <span />
          )}
          <Link
            to="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-mocha"
          >
            Danh sách <ArrowUpRight className="h-4 w-4" />
          </Link>
          {next ? (
            <Link
              to={`/bai/${next.id}`}
              className="inline-flex items-center gap-2 text-sm text-cocoa/80 transition-colors hover:text-espresso"
            >
              Sau <span className="hidden sm:inline">{next.code}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </article>
  );
}
