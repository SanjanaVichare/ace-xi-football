import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — ACE XI Football Academy" },
      { name: "description", content: "Get in touch with ACE XI Football Academy. Join our programs or ask us anything." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div style={{ background: "#fff" }}>
      <Navbar />
      <main>
        <section className="px-5 md:px-8 pt-20 pb-14" style={{ background: "#0B0612" }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-xs font-bold tracking-widest mb-3" style={{ color: "#F5C842" }}>
              CONTACT US
            </div>
            <h1 className="font-black text-white leading-[0.95]" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
              Let's Talk<br />Football
            </h1>
          </div>
        </section>

        <section className="py-20 px-5 md:px-8" style={{ background: "#fff" }}>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black text-[#0B0612] mb-6">Get in Touch</h2>
              <div className="space-y-5 text-[#0B0612]/80">
                <div>
                  <div className="text-xs font-bold tracking-widest" style={{ color: "#4B1FA7" }}>LOCATION</div>
                  <div className="font-semibold mt-1">Mumbai, India</div>
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest" style={{ color: "#4B1FA7" }}>EMAIL</div>
                  <div className="font-semibold mt-1">hello@acexi.football</div>
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest" style={{ color: "#4B1FA7" }}>PHONE</div>
                  <div className="font-semibold mt-1">+91 00000 00000</div>
                </div>
              </div>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-3xl p-8 space-y-4"
              style={{ background: "#F5F3EE" }}
            >
              <div>
                <label className="text-xs font-bold tracking-widest text-[#0B0612]/60">NAME</label>
                <input
                  type="text"
                  className="w-full mt-1 px-4 py-3 rounded-xl bg-white border border-transparent focus:border-[#4B1FA7] outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-bold tracking-widest text-[#0B0612]/60">EMAIL</label>
                <input
                  type="email"
                  className="w-full mt-1 px-4 py-3 rounded-xl bg-white border border-transparent focus:border-[#4B1FA7] outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-xs font-bold tracking-widest text-[#0B0612]/60">MESSAGE</label>
                <textarea
                  rows={4}
                  className="w-full mt-1 px-4 py-3 rounded-xl bg-white border border-transparent focus:border-[#4B1FA7] outline-none"
                  placeholder="Tell us about your interest…"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[#0B0612]"
                style={{ background: "#F5C842" }}
              >
                Send Message <ArrowUpRight size={18} />
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
