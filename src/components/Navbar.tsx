import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/10 backdrop-blur-md border-b border-white/10 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-white">EASYWEB</a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a>
          <a href="#benefits" className="text-white/80 hover:text-white transition-colors">Benefits</a>
          <a href="#contact" className="px-6 py-2 bg-primary/90 hover:bg-primary text-white rounded-full transition-colors">
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/50 backdrop-blur-lg border-t border-white/10">
          <div className="container py-4 flex flex-col gap-4">
            <a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a>
            <a href="#benefits" className="text-white/80 hover:text-white transition-colors">Benefits</a>
            <a href="#contact" className="px-6 py-2 bg-primary/90 hover:bg-primary text-white rounded-full transition-colors inline-block text-center">
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;