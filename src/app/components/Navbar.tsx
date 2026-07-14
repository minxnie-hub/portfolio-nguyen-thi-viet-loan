import { useEffect, useState } from "react";
import { Link } from "react-router";

const links = [
  { to: "/#about", label: "Giới thiệu" },
  { to: "/#projects", label: "Bài tập" },
  { to: "/#summary", label: "Tổng kết" },
  { to: "/#interests", label: "Sở thích" },
  { to: "/#contact", label: "Liên hệ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md border-b border-border shadow-[0_4px_20px_-12px_rgba(92,68,51,0.4)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-mocha text-cream font-jp text-lg">
            蘭
          </span>
          <span className="font-serif text-espresso tracking-wide">Việt Loan</span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-sm text-cocoa/80 transition-colors hover:text-espresso"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
