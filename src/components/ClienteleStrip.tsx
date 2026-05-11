import { useEffect, useRef, useState, type CSSProperties } from "react";
import { site } from "../content/site";

const DURATIONS = ["32s", "40s", "36s"] as const;

export default function ClienteleStrip() {
  return (
    <section
      aria-labelledby="clientele-heading"
      className="anim-fade-up"
    >
      <h2
        id="clientele-heading"
        className="text-[11px] uppercase tracking-[0.18em] text-muted-gray font-medium"
      >
        검증된 출강 이력
      </h2>

      <div className="mt-5 space-y-1">
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
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = useState<boolean | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const measure = () => {
      const isDoubled = track.dataset.doubled === "true";
      const trackWidth = track.scrollWidth;
      const singleSet = isDoubled ? trackWidth / 2 : trackWidth;
      const next = singleSet > container.clientWidth + 1;
      setOverflow((prev) => (prev === next ? prev : next));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(container);
    return () => ro.disconnect();
  }, [items]);

  const isMarquee = overflow === true;
  const renderItems = isMarquee ? [...items, ...items] : items;
  const trackClass = isMarquee
    ? "marquee-track"
    : "flex gap-8 sm:gap-10 whitespace-nowrap";
  const trackStyle: CSSProperties = isMarquee
    ? ({ ["--marquee-duration" as string]: duration } as CSSProperties)
    : {};

  return (
    <div className={`flex items-center gap-6 sm:gap-8 py-2 ${isMarquee ? "marquee-row" : ""}`}>
      <span className="shrink-0 w-12 sm:w-14 text-[12px] text-paper font-bold tracking-[-0.005em]">
        {label}
      </span>
      <div ref={containerRef} className="flex-1 overflow-hidden">
        <div
          ref={trackRef}
          data-doubled={isMarquee ? "true" : "false"}
          className={trackClass}
          style={trackStyle}
        >
          {renderItems.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-[15px] sm:text-[16px] text-body-muted font-medium"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
