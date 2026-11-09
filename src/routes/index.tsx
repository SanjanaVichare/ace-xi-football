import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, Suspense } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

import SaddamImg from "../assets/Saddam.jpeg";
import AkashImg from "../assets/Akash.jpeg";
import AdityaImg from "../assets/Aditya.jpeg";
import HarshImg from "../assets/Harsh.png";
import herobg from "../assets/acexi-bg.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ACE XI Football Club — Mumbai Football Academy" },
      { name: "description", content: "Train like a pro at ACE XI, Mumbai football club and academy. Licensed coaches, structured programs for U6–U16, girls' football, and competitive tournaments." },
      { property: "og:title", content: "ACE XI Football Academy" },
      { property: "og:description", content: "Mumbai's elite football academy. Train like a pro." },
    ],
  }),
  component: Index,
});

/*
ACE XI CONTENT ADDITIONS
Add this component to your existing index.tsx file, after the Hero component.
Then render <BrandStorySections /> immediately after <Hero /> inside <main>.
This uses the existing Tailwind setup and your current purple/gold brand palette.
*/

const gradients = {
  dark: "linear-gradient(135deg, #0B0612 0%, #241044 55%, #4B1FA7 100%)",
  light: "linear-gradient(135deg, #F5F3EE 0%, #FFFFFF 55%, #EEE8FA 100%)",
  gold: "linear-gradient(135deg, #F5C842 0%, #FFD966 55%, #FFF0B3 100%)",
  purple: "linear-gradient(135deg, #4B1FA7 0%, #713BD1 55%, #A77BEB 100%)",
  card: "linear-gradient(145deg, rgba(75,31,167,0.12), rgba(245,200,66,0.10))",
};

const CORE_VALUES = [
  {
    number: "01",
    title: "Passion",
    description:
      "Football is at the heart of everything we do. Our passion drives us to inspire players, coaches, and communities every day.",
  },
  {
    number: "02",
    title: "Excellence",
    description:
      "We aim for high standards in coaching, player development, and every football experience we create.",
  },
  {
    number: "03",
    title: "Discipline",
    description:
      "Consistency, commitment, and hard work form the foundation of every successful player and team.",
  },
  {
    number: "04",
    title: "Teamwork",
    description:
      "Great achievements are built through trust, collaboration, and collective effort—on and off the pitch.",
  },
];

const ACE_SERVICES = [
  "Youth Football Training",
  "Professional Football Coaching",
  "School Football Programs",
  "Grassroots Football Development",
  "Elite Player Development",
  "Goalkeeper Training",
  "Player Performance Analysis",
  "Coach Development Workshops",
  "Football Leagues & Tournaments",
  "Football Camps",
  "Football Events & Festivals",
];

const WHO_WE_SERVE = [
  "Young aspiring footballers",
  "Beginner and intermediate players",
  "Competitive athletes",
  "Schools and educational institutions",
  "Residential societies and township communities",
  "Colleges and universities",
  "Parents seeking structured sports development",
  "Football enthusiasts and community groups",
  "Corporate organizations",
];

const SCHOOL_PROGRAMS = [
  "Weekly football coaching sessions",
  "Curriculum-based football training",
  "Inter-house and inter-school tournaments",
  "Football camps and workshops",
  "Physical education support",
  "Talent identification programs",
  "School football team development",
  "Annual sports event management",
];

const SOCIETY_PROGRAMS = [
  "Regular coaching sessions",
  "Weekend football batches",
  "Summer and holiday football camps",
  "Mini tournaments and football festivals",
  "Parent-child football activities",
  "Fitness and recreational football sessions",
];

