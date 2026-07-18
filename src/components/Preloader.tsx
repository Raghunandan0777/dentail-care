"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400); // Small aesthetic delay
          return 100;
        }
        // Random incremental steps for natural loading feel
        return prev + Math.floor(Math.random() * 15) + 6;
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary-100/30 blur-[100px]" />
          </div>

          <div className="relative flex flex-col items-center z-10 select-none">
            {/* Animated Tooth Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 1.05, 1], opacity: 1 }}
              transition={{
                scale: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              className="w-16 h-16 rounded-3xl bg-primary flex items-center justify-center shadow-[0_10px_30px_-6px_rgba(37,99,235,0.3)] mb-8"
            >
              <svg
                className="w-8 h-8 text-white fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C8.69 2 6 4.69 6 8c0 3.73 1.95 6.94 4.88 8.72l.44.28c.42.27.68.73.68 1.23v2.77c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.77c0-.5.26-.96.68-1.23l.44-.28C18.05 14.94 20 11.73 20 8c0-3.31-2.69-6-6-6h-2zm-1 9c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm5 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z" />
              </svg>
            </motion.div>

            {/* Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-serif font-bold text-2xl md:text-3xl text-dark mb-1 tracking-wide text-center"
            >
              Smile Signature
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-[10px] uppercase font-bold tracking-widest text-muted mb-8 text-center"
            >
              Premium Dental Clinic
            </motion.p>

            {/* Progress Bar Container */}
            <div className="w-40 h-[3px] bg-gray-100 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-primary"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>

            {/* Progress Percentage */}
            <span className="text-[10px] font-bold text-primary mt-3.5 uppercase tracking-widest">
              {Math.min(progress, 100)}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
