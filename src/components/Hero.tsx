"use client";

import Image from "next/image";
import { Phone, Calendar, CheckCircle2, ShieldCheck, Award, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 90,
        damping: 18,
      },
    },
  };

  const slowFloat = {
    animate: {
      y: [0, -8, 0],
      rotate: [0, 0.4, 0],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  const floatBadge1 = {
    animate: {
      y: [0, -6, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut" as const,
        delay: 0.5,
      },
    },
  };

  const floatBadge2 = {
    animate: {
      y: [0, 6, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const,
        delay: 1,
      },
    },
  };

  const stats = [
    { label: "Happy Patients", val: "5000+", icon: Star },
    { label: "Years Experience", val: "10+", icon: Award },
    { label: "Certified Dentists", val: "Elite", icon: ShieldCheck },
    { label: "Modern Tech", val: "3D Scan", icon: CheckCircle2 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-24 flex flex-col items-center justify-center bg-white overflow-hidden"
    >
      {/* Soft luxury background lighting */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-gold-light/10 blur-3xl -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[420px] h-[420px] rounded-full bg-gold-light/15 blur-3xl translate-x-1/3 pointer-events-none" />
      <div className="absolute top-10 right-10 w-24 h-24 border border-gold-light/20 rounded-full opacity-30 pointer-events-none animate-spin-slow" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center w-full z-10">
        
        {/* Left Column Content - Typography & Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Star Rating Trust Badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-1.5 mb-4"
          >
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold shrink-0" />
              ))}
            </div>
            <span className="text-[11px] font-semibold text-dark/65 uppercase tracking-widest ml-1.5 font-sans">
              5.0 Rated (2,000+ Reviews)
            </span>
          </motion.div>

          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-light/30 border border-gold/15 text-gold-dark font-semibold text-[10px] tracking-widest uppercase mb-6 font-sans"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            ✨ Trusted Dental Care
          </motion.div>

          {/* Heading Redesign */}
          <motion.h1
            variants={itemVariants}
            className="text-dark leading-[1.1] mb-8 font-serif tracking-wide"
          >
            <span className="block font-light italic text-gold-dark text-3xl md:text-5xl lg:text-6xl mb-2">
              Transform Your Smile
            </span>
            <span className="block font-bold text-4xl md:text-6xl lg:text-7xl">
              With{" "}
              <span className="relative inline-block">
                <span className=" bg-clip-text bg-gradient-to-r from-gold to-gold-dark">
                  Premium Dental Care
                </span>
                <span className="absolute bottom-2 left-0 w-full h-[1.5px] bg-gold/30" />
              </span>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-base text-dark/65 font-light leading-relaxed mb-10 max-w-xl font-sans"
          >
            Experience exceptional dental treatments, advanced technology, and personalized care designed to give you the confidence to smile brighter every day.
          </motion.p>

          {/* Call to Actions - Magnetic and Tactile hover */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16 w-full sm:w-auto font-sans"
          >
            <motion.a
              href="#book-appointment"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full bg-gold text-white font-semibold text-[11px] uppercase tracking-widest text-center hover:bg-gold-dark shadow-premium hover:shadow-premium-hover transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 shine-btn"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </motion.a>
            <motion.a
              href="tel:+918866902356"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full border border-dark/10 hover:border-gold hover:text-gold text-dark font-semibold text-[11px] uppercase tracking-widest text-center transition-all duration-300 flex items-center justify-center gap-2 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </motion.a>
          </motion.div>

          {/* Trust Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-gray-100 pt-8 w-full font-sans"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-gold font-bold text-xl md:text-2xl font-serif">
                    <Icon className="w-3.5 h-3.5 text-gold/50 shrink-0" />
                    <span>{stat.val}</span>
                  </div>
                  <span className="text-[9px] text-dark/45 font-semibold uppercase tracking-widest mt-1">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Column Content - Dentist Image Frame with Slow Float */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 18, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center relative w-full"
        >
          {/* Main image container */}
          <motion.div
            variants={slowFloat}
            animate="animate"
            className="relative w-full max-w-[390px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-premium border border-gray-100 bg-gray-50 z-10"
          >
            <Image
              src="/images/hero-dentist.png"
              alt="Dr. Alexander Mercer smiling friendly in modern luxury dental clinic background"
              fill
              sizes="(max-w-md) 100vw, 390px"
              className="object-cover object-center scale-102 hover:scale-100 transition-transform duration-[1.5s]"
              priority
            />
            {/* Elegant luxury frame overlay */}
            <div className="absolute inset-0 border-[8px] border-white/10 pointer-events-none rounded-[32px]" />
          </motion.div>

          {/* Floating decorative UI badges */}
          <motion.div
            variants={floatBadge1}
            animate="animate"
            className="absolute -top-6 -right-4 glass-card p-4 rounded-2xl shadow-premium border border-white/70 flex items-center gap-3 z-20 hidden sm:flex font-sans"
          >
            <div className="w-9 h-9 rounded-full bg-gold-light/40 flex items-center justify-center text-gold">
              <Star className="w-4.5 h-4.5 fill-gold text-gold" />
            </div>
            <div>
              <p className="text-[9px] text-dark/45 font-semibold uppercase tracking-widest">Top Rated</p>
              <p className="text-xs font-bold text-dark">5-Star Treatment</p>
            </div>
          </motion.div>

          <motion.div
            variants={floatBadge2}
            animate="animate"
            className="absolute -bottom-6 -left-4 glass-card px-5 py-4 rounded-2xl shadow-premium border border-white/70 flex items-center gap-3 z-20 font-sans"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <p className="text-[9px] text-dark/45 font-semibold uppercase tracking-widest">Status</p>
              <p className="text-xs font-bold text-dark">Online Booking</p>
            </div>
          </motion.div>

          {/* Luxury Frame Accents */}
          <div className="absolute inset-0 border border-gold/10 rounded-[36px] -m-3 pointer-events-none max-w-[390px] mx-auto" />
          <div className="absolute inset-0 border border-gold/5 rounded-[42px] -m-6 pointer-events-none hidden sm:block max-w-[390px] mx-auto" />
        </motion.div>

      </div>

      {/* Horizontal Trust Badges Bar */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="border-t border-gray-100 mt-28 pt-16 w-full max-w-7xl mx-auto px-6 z-10 relative font-sans"
      >
        <p className="text-center text-[10px] uppercase tracking-widest text-dark/40 font-bold mb-10">
          Our Professional Certifications & Guarantees
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 p-5 rounded-2xl bg-ivory/30 border border-gold-light/10 hover:border-gold/25 hover:shadow-premium transition-all duration-500">
            <span className="text-gold text-2xl">🛡️</span>
            <div className="text-left text-xs text-dark/80">
              <p className="text-dark font-bold text-xs uppercase tracking-wider">100% Painless</p>
              <p className="text-[9px] text-dark/45 font-semibold uppercase tracking-widest mt-0.5">Treatment Guarantee</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 p-5 rounded-2xl bg-ivory/30 border border-gold-light/10 hover:border-gold/25 hover:shadow-premium transition-all duration-500">
            <span className="text-gold text-2xl">🔬</span>
            <div className="text-left text-xs text-dark/80">
              <p className="text-dark font-bold text-xs uppercase tracking-wider">FDA Approved</p>
              <p className="text-[9px] text-dark/45 font-semibold uppercase tracking-widest mt-0.5">Clinical Materials</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 p-5 rounded-2xl bg-ivory/30 border border-gold-light/10 hover:border-gold/25 hover:shadow-premium transition-all duration-500">
            <span className="text-gold text-2xl">🎓</span>
            <div className="text-left text-xs text-dark/80">
              <p className="text-dark font-bold text-xs uppercase tracking-wider">Elite Specialists</p>
              <p className="text-[9px] text-dark/45 font-semibold uppercase tracking-widest mt-0.5">BDS & MDS Certified</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 p-5 rounded-2xl bg-ivory/30 border border-gold-light/10 hover:border-gold/25 hover:shadow-premium transition-all duration-500">
            <span className="text-gold text-2xl">🌟</span>
            <div className="text-left text-xs text-dark/80">
              <p className="text-dark font-bold text-xs uppercase tracking-wider">ISO Certified</p>
              <p className="text-[9px] text-dark/45 font-semibold uppercase tracking-widest mt-0.5">Hygiene Standards</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
