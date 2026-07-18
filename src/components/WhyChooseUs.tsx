"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Cpu, ShieldCheck, HeartHandshake, Zap, Headphones } from "lucide-react";
import Image from "next/image";

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
      image: "/images/doctor-portrait.png",
    },
    {
      title: "Latest Technology",
      description: "Advanced digital dentistry for ultra-precise diagnostics and results.",
      icon: Cpu,
      image: "/images/equip-scanner.png",
    },
    {
      title: "Comfortable Experience",
      description: "Pain-free treatments in a relaxing, anxiety-free atmosphere.",
      icon: ShieldCheck,
      image: "/images/treatment.png",
    },
    {
      title: "Personalized Care",
      description: "Customized treatment plans tailored to your specific smile goals.",
      icon: HeartHandshake,
      image: "/images/consultation.png",
    },
    {
      title: "Emergency Support",
      description: "Immediate dental care available for urgent situations, when you need it most.",
      icon: Zap,
      image: "/images/service-emergency.png",
    },
    {
      title: "Patient-First Approach",
      description: "Your comfort and well-being drive every decision we make.",
      icon: Headphones,
      image: "/images/reception.png",
    },
  ];

  const counters = [
    { label: "Patients", val: 5000, suffix: "+" },
    { label: "Years", val: 10, suffix: "+" },
    { label: "Satisfaction", val: 98, suffix: "%" },
    { label: "Sterilized Equipment", val: 100, suffix: "%" },
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
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary-50 px-4 py-1.5 rounded-full border border-primary/10 inline-block">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.06 }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col rounded-[24px] bg-white border border-gray-100/80 shadow-premium hover:shadow-premium-hover transition-all duration-500 overflow-hidden cursor-default"
              >
                {/* Image Section */}
                <div className="w-full aspect-[16/10] relative overflow-hidden bg-gray-100">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                  />
                  {/* Subtle vignette/gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow relative">
                  {/* Floating Icon */}
                  <div className="absolute -top-7 right-6 w-14 h-14 rounded-2xl bg-white text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all duration-500 shadow-[0_8px_20px_-6px_rgba(37,99,235,0.15)] group-hover:shadow-[0_8px_20px_-4px_rgba(37,99,235,0.4)] border border-gray-100 group-hover:border-primary transform group-hover:-translate-y-1">
                    <Icon className="w-5.5 h-5.5 transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  <h3 className="font-serif font-bold text-xl text-dark mb-3 group-hover:text-primary transition-colors duration-300 pr-12">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted font-light leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 rounded-[20px] sm:rounded-[24px] glass-card border border-white/90 overflow-hidden shadow-premium max-w-4xl mx-auto"
        >
          {counters.map((counter, idx) => (
            <div
              key={counter.label}
              className={`flex flex-col items-center p-4 sm:p-10 ${
                idx === 0 ? "border-r border-b border-gray-100/60" :
                idx === 1 ? "border-b border-gray-100/60 md:border-r" :
                idx === 2 ? "border-r border-gray-100/60 md:border-b-0" : ""
              }`}
            >
              <Counter value={counter.val} suffix={counter.suffix} />
              <span className="text-[10px] sm:text-xs text-muted font-bold uppercase tracking-widest mt-3 text-center">
                {counter.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
