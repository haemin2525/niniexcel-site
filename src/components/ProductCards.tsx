import { Link } from "react-router-dom";
import products from "../content/products.json";

const BASE = import.meta.env.BASE_URL;
const asset = (p: string) => `${BASE}${p.replace(/^\//, "")}`;

export default function ProductCards({ compact = false }: { compact?: boolean }) {
  return (
    <section className="bg-paper border-y border-ink-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 text-balance">디지털 플래너</h2>
          {compact && (
            <Link
              to="/products"
              className="text-sm font-medium text-brand hover:underline rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              전체 보기 →
            </Link>
          )}
        </div>
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {products.map((p) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.name} (새 창)`}
              className="group rounded-xl border border-ink-200 bg-white overflow-hidden min-w-0 hover:ring-1 hover:ring-brand-50 hover:border-brand hover:scale-[1.005] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 transition-all duration-200"
            >
              {p.thumbnail && (
                <img
                  src={asset(p.thumbnail)}
                  alt={`${p.name} 썸네일`}
                  className="w-full aspect-[5/3] object-cover"
                />
              )}
              <div className="p-5">
                <p className="font-semibold text-ink-900 group-hover:text-brand break-words">{p.name}</p>
                {p.description && <p className="text-sm text-ink-600 mt-1 leading-relaxed">{p.description}</p>}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
