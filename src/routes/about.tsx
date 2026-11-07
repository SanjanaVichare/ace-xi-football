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
        {/* HERO */}

        <section

          className="relative isolate overflow-hidden px-5 pt-20 pb-16 sm:px-8 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24"

          style={{

            background:

              "radial-gradient(ellipse at 78% 45%, rgba(75,31,167,0.30), transparent 48%), #0B0612",

          }}

        >

          {/* Background decoration */}

          <div

            aria-hidden="true"

            className="pointer-events-none absolute inset-0 overflow-hidden"

          >

            {/* Large XI watermark */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-black leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(18rem, 38vw, 38rem)",
                color: "rgba(255,255,255,0.012)",
                WebkitTextStroke: "1px rgba(245,200,66,0.05)",
              }}
            >
              XI
            </div>

            {/* Football pitch outline */}
            <svg
              aria-hidden="true"
              viewBox="0 0 600 400"
              fill="none"
              className="pointer-events-none absolute right-[-5rem] top-1/2 hidden w-[min(55vw,650px)] -translate-y-1/2 opacity-15 md:block"
              style={{ color: "#F5C842" }}
            >
              <g
                stroke="currentColor"
                strokeWidth="1.2"
                opacity="0.65"
              >
                <rect x="35" y="25" width="530" height="350" rx="2" />
                <line x1="300" y1="25" x2="300" y2="375" />
                <circle cx="300" cy="200" r="65" />
                <circle cx="300" cy="200" r="3" fill="currentColor" />
                <rect x="35" y="105" width="95" height="190" />
                <rect x="35" y="145" width="40" height="110" />
                <rect x="470" y="105" width="95" height="190" />
                <rect x="525" y="145" width="40" height="110" />
                <path d="M130 155 A65 65 0 0 1 130 245" />
                <path d="M470 155 A65 65 0 0 0 470 245" />
                <path d="M35 55 A30 30 0 0 0 65 25" />
                <path d="M535 25 A30 30 0 0 0 565 55" />
                <path d="M35 345 A30 30 0 0 1 65 375" />
                <path d="M535 375 A30 30 0 0 1 565 345" />
              </g>
            </svg>


            {/* Purple ambient glow */}

            <div

              className="absolute -left-32 -top-32 h-80 w-80 rounded-full blur-3xl"

              style={{ background: "rgba(75,31,167,0.18)" }}

            />



            {/* Gold accent glow */}

            <div

              className="absolute bottom-[-100px] right-[20%] h-64 w-64 rounded-full blur-3xl"

              style={{ background: "rgba(245,200,66,0.06)" }}

            />



            {/* Subtle dot texture */}

            <div

              className="absolute inset-0"

              style={{

                backgroundImage:

                  "radial-gradient(rgba(255,255,255,0.15) 0.7px, transparent 0.7px)",

                backgroundSize: "24px 24px",

                opacity: 0.12,

                maskImage:

                  "linear-gradient(to right, transparent 15%, black 100%)",

                WebkitMaskImage:

                  "linear-gradient(to right, transparent 15%, black 100%)",

              }}

            />

          </div>


          {/* Hero content */}
          <div className="relative z-10 mx-auto max-w-7xl">

            <h1
              className="max-w-5xl font-black uppercase leading-[0.86] text-white"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(3.4rem, 9vw, 7.5rem)",
              }}
            >
              Built for the
              <br />
              <span style={{ color: "#F5C842" }}>
                Beautiful Game.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
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
