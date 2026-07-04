"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Smile, Award, Activity, Heart, Check, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Services() {
  const serviceCategories = [
    {
      title: "General Dentistry",
      description: "Essential care to protect, restore, and maintain your oral health with precision.",
      icon: ShieldCheck,
      details: ["Dental Checkups", "Teeth Cleaning", "Fillings"],
      badge: "Preventative",
      image: "/images/service-general.png",
    },
    {
      title: "Cosmetic Dentistry",
      description: "Aesthetic solutions designed to beautify your smile's shape, alignment, and color.",
      icon: Sparkles,
      details: ["Teeth Whitening", "Smile Design", "Veneers"],
      badge: "Popular",
      image: "/images/service-cosmetic.png",
    },
    {
      title: "Orthodontics",
      description: "Modern structural alignment to straighten teeth for patients of all ages.",
      icon: Smile,
      details: ["Braces", "Invisalign"],
      badge: "Invisible Aligners",
      image: "/images/service-ortho.png",
    },
    {
      title: "Dental Implants",
      description: "Premium permanent tooth restorations that look and function like natural teeth.",
      icon: Award,
      details: ["Tooth Replacement", "Full Mouth Solutions"],
      badge: "Restorative",
      image: "/images/service-implants.png",
    },
    {
      title: "Pediatric Dentistry",
      description: "Gentle and compassionate dental care tailored specifically for children.",
      icon: Heart,
      details: ["Child Dental Care"],
      badge: "Kids Care",
      image: "/images/service-pediatric.png",
    },
    {
      title: "Emergency Dental Care",
      description: "Immediate relief and treatment for sudden tooth pain or oral injuries.",
      icon: Activity,
      details: ["Immediate Treatment"],
      badge: "24/7 Response",
      image: "/images/service-emergency.png",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: i * 0.06,
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
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary-50 px-4 py-1.5 rounded-full border border-primary/10 inline-block">
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
                whileHover={{ y: -10 }}
                tabIndex={0}
                className="group relative bg-white rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 border border-gray-100 hover:border-transparent shadow-card hover:shadow-[0_25px_50px_-12px_rgba(37,99,235,0.25)] transition-all duration-500 flex flex-col justify-between overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary h-full"
              >
                {/* Hover glow background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.02),transparent_60%)] group-hover:bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_60%)] pointer-events-none transition-all duration-500" />

                {/* Gradient border effect */}
                <div 
                  className="absolute inset-0 rounded-[20px] sm:rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.5) 0%, rgba(37, 99, 235, 0.1) 100%)', 
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', 
                    WebkitMaskComposite: 'xor', 
                    maskComposite: 'exclude', 
                    padding: '2px' 
                  }} 
                />

                <div className="relative z-10">
                  {/* Service Image */}
                  <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden mb-6 bg-gray-100 group-hover:shadow-md transition-all duration-500">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Badge moved over the image */}
                    <div className="absolute top-4 right-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-primary bg-white/95 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full shadow-sm">
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex items-center mb-4 relative">
                    <div className="w-12 h-12 rounded-2xl bg-primary-50 group-hover:bg-primary flex items-center justify-center text-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-[0_8px_16px_-4px_rgba(37,99,235,0.4)] transform group-hover:-translate-y-1 group-hover:rotate-[10deg]">
                      <Icon className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                    </div>
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

                  {/* Book Now button */}
                  <a 
                    href="#book-appointment"
                    className="mt-2 flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-gray-50 text-dark font-semibold text-sm group-hover:bg-primary group-hover:text-white transition-all duration-300 relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    <span className="relative z-10 flex items-center gap-2 tracking-wide">
                      Book Now
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
