import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, TrendingUp, Play, MessageCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-red-200 rounded-full opacity-20"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border-4 border-gray-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-red-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 bg-gray-100 rounded-full opacity-30"></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-1/4 left-0 w-64 h-64 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full text-red-500">
            <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <path d="M30,30 L70,30 L70,70 L30,70 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </svg>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-red-600 rounded-full"></div>
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
                ADVANCED LEVEL PHYSICS
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6">
              <span className="text-red-600 block">Amila C</span>
              <span className="text-gray-900 block">Edirimanne</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              B.Sc. (Engineering) Hons, University of Moratuwa
            </p>

            {/* Class Locations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Riochem - Embilipitiya</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Nanoda - Walasmulla</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="text-gray-700 font-medium">Sisulaka - Ratnapura</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Online Classes</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <Link
                to="/student/register"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all transform hover:scale-105 text-center flex items-center justify-center space-x-2"
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

          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            {/* Desktop: absolute badges; Mobile: stacked above image */}
            {/* Mobile badges */}
            <div className="flex flex-row gap-3 absolute left-1/2 -translate-x-1/2 -top-16 lg:hidden z-20">
              <div className="bg-red-600 text-white rounded-lg p-3 shadow-xl transform rotate-2 text-center min-w-[90px]">
                <div className="text-lg font-bold">4500+</div>
                <div className="text-xs">2015 සිට A ප්‍රමාණය</div>
              </div>
              <div className="bg-red-600 text-white rounded-lg p-3 shadow-xl transform -rotate-2 text-center min-w-[90px]">
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
            <Users className="h-8 w-8 text-red-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">5000+</div>
            <div className="text-gray-600 text-sm">Students</div>
          </div>
          <div className="text-center">
            <Award className="h-8 w-8 text-red-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">95%</div>
            <div className="text-gray-600 text-sm">Pass Rate</div>
          </div>
          <div className="text-center">
            <div className="h-8 w-8 bg-red-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <span className="text-white text-sm font-bold">📚</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">15+</div>
            <div className="text-gray-600 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <TrendingUp className="h-8 w-8 text-red-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-gray-900">A+</div>
            <div className="text-gray-600 text-sm">Results</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;