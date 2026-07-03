"use client";

import { useState } from "react";
import { Calendar, User, Phone, Clock, MessageSquare, AlertCircle, Check, ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function BookingSection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    date: "",
    time: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateStep = (currentStep: number) => {
    const tempErrors: { [key: string]: string } = {};
    if (currentStep === 1) {
      if (!formData.fullName.trim()) tempErrors.fullName = "Name is required";
      if (!formData.mobileNumber.trim()) {
        tempErrors.mobileNumber = "Mobile number is required";
      } else if (!/^\d{10}$/.test(formData.mobileNumber.replace(/\s+/g, ""))) {
        tempErrors.mobileNumber = "Enter a valid 10-digit number";
      }
    } else if (currentStep === 2) {
      if (!formData.date) tempErrors.date = "Please select a date";
      if (!formData.time) tempErrors.time = "Please select a time slot";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitted(true);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#2563EB", "#3B82F6", "#1D4ED8", "#DBEAFE"],
    });

    const whatsappNumber = "918866902356";
    const text = `Hello Doctor,

I would like to schedule an appointment.

Name: ${formData.fullName}
Mobile: ${formData.mobileNumber}
Date: ${formData.date}
Time: ${formData.time}

Please confirm my appointment.`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1200);
  };

  const stepVariants = {
    enter: { opacity: 0, x: 40 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };

  const steps = [
    { num: 1, label: "Personal Info" },
    { num: 2, label: "Schedule" },
    { num: 3, label: "Confirm" },
  ];

  return (
    <section
      id="book-appointment"
      className="py-28 lg:py-36 bg-ivory relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.03),transparent_50%)] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary-50 px-4 py-1.5 rounded-full border border-primary/10 inline-block">
            Reservations
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark mt-5 mb-4">
            Book Your Visit
          </h2>
          <p className="text-xs sm:text-sm text-muted font-light max-w-md mx-auto leading-relaxed">
            Schedule your consultation in just a few steps. Your request will be sent directly via WhatsApp for instant confirmation.
          </p>
        </motion.div>

        {/* Progress Steps */}
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-10 w-full max-w-md mx-auto px-2">
          {steps.map((s, idx) => (
            <div key={s.num} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center shrink-0">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                  step >= s.num
                    ? "blue-gradient text-white shadow-premium"
                    : "bg-gray-100 text-muted"
                }`}>
                  {step > s.num ? <Check className="w-4 h-4" /> : s.num}
                </div>
                <span className={`text-[9px] sm:text-[10px] uppercase tracking-wider font-bold mt-2 transition-colors duration-300 text-center ${
                  step >= s.num ? "text-primary" : "text-muted"
                }`}>
                  {s.label}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div className={`flex-1 h-[2px] mx-1 sm:mx-2 rounded-full transition-all duration-500 -mt-[18px] ${
                  step > s.num ? "bg-primary" : "bg-gray-200"
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-[20px] sm:rounded-[24px] p-5 sm:p-8 md:p-10 shadow-premium border border-white/90"
        >
          {isSubmitted ? (
            /* Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                className="w-20 h-20 rounded-full blue-gradient flex items-center justify-center mx-auto mb-6 shadow-premium"
              >
                <Check className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="font-serif font-bold text-2xl text-dark mb-3">Appointment Requested!</h3>
              <p className="text-sm text-muted font-light max-w-sm mx-auto mb-6">
                Your booking details have been sent to our team via WhatsApp. We&apos;ll confirm your appointment shortly.
              </p>
              <button
                onClick={() => { setIsSubmitted(false); setStep(1); setFormData({ fullName: "", mobileNumber: "", date: "", time: "" }); }}
                className="text-primary font-semibold text-sm hover:underline"
              >
                Book Another Appointment
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <AnimatePresence mode="wait">
                {/* Step 1: Personal Info */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6"
                  >
                    <div className="flex flex-col gap-2">
                      <label htmlFor="fullName" className="text-[11px] uppercase tracking-widest text-muted font-bold flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-primary/60" />
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          placeholder="e.g. John Doe"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          aria-invalid={errors.fullName ? "true" : "false"}
                          aria-describedby={errors.fullName ? "fullName-error" : undefined}
                          className="w-full px-5 py-4 rounded-xl bg-white border text-base lg:text-sm tracking-wide border-gray-200 focus:border-primary text-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 transition-all"
                        />
                        {errors.fullName && (
                          <span id="fullName-error" role="alert" className="text-rose-500 text-xs flex items-center gap-1 mt-1.5 font-semibold">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            {errors.fullName}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="mobileNumber" className="text-[11px] uppercase tracking-widest text-muted font-bold flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-primary/60" />
                        Mobile Number
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="mobileNumber"
                          name="mobileNumber"
                          placeholder="e.g. 8866902356"
                          value={formData.mobileNumber}
                          onChange={handleInputChange}
                          aria-invalid={errors.mobileNumber ? "true" : "false"}
                          aria-describedby={errors.mobileNumber ? "mobileNumber-error" : undefined}
                          className="w-full px-5 py-4 rounded-xl bg-white border text-base lg:text-sm tracking-wide border-gray-200 focus:border-primary text-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 transition-all"
                        />
                        {errors.mobileNumber && (
                          <span id="mobileNumber-error" role="alert" className="text-rose-500 text-xs flex items-center gap-1 mt-1.5 font-semibold">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            {errors.mobileNumber}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={handleNext}
                        className="w-full py-4 rounded-xl blue-gradient text-white font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-premium hover:shadow-premium-hover transition-all duration-300 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark shine-btn cursor-pointer"
                      >
                        Continue
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Schedule */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6"
                  >
                    <div className="flex flex-col gap-2">
                      <label htmlFor="date" className="text-[11px] uppercase tracking-widest text-muted font-bold flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-primary/60" />
                        Appointment Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split("T")[0]}
                          aria-invalid={errors.date ? "true" : "false"}
                          className="w-full px-5 py-4 rounded-xl bg-white border text-base lg:text-sm tracking-wide border-gray-200 focus:border-primary text-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 transition-all"
                        />
                        {errors.date && (
                          <span role="alert" className="text-rose-500 text-xs flex items-center gap-1 mt-1.5 font-semibold">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            {errors.date}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="time" className="text-[11px] uppercase tracking-widest text-muted font-bold flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-primary/60" />
                        Preferred Time Slot
                      </label>
                      <div className="relative">
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          aria-invalid={errors.time ? "true" : "false"}
                          className="w-full px-5 py-4 rounded-xl bg-white border text-base lg:text-sm tracking-wide border-gray-200 focus:border-primary text-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Select Time Slot</option>
                          <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                          <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                          <option value="12:00 PM - 01:00 PM">12:00 PM - 01:00 PM</option>
                          <option value="03:00 PM - 04:00 PM">03:00 PM - 04:00 PM</option>
                          <option value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM</option>
                          <option value="05:00 PM - 06:00 PM">05:00 PM - 06:00 PM</option>
                          <option value="06:00 PM - 07:00 PM">06:00 PM - 07:00 PM</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
                          <Clock className="w-4 h-4" />
                        </div>
                        {errors.time && (
                          <span role="alert" className="text-rose-500 text-xs flex items-center gap-1 mt-1.5 font-semibold">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            {errors.time}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex-1 py-4 rounded-xl border-2 border-gray-200 text-dark font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:border-primary/30 transition-all duration-300 cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="flex-[2] py-4 rounded-xl blue-gradient text-white font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-premium hover:shadow-premium-hover transition-all duration-300 active:scale-[0.99] shine-btn cursor-pointer"
                      >
                        Review Booking
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Confirmation */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6"
                  >
                    <div className="text-center mb-4">
                      <h3 className="font-serif font-bold text-xl text-dark mb-2">Confirm Your Details</h3>
                      <p className="text-xs text-muted">Review your booking before submitting</p>
                    </div>

                    <div className="bg-primary-50/50 rounded-xl p-6 space-y-4 border border-primary/8">
                      <div className="flex justify-between items-center">
                        <span className="text-xs uppercase tracking-widest text-muted font-bold">Name</span>
                        <span className="text-sm font-semibold text-dark">{formData.fullName}</span>
                      </div>
                      <div className="h-px bg-primary/8" />
                      <div className="flex justify-between items-center">
                        <span className="text-xs uppercase tracking-widest text-muted font-bold">Mobile</span>
                        <span className="text-sm font-semibold text-dark">{formData.mobileNumber}</span>
                      </div>
                      <div className="h-px bg-primary/8" />
                      <div className="flex justify-between items-center">
                        <span className="text-xs uppercase tracking-widest text-muted font-bold">Date</span>
                        <span className="text-sm font-semibold text-dark">{formData.date}</span>
                      </div>
                      <div className="h-px bg-primary/8" />
                      <div className="flex justify-between items-center">
                        <span className="text-xs uppercase tracking-widest text-muted font-bold">Time</span>
                        <span className="text-sm font-semibold text-dark">{formData.time}</span>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex-1 py-4 rounded-xl border-2 border-gray-200 text-dark font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:border-primary/30 transition-all duration-300 cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Edit
                      </button>
                      <button
                        type="submit"
                        className="flex-[2] py-4 rounded-xl blue-gradient text-white font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-premium hover:shadow-premium-hover transition-all duration-300 active:scale-[0.99] shine-btn ripple-btn cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4 fill-white" />
                        Confirm via WhatsApp
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
