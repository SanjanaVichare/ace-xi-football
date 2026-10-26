import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import SaddamImg from "../assets/Saddam.jpeg";
import AkashImg from "../assets/Akash.jpeg";
import AdityaImg from "../assets/Aditya.jpeg";
import HarshImg from "../assets/Harsh.png";
import RohanImg from "../assets/Rohan.jpeg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — ACE XI Football Academy" },
      {
        name: "description",
        content:
          "Meet the coaches, content team, and leadership behind ACE XI Football Academy.",
      },
    ],
  }),
  component: TeamPage,
});

const COLORS = {
  ink: "#0B0612",
  purple: "#4B1FA7",
  gold: "#F5C842",
  navy: "#1A1A2E",
  lavender: "#F5F4FF",
};

type Profile = {
  name: string;
  role: string;
  badge: string;
  bio: string;
  image: string;
  accent: string;
};

const COACHES: Profile[] = [
  {
    name: "Saddam Shaikh",
    role: "Head Coach",
    badge: "Head Coach",
    bio: "Leads ACE XI's overall philosophy, tactics, and player development. With over a decade of coaching experience, Saddam brings structure, discipline, and passion to every session — shaping players from the ground up.",
    accent: COLORS.purple,
    image: SaddamImg,
  },
  {
    name: "Akash Dhurat",
    role: "AIFF Certified",
    badge: "Skills",
    bio: "Develops technical mastery across all age groups — first touch, dribbling, finishing, and decision-making under pressure. Every player gets sharper under this coach's eye.",
    accent: COLORS.navy,
    image: AkashImg,
  },
  {
    name: "Harsh Shinde",
    role: "Youth Development",
    badge: "Assistant",
    bio: "Works closely with U6–U10 players to instill love for the game from day one. Focused on fun, fundamentals, and building confidence that lasts a lifetime.",
    accent: COLORS.gold,
    image: HarshImg,
  },
];

const CONTENT_LEAD: Profile = {
  name: "Aditya Dhurat",
  role: "Content Lead",
  badge: "Content",
  bio: "The eye behind every frame. Aditya captures the energy, grit, and heart of ACE XI — turning every session and match into a story worth telling.",
  accent: COLORS.navy,
  image: AdityaImg,
};

const FOUNDER: Profile = {
  name: "Rohan Rane",
  role: "Founder, ACE XI Football Academy",
  badge: "Founder",
  bio: "Building a football community where players can develop their skills, grow in confidence, and learn the value of teamwork and discipline.",
  accent: COLORS.purple,
  image: RohanImg,
};

function useSectionInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14">
      <p
        className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] sm:text-xs"
        style={{ color: COLORS.purple }}
      >
        {eyebrow}
      </p>
      <h2
        className="font-black uppercase leading-[0.92]"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(2.7rem, 7vw, 5rem)",
          color: COLORS.ink,
        }}
      >
        {title}
      </h2>
      <div
        className="mx-auto mt-4 h-1 w-14 rounded-full"
        style={{ background: accent }}
      />
      {description && (
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#0B0612]/60 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function ProfileCard({
  profile,
  inView,
  delay = 0,
  featured = false,
}: {
  profile: Profile;
  inView: boolean;
  delay?: number;
  featured?: boolean;
}) {
  const [active, setActive] = useState(false);
  const isGold = profile.accent === COLORS.gold;
  const textColor = isGold ? COLORS.ink : "#FFFFFF";

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl"
      style={{
        background: profile.accent,
        opacity: inView ? 1 : 0,
        transform: inView
          ? active
            ? "translateY(-4px)"
            : "translateY(0)"
          : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.35s ease ${delay}ms, box-shadow 0.35s ease`,
        boxShadow: active
          ? "0 16px 34px rgba(11,6,18,0.16)"
          : "0 5px 18px rgba(11,6,18,0.08)",
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div
        className={`relative shrink-0 overflow-hidden ${featured ? "h-64 sm:h-72 lg:h-80" : "h-60 sm:h-64 lg:h-72"
          }`}
      >
        <img
          src={profile.image}
          alt={profile.name}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.035]"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, rgba(11,6,18,0.02) 45%, ${profile.accent} 100%)`,
          }}
        />
        <span
          className="absolute right-3 top-3 rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] backdrop-blur-md sm:right-4 sm:top-4"
          style={{
            background: isGold
              ? "rgba(11,6,18,0.10)"
              : "rgba(245,200,66,0.16)",
            color: isGold ? COLORS.ink : COLORS.gold,
            border: `1px solid ${isGold ? "rgba(11,6,18,0.12)" : "rgba(245,200,66,0.22)"
              }`,
          }}
        >
          {profile.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-6 pt-1 sm:px-6 sm:pb-7">
        <p
          className="mb-2 text-[9px] font-bold uppercase tracking-[0.18em]"
          style={{
            color: isGold ? "rgba(11,6,18,0.58)" : COLORS.gold,
          }}
        >
          {profile.role}
        </p>

        <h3
          className="mb-3 uppercase leading-none"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(1.65rem, 3vw, 2.35rem)",
            color: textColor,
          }}
        >
          {profile.name}
        </h3>

        <div
          className="mb-4 h-px transition-all duration-300 group-hover:w-full"
          style={{
            width: "38%",
            background: isGold
              ? "rgba(11,6,18,0.22)"
              : "rgba(255,255,255,0.25)",
          }}
        />

        <p
          className="text-[13px] leading-6"
          style={{
            color: isGold
              ? "rgba(11,6,18,0.72)"
              : "rgba(255,255,255,0.76)",
          }}
        >
          {profile.bio}
        </p>
      </div>
    </article>
  );
}

