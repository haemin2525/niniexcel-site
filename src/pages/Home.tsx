import Background from "../components/Background";
import Frame from "../components/Frame";
import Hero from "../components/Hero";
import ClienteleStrip from "../components/ClienteleStrip";
import PhraseLine from "../components/PhraseLine";
import ProcessGrid from "../components/ProcessGrid";
import TopicsGrid from "../components/TopicsGrid";

export default function Home() {
  return (
    <>
      <Background />
      <Frame>
        <Hero />
        <ClienteleStrip />
        <ProcessGrid />
        <TopicsGrid />
        <footer className="py-12 mt-32 sm:mt-40 border-t border-ink/10">
          <p className="text-[11px] uppercase tracking-[0.18em] text-muted-gray font-medium">
            <PhraseLine>© 2026 NINIEXCEL · 니니의엑셀</PhraseLine>
          </p>
        </footer>
      </Frame>
    </>
  );
}
