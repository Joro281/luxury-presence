
import { Phone } from "lucide-react";

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-cream">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-3xl mx-auto">
                    {/* Photo */}
                    <div className="relative">
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gold shadow-2xl relative z-10">
                            <img
                                src="/images/marci-photo.jpg"
                                alt="Marci Metzger - Realtor"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold rounded-full flex flex-col items-center justify-center shadow-lg z-20 animate-fade-in-delay">
                            <span className="text-charcoal font-serif text-2xl font-bold leading-none">30</span>
                            <span className="text-charcoal text-xs font-bold tracking-wider">YRS</span>
                        </div>
                    </div>

                    {/* Info */}
                    <div className="text-center md:text-left flex-1">
                        <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4 tracking-wide animate-fade-in-up">
                            MARCI METZGER
                        </h2>
                        <p className="text-gold font-sans text-lg md:text-xl font-medium tracking-widest mb-8 animate-fade-in-delay">
                            REALTOR FOR NEARLY 3 DECADES!
                        </p>
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
                            <div className="w-12 h-12 bg-charcoal rounded-full flex items-center justify-center shadow-md">
                                <Phone className="w-5 h-5 text-gold" />
                            </div>
                            <a
                                href="tel:206-919-6886"
                                className="font-sans text-2xl md:text-3xl text-charcoal hover:text-gold transition-colors font-medium tracking-tight"
                            >
                                206-919-6886
                            </a>
                        </div>
                        <a
                            href="#contact"
                            className="btn-primary inline-block shadow-xl hover:shadow-2xl"
                        >
                            Contact Marci
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
