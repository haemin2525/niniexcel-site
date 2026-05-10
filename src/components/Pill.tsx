import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  tone?: "muted" | "accent";
  className?: string;
};

export default function Pill({ children, tone = "muted", className = "" }: Props) {
  // Uber chips: pure pill, no border. Active = ink/paper inversion.
  const toneClass =
    tone === "accent"
      ? "bg-ink text-paper"
      : "bg-chip-gray text-ink";
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-pill-full text-[11px] uppercase tracking-[0.20em] font-medium ${toneClass} ${className}`}
    >
      {children}
    </span>
  );
}
