import { useState } from "react";
import { site } from "../content/site";
import TopicModal from "./TopicModal";

export default function TopicsGrid() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const openTopic = openSlug ? site.topics.find((t) => t.slug === openSlug) ?? null : null;

  return (
    <section
      id="topics"
      aria-labelledby="topics-heading"
      className="anim-fade-up"
    >
      <p
        id="topics-heading"
        className="text-[11px] uppercase tracking-[0.18em] text-muted-gray font-medium"
      >
        TOPICS · 강의 주제
      </p>
      <h2 className="mt-3 text-ink text-[clamp(22px,2.6vw,32px)] font-display font-semibold tracking-[-0.018em] leading-[1.25] break-keep">
        엑셀 기본부터 AI 자동화까지, 다섯 가지 클래스
      </h2>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {site.topics.map((t) => (
          <button
            key={t.slug}
            type="button"
            onClick={() => setOpenSlug(t.slug)}
            aria-haspopup="dialog"
            className="group text-left bg-paper shadow-card-light rounded-[8px] px-6 sm:px-8 py-8 sm:py-10 hover:bg-hover-light hover:shadow-card-medium transition-all duration-200"
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-gray font-medium">
              {t.duration}
            </p>
            <h3 className="mt-4 text-ink text-[clamp(17px,1.7vw,21px)] font-bold tracking-[-0.005em] leading-[1.3] break-keep">
              {t.head}
            </h3>
            <p className="mt-3 text-[14px] text-body-gray leading-[1.55] break-keep">
              {t.sub}
            </p>
            <span className="mt-6 inline-flex items-center text-[12px] uppercase tracking-[0.16em] text-ink font-medium group-hover:underline underline-offset-4">
              자세히 →
            </span>
          </button>
        ))}
      </div>

      <TopicModal topic={openTopic} onClose={() => setOpenSlug(null)} />
    </section>
  );
}
