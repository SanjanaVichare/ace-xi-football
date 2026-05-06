import { T as jsxRuntimeExports } from "./worker-entry-D1ToLK2d.js";
import { N as Navbar, F as Footer } from "./Footer-DC7jXAqx.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-H1gWteJE.js";
const EVENTS = [{
  num: "01",
  name: "ACE Cup Championship",
  detail: "25+ teams · All age groups · Annual flagship tournament",
  tag: "Annual · Mumbai"
}, {
  num: "02",
  name: "School Football League",
  detail: "Partner school teams compete across the season",
  tag: "Inter-School"
}, {
  num: "03",
  name: "Girls' Football Fiesta",
  detail: "Dedicated girls' tournament celebrating women's football",
  tag: "Girls' Special"
}, {
  num: "04",
  name: "Summer Showdown",
  detail: "Intensive tournament series during summer camp",
  tag: "Summer"
}, {
  num: "05",
  name: "U10 Mini Cup",
  detail: "Fun, structured tournament for our youngest players",
  tag: "U10"
}, {
  num: "06",
  name: "Friendly Fixtures",
  detail: "Regular friendly matches with academies across the city",
  tag: "Year-round"
}];
function EventsPage() {
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
        }, children: "EVENTS & TOURNAMENTS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-black text-white leading-[0.95]", style: {
          fontSize: "clamp(3rem, 7vw, 6rem)"
        }, children: [
          "Compete.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Grow. Win."
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-5 md:px-8", style: {
        background: "#fff"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto", children: EVENTS.map((ev) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5 py-7 border-b border-[#0B0612]/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-black opacity-30 text-[#0B0612]", children: ev.num }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-xl text-[#0B0612]", children: ev.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#0B0612]/60 mt-1", children: ev.detail })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline text-xs font-bold px-3 py-1 rounded-full", style: {
          background: "rgba(75,31,167,0.1)",
          color: "#4B1FA7"
        }, children: ev.tag })
      ] }, ev.num)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  EventsPage as component
};
