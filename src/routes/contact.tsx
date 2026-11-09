import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
} from "lucide-react";
import { useState, type FormEvent } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — ACE XI Football Club" },
      {
        name: "description",
        content:
          "Get in touch with ACE XI Football Club. Ask about football programs, training batches, and joining the academy.",
      },
    ],
  }),
  component: ContactPage,
});

const WHATSAPP_NUMBER = "918452094237";
const CONTACT_EMAIL = "acexi.official@gmail.com";
const DISPLAY_PHONE = "+91 90827 80734";

// The supplied contact details only specify Mumbai, not an exact ground address.
// This map opens a Google Maps search for ACE XI in Mumbai rather than inventing a pin.
const MAP_SEARCH = "ACE XI Football Club, Mumbai, Maharashtra, India";
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(
  MAP_SEARCH,
)}&output=embed`;

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState("");

  const whatsappMessage = `New ACE XI Contact Submission\n\nName: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormError("Please complete all fields before sending your message.");
      return;
    }

    setFormError("");
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#F7F5FB] text-[#0B0612]">
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
              Let's
              <br />
              <span style={{ color: "#F5C842" }}>Talk.</span>
              <br />
              Football.
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

        {/* CONTACT DETAILS + FORM */}
        <section className="relative px-5 py-16 md:px-8 md:py-24">
          <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-[#8B5CF6]/[0.08] blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="pt-2">
              <p className="mb-3 text-xs font-extrabold tracking-[0.28em] text-[#6D3BC2]">
                WE&apos;RE HERE TO HELP
              </p>
              <h2 className="max-w-lg text-4xl font-black leading-[0.98] tracking-tight text-[#0B0612] md:text-5xl">
                Let&apos;s make your next move count.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-[#0B0612]/60">
                Whether you&apos;re a parent exploring football training for
                your child or a player ready for the next level, we&apos;d love
                to hear from you.
              </p>

              <div className="mt-9 space-y-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=ACE%20XI%20Football%20Club%2C%20Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-2xl border border-white bg-white/75 p-5 shadow-[0_8px_30px_rgba(38,19,69,0.06)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#8B5CF6]/30 hover:shadow-[0_15px_35px_rgba(75,31,167,0.12)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#4B1FA7] to-[#9B6BE8] text-white">
                    <MapPin size={20} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-extrabold tracking-widest text-[#6D3BC2]">
                      LOCATION
                    </span>
                    <span className="mt-1 block font-bold text-[#0B0612]">
                      Mumbai, Maharashtra, India
                    </span>
                    <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-[#6D3BC2]">
                      Search on Google Maps <ArrowUpRight size={13} />
                    </span>
                  </span>
                </a>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group flex items-start gap-4 rounded-2xl border border-white bg-white/75 p-5 shadow-[0_8px_30px_rgba(38,19,69,0.06)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#8B5CF6]/30 hover:shadow-[0_15px_35px_rgba(75,31,167,0.12)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#4B1FA7] to-[#9B6BE8] text-white">
                    <Mail size={20} />
                  </span>
                  <span>
                    <span className="block text-xs font-extrabold tracking-widest text-[#6D3BC2]">
                      EMAIL
                    </span>
                    <span className="mt-1 block break-all font-bold text-[#0B0612]">
                      {CONTACT_EMAIL}
                    </span>
                  </span>
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-2xl border border-white bg-white/75 p-5 shadow-[0_8px_30px_rgba(38,19,69,0.06)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#8B5CF6]/30 hover:shadow-[0_15px_35px_rgba(75,31,167,0.12)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#4B1FA7] to-[#9B6BE8] text-white">
                    <Phone size={20} />
                  </span>
                  <span>
                    <span className="block text-xs font-extrabold tracking-widest text-[#6D3BC2]">
                      PHONE / WHATSAPP
                    </span>
                    <span className="mt-1 block font-bold text-[#0B0612]">
                      {DISPLAY_PHONE}
                    </span>
                    <span className="mt-1 block text-xs text-[#0B0612]/50">
                      Tap to start a WhatsApp chat
                    </span>
                  </span>
                </a>
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#241044] to-[#4B1FA7] p-5 text-white shadow-lg shadow-[#4B1FA7]/15">
                <Clock3 className="shrink-0 text-[#F5C842]" size={21} />
                <div>
                  <p className="text-sm font-extrabold">We&apos;re one message away</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/65">
                    Send your enquiry and our team can follow up with you.
                  </p>
                </div>
              </div>
            </div>

            {/* ENQUIRY FORM */}
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-[0_25px_80px_rgba(38,19,69,0.10)] backdrop-blur-2xl sm:p-9 md:p-10"
            >
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#F5C842] via-[#8B5CF6] to-[#4B1FA7]" />
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold tracking-[0.25em] text-[#6D3BC2]">
                    START A CONVERSATION
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-[#0B0612] md:text-3xl">
                    Send us a message
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#0B0612]/55">
                    Fill in the details. We&apos;ll prepare your message in
                    WhatsApp.
                  </p>
                </div>
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F5C842] to-[#FFE9A6] text-[#0B0612] sm:flex">
                  <Send size={21} />
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-extrabold tracking-widest text-[#0B0612]/70"
                  >
                    YOUR NAME
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                    maxLength={100}
                    placeholder="e.g. Rohan Rane"
                    className="mt-2 w-full rounded-xl border border-[#211039]/10 bg-[#F8F6FC] px-4 py-3.5 text-[#0B0612] outline-none transition placeholder:text-[#0B0612]/35 focus:border-[#6D3BC2] focus:bg-white focus:ring-4 focus:ring-[#6D3BC2]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-extrabold tracking-widest text-[#0B0612]/70"
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    maxLength={254}
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-[#211039]/10 bg-[#F8F6FC] px-4 py-3.5 text-[#0B0612] outline-none transition placeholder:text-[#0B0612]/35 focus:border-[#6D3BC2] focus:bg-white focus:ring-4 focus:ring-[#6D3BC2]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-extrabold tracking-widest text-[#0B0612]/70"
                  >
                    HOW CAN WE HELP?
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                    maxLength={2000}
                    placeholder="Tell us about the program you're interested in, the player's age group, or any questions you have..."
                    className="mt-2 w-full resize-y rounded-xl border border-[#211039]/10 bg-[#F8F6FC] px-4 py-3.5 text-[#0B0612] outline-none transition placeholder:text-[#0B0612]/35 focus:border-[#6D3BC2] focus:bg-white focus:ring-4 focus:ring-[#6D3BC2]/10"
                  />
                  <p className="mt-2 text-right text-xs text-[#0B0612]/40">
                    {message.length}/2000
                  </p>
                </div>

                {formError && (
                  <p
                    role="alert"
                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                  >
                    {formError}
                  </p>
                )}

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F5C842] via-[#FFD966] to-[#F5C842] px-6 py-4 font-extrabold text-[#0B0612] shadow-lg shadow-[#F5C842]/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#F5C842]/30 focus:outline-none focus:ring-4 focus:ring-[#F5C842]/30"
                >
                  Continue to WhatsApp
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>

                <p className="text-center text-xs leading-relaxed text-[#0B0612]/50">
                  WhatsApp opens with your details and message pre-filled.
                  You&apos;ll review and press Send there.
                </p>
              </div>
            </form>
          </div>
        </section>

        {/* MAP */}
        <section className="px-5 pb-20 md:px-8 md:pb-28">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0B0612] via-[#241044] to-[#4B1FA7] p-5 text-white shadow-[0_25px_80px_rgba(38,19,69,0.18)] sm:p-8 md:p-10">
            <div className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-extrabold tracking-[0.28em] text-[#F5C842]">
                  FIND US
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                  Find your way to ACE XI.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
                  Explore the Mumbai area on the map. For the exact training
                  ground and directions, please confirm the venue with our team.
                </p>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  MAP_SEARCH,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-5 py-3 text-sm font-bold text-white backdrop-blur-xl transition hover:border-[#F5C842]/60 hover:bg-white/[0.14]"
              >
                Open Google Maps <Navigation size={16} />
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-1.5 shadow-2xl">
              <iframe
                title="Google Maps search for ACE XI Football Club in Mumbai"
                src={MAP_EMBED_URL}
                width="100%"
                height="390"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-4 text-xs leading-relaxed text-white/45">
              Map search is based on the Mumbai location currently provided.
              It is not a confirmed training-ground pin.
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-5 pb-20 md:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-[2rem] border border-[#8B5CF6]/15 bg-gradient-to-r from-white via-[#F2ECFF] to-[#FFF6D9] p-7 shadow-[0_15px_50px_rgba(75,31,167,0.08)] sm:p-10 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-extrabold tracking-[0.25em] text-[#6D3BC2]">
                READY TO GET STARTED?
              </p>
              <h2 className="mt-2 text-2xl font-black text-[#0B0612] md:text-3xl">
                Your football journey starts here.
              </h2>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[#4B1FA7] to-[#7B45D0] px-6 py-3.5 font-bold text-white shadow-lg shadow-[#4B1FA7]/20 transition hover:-translate-y-1 hover:shadow-xl"
            >
              Talk to ACE XI <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
