import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Tournaments — ACE XI Football Academy" },
      { name: "description", content: "Tournaments, leagues, and events organized by ACE XI Football Academy across Mumbai." },
    ],
  }),
  component: EventsPage,
});

const EVENTS = [
  { num: "01", name: "ACE Cup Championship", detail: "25+ teams · All age groups · Annual flagship tournament", tag: "Annual · Mumbai" },
  { num: "02", name: "School Football League", detail: "Partner school teams compete across the season", tag: "Inter-School" },
  { num: "03", name: "Girls' Football Fiesta", detail: "Dedicated girls' tournament celebrating women's football", tag: "Girls' Special" },
  { num: "04", name: "Summer Showdown", detail: "Intensive tournament series during summer camp", tag: "Summer" },
  { num: "05", name: "U10 Mini Cup", detail: "Fun, structured tournament for our youngest players", tag: "U10" },
  { num: "06", name: "Friendly Fixtures", detail: "Regular friendly matches with academies across the city", tag: "Year-round" },
];

function EventsPage() {
  return (
    <div style={{ background: "#fff" }}>
      <Navbar />
      <main>
        <section className="px-5 md:px-8 pt-20 pb-14" style={{ background: "#0B0612" }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-xs font-bold tracking-widest mb-3" style={{ color: "#F5C842" }}>
              EVENTS & TOURNAMENTS
            </div>
            <h1 className="font-black text-white leading-[0.95]" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
              Compete.<br />Grow. Win.
            </h1>
          </div>
        </section>

        <section className="py-20 px-5 md:px-8" style={{ background: "#fff" }}>
          <div className="max-w-5xl mx-auto">
            {EVENTS.map((ev) => (
              <div key={ev.num} className="flex items-center gap-5 py-7 border-b border-[#0B0612]/10">
                <span className="text-3xl font-black opacity-30 text-[#0B0612]">{ev.num}</span>
                <div className="flex-1">
                  <div className="font-bold text-xl text-[#0B0612]">{ev.name}</div>
                  <p className="text-sm text-[#0B0612]/60 mt-1">{ev.detail}</p>
                </div>
                <span
                  className="hidden sm:inline text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: "rgba(75,31,167,0.1)", color: "#4B1FA7" }}
                >
                  {ev.tag}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
