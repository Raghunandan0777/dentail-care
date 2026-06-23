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
    review: "I had general anxiety about dental treatments. However, the comfortable environment and the pain-free veneers treatment completely changed my perspective. Outstanding care!",
    rating: 5,
    role: "Veneers Patient",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    name: "Dr. Olivia Brooks",
    review: "As a medical professional, I appreciate hygiene and technology. Smile Signature uses state-of-the-art equipment. The custom dental implants they did are flawless. Incredible attention to detail.",
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
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 120 : -120,
      opacity: 0,
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

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 50; // min swipe distance in px
    if (info.offset.x < -threshold) {
      handleNext();
    } else if (info.offset.x > threshold) {
      handlePrev();
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      handleNext();
    } else if (e.key === "ArrowLeft") {
      handlePrev();
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section 
      id="testimonials" 
      className="py-28 lg:py-36 bg-ivory relative overflow-hidden"
    >
      {/* Decorative luxury elements */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-gold-light/15 blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-12 right-0 w-[300px] h-[300px] rounded-full bg-gold-light/10 blur-[80px] translate-x-1/3 pointer-events-none" />
      
      {/* Background Watermark */}
      <div className="absolute left-1/2 bottom-4 -translate-x-1/2 select-none pointer-events-none opacity-[0.03] hidden lg:block">
        <span className="font-serif text-[120px] lg:text-[150px] text-dark tracking-[0.25em] uppercase">
          TESTIMONIALS
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold-light/35 px-4 py-1.5 rounded-full border border-gold/10 inline-block">
            Reviews
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark mt-4 mb-3">
            Patient Success Stories
          </h2>
          <div className="gold-divider max-w-[120px] mx-auto my-5" />
          <p className="text-dark/65 font-light max-w-md mx-auto text-sm md:text-base">
            Read stories of how we've helped patients achieve their dream smiles.
          </p>
        </div>

        {/* Carousel Slider */}
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
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              tabIndex={0}
              onKeyDown={handleKeyDown}
              className="w-full bg-white rounded-[32px] p-8 sm:p-14 border border-gold/5 shadow-premium hover:shadow-premium-hover transition-luxury flex flex-col items-center text-center relative focus:outline-none focus-visible:ring-2 focus-visible:ring-gold cursor-grab active:cursor-grabbing"
              aria-label={`Testimonial from ${testimonials[activeIndex].name}. Use left and right arrow keys or swipe to change slides.`}
            >
              {/* Giant elegant quote icon */}
              <Quote className="absolute top-8 left-8 w-16 h-16 text-gold/10 rotate-180 pointer-events-none" />
              
              {/* Star rating */}
              <div className="flex items-center gap-1.5 mb-8">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold shrink-0" />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-dark/80 tracking-wide font-light leading-relaxed mb-10 max-w-2xl">
                "{testimonials[activeIndex].review}"
              </p>

              {/* Decorative Divider */}
              <div className="gold-divider max-w-[80px] mb-8" />

              {/* User profile info */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonials[activeIndex].photo}
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold/30 shadow-md transition-transform duration-500"
                />
                <div className="text-left">
                  <h4 className="font-serif font-bold text-base md:text-lg text-dark">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-[10px] text-gold font-bold uppercase tracking-widest mt-0.5">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-2 sm:-px-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white border border-gold/10 hover:border-gold hover:text-gold text-dark flex items-center justify-center shadow-premium hover:shadow-premium-hover pointer-events-auto transition-luxury active:scale-95 cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white border border-gold/10 hover:border-gold hover:text-gold text-dark flex items-center justify-center shadow-premium hover:shadow-premium-hover pointer-events-auto transition-luxury active:scale-95 cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                index === activeIndex ? "w-8 bg-gold" : "w-1.5 bg-gold-light hover:bg-gold"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
