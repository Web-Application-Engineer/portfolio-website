import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Hero />  

      {/* About Section */}
      <AboutSection />

    </main>
  );
}