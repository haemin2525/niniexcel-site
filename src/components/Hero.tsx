import PhraseLine from "./PhraseLine";
import Pill from "./Pill";
import ContactCard from "./ContactCard";
import { site } from "../content/site";

export default function Hero() {
  const { hero, contact, social } = site;

  return (
    <header className="py-32 sm:py-40 lg:py-48">
      <div className="anim-fade-up" style={{ animationDelay: "0ms" }}>
        <Pill tone="muted">
          <PhraseLine>{hero.eyebrow}</PhraseLine>
        </Pill>
      </div>

      <h1 className="mt-8 sm:mt-10 font-display font-bold tracking-[-0.02em] leading-[1.05] text-ink">
        <span className="block anim-fade-up" style={{ animationDelay: "120ms" }}>
          <PhraseLine className="text-[clamp(36px,5.5vw,80px)]">
            {hero.headline1}
          </PhraseLine>
        </span>
        <span className="block anim-fade-up mt-1 sm:mt-2" style={{ animationDelay: "240ms" }}>
          <PhraseLine className="text-[clamp(36px,5.5vw,80px)]">
            {hero.headline2}
          </PhraseLine>
        </span>
      </h1>

      <ContactCard
        email={contact.email}
        primaryHref={contact.inquiryRoute}
        primaryLabel="강의 의뢰하기"
        primaryAriaLabel="강의 의뢰 페이지로 이동"
        secondaryHref={social.youtube}
      />
    </header>
  );
}
