"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const services = [
        {
            image: "/images/service-1.jpg",
            heading: "Real Estate Done Right",
            description: "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!"
        },
        {
            image: "/images/service-2.jpg",
            heading: "Commercial & Residential",
            description: "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars."
        },
        {
            image: "/images/service-3.jpg",
            heading: "Rely on Expertise",
            description: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way."
        }
    ];

    useEffect(() => {
        if (!containerRef.current) return;

        const panels = gsap.utils.toArray<HTMLElement>(".service-panel");
        let scrollTween: gsap.core.Tween;

        const mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            // Main horizontal scroll animation - Desktop & Laptop (LG+)
            scrollTween = gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    end: () => "+=" + (containerRef.current?.offsetWidth || 0),
                    anticipatePin: 1
                }
            });
        });

        mm.add("(min-width: 1280px)", () => {
            // Title Animation
            gsap.from(".svc-anim", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        return () => {
            mm.revert();
        };
    }, []);

    return (

        <section ref={sectionRef} id="services" className="relative bg-cream text-charcoal pb-20 lg:pb-0">
            {/* Title Section - Hidden on Laptop/Tablet (<XL), Visible on Large Desktop (XL+) */}
            <div className="hidden xl:block absolute top-0 left-0 right-0 z-10 py-12 xl:py-20 px-6 lg:px-12 pointer-events-none">
                <div className="text-center">
                    <h2 className="svc-anim font-serif text-3xl md:text-4xl text-charcoal mb-3 drop-shadow-sm">
                        Services
                    </h2>
                    <p className="svc-anim text-gold text-sm tracking-widest uppercase font-medium max-w-2xl mx-auto">
                        Comprehensive Solutions for Every Need
                    </p>
                </div>
            </div>

            {/* Horizontal Scroll Container (LG+) / Vertical Stack (Mobile <LG) */}
            <div ref={containerRef} className="flex flex-col lg:flex-row lg:flex-nowrap lg:h-screen lg:overflow-hidden">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="service-panel flex-shrink-0 w-full min-h-screen lg:h-full flex items-center justify-center px-4 md:px-6 lg:px-12 pt-10 pb-12 lg:pt-0 lg:pb-0"
                    >
                        {/* The Floating Card with White Background */}
                        <div className="w-full max-w-6xl bg-white rounded-[2rem] p-6 lg:p-12 shadow-xl border border-charcoal/5 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center xl:mt-24">

                            {/* Left: Image */}
                            <div className="relative w-full aspect-[4/3] lg:aspect-[3/2] max-h-[50vh] group order-2 lg:order-1 rounded-xl overflow-hidden">
                                {/* Decorative Border/Frame inside content */}
                                <div className="absolute inset-0 border border-gold/20 z-10 pointer-events-none rounded-xl" />

                                <div className="relative h-full w-full overflow-hidden bg-charcoal/5">
                                    <Image
                                        src={service.image}
                                        alt={service.heading}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        quality={100}
                                        priority={index === 0}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>

                            {/* Right: Content */}
                            <div className="flex flex-col justify-center h-full relative order-1 lg:order-2">
                                {/* Number Watermark */}
                                <div className="absolute -top-16 -right-6 text-[8rem] lg:text-[10rem] font-serif text-gold/30 pointer-events-none select-none hidden lg:block leading-none">
                                    0{index + 1}
                                </div>

                                <div className="space-y-6 lg:space-y-8 relative z-10 text-center lg:text-left">
                                    <div>
                                        <div className="w-12 h-[2px] bg-gold mb-6 mx-auto lg:mx-0" />
                                        <h3 className="font-serif text-3xl lg:text-5xl text-charcoal leading-tight">
                                            {service.heading}
                                        </h3>
                                    </div>

                                    <p className="font-sans text-charcoal/80 text-base lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                                        {service.description}
                                    </p>

                                    {/* Pagination Dots */}
                                    <div className="pt-4 flex justify-center lg:justify-start">
                                        <div className="flex items-center gap-2">
                                            {services.map((_, dotIndex) => (
                                                <div
                                                    key={dotIndex}
                                                    className={`h-1.5 rounded-full transition-all duration-500 ${dotIndex === index
                                                        ? 'w-12 bg-gold'
                                                        : 'w-2 bg-charcoal/20'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
