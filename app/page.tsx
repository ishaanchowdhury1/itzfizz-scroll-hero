import ScrollHero from "@/components/Hero";

export default function Home() {
  return (
    <main className="site">
      <ScrollHero />

      <section className="next-section">
        <div className="next-section__content">
          <p className="eyebrow">NEXT SECTION</p>
          <h2>More experiences ahead.</h2>
        </div>
      </section>
    </main>
  );
}
