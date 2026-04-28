import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import CertificationSection from "../components/CertificationSection";
import ServiceSection from "../components/ServiceSection";
import ProjectSection from "../components/ProjectSection";
import SEOProjectsSection from "../components/SEOProjectsSection";
import SeoConsultancySection from "@/components/SEOConsutancySection";


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

      {/* Projects Section */}
      <ProjectSection />

      {/* SEO Projects Section */}
      <SEOProjectsSection />

      {/* SEO Consultancy Section */}
      <SeoConsultancySection />


    </main>

  );
}