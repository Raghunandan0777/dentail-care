"use client";

import Image from "next/image";
import { Check, Award, GraduationCap, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function DoctorSection() {
  const credentials = [
    { icon: GraduationCap, title: "Academic Excellence", desc: "BDS, MDS from Top Medical Universities" },
    { icon: Award, title: "Board Certified", desc: "Elite member of Dental Orthodontics Association" },
    { icon: Clock, title: "Clinical Experience", desc: "10+ Years of advanced clinical dental practice" },
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
      {/* Decorative background vectors */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-gold-light/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-0 w-80 h-80 rounded-full bg-gold-light/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Doctor Image with Slow Float */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative w-full flex justify-center"
          >
            {/* Double framed luxury border */}
            <motion.div
              variants={slowFloat}
              animate="animate"
              className="relative w-full max-w-[370px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-premium border border-gray-100 bg-white"
            >
              <Image
                src="/images/doctor-portrait.png"
                alt="Dr. Alexander Mercer, BDS, MDS - Head Dentist at Smile Signature Luxury Dental Clinic"
                fill
                sizes="(max-w-md) 100vw, 370px"
                className="object-cover object-center scale-102 hover:scale-100 transition-transform duration-[1.5s]"
              />
            </motion.div>
            
            {/* Frames decorative */}
            <div className="absolute inset-0 border border-gold/10 rounded-[36px] -m-3 pointer-events-none max-w-[370px] mx-auto" />
            <div className="absolute inset-0 border border-gold/5 rounded-[42px] -m-6 pointer-events-none hidden sm:block max-w-[370px] mx-auto" />
          </motion.div>

          {/* Right Column - Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold-light/35 px-4 py-1.5 rounded-full border border-gold/10 mb-5">
              Lead Dentist
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark mb-4">
              Meet Our Expert Dentist
            </h2>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-2xl font-serif font-bold text-gold-dark">Dr. Alexander Mercer</span>
              <span className="text-[9px] uppercase bg-dark text-white font-bold tracking-wider px-2.5 py-1 rounded">
                BDS, MDS
              </span>
              <span className="text-[9px] uppercase bg-gold-light/60 text-gold-dark font-bold tracking-wider px-2.5 py-1 rounded">
                10+ Years Exp
              </span>
            </div>

            <p className="text-base text-dark/70 font-light leading-relaxed mb-8 max-w-xl">
              Dedicated to delivering exceptional dental care using modern techniques and a patient-first approach. Dr. Mercer is recognized for his precision in cosmetic smile design and advanced dental implant restorations.
            </p>

            {/* Credentials details cards */}
            <div className="space-y-4 w-full mb-10">
              {credentials.map((cred, idx) => {
                const Icon = cred.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start p-4 rounded-xl bg-white/40 border border-white/60 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-gold-light/40 flex items-center justify-center text-gold-dark shrink-0">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-dark mb-0.5">{cred.title}</h4>
                      <p className="text-xs text-dark/50 font-medium">{cred.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href="#book-appointment"
              className="px-8 py-4 rounded-full bg-gold text-white font-semibold text-[11px] uppercase tracking-widest hover:bg-gold-dark shadow-premium hover:shadow-premium-hover transition-all duration-300 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 shine-btn"
            >
              <Calendar className="w-4 h-4" />
              Book Consultation
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
