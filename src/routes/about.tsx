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
        <section
          className="relative isolate overflow-hidden px-5 md:px-8 pt-28 pb-24"
          style={{
            background:
              "radial-gradient(ellipse at 80% 45%, rgba(75,31,167,0.38), transparent 48%), linear-gradient(135deg, #0B0612 0%, #151020 55%, #0B0612 100%)",
          }}
        >
          {/* Subtle dotted texture */}
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              backgroundImage:
                "radial-gradient(rgba(245,200,66,0.22) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage:
                "linear-gradient(to right, transparent 5%, black 100%)",
              opacity: 0.45,
            }}
          />

          {/* Purple glow */}
          <div
            className="pointer-events-none absolute -right-24 top-0 -z-10 h-80 w-80 rounded-full blur-3xl"
            style={{ background: "rgba(75,31,167,0.35)" }}
          />

          {/* Oversized XI watermark */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-4 top-1/2 -z-10 -translate-y-1/2 select-none font-black leading-none"
            style={{
              fontSize: "clamp(16rem, 34vw, 34rem)",
              color: "rgba(245,200,66,0.035)",
              WebkitTextStroke: "2px rgba(245,200,66,0.12)",
            }}
          >
            XI
          </div>

          {/* Football pitch outline */}
          <svg
            aria-hidden="true"
            viewBox="0 0 500 320"
            fill="none"
            className="pointer-events-none absolute right-[-5rem] top-1/2 -z-10 hidden w-[min(55vw,650px)] -translate-y-1/2 opacity-20 md:block"
            style={{ color: "#F5C842" }}
          >
            <rect x="15" y="15" width="470" height="290" rx="4" stroke="currentColor" strokeWidth="2" />
            <line x1="250" y1="15" x2="250" y2="305" stroke="currentColor" strokeWidth="2" />
            <circle cx="250" cy="160" r="55" stroke="currentColor" strokeWidth="2" />
            <circle cx="250" cy="160" r="4" fill="currentColor" />
            <rect x="15" y="75" width="75" height="170" stroke="currentColor" strokeWidth="2" />
            <rect x="410" y="75" width="75" height="170" stroke="currentColor" strokeWidth="2" />
            <rect x="15" y="115" width="30" height="90" stroke="currentColor" strokeWidth="2" />
            <rect x="455" y="115" width="30" height="90" stroke="currentColor" strokeWidth="2" />
            <path d="M90 120 A45 45 0 0 1 90 200" stroke="currentColor" strokeWidth="2" />
            <path d="M410 120 A45 45 0 0 0 410 200" stroke="currentColor" strokeWidth="2" />
          </svg>

          {/* Hero content */}
          <div className="relative mx-auto max-w-7xl">
            <div className="mb-4 flex items-center gap-3">
              <span
                className="h-[2px] w-10"
                style={{ background: "#F5C842" }}
              />
              <span
                className="text-xs font-bold tracking-[0.3em]"
                style={{ color: "#F5C842" }}
              >
                ABOUT US
              </span>
            </div>

            <h1
              className="max-w-4xl font-black leading-[0.92] tracking-tight text-white"
              style={{ fontSize: "clamp(3.2rem, 8vw, 7rem)" }}
            >
              Built for the
              <br />
              <span style={{ color: "#F5C842" }}>Beautiful Game.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
              Developing young talent through discipline, passion, and a love
              for football — one player, one session, one dream at a time.
            </p>


          </div>

          {/* Bottom accent line */}
          <div
            className="absolute bottom-0 left-0 h-[3px] w-full"
            style={{
              background:
                "linear-gradient(90deg, #F5C842 0%, #4B1FA7 45%, transparent 100%)",
            }}
          />
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
