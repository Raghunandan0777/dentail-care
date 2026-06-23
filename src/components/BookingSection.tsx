"use client";

import { useState } from "react";
import { Calendar, User, Phone, Clock, MessageSquare, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function BookingSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    date: "",
    time: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) tempErrors.fullName = "Name is required";
    if (!formData.mobileNumber.trim()) {
      tempErrors.mobileNumber = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobileNumber.replace(/\s+/g, ""))) {
      tempErrors.mobileNumber = "Enter a valid 10-digit number";
    }
    if (!formData.date) tempErrors.date = "Date is required";
    if (!formData.time) tempErrors.time = "Time slot is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Confetti effect!
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#C9A227", "#E6C567", "#A8831A", "#1A1A1A"],
    });

    // Format WhatsApp message
    const whatsappNumber = "918866902356"; // Placeholder as discussed in plan
    const text = `Hello Doctor,

I would like to schedule an appointment.

Name: ${formData.fullName}
Mobile: ${formData.mobileNumber}
Date: ${formData.date}
Time: ${formData.time}

Please confirm my appointment.`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    // Redirect after brief delay for confetti feedback
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 600);
  };

  return (
    <section
      id="book-appointment"
      className="py-28 lg:py-36 bg-ivory relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.03),transparent_50%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold-light/35 px-4 py-1.5 rounded-full border border-gold/10">
            Reservations
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-dark mt-4 mb-4">
            Book Your Visit
          </h2>
          <p className="text-xs sm:text-sm text-dark/60 font-light max-w-md mx-auto leading-relaxed">
            Schedule your premium consultation in just a few clicks. Your request will be sent directly to our staff via WhatsApp for instant confirmation.
          </p>
        </div>

        {/* Form Container with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-[24px] p-8 md:p-12 shadow-premium border border-white/90"
        >
          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="fullName" className="text-[10px] uppercase tracking-widest text-dark/50 font-bold flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-gold/80" />
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
                    className={`w-full px-5 py-3.5 rounded-xl bg-white/50 border text-sm tracking-wide ${
                      errors.fullName ? "border-rose-300 focus:ring-rose-100" : "border-gray-200 focus:border-gold"
                    } text-dark focus:outline-none focus:border-gold focus-visible:ring-2 focus-visible:ring-gold/30 transition-all`}
                  />
                  {errors.fullName && (
                    <span id="fullName-error" role="alert" className="absolute right-4 top-1/2 -translate-y-1/2 text-rose-500 text-[10px] flex items-center gap-1 bg-white/95 px-2 py-0.5 rounded shadow-sm font-semibold">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.fullName}
                    </span>
                  )}
                </div>
              </div>

              {/* Mobile Number */}
              <div className="flex flex-col gap-2">
                <label htmlFor="mobileNumber" className="text-[10px] uppercase tracking-widest text-dark/50 font-bold flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-gold/80" />
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
                    className={`w-full px-5 py-3.5 rounded-xl bg-white/50 border text-sm tracking-wide ${
                      errors.mobileNumber ? "border-rose-300 focus:ring-rose-100" : "border-gray-200 focus:border-gold"
                    } text-dark focus:outline-none focus:border-gold focus-visible:ring-2 focus-visible:ring-gold/30 transition-all`}
                  />
                  {errors.mobileNumber && (
                    <span id="mobileNumber-error" role="alert" className="absolute right-4 top-1/2 -translate-y-1/2 text-rose-500 text-[10px] flex items-center gap-1 bg-white/95 px-2 py-0.5 rounded shadow-sm font-semibold">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.mobileNumber}
                    </span>
                  )}
                </div>
              </div>

              {/* Appointment Date */}
              <div className="flex flex-col gap-2">
                <label htmlFor="date" className="text-[10px] uppercase tracking-widest text-dark/50 font-bold flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gold/80" />
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
                    aria-describedby={errors.date ? "date-error" : undefined}
                    className={`w-full px-5 py-3.5 rounded-xl bg-white/50 border text-sm tracking-wide ${
                      errors.date ? "border-rose-300 focus:ring-rose-100" : "border-gray-200 focus:border-gold"
                    } text-dark focus:outline-none focus:border-gold focus-visible:ring-2 focus-visible:ring-gold/30 transition-all`}
                  />
                  {errors.date && (
                    <span id="date-error" role="alert" className="absolute right-4 top-1/2 -translate-y-1/2 text-rose-500 text-[10px] flex items-center gap-1 bg-white/95 px-2 py-0.5 rounded shadow-sm font-semibold pointer-events-none">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.date}
                    </span>
                  )}
                </div>
              </div>

              {/* Appointment Time */}
              <div className="flex flex-col gap-2">
                <label htmlFor="time" className="text-[10px] uppercase tracking-widest text-dark/50 font-bold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-gold/80" />
                  Preferred Time Slot
                </label>
                <div className="relative">
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    aria-invalid={errors.time ? "true" : "false"}
                    aria-describedby={errors.time ? "time-error" : undefined}
                    className={`w-full px-5 py-3.5 rounded-xl bg-white/50 border text-sm tracking-wide ${
                      errors.time ? "border-rose-300 focus:ring-rose-100" : "border-gray-200 focus:border-gold"
                    } text-dark focus:outline-none focus:border-gold focus-visible:ring-2 focus-visible:ring-gold/30 transition-all appearance-none`}
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
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-dark/45 border-l border-gray-150 pl-3">
                    <Clock className="w-4 h-4" />
                  </div>
                  {errors.time && (
                    <span id="time-error" role="alert" className="absolute right-10 top-1/2 -translate-y-1/2 text-rose-500 text-[10px] flex items-center gap-1 bg-white/95 px-2 py-0.5 rounded shadow-sm pointer-events-none">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.time}
                    </span>
                  )}
                </div>
              </div>

            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gold hover:bg-gold-dark text-white font-semibold text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 shadow-premium hover:shadow-premium-hover transition-all duration-300 transform active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark focus-visible:ring-offset-2 shine-btn"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                Book Appointment via WhatsApp
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
