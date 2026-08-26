import SiteMenu from "@/components/SiteMenu";
import Hero from "@/components/Hero";
import IntroFlip from "@/components/IntroFlip";
import CompanyLogos from "@/components/CompanyLogos";
import Focus from "@/components/Focus";
import CaseStudies from "@/components/CaseStudies";
import Impact from "@/components/Impact";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteMenu />
      <main className="flex-1">
        <Hero />
        <IntroFlip />
        <CompanyLogos />
        <Focus />
        <CaseStudies />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
