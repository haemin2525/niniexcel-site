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
      <div className="rounded-[12px] bg-paper shadow-card-light p-8 sm:p-10 max-w-[640px]">
        <h2
          id="contact-heading"
          className="text-[11px] uppercase tracking-[0.18em] text-muted-gray font-medium"
        >
          <PhraseLine>강의 의뢰 · 출강 문의</PhraseLine>
        </h2>
        <p className="mt-6 text-ink text-[clamp(20px,2.4vw,28px)] font-bold tracking-[-0.01em]">
          <PhraseLine>{email}</PhraseLine>
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={primaryHref}
            className="inline-flex items-center px-5 py-2.5 rounded-pill-full bg-ink text-paper text-[14px] font-medium tracking-[-0.005em] hover:bg-body-gray transition-colors duration-200"
            aria-label="메일로 문의하기"
          >
            <PhraseLine>메일로 문의하기</PhraseLine>
          </a>
          <a
            href={secondaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 rounded-pill-full bg-paper text-ink border border-ink text-[14px] font-medium tracking-[-0.005em] hover:bg-hover-gray transition-colors duration-200"
            aria-label="유튜브 둘러보기 (새 창)"
          >
            <PhraseLine>유튜브 둘러보기</PhraseLine>
          </a>
        </div>
      </div>
    </section>
  );
}
