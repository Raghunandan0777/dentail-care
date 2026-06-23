"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Meet the Doctor", href: "#doctor" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#testimonials" },
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
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center text-white shadow-premium transition-transform group-hover:scale-105">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl font-bold tracking-wide text-dark group-hover:text-gold transition-colors">
                Smile Signature
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gold font-medium -mt-1">
                Luxury Dental Care
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Primary Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-[11px] uppercase tracking-widest font-semibold text-dark/70 hover:text-gold transition-colors py-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-md px-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#book-appointment"
              className="px-6 py-2.5 rounded-full border border-gold text-gold hover:bg-gold hover:text-white font-semibold text-[11px] uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-premium focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 shine-btn"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-dark/75 hover:text-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-md"
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] z-40 bg-white/95 backdrop-blur-md lg:hidden flex flex-col px-8 py-12 gap-6 shadow-xl"
            aria-label="Mobile Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-serif font-semibold text-dark hover:text-gold transition-colors py-2 border-b border-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#book-appointment"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-8 py-4 rounded-full bg-gold text-white text-center font-semibold text-[11px] uppercase tracking-widest hover:bg-gold-dark transition-all shadow-premium focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark shine-btn"
            >
              Book Appointment
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
