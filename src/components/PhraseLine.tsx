import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "span" | "div";
};

export default function PhraseLine({ children, className = "", as = "span" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measure = () => {
      // Reset before measuring.
      el.removeAttribute("data-overflow");
      el.style.removeProperty("font-size");

      // Re-measure on next frame after layout settles.
      // NOTE: inline-block + nowrap yields scrollWidth === clientWidth on the
      // element itself (it expands to content). Real overflow is detected by
      // comparing the rendered width against the PARENT's available width.
      requestAnimationFrame(() => {
        const parent = el.parentElement;
        const limit = parent ? parent.clientWidth : window.innerWidth;
        let scale = 1;
        let guard = 0;
        while (el.getBoundingClientRect().width > limit + 1 && guard < 6) {
          scale *= 0.92;
          el.style.fontSize = `${scale}em`;
          el.setAttribute("data-overflow", "true");
          guard++;
        }
      });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [children]);

  const Tag = as as keyof JSX.IntrinsicElements;
  // NOTE: `as` is restricted to `span | div` (both extend HTMLElement, so scrollWidth/clientWidth are safe).
  // If this union widens, revisit the @ts-expect-error and ref typing.
  return (
    // @ts-expect-error: ref forwarded to dynamic tag — safe for span|div union; see note above.
    <Tag ref={ref} className={`phrase ${className}`.trim()}>
      {children}
    </Tag>
  );
}
