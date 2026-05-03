import { Link } from "react-router-dom";
import talks from "../content/talks.json";
import TalkCard from "./TalkCard";

export default function TalkList({ compact = false }: { compact?: boolean }) {
  const items = compact ? talks.slice(0, 6) : talks;
  return (
    <section className="bg-slate-50 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">강의 이력</h2>
          {compact && (
            <Link to="/talks" className="text-sm font-medium text-brand hover:underline">
              전체 보기 →
            </Link>
          )}
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((t, i) => <TalkCard key={i} talk={t} />)}
        </div>
      </div>
    </section>
  );
}
