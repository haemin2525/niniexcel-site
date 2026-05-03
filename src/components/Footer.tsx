import profile from "../content/profile.json";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-500 flex flex-col sm:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} {profile.name} · {profile.title}</p>
        <p>{profile.contact.email}</p>
      </div>
    </footer>
  );
}
