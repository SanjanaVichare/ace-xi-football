import { createFileRoute } from "@tanstack/react-router";

import { useEffect, useRef, useState } from "react";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import SaddamImg from "../assets/Saddam.jpeg";

import AkashImg from "../assets/Akash.jpeg";

import AdityaImg from "../assets/Aditya.jpeg";

import HarshImg from "../assets/Harsh.png";




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

  bio: string;

  image: string;

  accent: string;

};



const COACHES: Profile[] = [

  {

    name: "Saddam Shaikh",

    role: "Head Coach",

    bio: "Leads ACE XI's overall philosophy, tactics, and player development. With over a decade of coaching experience.",

    accent: COLORS.purple,

    image: SaddamImg,

  },

  {

    name: "Akash Dhurat",

    role: "AIFF Certified",

    bio: "Develops technical mastery across all age groups — first touch, dribbling, finishing, and decision-making under pressure.",

    accent: COLORS.navy,

    image: AkashImg,

  },

  {

    name: "Harsh Shinde",

    role: "Youth Development",

    bio: "Works closely with U6–U10 players to instill love for the game from day one. Focused on fun, fundamentals, and building confidence.",

    accent: COLORS.gold,

    image: HarshImg,

  },

];



const CONTENT_LEAD: Profile = {

  name: "Aditya Dhurat",

  role: "Content Lead",

  bio: "The eye behind every frame. Aditya captures the energy, grit, and heart of ACE XI, turning every session and match into a story.",

  accent: COLORS.navy,

  image: AdityaImg,

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

  size = "clamp(3.5rem, 8vw, 6rem)",

}: {

  eyebrow: string;

  title: string;

  accent: string;

  description?: string;
  size?: string;

}) {

  return (

    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14">

      <p

        className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] sm:text-xs"

        style={{ color: COLORS.purple, fontSize: "1rem" }}

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
}: {
  profile: Profile;
  inView: boolean;
  delay?: number;
}) {
  const [active, setActive] = useState(false);
  const isGold = profile.accent === COLORS.gold;
  const textColor = isGold ? COLORS.ink : "#FFFFFF";

  return (
    <article
      className="relative flex h-full flex-col overflow-hidden rounded-2xl"
      style={{
        background: profile.accent,
        minHeight: "clamp(260px, 36vw, 400px)",
        opacity: inView ? 1 : 0,
        transform: inView
          ? active
            ? "scale(0.965) translateY(3px)"
            : "scale(1) translateY(0)"
          : "translateY(48px) scale(0.97)",
        transition: inView
          ? `transform 0.32s cubic-bezier(0.34,1.4,0.64,1), box-shadow 0.32s ease, opacity 0.7s ease ${delay}ms`
          : `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        boxShadow: active
          ? "0 2px 10px rgba(0,0,0,0.18)"
          : "0 6px 24px rgba(0,0,0,0.09)",
        cursor: "default",
        WebkitTapHighlightColor: "transparent",
        userSelect: "none",
        willChange: "transform",
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {/* Hover Overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: active ? "rgba(255,255,255,0.06)" : "transparent",
          transition: "background 0.2s ease",
          zIndex: 2,
        }}
      />

      {/* Profile Image */}
      <div
        className="relative shrink-0"
        style={{ height: "clamp(160px, 25vw, 260px)" }}
      >
        <img
          src={profile.image}
          alt={profile.name}
          loading="lazy"
          className="h-full w-full object-cover object-top"
          style={{
            display: "block",
            transition: "transform 0.4s ease",
            transform: active ? "scale(1.04)" : "scale(1)",
          }}
        />

        {/* Image Gradient */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, transparent 50%, ${profile.accent} 100%)`,
            opacity: active ? 0.45 : 0,
            transition: "opacity 0.35s ease",
          }}
        />
      </div>

      {/* Profile Details */}
      <div className="relative flex flex-1 flex-col p-3 sm:p-4 lg:p-5">
        {/* Role */}
        <p
          className="mb-1 text-[8px] font-bold uppercase tracking-[0.14em] sm:text-[9px]"
          style={{
            color: isGold ? "rgba(0,0,0,0.45)" : COLORS.gold,
          }}
        >
          {profile.role}
        </p>

        {/* Name */}
        <h3
          className="mb-2 uppercase leading-[0.95]"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(1.15rem, 2vw, 1.8rem)",
            color: textColor,
            letterSpacing: active ? "0.025em" : "0em",
            transition: "letter-spacing 0.3s ease",
            fontWeight: 900,
            overflowWrap: "break-word",
          }}
        >
          {profile.name}
        </h3>

        {/* Divider */}
        <div
          className="mb-2 h-px"
          style={{
            background: isGold
              ? "rgba(0,0,0,0.18)"
              : "rgba(255,255,255,0.22)",
            width: active ? "100%" : "36%",
            transition: "width 0.45s cubic-bezier(0.34,1.4,0.64,1)",
          }}
        />

        {/* Description */}
        <p
          className="flex-1 text-[clamp(11px,1vw,14px)] font-light leading-relaxed"
          style={{
            color: isGold
              ? "rgba(0,0,0,0.55)"
              : "rgba(255,255,255,0.75)",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
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



        {/* TEAM */}

        <section
          ref={coachesSection.ref}
          className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
          style={{ background: COLORS.lavender }}
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="The people behind ACE XI"
              title="Meet Our Team"
              accent={COLORS.purple}
            />

            <div className="grid grid-cols-2 items-stretch gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
              {[...COACHES, CONTENT_LEAD].map((member, index) => (
                <div key={member.name} className="min-w-0">
                  <ProfileCard
                    profile={member}
                    inView={coachesSection.inView}
                    delay={index * 120}
                  />
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
