"use client";

import { useState, useEffect } from "react";
import { Calendar, ArrowRight, ArrowUp, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingWidgets() {
  const [showWidgets, setShowWidgets] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowWidgets(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappNumber = "918866902356";
  const whatsappMessage = encodeURIComponent(
    "Hello Doctor, I would like to schedule a dental appointment at Smile Signature. Please guide me on availability."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      <AnimatePresence>
        {showWidgets && (
          <>
            <div className="fixed right-6 bottom-[76px] lg:bottom-8 z-40 flex flex-col gap-3 items-end pointer-events-none">
              {/* Scroll to Top */}
              <motion.button
                key="scroll-top"
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 20 }}
                transition={{ duration: 0.3 }}
                onClick={scrollToTop}
                className="w-11 h-11 rounded-full bg-white border border-gray-200 text-muted hover:text-primary hover:border-primary/30 flex items-center justify-center shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary pointer-events-auto magnetic-btn"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>

              {/* Call Button (Desktop only, mobile has sticky bar or can just keep it) */}
              <motion.a
                key="call-float"
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 20 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                href="tel:+918866902356"
                className="w-11 h-11 rounded-full bg-white border border-gray-200 text-primary hover:text-white hover:bg-primary hover:border-primary flex items-center justify-center shadow-card hover:shadow-premium-hover transition-all duration-300 pointer-events-auto magnetic-btn"
                aria-label="Call Us"
              >
                <Phone className="w-4 h-4" />
              </motion.a>

              {/* Booking Button (Desktop only, as mobile has the wide sticky bar below) */}
              <motion.a
                key="booking-float"
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                href="#book-appointment"
                className="hidden lg:flex w-12 h-12 rounded-full blue-gradient text-white items-center justify-center shadow-premium hover:shadow-premium-hover transition-all duration-300 pointer-events-auto magnetic-btn"
                aria-label="Book Appointment"
              >
                <Calendar className="w-5 h-5" />
              </motion.a>

              {/* WhatsApp Button Wrapper */}
              <div className="relative group/wa flex items-center justify-end">
                {/* Tooltip */}
                <div className="absolute right-full mr-4 px-3 py-1.5 bg-white rounded-lg shadow-premium border border-gray-100 text-xs font-bold text-dark whitespace-nowrap opacity-0 group-hover/wa:opacity-100 group-hover/wa:-translate-x-1 transition-all duration-300 pointer-events-none flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  Replies in 5 mins
                </div>
                
                {/* WhatsApp Button */}
                <motion.a
                  key="whatsapp-float"
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: 20 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-premium hover:shadow-premium-hover transition-all duration-300 group focus-visible:ring-4 focus-visible:ring-[#25d366]/40 focus:outline-none pointer-events-auto magnetic-btn ripple-btn"
                  aria-label="Contact us on WhatsApp"
                >
                  <svg
                    className="w-7 h-7 fill-white group-hover:scale-110 transition-transform duration-300"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.488 2.01 14.021.986 11.998.986 6.559.986 2.132 5.358 2.13 10.787c-.001 1.72.464 3.4 1.346 4.908L2.457 20.3l4.19-1.146zm11.302-3.115c-.32-.16-1.89-.93-2.185-1.04-.294-.11-.508-.16-.723.16-.214.32-.83.1.04-1.02 1.25-.19.213-.38.1-.693-.16-.312-.89-2.216-1.22-2.993-.32-.76-.64-.66-.88-.673-.22-.01-.48-.016-.74-.016-.258 0-.68.1-1.037.49-.358.39-1.36 1.324-1.36 3.229s1.385 3.75 1.58 4.01c.193.26 2.725 4.153 6.595 5.82 3.13 1.353 4.183 1.218 5.674.966 1.49-.253 2.185-.929 2.185-2.115s-.32-1.92-.72-2.12z" />
                  </svg>
                </motion.a>
              </div>
            </div>

            {/* Mobile Sticky Booking Bar */}
            <motion.div
              key="mobile-sticky-bar"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl px-6 py-4 border-t border-gray-100 flex items-center justify-between shadow-[0_-8px_30px_rgba(0,0,0,0.06)] lg:hidden"
            >
              <div className="flex flex-col text-left">
                <span className="font-serif font-bold text-dark text-sm sm:text-base leading-tight">
                  Smile Signature
                </span>
                <span className="text-[11px] uppercase tracking-wider text-primary font-semibold">
                  Premium Dental Care
                </span>
              </div>

              <a
                href="#book-appointment"
                className="px-5 py-3 rounded-full blue-gradient text-white font-semibold text-xs tracking-wide shadow-premium hover:shadow-premium-hover transition-all duration-300 flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-primary-dark focus:outline-none"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Now
                <ArrowRight className="w-3 h-3" />
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
