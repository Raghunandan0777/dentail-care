"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  {
    title: "Reception Area",
    desc: "A warm, premium welcome designed to put you at ease instantly.",
    src: "/images/reception.png",
  },
  {
    title: "Treatment Room",
    desc: "State-of-the-art clinic hygiene and comfortable modern chairs.",
    src: "/images/treatment.png",
  },
  {
    title: "Consultation Room",
    desc: "Private consultation spaces to discuss your personalized smile design plan.",
    src: "/images/consultation.png",
  },
  {
    title: "Advanced Equipment",
    desc: "Advanced 3D digital dental scans for highly precise diagnostic insights.",
    src: "/images/equipment.png",
  },
];

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedIdx((prev) => (prev === null || prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedIdx((prev) => (prev === null || prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIdx(null);
      else if (e.key === "ArrowRight") nextImage();
      else if (e.key === "ArrowLeft") prevImage();
    };
    if (selectedIdx !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx]);

  return (
    <section id="gallery" className="py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute right-0 top-1/4 -translate-y-1/2 translate-x-1/4 select-none pointer-events-none opacity-[0.02] hidden lg:block">
        <span className="font-serif text-[180px] lg:text-[240px] text-dark tracking-widest uppercase" style={{ writingMode: "vertical-rl" }}>
          SMILE
        </span>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-primary-50/30 blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary-50 px-4 py-1.5 rounded-full border border-primary/10 inline-block">
            Our Clinic
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark mt-5 mb-4">
            Our Modern Clinic
          </h2>
          <div className="blue-divider max-w-[120px] mx-auto my-5" />
          <p className="text-muted font-light max-w-md mx-auto text-sm md:text-base leading-relaxed">
            Take a visual tour inside our premium dental care facility, where cutting-edge technology meets boutique comfort.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-10">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
              onClick={() => setSelectedIdx(idx)}
              className="group relative aspect-[16/10] rounded-[20px] sm:rounded-[28px] overflow-hidden bg-ivory cursor-pointer border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              {/* Image with slow zoom */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                  src={image.src}
                  alt={`${image.title} at Smile Signature Dental Clinic`}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover object-center scale-100 group-hover:scale-105"
                  style={{ transition: "transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)" }}
                  loading="lazy"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent lg:opacity-0 group-hover:opacity-100 opacity-100 transition-opacity duration-500" />

              {/* Zoom icon */}
              <div className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-dark lg:opacity-0 group-hover:opacity-100 opacity-100 transition-all duration-500 shadow-md transform lg:translate-y-2 group-hover:translate-y-0 translate-y-0">
                <ZoomIn className="w-4 h-4 text-primary" />
              </div>

              {/* Title on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 transform lg:translate-y-6 lg:group-hover:translate-y-0 transition-all duration-500 ease-out lg:opacity-0 group-hover:opacity-100 opacity-100 translate-y-0 z-10 text-white">
                <span className="text-[11px] font-bold uppercase tracking-widest text-primary-200 mb-2 block">
                  Space {idx + 1}
                </span>
                <h3 className="font-serif font-bold text-lg md:text-xl mb-1.5 text-white">
                  {image.title}
                </h3>
                <p className="text-[13px] font-light text-white/70 max-w-sm leading-relaxed">
                  {image.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedIdx(null)}
          >
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:rotate-90 duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary z-50 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Pagination */}
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-40 max-w-7xl mx-auto w-full px-6">
              <button
                onClick={prevImage}
                className="w-12 h-12 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center pointer-events-auto transition-all cursor-pointer hover:scale-105 active:scale-95"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="w-12 h-12 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center pointer-events-auto transition-all cursor-pointer hover:scale-105 active:scale-95"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Frame */}
            <div className="relative w-full max-w-4xl aspect-[16/10] rounded-[20px] overflow-hidden border border-white/10 bg-black/40 shadow-2xl z-30">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIdx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 w-full h-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={galleryImages[selectedIdx].src}
                    alt={`${galleryImages[selectedIdx].title} at Smile Signature`}
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 1280px) 100vw, 1200px"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Caption */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center mt-8 max-w-xl px-4 pointer-events-none z-30"
            >
              <div className="text-xs uppercase tracking-widest text-primary font-bold mb-2">
                {selectedIdx + 1} of {galleryImages.length}
              </div>
              <h3 className="font-serif font-bold text-2xl md:text-3xl text-white mb-2">
                {galleryImages[selectedIdx].title}
              </h3>
              <p className="text-sm font-light text-white/60 leading-relaxed">
                {galleryImages[selectedIdx].desc}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
