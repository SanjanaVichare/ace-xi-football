import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-D1ToLK2d.js";
import { N as Navbar, F as Footer } from "./Footer-DC7jXAqx.js";
import { S as SaddamImg, A as AkashImg, H as HarshImg, a as AdityaImg } from "./Harsh-HAxcESgl.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-H1gWteJE.js";
const COACHES = [{
  abbr: "HC",
  badge: "Head Coach",
  name: "Saddam Shaikh",
  role: "Head Coach",
  bio: "Leads ACE XI's overall philosophy, tactics, and player development. With over a decade of coaching experience, Saddam brings structure, discipline, and passion to every session — shaping players from the ground up.",
  accentColor: "#4B1FA7",
  imagePath: SaddamImg
}, {
  abbr: "SC",
  badge: "Skills",
  name: "Akash Dhurat",
  role: "AIFF Certified",
  bio: "Develops technical mastery across all age groups — first touch, dribbling, finishing, and decision-making under pressure. Every player gets sharper under this coach's eye.",
  accentColor: "#1A1A2E",
  imagePath: AkashImg
}, {
  abbr: "AC",
  badge: "Assistant",
  name: "Harsh Shinde",
  role: "Youth Development",
  bio: "Works closely with U6–U10 players to instill love for the game from day one. Focused on fun, fundamentals, and building confidence that lasts a lifetime.",
  accentColor: "#F5C842",
  imagePath: HarshImg
}];
function CoachCard({
  coach,
  inView,
  delay
}) {
  const [active, setActive] = reactExports.useState(false);
  const isYellow = coach.accentColor === "#F5C842";
  const textColor = isYellow ? "#0B0612" : "#fff";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl overflow-hidden flex flex-col relative", style: {
    background: coach.accentColor,
    minHeight: "clamp(320px, 44vw, 480px)",
    opacity: inView ? 1 : 0,
    transform: inView ? active ? "scale(0.965) translateY(3px)" : "scale(1) translateY(0)" : "translateY(48px) scale(0.97)",
    transition: inView ? `transform 0.32s cubic-bezier(0.34,1.4,0.64,1), box-shadow 0.32s ease, opacity 0.7s ease ${delay}ms` : `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    boxShadow: active ? "0 2px 10px rgba(0,0,0,0.18)" : "0 6px 24px rgba(0,0,0,0.09)",
    cursor: "default",
    WebkitTapHighlightColor: "transparent",
    userSelect: "none",
    willChange: "transform"
  }, onMouseEnter: () => setActive(true), onMouseLeave: () => setActive(false), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-2xl pointer-events-none", style: {
      background: active ? "rgba(255,255,255,0.06)" : "transparent",
      transition: "background 0.2s ease",
      zIndex: 2
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      position: "relative",
      height: "clamp(260px, 32vw, 340px)",
      flexShrink: 0
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: coach.imagePath, alt: coach.name, style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "top",
        display: "block",
        transition: "transform 0.4s ease",
        transform: active ? "scale(1.04)" : "scale(1)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        position: "absolute",
        inset: 0,
        background: `linear-gradient(to bottom, transparent 50%, ${coach.accentColor} 100%)`,
        pointerEvents: "none",
        opacity: active ? 0.45 : 0,
        transition: "opacity 0.35s ease"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
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
        zIndex: 1
      }, children: coach.badge })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-6 lg:p-8 flex flex-col flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: isYellow ? "rgba(0,0,0,0.45)" : "#F5C842",
        marginBottom: 6
      }, children: coach.role }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "clamp(1.75rem, 5vw, 2.6rem)",
        color: textColor,
        letterSpacing: active ? "0.025em" : "0em",
        lineHeight: 0.9,
        textTransform: "uppercase",
        transition: "letter-spacing 0.3s ease",
        marginBottom: 10,
        fontWeight: 900
      }, children: coach.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        height: "1.5px",
        marginBottom: 12,
        background: isYellow ? "rgba(0,0,0,0.18)" : "rgba(255,255,255,0.22)",
        width: active ? "100%" : "36%",
        transition: "width 0.45s cubic-bezier(0.34,1.4,0.64,1)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
        fontSize: 13,
        fontWeight: 300,
        lineHeight: 1.65,
        flex: 1,
        color: isYellow ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.65)"
      }, children: coach.bio })
    ] })
  ] });
}
function TeamPage() {
  const ref = reactExports.useRef(null);
  const [inView, setInView] = reactExports.useState(false);
  const contentRef = reactExports.useRef(null);
  const [contentInView, setContentInView] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, {
      threshold: 0.05
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  reactExports.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setContentInView(true);
    }, {
      threshold: 0.05
    });
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);
  const [contentActive, setContentActive] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    background: "#fff"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-5 md:px-8 pt-20 pb-14", style: {
        background: "#0B0612"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold tracking-widest mb-3", style: {
          color: "#F5C842"
        }, children: "OUR TEAM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-black text-white leading-[0.95]", style: {
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(3rem, 7vw, 6rem)"
        }, children: [
          "The People",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Behind ACE XI"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-white/60 text-lg max-w-xl font-light", children: "Licensed coaches and dedicated staff committed to developing every player." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-10 pb-16 lg:pt-14 lg:pb-24 px-4 sm:px-6 lg:px-16", style: {
        background: "#F5F4FF"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10 lg:mb-14", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold tracking-[0.28em] uppercase mb-3", style: {
            color: "#4B1FA7"
          }, children: "The people on the pitch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-black uppercase leading-[0.88]", style: {
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(2.8rem, 8vw, 5rem)",
            color: "#0B0612"
          }, children: [
            "Our ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#4B1FA7"
            }, children: "Coaches" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5", children: COACHES.map((coach, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(CoachCard, { coach, inView, delay: i * 120 }, coach.abbr)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-10 pb-16 lg:pt-14 lg:pb-24 px-4 sm:px-6 lg:px-16", style: {
        background: "#fff"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10 lg:mb-14", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold tracking-[0.28em] uppercase mb-3", style: {
            color: "#4B1FA7"
          }, children: "Behind the lens" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-black uppercase leading-[0.88]", style: {
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(2.8rem, 8vw, 5rem)",
            color: "#0B0612"
          }, children: [
            "Our ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              color: "#4B1FA7"
            }, children: "Content Lead" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-sm mx-auto", ref: contentRef, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl overflow-hidden flex flex-col relative", style: {
          background: "#1A1A2E",
          minHeight: "clamp(320px, 44vw, 480px)",
          opacity: contentInView ? 1 : 0,
          transform: contentInView ? contentActive ? "scale(0.965) translateY(3px)" : "scale(1) translateY(0)" : "translateY(48px) scale(0.97)",
          transition: contentInView ? "transform 0.32s cubic-bezier(0.34,1.4,0.64,1), box-shadow 0.32s ease, opacity 0.7s ease 0ms" : "opacity 0.7s ease 0ms, transform 0.7s ease 0ms",
          boxShadow: contentActive ? "0 2px 10px rgba(0,0,0,0.18)" : "0 6px 24px rgba(0,0,0,0.09)",
          cursor: "default",
          WebkitTapHighlightColor: "transparent",
          userSelect: "none",
          willChange: "transform"
        }, onMouseEnter: () => setContentActive(true), onMouseLeave: () => setContentActive(false), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-2xl pointer-events-none", style: {
            background: contentActive ? "rgba(255,255,255,0.06)" : "transparent",
            transition: "background 0.2s ease",
            zIndex: 2
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            position: "relative",
            height: "clamp(260px, 32vw, 340px)",
            flexShrink: 0
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: AdityaImg, alt: "Aditya Dhurat", style: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
              display: "block",
              transition: "transform 0.4s ease",
              transform: contentActive ? "scale(1.04)" : "scale(1)"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, transparent 50%, #1A1A2E 100%)",
              pointerEvents: "none",
              opacity: contentActive ? 0.45 : 0,
              transition: "opacity 0.35s ease"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              position: "absolute",
              top: 14,
              right: 14,
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              padding: "4px 10px",
              borderRadius: 999,
              background: "rgba(245,200,66,0.15)",
              color: "#F5C842",
              backdropFilter: "blur(6px)",
              zIndex: 1
            }, children: "Content" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-6 lg:p-8 flex flex-col flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#F5C842",
              marginBottom: 6
            }, children: "Content Lead" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(1.75rem, 5vw, 2.6rem)",
              color: "#fff",
              letterSpacing: contentActive ? "0.025em" : "0em",
              lineHeight: 0.9,
              textTransform: "uppercase",
              transition: "letter-spacing 0.3s ease",
              marginBottom: 10,
              fontWeight: 900
            }, children: "Aditya Dhurat" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              height: "1.5px",
              marginBottom: 12,
              background: "rgba(255,255,255,0.22)",
              width: contentActive ? "100%" : "36%",
              transition: "width 0.45s cubic-bezier(0.34,1.4,0.64,1)"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
              fontSize: 13,
              fontWeight: 300,
              lineHeight: 1.65,
              flex: 1,
              color: "rgba(255,255,255,0.65)"
            }, children: "The eye behind every frame. Aditya captures the energy, grit, and heart of ACE XI — turning every session and match into a story worth telling." })
          ] })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  TeamPage as component
};
