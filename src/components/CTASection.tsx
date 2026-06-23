"use client";

import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Light soft gold/ivory gradient container */}
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gold-gradient-soft rounded-[32px] p-8 md:p-16 text-center relative overflow-hidden shadow-premium border border-gold-light/40 flex flex-col items-center"
        >
          {/* Subtle design element */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/20 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/20 blur-2xl pointer-events-none" />

          {/* Icon indicator */}
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gold shadow-sm mb-6 border border-gold-light/20">
            <Calendar className="w-5 h-5" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark mb-4 max-w-2xl leading-tight">
            Ready To Achieve Your Perfect Smile?
          </h2>
          
          <p className="text-dark/70 font-light max-w-lg mb-8 text-sm md:text-base leading-relaxed">
            Schedule your appointment today and experience premium dental care designed to elevate your health and self-confidence.
          </p>

          <a
            href="#book-appointment"
            className="shine-btn group px-8 py-4 rounded-full bg-gold hover:bg-gold-dark text-white font-semibold flex items-center justify-center gap-2 shadow-premium hover:shadow-premium-hover transition-luxury active:scale-95 cursor-pointer"
          >
            Book Appointment
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
