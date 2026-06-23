"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Smile, Award, Activity, Heart, Check } from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      title: "General Dentistry",
      description: "Essential care to protect, restore, and maintain your oral health.",
      icon: ShieldCheck,
      details: ["Dental Checkups", "Teeth Cleaning", "Fillings"],
      badge: "Preventative",
    },
    {
      title: "Cosmetic Dentistry",
      description: "Aesthetic solutions designed to beautify your smile's shape, alignment, and color.",
      icon: Sparkles,
      details: ["Teeth Whitening", "Smile Design", "Veneers"],
      badge: "Popular",
    },
    {
      title: "Orthodontics",
      description: "Modern structural alignment to straighten teeth for all ages.",
      icon: Smile,
      details: ["Braces", "Invisalign"],
      badge: "Invisible Aligners",
    },
    {
      title: "Dental Implants",
      description: "Premium permanent tooth restorations that look and function like natural teeth.",
      icon: Award,
      details: ["Tooth Replacement", "Full Mouth Solutions"],
      badge: "Restorative",
    },
    {
      title: "Pediatric Dentistry",
      description: "Gentle and compassionate dental care tailored specifically for children.",
      icon: Heart,
      details: ["Child Dental Care"],
      badge: "Kids Care",
    },
    {
      title: "Emergency Dental Care",
      description: "Immediate relief and treatment for sudden tooth pain or oral injuries.",
      icon: Activity,
      details: ["Immediate Treatment"],
      badge: "24/7 Response",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 18,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section id="services" className="py-28 lg:py-36 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold-light/35 px-4 py-1.5 rounded-full border border-gold/10">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark mt-4 mb-3">
            Our Dental Services
          </h2>
          <p className="text-dark/65 font-light max-w-xl mx-auto text-sm md:text-base">
            Comprehensive care for every smile. We offer modern treatments utilizing state-of-the-art dental technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -6 }}
                tabIndex={0}
                className="group relative bg-card-gray/30 hover:bg-white rounded-[24px] p-8 border border-gray-100 hover:border-gold/20 shadow-sm hover:shadow-premium transition-all duration-500 flex flex-col justify-between overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                {/* Subtle soft gold glow background on hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.03),transparent_60%)] group-hover:bg-[radial-gradient(circle_at_top_right,rgba(201,162,39,0.06),transparent_60%)] pointer-events-none transition-all duration-500" />
                
                <div>
                  {/* Category Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-2xl bg-gold-light/40 group-hover:bg-gold flex items-center justify-center text-gold group-hover:text-white transition-all duration-500 shadow-sm transform group-hover:scale-105 group-hover:rotate-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gold bg-gold-light/20 group-hover:bg-gold-light/40 border border-gold/10 px-2.5 py-1 rounded-md transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-serif font-bold text-dark mb-3 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-dark/65 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Sub-services list */}
                <div className="border-t border-gray-100 pt-5 mt-auto">
                  <ul className="space-y-2.5">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-dark/70 font-medium">
                        <div className="w-4 h-4 rounded-full bg-gold-light/40 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-gold-dark" />
                        </div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
