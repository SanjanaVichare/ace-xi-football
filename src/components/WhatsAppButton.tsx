import { useEffect, useState } from "react";
import { X } from "lucide-react";

const WHATSAPP_NUMBER = "918452094237"; // country code + number, no + or spaces
const WHATSAPP_MESSAGE = "Hi ACE XI! I'd like to know more about your football programs.";

export default function WhatsAppButton() {
    const [mounted, setMounted] = useState(false);
    const [showBubble, setShowBubble] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    // Mount after page load to avoid layout shift
    useEffect(() => {
        setMounted(true);
        const t = setTimeout(() => setShowBubble(true), 1800);
        return () => clearTimeout(t);
    }, []);

    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        WHATSAPP_MESSAGE
    )}`;

    if (!mounted) return null;

    return (
        <div
            className="fixed z-[9998] flex items-end gap-3"
            style={{
                right: "max(16px, env(safe-area-inset-right))",
                bottom: "max(16px, env(safe-area-inset-bottom))",
            }}
        >
            {/* Optional chat bubble — dismissible */}
            {showBubble && !dismissed && (
                <div className="hidden sm:block relative">
                    <div
                        className="relative rounded-2xl bg-white px-4 py-3 pr-8 text-sm text-[#0B0612] shadow-[0_10px_30px_rgba(0,0,0,0.18)] max-w-[220px]"
                        style={{ animation: "waBubbleIn 0.45s cubic-bezier(0.34,1.4,0.64,1) both" }}
                    >
                        <p className="font-semibold leading-snug">
                            Questions about joining? Chat with us 👋
                        </p>
                        <button
                            aria-label="Dismiss message"
                            onClick={() => setDismissed(true)}
                            className="absolute -right-2 -top-2 w-6 h-6 rounded-full bg-[#241044] text-white flex items-center justify-center hover:bg-[#4B1FA7] transition-colors"
                        >
                            <X size={12} />
                        </button>
                        {/* little tail */}
                        <span className="absolute right-[-6px] bottom-3 w-3 h-3 bg-white rotate-45 shadow-[2px_2px_4px_rgba(0,0,0,0.06)]" />
                    </div>
                </div>
            )}

            {/* Main button */}
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with ACE XI on WhatsApp"
                className="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white shadow-[0_10px_25px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-110 active:scale-95"
                style={{
                    background:
                        "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                }}
            >
                {/* Pulse ring */}
                <span
                    aria-hidden
                    className="absolute inset-0 rounded-full"
                    style={{
                        background:
                            "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                        animation: "waPulse 2.2s ease-out infinite",
                        zIndex: -1,
                    }}
                />

                {/* WhatsApp glyph */}
                <svg
                    viewBox="0 0 32 32"
                    width="28"
                    height="28"
                    className="sm:w-8 sm:h-8"
                    fill="currentColor"
                    aria-hidden
                >
                    <path d="M19.11 17.28c-.29-.15-1.72-.85-1.99-.94-.27-.1-.47-.15-.66.15-.2.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.48.1-.2.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5-.17-.01-.36-.01-.56-.01-.2 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43 0 1.43 1.05 2.82 1.19 3.01.15.2 2.06 3.15 4.99 4.42.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.13-.27-.2-.56-.35zM16.03 5.33c-5.9 0-10.7 4.79-10.7 10.68 0 1.88.49 3.72 1.43 5.34L5.33 26.67l5.47-1.42a10.7 10.7 0 0 0 5.22 1.34h.01c5.9 0 10.69-4.79 10.69-10.68 0-2.85-1.11-5.53-3.13-7.55a10.61 10.61 0 0 0-7.56-3.13zm0 19.57h-.01c-1.66 0-3.29-.45-4.71-1.29l-.34-.2-3.5.92.94-3.41-.22-.35a8.9 8.9 0 0 1-1.37-4.74c0-4.91 4-8.9 8.91-8.9 2.38 0 4.62.93 6.3 2.61a8.85 8.85 0 0 1 2.61 6.3c0 4.91-4 8.9-8.9 8.9z" />
                </svg>
            </a>

            {/* Keyframes injected once */}
            <style>{`
        @keyframes waPulse {
          0%   { transform: scale(1);   opacity: 0.55; }
          70%  { transform: scale(1.9); opacity: 0; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes waBubbleIn {
          0%   { opacity: 0; transform: translateY(8px) scale(0.92); }
          100% { opacity: 1; transform: translateY(0)   scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes waPulse { 0%, 100% { opacity: 0; } }
          @keyframes waBubbleIn {
            0%, 100% { opacity: 1; transform: none; }
          }
        }
      `}</style>
        </div>
    );
}