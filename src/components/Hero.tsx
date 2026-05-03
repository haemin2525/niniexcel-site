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
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-6">
              {profile.title}
            </p>
            <h1 className="font-black tracking-tight leading-[0.95] text-slate-900">
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
                {editorialHeadline.line1}
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl italic text-amber-500 mt-2">
                {editorialHeadline.line2Lead}
              </span>
            </h1>

            {/* Trust bar — inside hero, below headline */}
            <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2">
              {trustBar.map((name, i) => (
                <span key={name} className="flex items-center gap-3">
                  {i !== 0 && (
                    <span aria-hidden="true" className="w-1 h-1 rounded-full bg-slate-300" />
                  )}
                  <span className="text-sm text-slate-500">{name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Right column — contact card */}
          <div
            id="contact"
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-4">
                강의 의뢰
              </p>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                강의 의뢰는 메일로 보내주세요
              </p>
              <a
                href={`mailto:${email}?subject=${subject}`}
                className="block text-base sm:text-lg font-semibold text-slate-900 break-all hover:text-amber-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 rounded-sm"
                aria-label={`이메일 보내기 — ${email}`}
              >
                {email}
              </a>
              <p className="mt-3 text-sm text-slate-500">
                평일 24시간 안에 회신드립니다
              </p>
              <a
                href={`mailto:${email}?subject=${subject}`}
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 transition"
              >
                메일 쓰기 &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