function BrandStorySections() {
  const programs = [
    {
      number: "01",
      label: "EDUCATION",
      title: "School Football Development",
      description:
        "Bring football into school life through coaching, competitions, camps, and support for school teams.",
      items: SCHOOL_PROGRAMS,
      dark: false,
    },
    {
      number: "02",
      label: "COMMUNITY",
      title: "Residential Society Football",
      description:
        "Create safe, local opportunities for children to stay active, build friendships, and discover a lasting love for football.",
      items: SOCIETY_PROGRAMS,
      dark: true,
    },
  ];

  const competitions = [
    "League matches",
    "Youth tournaments",
    "Football camps",
    "Community festivals",
  ];

  const lessons = [
    "Discipline",
    "Respect",
    "Resilience",
    "Leadership",
    "Teamwork",
  ];

  return (
    <>
      {/* ABOUT / MISSION */}
      <section className="relative isolate overflow-hidden bg-[#241044] px-5 py-14 text-white md:px-8 md:py-20">
        <div className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-[#6D35C8]/30 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-[300px] w-[300px] rounded-full bg-[#F5C842]/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-[#F5C842]">
              <span className="h-[2px] w-10 bg-[#F5C842]" />
              More than a game
            </p>

            <h2
              className="text-6xl font-black uppercase leading-[0.88] tracking-tight sm:text-7xl md:text-8xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              We play.
              <br />
              We fight.
              <br />
              <span className="text-[#F5C842]">We ACE.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/65 md:text-lg">
              AceXI is a football organization committed to helping grow the
              game in India. We believe football builds more than sporting
              ability — it develops discipline, confidence, leadership,
              teamwork, and character.
            </p>

            <p className="mt-3 max-w-xl text-sm leading-7 text-white/50 md:text-base">
              Through structured coaching, competitive opportunities, and
              partnerships with schools, residential societies, parents, and
              local communities, we aim to make football more accessible to
              players of different ages and skill levels.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <span className="h-10 w-1 bg-[#F5C842]" />
              <p className="text-sm font-bold uppercase tracking-widest text-white/80">
                Passion. Purpose. Performance.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 rotate-3 rounded-[2rem] border border-[#F5C842]/20" />

            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-[#6D35C8]/70 via-[#351568] to-[#241044] p-7 shadow-[0_25px_80px_rgba(75,31,167,0.3)] md:p-8">
              <div className="absolute -right-10 -top-10 text-[150px] font-black leading-none text-white/[0.035]">
                XI
              </div>

              <p className="relative text-xs font-black uppercase tracking-[0.3em] text-[#F5C842]">
                Our mission
              </p>

              <h3 className="relative mt-4 text-3xl font-black uppercase leading-tight md:text-4xl">
                Build better players.
                <br />
                <span className="text-[#F5C842]">
                  Build stronger communities.
                </span>
              </h3>

              <div className="my-5 h-px bg-white/15" />

              <ul className="relative space-y-3">
                {[
                  "Develop football talent through professional coaching.",
                  "Build a strong grassroots football culture.",
                  "Create structured pathways for player development.",
                  "Organize quality competitions and meaningful match experiences.",
                  "Partner with schools and communities to promote sport.",
                  "Inspire discipline, teamwork, leadership, and excellence.",
                ].map((item, index) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-0.5 text-sm font-black text-[#F5C842]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-6 text-white/75">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-[#F5F3EE] px-5 py-14 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#6D35C8]">
                What drives us
              </p>

              <h2
                className="text-5xl font-black uppercase leading-none text-[#241044] md:text-7xl"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Our core values<span className="text-[#6D35C8]">.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#241044]/60 md:text-base">
              The habits built on the pitch shape how we learn, compete, and
              support one another beyond the game.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((value, index) => (
              <article
                key={value.number}
                className="group relative min-h-[220px] overflow-hidden rounded-2xl border border-[#6D35C8]/10 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#6D35C8]/30 hover:bg-[#351568] hover:shadow-[0_20px_45px_rgba(75,31,167,0.18)]"
              >
                <span className="absolute -right-3 -top-8 text-8xl font-black text-[#6D35C8]/[0.06] transition-colors duration-500 group-hover:text-white/[0.06]">
                  {value.number}
                </span>

                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#6D35C8]/10 text-lg font-black text-[#6D35C8] transition-all duration-500 group-hover:bg-[#F5C842] group-hover:text-[#241044]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="relative mt-6 text-2xl font-black uppercase text-[#241044] transition-colors duration-500 group-hover:text-white">
                  {value.title}
                </h3>

                <p className="relative mt-3 text-sm leading-6 text-[#241044]/60 transition-colors duration-500 group-hover:text-white/60">
                  {value.description}
                </p>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F5C842] transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SCHOOL + SOCIETY PROGRAMS */}
      <section className="bg-white px-5 py-14 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#6D35C8]">
              Football for every community
            </p>

            <h2
              className="text-5xl font-black uppercase leading-[0.95] text-[#241044] md:text-7xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Take the game
              <br />
              <span className="text-[#6D35C8]">beyond the pitch.</span>
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-[#241044]/60">
              We work with schools and residential communities to create
              accessible, structured, and enjoyable football experiences for
              children and young players.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {programs.map((program) => (
              <article
                key={program.number}
                className={`group relative overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 md:p-8 ${program.dark
                  ? "bg-[#351568] text-white hover:shadow-[0_25px_55px_rgba(75,31,167,0.25)]"
                  : "border border-[#6D35C8]/10 bg-[#F5F3EE] text-[#241044] hover:shadow-[0_25px_55px_rgba(75,31,167,0.12)]"
                  }`}
              >
                <div className="absolute -right-8 -top-12 text-[150px] font-black leading-none opacity-[0.04]">
                  {program.number}
                </div>

                <p
                  className={`relative text-xs font-black uppercase tracking-[0.25em] ${program.dark ? "text-[#F5C842]" : "text-[#6D35C8]"
                    }`}
                >
                  {program.number} / {program.label}
                </p>

                <h3 className="relative mt-5 max-w-md text-3xl font-black uppercase leading-tight md:text-4xl">
                  {program.title}
                </h3>

                <p
                  className={`relative mt-3 max-w-lg text-sm leading-7 ${program.dark ? "text-white/55" : "text-[#241044]/60"
                    }`}
                >
                  {program.description}
                </p>

                <div
                  className={`relative my-5 h-px ${program.dark ? "bg-white/15" : "bg-[#241044]/10"
                    }`}
                />

                <ul className="relative grid gap-3 sm:grid-cols-2">
                  {program.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span
                        className={`font-black ${program.dark ? "text-[#F5C842]" : "text-[#6D35C8]"
                          }`}
                      >
                        +
                      </span>
                      <span
                        className={
                          program.dark ? "text-white/75" : "text-[#241044]/75"
                        }
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLUB + COMPETITIONS */}
      <section className="relative overflow-hidden bg-[#241044] px-5 py-14 text-white md:px-8 md:py-16">
        <div className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-[#6D35C8]/30 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#F5C842]">
              ACE XI Football Club
            </p>

            <h2
              className="text-5xl font-black uppercase leading-[0.9] md:text-7xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Built to compete.
              <br />
              <span className="text-[#F5C842]">Driven to win.</span>
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-white/60">
              Football teaches that no one wins alone. AceXI creates
              opportunities for aspiring players to compete through organized
              teams, leagues, and tournaments while developing discipline,
              teamwork, and a mindset of continuous improvement.
            </p>

            <p className="mt-3 max-w-xl leading-7 text-white/50">
              Our competitions are designed to provide valuable match
              experience, encourage sportsmanship, and bring the football
              community together.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {competitions.map((item, index) => (
              <div
                key={item}
                className="group flex min-h-36 flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.09] to-[#6D35C8]/[0.18] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#F5C842]/50 hover:bg-[#6D35C8]/30"
              >
                <span className="text-3xl font-black text-[#F5C842]/95 transition-colors group-hover:text-[#F5C842]">
                  0{index + 1}
                </span>

                <p className="text-sm font-black uppercase leading-snug">
                  {item}
                </p>

                <div className="mt-3 h-1 w-8 bg-[#F5C842] transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES + WHO WE SERVE */}
      <section className="relative overflow-hidden bg-[#F5F3EE] px-5 py-12 md:px-8 md:py-16">
        <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#6D35C8]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">

            {/* SERVICES - LEFT */}
            <div className="rounded-3xl bg-[#241044] p-6 text-white md:p-8">
              <p className="mb-3 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.25em] text-[#F5C842]">
                <span className="h-[2px] w-7 bg-[#F5C842]" />
                What we do
              </p>

              <h2
                className="text-5xl font-black uppercase leading-[0.88] md:text-6xl"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                One game.
                <br />
                <span className="text-[#F5C842]">Endless possibilities.</span>
              </h2>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/60">
                From the first kick to competitive football, we create
                opportunities for players to learn, grow, train, and achieve
                their potential.
              </p>

              <div className="mt-7 grid gap-2 sm:grid-cols-2">
                {ACE_SERVICES.map((service, index) => (
                  <article
                    key={service}
                    className="group flex min-h-[76px] items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-3 transition-all duration-300 hover:border-[#F5C842]/50 hover:bg-[#6D35C8]/30"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F5C842]/10 text-xs font-black text-[#F5C842] transition-colors group-hover:bg-[#F5C842] group-hover:text-[#241044]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xs font-bold uppercase leading-snug text-white/85 transition-colors group-hover:text-[#F5C842]">
                      {service}
                    </span>

                    <span className="ml-auto text-sm text-white/30 transition-all group-hover:translate-x-1 group-hover:text-[#F5C842]">
                      ↗
                    </span>
                  </article>
                ))}
              </div>
            </div>

            {/* WHO WE SERVE - RIGHT */}
            <div className="rounded-3xl border border-[#6D35C8]/10 bg-white p-6 md:p-8">
              <p className="mb-3 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.25em] text-[#6D35C8]">
                <span className="h-[2px] w-7 bg-[#6D35C8]" />
                Who we serve
              </p>

              <h2
                className="text-5xl font-black uppercase leading-[0.88] text-[#241044] md:text-6xl"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                The game is
                <br />
                <span className="text-[#6D35C8]">for everyone.</span>
              </h2>

              <p className="mt-4 max-w-md text-sm leading-6 text-[#241044]/60">
                Whether you're a player, parent, school, or organization,
                there's a place for you at AceXI.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-2">
                {WHO_WE_SERVE.map((audience, index) => (
                  <article
                    key={audience}
                    className="group flex min-h-[76px] items-center gap-3 rounded-xl border border-[#6D35C8]/10 bg-[#F5F3EE] p-3 transition-all duration-300 hover:border-[#6D35C8]/40 hover:bg-[#351568]"
                  >
                    <span className="text-lg font-black text-[#6D35C8]/50 transition-colors group-hover:text-[#F5C842]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xs font-bold uppercase leading-snug text-[#241044] transition-colors group-hover:text-white">
                      {audience}
                    </span>

                    <span className="ml-auto text-sm text-[#6D35C8]/40 transition-colors group-hover:text-[#F5C842]">
                      ↗
                    </span>
                  </article>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LESSONS + COMMUNITY */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#241044] via-[#351568] to-[#6D35C8] px-5 py-14 text-white md:px-8 md:py-16">
        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#F5C842]/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#F5C842]">
              Lessons beyond the game
            </p>

            <h2
              className="text-5xl font-black uppercase leading-[0.92] md:text-7xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Character is built
              <br />
              <span className="text-[#F5C842]">one match at a time.</span>
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-white/60">
              Football teaches players to follow rules, respect opponents,
              respond to setbacks, and handle success with humility. These
              lessons extend beyond the pitch, helping shape stronger
              individuals and communities.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {lessons.map((value) => (
                <span
                  key={value}
                  className="rounded-full border border-[#F5C842]/25 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#F5C842]"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.07] p-7 backdrop-blur-xl md:p-8">
            <div className="absolute -right-4 -top-8 text-[130px] font-black leading-none text-white/[0.04]">
              XI
            </div>

            <p className="relative text-xs font-black uppercase tracking-[0.25em] text-[#F5C842]">
              Moments that define us
            </p>

            <h3 className="relative mt-5 text-3xl font-black uppercase leading-tight md:text-4xl">
              A heroic save.
              <br />
              A missed penalty.
              <br />
              <span className="text-[#F5C842]">A last-minute goal.</span>
            </h3>

            <p className="relative mt-5 leading-7 text-white/55">
              Football is full of moments that stay with us. They build
              confidence, character, and resilience. Win or lose, every match
              leaves a mark — and every new player, fan, and generation adds to
              the story.
            </p>

            <div className="relative mt-6 border-t border-white/15 pt-5">
              <p className="text-lg font-black uppercase tracking-wide text-[#F5C842]">
                The story never ends.
              </p>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}

// ─── 3D LOADER ────────────────────────────────────────────────────────────────
function Football() {
  const { scene } = useGLTF("/models/football.glb");
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const bounce = Math.abs(Math.sin(t * 2.5));
    ref.current.position.y = bounce * 1.8 - 0.9;
    const spinBoost = 1 - bounce;
    ref.current.rotation.x += 0.03 + spinBoost * 0.07;
    ref.current.rotation.z += 0.008;
    const squash = 0.85 + bounce * 0.15;
    ref.current.scale.set(
      (1 / 55.92) * 1.8 * (1 + (1 - squash) * 0.15),
      (1 / 55.92) * 1.8 * squash,
      (1 / 55.92) * 1.8 * (1 + (1 - squash) * 0.15)
    );
  });

  return <primitive ref={ref} object={scene} />;
}

function Shadow() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const bounce = Math.abs(Math.sin(t * 2.5));
    const s = 0.4 + (1 - bounce) * 0.6;
    ref.current.scale.set(s, 1, s);
    (ref.current.material as THREE.MeshBasicMaterial).opacity =
      0.08 + (1 - bounce) * 0.25;
  });

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.9, 0]}>
      <circleGeometry args={[1.2, 32]} />
      <meshBasicMaterial color="#000000" transparent opacity={0.2} />
    </mesh>
  );
}

function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [dots, setDots] = useState("");
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const DURATION = 3200;

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onDone, 700);
    }, DURATION);
    return () => clearTimeout(timer);
  }, [onDone]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((d) => (d.length >= 3 ? "" : d + "."));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const start = Date.now();
    const raf = () => {
      const p = Math.min((Date.now() - start) / DURATION, 1);
      setProgress(p);
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(ellipse at 50% 40%, #1c1c3a 0%, #0d0d18 60%, #050508 100%)",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "all",
        transition: "opacity 0.7s ease",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.2,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "1.1rem",
          letterSpacing: "0.5em",
          color: "rgba(245,200,66,0.7)",
          marginBottom: "1.5rem",
          textTransform: "uppercase",
          position: "relative",
        }}
      >
        ACE XI
      </div>
      <div style={{ position: "relative", width: 256, height: 256 }}>
        <Canvas
          camera={{ position: [0, 1, 8], fov: 35 }}
          style={{ width: "100%", height: "100%" }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[4, 6, 4]} intensity={2} />
          <pointLight position={[-3, 4, 3]} intensity={3} color="#6ab0ff" />
          <pointLight position={[3, -2, 2]} intensity={1.5} color="#ffffff" />
          <Suspense fallback={null}>
            <Football />
            <Shadow />
          </Suspense>
        </Canvas>
      </div>
      <div
        style={{
          marginTop: "1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.75rem",
          position: "relative",
        }}
      >
        <p
          style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: "0.7rem",
            letterSpacing: "0.35em",
            fontWeight: 300,
            textTransform: "uppercase",
          }}
        >
          Loading Experience{dots}
        </p>
        <div
          style={{
            width: 192,
            height: 1,
            background: "rgba(255,255,255,0.1)",
            borderRadius: 999,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              background: "linear-gradient(to right, #4B1FA7, #F5C842)",
              borderRadius: 999,
              width: `${progress * 100}%`,
              transition: "none",
            }}
          />
        </div>
        <p
          style={{
            color: "rgba(255,255,255,0.3)",
            fontSize: "0.625rem",
            letterSpacing: "0.25em",
          }}
        >
          {Math.round(progress * 100)}%
        </p>
      </div>
    </div>
  );
}

// ─── HOOKS ────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function useCountUp(target: number, active: boolean) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let v = 0;
    const step = Math.ceil(target / 40);
    const t = setInterval(() => {
      v = Math.min(v + step, target);
      setN(v);
      if (v >= target) clearInterval(t);
    }, 40);
    return () => clearInterval(t);
  }, [active, target]);
  return n;
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100vh" }}
    >
      <img
        src={herobg}
        alt="ACE XI Football Academy"
        className="w-full h-full object-cover"
      />
    </section>
  );
}

