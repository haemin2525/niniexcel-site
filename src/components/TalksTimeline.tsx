import { site } from "../content/site";

const stats = [
  { num: "6년+", label: "출강 경력" },
  { num: "5곳+", label: "기업" },
  { num: "7곳+", label: "공공기관" },
  { num: "5곳+", label: "플랫폼" },
] as const;

export default function TalksTimeline() {
  return (
    <section
      id="talks"
      aria-labelledby="talks-heading"
      className="anim-fade-up"
    >
      <p
        id="talks-heading"
        className="text-[11px] uppercase tracking-[0.18em] text-muted-gray font-medium"
      >
        TALKS · 출강 이력
      </p>
      <h2 className="mt-3 text-ink text-[clamp(22px,2.6vw,32px)] font-bold tracking-[-0.01em] leading-[1.25] break-keep">
        2019년부터 지금까지, 누적된 강의 인연
      </h2>

      <dl className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-[720px]">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="sr-only">{s.label}</dt>
            <dd>
              <p className="text-[clamp(32px,4vw,48px)] font-bold text-ink leading-none tracking-[-0.02em]">
                {s.num}
              </p>
              <p className="mt-2 text-[12px] uppercase tracking-[0.16em] text-muted-gray font-medium">
                {s.label}
              </p>
            </dd>
          </div>
        ))}
      </dl>

      <ul className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {site.talks.map((t, i) => (
          <li key={`${t.period}-${t.org}-${i}`}>
            <article className="h-full bg-paper shadow-card-light rounded-[8px] px-6 py-7 hover:bg-hover-light hover:shadow-card-medium transition-all duration-200">
              <div className="flex items-center gap-3 flex-wrap">
                <p className="text-[12px] uppercase tracking-[0.16em] text-muted-gray font-medium">
                  {t.period}
                </p>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-pill-full bg-chip-gray text-ink text-[10px] uppercase tracking-[0.16em] font-medium">
                  {t.category}
                </span>
              </div>
              <h3 className="mt-3 text-[clamp(16px,1.5vw,18px)] font-bold text-ink tracking-[-0.005em] break-keep">
                {t.org}
              </h3>
              {t.topic && (
                <p className="mt-2 text-[14px] text-body-gray leading-[1.55] break-keep">
                  {t.topic}
                </p>
              )}
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
