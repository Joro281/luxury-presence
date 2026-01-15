"use client";

import React, { useEffect, useRef, useState } from 'react';

const FooterReveal = ({ children }: { children: React.ReactNode }) => {
    const [height, setHeight] = useState(0);
    const footerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!footerRef.current) return;

        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setHeight(entry.contentRect.height);
            }
        });

        observer.observe(footerRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            className="relative z-0"
            style={{ minHeight: height }} // Reserve space in the document flow
        >
            <div
                ref={footerRef}
                className="relative lg:fixed bottom-0 left-0 w-full z-0" // relative on mobile, fixed on desktop
            >
                {children}
            </div>
        </div>
    );
};

export default FooterReveal;
