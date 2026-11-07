
import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — ACE XI Football Academy" },
      {
        name: "description",
        content:
          "Learn about ACE XI Football Academy — Mumbai's elite football training program for youth.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const pillars = [
    {
      number: "01",
      title: "Mission",
      description: "Develop champions on and off the field.",
    },
    {
      number: "02",
      title: "Vision",
      description: "Become Mumbai's most respected youth football academy.",
    },
    {
      number: "03",
      title: "Values",
      description: "Discipline, growth, inclusion, and excellence.",
    },
  ];

  const focusAreas = [
    "Technical skills",
    "Decision-making",
    "Physical fitness",
    "Mental strength",
  ];

  return (
    <div style={{ background: "#fff" }}>
      <Navbar />

      <main>
        {/* HERO — KEPT UNCHANGED */}

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

        {/* OUR STORY + DEVELOPMENT APPROACH */}

        <section className="relative overflow-hidden bg-[#F5F3EE] px-5 py-12 md:px-8 md:py-16">
          <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#6D35C8]/10 blur-[100px]" />

          <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 flex items-center gap-3 text-xs font-black uppercase tracking-[0.25em] text-[#6D35C8]">
                <span className="h-[2px] w-8 bg-[#6D35C8]" />
                Our story
              </p>

              <h2
                className="text-5xl font-black uppercase leading-[0.88] text-[#241044] md:text-7xl"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                More than
                <br />
                <span className="text-[#6D35C8]">just football.</span>
              </h2>

              <div className="mt-6 max-w-2xl space-y-4 text-sm leading-7 text-[#241044]/70 md:text-base">
                <p>
                  ACE XI Football Academy was founded with a single mission —
                  to give Mumbai's young footballers a structured pathway
                  from grassroots to elite-level play. We believe every child
                  deserves world-class coaching, regardless of where they start.
                </p>

                <p>
                  From U6 to U16, our programs are designed around proven
                  youth development principles. We focus on technique,
                  decision-making, fitness, and most importantly — the right
                  mindset to compete and grow.
                </p>
              </div>
            </div>

            {/* Development focus card */}
            <div className="relative overflow-hidden rounded-3xl bg-[#241044] p-6 text-white shadow-[0_20px_55px_rgba(36,16,68,0.15)] md:p-8">
              <div
                aria-hidden="true"
                className="absolute -right-5 -top-10 text-[150px] font-black leading-none text-white/[0.035]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                XI
              </div>

              <p className="relative text-xs font-black uppercase tracking-[0.25em] text-[#F5C842]">
                Our development approach
              </p>

              <h3
                className="relative mt-4 text-4xl font-black uppercase leading-tight md:text-5xl"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Every player has
                <br />
                <span className="text-[#F5C842]">potential.</span>
              </h3>

              <p className="relative mt-3 max-w-md text-sm leading-6 text-white/55">
                We focus on the essential areas that help young players
                develop both on and off the pitch.
              </p>

              <div className="relative mt-6 grid grid-cols-2 gap-3">
                {focusAreas.map((area, index) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] p-3 transition-colors hover:border-[#F5C842]/40 hover:bg-white/10"
                  >
                    <span className="text-xs font-black text-[#F5C842]">
                      0{index + 1}
                    </span>
                    <span className="text-xs font-bold text-white/80">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MISSION / VISION / VALUES */}

        <section className="bg-white px-5 py-12 md:px-8 md:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <div>
                <p className="mb-3 flex items-center gap-3 text-xs font-black uppercase tracking-[0.25em] text-[#6D35C8]">
                  <span className="h-[2px] w-8 bg-[#6D35C8]" />
                  What defines us
                </p>

                <h2
                  className="text-5xl font-black uppercase leading-none text-[#241044] md:text-7xl"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Our purpose<span className="text-[#6D35C8]">.</span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-[#241044]/55">
                Everything we do is guided by a clear purpose and a belief in
                the power of football.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {pillars.map((pillar) => (
                <article
                  key={pillar.number}
                  className="group relative overflow-hidden rounded-2xl border border-[#6D35C8]/10 bg-[#F5F3EE] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#351568] hover:shadow-[0_18px_40px_rgba(53,21,104,0.15)]"
                >
                  <span
                    className="absolute -right-2 -top-5 text-8xl font-black leading-none text-[#6D35C8]/[0.06] transition-colors group-hover:text-white/[0.06]"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {pillar.number}
                  </span>

                  <p className="relative text-xs font-black uppercase tracking-[0.25em] text-[#6D35C8] transition-colors group-hover:text-[#F5C842]">
                    {pillar.number} / {pillar.title}
                  </p>

                  <h3
                    className="relative mt-7 text-3xl font-black uppercase text-[#241044] transition-colors group-hover:text-white"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {pillar.title}
                  </h3>

                  <p className="relative mt-3 max-w-xs text-sm leading-6 text-[#241044]/60 transition-colors group-hover:text-white/60">
                    {pillar.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F5C842] transition-all duration-500 group-hover:w-full" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}

        <section className="bg-[#241044] px-5 py-12 text-white md:px-8 md:py-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 text-xs font-black uppercase tracking-[0.25em] text-[#F5C842]">
                The ACE XI spirit
              </p>

              <h2
                className="text-4xl font-black uppercase leading-none md:text-6xl"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                One team. One dream.{" "}
                <span className="text-[#F5C842]">One XI.</span>
              </h2>
            </div>

            <a
              href="/contact"
              className="inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-[#F5C842] px-7 py-3.5 text-xs font-black uppercase tracking-wider text-[#241044] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFD966] hover:shadow-lg"
            >
              Join our journey
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
