"use client";

import Image from "next/image";

const partners = [
    { name: "Company 1", src: "/images/company-1.png", padding: "p-2.5" },
    { name: "Company 2", src: "/images/company-2.png", padding: "p-2.5" },
    { name: "Company 3", src: "/images/company-3.jpg" },
    { name: "Company 4", src: "/images/company-4.jpg" },
];

// Duplicate the list enough times to ensure seamless scrolling on wider screens
const marqueeList = [...partners, ...partners, ...partners, ...partners];

const PartnersSection = () => {
    return (
        <section className="py-8 relative overflow-hidden flex flex-col items-center justify-center bg-white border-y border-gold/60">
            {/* Gold Linear Background Accent - Subtle gradient from bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent pointer-events-none" />

            {/* Gradient Masks for "Fade" Effect - Adjusted for White BG */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Marquee Container */}
            <div className="flex w-full overflow-hidden group relative z-0">
                <div
                    className="flex text-nowrap animate-trust-loop"
                >
                    {marqueeList.map((partner, index) => (
                        <div
                            key={index}
                            className={`relative w-[50vw] md:w-[25vw] h-[50px] md:h-[80px] flex-shrink-0 flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer ${partner.padding || "px-4"}`}
                        >
                            {/* Logos: Full Color */}
                            <div className="relative w-full h-full">
                                <Image
                                    src={partner.src}
                                    alt={partner.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Inline Styles for Custom Animation since Tailwind config is strict */}
            <style jsx>{`
                @keyframes trust-loop {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); } 
                }
                .animate-trust-loop {
                    animation: trust-loop 40s linear infinite;
                    display: flex; /* Ensure flex behavior */
                }
                .group:hover .animate-trust-loop {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default PartnersSection;
