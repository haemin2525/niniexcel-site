import profile from "../content/profile.json";

export default function About() {
  const { intro, strengths, career, certifications } = profile.about;
  return (
    <section id="about" className="bg-slate-50 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">강사 소개</h2>
        <p className="mt-4 max-w-3xl text-slate-600">{intro}</p>
        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {strengths.map((s, i) => (
            <div key={i} className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm">
              <p className="text-sm text-slate-700 leading-relaxed">{s}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">경력</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {career.map((c) => (
                <li key={c.company} className="flex justify-between gap-4 border-b border-slate-100 py-2">
                  <span>{c.company} <span className="text-slate-500">· {c.role}</span></span>
                  <span className="text-slate-400 whitespace-nowrap">{c.period}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">자격</h3>
            <div className="flex flex-wrap gap-2">
              {certifications.map((c) => (
                <span key={c} className="inline-flex px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-medium">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
