import profile from "../content/profile.json";

export default function YouTubeEmbed() {
  const { channel, url, featuredVideoId } = profile.youtube;
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">YouTube</h2>
      <p className="mt-3 text-slate-600">실제 강의 톤을 영상으로 미리 보세요 · {channel}</p>
      <div className="mt-8 rounded-xl overflow-hidden border border-slate-200 bg-white">
        {featuredVideoId ? (
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${featuredVideoId}`}
              title={`${channel} 영상`}
              allowFullScreen
            />
          </div>
        ) : (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${channel} 유튜브 채널로 이동 (새 창)`}
            className="flex items-center justify-between p-6 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 transition"
          >
            <div>
              <p className="font-semibold text-slate-900">{channel}</p>
              <p className="text-sm text-slate-500 mt-1">YouTube 채널에서 영상 보기</p>
            </div>
            <span className="text-brand font-medium">바로가기 →</span>
          </a>
        )}
      </div>
    </section>
  );
}
