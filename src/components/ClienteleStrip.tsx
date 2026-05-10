import { site } from "../content/site";

const DURATIONS = ["32s", "40s", "36s"] as const;

export default function ClienteleStrip() {
  return (
    <section
      aria-labelledby="clientele-heading"
      className="mt-20 sm:mt-28 anim-fade-up"
    >
      <h2
        id="clientele-heading"
        className="text-[11px] uppercase tracking-[0.18em] text-muted-gray font-medium"
      >
        검증된 출강 이력
      </h2>

      <div className="mt-6 space-y-3">
        {site.clientele.map((row, idx) => (
          <Row
            key={row.label}
            label={row.label}
            items={row.items}
            duration={DURATIONS[idx % DURATIONS.length]}
          />
        ))}
      </div>
    </section>
  );
}

type RowProps = {
  label: string;
  items: ReadonlyArray<string>;
  duration: string;
};

function Row({ label, items, duration }: RowProps) {
  // Duplicate the list so the -50% translate yields a seamless loop.
  return (
    <div className="marquee-row flex items-center gap-6 sm:gap-8 py-3">
      <span className="shrink-0 w-12 sm:w-14 text-[12px] text-ink font-bold tracking-[-0.005em]">
        {label}
      </span>
      <div className="flex-1 overflow-hidden">
        <div
          className="marquee-track"
          style={{ ["--marquee-duration" as string]: duration } as React.CSSProperties}
        >
          {[...items, ...items].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-[15px] sm:text-[16px] text-body-gray font-medium"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
