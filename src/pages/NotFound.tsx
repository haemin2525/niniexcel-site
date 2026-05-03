import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <p className="text-brand font-semibold tracking-[0.22em] uppercase text-sm">404</p>
      <h1 className="mt-2 text-3xl font-bold text-ink-900 text-balance">페이지를 찾을 수 없습니다</h1>
      <p className="mt-3 text-ink-600 leading-relaxed">주소가 바뀌었거나 잘못된 링크일 수 있어요.</p>
      <Link
        to="/"
        className="mt-6 inline-flex px-4 py-2 rounded-xl bg-brand text-white font-medium shadow-md hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 transition"
      >
        홈으로 가기
      </Link>
    </main>
  );
}
