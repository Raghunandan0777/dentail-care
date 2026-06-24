"use client";

import Image from "next/image";
import { Phone, Calendar, CheckCircle2, ShieldCheck, Award, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-serif font-bold text-2xl md:text-3xl text-primary">
      {count}{suffix}
    </span>
  );
}

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.35,
      },
    },
  };

  const slowFloat = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 0.5, 0],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  const floatBadge1 = {
    animate: {
      y: [0, -8, 0],
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
      y: [0, 8, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const,
        delay: 1,
      },
    },
  };

  const stats = [
    { label: "Happy Patients", val: 5000, suffix: "+", icon: Star },
    { label: "Years Experience", val: 10, suffix: "+", icon: Award },
    { label: "Success Rate", val: 98, suffix: "%", icon: ShieldCheck },
    { label: "Modern Tech", val: 3, suffix: "D Scan", icon: CheckCircle2 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-24 flex flex-col items-center justify-center bg-white overflow-hidden"
    >
      {/* Animated gradient background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary-100/40 blur-[120px] animate-pulse-soft" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary-50/50 blur-[100px] animate-pulse-soft" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-primary-200/20 blur-[80px] -translate-x-1/2" />
      </div>

      {/* Subtle decorative circles */}
      <div className="absolute top-10 right-10 w-24 h-24 border border-primary/10 rounded-full opacity-30 pointer-events-none animate-spin-slow" />
      <div className="absolute bottom-20 left-10 w-16 h-16 border border-primary/8 rounded-full opacity-20 pointer-events-none animate-spin-slow" style={{ animationDirection: 'reverse' }} />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center w-full z-10">

        {/* Left Column — Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Star Rating Trust Badge */}
          <motion.div variants={fadeUp} className="flex items-center gap-2 mb-5 mx-auto lg:mx-0">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
              ))}
            </div>
            <span className="text-xs font-semibold text-muted uppercase tracking-widest ml-1 font-sans">
              5.0 Rated · 2,000+ Reviews
            </span>
          </motion.div>

          {/* Category Badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary/10 text-primary font-semibold text-xs tracking-widest uppercase mb-7 font-sans mx-auto lg:mx-0"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Premium Dental Care
          </motion.div>

          {/* Heading with text reveal */}
          <motion.h1
            variants={fadeUp}
            className="text-dark leading-[1.08] mb-8 font-serif tracking-tight w-full"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="block font-medium text-muted text-xl md:text-2xl lg:text-3xl mb-3 font-sans tracking-normal"
            >
              Transform Your Smile With
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="block font-bold"
              style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)", lineHeight: 1.1 }}
            >
              Expert Dental{" "}
              <span className="relative inline-block">
                <span className="blue-gradient-text">Care</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-1 left-0 w-full h-[3px] bg-primary/20 origin-left rounded-full"
                />
              </span>
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-muted font-light leading-relaxed mb-10 max-w-xl font-sans mx-auto lg:mx-0"
          >
            Experience exceptional dental treatments, advanced technology, and personalized care designed to give you the confidence to smile brighter every day.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={slideUp}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 mb-16 w-full sm:w-auto font-sans mx-auto lg:mx-0"
          >
            <motion.a
              href="#book-appointment"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full blue-gradient text-white font-semibold text-xs tracking-widest text-center shadow-premium hover:shadow-premium-hover transition-all duration-300 flex items-center justify-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 shine-btn ripple-btn cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.a>
            <motion.a
              href="tel:+918866902356"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full border-2 border-dark/10 hover:border-primary hover:text-primary text-dark font-semibold text-xs tracking-widest text-center transition-all duration-300 flex items-center justify-center gap-2 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              Emergency Call
            </motion.a>
          </motion.div>

          {/* Stats with Animated Counters */}
          <motion.div
            variants={slideUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-gray-100 pt-8 w-full font-sans"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                  className="flex flex-col"
                >
                  <div className="flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-primary/40 shrink-0" />
                    {typeof stat.val === 'number' && stat.suffix !== "D Scan" ? (
                      <AnimatedCounter target={stat.val} suffix={stat.suffix} />
                    ) : (
                      <span className="font-serif font-bold text-2xl md:text-3xl text-primary">
                        {stat.val}{stat.suffix}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-muted font-semibold uppercase tracking-widest mt-1.5">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Column — Dentist Image */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="lg:col-span-5 flex justify-center relative w-full"
        >
          {/* Main image container */}
          <motion.div
            variants={slowFloat}
            animate="animate"
            className="relative w-full max-w-[400px] aspect-[4/5] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-premium-hover border border-gray-100 bg-gray-50 z-10"
          >
            <Image
              src="/images/hero-dentist.png"
              alt="Dr. Alexander Mercer smiling friendly in modern premium dental clinic"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover object-center scale-102 hover:scale-100 transition-transform duration-[1.5s]"
              priority
            />
            {/* Elegant frame overlay */}
            <div className="absolute inset-0 border-[6px] border-white/15 pointer-events-none rounded-[24px] sm:rounded-[32px]" />
            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-dark/20 to-transparent pointer-events-none" />
          </motion.div>

          {/* Floating badge — Top Right */}
          <motion.div
            variants={floatBadge1}
            animate="animate"
            className="absolute -top-4 -right-2 glass-card p-4 rounded-2xl shadow-premium border border-white/70 flex items-center gap-3 z-20 hidden sm:flex font-sans"
          >
            <div className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center">
              <Star className="w-4.5 h-4.5 fill-primary text-primary" />
            </div>
            <div>
              <p className="text-[11px] text-muted font-semibold uppercase tracking-widest">Top Rated</p>
              <p className="text-xs font-bold text-dark">5-Star Clinic</p>
            </div>
          </motion.div>

          {/* Floating badge — Bottom Left */}
          <motion.div
            variants={floatBadge2}
            animate="animate"
            className="absolute -bottom-4 -left-2 glass-card px-5 py-4 rounded-2xl shadow-premium border border-white/70 flex items-center gap-3 z-20 font-sans"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <p className="text-[11px] text-muted font-semibold uppercase tracking-widest">Status</p>
              <p className="text-xs font-bold text-dark">Online Booking</p>
            </div>
          </motion.div>

          {/* Decorative frame rings */}
          <div className="absolute inset-0 border border-primary/8 rounded-[36px] -m-3 pointer-events-none max-w-[400px] mx-auto" />
          <div className="absolute inset-0 border border-primary/4 rounded-[42px] -m-6 pointer-events-none hidden sm:block max-w-[400px] mx-auto" />
        </motion.div>
      </div>

      {/* Trust Badges Bar */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="border-t border-gray-100 mt-28 pt-16 w-full max-w-7xl mx-auto px-6 z-10 relative font-sans"
      >
        <p className="text-center text-[11px] uppercase tracking-widest text-muted font-bold mb-10">
          Professional Certifications & Guarantees
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
          {[
            { emoji: "🛡️", title: "100% Painless", sub: "Treatment Guarantee" },
            { emoji: "🔬", title: "FDA Approved", sub: "Clinical Materials" },
            { emoji: "🎓", title: "Elite Specialists", sub: "BDS & MDS Certified" },
            { emoji: "🌟", title: "ISO Certified", sub: "Hygiene Standards" },
          ].map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-primary-50/30 border border-primary/5 hover:border-primary/15 hover:shadow-premium transition-all duration-500 cursor-default"
            >
              <span className="text-2xl">{badge.emoji}</span>
              <div className="text-left text-xs text-dark/80">
                <p className="text-dark font-bold text-xs uppercase tracking-wider">{badge.title}</p>
                <p className="text-[11px] text-muted font-semibold uppercase tracking-widest mt-0.5">{badge.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
