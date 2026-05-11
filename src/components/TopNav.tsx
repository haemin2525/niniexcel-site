import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "topics", label: "강의" },
  { id: "talks", label: "출강" },
  { id: "youtube", label: "유튜브" },
] as const;

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToId = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={
        "fixed top-0 left-0 right-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-200 " +
        (scrolled
          ? "bg-paper/95 backdrop-blur-md shadow-card-light"
          : "bg-transparent")
      }
    >
      <nav
        aria-label="페이지 상단"
        className="max-w-[1136px] mx-auto px-6 sm:px-10 lg:px-16 h-14 sm:h-16 flex items-center justify-between gap-4"
      >
        <a
          href="#/"
          onClick={scrollToTop}
          aria-label="홈으로 (페이지 상단)"
          className="text-[14px] sm:text-[15px] font-bold tracking-[-0.005em] text-ink hover:text-body-gray transition-colors"
        >
          NINIEXCEL
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={scrollToId(s.id)}
                className="text-[13px] text-ink font-medium hover:text-body-gray transition-colors"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#/inquiry"
          className="inline-flex items-center px-4 sm:px-5 py-2 rounded-pill-full bg-ink text-paper text-[13px] sm:text-[14px] font-medium hover:bg-body-gray transition-colors"
        >
          강의 의뢰하기
        </a>
      </nav>
    </header>
  );
}
