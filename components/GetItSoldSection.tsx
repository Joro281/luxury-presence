"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const GetItSoldSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const features = [
        {
            image: "/images/sold-1.jpg",
            heading: "Top Residential Sales",
            subheading: "Last 5 Years",
            description: "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.",
            stats: { value: "$28.5M", label: "in Sales" }
        },
        {
            image: "/images/sold-2.jpg",
            heading: "Don't Just List it...",
            subheading: "Get it SOLD!",
            description: "We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home. Professional marketing, strategic pricing, and relentless dedication.",
            stats: { value: "90+", label: "Clients" }
        },
        {
            image: "/images/sold-3.jpg",
            heading: "Guide to Buyers",
            subheading: "Expert Navigation",
            description: "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more! We make your journey seamless.",
            stats: { value: "30", label: "Years" }
        }
    ];

    useEffect(() => {
        if (!containerRef.current) return;

        const panels = gsap.utils.toArray<HTMLElement>(".panel");
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
            gsap.from(".gis-anim", {
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
        <section ref={sectionRef} id="selling" className="relative bg-charcoal text-cream pb-20 lg:pb-0">
            {/* Title Section - Hidden on Laptop/Tablet (<XL), Visible on Large Desktop (XL+) */}
            <div className="hidden xl:block absolute top-0 left-0 right-0 z-10 py-12 xl:py-20 px-6 lg:px-12 pointer-events-none">
                <div className="text-center">
                    <h2 className="gis-anim font-serif text-3xl md:text-4xl text-white mb-3 drop-shadow-sm">
                        Get It Sold
                    </h2>
                    <p className="gis-anim text-gold text-sm tracking-widest uppercase font-medium max-w-2xl mx-auto">
                        Maximize your property&apos;s potential
                    </p>
                </div>
            </div>

            {/* Horizontal Scroll Container (LG+) / Vertical Stack (Mobile <LG) */}
            <div ref={containerRef} className="flex flex-col lg:flex-row lg:flex-nowrap lg:h-screen lg:overflow-hidden">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="panel flex-shrink-0 w-full min-h-screen lg:h-full flex items-center justify-center px-4 md:px-6 lg:px-12 pt-10 pb-12 lg:pt-0 lg:pb-0"
                    >
                        {/* The Floating Card */}
                        <div className="w-full max-w-6xl bg-charcoal-light rounded-[2rem] p-6 md:p-10 lg:p-12 shadow-2xl border border-white/5 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center xl:mt-24">

                            {/* Left: Image (High Quality, Natural Aspect Ratio) */}
                            <div className="relative w-full aspect-[3/2] max-h-[50vh] group rounded-xl overflow-hidden">
                                {/* Decorative Border/Frame */}
                                <div className="absolute inset-0 border border-gold/10 z-10 pointer-events-none rounded-xl" />

                                <div className="relative h-full w-full overflow-hidden z-0 bg-charcoal">
                                    <Image
                                        src={feature.image}
                                        alt={feature.heading}
                                        fill
                                        className="object-contain transition-transform duration-1000 group-hover:scale-105"
                                        quality={100}
                                        priority={index === 0}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />

                                    {/* Stats Badge - Inset */}
                                    <div className="absolute top-4 right-4 lg:top-8 lg:right-8 bg-gold text-charcoal px-4 py-2 lg:px-6 lg:py-4 shadow-lg rounded-lg">
                                        <div className="flex flex-col items-center">
                                            <span className="font-serif text-2xl lg:text-3xl font-bold leading-none">
                                                {feature.stats.value}
                                            </span>
                                            <span className="text-[10px] lg:text-xs tracking-widest uppercase font-medium mt-1">
                                                {feature.stats.label}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Content */}
                            <div className="flex flex-col justify-center h-full relative">
                                {/* Number Watermark - Right Side */}
                                <div className="absolute -top-16 -right-6 text-[8rem] lg:text-[10rem] font-serif text-white/[0.03] pointer-events-none select-none hidden lg:block leading-none">
                                    0{index + 1}
                                </div>

                                <div className="space-y-6 lg:space-y-8 relative z-10">
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-8 h-[1px] bg-gold" />
                                            <p className="font-sans text-gold text-xs lg:text-sm uppercase tracking-[0.2em]">
                                                {feature.subheading}
                                            </p>
                                        </div>

                                        <h3 className="font-serif text-3xl lg:text-5xl text-white leading-tight">
                                            {feature.heading}
                                        </h3>
                                    </div>

                                    <p className="font-sans text-white/70 text-base lg:text-lg leading-relaxed max-w-lg">
                                        {feature.description}
                                    </p>

                                    {/* Additional visual element or CTA could go here */}
                                    <div className="pt-4">
                                        <div className="flex items-center gap-2">
                                            {features.map((_, dotIndex) => (
                                                <div
                                                    key={dotIndex}
                                                    className={`h-1.5 rounded-full transition-all duration-500 ${dotIndex === index
                                                        ? 'w-12 bg-gold'
                                                        : 'w-2 bg-white/20'
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

export default GetItSoldSection;
