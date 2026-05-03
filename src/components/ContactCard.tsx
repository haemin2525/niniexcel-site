import PhraseLine from "./PhraseLine";

type Props = {
  email: string;
  primaryHref: string;
  secondaryHref: string;
};

export default function ContactCard({ email, primaryHref, secondaryHref }: Props) {
  return (
    <section
      id="contact"
      className="mt-12 sm:mt-16 anim-fade-up"
      style={{ animationDelay: "480ms" }}
      aria-labelledby="contact-heading"
    >
      <div className="rounded-[10px] border border-hairline bg-surface-2 p-8 sm:p-10 max-w-[640px]">
        <h2
          id="contact-heading"
          className="text-[11px] uppercase tracking-[0.18em] text-muted font-medium"
        >
          <PhraseLine>강의 의뢰 · 출강 문의</PhraseLine>
        </h2>
        <p className="mt-6 text-head text-[clamp(20px,2.4vw,28px)] font-medium tracking-[-0.01em]">
          <PhraseLine>{email}</PhraseLine>
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={primaryHref}
            className="inline-flex items-center px-5 py-2.5 rounded-[6px] border border-transparent bg-accent text-canvas text-[14px] font-medium tracking-[-0.005em] hover:bg-accent/90 transition-colors duration-200"
            aria-label="메일로 문의하기"
          >
            <PhraseLine>메일로 문의하기</PhraseLine>
          </a>
          <a
            href={secondaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 rounded-[6px] border border-hairline bg-surface-2 text-head text-[14px] font-medium tracking-[-0.005em] hover:bg-surface-3 transition-colors duration-200"
            aria-label="유튜브 둘러보기 (새 창)"
          >
            <PhraseLine>유튜브 둘러보기</PhraseLine>
          </a>
        </div>
      </div>
    </section>
  );
}
