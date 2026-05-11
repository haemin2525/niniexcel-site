import type { ReactNode, CSSProperties } from "react";

export type SectionTone = "white" | "parchment" | "dark" | "dark-2" | "dark-3";

type Props = {
  tone?: SectionTone;
  id?: string;
  ariaLabelledBy?: string;
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

const TONE_BG: Record<SectionTone, string> = {
  white: "bg-paper text-ink",
  parchment: "bg-parchment text-ink",
  dark: "bg-tile-1 text-paper",
  "dark-2": "bg-tile-2 text-paper",
  "dark-3": "bg-tile-3 text-paper",
};

export default function SectionShell({
  tone = "white",
  id,
  ariaLabelledBy,
  ariaLabel,
  className = "",
  style,
  children,
}: Props) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      aria-label={ariaLabel}
      style={style}
      className={`${TONE_BG[tone]} py-20 sm:py-24 lg:py-28 ${className}`}
    >
      <div className="max-w-[1136px] mx-auto px-6 sm:px-10 lg:px-16">
        {children}
      </div>
    </section>
  );
}
