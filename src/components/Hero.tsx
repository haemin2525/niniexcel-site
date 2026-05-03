import profile from "../content/profile.json";

export default function Hero() {
  const { headline, subheadline, trustBar, primaryCta, secondaryCta } = profile.hero;

  // Headline: "현업에서 부딪힌 만큼만, 비전공자도 쓸 수 있게 가르칩니다."
  // Emphasize "부딪힌 만큼만" with a subtle amber underline-stroke.
  const emphasis = "부딪힌 만큼만";
  const headlineParts = headline.split(emphasis);

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-60"
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <p className="text-sm font-medium text-brand uppercase tracking-[0.18em] mb-4">
          {profile.title}
        </p>
        <h1 className="text-3xl sm:text-5xl font-extrabold leading-[1.15] sm:leading-[1.1] tracking-tight text-slate-900">
          {headlineParts.length === 2 ? (
            <>
              {headlineParts[0]}
              <span className="relative inline-block">
                <span className="relative z-10">{emphasis}</span>
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 bottom-0.5 sm:bottom-1 h-2 sm:h-2.5 bg-accent/40 -z-0"
                />
              </span>
              {headlineParts[1]}
            </>
          ) : (
            headline
          )}
        </h1>
        <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">{subheadline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={primaryCta.href}
            className="inline-flex items-center px-5 py-3 rounded-xl bg-brand text-white font-semibold shadow-md hover:opacity-90 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 transition"
          >
            {primaryCta.label}
          </a>
          <a
            href={secondaryCta.href}
            className="inline-flex items-center px-5 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:border-brand hover:text-brand active:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 transition"
          >
            {secondaryCta.label}
          </a>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <span className="inline-flex items-center gap-2 font-semibold text-slate-700">
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-accent" />
            출강·강의
          </span>
          {trustBar.map((c) => (
            <span key={c} className="text-slate-500">{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
