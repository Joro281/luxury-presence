import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GetItSoldSection from "@/components/GetItSoldSection";
import ListingSection from "@/components/ListingSection";
import PartnersSection from "@/components/PartnersSection";
import GallerySection from "@/components/GallerySection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FooterReveal from "@/components/FooterReveal";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Scrollable Content Wrapper (The Curtain) */}
      <div className="relative z-10 bg-charcoal shadow-2xl">
        <HeroSection />
        <AboutSection />
        <GetItSoldSection />
        <ListingSection />
        <PartnersSection />
        <GallerySection />
        <ServicesSection />
        <ContactSection />
      </div>

      {/* Fixed Footer Reveal */}
      <FooterReveal>
        <Footer />
      </FooterReveal>
    </main>
  );
}
