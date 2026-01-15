"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYelp, FaWhatsapp } from "react-icons/fa";
import { motion } from "motion/react";
import Link from 'next/link';
import { Mail, MapPin, Phone, ArrowUp } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <FaFacebookF />, href: "#", name: "Facebook" },
        { icon: <FaInstagram />, href: "#", name: "Instagram" },
        { icon: <FaLinkedinIn />, href: "#", name: "LinkedIn" },
        { icon: <FaYelp />, href: "#", name: "Yelp" },
        { icon: <FaWhatsapp />, href: "#", name: "WhatsApp" },
    ];

    const quickLinks = [
        { name: "Home", href: "#" },
        { name: "Gallery", href: "#gallery" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-charcoal text-white pt-20 pb-10 border-t border-white/5 font-sans relative overflow-hidden">
            {/* Background Element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <div className="font-serif text-2xl md:text-3xl text-white tracking-wide">
                            MARCI METZGER <span className="text-gold">HOMES</span>
                        </div>
                        <p className="text-white/60 leading-relaxed font-light text-sm">
                            Exclusive luxury homes in Pahrump and beyond. Dedicated to exceptional service and premium real estate experiences.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="lg:pl-8">
                        <h4 className="font-serif text-lg text-white mb-6 tracking-wider">Explore</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-white/60 hover:text-gold transition-colors text-sm font-light uppercase tracking-widest inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-gold transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="font-serif text-lg text-white mb-6 tracking-wider">Contact</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-3 text-white/60 text-sm font-light group">
                                <MapPin className="w-4 h-4 text-gold mt-1 shrink-0 group-hover:text-white transition-colors" />
                                <span>
                                    3190 HW-160, Suite F<br />
                                    Pahrump, Nevada 89048
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-white/60 text-sm font-light group">
                                <Phone className="w-4 h-4 text-gold shrink-0 group-hover:text-white transition-colors" />
                                <a href="tel:2069196886" className="hover:text-gold transition-colors">(206) 919-6886</a>
                            </li>
                            <li className="flex items-center gap-3 text-white/60 text-sm font-light group">
                                <Mail className="w-4 h-4 text-gold shrink-0 group-hover:text-white transition-colors" />
                                <a href="mailto:marci@theridgerealtygroup.com" className="hover:text-gold transition-colors break-all">marci@theridgerealtygroup.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Social & Newsletter */}
                    <div>
                        <h4 className="font-serif text-lg text-white mb-6 tracking-wider">Connect</h4>
                        <div className="flex flex-wrap gap-3 mb-8">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full border border-white/10 text-white hover:border-gold hover:text-charcoal hover:bg-gold transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    <span className="text-sm">{social.icon}</span>
                                </a>
                            ))}
                        </div>

                        <div>
                            <h5 className="font-serif text-sm text-white mb-3 opacity-80">Newsletter</h5>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full bg-transparent border-b border-white/20 py-2 pr-8 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-gold transition-colors"
                                />
                                <button className="absolute right-0 top-1/2 -translate-y-1/2 text-gold hover:text-white transition-colors text-xs uppercase tracking-widest font-bold">
                                    Join
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar: Copyright & Back to Top */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/30 text-xs font-light tracking-wider">
                        &copy; {currentYear} Marci METZGER Homes - All Rights Reserved
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-white/40 hover:text-gold transition-colors text-xs uppercase tracking-widest"
                    >
                        Back to Top
                        <span className="p-1 border border-white/20 rounded-full group-hover:border-gold transition-colors">
                            <ArrowUp className="w-3 h-3" />
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
