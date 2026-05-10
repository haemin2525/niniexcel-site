import { useEffect } from "react";
import { site } from "../content/site";

type Section = { title: string; items: ReadonlyArray<string> };
type Topic = {
  slug: string;
  head: string;
  sub: string;
  duration: string;
  sections: ReadonlyArray<Section>;
};

type Props = {
  topic: Topic | null;
  onClose: () => void;
};

export default function TopicModal({ topic, onClose }: Props) {
  useEffect(() => {
    if (!topic) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [topic, onClose]);

  if (!topic) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="topic-modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="모달 닫기 (배경 클릭)"
        className="absolute inset-0 bg-ink/60 anim-fade-up"
        style={{ animationDuration: "200ms" }}
      />

      <div
        className="relative w-full sm:max-w-[640px] max-h-[90vh] overflow-y-auto bg-paper rounded-t-[16px] sm:rounded-[16px] shadow-card-medium anim-fade-up"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="모달 닫기"
          className="absolute top-4 right-4 inline-flex items-center justify-center w-9 h-9 rounded-full bg-paper hover:bg-hover-gray transition-colors text-ink"
        >
          <span aria-hidden="true" className="text-[22px] leading-none">×</span>
        </button>

        <div className="px-6 sm:px-10 pt-10 sm:pt-12 pb-8 sm:pb-10">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted-gray font-medium">
            {topic.duration}
          </p>
          <h2
            id="topic-modal-title"
            className="mt-3 text-ink text-[clamp(22px,3vw,32px)] font-bold tracking-[-0.01em] leading-[1.2] break-keep"
          >
            {topic.head}
          </h2>
          <p className="mt-3 text-body-gray text-[15px] leading-[1.55] break-keep">
            {topic.sub}
          </p>

          <div className="mt-8 space-y-7">
            {topic.sections.map((sec) => (
              <div key={sec.title}>
                <h3 className="text-[12px] uppercase tracking-[0.16em] text-ink font-bold">
                  {sec.title}
                </h3>
                <ul className="mt-3 space-y-2">
                  {sec.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-[14px] text-body-gray leading-[1.6] break-keep pl-4 relative"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-[9px] w-1.5 h-1.5 rounded-full bg-ink"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-10 rounded-[8px] bg-hover-light px-5 py-4 text-[13px] text-body-gray leading-[1.55] break-keep">
            {site.inquiry.note}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`#/inquiry?course=${topic.slug}`}
              onClick={onClose}
              className="inline-flex items-center px-6 py-3 rounded-pill-full bg-ink text-paper text-[15px] font-medium tracking-[-0.005em] hover:bg-body-gray transition-colors duration-200"
            >
              이 강의 의뢰하기 →
            </a>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center px-5 py-2.5 rounded-pill-full bg-paper text-ink border border-ink text-[14px] font-medium hover:bg-hover-gray transition-colors duration-200"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
