import { Code, ShoppingBag, Search } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-12 h-12" />,
    title: "Web Development",
    description: "Custom websites built with modern technologies for optimal performance."
  },
  {
    icon: <ShoppingBag className="w-12 h-12" />,
    title: "E-Commerce",
    description: "Powerful online stores that drive sales and delight customers."
  },
  {
    icon: <Search className="w-12 h-12" />,
    title: "SEO Optimization",
    description: "Boost your visibility and attract more organic traffic."
  }
];

const Services = () => {
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-primary/5 to-black" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 rotate-180" />
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container relative z-10 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-blue-100/80 max-w-2xl mx-auto">Comprehensive web solutions tailored to your needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 rounded-lg backdrop-blur-sm bg-black/50 hover:bg-black/70 transition-all border border-primary/10 hover:border-primary/30 group"
            >
              <div className="mb-6 bg-primary/10 p-4 rounded-full inline-block group-hover:scale-110 transition-transform">
                <div className="text-primary">{service.icon}</div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;