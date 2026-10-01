import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Temporary section so we can test the page continuing below the hero. */}
      <section className="flex min-h-screen items-center justify-center bg-[#111111] px-6 text-[#f3f1ec]">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">
            Next section
          </p>

          <h2 className="mt-5 text-4xl font-medium sm:text-6xl">
            More experiences ahead.
          </h2>
        </div>
      </section>
    </main>
  );
}