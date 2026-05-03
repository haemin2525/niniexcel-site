import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  tone?: "muted" | "accent";
  className?: string;
};

export default function Pill({ children, tone = "muted", className = "" }: Props) {
  const toneClass =
    tone === "accent"
      ? "text-accent border-accent-soft bg-surface-2"
      : "text-muted border-hairline bg-surface-2";
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-[6px] border text-[11px] uppercase tracking-[0.20em] font-medium ${toneClass} ${className}`}
    >
      {children}
    </span>
  );
}
