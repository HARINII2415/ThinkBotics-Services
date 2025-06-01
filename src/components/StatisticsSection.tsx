
import React from 'react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

const StatisticsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: '10+',
      label: 'Projects Completed',
      color: 'text-purple-600 dark:text-purple-400'
    },
    {
      icon: Users,
      number: '15+',
      label: 'Happy Clients',
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Award,
      number: '2+',
      label: 'Years Experience',
      color: 'text-pink-600 dark:text-pink-400'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Support',
      color: 'text-cyan-600 dark:text-cyan-400'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-800 dark:to-blue-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <stat.icon size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
