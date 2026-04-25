import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import CertificationSection from "../components/CertificationSection";
import ServiceSection from "../components/ServiceSection";


export default function Home() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Hero />  

      {/* About Section */}
      <AboutSection />

      {/* Certification Section */}
      <CertificationSection />

      {/* Services Section */}
      <ServiceSection />

    </main>

  );
}