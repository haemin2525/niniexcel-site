import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import Topics from "../components/Topics";
import TalkList from "../components/TalkList";
import YouTubeEmbed from "../components/YouTubeEmbed";
import ProductCards from "../components/ProductCards";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Topics />
        <TalkList compact />
        <YouTubeEmbed />
        <ProductCards compact />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
