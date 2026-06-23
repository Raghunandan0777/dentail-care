"use client";

import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 120 : -120,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleDotClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const handleDragEnd = (_event: unknown, info: { offset: { x: number } }) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      handleNext();
    } else if (info.offset.x > threshold) {
      handlePrev();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") handleNext();
    else if (e.key === "ArrowLeft") handlePrev();
  };

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

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
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary-50 px-4 py-1.5 rounded-full border border-primary/10 inline-block">
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

        {/* Carousel */}
        <div
          ref={containerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative min-h-[380px] sm:min-h-[320px] flex items-center justify-center"
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
              tabIndex={0}
              onKeyDown={handleKeyDown}
              className="w-full bg-white rounded-[28px] p-8 sm:p-12 border border-gray-100 shadow-premium hover:shadow-premium-hover transition-all duration-500 flex flex-col items-center text-center relative focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-grab active:cursor-grabbing"
              aria-label={`Testimonial from ${testimonials[activeIndex].name}. Use left and right arrow keys or swipe to navigate.`}
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 left-6 w-14 h-14 text-primary/6 rotate-180 pointer-events-none" />

              {/* Google-style badge */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-0.5">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 text-amber-400 fill-amber-400 shrink-0" />
                  ))}
                </div>
                <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Verified Review</span>
              </div>

              {/* Review Text */}
              <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-dark/80 tracking-wide font-light leading-relaxed mb-8 max-w-2xl">
                &ldquo;{testimonials[activeIndex].review}&rdquo;
              </p>

              {/* Divider */}
              <div className="blue-divider max-w-[60px] mb-8" />

              {/* User profile */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonials[activeIndex].photo}
                  alt={testimonials[activeIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20 shadow-md"
                  loading="lazy"
                />
                <div className="text-left">
                  <h4 className="font-serif font-bold text-base md:text-lg text-dark">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-[10px] text-primary font-bold uppercase tracking-widest mt-0.5">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-2 sm:-mx-6">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-white border border-gray-200 hover:border-primary hover:text-primary text-dark flex items-center justify-center shadow-card hover:shadow-card-hover pointer-events-auto transition-all duration-300 active:scale-95 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-white border border-gray-200 hover:border-primary hover:text-primary text-dark flex items-center justify-center shadow-card hover:shadow-card-hover pointer-events-auto transition-all duration-300 active:scale-95 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                index === activeIndex ? "w-8 bg-primary" : "w-1.5 bg-primary/20 hover:bg-primary/40"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
