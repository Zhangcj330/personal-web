import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Focus from "@/components/Focus";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/Process";
import Closing from "@/components/Closing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Focus />
        <CaseStudies />
        <Process />
        <Closing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
