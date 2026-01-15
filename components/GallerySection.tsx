"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { Plus } from "lucide-react";

const GallerySection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const galleryItems = [
        {
            id: 1,
            image: "/images/gallery-1.jpg",
            title: "Modern Elegance",
            location: "Beverly Hills, CA",
            tag: "Interior"
        },
        {
            id: 2,
            image: "/images/gallery-2.jpg",
            title: "Coastal Retreat",
            location: "Malibu, CA",
            tag: "Exterior"
        },
        {
            id: 3,
            image: "/images/gallery-3.jpg",
            title: "Urban Oasis",
            location: "Downtown LA",
            tag: "Living Room"
        },
        {
            id: 4,
            image: "/images/gallery-4.jpg",
            title: "Mountain Estate",
            location: "Aspen, CO",
            tag: "View"
        },
        {
            id: 5,
            image: "/images/gallery-5.jpg",
            title: "Mediterranean Villa",
            location: "Santa Barbara, CA",
            tag: "Pool"
        },
        {
            id: 6,
            image: "/images/gallery-6.jpg",
            title: "Contemporary Loft",
            location: "New York, NY",
            tag: "Kitchen"
        },
    ];

    return (
        <section className="relative bg-charcoal pt-20 pb-32 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-serif text-3xl md:text-4xl text-white mb-3 drop-shadow-sm"
                    >
                        Our Portfolio
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-gold text-sm tracking-widest uppercase font-medium"
                    >
                        Distinctive Homes & Exceptional Results
                    </motion.p>
                </div>

                {/* Expanding Accordion Carousel */}
                <div className="flex flex-col md:flex-row h-[80vh] md:h-[500px] gap-4">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            layout
                            onClick={() => setActiveIndex(index)}
                            className={`relative border-2 h-full rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${activeIndex === index
                                ? "flex-[5] md:flex-[10] border-gold" // Expanded state
                                : "flex-[1] opacity-70 hover:opacity-100 border-white/20 hover:border-gold/50" // Collapsed state
                                }`}
                        >
                            {/* Image Background */}
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                quality={90}
                            />

                            {/* Overlay Gradient - Always visible but stronger on active */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent transition-opacity duration-500 ${activeIndex === index ? "opacity-100" : "opacity-0 md:opacity-100 md:group-hover:opacity-60"
                                }`} />

                            {/* Active Content: Title & Details */}
                            <AnimatePresence mode="wait">
                                {activeIndex === index ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.4, delay: 0.2 }}
                                        className="absolute bottom-0 left-0 p-6 md:p-8 w-full"
                                    >
                                        <div className="overflow-hidden">
                                            <motion.p
                                                initial={{ y: 20 }}
                                                animate={{ y: 0 }}
                                                className="text-gold text-xs md:text-sm tracking-widest uppercase font-bold mb-2"
                                            >
                                                {item.tag}
                                            </motion.p>
                                            <motion.h3
                                                initial={{ y: 20 }}
                                                animate={{ y: 0 }}
                                                transition={{ delay: 0.1 }}
                                                className="font-serif text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-1 drop-shadow-lg"
                                            >
                                                {item.title}
                                            </motion.h3>
                                            <motion.div
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                                className="flex items-center gap-2 text-white/80 text-sm md:text-base"
                                            >
                                                <span>{item.location}</span>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    /* Inactive Content: Vertical Label or Mobile Minimized */
                                    <div className="absolute inset-0 flex items-center justify-center md:items-end md:pb-8">
                                        {/* Mobile: Simple Number or Icon */}
                                        <div className="md:hidden text-white/80">
                                            <span className="text-xl font-serif">0{index + 1}</span>
                                        </div>

                                        {/* Desktop: Vertical Text */}
                                        <div className="hidden md:flex flex-col items-center gap-4 animate-in fade-in duration-700">
                                            <span className="text-white font-serif text-xl font-bold rotate-0 mb-4 drop-shadow-md">0{index + 1}</span>
                                            <div className="w-[1px] h-12 bg-white/20" />
                                            <div className="writing-vertical-rl text-white text-xs font-bold tracking-[0.3em] uppercase rotate-180 whitespace-nowrap drop-shadow-md">
                                                {item.title}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </AnimatePresence>

                            {/* View Button Indicator (Optional, subtle hint) */}
                            {activeIndex !== index && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileHover={{ opacity: 1, scale: 1 }}
                                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                >
                                    <div className="w-12 h-12 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center border border-gold/40">
                                        <Plus className="w-5 h-5 text-gold" />
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Custom CSS for vertical writing mode tailwind plugin might be missing */}
            <style jsx global>{`
                .writing-vertical-rl {
                    writing-mode: vertical-rl;
                }
            `}</style>
        </section>
    );
};

export default GallerySection;