const PROGRAMS = [
  {
    num: "01",
    tag: "Seasonal · Mon–Fri",
    name: "Residential Coaching",
    desc: "Group football coaching conducted at local grounds, bringing together students from nearby schools and residential communities to learn, practice and develop their football skills.",
    batches: ["7:00–8:00 AM", "8:00–9:00 AM", "9:00–10:00 AM"],
    color: "linear-gradient(135deg, #F5C842 0%, #FFD966 55%, #FFF0B3 100%)",
    text: "#0B0612",
  },
  {
    num: "02",
    tag: "Regular · Mon–Sat",
    name: "Academy Training",
    desc: "Structured football training for enrolled academy players, with regular practice sessions, age-specific batches, fitness development and competitive match preparation.",
    batches: ["U6·U8·U10·Girls → Mon·Wed·Fri", "U12·U14·U16 → Tue·Thu·Sat"],
    color: "linear-gradient(135deg, #4B1FA7 0%, #713BD1 55%, #A77BEB 100%)",
    text: "#fff",
  },
  {
    num: "03",
    tag: "All Ages · All Levels",
    name: "School Coaching",
    desc: "On-campus football coaching programmes for schools, where professional coaches train students through structured sessions focused on football fundamentals, teamwork, fitness and match skills.",
    batches: ["Beginner", "Intermediate", "Advanced"],
    color: "linear-gradient(135deg, #0B0612 0%, #241044 55%, #4B1FA7 100%)",
    text: "#fff",
  },
];

