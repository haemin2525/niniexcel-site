import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import TalkList from "../components/TalkList";
import Topics from "../components/Topics";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TalkList compact={false} />
        <Topics />
      </main>
      <Footer />
    </>
  );
}
