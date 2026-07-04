"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Eleanor Vance",
    review: "Professional service and excellent treatment. The clinic design feels like a 5-star hotel, and Dr. Mercer is incredibly thorough. Highly recommended for cosmetic dentistry!",
    rating: 5,
    role: "Smile Design Patient",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    name: "Arthur Sterling",
    review: "I had general anxiety about dental treatments. However, the comfortable environment and pain-free veneers treatment completely changed my perspective. Outstanding care!",
    rating: 5,
    role: "Veneers Patient",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    name: "Dr. Olivia Brooks",
    review: "As a medical professional, I appreciate hygiene and technology. Smile Signature uses state-of-the-art equipment. The custom dental implants they did are flawless.",
    rating: 5,
    role: "Dental Implants Patient",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    name: "Marcus Thorne",
    review: "The pediatric staff was amazing with my daughter. She actually looks forward to her dentist visits now! Very friendly environment and superb service.",
    rating: 5,
    role: "Pediatric Dentistry Parent",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    name: "Sarah Mitchell",
    review: "Got my teeth whitening done here. The results exceeded all expectations. My smile has never looked this bright. Absolutely premium experience from start to finish.",
    rating: 5,
    role: "Teeth Whitening Patient",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
  },
];

export default function Testimonials() {
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="py-28 lg:py-36 bg-ivory relative overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-primary-100/20 blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-12 right-0 w-[300px] h-[300px] rounded-full bg-primary-50/30 blur-[100px] translate-x-1/3 pointer-events-none" />

      {/* Background Watermark */}
      <div className="absolute left-1/2 bottom-4 -translate-x-1/2 select-none pointer-events-none opacity-[0.02] hidden lg:block">
        <span className="font-serif text-[120px] lg:text-[150px] text-dark tracking-[0.25em] uppercase">
          REVIEWS
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary-50 px-4 py-1.5 rounded-full border border-primary/10 inline-block">
            Reviews
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark mt-5 mb-4">
            Patient Success Stories
          </h2>
          <div className="blue-divider max-w-[120px] mx-auto my-5" />
          <p className="text-muted font-light max-w-md mx-auto text-sm md:text-base leading-relaxed">
            Read stories of how we&apos;ve helped patients achieve their dream smiles.
          </p>
          {/* Review count */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-semibold text-dark">5.0</span>
            <span className="text-xs text-muted">· 2,000+ Reviews on Google</span>
          </div>
        </motion.div>

        {/* Marquee Container */}
        <div 
          className="relative w-full max-w-full overflow-hidden mt-10 pb-12 pt-4 hover-pause -mx-6 px-6 lg:mx-0 lg:px-0"
          style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
        >
          <div className="flex gap-6 w-max animate-marquee">
            {marqueeItems.map((testimonial, idx) => (
              <div
                key={idx}
                className="w-[320px] sm:w-[400px] shrink-0 glass-card bg-white/70 border border-white/60 rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col group cursor-default"
              >
                <div className="flex items-start justify-between mb-6">
                  {/* Google-style badge */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Google Review</span>
                    </div>
                  </div>
                  {/* Quote icon */}
                  <Quote className="w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors rotate-180 -mt-2 -mr-2" />
                </div>

                {/* Review Text */}
                <p className="font-serif italic text-dark/90 tracking-wide font-light leading-relaxed mb-8 flex-grow text-[15px] sm:text-[17px]">
                  "{testimonial.review}"
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-primary/10 via-primary/5 to-transparent mb-6" />

                {/* User profile */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-serif font-bold text-sm sm:text-base text-dark">
                      {testimonial.name}
                    </h4>
                    <p className="text-[10px] text-primary font-bold uppercase tracking-widest mt-0.5">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
