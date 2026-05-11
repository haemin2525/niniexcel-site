import youtubeData from "../content/youtube.json";

type Video = {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  viewCount: number;
};

const CHANNEL_URL = "https://www.youtube.com/@niniexcel";

export default function YoutubeSection() {
  const videos = (youtubeData?.top ?? []) as Video[];

  return (
    <section
      id="youtube"
      aria-labelledby="youtube-heading"
      className="anim-fade-up"
    >
      <p
        id="youtube-heading"
        className="text-[11px] uppercase tracking-[0.18em] text-muted-gray font-medium"
      >
        YOUTUBE · 채널 미리보기
      </p>
      <h2 className="mt-3 text-paper text-[clamp(22px,2.6vw,32px)] font-bold tracking-[-0.01em] leading-[1.25] break-keep">
        강의 톤이 궁금하시다면, 가장 많이 본 영상부터
      </h2>

      {videos.length === 0 ? (
        <p className="mt-6 text-[14px] text-body-muted leading-[1.55]">
          영상 데이터를 불러오는 중입니다. 채널은{" "}
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-on-dark underline underline-offset-2 hover:opacity-80"
          >
            youtube.com/@niniexcel
          </a>
          에서 직접 보실 수 있어요.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((v) => (
            <a
              key={v.id}
              href={`https://www.youtube.com/watch?v=${v.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-paper shadow-card-light rounded-[8px] overflow-hidden hover:shadow-card-medium transition-all duration-200"
            >
              <div className="aspect-video bg-hover-gray overflow-hidden">
                {v.thumbnail && (
                  <img
                    src={v.thumbnail}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="px-5 py-5">
                <h3 className="text-[15px] font-bold text-ink leading-[1.4] break-keep line-clamp-2">
                  {v.title}
                </h3>
                <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-muted-gray font-medium">
                  조회수 {v.viewCount.toLocaleString("ko-KR")}회
                </p>
              </div>
            </a>
          ))}
        </div>
      )}

      <div className="mt-8">
        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-5 py-2.5 rounded-pill-full bg-paper text-ink text-[14px] font-medium hover:bg-hover-gray transition-colors duration-200"
        >
          유튜브 채널 둘러보기 →
        </a>
      </div>
    </section>
  );
}
