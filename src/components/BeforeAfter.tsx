"use client";

import { useState } from "react";
import Image from "next/image";
import { MoveHorizontal, Sparkles, Check } from "lucide-react";
import { motion } from "framer-motion";

const cases = [
  {
    id: "makeover",
    tabLabel: "Smile Makeover",
    title: "Aesthetic Smile Restoration",
    beforeImg: "/images/before-veneers.png",
    afterImg: "/images/after-veneers.png",
    params: [
      { label: "Specialist", value: "Dr. Alexander Mercer" },
      { label: "Treatment", value: "Porcelain Veneers" },
      { label: "Visits", value: "2 Sessions (7 Days)" },
      { label: "Patient Age", value: "29 Years" },
    ],
    narrative: "Our objective was to restore alignment symmetry and lift intrinsic staining without invasive reshaping. Using ultra-thin hand-finished veneers, we matched the natural translucency parameters of healthy enamel.",
    benefits: [
      "Minimal preparation veneers preserving 95%+ natural structure",
      "Tailored shade matching for natural ivory translucency",
      "Bespoke digital smile design aligning with facial symmetry"
    ]
  },
  {
    id: "implants",
    tabLabel: "Dental Implants",
    title: "Full Arch Restoration",
    beforeImg: "/images/before-implants.png",
    afterImg: "/images/after-implants.png",
    params: [
      { label: "Specialist", value: "Dr. Alexander Mercer" },
      { label: "Treatment", value: "All-on-4 Implants" },
      { label: "Visits", value: "4 Sessions (3 Months)" },
      { label: "Patient Age", value: "54 Years" },
    ],
    narrative: "The patient presented with advanced periodontal disease and missing teeth. We utilized guided implant surgery for precise placement of titanium fixtures, restoring complete function and aesthetics.",
    benefits: [
      "Permanent fixed solution acting exactly like natural teeth",
      "Prevents bone loss and preserves facial structure",
      "Computer-guided precision for minimally invasive surgery"
    ]
  },
  {
    id: "whitening",
    tabLabel: "Teeth Whitening",
    title: "Laser Zoom Whitening",
    beforeImg: "/images/before-whitening.png",
    afterImg: "/images/after-whitening.png",
    params: [
      { label: "Specialist", value: "Dr. Sarah Jenkins" },
      { label: "Treatment", value: "Laser Whitening" },
      { label: "Visits", value: "1 Session (60 Mins)" },
      { label: "Patient Age", value: "34 Years" },
    ],
    narrative: "A single 60-minute session was all it took to lift deep intrinsic stains caused by coffee and tea consumption, brightening the smile by up to 8 shades with zero sensitivity.",
    benefits: [
      "Instant results visible immediately after the session",
      "Enamel-safe desensitizing gel formula",
      "Long-lasting brightness with proper maintenance"
    ]
  }
];

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeTab, setActiveTab] = useState(cases[0].id);

  const activeCase = cases.find(c => c.id === activeTab) || cases[0];

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
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary-50 px-4 py-1.5 rounded-full border border-primary/10 inline-block">
            Transformations
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark mt-5 mb-4">
            Smile Makeovers
          </h2>
          <div className="blue-divider max-w-[120px] mx-auto my-5" />
          <p className="text-muted font-light max-w-md mx-auto text-sm md:text-base leading-relaxed">
            Witness the remarkable results of bespoke cosmetic dentistry and clinical precision.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {cases.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveTab(c.id);
                  setSliderPosition(50);
                }}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  activeTab === c.id
                    ? "blue-gradient text-white shadow-premium"
                    : "bg-white text-muted border border-gray-200 hover:border-primary/30 hover:text-primary hover:bg-primary-50/50"
                }`}
              >
                {c.tabLabel}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column — Interactive Comparison Slider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-center w-full"
          >
            {/* Slider Container */}
            <div className="relative w-full aspect-[4/3] rounded-[20px] sm:rounded-[32px] overflow-hidden shadow-premium border border-primary/8 select-none bg-gray-50">

              {/* AFTER Image (background — right side) */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  key={`after-${activeCase.id}`}
                  src={activeCase.afterImg}
                  alt={`Patient after ${activeCase.tabLabel}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover object-center pointer-events-none"
                />
                {/* After Label */}
                <div className="absolute bottom-6 right-6 z-[15] bg-primary/90 backdrop-blur-sm text-white text-xs uppercase tracking-widest font-bold px-4 py-2 rounded-full whitespace-nowrap">
                  After Makeover ✨
                </div>
              </div>

              {/* BEFORE Image (clipped overlay — left side) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden z-10"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <Image
                  key={`before-${activeCase.id}`}
                  src={activeCase.beforeImg}
                  alt={`Patient before ${activeCase.tabLabel}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover object-center pointer-events-none"
                />
                {/* Before Label */}
                <div className="absolute bottom-6 left-6 z-[15] glass-card text-dark text-xs uppercase tracking-widest font-bold px-4 py-2 rounded-full whitespace-nowrap">
                  Before Treatment
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

            <span className="text-xs text-muted font-medium uppercase tracking-wider mt-5 flex items-center gap-1.5">
              <MoveHorizontal className="w-3.5 h-3.5 text-primary" /> Drag to compare results
            </span>
          </motion.div>

          {/* Right Column — Case Study Details */}
          <motion.div
            key={`case-details-${activeCase.id}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="bg-ivory rounded-[20px] sm:rounded-[32px] p-6 sm:p-8 lg:p-10 border border-primary/5 shadow-premium">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Case Study
                </span>
              </div>

              <h3 className="font-serif font-bold text-2xl md:text-3xl text-dark mb-6">
                {activeCase.title}
              </h3>

              {/* Case Parameters */}
              <div className="grid grid-cols-2 gap-y-4 gap-x-6 pb-6 mb-6 border-b border-primary/8 text-sm">
                {activeCase.params.map((param, idx) => (
                  <div key={idx}>
                    <span className="text-xs font-bold text-muted uppercase tracking-wider block mb-1">
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
                &quot;{activeCase.narrative}&quot;
              </p>

              {/* Benefits */}
              <ul className="space-y-3.5">
                {activeCase.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-dark/80">
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

        {/* Transformation Gallery Grid */}
        <div className="mt-24 border-t border-gray-100 pt-16">
          <div className="text-center mb-12">
            <h3 className="font-serif font-bold text-2xl md:text-3xl text-dark">
              Transformation Gallery
            </h3>
            <p className="text-sm text-muted font-light mt-2">
              Browse our gallery of successful smile restorations and treatment results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases.map((c) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -6 }}
                onClick={() => {
                  setActiveTab(c.id);
                  setSliderPosition(50);
                  document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`group cursor-pointer rounded-2xl bg-white border ${
                  activeTab === c.id ? "border-primary shadow-premium" : "border-gray-100 shadow-card hover:shadow-premium"
                } transition-all duration-500 overflow-hidden`}
              >
                {/* Side-by-Side Images */}
                <div className="grid grid-cols-2 gap-0.5 bg-gray-100 aspect-[16/10] relative overflow-hidden">
                  {/* Before Thumbnail */}
                  <div className="relative h-full w-full">
                    <Image
                      src={c.beforeImg}
                      alt={`Before ${c.tabLabel}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover object-center"
                    />
                    <div className="absolute top-2 left-2 bg-dark/60 backdrop-blur-sm text-[9px] font-bold text-white uppercase tracking-widest px-2 py-0.5 rounded">
                      Before
                    </div>
                  </div>
                  {/* After Thumbnail */}
                  <div className="relative h-full w-full">
                    <Image
                      src={c.afterImg}
                      alt={`After ${c.tabLabel}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-2 right-2 bg-primary/95 backdrop-blur-sm text-[9px] font-bold text-white uppercase tracking-widest px-2 py-0.5 rounded">
                      After ✨
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary-50 px-2.5 py-1 rounded-md border border-primary/5 inline-block mb-3">
                    {c.params[1].value}
                  </span>
                  <h4 className="font-serif font-bold text-lg text-dark group-hover:text-primary transition-colors duration-300 mb-1">
                    {c.title}
                  </h4>
                  <p className="text-xs text-muted font-light line-clamp-2 leading-relaxed mb-4">
                    {c.narrative}
                  </p>
                  <div className="flex items-center justify-between text-xs font-semibold text-primary group-hover:underline">
                    <span>Compare Case Study</span>
                    <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
