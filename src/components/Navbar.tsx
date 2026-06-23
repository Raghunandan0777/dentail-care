"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Doctor", href: "#doctor" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-navbar py-3 shadow-md" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl blue-gradient flex items-center justify-center text-white shadow-premium transition-transform group-hover:scale-105">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl font-bold tracking-wide text-dark group-hover:text-primary transition-colors duration-300">
                Smile Signature
              </span>
              <span className="text-[10px] uppercase tracking-widest text-primary font-medium -mt-1">
                Premium Dental Care
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Primary Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-[11px] uppercase tracking-widest font-semibold text-dark/70 hover:text-primary transition-colors duration-300 py-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#book-appointment"
              className="px-6 py-2.5 rounded-full blue-gradient text-white font-semibold text-[11px] uppercase tracking-widest transition-all duration-300 shadow-premium hover:shadow-premium-hover hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 shine-btn"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-dark/75 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-[72px] z-40 bg-white/97 backdrop-blur-xl lg:hidden flex flex-col px-8 py-12 gap-4 shadow-xl"
            aria-label="Mobile Navigation"
          >
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                className="text-lg font-serif font-semibold text-dark hover:text-primary transition-colors py-3 border-b border-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#book-appointment"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="mt-6 px-8 py-4 rounded-full blue-gradient text-white text-center font-semibold text-[11px] uppercase tracking-widest hover:opacity-90 transition-all shadow-premium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark shine-btn"
            >
              Book Appointment
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
