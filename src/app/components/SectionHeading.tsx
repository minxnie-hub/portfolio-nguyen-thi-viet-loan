export function SectionHeading({
  jp,
  title,
  subtitle,
}: {
  jp: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 text-center">
      <span className="font-jp text-sm tracking-[0.3em] text-mocha/80">
        {jp}
      </span>
      <h2
        className="mt-2 font-serif text-espresso"
        style={{ fontSize: "clamp(1.9rem, 4.5vw, 2.6rem)" }}
      >
        {title}
      </h2>
      <span className="mx-auto mt-4 block h-px w-16 bg-clay" />
      {subtitle && (
        <p className="mx-auto mt-4 max-w-lg text-cocoa/75">{subtitle}</p>
      )}
    </div>
  );
}
