import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — ACE XI Football Academy" },
      { name: "description", content: "Learn about ACE XI Football Academy — Mumbai's elite football training program for youth." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div style={{ background: "#fff" }}>
      <Navbar />
      <main>
        <section className="px-5 md:px-8 pt-20 pb-14" style={{ background: "#0B0612" }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-xs font-bold tracking-widest mb-3" style={{ color: "#F5C842" }}>
              ABOUT US
            </div>
            <h1 className="font-black text-white leading-[0.95]" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
              Built for the<br />Beautiful Game
            </h1>
          </div>
        </section>

        <section className="py-20 px-5 md:px-8" style={{ background: "#fff" }}>
          <div className="max-w-4xl mx-auto space-y-10 text-lg text-[#0B0612]/80 leading-relaxed">
            <p>
              ACE XI Football Academy was founded with a single mission — to give Mumbai's young
              footballers a structured pathway from grassroots to elite-level play. We believe every
              child deserves world-class coaching, regardless of where they start.
            </p>
            <p>
              From U6 to U16, our programs are designed around proven youth development principles.
              We focus on technique, decision-making, fitness, and most importantly — the right
              mindset to compete and grow.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              {[
                { t: "Mission", d: "Develop champions on and off the field." },
                { t: "Vision", d: "Mumbai's most respected youth football academy." },
                { t: "Values", d: "Discipline, growth, inclusion, excellence." },
              ].map((b) => (
                <div key={b.t} className="rounded-2xl p-6" style={{ background: "#F5F3EE" }}>
                  <div className="text-xs font-bold tracking-widest mb-2" style={{ color: "#4B1FA7" }}>
                    {b.t.toUpperCase()}
                  </div>
                  <p className="text-[#0B0612] font-semibold">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
