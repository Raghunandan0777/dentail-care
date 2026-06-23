"use client";

import Image from "next/image";
import { Check, Award, GraduationCap, Clock, Calendar, Heart } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

function Counter({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * value));
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-serif font-bold text-3xl sm:text-4xl text-primary">
      {count}{suffix}
    </span>
  );
}

export default function DoctorSection() {
  const credentials = [
    { icon: GraduationCap, title: "Academic Excellence", desc: "BDS, MDS from Top Medical Universities" },
    { icon: Award, title: "Board Certified", desc: "Elite member of Dental Orthodontics Association" },
    { icon: Clock, title: "Clinical Experience", desc: "10+ Years of advanced clinical dental practice" },
  ];

  const timeline = [
    { year: "2014", event: "Graduated BDS with Gold Medal" },
    { year: "2017", event: "Completed MDS in Orthodontics" },
    { year: "2018", event: "Advanced training in Cosmetic Dentistry, USA" },
    { year: "2020", event: "Founded Smile Signature Clinic" },
    { year: "2023", event: "1000+ Successful Smile Transformations" },
  ];

  const slowFloat = {
    animate: {
      y: [0, -8, 0],
      rotate: [0, -0.4, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section id="doctor" className="py-28 lg:py-36 bg-ivory relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-primary-100/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-12 right-0 w-80 h-80 rounded-full bg-primary-50/30 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary-50 px-4 py-1.5 rounded-full border border-primary/10 inline-block">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark mt-5 mb-4">
            Dedicated to Your Perfect Smile
          </h2>
          <p className="text-muted font-light max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            We believe everyone deserves a confident, healthy smile. Our clinic combines cutting-edge dental technology with compassionate, personalized care to deliver exceptional results that transform lives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column — Doctor Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full flex justify-center"
          >
            <motion.div
              variants={slowFloat}
              animate="animate"
              className="relative w-full max-w-[370px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-premium border border-gray-100 bg-white group"
            >
              <Image
                src="/images/doctor-portrait.png"
                alt="Dr. Alexander Mercer, BDS, MDS - Head Dentist at Smile Signature Premium Dental Clinic"
                fill
                sizes="(max-width: 768px) 100vw, 370px"
                className="object-cover object-center scale-102 group-hover:scale-100 transition-transform duration-[1.5s]"
              />
              {/* Overlay gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-dark/30 to-transparent pointer-events-none" />
            </motion.div>

            {/* Decorative frames */}
            <div className="absolute inset-0 border border-primary/8 rounded-[36px] -m-3 pointer-events-none max-w-[370px] mx-auto" />
            <div className="absolute inset-0 border border-primary/4 rounded-[42px] -m-6 pointer-events-none hidden sm:block max-w-[370px] mx-auto" />
          </motion.div>

          {/* Right Column — Info */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary-50 px-4 py-1.5 rounded-full border border-primary/10 mb-5">
              Lead Dentist
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark mb-4">
              Meet Our Expert Dentist
            </h2>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-2xl font-serif font-bold text-primary-dark">Dr. Alexander Mercer</span>
              <span className="text-[9px] uppercase bg-dark text-white font-bold tracking-wider px-2.5 py-1 rounded">
                BDS, MDS
              </span>
              <span className="text-[9px] uppercase bg-primary-50 text-primary font-bold tracking-wider px-2.5 py-1 rounded border border-primary/10">
                10+ Years Exp
              </span>
            </div>

            <p className="text-base text-muted font-light leading-relaxed mb-8 max-w-xl">
              Dedicated to delivering exceptional dental care using modern techniques and a patient-first approach. Dr. Mercer is recognized for his precision in cosmetic smile design and advanced dental implant restorations.
            </p>

            {/* Credentials */}
            <div className="space-y-4 w-full mb-8">
              {credentials.map((cred, idx) => {
                const Icon = cred.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="flex gap-4 items-start p-4 rounded-xl bg-white/60 border border-gray-100 shadow-card hover:shadow-card-hover hover:border-primary/10 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary shrink-0">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-dark mb-0.5">{cred.title}</h4>
                      <p className="text-xs text-muted font-medium">{cred.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-muted hover:text-primary hover:border-primary/20 hover:shadow-card transition-all duration-300" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-muted hover:text-primary hover:border-primary/20 hover:shadow-card transition-all duration-300" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            {/* CTA */}
            <motion.a
              href="#book-appointment"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full blue-gradient text-white font-semibold text-[11px] uppercase tracking-widest shadow-premium hover:shadow-premium-hover transition-all duration-300 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 shine-btn"
            >
              <Calendar className="w-4 h-4" />
              Book Consultation
            </motion.a>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <h3 className="text-center font-serif font-bold text-2xl md:text-3xl text-dark mb-12">
            Professional Journey
          </h3>
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/20 via-primary/10 to-transparent md:-translate-x-[1px]" />

            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`relative flex items-start gap-6 mb-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:text-${idx % 2 === 0 ? 'right' : 'left'}`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-white shadow-sm -translate-x-[5px] md:-translate-x-[6px] mt-1.5 z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{item.year}</span>
                  <p className="text-sm text-dark font-medium mt-1">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-0 rounded-[24px] glass-card border border-white/90 overflow-hidden shadow-premium max-w-4xl mx-auto"
        >
          {[
            { label: "Happy Patients", val: 5000, suffix: "+" },
            { label: "Years Experience", val: 10, suffix: "+" },
            { label: "Satisfaction Rate", val: 98, suffix: "%" },
            { label: "Smile Transformations", val: 1000, suffix: "+" },
          ].map((counter, idx) => (
            <div
              key={counter.label}
              className={`flex flex-col items-center p-8 sm:p-10 ${
                idx === 0 ? "border-r border-b border-gray-100/60" :
                idx === 1 ? "border-b border-gray-100/60" :
                idx === 2 ? "border-r border-gray-100/60 md:border-b-0" : ""
              }`}
            >
              <Counter value={counter.val} suffix={counter.suffix} />
              <span className="text-[10px] text-muted font-bold uppercase tracking-widest mt-3 text-center">
                {counter.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
