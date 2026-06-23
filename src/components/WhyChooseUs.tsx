"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Cpu, ShieldCheck, HeartHandshake, Zap, Headphones } from "lucide-react";

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
    <span ref={ref} className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-primary">
      {count}{suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  const features = [
    {
      title: "Experienced Specialists",
      description: "Highly qualified dental experts committed to excellence and precision.",
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
    {
      title: "Emergency Support",
      description: "Immediate dental care available for urgent situations, when you need it most.",
      icon: Zap,
    },
    {
      title: "Patient-First Approach",
      description: "Your comfort and well-being drive every decision we make.",
      icon: Headphones,
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
      {/* Decorative blurs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary-100/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary-50/30 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary-50 px-4 py-1.5 rounded-full border border-primary/10 inline-block">
            Distinction
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark mt-5 mb-4">
            Why Patients Choose Smile Signature
          </h2>
          <p className="text-muted font-light max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            We combine dental expertise with high-end hospitality, providing state-of-the-art treatments in an environment of refined relaxation.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative p-7 rounded-[20px] bg-white/60 border border-gray-100 hover:border-primary/15 hover:bg-white shadow-card hover:shadow-card-hover transition-all duration-500 cursor-default"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-[20px] bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.04),transparent_60%)] group-hover:bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.08),transparent_60%)] pointer-events-none transition-all duration-500" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 group-hover:bg-primary flex items-center justify-center text-primary group-hover:text-white transition-all duration-500 shadow-sm mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-dark mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 rounded-[24px] glass-card border border-white/90 overflow-hidden shadow-premium max-w-4xl mx-auto"
        >
          {counters.map((counter, idx) => (
            <div
              key={counter.label}
              className={`flex flex-col items-center p-8 sm:p-10 ${
                idx === 0 ? "border-r border-b border-gray-100/60" :
                idx === 1 ? "border-b border-gray-100/60 md:border-r" :
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
