import PhraseLine from "./PhraseLine";
import Pill from "./Pill";
import ContactCard from "./ContactCard";
import { site } from "../content/site";

export default function Hero() {
  const { hero, contact, social } = site;
  const subject = encodeURIComponent(contact.emailSubject);

  return (
    <header className="py-32 sm:py-40 lg:py-48">
      <div className="anim-fade-up" style={{ animationDelay: "0ms" }}>
        <Pill tone="muted">
          <PhraseLine>{hero.eyebrow}</PhraseLine>
        </Pill>
      </div>

      <h1 className="mt-8 sm:mt-10 font-display font-bold tracking-[-0.02em] leading-[1.05] text-ink">
        <span className="block anim-fade-up" style={{ animationDelay: "120ms" }}>
          <PhraseLine className="text-[clamp(40px,7vw,96px)]">
            {hero.headline1}
          </PhraseLine>
        </span>
        <span className="block anim-fade-up text-body-gray mt-1 sm:mt-2" style={{ animationDelay: "240ms" }}>
          <PhraseLine className="text-[clamp(36px,6vw,84px)]">
            {hero.headline2}
          </PhraseLine>
        </span>
      </h1>

      <p className="mt-8 sm:mt-10 text-body-gray anim-fade-up" style={{ animationDelay: "360ms" }}>
        <PhraseLine className="text-[clamp(16px,1.6vw,20px)] tracking-[-0.005em] leading-[1.4]">
          {hero.subhead}
        </PhraseLine>
      </p>

      <ContactCard
        email={contact.email}
        primaryHref={`mailto:${contact.email}?subject=${subject}`}
        secondaryHref={social.youtube}
      />
    </header>
  );
}
