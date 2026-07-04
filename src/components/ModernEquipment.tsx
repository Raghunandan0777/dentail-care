"use client";

import { motion } from "framer-motion";
import { Activity, Scan, Zap, Microscope } from "lucide-react";
import Image from "next/image";

const equipment = [
  {
    icon: Activity,
    title: "Digital X-Ray",
    desc: "Low-radiation, instant high-resolution imaging for precise and safe diagnostics.",
    image: "/images/equip-xray.png",
  },
  {
    icon: Scan,
    title: "3D Intraoral Scanner",
    desc: "Mess-free digital impressions creating accurate 3D models of your teeth instantly.",
    image: "/images/equip-scanner.png",
  },
  {
    icon: Zap,
    title: "Laser Dentistry",
    desc: "Painless, minimally invasive soft-tissue treatments with accelerated healing times.",
    image: "/images/equip-laser.png",
  },
  {
    icon: Microscope,
    title: "Microscope Dentistry",
    desc: "Enhanced magnification for complex root canals and ultra-precise restorations.",
    image: "/images/equip-microscope.png",
  },
];

export default function ModernEquipment() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-50/40 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary-50 px-4 py-1.5 rounded-full border border-primary/10 inline-block">
            Advanced Technology
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark mt-5 mb-4">
            Modern Dental Equipment
          </h2>
          <div className="blue-divider max-w-[120px] mx-auto my-5" />
          <p className="text-muted font-light max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            We invest in the latest dental technology to ensure your treatments are faster, more accurate, and exceptionally comfortable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {equipment.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative glass-card bg-white/60 border border-gray-100 rounded-3xl shadow-premium hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-2 flex flex-col overflow-hidden"
              >
                {/* Equipment Image */}
                <div className="w-full aspect-[4/3] relative overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-md transition-all duration-500 -mt-10 relative z-10 border-4 border-white shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted font-light leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                  {/* Decorative line */}
                  <div className="w-0 h-0.5 bg-primary mt-6 group-hover:w-full transition-all duration-500 ease-out opacity-20" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
