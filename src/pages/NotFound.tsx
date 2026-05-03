import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <p className="text-brand font-semibold">404</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">페이지를 찾을 수 없습니다</h1>
      <Link to="/" className="mt-6 inline-flex px-4 py-2 rounded-xl bg-brand text-white font-medium">홈으로</Link>
    </main>
  );
}
