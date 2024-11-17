import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const benefitsSection = document.getElementById('benefits');
    benefitsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-secondary via-black to-primary/20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475')] opacity-10 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary text-sm font-medium">
              Next-Generation Web Development
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white space-y-4">
              <span className="block reveal">Effortless</span>
              <span className="block reveal">Websites,</span>
              <span className="block bg-gradient-to-r from-primary to-white bg-clip-text text-transparent reveal">
                Stunning Results
              </span>
            </h1>
          </div>
          
          <p className="text-xl text-gray-300 max-w-2xl">
            We create lightning-fast, beautiful websites that drive results. 
            No complexity, just pure performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <a href="#contact" 
              className="btn-primary group flex items-center justify-center gap-2 backdrop-blur-sm bg-primary/90">
              Start Your Project
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" 
              className="btn-secondary backdrop-blur-sm border-white/20 text-white hover:bg-white/10">
              Explore Services
            </a>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll to next section">
        <ChevronDown size={32} />
      </button>

      {/* Futuristic decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>
  );
};

export default Hero;