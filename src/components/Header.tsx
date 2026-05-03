import { Link } from "react-router-dom";
import profile from "../content/profile.json";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-ink-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-display font-bold text-lg text-ink-900 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          {profile.name}
        </Link>
        <nav aria-label="주 메뉴" className="flex gap-6 text-sm text-ink-600">
          <Link
            to="/talks"
            className="hover:text-brand rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            강의
          </Link>
          <Link
            to="/products"
            className="hover:text-brand rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            플래너
          </Link>
          <a
            href="#contact"
            className="hover:text-brand rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            문의
          </a>
        </nav>
      </div>
    </header>
  );
}
