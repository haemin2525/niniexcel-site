import profile from "../content/profile.json";

export default function Contact() {
  const { email, altEmail, sns } = profile.contact;
  const subject = encodeURIComponent("[강의 문의] 니니의엑셀");
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 text-balance">강의 문의</h2>
      <p className="mt-3 max-w-prose text-ink-600 leading-relaxed">
        기업 출강·정규 강의·콘텐츠 협업 환영합니다. 평일 안에 회신드립니다.
      </p>
      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <a
          href={`mailto:${email}?subject=${subject}`}
          aria-label={`이메일 보내기 — ${email}`}
          className="rounded-xl bg-brand text-white p-6 shadow-md hover:opacity-90 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 transition min-w-0"
        >
          <p className="text-sm uppercase tracking-[0.22em] opacity-80">Email</p>
          <p className="mt-2 font-semibold text-lg break-all">{email}</p>
          <p className="mt-3 text-sm opacity-90">메일 쓰기 →</p>
        </a>
        <div className="rounded-xl border border-ink-200 p-6 bg-white min-w-0">
          <p className="text-sm uppercase tracking-[0.22em] text-ink-500">다른 채널</p>
          {altEmail && <p className="mt-2 text-ink-700 break-all">대체 이메일 · {altEmail}</p>}
          {sns && (
            <div className="mt-4 flex flex-wrap gap-2">
              {sns.map((s) => (
                <a
                  key={s.url}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} (새 창)`}
                  className="text-sm px-3 py-1 rounded-full border border-ink-200 text-ink-700 hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 transition"
                >
                  {s.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
