"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Smile, Award, Activity, Heart, Check, ArrowRight } from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      title: "General Dentistry",
      description: "Essential care to protect, restore, and maintain your oral health with precision.",
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
      description: "Modern structural alignment to straighten teeth for patients of all ages.",
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
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 70,
        damping: 18,
        delay: i * 0.08,
      },
    }),
  };

  return (
    <section id="services" className="py-28 lg:py-36 bg-white relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-50/30 blur-[120px] pointer-events-none" />

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
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark mt-5 mb-4">
            Our Dental Services
          </h2>
          <p className="text-muted font-light max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Comprehensive care for every smile. We offer modern treatments utilizing state-of-the-art dental technology.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
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
                whileHover={{ y: -10, scale: 1.02 }}
                tabIndex={0}
                className="group relative bg-white rounded-[24px] p-8 border border-gray-100 hover:border-primary/20 shadow-card hover:shadow-card-hover transition-all duration-500 flex flex-col justify-between overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
              >
                {/* Hover glow background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.02),transparent_60%)] group-hover:bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.06),transparent_60%)] pointer-events-none transition-all duration-500" />

                {/* Glow border effect */}
                <div className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: 'inset 0 0 0 1px rgba(37, 99, 235, 0.15)' }} />

                <div className="relative z-10">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary-50 group-hover:bg-primary flex items-center justify-center text-primary group-hover:text-white transition-all duration-500 shadow-sm transform group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-primary bg-primary-50 group-hover:bg-primary-100 border border-primary/10 px-2.5 py-1 rounded-md transition-colors duration-300">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-serif font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Sub-services list */}
                <div className="relative z-10 border-t border-gray-100 pt-5 mt-auto">
                  <ul className="space-y-2.5 mb-4">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-dark/70 font-medium">
                        <div className="w-4 h-4 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-primary" />
                        </div>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More link */}
                  <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest font-semibold text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
