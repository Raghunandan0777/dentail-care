"use client";

import { Calendar, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="blue-gradient-soft rounded-[32px] p-8 md:p-16 text-center relative overflow-hidden shadow-premium border border-primary/8 flex flex-col items-center"
        >
          {/* Decorative animated glow elements */}
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary/5 blur-[80px] pointer-events-none animate-pulse-soft" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/5 blur-[80px] pointer-events-none animate-pulse-soft" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/3 blur-[120px] pointer-events-none" />

          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            className="w-14 h-14 rounded-full blue-gradient flex items-center justify-center text-white shadow-premium mb-8"
          >
            <Sparkles className="w-6 h-6" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark mb-4 max-w-2xl leading-tight relative z-10">
            Ready To Achieve Your{" "}
            <span className="blue-gradient-text">Perfect Smile</span>?
          </h2>

          <p className="text-muted font-light max-w-lg mb-4 text-sm md:text-base leading-relaxed relative z-10">
            Schedule your appointment today and experience premium dental care designed to elevate your health and self-confidence.
          </p>

          {/* Urgency text */}
          <p className="text-[10px] uppercase tracking-widest font-bold text-primary/70 mb-8 relative z-10">
            ⚡ Limited slots available this week
          </p>

          <motion.a
            href="#book-appointment"
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="shine-btn ripple-btn group px-10 py-4 rounded-full blue-gradient text-white font-semibold text-[11px] uppercase tracking-widest flex items-center justify-center gap-2.5 shadow-premium hover:shadow-premium-hover transition-all duration-300 cursor-pointer relative z-10"
          >
            <Calendar className="w-4 h-4" />
            Book Appointment
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
