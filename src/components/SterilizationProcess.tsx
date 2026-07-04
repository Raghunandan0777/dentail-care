"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Monitor, BadgeCheck, Package } from "lucide-react";

const steps = [
  {
    icon: ShieldCheck,
    title: "Instrument Sterilization",
    desc: "Class B Autoclave sterilization ensuring 100% elimination of all microbes and spores.",
  },
  {
    icon: Package,
    title: "Disposable Kits",
    desc: "Single-use sterile diagnostic kits and barriers for every patient to prevent cross-contamination.",
  },
  {
    icon: Monitor,
    title: "Digital Ecosystem",
    desc: "Touchless digital workflows and charting minimizing physical contact with surfaces.",
  },
  {
    icon: BadgeCheck,
    title: "Safety Standards",
    desc: "Strict adherence to ISO and WHO medical safety guidelines for air and surface purification.",
  },
];

export default function SterilizationProcess() {
  return (
    <section className="py-20 lg:py-28 bg-ivory relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 skew-x-[-15deg] origin-bottom-right pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary-50 px-4 py-1.5 rounded-full border border-primary/10 inline-block">
            Safety First
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark mt-5 mb-4">
            Uncompromising Sterilization
          </h2>
          <div className="blue-divider max-w-[120px] mx-auto my-5" />
          <p className="text-muted font-light max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Your health is our ultimate priority. We maintain a zero-compromise approach to clinical hygiene, utilizing medical-grade sterilization for absolute peace of mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card bg-white/70 border border-white/60 p-8 rounded-3xl shadow-card hover:shadow-premium transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-lg text-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted font-light leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
