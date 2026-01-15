"use client";

import { useState, useEffect } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
// import logo from "@/assets/logo.png"; // Changed to public path

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        {
            name: "Services",
            href: "#services",
            dropdown: [
                { name: "Buying", href: "#services" },
                { name: "Selling", href: "#services" },
                { name: "Property Management", href: "#services" },
            ],
        },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "bg-white shadow-md py-3"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 lg:px-12">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex-shrink-0">
                        <img
                            src="/images/logo.png"
                            alt="Marci Metzger Homes"
                            className={`h-10 md:h-12 w-auto transition-all duration-300 ${isScrolled ? "" : "brightness-0 invert"
                                }`}
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                {link.dropdown ? (
                                    <button
                                        className={`nav-link flex items-center gap-1 transition-colors duration-300 ${isScrolled
                                            ? "text-black"
                                            : "text-primary-foreground/90 hover:text-white"
                                            }`}
                                        onMouseEnter={() => setIsServicesOpen(true)}
                                        onMouseLeave={() => setIsServicesOpen(false)}
                                    >
                                        {link.name}
                                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                    </button>
                                ) : (
                                    <a
                                        href={link.href}
                                        className={`nav-link transition-colors duration-300 ${isScrolled
                                            ? "text-black"
                                            : "text-primary-foreground/90 hover:text-white"
                                            }`}
                                    >
                                        {link.name}
                                    </a>
                                )}

                                {/* Dropdown Menu */}
                                <AnimatePresence>
                                    {link.dropdown && isServicesOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
                                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                            exit={{ opacity: 0, y: 10, filter: "blur(5px)" }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 pt-4"
                                            onMouseEnter={() => setIsServicesOpen(true)}
                                            onMouseLeave={() => setIsServicesOpen(false)}
                                        >
                                            <div className={`rounded-sm shadow-elevated py-3 min-w-[200px] border transition-colors duration-300 ${isScrolled
                                                ? "bg-charcoal border-white/10"
                                                : "bg-white border-gray-100"
                                                }`}>
                                                {link.dropdown.map((subItem) => (
                                                    <a
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className={`block px-5 py-2.5 text-sm transition-colors duration-200 ${isScrolled
                                                            ? "text-white/80 hover:text-white hover:bg-white/10"
                                                            : "text-black/80 hover:text-gold hover:bg-gray-50"
                                                            }`}
                                                    >
                                                        {subItem.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Right Actions */}
                    <div className="hidden lg:flex items-center gap-6">
                        <button
                            className={`p-2 transition-colors ${isScrolled
                                ? "text-black hover:text-gold"
                                : "text-primary-foreground/80 hover:text-white"
                                }`}
                            aria-label="Search"
                        >
                            <Search className="w-5 h-5" />
                        </button>
                        <a
                            href="#contact"
                            className={`px-6 py-2.5 text-sm font-medium tracking-wider uppercase transition-all duration-300 ${isScrolled
                                ? "bg-primary text-primary-foreground hover:bg-gold hover:text-white shadow-xl hover:shadow-2xl"
                                : "bg-accent text-accent-foreground hover:bg-white hover:text-gold shadow-xl hover:shadow-2xl"
                                }`}
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`lg:hidden p-2 ${isScrolled ? "text-charcoal" : "text-primary-foreground"
                            }`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="lg:hidden absolute top-full left-0 right-0 bg-background shadow-elevated overflow-hidden"
                        >
                            <div className="container mx-auto px-6 py-6">
                                {navLinks.map((link) => (
                                    <div key={link.name} className="py-2">
                                        {link.dropdown ? (
                                            <div>
                                                <button
                                                    className="w-full flex items-center justify-between py-3 text-foreground font-medium"
                                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                                >
                                                    {link.name}
                                                    <ChevronDown
                                                        className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""
                                                            }`}
                                                    />
                                                </button>
                                                <div
                                                    className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? "max-h-40" : "max-h-0"
                                                        }`}
                                                >
                                                    {link.dropdown.map((subItem) => (
                                                        <a
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="block pl-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            {subItem.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <a
                                                href={link.href}
                                                className="block py-3 text-foreground font-medium"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {link.name}
                                            </a>
                                        )}
                                    </div>
                                ))}
                                <div className="pt-4 mt-4 border-t border-border">
                                    <a
                                        href="#contact"
                                        className="block w-full text-center bg-primary text-primary-foreground px-6 py-3 text-sm font-medium tracking-wider uppercase"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Navbar;
