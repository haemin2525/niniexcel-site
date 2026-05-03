import profile from "../content/profile.json";

export default function YouTubeEmbed() {
  const { channel, url, featuredVideoId } = profile.youtube;
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">YouTube</h2>
      <p className="mt-3 text-slate-600">강의 스타일 미리 보기 · {channel}</p>
      <div className="mt-8 rounded-xl overflow-hidden border border-slate-200 bg-white">
        {featuredVideoId ? (
          <div className="aspect-video">
            <iframe className="w-full h-full"
                    src={`https://www.youtube.com/embed/${featuredVideoId}`}
                    title={channel} allowFullScreen />
          </div>
        ) : (
          <a href={url} target="_blank" rel="noopener noreferrer"
             className="flex items-center justify-between p-6 hover:bg-slate-50">
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
