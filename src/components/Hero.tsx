import profile from "../content/profile.json";

export default function Hero() {
  const { editorialHeadline, trustBar } = profile.hero;
  const email = profile.contact.email;
  const subject = encodeURIComponent("[강의 문의] 니니의엑셀");

  return (
    <section className="min-h-[88vh] flex flex-col justify-center relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-60"
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        {/* 12-col grid: left = headline, right = contact card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left column — eyebrow + headline */}
          <div className="lg:col-span-8 min-w-0 max-w-2xl xl:max-w-none">
            <p className="text-xs uppercase tracking-[0.22em] text-ink-500 mb-6">
              {profile.title}
            </p>
            <h1 className="font-display font-black tracking-tight leading-[0.95] text-ink-900 break-keep">
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl hero-fade-up">
                {editorialHeadline.line1}
              </span>
              <span className="block font-editorial italic text-amber-500 mt-2 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl hero-fade-up-delay">
                {editorialHeadline.line2Lead}
              </span>
            </h1>

            {/* Trust bar — single quiet line of names */}
            <div className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-500">
              {trustBar.map((name, i) => (
                <span key={name} className="flex items-center gap-2">
                  {i !== 0 && <span aria-hidden="true">·</span>}
                  <span>{name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Right column — contact card */}
          <div
            id="contact"
            className="lg:col-span-4 min-w-0"
          >
            <div className="rounded-2xl border border-ink-200 bg-white shadow-sm p-8 max-w-sm">
              <p className="text-xs uppercase tracking-[0.22em] text-ink-400 mb-4">
                연락 주세요
              </p>
              <a
                href={`mailto:${email}?subject=${subject}`}
                className="group inline-flex items-baseline gap-2 text-base sm:text-lg font-semibold text-ink-900 break-all hover:text-amber-600 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 rounded-sm"
                aria-label={`이메일 보내기 — ${email}`}
              >
                <span className="border-b border-transparent group-hover:border-amber-500 transition">{email}</span>
                <span aria-hidden="true" className="text-amber-500 transition group-hover:translate-x-0.5">→</span>
              </a>
              <p className="mt-3 text-sm text-ink-500 leading-relaxed">
                평일 안에 회신드립니다
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