function TeamPage() {
  const coachesSection = useSectionInView<HTMLElement>();
  const contentSection = useSectionInView<HTMLElement>();
  const founderSection = useSectionInView<HTMLElement>();

  return (
    <div style={{ background: "#FFFFFF" }}>
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
              className="absolute -right-5 top-1/2 -translate-y-1/2 select-none font-black leading-none sm:right-0 lg:right-[5%]"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(18rem, 38vw, 38rem)",
                color: "rgba(255,255,255,0.025)",
                WebkitTextStroke: "1px rgba(245,200,66,0.10)",
              }}
            >
              XI
            </div>

            {/* Football pitch outline */}
            <svg
              viewBox="0 0 600 400"
              fill="none"
              className="absolute -right-36 top-1/2 w-[540px] -translate-y-1/2 opacity-30 sm:-right-20 sm:w-[650px] lg:right-0 lg:w-[760px]"
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
            <div className="mb-5 flex items-center gap-3">
              <span
                className="h-[2px] w-8"
                style={{ background: "#F5C842" }}
              />
              <p
                className="text-[10px] font-bold uppercase tracking-[0.28em] sm:text-xs"
                style={{ color: "#F5C842" }}
              >
                The people behind the badge
              </p>
            </div>

            <h1
              className="max-w-5xl font-black uppercase leading-[0.86] text-white"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(3.4rem, 9vw, 7.5rem)",
              }}
            >
              More Than a Team.
              <br />
              <span style={{ color: "#F5C842" }}>
                A Football Family.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
              Meet the coaches and team members bringing the ACE XI
              spirit to every training session, match, and moment.
            </p>

            {/* Decorative bottom label */}
            <div className="mt-9 flex items-center gap-3">
              <span
                className="rounded-full border px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em]"
                style={{
                  color: "#F5C842",
                  borderColor: "rgba(245,200,66,0.28)",
                  background: "rgba(245,200,66,0.06)",
                }}
              >
                United by football
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                ACE XI Football Academy
              </span>
            </div>
          </div>

          {/* Bottom gold divider */}
          <div
            className="absolute bottom-0 left-0 h-px w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(245,200,66,0.65), rgba(75,31,167,0.7), transparent)",
            }}
          />
        </section>

        {/* Coaches */}
        <section
          ref={coachesSection.ref}
          className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
          style={{ background: COLORS.lavender }}
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="The people on the pitch"
              title="Meet Our Coaches"
              accent={COLORS.purple}
              description="Experience, patience, and a shared commitment to helping every player improve."
            />

            <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {COACHES.map((coach, index) => (
                <ProfileCard
                  key={coach.name}
                  profile={coach}
                  inView={coachesSection.inView}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Content team */}
        <section
          ref={contentSection.ref}
          className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
          style={{ background: "#FFFFFF" }}
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Behind the lens"
              title="Stories Beyond the Game"
              accent={COLORS.purple}
              description="The moments, people, and hard work that make ACE XI more than what happens on the pitch."
            />

            <div className="mx-auto max-w-md">
              <ProfileCard
                profile={CONTENT_LEAD}
                inView={contentSection.inView}
                featured
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
