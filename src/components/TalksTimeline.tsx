import { site } from "../content/site";

const groupedTalks = (() => {
  const map = new Map<string, Array<(typeof site.talks)[number]>>();
  for (const t of site.talks) {
    const year = t.period.slice(0, 4);
    const bucket = map.get(year);
    if (bucket) bucket.push(t);
    else map.set(year, [t]);
  }
  return Array.from(map.entries());
})();

export default function TalksTimeline() {
  return (
    <section
      id="talks"
      aria-labelledby="talks-heading"
      className="mt-16 sm:mt-20 lg:mt-24 anim-fade-up"
    >
      <p
        id="talks-heading"
        className="text-[11px] uppercase tracking-[0.18em] text-muted-gray font-medium"
      >
        TALKS · 출강 이력
      </p>
      <h2 className="mt-3 text-ink text-[clamp(22px,2.6vw,32px)] font-bold tracking-[-0.01em] leading-[1.25] break-keep">
        2019년부터 지금까지 — 기업·공공·플랫폼 누적
      </h2>

      <ol className="mt-12 space-y-12 sm:space-y-14">
        {groupedTalks.map(([year, items], idx) => (
          <li
            key={year}
            className={
              "grid grid-cols-1 md:grid-cols-[180px_1fr] gap-5 md:gap-12 " +
              (idx > 0 ? "pt-10 sm:pt-12 border-t border-ink/10" : "")
            }
          >
            <div>
              <p className="text-[clamp(32px,4vw,48px)] font-bold text-ink leading-none tracking-[-0.02em]">
                {year}
              </p>
              <p className="mt-2 text-[12px] uppercase tracking-[0.16em] text-muted-gray font-medium">
                {items.length}건
              </p>
            </div>

            <ul className="space-y-6">
              {items.map((t, i) => {
                const month = t.period.length > 4 ? t.period.slice(5) : null;
                return (
                  <li key={`${year}-${i}`}>
                    <div className="flex items-center gap-3 flex-wrap">
                      {month && (
                        <p className="text-[12px] uppercase tracking-[0.16em] text-muted-gray font-medium">
                          {month}월
                        </p>
                      )}
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-pill-full bg-chip-gray text-ink text-[10px] uppercase tracking-[0.16em] font-medium">
                        {t.category}
                      </span>
                    </div>
                    <h3 className="mt-1.5 text-[clamp(16px,1.5vw,18px)] font-bold text-ink tracking-[-0.005em] break-keep">
                      {t.org}
                    </h3>
                    {t.topic && (
                      <p className="mt-1 text-[14px] text-body-gray leading-[1.55] break-keep">
                        {t.topic}
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
