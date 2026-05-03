import Header from "../components/Header";
import Footer from "../components/Footer";
import TalkList from "../components/TalkList";

export default function Talks() {
  return (
    <>
      <Header />
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">전체 강의 이력</h1>
        </div>
        <TalkList />
      </main>
      <Footer />
    </>
  );
}
