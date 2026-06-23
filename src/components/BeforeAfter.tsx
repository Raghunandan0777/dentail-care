"use client";

import { useState } from "react";
import Image from "next/image";
import { MoveHorizontal, Sparkles, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const benefits = [
    "Minimal preparation veneers preserving 95%+ natural structure",
    "Tailored shade matching matching natural ivory translucency",
    "Bespoke digital smile design aligning with facial symmetry"
  ];

  return (
    <section id="results" className="py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Decorative vector overlays */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-gold-light/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-gold-light/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold-light/35 px-4 py-1.5 rounded-full border border-gold/10 inline-block">
            Transformations
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark mt-4 mb-3">
            Smile Makeovers
          </h2>
          <div className="gold-divider max-w-[120px] mx-auto my-5" />
          <p className="text-dark/65 font-light max-w-md mx-auto text-sm md:text-base">
            Witness the remarkable results of bespoke cosmetic dentistry and clinical precision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Interactive Comparison Slider */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-center w-full"
          >
            {/* Slider Container */}
            <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-premium border border-gold/10 select-none bg-gray-50">
              
              {/* BEFORE Image (Always Background) */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/images/before-veneers.png"
                  alt="Smile Signature patient teeth before cosmetic veneer treatment"
                  fill
                  priority
                  sizes="(max-w-xl) 100vw, 700px"
                  className="object-cover object-center pointer-events-none"
                />
                {/* Before Label */}
                <div className="absolute bottom-6 left-6 z-35 bg-dark/70 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full border border-white/10">
                  Before Treatment
                </div>
              </div>

              {/* AFTER Image (Clips based on Slider Position) */}
              <div 
                className="absolute inset-0 w-full h-full overflow-hidden z-10"
                style={{ width: `${sliderPosition}%` }}
              >
                {/* Needs a fixed width container matching slider parent width to prevent image squash */}
                <div className="absolute inset-0 w-full aspect-[4/3]">
                  <Image
                    src="/images/after-veneers.png"
                    alt="Smile Signature patient teeth after cosmetic veneer treatment"
                    fill
                    priority
                    sizes="(max-w-xl) 100vw, 700px"
                    className="object-cover object-center pointer-events-none"
                  />
                </div>
                {/* After Label */}
                <div className="absolute bottom-6 left-6 z-35 bg-gold/90 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full border border-gold/20 whitespace-nowrap">
                  After Makeover
                </div>
              </div>

              {/* Slider Line (Visual Guide) */}
              <div 
                className="absolute top-0 bottom-0 w-[2.5px] bg-white cursor-ew-resize z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Glow Behind Line */}
                <div className="absolute inset-y-0 -left-1 w-3 bg-white/20 blur-[2px]" />
              </div>

              {/* Slider Handle Button */}
              <div 
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-premium flex items-center justify-center border border-gold/20 z-30 pointer-events-none transition-transform duration-200"
                style={{ left: `${sliderPosition}%` }}
              >
                <MoveHorizontal className="w-5 h-5 text-gold-dark" />
              </div>

              {/* Invisible Range Input overlaid to capture drag gestures natively */}
              <input 
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
                aria-label="Before and After Smile Makeover Slider"
              />
            </div>
            
            {/* Caption Helper */}
            <span className="text-[11px] text-dark/45 font-medium uppercase tracking-wider mt-5 flex items-center gap-1.5">
              <MoveHorizontal className="w-3.5 h-3.5 text-gold-dark" /> Drag the handle left or right to compare results
            </span>
          </motion.div>

          {/* Right Column - Case Study Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="bg-ivory rounded-[32px] p-8 lg:p-10 border border-gold/5 shadow-premium">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-gold-dark" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold-dark">
                  Case Study 01
                </span>
              </div>
              
              <h3 className="font-serif font-bold text-2xl md:text-3xl text-dark mb-6">
                Aesthetic Smile Restoration
              </h3>

              {/* Case Parameters Grid */}
              <div className="grid grid-cols-2 gap-y-4 gap-x-6 pb-6 mb-6 border-b border-gold/10 text-xs sm:text-sm">
                <div>
                  <span className="text-[10px] font-bold text-dark/45 uppercase tracking-wider block mb-1">
                    Specialist
                  </span>
                  <span className="font-serif font-bold text-dark text-base">
                    Dr. Alexander Mercer
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-dark/45 uppercase tracking-wider block mb-1">
                    Treatment
                  </span>
                  <span className="font-serif font-bold text-dark text-base">
                    Porcelain Veneers
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-dark/45 uppercase tracking-wider block mb-1">
                    Visits
                  </span>
                  <span className="font-serif font-bold text-dark text-base">
                    2 Sessions (7 Days)
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-dark/45 uppercase tracking-wider block mb-1">
                    Patient Age
                  </span>
                  <span className="font-serif font-bold text-dark text-base">
                    29 Years
                  </span>
                </div>
              </div>

              {/* Specialist Narrative */}
              <p className="text-dark/70 font-light leading-relaxed text-sm mb-6">
                "Our objective was to restore alignment symmetry and lift intrinsic staining without invasive reshaping. Using ultra-thin hand-finished veneers, we matched the natural translucency parameters of healthy enamel, creating a harmonized cosmetic outline."
              </p>

              {/* Treatment benefits bullets */}
              <ul className="space-y-3.5">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-dark/80">
                    <span className="w-5 h-5 rounded-full bg-gold-light/45 flex items-center justify-center shrink-0 mt-0.5 border border-gold/10">
                      <Check className="w-3 h-3 text-gold-dark" />
                    </span>
                    <span className="font-light leading-snug">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
