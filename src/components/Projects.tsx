
import React, { useState } from 'react';
import { Github, ChevronRight, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('data-science');

 const dataScienceProjects = [

  {
    title: "Skin Cancer Detection using GenAI",
    description: "AI-powered system that analyzes skin lesion images using Generative AI to detect possible cancer types early.",
    technologies: ["GenAI", "Python", "CNN", "Flask"],
    image: "data:image/jpeg;base64,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",
    metrics: "Early Detection ↑ Accuracy"
  },


  
  {
    title: "Heart Disease Detection",
    description: "A machine learning model using Random Forest to predict cardiovascular disease risk based on clinical data.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    image: "data:image/jpeg;base64,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",
    metrics: "85% Accuracy"
  },


  
  {
    title: "Gesture Gaming Control System",
    description: "Computer vision-based hand gesture detection system built using MediaPipe and OpenCV to control games without physical devices.",
    technologies: ["Python", "OpenCV", "MediaPipe", "Tkinter"],
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xAA5EAABAwMCAwYFAwIFBQAAAAABAAIDBAUREiEGMUETIlFhcYEHQpGhsRQywTNTI1JicvBkgtHh8f/EABoBAQACAwEAAAAAAAAAAAAAAAADBQECBAb/xAAjEQACAwACAgEFAQAAAAAAAAAAAQIDEQQhEjETIjJBUWEU/9oADAMBAAIRAxEAPwCzIiL0xQBERAEREAREQBERAEREAREQBERAEREARF8QBERDGhERBoREQaY5544GB0jgMuDRvzJ5KBdxnahXfpGGaVwODJE0aPbJBI88LJxfC6WihOvQ1km7ugJGBladiNirLRHQ1cFIyZg0yska1ri7/MD4nxXPY5Ofinh11wgq/NrSy09RFUxtkheHscMtI8FlVOtM5tFVUULpe0jgkEsbwc6ojjUPpg+rVcRuMjceK3qm5LH7I7q1Bpr0wiIpSDQiIg0IiINCIiDQiIg0+IiLJgIiIAiEhoJcQAOZVZvXED2vfDRO0Mbs6XqfTwUVlqh7JqqZWPotDKZlYTBM6JsT2nWZjhuPdV+5/DyCocTbeIKFmfkmdqx6OG/5VLq69znF79UhzuXuWqLgxx7zCPTdcNl0pssaqFWumdJ4R+GcVG6Z91uUMmT/AIbKJ+xBGDqJH2AUjdPhzJFSSPsd6rmTtGWRzuBa7yyAMeu65YyYPbqY7byWRlXUxf0qiaP/AGSEfhRKMt3Sbx0nH2j4h052t9Y8Dq2WN/4erTY6e8NtMT75TSxVWXatTMYGTjPTkqDHfbvF/TutcMf9Q8/krZbxdxCwYbd6rHg5wd+QpoWTi9IraFNZ6OhL4ueQ8YXOF+ZJ4pR1bJGB+MKw2vi6jqyI6xv6aQ8nZyw+/T3+q7IXwkV8+LZHv2WJE2IzlFMc4REQBERAETKZQBfV8ytC+VJpbVUSsOHhmG+RO38rDeLTaMfKSRCXy9dtVmmpnZhhyXOHzvHL2B/CqdfI9zmxMO7ufktiIHf0WLs3S1cTWDLnnSPUqtsfk9ZdQgoRxHiht9PLVQMqnERue0SP6tbnchdF464AssHDUlZZqIUtTSAPLo3u/wARnzasncgb557Y6r1T/DF8lOx0t2a15aC4Rwamg+AOoZ+ivzKQG2ijqXdsHQ9lI7GNeRg7ea5pNdYGz82UsRina2V5aHHAd091vVEUkEhZJz6HxCvs3wqnwWsu8Thy78ByR7FVq/2mps7jbLkWOniYJIZWZIkjOQPfYjHkFupLejZNMgSVgnlcwgMGXkfRZsraslnqL3d46KlMbZJAe9IcNaBzJWbGlFtvoyu+iR4Z4GPEtBPWVF2MD2u0RxshDyT4uyRt5c1WLhQ1ljuM9FOWudA/S4t/aeoI9QQVbbzbb5wXIwxVDHRT7NkYDocR0I5tP5CgqeOtvVwDJHdtWVL+855wCfPwACruO7JWysUk636NvF7452THCnEj6Mx01W4mkdgNJ37LzH+ldBBBAIII8QuaVdlntjHU1cIiSSYZo3Zbnq3OArLwPczU0b6GZ2ZabGjP9voPY7fRXfEvU+tODm8VwflmFmRMpldxWhEyiA+IiLICjOJIzJZarHytD/oQVJqI4onEVokj+aYhg/J+wWk/tZJVvyLCp22LXNkjLWjJWlVxmKV8ecY/afJTNuj0UzpDzcoS4zAzFw6bFVjesuzej464mpmtibUMeGjAJByfXBXQvhnxNWX1lXFc3D9REQW6ScFp9T5Lk3deNWQprhO+Dh66trJg805aWS6N9j1+o/KjlHo0lEtPxI4pv/D3EEcNC9po6inEkeoHZwJDh9gfdUk3K5cQVjqq5ymWdrA1u2zW6uQ9yp3jziih4rmooLXBI91NqzLp/dqx3Wjn0WlHSiyW7t6vAqZCHMj8wO6D6Hc+gHNIroykQMo0yvA5BxH3XukrKihqWVNI8smjOWlbgsF7kpf1bbRcHQEZ7QU7sEePLl5qLJ3W0oxmnF9o2Tx6iXvvFtx4ghhpauNscUTtexyXOxj+T9Vq09JcYIm3KCCVsbTlkoHPHPzIWiQD6qzcP3C6VjW2+ittRXSRM7rYWZAb5nkPdY4/Gprh8fqJDyb745Opa9Iqe9114qKainjaI3TNwRzLjt/KkbI19r4opWP27Zmh3o4Z/IC16e0Vtqubai8UctB2R7RjZm4BdzGDycAccvBerdMbnxTHM3IjYds9GtbpGfsfdYpjGrPD0dF1k+Rrn7Z0ZF4jdqYCefX16r2rldo8/JY8CIiyYPiIiAKqcUTmor46Zh7sLRn/AHH/ANYVonlZBDJNIcMjaXO9AFTaVrqipNRLzeTK736Ln5E8jh28OGy8v0e60inow1vRuFU6iQlx9VYr7L3S1VeV26r4lkeO0c12QVlZVj5tvRarysZKaCapayWJhFLJ2YO50ADP0Vx4C4PvF1udDernTMFoY7tR+oky+YAZaQ3fu5wd/oqDadJe/UM8gB91+j7NdIamy00sBHZGJox4bclrY3iw1bw35qjvHdc0+KHDtPNRvvVHGGVMODUBgwJGctR8x4+CudVWNDnaDqxuRncKpcY36CGyVkDiO0mjdE1p5ku2+y0jFpmib05xYbFceIa9lDa2M7Vw1OkkdhkbRzJ+wwPFdq4M4ek4Ss8lFUTRT1MspkkmiaWhwxgDffbC5n8OL1FaLvKJXBoqGBmrwIO35XTq29NcMk5b4jotpxk3n4MuX4M97o6O8UEtFXxCSGQe7D0c09CPFcqoreLJX1FI92qZkha5/wDmHQj2wVc7hxFTUxe2SphBYe93wNORndUKrvLLpe6ipiJ7OR3dz1AAGfskE10zev2XakfqiH1WdaFrdmBh8cj+Vvq1oe1oquXHxtYREUxzBERARPELy6GGjYe9UPAd5NG5/hRsQaGve0YaT3fTotivkL66sl/sMELPU7k/dR9VUMgjDPAYwq3kScpdFxx4eNa/pEXl+pxCgJTupOvnEjiVFSHmos6JzC4rE8r24rE45WjBs25xMrmt57EYV1tPEVXw/Fj+rSvOXR6t2nxCr9HaKyGmir6WjkqA1rhKWNyQTggYG/T7rEyiu10qRHFR1BJ6vjLQ31J2CmhHYdoxJwztkzxBxlLc2Gnoi+Ayd10vzNH+nG+VAVdJW1taBNDNEA3nUAg49+f/ANXQOG+Faa0aaifE9bz1kbR+Tf8Azz9FMXKghuEPZz5yP2vb+5h8lNHjPNbOP/XCMsS6OZinpKGmLDsTzd8xK9Diq4Q0/Ytc14GzXO5qRruCbu6c9jPTTMPzueWH3GCoeusRoqmopKiQOljDSHN5HIytLK5fo6lOux5FkVPXvmZJ2j9c0smuR56n/mApGxEunYFCyM0PwrJwnTiWQO5rlSfljJUdFtgxTxZ8f4KkFqUrdOhnRjd/U/8ACttWfGX0FVzntoREXQcZ5REQFVrnujr66I8u0D/XLQq/cpHueSSVcb5b3SP/AFkLSSGaZWt5lvMEeJCrFXTtfuMEHljdck4Yy7481OtYQEhJO61nqQqafTlR8uygkiVrDA7ZZrTb6i63COlpW5e45LjyYOpPkststlXeKrsKKPUR+97tmsHmei6fw/Yqax0hih78zzmWVw3ef4HgErpc3/DmvvVaxezeoaSOhpIqaHOhgwCeZPUlZySURWKSXSKlvXrCIiyYCpPH1I6OpgrmAhr2dm8+Y3H2P2V2WCtpYK6mfT1MYkifzB+x9VrOPksJabPjn5HFakZcSp/gyR7aoNjaXyO2YwdSpuq+H7Xy5guBbFnk+PLseoIH2VjsVio7JAWUoL5Hfvmf+53l5DyXCuNJz79FhPmQUfp9m/TQmGIBztTzu53iVlRF3pJLEVkpOTbYREWTUIiIYCj660U1XqcNUMhOS+Pr6jkVIIsNJm8Zyg9iynVvCdwe49hU072+Lw5h/BXmi4FYZA+51ReP7cAxn/uO/wBgrmi0+KJM+Xa1mmCjpKeigEFJCyKIcmsGPfzKzoi3Sw5299hERZMBERAEREAREQBERAEREB8REQBERAEREAREQBERAEREAREQBERAEREAREQH/9k=",
    metrics: "Device-Free Game Control"
  }


];


  const fullStackProjects = [
  {
    title: "Stock Market Aggregator",
    description: "A dynamic React-based web application that fetches and displays real-time stock data using financial APIs for market insights.",
    technologies: ["React", "JavaScript", "REST API", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&h=250&fit=crop",
    metrics: "Live Market Tracking"
  },


  {
    title: "SkyMate - Weather Forecast App",
    description: "Responsive weather application that uses OpenWeatherMap API to provide location-based live weather reports and forecasts.",
    technologies: ["React", "JavaScript", "API Integration", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1505483531331-fc3cf89fd382?w=400&h=250&fit=crop",
    metrics: "Live Forecast Updates"
  },

    {
      title: "AI-Powered Chatbot",
      description: "Intelligent customer service chatbot with natural language processing and learning capabilities.",
      technologies: ["React", "Python", "FastAPI", "OpenAI"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
      metrics: "85% Query Resolution"
    }
  ];

  const currentProjects = activeTab === 'data-science' ? dataScienceProjects : fullStackProjects;

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            Featured Projects
          </h2>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-full p-1 inline-flex shadow-lg">
              <button
                onClick={() => setActiveTab('data-science')}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === 'data-science'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Data Science Projects
              </button>
              <button
                onClick={() => setActiveTab('full-stack')}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === 'full-stack'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Full Stack Projects
              </button>
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-gray-800 text-sm font-semibold">{project.metrics}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
  <button
    onClick={() => window.open("https://github.com/harinii2415", "_blank")}
    className="flex items-center text-purple-600 hover:text-purple-800 font-semibold transition-colors duration-300"
  >
  
  View Code
  </button>
</div>

                    
                  </div>
                </div>
             
            ))}
          </div>
          
          {/* Portfolio showcase */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=40&h=40&fit=crop&crop=face" className="w-10 h-10 rounded-full border-2 border-white" alt="Project 1" />
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=40&h=40&fit=crop" className="w-10 h-10 rounded-full border-2 border-white" alt="Project 2" />
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=40&h=40&fit=crop" className="w-10 h-10 rounded-full border-2 border-white" alt="Project 3" />
              </div>
              <p className="text-gray-700">
                <span className="font-semibold">15+</span> successful projects delivered with 
                <span className="text-purple-600 font-semibold"> 100% client satisfaction</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
