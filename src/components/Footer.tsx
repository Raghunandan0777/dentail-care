"use client";

import { useState } from "react";
import { MessageSquare, Phone, Mail, MapPin, Sparkles, ArrowRight, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Doctor", href: "#doctor" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  const openingHours = [
    { day: "Monday - Friday", time: "10:00 AM - 7:00 PM" },
    { day: "Saturday", time: "10:00 AM - 5:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-ivory pt-16 sm:pt-24 pb-8 relative overflow-hidden">
      {/* Top Divider */}
      <div className="blue-divider mb-20" />

      {/* Background glows */}
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-primary-50/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[200px] h-[200px] rounded-full bg-primary-50/10 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">

          {/* Column 1: Branding & Contact */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#home" className="flex items-center gap-2.5 group mb-6">
              <div className="w-10 h-10 rounded-xl blue-gradient flex items-center justify-center text-white shadow-premium">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wide text-dark">
                  Smile Signature
                </span>
                <span className="text-xs uppercase tracking-widest text-primary font-bold -mt-1">
                  Premium Dental Care
                </span>
              </div>
            </a>

            <p className="text-sm text-muted font-light leading-relaxed mb-6 max-w-sm">
              Providing state-of-the-art dental care with premium hospitality. Dr. Alexander Mercer (BDS, MDS) offers customized smile design and implant surgery.
            </p>

            <ul className="space-y-3.5 w-full">
              <li className="flex items-start gap-3 text-sm text-dark/75">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="font-light leading-relaxed">
                  Suite 400, Golden Heights Medical Center, 742 Evergreen Terrace
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-dark/75">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+918866902356" className="hover:text-primary transition-colors duration-300 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1">
                  +91 88669 02356
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-dark/75">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:appointments@smilesignature.com" className="hover:text-primary transition-colors duration-300 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1">
                  appointments@smilesignature.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6 font-sans">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-all duration-300 font-light focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 py-0.5 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Opening Hours */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6 font-sans">Opening Hours</h3>
            <ul className="space-y-3 w-full">
              {openingHours.map((item) => (
                <li key={item.day} className="flex flex-col">
                  <span className="text-sm font-medium text-dark">{item.day}</span>
                  <span className={`text-xs font-light ${item.time === 'Closed' ? 'text-rose-400' : 'text-muted'}`}>
                    {item.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter + Map */}
          <div className="lg:col-span-4 flex flex-col items-start w-full">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6 font-sans">Stay Connected</h3>

            {/* Newsletter */}
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Subscribe for dental tips, exclusive offers, and clinic updates.
            </p>
            <form onSubmit={handleSubscribe} className="flex w-full gap-2 mb-8">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-primary text-base lg:text-sm text-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 transition-all placeholder:text-muted/50"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="px-4 py-3 rounded-xl blue-gradient text-white hover:opacity-90 transition-all duration-300 shadow-premium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
                aria-label="Subscribe to newsletter"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-emerald-600 font-semibold -mt-4 mb-4"
              >
                ✓ Thank you for subscribing!
              </motion.p>
            )}

            {/* Map */}
            <div className="w-full h-[180px] rounded-2xl overflow-hidden shadow-card border border-gray-100 relative bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233918074127!2d77.08056291507963!3d28.487823982476595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d193ed7a55555%3A0x6b97b0a70bb4e183!2sCyber%20Hub!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(1.05) saturate(0.9)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Smile Signature Location Map"
              />
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="blue-divider my-8" />

        {/* Footer Bottom */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-muted font-medium tracking-wide">
            © 2026 Smile Signature. All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/918866902356"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-muted hover:text-white hover:bg-primary border border-gray-200 hover:border-primary shadow-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
              aria-label="Contact us on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-muted hover:text-white hover:bg-primary border border-gray-200 hover:border-primary shadow-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-muted hover:text-white hover:bg-primary border border-gray-200 hover:border-primary shadow-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
