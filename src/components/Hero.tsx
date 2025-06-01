
import React from 'react';
import { ChevronDown, Sparkles, Code, Database } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-pink-500/15 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/3 left-10 w-64 h-64 bg-cyan-500/15 rounded-full blur-xl animate-bounce-slow"></div>
        
        {/* Floating icons */}
        <div className="absolute top-1/4 right-1/4 text-purple-300/30 animate-float">
          <Code size={32} />
        </div>
        <div className="absolute bottom-1/4 left-1/4 text-blue-300/30 animate-bounce-slow">
          <Database size={28} />
        </div>
        <div className="absolute top-3/4 right-1/3 text-pink-300/30 animate-pulse">
          <Sparkles size={24} />
        </div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10 max-w-5xl">
        <div className="animate-fade-in">
          {/* Profile Image with enhanced styling */}
          <div className="mb-12 relative">
            <div className="w-56 h-56 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm bg-white/10 relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face" 
                alt="Harini - Data Scientist & Developer" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              {/* Online indicator */}
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-400 rounded-full border-4 border-white animate-pulse shadow-lg">
                <div className="w-full h-full bg-green-500 rounded-full animate-ping"></div>
              </div>
            </div>
            {/* Decorative rings */}
            <div className="absolute inset-0 w-56 h-56 mx-auto rounded-full border border-purple-300/20 animate-spin-slow"></div>
            <div className="absolute inset-0 w-64 h-64 mx-auto rounded-full border border-blue-300/10 animate-pulse"></div>
          </div>
          
          {/* Main heading with enhanced typography */}
          <div className="space-y-4 mb-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight">
              ThinkBotics
            </h1>
            <h2 className="text-2xl md:text-4xl font-light text-gray-200 tracking-wide">
              Hi, I'm <span className="text-purple-300 font-semibold">Harini</span>
            </h2>
          </div>
          
          {/* Role badges with improved design */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/30 to-purple-600/30 backdrop-blur-md rounded-full border border-purple-300/30 hover:border-purple-300/50 transition-all duration-300">
              <Database size={20} className="text-purple-300 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Data Scientist</span>
            </div>
            <div className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/30 to-blue-600/30 backdrop-blur-md rounded-full border border-blue-300/30 hover:border-blue-300/50 transition-all duration-300">
              <Code size={20} className="text-blue-300 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Full Stack Developer</span>
            </div>
            <div className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500/30 to-pink-600/30 backdrop-blur-md rounded-full border border-pink-300/30 hover:border-pink-300/50 transition-all duration-300">
              <Sparkles size={20} className="text-pink-300 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">ML Engineer</span>
            </div>
          </div>
          
          {/* Enhanced tagline */}
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-200 font-light">
            Turning <span className="text-purple-300 font-semibold">data</span> into decisions. 
            Coding <span className="text-blue-300 font-semibold">ideas</span> into life.
          </p>
          
          {/* Call-to-action buttons with improved styling */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <span className="relative z-10">View My Work</span>
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 border-2 border-purple-400 hover:bg-purple-400 hover:text-purple-900 rounded-full text-purple-400 font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <span className="group-hover:scale-110 transition-transform inline-block">Get In Touch</span>
            </button>
          </div>
          
          {/* Stats preview */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-purple-300">50+</div>
              <div className="text-sm text-gray-400">Projects</div>
            </div>
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-blue-300">3+</div>
              <div className="text-sm text-gray-400">Years Exp</div>
            </div>
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-pink-300">100%</div>
              <div className="text-sm text-gray-400">Success Rate</div>
            </div>
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-cyan-300">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="animate-bounce">
          <ChevronDown size={32} className="text-purple-400 mb-2" />
        </div>
        <p className="text-sm text-gray-400">Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;
