"use client";

import { motion, Variants } from "motion/react";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};


const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background Image - with slight parallax or scale effect if desired, keeping it simple for now */}
            <div className="absolute inset-0">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full h-full"
                >
                    <img
                        src="/images/hero-bg.jpg"
                        alt="Luxury home interior"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/50 to-transparent" />
                <div className="absolute inset-0 bg-charcoal/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 lg:px-12 flex-grow flex flex-col justify-center pt-32 pb-20 lg:py-0 h-full">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="max-w-3xl"
                >
                    {/* Decorative Line */}
                    <motion.div
                        variants={fadeInUp}
                        className="w-16 h-[2px] bg-accent mb-8"
                    />

                    {/* Headline */}
                    <motion.h1
                        variants={fadeInUp}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-none mb-6"
                    >
                        Discover Your
                        <span className="block italic text-gold-light font-normal">Dream Home</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-10 leading-relaxed font-light tracking-wide"
                    >
                        Exceptional properties, personalized service, and a commitment to
                        finding the perfect place you&apos;ll love to call home.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#properties"
                            className="btn-hero inline-flex items-center justify-center bg-primary text-primary-foreground"
                        >
                            View Properties
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#about"
                            className="btn-outline inline-flex items-center justify-center border border-primary-foreground text-primary-foreground"
                        >
                            Learn More
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="hidden md:flex absolute bottom-28 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
            >
                <span className="text-primary-foreground/60 text-xs tracking-[0.3em] uppercase">
                    Scroll
                </span>
                <motion.div
                    animate={{ height: [0, 48, 0], opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-[1px] bg-gradient-to-b from-primary-foreground/60 to-transparent"
                />
            </motion.div>

            {/* Stats Bar */}
            <div className="w-full relative lg:absolute bottom-0 left-0 right-0 bg-charcoal/80 backdrop-blur-sm border-t border-primary-foreground/10 z-20">
                <div className="container mx-auto px-6 lg:px-12 py-6">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
                    >
                        {[
                            { value: "15+", label: "Years Experience" },
                            { value: "90+", label: "Clients" },
                            { value: "$28.5M", label: "Sales Volume" },
                            { value: "98%", label: "Client Satisfaction" },
                        ].map((stat, index) => (
                            <motion.div key={index} variants={fadeInUp} className="text-center">
                                <div className="font-serif text-3xl md:text-4xl text-gold-light mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-xs md:text-sm text-primary-foreground/60 tracking-wider uppercase">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
