import { site } from "../content/site";

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

      <ol className="relative mt-10 max-w-[720px]">
        <span
          aria-hidden="true"
          className="absolute left-1.5 top-2 bottom-0 w-px bg-ink/15"
        />
        {site.talks.map((t, i) => (
          <li
            key={`${t.period}-${t.org}-${i}`}
            className="relative pl-8 pb-7 last:pb-0"
          >
            <span
              aria-hidden="true"
              className="absolute left-0 top-[7px] w-3 h-3 rounded-full bg-ink ring-4 ring-paper"
            />
            <div className="flex items-center gap-3 flex-wrap">
              <p className="text-[12px] uppercase tracking-[0.16em] text-muted-gray font-medium">
                {t.period}
              </p>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-pill-full bg-chip-gray text-ink text-[10px] uppercase tracking-[0.16em] font-medium">
                {t.category}
              </span>
            </div>
            <h3 className="mt-1.5 text-[clamp(15px,1.4vw,17px)] font-bold text-ink tracking-[-0.005em]">
              {t.org}
            </h3>
            {t.topic && (
              <p className="mt-1 text-[14px] text-body-gray leading-[1.55] break-keep">
                {t.topic}
              </p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
