import type { Talk } from "../types/content";

export default function TalkCard({ talk }: { talk: Talk }) {
  if (talk.url) {
    return (
      <a
        href={talk.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${talk.client} ${talk.topic} (새 창)`}
        className="block rounded-xl border border-ink-200 p-5 bg-white min-w-0 hover:ring-1 hover:ring-brand-50 hover:border-brand hover:scale-[1.005] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 transition-all duration-200"
      >
        <p className="text-xs text-ink-500">{talk.year} · {talk.type}</p>
        <p className="mt-1 font-semibold text-ink-900 break-words">{talk.client}</p>
        <p className="mt-1 text-sm text-ink-600 leading-relaxed break-words">{talk.topic}</p>
      </a>
    );
  }
  return (
    <div className="block rounded-xl border border-ink-200 p-5 bg-white min-w-0">
      <p className="text-xs text-ink-500">{talk.year} · {talk.type}</p>
      <p className="mt-1 font-semibold text-ink-900 break-words">{talk.client}</p>
      <p className="mt-1 text-sm text-ink-600 leading-relaxed break-words">{talk.topic}</p>
    </div>
  );
}
