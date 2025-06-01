
import React from 'react';

const SkillsCarousel = () => {
  const skills = [
    'Python', 'React', 'StreamLit', 'Machine Learning', 'TensorFlow',
    'JavaScript', 'Open-CV', 'PostgreSQL', 'Azure', 'Keras',
    'Pandas', 'NumPy', 'Scikit-learn', 'FastAPI', 'Next.js'
  ];

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Technologies & Skills
        </h3>
        <div className="relative">
          <div className="flex animate-scroll-right space-x-8">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-3 bg-white dark:bg-gray-700 rounded-full shadow-md border border-purple-200 dark:border-purple-600"
              >
                <span className="text-purple-600 dark:text-purple-400 font-medium whitespace-nowrap">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCarousel;
