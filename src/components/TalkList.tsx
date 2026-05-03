import { Link } from "react-router-dom";
import talks from "../content/talks.json";
import TalkCard from "./TalkCard";

export default function TalkList({ compact = false }: { compact?: boolean }) {
  const items = compact ? talks.slice(0, 6) : talks;
  return (
    <section className="bg-paper border-y border-ink-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 text-balance">강의 이력</h2>
          {compact && (
            <Link
              to="/talks"
              className="text-sm font-medium text-brand hover:underline rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              전체 보기 →
            </Link>
          )}
        </div>
        {items.length === 0 ? (
          <div className="mt-10 rounded-xl border border-dashed border-ink-200 bg-white p-8 text-center">
            <p className="text-sm text-ink-500">강의 목록을 곧 정리해 둘게요.</p>
          </div>
        ) : (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((t, i) => <TalkCard key={i} talk={t} />)}
          </div>
        )}
      </div>
    </section>
  );
}
