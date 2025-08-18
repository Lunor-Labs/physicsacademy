import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, TrendingUp, Play, MessageCircle, Briefcase } from 'lucide-react';


const images = [
  "/physicsacademy/amila2.png"
  // Add more image paths as needed
];

const HeroSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-6 lg:py-32 overflow-hidden bg-black">
      <div className="sm:hidden">  
        {/* Highlight Phrase */}
        {/* <div className="relative z-20 text-center text-amber-400 mb-10">
          <span className="font-dlSarani text-5xl sm:text-7xl font-extrabold italic">
            W;aidyjka; orejkaf.a<br />úch.%dyS jevìu ' ' '
          </span>
        </div> */}
        <div className="relative z-20 px-4 text-center mb-14">
  {/* Animated gradient text */}
    <h1 className="text-5xl font-dlSarani bold italic tracking-tight
                bg-clip-text text-transparent 
                bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500
                animate-gradient-x
                drop-shadow-[0_4px_8px_rgba(251,191,36,0.3)]
                hover:drop-shadow-[0_6px_12px_rgba(251,191,36,0.4)]
                transition-all duration-500 animate-pulse">
       W;aidyjka; orejkaf.a <br />úch.%dyS jevìu ' ' ' 
    </h1>

  {/* Dynamic underline */}
    <div className="mt-0 mx-auto w-full h-0.5 bg-gradient-to-r 
               from-transparent via-amber-400 to-transparent
               hover:via-yellow-300 transition-colors duration-300  animate-pulse" />
    </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full opacity-5"></div>
          <div className="absolute top-20 right-20 w-24 h-24 border-4 border-gray-1000 rounded-full opacity-5"></div>
          {/* <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-red-100 rounded-full opacity-30"></div>
          <div className="absolute bottom-32 right-1/3 w-20 h-20 bg-gray-100 rounded-full opacity-30"></div> */}
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-3 h-3 bg-cyan-600 rounded-full"></div>
                <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">
                  ADVANCED LEVEL PHYSICS
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6">
                <span className="text-cyan-400 block">Amila C</span>
                <span className="text-amber-400 block">Edirimanne</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                B.Sc. (Engineering) Hons, University of Moratuwa
              </p>

              <div className="relative w-48 sm:w-64 mb-6 md:w-80 lg:w-full max-w-lg lg:max-w-xl mx-auto">
                <img
                  src={images[current]}
                  alt="Amila C Edirimanna - Physics Teacher"
                  className="w-full h-auto object-contain drop-shadow-2xl rounded-xl transition-all duration-700"
                />
              </div>

              

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                <Link
                  to="/student/register"
                  className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all transform hover:scale-105 text-center flex items-center justify-center space-x-2"
                >
                  <Play className="h-5 w-5" />
                  <span>START LEARNING</span>
                </Link>
                <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all text-center flex items-center justify-center space-x-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>CHAT WITH US</span>
                </button>
              </div>
            </div>

          {/* Class Locations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-10 sm:mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-gray-300 font-medium">Riochem - Embilipitiya</span>
              </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-gray-300 font-medium">Nanoda - Walasmulla</span>
              </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-gray-300 font-medium">Sisulaka - Ratnapura</span>
              </div>
            <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-gray-300 font-medium">Online Classes</span>
                </div>
          </div>

          {/* Geometric patterns */}
          <div style={{ top: '43%', height: '20%' }} className="absolute left-0 w-80 opacity-30">
            <svg viewBox="0 0 120 120" className="w-full h-full text-amber-400">
              <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <path d="M30,30 L70,30 L70,70 L30,70 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </svg>
          </div>

            <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
              {/* Desktop: absolute badges; Mobile: stacked above image */}
              {/* Mobile badges */}
              <div className="flex flex-row gap-3 absolute left-1/2 -translate-x-1/2 -top-16 lg:hidden z-20">
                <div className="bg-amber-600 text-white rounded-lg p-3 shadow-xl transform rotate-2 text-center min-w-[90px]">
                  <div className="text-lg font-bold">4500+</div>
                  <div className="text-xs">2015 සිට A ප්‍රමාණය</div>
                </div>
                <div className="bg-amber-600 text-white rounded-lg p-3 shadow-xl transform -rotate-2 text-center min-w-[90px]">
                  <div className="text-lg font-bold">837</div>
                  <div className="text-xs">2023 - A ප්‍රමාණය</div>
                </div>
              </div>
              {/* Desktop badges */}
              <div className="hidden lg:block">
                <div className="absolute top-8 right-8 bg-red-600 text-white rounded-lg p-4 shadow-xl z-20 transform rotate-3">
                  <div className="text-center">
                    <div className="text-xl lg:text-2xl font-bold">4500+</div>
                    <div className="text-xs">2015 සිට A ප්‍රමාණය</div>
                  </div>
                </div>
                <div className="absolute bottom-16 left-8 bg-red-600 text-white rounded-lg p-4 shadow-xl z-20 transform -rotate-3">
                  <div className="text-center">
                    <div className="text-xl lg:text-2xl font-bold">837</div>
                    <div className="text-xs">2023 - A ප්‍රමාණය</div>
                  </div>
                </div>
              </div>
              <div className="relative w-48 sm:w-64 md:w-80 lg:w-full max-w-lg lg:max-w-xl mx-auto">
                <img
                  src="/physicsacademy/amila2.png"
                  alt="Amila C Edirimanna - Physics Teacher"
                  className="w-full h-auto object-contain drop-shadow-2xl rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-16 pt-10 sm:pt-16 border-t border-gray-200">
            <div className="text-center">
              <Users className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-500">5000+</div>
              <div className="text-gray-200 text-sm">Students</div>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-500">95%</div>
              <div className="text-gray-200 text-sm">Pass Rate</div>
            </div>
            <div className="text-center">
              {/* <div className="h-8 w-8 bg-amber-400 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-white text-sm font-bold">📚</span>
              </div> */}
            <div className="text-center">
              <Briefcase className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-500">15+</div>
              <div className="text-gray-200 text-sm">Years Experience</div>
            </div>
            </div>
            <div className="text-center">
              <TrendingUp className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-500">A+</div>
              <div className="text-gray-200 text-sm">Results</div>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
};

export default HeroSection;