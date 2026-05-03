import profile from "../content/profile.json";

export default function Hero() {
  const { headline, subheadline, trustBar, primaryCta, secondaryCta } = profile.hero;
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <p className="text-sm font-medium text-brand uppercase tracking-widest mb-4">
        {profile.title}
      </p>
      <h1 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight text-slate-900">
        {headline}
      </h1>
      <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-3xl">{subheadline}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={primaryCta.href}
          className="inline-flex items-center px-5 py-3 rounded-xl bg-brand text-white font-semibold shadow-md hover:opacity-90 transition"
        >
          {primaryCta.label}
        </a>
        <a
          href={secondaryCta.href}
          className="inline-flex items-center px-5 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:border-brand hover:text-brand transition"
        >
          {secondaryCta.label}
        </a>
      </div>
      <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
        <span className="font-semibold text-slate-700">출강·강의</span>
        {trustBar.map((c) => <span key={c}>{c}</span>)}
      </div>
    </section>
  );
}
