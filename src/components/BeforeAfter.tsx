"use client";

import { useState } from "react";
import Image from "next/image";
import { MoveHorizontal, Sparkles, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const benefits = [
    "Minimal preparation veneers preserving 95%+ natural structure",
    "Tailored shade matching for natural ivory translucency",
    "Bespoke digital smile design aligning with facial symmetry"
  ];

  return (
    <section id="results" className="py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-primary-50/30 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-primary-50/20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary-50 px-4 py-1.5 rounded-full border border-primary/10 inline-block">
            Transformations
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark mt-5 mb-4">
            Smile Makeovers
          </h2>
          <div className="blue-divider max-w-[120px] mx-auto my-5" />
          <p className="text-muted font-light max-w-md mx-auto text-sm md:text-base leading-relaxed">
            Witness the remarkable results of bespoke cosmetic dentistry and clinical precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column — Interactive Comparison Slider */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-center w-full"
          >
            {/* Slider Container */}
            <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-premium border border-primary/8 select-none bg-gray-50">

              {/* BEFORE Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/images/before-veneers.png"
                  alt="Smile Signature patient teeth before cosmetic veneer treatment"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover object-center pointer-events-none"
                />
                {/* Before Label */}
                <div className="absolute bottom-6 left-6 z-[15] glass-card text-dark text-[10px] uppercase tracking-widest font-bold px-4 py-2 rounded-full">
                  Before Treatment
                </div>
              </div>

              {/* AFTER Image */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden z-10"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="absolute inset-0 w-full aspect-[4/3]">
                  <Image
                    src="/images/after-veneers.png"
                    alt="Smile Signature patient teeth after cosmetic veneer treatment"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="object-cover object-center pointer-events-none"
                  />
                </div>
                {/* After Label */}
                <div className="absolute bottom-6 left-6 z-[15] bg-primary/90 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest font-bold px-4 py-2 rounded-full whitespace-nowrap">
                  After Makeover ✨
                </div>
              </div>

              {/* Slider Line */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-white/90 z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%`, boxShadow: '0 0 12px rgba(255,255,255,0.4)' }}
              />

              {/* Slider Handle */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-premium-hover flex items-center justify-center border-2 border-primary/20 z-30 pointer-events-none transition-transform duration-200"
                style={{ left: `${sliderPosition}%` }}
              >
                <MoveHorizontal className="w-5 h-5 text-primary" />
              </div>

              {/* Invisible Range Input */}
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

            <span className="text-[11px] text-muted font-medium uppercase tracking-wider mt-5 flex items-center gap-1.5">
              <MoveHorizontal className="w-3.5 h-3.5 text-primary" /> Drag to compare results
            </span>
          </motion.div>

          {/* Right Column — Case Study Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="bg-ivory rounded-[32px] p-8 lg:p-10 border border-primary/5 shadow-premium">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                  Case Study 01
                </span>
              </div>

              <h3 className="font-serif font-bold text-2xl md:text-3xl text-dark mb-6">
                Aesthetic Smile Restoration
              </h3>

              {/* Case Parameters */}
              <div className="grid grid-cols-2 gap-y-4 gap-x-6 pb-6 mb-6 border-b border-primary/8 text-xs sm:text-sm">
                {[
                  { label: "Specialist", value: "Dr. Alexander Mercer" },
                  { label: "Treatment", value: "Porcelain Veneers" },
                  { label: "Visits", value: "2 Sessions (7 Days)" },
                  { label: "Patient Age", value: "29 Years" },
                ].map((param, idx) => (
                  <div key={idx}>
                    <span className="text-[10px] font-bold text-muted uppercase tracking-wider block mb-1">
                      {param.label}
                    </span>
                    <span className="font-serif font-bold text-dark text-base">
                      {param.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Narrative */}
              <p className="text-muted font-light leading-relaxed text-sm mb-6">
                &quot;Our objective was to restore alignment symmetry and lift intrinsic staining without invasive reshaping. Using ultra-thin hand-finished veneers, we matched the natural translucency parameters of healthy enamel.&quot;
              </p>

              {/* Benefits */}
              <ul className="space-y-3.5">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-dark/80">
                    <span className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center shrink-0 mt-0.5 border border-primary/10">
                      <Check className="w-3 h-3 text-primary" />
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
