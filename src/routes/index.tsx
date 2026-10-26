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
      { title: "ACE XI Football Academy — Mumbai's Elite Football Training" },
      { name: "description", content: "Train like a pro at ACE XI, Mumbai's premier football academy. Licensed coaches, structured programs for U6–U16, girls' football, and competitive tournaments." },
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
  return (
    <>
      {/* ABOUT / MISSION */}
      <section className="bg-[#0B0612] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#F5C842]">
              More than a game
            </p>
            <h2 className="text-4xl font-black uppercase leading-[0.95] md:text-6xl">
              We play.
              <br />
              We fight.
              <br />
              <span className="text-[#F5C842]">We ACE.</span>
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              AceXI is a football organization committed to helping grow the
              game in India. We believe football builds more than sporting
              ability—it develops discipline, confidence, leadership, teamwork,
              and character.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/70">
              Through structured coaching, competitive opportunities, and
              partnerships with schools, residential societies, parents, and
              local communities, we aim to make football more accessible to
              players of different ages and skill levels.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#F5C842]">
              Our mission
            </p>
            <h3 className="mt-4 text-2xl font-black md:text-3xl">
              Build better players. Build stronger communities.
            </h3>
            <ul className="mt-7 space-y-4">
              {[
                "Develop football talent through professional coaching.",
                "Build a strong grassroots football culture.",
                "Create structured pathways for player development.",
                "Organize quality competitions and meaningful match experiences.",
                "Partner with schools and communities to promote sport.",
                "Inspire discipline, teamwork, leadership, and excellence.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-white/75">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-[#F5F3EE] px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#4B1FA7]">
              What drives us
            </p>
            <h2 className="text-4xl font-black uppercase leading-tight text-[#0B0612] md:text-5xl">
              Our core values
            </h2>
            <p className="mt-4 leading-7 text-[#0B0612]/65">
              The habits built on the pitch shape how we learn, compete, and
              support one another beyond the game.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((value) => (
              <article
                key={value.number}
                className="rounded-2xl border border-[#0B0612]/10 bg-white p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-4xl font-black text-[#4B1FA7]/30">
                  {value.number}
                </p>
                <h3 className="mt-5 text-2xl font-black text-[#0B0612]">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#0B0612]/65">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SCHOOL + SOCIETY PROGRAMS */}
      <section className="bg-white px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#4B1FA7]">
              Football for every community
            </p>
            <h2 className="text-4xl font-black uppercase leading-tight text-[#0B0612] md:text-5xl">
              Take the game beyond the pitch
            </h2>
            <p className="mt-4 leading-7 text-[#0B0612]/65">
              We work with schools and residential communities to create
              accessible, structured, and enjoyable football experiences for
              children and young players.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl bg-[#F5F3EE] p-7 md:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4B1FA7]">
                01 / Education
              </p>
              <h3 className="mt-3 text-2xl font-black text-[#0B0612] md:text-3xl">
                School Football Development
              </h3>
              <p className="mt-3 leading-7 text-[#0B0612]/65">
                Bring football into school life through coaching, competitions,
                camps, and support for school teams.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {SCHOOL_PROGRAMS.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-6 text-[#0B0612]/80">
                    <span className="font-black text-[#4B1FA7]">+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl bg-[#0B0612] p-7 text-white md:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5C842]">
                02 / Community
              </p>
              <h3 className="mt-3 text-2xl font-black md:text-3xl">
                Residential Society Football
              </h3>
              <p className="mt-3 leading-7 text-white/65">
                Create safe, local opportunities for children to stay active,
                build friendships, and discover a lasting love for football.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {SOCIETY_PROGRAMS.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-6 text-white/80">
                    <span className="font-black text-[#F5C842]">+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* CLUB + COMPETITION */}
      <section className="bg-[#4B1FA7] px-5 py-20 text-white md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#F5C842]">
              Learn together. Compete together.
            </p>
            <h2 className="text-4xl font-black uppercase leading-tight md:text-5xl">
              Football club
              <br />
              & competitions
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-white/80">
              Football teaches that no one wins alone. AceXI creates
              opportunities for aspiring players to compete through organized
              teams, leagues, and tournaments while developing discipline,
              teamwork, and a mindset of continuous improvement.
            </p>
            <p className="mt-4 max-w-xl leading-8 text-white/80">
              Our competitions are designed to provide valuable match
              experience, encourage sportsmanship, and bring the football
              community together.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              ["01", "League matches"],
              ["02", "Youth tournaments"],
              ["03", "Football camps"],
              ["04", "Community festivals"],
            ].map(([number, label]) => (
              <div
                key={number}
                className="min-h-36 rounded-2xl border border-white/20 bg-white/[0.08] p-5"
              >
                <p className="text-3xl font-black text-[#F5C842]">{number}</p>
                <p className="mt-5 font-bold">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#4B1FA7]">
              What we do
            </p>
            <h2 className="text-4xl font-black uppercase leading-tight text-[#0B0612] md:text-5xl">
              One game.
              <br />
              Many pathways.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-[#0B0612]/65">
              From first-time players to competitive athletes, our programs
              support learning, practice, performance, and participation.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {ACE_SERVICES.map((service, index) => (
              <div
                key={service}
                className="flex items-center gap-4 rounded-xl border border-[#0B0612]/10 p-4"
              >
                <span className="text-sm font-black text-[#4B1FA7]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold text-[#0B0612]">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-[#F5F3EE] px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#4B1FA7]">
            A place for every player
          </p>
          <h2 className="max-w-3xl text-4xl font-black uppercase leading-tight text-[#0B0612] md:text-5xl">
            Who we serve
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-[#0B0612]/65">
            AceXI connects individuals and organizations that want to learn,
            play, compete, and help football grow.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            {WHO_WE_SERVE.map((audience) => (
              <span
                key={audience}
                className="rounded-full border border-[#0B0612]/15 bg-white px-4 py-3 text-sm font-semibold text-[#0B0612]"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* LESSONS + COMMUNITY */}
      <section className="bg-[#0B0612] px-5 py-20 text-white md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#F5C842]">
              Lessons beyond the game
            </p>
            <h2 className="text-4xl font-black uppercase leading-tight md:text-5xl">
              Character is built
              <br />
              one match at a time.
            </h2>
            <p className="mt-5 leading-8 text-white/65">
              Football teaches players to follow rules, respect opponents,
              respond to setbacks, and handle success with humility. These
              lessons extend beyond the pitch, helping shape stronger
              individuals and communities.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Discipline", "Respect", "Resilience", "Leadership", "Teamwork"].map(
                (value) => (
                  <span
                    key={value}
                    className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[#F5C842]"
                  >
                    {value}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 md:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F5C842]">
              Moments that define us
            </p>
            <h3 className="mt-4 text-2xl font-black md:text-3xl">
              A heroic save. A missed penalty. A last-minute goal.
            </h3>
            <p className="mt-5 leading-8 text-white/65">
              Football is full of moments that stay with us. They build
              confidence, character, and resilience. Win or lose, every match
              leaves a mark—and every new player, fan, and generation adds to
              the story.
            </p>
            <p className="mt-5 text-lg font-bold text-[#F5C842]">
              The story never ends.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-[#F5F3EE] px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#F5C842] px-7 py-12 text-center md:px-14 md:py-16">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#4B1FA7]">
            The next chapter starts here
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-tight text-[#0B0612] md:text-6xl">
            Together, let’s shape the future of football.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#0B0612]/75">
            Every dream begins with a single kick. Join AceXI in inspiring,
            developing, and empowering the next generation of footballers and
            building a stronger football culture across India.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:9082780734"
              className="inline-flex items-center justify-center rounded-full bg-[#0B0612] px-7 py-4 font-bold text-white transition-transform hover:-translate-y-1"
            >
              Call AceXI · 9082780734
            </a>
            <a
              href="https://www.acexifc.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#0B0612]/25 px-7 py-4 font-bold text-[#0B0612] transition-colors hover:bg-white/50"
            >
              Visit AceXI
            </a>
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

// ─── PROGRAMS ─────────────────────────────────────────────────────────────────
const PROGRAMS = [
  {
    num: "01",
    tag: "Seasonal · Mon–Fri",
    name: "Summer Camp",
    desc: "Skill development, fitness & fun. Perfect for beginners to intermediate players.",
    batches: ["7:00–8:00 AM", "8:00–9:00 AM", "9:00–10:00 AM"],
    color: "#F5C842",
    text: "#0B0612",
  },
  {
    num: "02",
    tag: "Regular · Mon–Sat",
    name: "Academy Training",
    desc: "Structured evening sessions, 3×/week model tailored by age group.",
    batches: ["U6·U8·U10·Girls → Mon·Wed·Fri", "U12·U14·U16 → Tue·Thu·Sat"],
    color: "#4B1FA7",
    text: "#fff",
  },
  {
    num: "03",
    tag: "All Ages · All Levels",
    name: "Training Levels",
    desc: "Every player assessed and placed in the right level for maximum growth.",
    batches: ["Beginner", "Intermediate", "Advanced"],
    color: "#1A1A2E",
    text: "#fff",
  },
];

function Programs() {
  return (
    <section className="py-24 px-5 md:px-8" style={{ background: "#fff" }}>
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
                <span className="text-xs font-bold uppercase tracking-wider opacity-80">{p.tag}</span>
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
    <section ref={ref} className="py-24 px-5 md:px-8" style={{ background: "#0B0612" }}>
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

// ─── TEAM ─────────────────────────────────────────────────────────────────────
const COACHES = [
  {
    abbr: "HC",
    badge: "Head Coach",
    name: "Saddam Shaikh",
    role: "Head Coach",
    bio: "Leads ACE XI's overall philosophy, tactics, and player development. With over a decade of coaching experience, Saddam brings structure, discipline, and passion.",
    accentColor: "#4B1FA7",
    imagePath: SaddamImg,
  },
  {
    abbr: "SC",
    badge: "Skills",
    name: "Akash Dhurat",
    role: "AIFF Certified",
    bio: "Develops technical mastery across all age groups — first touch, dribbling, finishing, and decision-making under pressure. Every player gets sharper under this coach's eye.",
    accentColor: "#1A1A2E",
    imagePath: AkashImg,
  },
  {
    abbr: "AC",
    badge: "Assistant",
    name: "Harsh Shinde",
    role: "Youth Development",
    bio: "Works closely with U6–U10 players to instill love for the game from day one. Focused on fun, fundamentals, and building confidence that lasts a lifetime.",
    accentColor: "#F5C842",
    imagePath: HarshImg,
  },
];

function CoachCard({ coach, inView, delay }: {
  coach: typeof COACHES[0];
  inView: boolean;
  delay: number;
}) {
  const [active, setActive] = useState(false);
  const isYellow = coach.accentColor === "#F5C842";
  const textColor = isYellow ? "#0B0612" : "#fff";

  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col relative"
      style={{
        background: coach.accentColor,
        minHeight: "clamp(320px, 44vw, 480px)",
        opacity: inView ? 1 : 0,
        transform: inView
          ? active ? "scale(0.965) translateY(3px)" : "scale(1) translateY(0)"
          : "translateY(48px) scale(0.97)",
        transition: inView
          ? `transform 0.32s cubic-bezier(0.34,1.4,0.64,1), box-shadow 0.32s ease, opacity 0.7s ease ${delay}ms`
          : `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        boxShadow: active ? "0 2px 10px rgba(0,0,0,0.18)" : "0 6px 24px rgba(0,0,0,0.09)",
        cursor: "default",
        WebkitTapHighlightColor: "transparent",
        userSelect: "none",
        willChange: "transform",
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: active ? "rgba(255,255,255,0.06)" : "transparent",
          transition: "background 0.2s ease",
          zIndex: 2,
        }}
      />
      <div style={{ position: "relative", height: "clamp(260px, 32vw, 340px)", flexShrink: 0 }}>
        <img
          src={coach.imagePath}
          alt={coach.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
            display: "block",
            transition: "transform 0.4s ease",
            transform: active ? "scale(1.04)" : "scale(1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to bottom, transparent 50%, ${coach.accentColor} 100%)`,
            pointerEvents: "none",
            opacity: active ? 0.45 : 0,
            transition: "opacity 0.35s ease",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            padding: "4px 10px",
            borderRadius: 999,
            background: isYellow ? "rgba(0,0,0,0.12)" : "rgba(245,200,66,0.15)",
            color: isYellow ? "#0B0612" : "#F5C842",
            backdropFilter: "blur(6px)",
            zIndex: 1,
          }}
        >
          {coach.badge}
        </span>
      </div>
      <div className="relative p-6 lg:p-8 flex flex-col flex-1">
        <p
          style={{
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: isYellow ? "rgba(0,0,0,0.45)" : "#F5C842",
            marginBottom: 6,
          }}
        >
          {coach.role}
        </p>
        <h3
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(1.75rem, 5vw, 2.6rem)",
            color: textColor,
            letterSpacing: active ? "0.025em" : "0em",
            lineHeight: 0.9,
            textTransform: "uppercase",
            transition: "letter-spacing 0.3s ease",
            marginBottom: 10,
            fontWeight: 900,
          }}
        >
          {coach.name}
        </h3>
        <div
          style={{
            height: "1.5px",
            marginBottom: 12,
            background: isYellow ? "rgba(0,0,0,0.18)" : "rgba(255,255,255,0.22)",
            width: active ? "100%" : "36%",
            transition: "width 0.45s cubic-bezier(0.34,1.4,0.64,1)",
          }}
        />
        <p
          style={{
            fontSize: 13,
            fontWeight: 300,
            lineHeight: 1.65,
            flex: 1,
            color: isYellow ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.65)",
          }}
        >
          {coach.bio}
        </p>
      </div>
    </div>
  );
}

function Team() {
  const coachRef = useRef<HTMLDivElement>(null);
  const [coachInView, setCoachInView] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const [contentInView, setContentInView] = useState(false);
  const [contentActive, setContentActive] = useState(false);

  const founderRef = useRef<HTMLDivElement>(null);
  const [founderInView, setFounderInView] = useState(false);
  const [founderActive, setFounderActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCoachInView(true);
      },
      { threshold: 0.05 }
    );

    if (coachRef.current) observer.observe(coachRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setContentInView(true);
      },
      { threshold: 0.05 }
    );

    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setFounderInView(true);
      },
      { threshold: 0.05 }
    );

    if (founderRef.current) observer.observe(founderRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="pt-10 pb-16 lg:pt-14 lg:pb-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "#F5F4FF" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADING */}
        <div className="text-center mb-10 lg:mb-14">
          <p
            className="text-[10px] font-bold tracking-[0.28em] uppercase mb-3"
            style={{ color: "#4B1FA7" }}
          >
            The people behind ACE XI
          </p>

          <h2
            className="font-black uppercase leading-[0.88]"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.8rem, 8vw, 5rem)",
              color: "#0B0612",
            }}
          >
            Meet Our{" "}
            <span style={{ color: "#4B1FA7" }}>Team</span>
          </h2>
        </div>

        {/* ALL FOUR TEAM MEMBERS IN ONE ROW */}
        <div
          ref={coachRef}
          className="grid grid-cols-4 gap-3 lg:gap-5"
        >
          {/* THREE COACHES */}
          {COACHES.slice(0, 3).map((coach, i) => (
            <div key={coach.abbr} className="min-w-0">
              <CoachCard
                coach={coach}
                inView={coachInView}
                delay={i * 120}
              />
            </div>
          ))}

          {/* CONTENT LEAD */}
          <div className="min-w-0" ref={contentRef}>
            <div
              className="rounded-2xl overflow-hidden flex flex-col relative h-full"
              style={{
                background: "#1A1A2E",
                minHeight: "clamp(320px, 44vw, 480px)",
                opacity: contentInView ? 1 : 0,
                transform: contentInView
                  ? contentActive
                    ? "scale(0.965) translateY(3px)"
                    : "scale(1) translateY(0)"
                  : "translateY(48px) scale(0.97)",
                transition:
                  "transform 0.32s cubic-bezier(0.34,1.4,0.64,1), box-shadow 0.32s ease, opacity 0.7s ease",
                boxShadow: contentActive
                  ? "0 2px 10px rgba(0,0,0,0.18)"
                  : "0 6px 24px rgba(0,0,0,0.09)",
                cursor: "default",
                WebkitTapHighlightColor: "transparent",
                userSelect: "none",
                willChange: "transform",
              }}
              onMouseEnter={() => setContentActive(true)}
              onMouseLeave={() => setContentActive(false)}
            >
              {/* HOVER OVERLAY */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: contentActive
                    ? "rgba(255,255,255,0.06)"
                    : "transparent",
                  transition: "background 0.2s ease",
                  zIndex: 2,
                }}
              />

              {/* IMAGE */}
              <div
                style={{
                  position: "relative",
                  height: "clamp(180px, 32vw, 340px)",
                  flexShrink: 0,
                }}
              >
                <img
                  src={AdityaImg}
                  alt="Aditya Dhurat"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    display: "block",
                    transition: "transform 0.4s ease",
                    transform: contentActive ? "scale(1.04)" : "scale(1)",
                  }}
                />

                {/* IMAGE GRADIENT */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, transparent 50%, #1A1A2E 100%)",
                    pointerEvents: "none",
                    opacity: contentActive ? 0.45 : 0,
                    transition: "opacity 0.35s ease",
                  }}
                />

                {/* ROLE BADGE */}
                <span
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "4px 8px",
                    borderRadius: 999,
                    background: "rgba(245,200,66,0.15)",
                    color: "#F5C842",
                    backdropFilter: "blur(6px)",
                    zIndex: 1,
                  }}
                >
                  Content
                </span>
              </div>

              {/* CONTENT */}
              <div className="relative p-3 sm:p-4 lg:p-6 flex flex-col flex-1">
                <p
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#F5C842",
                    marginBottom: 6,
                  }}
                >
                  Content Lead
                </p>

                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(1.2rem, 2.2vw, 2.6rem)",
                    color: "#fff",
                    letterSpacing: contentActive ? "0.025em" : "0em",
                    lineHeight: 0.95,
                    textTransform: "uppercase",
                    transition: "letter-spacing 0.3s ease",
                    marginBottom: 10,
                    fontWeight: 900,
                    overflowWrap: "break-word",
                  }}
                >
                  Aditya Dhurat
                </h3>

                <div
                  style={{
                    height: "1.5px",
                    marginBottom: 12,
                    background: "rgba(255,255,255,0.22)",
                    width: contentActive ? "100%" : "36%",
                    transition:
                      "width 0.45s cubic-bezier(0.34,1.4,0.64,1)",
                  }}
                />

                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 300,
                    lineHeight: 1.65,
                    flex: 1,
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  The eye behind every frame. Aditya captures the energy,
                  grit, and heart of ACE XI — turning every session and match
                  into a story worth telling.
                </p>
              </div>
            </div>
          </div>
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

function Events() {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (num: string) => setOpen((prev) => (prev === num ? null : num));

  return (
    <section className="py-24 px-5 md:px-8" style={{ background: "#0B0612" }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14">
        <div>
          <div className="text-xs font-bold tracking-widest mb-3" style={{ color: "#F5C842" }}>
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
                      className="hidden sm:inline text-xs font-bold px-3 py-1 rounded-full transition-all duration-300"
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
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const selected = ACH[active];

  const startLoop = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActive((a) => (a + 1) % ACH.length), 3500);
  };

  useEffect(() => {
    startLoop();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const handleSelect = (i: number) => { setActive(i); startLoop(); };

  return (
    <section className="py-24 px-5 md:px-8" style={{ background: "#F5F3EE" }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-xs font-bold tracking-widest mb-3" style={{ color: "#4B1FA7" }}>
            MILESTONES
          </div>
          <h2 className="font-black text-[#0B0612] leading-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            Our<br />Achievements
          </h2>
        </div>
        <div
          className="rounded-3xl p-10 md:p-14 text-white transition-all duration-500"
          style={{ background: selected.bg, minHeight: 320 }}
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="text-7xl">{selected.emoji}</div>
            <div className="flex-1">
              <span
                className="inline-block text-xs font-bold tracking-widest px-3 py-1 rounded-full mb-4"
                style={{ background: "rgba(245,200,66,0.2)", color: "#F5C842" }}
              >
                {selected.subtitle}
              </span>
              <h3 className="text-3xl md:text-4xl font-black mb-4">{selected.title}</h3>
              <p className="text-white/80 text-lg max-w-2xl">{selected.desc}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {ACH.map((_, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              aria-label={`Show achievement ${i + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: active === i ? "24px" : "8px",
                height: "8px",
                background: "#4B1FA7",
                opacity: active === i ? 1 : 0.25,
              }}
            />
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
    <section className="py-24 px-5 md:px-8" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14">
        <div className="md:sticky md:top-24 md:self-start">
          <div className="text-xs font-bold tracking-widest mb-3" style={{ color: "#4B1FA7" }}>
            MAKE THE RIGHT CHOICE
          </div>
          <h2 className="font-black text-[#0B0612] leading-[0.95]" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
            Why<br />Choose<br />
            <span style={{ color: "#4B1FA7" }}>ACE?</span>
          </h2>
          <p className="mt-6 text-[#0B0612]/70 text-lg max-w-md">
            We're not just another football academy. We're a system designed to bring out the best in every player.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full font-bold text-white"
            style={{ background: "#4B1FA7" }}
          >
            Join ACE XI <ChevronRight size={18} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {WHY.map((item) => (
            <div
              key={item.t}
              className="rounded-2xl p-6 border border-[#0B0612]/10 hover:border-[#4B1FA7]/40 transition-colors"
            >
              <div className="font-bold text-lg text-[#0B0612] mb-2">{item.t}</div>
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
            style={{ background: "#F5C842" }}
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
    <div style={{ background: "#fff" }}>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <TrustStats />
        <Team />
        <Events />
        <Achievements />
        <BrandStorySections />
        <WhyACE />
      </main>
      <Footer />
    </div>
  );
}