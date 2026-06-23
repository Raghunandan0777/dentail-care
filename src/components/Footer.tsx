"use client";

import { MessageSquare, Phone, Mail, MapPin, Sparkles } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Meet the Doctor", href: "#doctor" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#testimonials" },
  ];

  return (
    <footer className="bg-ivory pt-24 pb-12 relative overflow-hidden">
      {/* Top Gold Divider */}
      <div className="gold-divider mb-20" />
      
      {/* Decorative subtle background glows */}
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-gold-light/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[200px] h-[200px] rounded-full bg-gold-light/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* Clinic Branding and Contact */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#home" className="flex items-center gap-2 group mb-6">
              <div className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center text-white shadow-premium">
                <Sparkles className="w-5 h-5 text-white animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wide text-dark">
                  Smile Signature
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold -mt-1">
                  Luxury Dental Care
                </span>
              </div>
            </a>
            
            <p className="text-sm text-dark/70 font-light leading-relaxed mb-6 max-w-sm">
              Providing state-of-the-art dental care with premium hospitality. Dr. Alexander Mercer (BDS, MDS) offers customized smile design and implant surgery.
            </p>

            <ul className="space-y-4 w-full">
              <li className="flex items-start gap-3.5 text-sm text-dark/75">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="font-light leading-relaxed">
                  Suite 400, Golden Heights Medical Center, 742 Evergreen Terrace
                </span>
              </li>
              <li className="flex items-center gap-3.5 text-sm text-dark/75">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+918866902356" className="hover:text-gold transition-luxury font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded px-1">
                  +91 88669 02356
                </a>
              </li>
              <li className="flex items-center gap-3.5 text-sm text-dark/75">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a href="mailto:appointments@smilesignature.com" className="hover:text-gold transition-luxury font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded px-1">
                  appointments@smilesignature.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col items-start lg:pl-6">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-gold mb-6 font-sans">Quick Links</h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-dark/75 hover:text-gold transition-luxury font-light focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded px-1 py-0.5 hover:translate-x-1 block w-fit"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Google Maps Integration */}
          <div className="lg:col-span-6 flex flex-col items-start w-full">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-gold mb-6 font-sans">Our Location</h3>
            
            {/* Custom rounded Maps frame */}
            <div className="w-full h-[240px] rounded-2xl overflow-hidden shadow-premium border border-gold/10 relative bg-gray-100">
              {/* Premium Google Maps Iframe */}
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

        {/* Mid-footer Gold Divider */}
        <div className="gold-divider my-8" />

        {/* Footer Bottom */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[11px] text-dark/50 font-bold uppercase tracking-wider">
            © 2026 Smile Signature. All Rights Reserved. Designed for premium dental clinics.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/918866902356"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark hover:text-white hover:bg-gold border border-gold/10 hover:border-gold shadow-sm transition-luxury focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 cursor-pointer"
              aria-label="Contact Smile Signature on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark hover:text-white hover:bg-gold border border-gold/10 hover:border-gold shadow-sm transition-luxury focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 cursor-pointer"
              aria-label="Visit Smile Signature Instagram profile"
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
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark hover:text-white hover:bg-gold border border-gold/10 hover:border-gold shadow-sm transition-luxury focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 cursor-pointer"
              aria-label="Visit Smile Signature Facebook profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
