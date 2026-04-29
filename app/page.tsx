import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import CertificationSection from "../components/CertificationSection";
import ServiceSection from "../components/ServiceSection";
import RecentProjectSection from "../components/RecentProjectSection";
import SEOProjectsSection from "../components/SEOProjectsSection";
import SeoConsultancySection from "../components/SEOConsutancySection";
import ExploreMeSection from "../components/ExploreMeSection";
import CustomerReviewSection from "../components/CustomerReviewSection";

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

      {/* Recent Projects Section */}
      <RecentProjectSection />

      {/* SEO Projects Section */}
      <SEOProjectsSection />

      {/* SEO Consultancy Section */}
      <SeoConsultancySection />

      {/* Explore Me Section */}
      <ExploreMeSection />

      {/* Customer Review Section */}
      <CustomerReviewSection />

    </main>

  );
}