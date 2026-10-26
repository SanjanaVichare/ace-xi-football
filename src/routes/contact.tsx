import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useState, type FormEvent } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — ACE XI Football Academy" },
      {
        name: "description",
        content:
          "Get in touch with ACE XI Football Academy. Join our programs or ask us anything.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent("New ACE XI Contact Submission");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:hello@acexi.football?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white">
      <Navbar />

      <main>
        {/* Hero */}
        <section
          className="relative isolate overflow-hidden px-5 pb-24 pt-28 md:px-8"
          style={{
            background:
              "radial-gradient(ellipse at 80% 45%, rgba(75,31,167,0.4), transparent 48%), linear-gradient(135deg, #0B0612 0%, #151020 55%, #0B0612 100%)",
          }}
        >
          {/* Gold dot texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(rgba(245,200,66,0.24) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage:
                "linear-gradient(to right, transparent 5%, black 100%)",
            }}
          />

          {/* Purple ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full blur-3xl"
            style={{ background: "rgba(75,31,167,0.35)" }}
          />

          {/* Oversized XI watermark */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-1/2 select-none font-black leading-none"
            style={{
              transform: "translateY(-50%)",
              fontSize: "clamp(16rem, 34vw, 34rem)",
              color: "rgba(245,200,66,0.035)",
              WebkitTextStroke: "2px rgba(245,200,66,0.12)",
            }}
          >
            XI
          </div>

          {/* Football pitch */}
          <svg
            aria-hidden="true"
            viewBox="0 0 500 320"
            fill="none"
            className="pointer-events-none absolute right-[-5rem] top-1/2 hidden w-[min(55vw,650px)] -translate-y-1/2 md:block"
            style={{ color: "#F5C842", opacity: 0.18 }}
          >
            <rect
              x="15"
              y="15"
              width="470"
              height="290"
              rx="4"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="250"
              y1="15"
              x2="250"
              y2="305"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle
              cx="250"
              cy="160"
              r="55"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="250" cy="160" r="4" fill="currentColor" />
            <rect
              x="15"
              y="75"
              width="75"
              height="170"
              stroke="currentColor"
              strokeWidth="2"
            />
            <rect
              x="410"
              y="75"
              width="75"
              height="170"
              stroke="currentColor"
              strokeWidth="2"
            />
            <rect
              x="15"
              y="115"
              width="30"
              height="90"
              stroke="currentColor"
              strokeWidth="2"
            />
            <rect
              x="455"
              y="115"
              width="30"
              height="90"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M90 120 A45 45 0 0 1 90 200"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M410 120 A45 45 0 0 0 410 200"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>

          {/* Hero content */}
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-4 flex items-center gap-3">
              <span
                className="h-[2px] w-10"
                style={{ background: "#F5C842" }}
              />
              <span
                className="text-xs font-bold tracking-[0.3em]"
                style={{ color: "#F5C842" }}
              >
                CONTACT US
              </span>
            </div>

            <h1
              className="max-w-4xl font-black leading-[0.92] tracking-tight text-white"
              style={{ fontSize: "clamp(3.2rem, 8vw, 7rem)" }}
            >
              Let&apos;s Talk
              <br />
              <span style={{ color: "#F5C842" }}>Football.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
              Have questions about our programs? Want to join the team?
              We&apos;d love to hear from you.
            </p>

            <div className="mt-9 flex items-center gap-3">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-black"
                style={{ background: "#F5C842", color: "#0B0612" }}
              >
                XI
              </span>
              <div>
                <p className="text-sm font-bold tracking-wide text-white">
                  ACE XI Football Academy
                </p>
                <p className="mt-1 text-xs tracking-wider text-white/45">
                  PASSION · DISCIPLINE · EXCELLENCE
                </p>
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-[3px] w-full"
            style={{
              background:
                "linear-gradient(90deg, #F5C842 0%, #4B1FA7 45%, transparent 100%)",
            }}
          />
        </section>

        {/* Contact details and form */}
        <section className="px-5 py-20 md:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <div
                className="mb-3 text-xs font-bold tracking-[0.25em]"
                style={{ color: "#4B1FA7" }}
              >
                WE&apos;RE HERE TO HELP
              </div>

              <h2 className="mb-6 text-3xl font-black text-[#0B0612]">
                Get in Touch
              </h2>

              <p className="mb-9 max-w-md leading-relaxed text-[#0B0612]/65">
                Whether you&apos;re a parent exploring football training for
                your child or a player ready for the next step, reach out to
                us.
              </p>

              <div className="space-y-7 text-[#0B0612]/80">
                <div>
                  <div
                    className="text-xs font-bold tracking-widest"
                    style={{ color: "#4B1FA7" }}
                  >
                    LOCATION
                  </div>
                  <div className="mt-2 font-semibold">Mumbai, India</div>
                </div>

                <div>
                  <div
                    className="text-xs font-bold tracking-widest"
                    style={{ color: "#4B1FA7" }}
                  >
                    EMAIL
                  </div>
                  <a
                    href="mailto:hello@acexi.football"
                    className="mt-2 inline-block font-semibold transition-colors hover:text-[#4B1FA7]"
                  >
                    hello@acexi.football
                  </a>
                </div>

                <div>
                  <div
                    className="text-xs font-bold tracking-widest"
                    style={{ color: "#4B1FA7" }}
                  >
                    PHONE / WHATSAPP
                  </div>
                  <a
                    href="https://wa.me/919082780734"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block font-semibold transition-colors hover:text-[#4B1FA7]"
                  >
                    +91 90827 80734
                  </a>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-3xl border border-black/5 p-6 shadow-[0_15px_60px_rgba(11,6,18,0.08)] sm:p-8"
              style={{ background: "#F5F3EE" }}
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-xs font-bold tracking-widest text-[#0B0612]/70"
                >
                  NAME
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  maxLength={100}
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-[#0B0612] outline-none transition focus:border-[#4B1FA7] focus:ring-2 focus:ring-[#4B1FA7]/10"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="text-xs font-bold tracking-widest text-[#0B0612]/70"
                >
                  EMAIL
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  maxLength={254}
                  className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-[#0B0612] outline-none transition focus:border-[#4B1FA7] focus:ring-2 focus:ring-[#4B1FA7]/10"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="text-xs font-bold tracking-widest text-[#0B0612]/70"
                >
                  MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  maxLength={2000}
                  className="mt-2 w-full resize-y rounded-xl border border-black/10 bg-white px-4 py-3 text-[#0B0612] outline-none transition focus:border-[#4B1FA7] focus:ring-2 focus:ring-[#4B1FA7]/10"
                  placeholder="Tell us about your interest..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold text-[#0B0612] transition hover:-translate-y-0.5 hover:opacity-90"
                style={{ background: "#F5C842" }}
              >
                Send via WhatsApp
                <ArrowUpRight size={18} />
              </button>

              <p className="text-xs leading-relaxed text-[#0B0612]/60">
                WhatsApp will open with your details and message pre-filled.
                You&apos;ll need to press Send in WhatsApp to deliver it.
              </p>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}