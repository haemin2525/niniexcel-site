import type { ReactNode } from "react";

type Props = { children: ReactNode };

export default function Frame({ children }: Props) {
  return (
    <div className="max-w-[1136px] mx-auto px-6 sm:px-10 lg:px-16">
      {children}
    </div>
  );
}
