import { Link } from "@tanstack/react-router";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ace-text pt-12 pb-6 sm:pt-16 md:pt-16">
      <div className="container mx-auto px-4 sm:px-5 md:px-4">
        <div className="grid grid-cols-1 gap-8 mb-10 sm:grid-cols-2 sm:gap-8 md:grid-cols-4 md:gap-10 md:mb-12">
          {/* Brand + Address */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link to={"/" as any} className="inline-flex items-center gap-2 mb-4">
              <span className="font-heading font-bold text-xl text-ace-surface">
                ACE <span className="text-ace-gold">Sports</span>
              </span>
            </Link>
            <p className="text-ace-surface/60 text-sm leading-relaxed max-w-sm">
              146-F, Nanji Shamji School Ground, near AADI ALLURE, Kanjurmarg
              East, Mumbai 400042
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-ace-gold mb-4 text-base">
              Contact
            </h4>
            <div className="space-y-2 text-ace-surface/60 text-sm">
              <a
                href="tel:+918452094237"
                className="flex items-center gap-2 py-1.5 hover:text-ace-gold transition-colors min-h-[44px]"
              >
                <Phone size={16} className="shrink-0" /> +91 84520 94237
              </a>
              <a
                href="mailto:acexi.official@gmail.com"
                className="flex items-center gap-2 py-1.5 hover:text-ace-gold transition-colors min-h-[44px] break-all"
              >
                <Mail size={16} className="shrink-0" /> acexi.official@gmail.com
              </a>
              <div className="flex gap-3 pt-2">
                {["Instagram", "WhatsApp", "YouTube"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    aria-label={social}
                    className="w-10 h-10 sm:w-9 sm:h-9 md:w-8 md:h-8 rounded-full bg-ace-surface/10 flex items-center justify-center text-ace-surface/60 hover:bg-ace-gold hover:text-ace-text transition-all text-xs font-bold"
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-bold text-ace-gold mb-4 text-base">
              Programs
            </h4>
            <ul className="space-y-1 text-ace-surface/60 text-sm">
              {["Football", "School Coaching", "Residential Coaching"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="https://www.acexifc.com/"
                      className="inline-block py-1.5 hover:text-ace-gold transition-colors min-h-[36px]"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-ace-gold mb-4 text-base">
              Quick Links
            </h4>
            <ul className="space-y-1 text-ace-surface/60 text-sm">
              {[
                { label: "About", href: "/about" },
                { label: "Team", href: "/team" },
                { label: "Gallery", href: "/gallery" },
                { label: "Events", href: "/events" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href as any}
                    className="inline-block py-1.5 hover:text-ace-gold transition-colors min-h-[36px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-ace-surface/10 pt-6 text-center text-ace-surface/40 text-xs sm:text-sm leading-relaxed px-2">
          © 2025 ACE Sports Organization. All Rights Reserved.{" "}
          <span className="inline-block sm:inline">
            | www.acesports.org.in
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;