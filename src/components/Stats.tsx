import { Users, Clock, Award, Zap } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-6 h-6" />,
    value: "500+",
    label: "Happy Clients",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    value: "48h",
    label: "Average Delivery",
  },
  {
    icon: <Award className="w-6 h-6" />,
    value: "99%",
    label: "Success Rate",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    value: "2x",
    label: "Faster Websites",
  }
];

const Stats = () => {
  return (
    <div className="relative overflow-hidden bg-black py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-black to-primary/10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;