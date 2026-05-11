import Background from "../components/Background";
import SectionShell from "../components/SectionShell";
import TopNav from "../components/TopNav";
import Hero from "../components/Hero";
import ClienteleStrip from "../components/ClienteleStrip";
import PhraseLine from "../components/PhraseLine";
import ProcessGrid from "../components/ProcessGrid";
import TopicsGrid from "../components/TopicsGrid";
import TalksTimeline from "../components/TalksTimeline";
import YoutubeSection from "../components/YoutubeSection";
import ProductsSection from "../components/ProductsSection";

export default function Home() {
  return (
    <>
      <TopNav />
      <Background />
      <SectionShell tone="parchment" className="pt-28 sm:pt-32 lg:pt-36">
        <Hero />
      </SectionShell>
      <SectionShell tone="dark">
        <ClienteleStrip />
      </SectionShell>
      <SectionShell tone="white">
        <ProcessGrid />
      </SectionShell>
      <SectionShell tone="parchment">
        <TopicsGrid />
      </SectionShell>
      <SectionShell tone="white">
        <TalksTimeline />
      </SectionShell>
      <SectionShell tone="dark">
        <YoutubeSection />
      </SectionShell>
      <SectionShell tone="parchment">
        <ProductsSection />
      </SectionShell>
      <footer className="bg-parchment py-12 border-t border-hairline">
        <div className="max-w-[1136px] mx-auto px-6 sm:px-10 lg:px-16">
          <p className="text-[11px] uppercase tracking-[0.18em] text-ink-muted-48 font-medium">
            <PhraseLine>© 2026 NINIEXCEL · 니니의엑셀</PhraseLine>
          </p>
        </div>
      </footer>
    </>
  );
}
