import { site } from "../content/site";

export default function ProductsSection() {
  const now = Date.now();
  const products = site.products.filter((p) => {
    if (!p.availableUntil) return true;
    // availableUntil is the last day inclusive (until end of that day, KST 23:59)
    const end = new Date(`${p.availableUntil}T23:59:59+09:00`).getTime();
    return now <= end;
  });

  if (products.length === 0) return null;

  const base = import.meta.env.BASE_URL;

  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="mt-16 sm:mt-20 lg:mt-24 anim-fade-up"
    >
      <p
        id="products-heading"
        className="text-[11px] uppercase tracking-[0.18em] text-muted-gray font-medium"
      >
        PRODUCTS · 디지털 플래너
      </p>
      <h2 className="mt-3 text-ink text-[clamp(22px,2.6vw,32px)] font-bold tracking-[-0.01em] leading-[1.25] break-keep">
        실무에서 쓰는 도구, 직접 만들어 봅니다
      </h2>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {products.map((p) => (
          <a
            key={p.slug}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-paper shadow-card-light rounded-[12px] overflow-hidden hover:shadow-card-medium transition-all duration-200"
            aria-label={`${p.title} — 새 탭에서 열기`}
          >
            <div className="aspect-[4/3] bg-hover-gray overflow-hidden">
              <img
                src={`${base}${p.image}`}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div className="px-6 sm:px-7 py-6 sm:py-7">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-pill-full bg-chip-gray text-ink text-[10px] uppercase tracking-[0.16em] font-medium">
                {p.channel}
              </span>
              <h3 className="mt-3 text-ink text-[clamp(17px,1.7vw,21px)] font-bold tracking-[-0.005em] leading-[1.3] break-keep">
                {p.title}
              </h3>
              <p className="mt-2 text-[14px] text-body-gray leading-[1.55] break-keep">
                {p.sub}
              </p>
              <span className="mt-5 inline-flex items-center text-[12px] uppercase tracking-[0.16em] text-ink font-medium group-hover:underline underline-offset-4">
                {p.cta} →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
