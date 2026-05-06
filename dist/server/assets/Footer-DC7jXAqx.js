import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-D1ToLK2d.js";
import { L as Link } from "./router-H1gWteJE.js";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$3 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
const logoImg = "/assets/acex1-DM4F_-IY.png";
const NAV = [
  { to: "/", label: "Home" },
  { to: "/team", label: "Team" },
  { to: "/about", label: "About Us" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact Us" }
];
function Navbar() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: "sticky top-0 z-50 backdrop-blur-md",
      style: { background: "rgba(11,6,18,0.85)", borderBottom: "1px solid rgba(245,200,66,0.15)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: logoImg,
                alt: "ACE Sports",
                className: "w-10 h-10 object-contain"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-heading font-bold text-xl `, children: [
              "ACE ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ace-gold", children: "Sports" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-8", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: n.to,
              className: "text-sm font-semibold text-white/80 hover:text-[#F5C842] transition-colors",
              activeProps: { style: { color: "#F5C842" } },
              activeOptions: { exact: true },
              children: n.label
            },
            n.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/contact",
              className: "hidden md:inline-flex items-center px-4 py-2 rounded-full text-sm font-bold text-[#0B0612]",
              style: { background: "#F5C842" },
              children: "Join Now"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": "Menu",
              className: "md:hidden text-white",
              onClick: () => setOpen((v) => !v),
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 24 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 24 })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden border-t", style: { borderColor: "rgba(245,200,66,0.15)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-4 flex flex-col gap-3", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: n.to,
            onClick: () => setOpen(false),
            className: "text-white/90 font-semibold py-1",
            activeProps: { style: { color: "#F5C842" } },
            activeOptions: { exact: true },
            children: n.label
          },
          n.to
        )) }) })
      ]
    }
  );
}
const Footer = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-ace-text pt-16 pb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-4 gap-10 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-gradient-purple flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-heading font-black text-sm text-ace-gold", children: "A" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-heading font-bold text-xl text-ace-surface", children: [
            "ACE ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ace-gold", children: "Sports" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ace-surface/60 text-sm leading-relaxed", children: "146-F, Nanji Shamji School Ground, near AADI ALLURE, Kanjurmarg East, Mumbai 400042" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-heading font-bold text-ace-gold mb-4", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-ace-surface/60 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+918452094237", className: "flex items-center gap-2 hover:text-ace-gold transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 14 }),
            " +91 84520 94237"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:acexi.official@gmail.com", className: "flex items-center gap-2 hover:text-ace-gold transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 14 }),
            " acexi.official@gmail.com"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 pt-2", children: ["Instagram", "WhatsApp", "YouTube", "X"].map((social) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#",
              className: "w-8 h-8 rounded-full bg-ace-surface/10 flex items-center justify-center text-ace-surface/60 hover:bg-ace-gold hover:text-ace-text transition-all text-xs font-bold",
              children: social[0]
            },
            social
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-heading font-bold text-ace-gold mb-4", children: "Programs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-ace-surface/60 text-sm", children: ["Football", "Calisthenics", "Cricket", "Archery", "School Coaching", "College Coaching"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/programs", className: "hover:text-ace-gold transition-colors", children: item }) }, item)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-heading font-bold text-ace-gold mb-4", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-ace-surface/60 text-sm", children: [
          { label: "About", href: "/about" },
          { label: "Team", href: "/team" },
          { label: "Gallery", href: "/gallery" },
          { label: "Events", href: "/events" },
          { label: "Contact", href: "/contact" }
        ].map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: link.href, className: "hover:text-ace-gold transition-colors", children: link.label }) }, link.label)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-ace-surface/10 pt-6 text-center text-ace-surface/40 text-sm", children: "© 2025 ACE Sports Organization. All Rights Reserved. | www.acesports.org.in" })
  ] }) });
};
export {
  Footer as F,
  Navbar as N,
  createLucideIcon as c
};