function Programs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F5F3EE] via-white to-[#EEE8FA] px-5 py-28 md:px-8 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <h2 className="font-black text-[#0B0612] leading-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            Football by ACE XI
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {PROGRAMS.map((p) => (
            <div
              key={p.num}
              className="rounded-3xl p-8 flex flex-col gap-5 transition-transform hover:-translate-y-2"
              style={{ background: p.color, color: p.text, minHeight: 420 }}
            >
              <div className="flex items-start justify-between">
                <span className="text-5xl font-black opacity-40">{p.num}</span>
                <span className="text-s font-bold uppercase tracking-wider opacity-80">{p.tag}</span>
              </div>
              <h3 className="text-3xl font-black">{p.name}</h3>
              <p className="opacity-85">{p.desc}</p>
              <div className="mt-auto flex flex-col gap-2">
                {p.batches.map((b) => (
                  <div
                    key={b}
                    className="px-4 py-2 rounded-full text-sm font-semibold"
                    style={{ background: "rgba(255,255,255,0.15)", color: p.text }}
                  >
                    {b}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── STATS ────────────────────────────────────────────────────────────────────
function StatBlock({ n, label, active }: { n: number; label: string; active: boolean }) {
  const count = useCountUp(n, active);
  return (
    <div>
      <div className="font-black" style={{ fontSize: "clamp(3rem, 6vw, 5rem)", color: "#F5C842", lineHeight: 1 }}>
        {count}+
      </div>
      <div className="text-white/70 mt-2 font-semibold">{label}</div>
    </div>
  );
}

function TrustStats() {
  const { ref, inView } = useInView(0.3);
  return (
    <section ref={ref} className="py-24 px-5 md:px-8" style={{ background: "linear-gradient(135deg, #0B0612 0%, #241044 55%, #4B1FA7 100%)" }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14">
        <div>
          <h2 className="text-white font-black mb-10" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Numbers That Speak
          </h2>
          <div className="grid grid-cols-3 gap-6">
            <StatBlock n={50} label="Players Trained" active={inView} />
            <StatBlock n={25} label="Tournaments" active={inView} />
            <StatBlock n={3} label="Partner Schools" active={inView} />
          </div>
        </div>
        <div className="md:border-l md:border-white/10 md:pl-10">
          <div className="text-7xl font-black" style={{ color: "#4B1FA7" }}>"</div>
          <p className="text-2xl md:text-3xl text-white font-bold leading-snug">
            We don't just train players.
            <br />
            <span style={{ color: "#F5C842" }}>We build champions.</span>
          </p>
          <div className="mt-6 text-white/60 font-semibold">— ACE XI Football Academy</div>
        </div>
      </div>
    </section>
  );
}

// ─── EVENTS ───────────────────────────────────────────────────────────────────
const EVENTS = [
  {
    num: "01",
    name: "ACE Cup Championship",
    detail: "25+ teams · All age groups · Annual",
    tag: "Annual · Mumbai",
    expanded: "The ACE Cup is our flagship annual tournament, drawing 25+ teams from across Mumbai. Players across all age groups compete in structured brackets, experiencing high-stakes match play in a professional environment.",
  },
  {
    num: "02",
    name: "School Football League",
    detail: "Partner school teams compete",
    tag: "Inter-School · Mumbai",
    expanded: "Our partner schools face off in a round-robin league format throughout the academic year. This gives school-age players regular competitive exposure and builds healthy rivalries across Mumbai institutions.",
  },
  {
    num: "03",
    name: "Girls' Football Fiesta",
    detail: "Dedicated girls' tournament",
    tag: "Girls' Special",
    expanded: "A dedicated stage for our girls' program — celebrating female footballers with a full tournament experience. Encouraging inclusivity and competitive growth for every girl who trains at ACE XI.",
  },
  {
    num: "04",
    name: "Summer Showdown",
    detail: "Intensive tournament series",
    tag: "Summer Special",
    expanded: "Running alongside our Summer Camp, the Summer Showdown is an intensive short-format tournament series. Players apply their skills in real match scenarios during the peak training season.",
  },
];

/*function Events() {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (num: string) => setOpen((prev) => (prev === num ? null : num));

  return (
    <section className="py-24 px-5 md:px-8" style={{ background: "linear-gradient(135deg, #0B0612 0%, #241044 55%, #4B1FA7 100%)" }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14">
        <div>
          <div className="text-s font-bold tracking-widest mb-3" style={{ color: "#F5C842" }}>
            ORGANIZED BY ACE XI
          </div>
          <h2
            className="font-black text-white leading-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Events &<br />Tournaments
          </h2>
          <p className="mt-6 text-white/50 text-lg max-w-md">
            ACE XI has organized and hosted multiple tournaments across Mumbai, bringing together schools and academies citywide.
          </p>
          <div className="mt-12 inline-block">
            <div
              className="rounded-2xl px-8 py-6"
              style={{ background: "rgba(75,31,167,0.25)", border: "1px solid rgba(75,31,167,0.4)" }}
            >
              <div
                className="font-black"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: "#F5C842", lineHeight: 1 }}
              >
                4+
              </div>
              <div className="text-white/60 mt-1 font-semibold text-sm">Tournaments Hosted</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          {EVENTS.map((ev) => {
            const isOpen = open === ev.num;
            return (
              <div
                key={ev.num}
                className="border-b transition-colors duration-300"
                style={{ borderColor: isOpen ? "rgba(75,31,167,0.6)" : "rgba(255,255,255,0.08)" }}
              >
                <button
                  onClick={() => toggle(ev.num)}
                  className="w-full flex items-center gap-5 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-3xl font-black transition-all duration-300"
                    style={{ color: isOpen ? "#F5C842" : "rgba(255,255,255,0.2)" }}
                  >
                    {ev.num}
                  </span>
                  <div className="flex-1">
                    <div
                      className="font-bold text-lg transition-colors duration-300"
                      style={{ color: isOpen ? "#F5C842" : "#fff" }}
                    >
                      {ev.name}
                    </div>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {ev.detail}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className="hidden sm:inline text-s font-bold px-3 py-1 rounded-full transition-all duration-300"
                      style={{
                        background: isOpen ? "#F5C842" : "rgba(245,200,66,0.1)",
                        color: isOpen ? "#0B0612" : "#F5C842",
                      }}
                    >
                      {ev.tag}
                    </span>
                    <span
                      className="flex items-center justify-center rounded-full flex-shrink-0 transition-all duration-300"
                      style={{
                        width: 28,
                        height: 28,
                        background: isOpen ? "#F5C842" : "rgba(245,200,66,0.12)",
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        style={{
                          transition: "transform 0.35s cubic-bezier(0.34,1.4,0.64,1)",
                          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        }}
                      >
                        <path
                          d="M6 1V11M1 6H11"
                          stroke={isOpen ? "#0B0612" : "#F5C842"}
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                </button>
                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.38s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <p
                      className="text-sm leading-relaxed pb-6 pl-[calc(1.875rem+1.25rem)]"
                      style={{ color: "rgba(255,255,255,0.55)", maxWidth: "90%" }}
                    >
                      {ev.expanded}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
*/
// ─── ACHIEVEMENTS ─────────────────────────────────────────────────────────────
const ACH = [
  {
    emoji: "🏆",
    title: "Mumbai Championship 2024",
    subtitle: "1st Place · Open Category",
    desc: "ACE XI clinched the Mumbai Football Championship, defeating 24 other teams across all age groups.",
    bg: "linear-gradient(145deg, #2a0f6b, #4B1FA7)",
  },
  {
    emoji: "🥇",
    title: "Best Youth Academy Award",
    subtitle: "City Recognition · 2024",
    desc: "Recognized as Mumbai's top youth football academy for structured training and player development.",
    bg: "linear-gradient(145deg, #0f0f2e, #1a1a4e)",
  },
  {
    emoji: "⚽",
    title: "50+ Players Trained",
    subtitle: "All Age Groups",
    desc: "Over 50 players across U6 to U16 have gone through ACE XI's structured training programs.",
    bg: "linear-gradient(145deg, #0a1628, #1a3a60)",
  },
  {
    emoji: "🌟",
    title: "State Level Representation",
    subtitle: "Maharashtra State · 2023–24",
    desc: "Multiple ACE XI players were selected to represent Maharashtra at state-level competitions.",
    bg: "linear-gradient(145deg, #1a0530, #2d0f50)",
  },
  {
    emoji: "🎖️",
    title: "3 Partner Schools Signed",
    subtitle: "Mumbai School Network",
    desc: "ACE XI has partnered with 3 schools across Mumbai to run structured in-school football programs.",
    bg: "linear-gradient(145deg, #0f0520, #2d1070)",
  },
];

function Achievements() {
  return (
    <section
      className="overflow-hidden px-5 py-20 md:px-8 md:py-24"
      style={{
        background:
          "linear-gradient(135deg, #F5F3EE 0%, #ffffff 55%, #eee8fa 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-3 text-s font-bold tracking-[0.25em] text-[#4B1FA7]">
            OUR JOURNEY
          </p>
          <h2
            className="font-black uppercase leading-tight"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              background: "linear-gradient(90deg, #0B0612, #4B1FA7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Achievements
          </h2>
        </div>

        <div className="flex flex-nowrap gap-5 overflow-x-auto pb-6 snap-x snap-mandatory">
          {ACH.map((item, index) => (
            <article
              key={item.title}
              className="w-[280px] min-w-[280px] flex-shrink-0 snap-start rounded-2xl p-6 text-white shadow-xl transition-transform duration-300 hover:-translate-y-2 md:w-[calc(20%-16px)] md:min-w-0"
              style={{
                background: item.bg,
                minHeight: 245,
              }}
            >
              <div className="mb-5 text-4xl">{item.emoji}</div>

              <p className="mb-3 text-s font-bold uppercase tracking-wider text-[#F5C842]">
                {item.subtitle}
              </p>

              <h3 className="mb-3 text-xl font-black leading-tight">
                {item.title}
              </h3>

              <p className="text-sm leading-6 text-white/75">
                {item.desc}
              </p>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── WHY ACE ─────────────────────────────────────────────────────────────────
const WHY = [
  { t: "Structured System", d: "Proven progressive curriculum from fundamentals to advanced tactics." },
  { t: "Pro Coaching", d: "Licensed coaches committed to your long-term growth." },
  { t: "Discipline", d: "We build athletes with the right mindset, on and off the pitch." },
  { t: "Competitive Exposure", d: "Regular tournaments and inter-school league play." },
  { t: "Safe Environment", d: "Inclusive, secure, and encouraging for every player." },
  { t: "Growth Oriented", d: "We track every player's journey and celebrate milestones." },
];

function WhyACE() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F5F3EE] via-white to-[#EEE8FA] px-5 py-28 md:px-8 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14">
        <div className="md:sticky md:top-24 md:self-start">
          <div className="text-s font-bold tracking-widest mb-3" style={{ color: "#4B1FA7" }}>
            MAKE THE RIGHT CHOICE
          </div>
          <h2 className="font-black text-[#0B0612] leading-[0.95]" style={{ fontSize: "clamp(3.5rem, 7vw, 6rem)" }}>
            Why<br />Choose<br />
            ACE?
          </h2>
          <p className="mt-6 text-[#0B0612]/70 text-lg max-w-md">
            We're not just another football academy. We're a system designed to bring out the best in every player.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full font-bold text-white"
            style={{ background: "linear-gradient(135deg, #4B1FA7, #713BD1, #A77BEB)" }}
          >
            Join ACE XI <ChevronRight size={18} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {WHY.map((item) => (
            <div
              key={item.t}
              className="rounded-3xl border border-white/70 bg-gradient-to-br from-white/90 via-white/75 to-[#EEE8FA]/80 p-8 text-[#4B1FA7] shadow-[0_10px_35px_rgba(75,31,167,0.10)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#4B1FA7]/40 hover:shadow-[0_18px_45px_rgba(75,31,167,0.20)]"
            >
              <div className="font-bold text-lg text-[#4B1FA7] mb-2">{item.t}</div>
              <p className="text-sm text-[#0B0612]/65">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20">
        <div
          className="rounded-3xl p-10 md:p-16 text-center"
          style={{ background: "linear-gradient(135deg, #4B1FA7, #2a0f6b)" }}
        >
          <h3 className="font-black text-white mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Ready to Join ACE XI?
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-[#0B0612]"
            style={{ background: "linear-gradient(135deg, #F5C842, #FFD966, #FFF0B3)" }}
          >
            Get Started Today <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
function Index() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ background: "linear-gradient(135deg, #F5F3EE 0%, #FFFFFF 55%, #EEE8FA 100%)" }}>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <TrustStats />
        <Achievements />
        <BrandStorySections />
        <WhyACE />
      </main>
      <Footer />
    </div>
  );
}