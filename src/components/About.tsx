import profile from "../content/profile.json";

export default function About() {
  const { intro, strengths, career, certifications } = profile.about;
  return (
    <section id="about" className="bg-paper border-y border-ink-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 text-balance">강사 소개</h2>
        <p className="mt-4 max-w-prose text-ink-600 leading-relaxed">{intro}</p>
        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {strengths.map((s, i) => (
            <div
              key={i}
              className="rounded-xl bg-white border border-ink-200 p-5 shadow-sm min-w-0"
            >
              <p className="text-sm text-ink-700 leading-relaxed">{s}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="min-w-0">
            <h3 className="font-semibold text-ink-900 mb-3">경력</h3>
            <ul className="space-y-2 text-sm text-ink-700">
              {career.map((c) => (
                <li key={c.company} className="flex justify-between gap-4 border-b border-ink-100 py-2">
                  <span className="min-w-0 break-words">{c.company} <span className="text-ink-500">· {c.role}</span></span>
                  <span className="text-ink-400 whitespace-nowrap">{c.period}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-ink-900 mb-3">자격</h3>
            <div className="flex flex-wrap gap-2">
              {certifications.map((c) => (
                <span key={c} className="inline-flex px-3 py-1 rounded-full bg-brand-50 text-brand text-sm font-medium">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
