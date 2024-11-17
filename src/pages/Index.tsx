import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Benefits from '../components/Benefits';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Benefits />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;