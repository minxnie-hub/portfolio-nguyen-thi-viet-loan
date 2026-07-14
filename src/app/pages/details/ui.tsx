import type { ReactNode } from "react";
import { ImageWithFallback } from "../../components/media/ImageWithFallback";

export function Shot({
  src,
  caption,
  className,
}: {
  src: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-cocoa/20 bg-card shadow-[0_16px_40px_-30px_rgba(92,68,51,0.7)]">
      <ImageWithFallback
        src={src}
        alt={caption ?? "Ảnh minh chứng"}
        className={`w-full object-contain ${className ?? ""}`}
      />
      {caption && (
        <figcaption className="border-t border-cocoa/15 px-3 py-2 text-center text-xs text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function Shots({
  items,
}: {
  items: { src: string; caption?: string }[];
}) {
  return (
    <div className={`grid gap-4 ${items.length > 1 ? "sm:grid-cols-2" : ""}`}>
      {items.map((it) => (
        <Shot key={it.src} src={it.src} caption={it.caption} />
      ))}
    </div>
  );
}

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="text-cocoa/90" style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>
      {children}
    </p>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <p className="text-cocoa/85" style={{ lineHeight: 1.8 }}>
      {children}
    </p>
  );
}

export function Block({
  jp,
  title,
  children,
}: {
  jp?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-12">
      <div className="mb-5 flex items-baseline gap-3">
        <span className="h-6 w-1.5 rounded-full bg-mocha" />
        <div>
          {jp && (
            <span className="block font-jp text-xs tracking-[0.25em] text-mocha/70">
              {jp}
            </span>
          )}
          <h2 className="font-serif text-espresso">{title}</h2>
        </div>
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export function Card({
  title,
  eyebrow,
  children,
}: {
  title?: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6">
      {eyebrow && (
        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          {eyebrow}
        </p>
      )}
      {title && <h3 className="mt-1 font-serif text-espresso">{title}</h3>}
      <div className={title || eyebrow ? "mt-3" : ""}>{children}</div>
    </div>
  );
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 text-cocoa/85" style={{ lineHeight: 1.6 }}>
          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-clay" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function DataTable({
  head,
  rows,
}: {
  head: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-cocoa/25">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="bg-sand/70 text-cocoa">
            {head.map((h) => (
              <th
                key={h}
                className="border border-cocoa/25 px-4 py-3 font-serif font-medium"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 ? "bg-cream/40" : "bg-card"}>
              {r.map((c, j) => (
                <td
                  key={j}
                  className="border border-cocoa/20 px-4 py-3 align-top text-cocoa/85"
                  style={{ lineHeight: 1.5 }}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Rating({ value }: { value: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${value}/5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`h-2 w-2 rounded-full ${
            n <= value ? "bg-mocha" : "bg-clay/30"
          }`}
        />
      ))}
    </span>
  );
}
