import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logoImg from "../assets/acex1.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/team", label: "Team" },
  { to: "/about", label: "About Us" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{ background: "rgba(11,6,18,0.85)", borderBottom: "1px solid rgba(245,200,66,0.15)" }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logoImg}
            alt="ACE Sports"
            className="w-10 h-10 object-contain"
          />
          <span className={`font-heading font-bold text-xl `}>
            ACE <span className="text-ace-gold">XI</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to as any}
              className="text-sm font-semibold text-white/80 hover:text-[#F5C842] transition-colors"
              activeProps={{ style: { color: "#F5C842" } }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          to={"/contact" as any}
          className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-sm font-bold text-[#0B0612]"
          style={{ background: "#F5C842" }}
        >
          Join Now
        </Link>

        <button
          aria-label="Menu"
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t" style={{ borderColor: "rgba(245,200,66,0.15)" }}>
          <div className="px-5 py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to as any}
                onClick={() => setOpen(false)}
                className="text-white/90 font-semibold py-1"
                activeProps={{ style: { color: "#F5C842" } }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}