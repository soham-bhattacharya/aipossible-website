import CircuitBackground from '@/components/CircuitBackground';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import LearnCTA from '@/components/LearnCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <CircuitBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Services />
        <About />
        <LearnCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
