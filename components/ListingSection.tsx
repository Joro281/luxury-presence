"use client";

import { motion } from "motion/react";
import { Search, MapPin, Home, DollarSign, BedDouble } from "lucide-react";
import Image from "next/image";

const ListingSection = () => {
    return (
        <section className="pt-20 pb-32 bg-background-light relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 select-none">
                <Image
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
                    alt="Luxury Home Background"
                    fill
                    className="object-cover opacity-20 mix-blend-overlay grayscale contrast-125"
                    unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Section Title - More compact */}
                    <div className="text-center mb-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="font-serif text-3xl md:text-4xl text-charcoal mb-3 drop-shadow-sm"
                        >
                            Find Your Dream Home
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-gold text-sm tracking-widest uppercase font-medium"
                        >
                            Explore Exclusive Listings
                        </motion.p>
                    </div>

                    {/* Compact Search Bar - Expanded Fields */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/80 backdrop-blur-md rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/50 p-4 relative"
                    >
                        {/* Decorative Corner Borders */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 md:w-12 md:h-12 border-t-4 border-r-4 border-gold rounded-tr-2xl pointer-events-none" />
                        <div className="absolute -bottom-2 -left-2 w-8 h-8 md:w-12 md:h-12 border-b-4 border-l-4 border-gold rounded-bl-2xl pointer-events-none" />

                        <form className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 relative z-10">

                            {/* Row 1 */}

                            {/* Location - Span 2 on large */}
                            <div className="md:col-span-2 lg:col-span-2 relative group bg-white/50 rounded-lg p-3 transition-all border border-gray-200 hover:border-gold/50 focus-within:border-gold focus-within:ring-1 focus-within:ring-gold/20 focus-within:bg-white shadow-sm hover:shadow-md">
                                <label className="block text-[10px] uppercase font-bold text-charcoal/40 tracking-wider mb-1">Location</label>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-charcoal/40 group-focus-within:text-gold transition-colors" />
                                    <input
                                        type="text"
                                        placeholder="City, Zip, Neighborhood"
                                        className="w-full bg-transparent text-charcoal text-sm font-medium focus:outline-none placeholder:font-normal placeholder:text-charcoal/30"
                                    />
                                </div>
                            </div>

                            {/* Property Type */}
                            <div className="md:col-span-1 lg:col-span-2 relative group bg-white/50 rounded-lg p-3 transition-all border border-gray-200 hover:border-gold/50 focus-within:border-gold focus-within:ring-1 focus-within:ring-gold/20 focus-within:bg-white shadow-sm hover:shadow-md">
                                <label className="block text-[10px] uppercase font-bold text-charcoal/40 tracking-wider mb-1">Type</label>
                                <div className="flex items-center gap-2">
                                    <Home className="w-4 h-4 text-charcoal/40 group-focus-within:text-gold transition-colors" />
                                    <select className="w-full bg-transparent text-charcoal text-sm font-medium focus:outline-none appearance-none cursor-pointer">
                                        <option>All Types</option>
                                        <option>Single Family</option>
                                        <option>Condo</option>
                                        <option>Townhouse</option>
                                    </select>
                                </div>
                            </div>

                            {/* Sort By */}
                            <div className="md:col-span-1 lg:col-span-2 relative group bg-white/50 rounded-lg p-3 transition-all border border-gray-200 hover:border-gold/50 focus-within:border-gold focus-within:ring-1 focus-within:ring-gold/20 focus-within:bg-white shadow-sm hover:shadow-md">
                                <label className="block text-[10px] uppercase font-bold text-charcoal/40 tracking-wider mb-1">Sort By</label>
                                <select className="w-full bg-transparent text-charcoal text-sm font-medium focus:outline-none appearance-none cursor-pointer">
                                    <option>Newest</option>
                                    <option>Price (High-Low)</option>
                                    <option>Price (Low-High)</option>
                                </select>
                            </div>

                            {/* Row 2 */}

                            {/* Beds */}
                            <div className="md:col-span-1 relative group bg-white/50 rounded-lg p-3 transition-all border border-gray-200 hover:border-gold/50 focus-within:border-gold focus-within:ring-1 focus-within:ring-gold/20 focus-within:bg-white shadow-sm hover:shadow-md">
                                <label className="block text-[10px] uppercase font-bold text-charcoal/40 tracking-wider mb-1">Beds</label>
                                <div className="flex items-center gap-2">
                                    <BedDouble className="w-4 h-4 text-charcoal/40 group-focus-within:text-gold transition-colors" />
                                    <select className="w-full bg-transparent text-charcoal text-sm font-medium focus:outline-none appearance-none cursor-pointer">
                                        <option>Any</option>
                                        <option>2+</option>
                                        <option>3+</option>
                                        <option>4+</option>
                                    </select>
                                </div>
                            </div>

                            {/* Baths */}
                            <div className="md:col-span-1 relative group bg-white/50 rounded-lg p-3 transition-all border border-gray-200 hover:border-gold/50 focus-within:border-gold focus-within:ring-1 focus-within:ring-gold/20 focus-within:bg-white shadow-sm hover:shadow-md">
                                <label className="block text-[10px] uppercase font-bold text-charcoal/40 tracking-wider mb-1">Baths</label>
                                <select className="w-full bg-transparent text-charcoal text-sm font-medium focus:outline-none appearance-none cursor-pointer pl-1">
                                    <option>Any</option>
                                    <option>2+</option>
                                    <option>3+</option>
                                    <option>4+</option>
                                </select>
                            </div>

                            {/* Min Price */}
                            <div className="md:col-span-1 relative group bg-white/50 rounded-lg p-3 transition-all border border-gray-200 hover:border-gold/50 focus-within:border-gold focus-within:ring-1 focus-within:ring-gold/20 focus-within:bg-white shadow-sm hover:shadow-md">
                                <label className="block text-[10px] uppercase font-bold text-charcoal/40 tracking-wider mb-1">Min $</label>
                                <input
                                    type="text"
                                    placeholder="No Min"
                                    className="w-full bg-transparent text-charcoal text-sm font-medium focus:outline-none placeholder:text-charcoal/30"
                                />
                            </div>

                            {/* Max Price */}
                            <div className="md:col-span-1 relative group bg-white/50 rounded-lg p-3 transition-all border border-gray-200 hover:border-gold/50 focus-within:border-gold focus-within:ring-1 focus-within:ring-gold/20 focus-within:bg-white shadow-sm hover:shadow-md">
                                <label className="block text-[10px] uppercase font-bold text-charcoal/40 tracking-wider mb-1">Max $</label>
                                <input
                                    type="text"
                                    placeholder="No Max"
                                    className="w-full bg-transparent text-charcoal text-sm font-medium focus:outline-none placeholder:text-charcoal/30"
                                />
                            </div>

                            {/* Search Button - Spans 2 cols on LG or fits in flow */}
                            <div className="md:col-span-4 lg:col-span-2">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full h-full min-h-[50px] bg-charcoal text-white rounded-lg flex items-center justify-center gap-2 font-medium tracking-wide shadow-md hover:shadow-lg transition-all"
                                >
                                    <Search className="w-4 h-4 text-gold" />
                                    <span>Search</span>
                                </motion.button>
                            </div>

                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ListingSection;
