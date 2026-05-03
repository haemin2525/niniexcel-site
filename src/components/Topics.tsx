import topics from "../content/topics.json";

export default function Topics() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">강의 영역</h2>
      <p className="mt-3 text-slate-600">엑셀·데이터·AI를 비즈니스 현장의 언어로.</p>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((t) => (
          <article
            key={t.id}
            className="rounded-xl border border-slate-200 p-6 bg-white hover:border-brand hover:shadow-md transition"
          >
            <div className="text-2xl">{t.icon}</div>
            <h3 className="mt-3 font-bold text-lg text-slate-900">{t.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{t.summary}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {t.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
