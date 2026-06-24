"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer: "We recommend visiting every 6 months for routine check-ups and professional cleaning. Regular visits help detect issues early and maintain optimal oral health. For patients with specific conditions, we may recommend more frequent visits.",
  },
  {
    question: "Are dental implants painful?",
    answer: "Modern dental implant procedures are performed under local anesthesia, making them virtually painless. Post-procedure, you may experience mild discomfort for a few days, which can be managed with prescribed medication. Most patients report the experience is much easier than expected.",
  },
  {
    question: "How long does teeth whitening last?",
    answer: "Professional teeth whitening results typically last 1-3 years depending on your lifestyle habits. Avoiding staining foods and beverages, along with proper oral hygiene, helps maintain your bright smile longer. We also offer take-home maintenance kits.",
  },
  {
    question: "What is the cost of cosmetic dentistry?",
    answer: "Costs vary depending on the treatment. We offer transparent pricing during your consultation and provide flexible payment options. Every treatment plan is customized — we'll discuss all costs upfront so there are no surprises.",
  },
  {
    question: "Do you accept dental insurance?",
    answer: "Yes, we accept most major dental insurance plans. Our team will help you understand your coverage and maximize your benefits. We also offer flexible payment plans for treatments not fully covered by insurance.",
  },
  {
    question: "What should I do in a dental emergency?",
    answer: "Call us immediately at our emergency number. We prioritize emergency cases and offer same-day appointments when possible. Common emergencies include severe toothache, knocked-out teeth, broken crowns, or facial swelling.",
  },
  {
    question: "How do Invisalign aligners work?",
    answer: "Invisalign uses a series of custom-made, clear plastic aligners to gradually move your teeth into position. Each set is worn for about 2 weeks before switching to the next. Treatment typically takes 6-18 months depending on complexity.",
  },
  {
    question: "Is the clinic safe and hygienic?",
    answer: "Absolutely. We follow strict ISO-certified sterilization protocols. All instruments are autoclave-sterilized, treatment rooms are sanitized between patients, and our staff follows rigorous infection control guidelines exceeding industry standards.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-28 lg:py-36 bg-white relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-primary-50/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full bg-primary-50/20 blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary-50 px-4 py-1.5 rounded-full border border-primary/10 inline-block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark mt-5 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted font-light max-w-md mx-auto text-sm md:text-base leading-relaxed">
            Find answers to common questions about our dental services and treatments.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="relative mb-10"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-5 py-4 rounded-2xl bg-ivory border border-gray-200 focus:border-primary text-base lg:text-sm text-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 transition-all placeholder:text-muted/60"
            aria-label="Search frequently asked questions"
          />
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted text-sm">No questions found matching &quot;{searchQuery}&quot;</p>
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const globalIndex = faqs.indexOf(faq);
              const isOpen = openIndex === globalIndex;

              return (
                <motion.div
                  key={globalIndex}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.04 }}
                >
                  <button
                    onClick={() => toggleFaq(globalIndex)}
                    className={`w-full text-left p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      isOpen
                        ? "bg-white border-primary/15 shadow-card-hover"
                        : "bg-ivory border-gray-100 hover:border-primary/10 hover:shadow-card"
                    }`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${globalIndex}`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className={`font-serif font-bold text-base md:text-lg transition-colors duration-300 ${
                        isOpen ? "text-primary" : "text-dark"
                      }`}>
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                          isOpen ? "bg-primary text-white" : "bg-gray-100 text-muted"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${globalIndex}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-muted font-light leading-relaxed mt-4 pt-4 border-t border-gray-100">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
