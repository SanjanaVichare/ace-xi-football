
import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Tournaments — ACE XI Football Academy" },
      {
        name: "description",
        content:
          "Explore tournaments, leagues, and football events organized by ACE XI Football Academy across Mumbai.",
      },
    ],
  }),
  component: EventsPage,
});

const EVENTS = [
  {
    num: "01",
    name: "ACE Cup Championship",
    detail:
      "25+ teams · All age groups · Annual flagship tournament",
    tag: "Annual · Mumbai",
    featured: true,
  },
  {
    num: "02",
    name: "School Football League",
    detail:
      "Partner school teams compete across the season",
    tag: "Inter-School",
  },
  {
    num: "03",
    name: "Girls' Football Fiesta",
    detail:
      "Dedicated girls' tournament celebrating women's football",
    tag: "Girls' Special",
  },
  {
    num: "04",
    name: "Summer Showdown",
    detail:
      "Intensive tournament series during summer camp",
    tag: "Summer",
  },
  {
    num: "05",
    name: "U10 Mini Cup",
    detail:
      "Fun, structured tournament for our youngest players",
    tag: "U10",
  },
  {
    num: "06",
    name: "Friendly Fixtures",
    detail:
      "Regular friendly matches with academies across the city",
    tag: "Year-round",
  },
];

function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
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

          <div className="relative z-10 mx-auto max-w-7xl">

            <h1
              className="max-w-5xl font-black uppercase leading-[0.86] text-white"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(3.4rem, 9vw, 7.5rem)",
              }}
            >
              Compete.
              <br />
              <span style={{ color: "#F5C842" }}>Grow.</span>
              <br />
              Become Legends.
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
              From exciting tournaments to competitive leagues, every event
              is an opportunity to challenge yourself, build confidence, and
              experience the beautiful game.
            </p>
          </div>
        </section>

        {/* EVENTS */}
        <section
          id="events"
          className="px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
          style={{ background: "#F8F7FA" }}
        >
          <div className="mx-auto max-w-7xl">
            {/* Section heading */}
            <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
              <div>
                <div className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-[#4B1FA7]">
                  <span className="h-px w-8 bg-[#4B1FA7]" />
                  THE ACE XI EXPERIENCE
                </div>

                <h2
                  className="text-4xl font-black uppercase leading-none text-[#0B0612] sm:text-5xl lg:text-6xl"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  More Than Just
                  <span className="block text-[#4B1FA7]">
                    A Game.
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-[#0B0612]/60 sm:text-base">
                Discover the tournaments, competitions, and match
                experiences that bring our football community together.
              </p>
            </div>

            {/* Event cards */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {EVENTS.map((ev) => (
                <article
                  key={ev.num}
                  className="group relative flex min-h-[250px] flex-col overflow-hidden rounded-sm border border-[#0B0612]/10 bg-white p-7 text-[#0B0612] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#4B1FA7] hover:bg-[#0B0612] hover:text-white hover:shadow-[0_18px_40px_rgba(75,31,167,0.22)]"
                >
                  {/* Decorative number */}
                  <span
                    aria-hidden="true"
                    className="absolute -right-2 -top-8 select-none text-8xl font-black leading-none text-[#4B1FA7]/[0.055] transition-all duration-500 group-hover:scale-110 group-hover:text-[#F5C842]/10"
                  >
                    {ev.num}
                  </span>

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-xs font-black tracking-[0.2em] text-[#4B1FA7] transition-colors duration-500 group-hover:text-[#F5C842]">
                      EVENT {ev.num}
                    </span>

                    <span className="rounded-full bg-[#4B1FA7]/[0.08] px-3 py-1 text-[10px] font-bold tracking-wide text-[#4B1FA7] transition-all duration-500 group-hover:bg-[#F5C842]/[0.13] group-hover:text-[#F5C842]">
                      {ev.tag}
                    </span>
                  </div>

                  <div className="relative z-10 mt-auto pt-12">
                    <div className="mb-3 h-1 w-9 bg-[#4B1FA7] transition-all duration-500 group-hover:w-16 group-hover:bg-[#F5C842]" />

                    <h3
                      className="text-2xl font-black uppercase leading-tight text-[#0B0612] transition-colors duration-500 group-hover:text-white sm:text-3xl"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {ev.name}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-[#0B0612]/55 transition-colors duration-500 group-hover:text-white/60">
                      {ev.detail}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            {/* Bottom note */}
            <div className="mt-12 flex flex-col gap-3 border-t border-[#0B0612]/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs font-semibold tracking-wide text-[#0B0612]/50">
                BUILT FOR THE LOVE OF THE GAME.
              </p>
              <span className="text-xs font-bold tracking-widest text-[#4B1FA7]">
                ACE XI FOOTBALL ACADEMY
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
