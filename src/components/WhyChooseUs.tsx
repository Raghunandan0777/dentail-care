"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Cpu, ShieldCheck, HeartHandshake } from "lucide-react";

// Count Up animation component
function Counter({ value, suffix = "", duration = 1.5 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * value));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-gold">
      {count}
      {suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  const features = [
    {
      title: "Experienced Specialists",
      description: "Highly qualified dental experts committed to excellence.",
      icon: Users,
    },
    {
      title: "Latest Technology",
      description: "Advanced digital dentistry for ultra-precise diagnostics and results.",
      icon: Cpu,
    },
    {
      title: "Comfortable Experience",
      description: "Pain-free treatments in a relaxing, anxiety-free atmosphere.",
      icon: ShieldCheck,
    },
    {
      title: "Personalized Care",
      description: "Customized treatment plans tailored to your specific smile goals.",
      icon: HeartHandshake,
    },
  ];

  const counters = [
    { label: "Happy Patients", val: 5000, suffix: "+" },
    { label: "Years Experience", val: 10, suffix: "+" },
    { label: "Satisfaction Rate", val: 98, suffix: "%" },
    { label: "Smile Transformations", val: 1000, suffix: "+" },
  ];

  return (
    <section id="why-choose-us" className="py-28 lg:py-36 bg-ivory relative overflow-hidden">
      {/* Decorative vector overlays */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold-light/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gold-light/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column - Features */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold-light/35 px-4 py-1.5 rounded-full border border-gold/10 mb-5">
              Distinction
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-6">
              Why Discerning Patients Choose Smile Signature
            </h2>
            <p className="text-dark/65 font-light leading-relaxed mb-10 max-w-xl text-sm md:text-base">
              We combine dental expertise with high-end hospitality, providing state-of-the-art treatments inside an environment of refined relaxation.
            </p>

            <div className="space-y-6 w-full">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-4 p-4 rounded-2xl hover:bg-white/60 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-gold shrink-0 border border-gold-light/30">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-lg text-dark mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-dark/60 font-light leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Stats counters (Apple-inspired divided grid layout) */}
          <div className="lg:col-span-6 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-0 rounded-[24px] glass-card border border-white/90 overflow-hidden shadow-premium"
            >
              {counters.map((counter, idx) => (
                <div
                  key={counter.label}
                  className={`flex flex-col p-8 sm:p-10 ${
                    idx === 0 ? "border-r border-b border-gray-100/60" :
                    idx === 1 ? "border-b border-gray-100/60" :
                    idx === 2 ? "border-r border-gray-100/60" : ""
                  }`}
                >
                  <Counter value={counter.val} suffix={counter.suffix} />
                  <span className="text-[10px] text-dark/50 font-bold uppercase tracking-widest mt-3">
                    {counter.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
