import profile from "../content/profile.json";

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-ink-500 flex flex-col sm:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>
          <span className="text-ink-700 font-medium">강의 문의</span>{" "}
          <a
            href={`mailto:${profile.contact.email}`}
            className="hover:text-brand rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            {profile.contact.email}
          </a>
        </p>
      </div>
    </footer>
  );
}
