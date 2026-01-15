"use client";

import { useState } from "react";
import Map, { Marker, NavigationControl } from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { MapPin, Phone, Clock, Mail, Calendar } from "lucide-react";
import { motion } from "motion/react";

const ContactSection = () => {
    // Pahrump Coordinates
    const coordinates = {
        latitude: 36.2052,
        longitude: -116.0072,
        zoom: 14
    };

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formState);
    };

    return (
        <section id="contact" className="relative bg-charcoal pt-20 pb-20 lg:pb-0 overflow-hidden text-white">
            <div className="container mx-auto px-6 lg:px-12 h-full">
                <div className="flex flex-col gap-16">

                    {/* Top Section: Centered Header & Split Layout */}
                    <div>
                        {/* Centered Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4 drop-shadow-sm tracking-wide">
                                CONTACT US
                            </h2>
                            <p className="text-white/60 mb-8 font-light">
                                If you have questions, feel free to get in touch.
                            </p>
                            <div className="flex items-center justify-center gap-4 opacity-50">
                                <div className="h-[1px] w-full max-w-[200px] bg-white/20" />
                                <div className="w-2 h-2 rotate-45 border-b border-r border-gold" /> {/* Triangle hint */}
                                <div className="h-[1px] w-full max-w-[200px] bg-white/20" />
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start max-w-6xl mx-auto">
                            {/* Left Column: Contact Info (Right Aligned - 2x2 Grid) */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 text-right lg:mt-2">
                                <InfoItemMinimal
                                    icon={<Phone className="w-5 h-5 text-gold" />}
                                    label="PHONE"
                                >
                                    <a href="tel:2069196886" className="text-lg md:text-xl text-white hover:text-gold transition-colors">
                                        (206) 919-6886
                                    </a>
                                </InfoItemMinimal>

                                <InfoItemMinimal
                                    icon={<MapPin className="w-5 h-5 text-gold" />}
                                    label="ADDRESS"
                                >
                                    <p className="text-base md:text-lg text-white leading-relaxed">
                                        3190 HW-160, Suite F<br />
                                        Pahrump, Nevada 89048
                                    </p>
                                </InfoItemMinimal>

                                <InfoItemMinimal
                                    icon={<Mail className="w-5 h-5 text-gold" />}
                                    label="EMAIL"
                                >
                                    <a href="mailto:marci@theridgerealtygroup.com" className="text-sm md:text-base text-white hover:text-gold transition-colors break-all">
                                        marci@theridgerealtygroup.com
                                    </a>
                                </InfoItemMinimal>

                                <InfoItemMinimal
                                    icon={<Clock className="w-5 h-5 text-gold" />}
                                    label="OFFICE HOURS"
                                >
                                    <div className="flex flex-col items-end gap-1">
                                        <p className="text-white/90 text-sm md:text-base">Open Daily: 8:00 am - 7:00 pm</p>
                                        <p className="text-xs text-white/50 italic mt-2">
                                            Appointments outside office hours<br />available upon request. Just call!
                                        </p>
                                    </div>
                                </InfoItemMinimal>
                            </div>

                            {/* Right Column: Minimal Form */}
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="group relative">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="w-full bg-transparent border-b border-white/20 py-4 outline-none text-white transition-colors focus:border-gold placeholder:text-white/40"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="group relative">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="w-full bg-transparent border-b border-white/20 py-4 outline-none text-white transition-colors focus:border-gold placeholder:text-white/40"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="group relative">
                                    <textarea
                                        placeholder="Message"
                                        rows={4}
                                        className="w-full bg-transparent border-b border-white/20 py-4 outline-none text-white transition-colors focus:border-gold placeholder:text-white/40 resize-none"
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="flex justify-end pt-4">
                                    <button
                                        type="submit"
                                        className="px-12 py-3 border border-white/30 text-white font-medium hover:bg-gold hover:border-gold hover:text-charcoal transition-all duration-300 tracking-widest uppercase text-sm"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom: Map - Full Width Outside Container */}
            <div className="w-full h-[500px] relative mt-16 border-t border-white/10">
                <Map
                    initialViewState={coordinates}
                    style={{ width: "100%", height: "100%" }}
                    mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
                    attributionControl={false}
                    scrollZoom={false}
                >
                    <NavigationControl position="top-right" />
                    <Marker
                        longitude={coordinates.longitude}
                        latitude={coordinates.latitude}
                        anchor="bottom"
                    >
                        <div className="relative flex flex-col items-center group cursor-pointer">
                            <div className="w-12 h-12 bg-charcoal/90 rounded-full border-2 border-gold flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                                <div className="w-3 h-3 bg-gold rounded-full" />
                            </div>
                            <div className="absolute top-14 bg-charcoal text-white text-xs px-3 py-1 rounded bg-opacity-90 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                The Ridge Realty Group
                            </div>
                        </div>
                    </Marker>
                </Map>
            </div>
        </section>
    );
};

const InfoItemMinimal = ({ icon, label, children }: { icon: React.ReactNode, label: string, children: React.ReactNode }) => (
    <div className="flex flex-row-reverse sm:flex-row items-start justify-end gap-6 group">
        <div className="text-right">
            <h4 className="text-white/40 uppercase text-xs tracking-[0.2em] font-medium mb-2">{label}</h4>
            <div className="font-light">
                {children}
            </div>
        </div>
        <div className="mt-1 p-3 border border-white/10 rounded-full group-hover:border-gold/50 transition-colors shrink-0">
            {icon}
        </div>
    </div>
);

export default ContactSection;
