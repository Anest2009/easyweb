import { Zap, Shield, Clock } from 'lucide-react';

const benefits = [
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Lightning Fast",
    description: "Websites that load in the blink of an eye, keeping your visitors engaged."
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Rock-Solid Security",
    description: "Built-in protection against threats, keeping your site safe 24/7."
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Quick Delivery",
    description: "From concept to launch in record time, without compromising quality."
  }
];

const Benefits = () => {
  return (
    <div id="benefits" className="min-h-screen flex items-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-black to-black" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container relative z-10 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
          <p className="text-blue-100/80 max-w-2xl mx-auto">Experience the difference with our cutting-edge web solutions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg backdrop-blur-sm bg-black/50 hover:bg-black/70 transition-all border border-primary/10 hover:border-primary/30 group"
            >
              <div className="mb-4 text-primary group-hover:scale-110 transition-transform">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;