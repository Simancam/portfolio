import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Hero from "../components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative">
      {/* Componente Background */}
      <div className="fixed inset-0 -z-10 w-full">
        <Background />
      </div>

      {/* Contenido principal */}
      <div className="relative">
        <Navbar />
        <Hero />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
