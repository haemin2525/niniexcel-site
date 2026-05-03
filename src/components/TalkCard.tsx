import type { Talk } from "../types/content";

export default function TalkCard({ talk }: { talk: Talk }) {
  if (talk.url) {
    return (
      <a href={talk.url} target="_blank" rel="noopener noreferrer"
         className="block rounded-xl border border-slate-200 p-5 bg-white hover:border-brand transition">
        <p className="text-xs text-slate-500">{talk.year} · {talk.type}</p>
        <p className="mt-1 font-semibold text-slate-900">{talk.client}</p>
        <p className="mt-1 text-sm text-slate-600">{talk.topic}</p>
      </a>
    );
  }
  return (
    <div className="block rounded-xl border border-slate-200 p-5 bg-white">
      <p className="text-xs text-slate-500">{talk.year} · {talk.type}</p>
      <p className="mt-1 font-semibold text-slate-900">{talk.client}</p>
      <p className="mt-1 text-sm text-slate-600">{talk.topic}</p>
    </div>
  );
}
