import React from 'react';
import { CheckCircle, Award, Users, BookOpen } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Experience Badge */}
            <div className="absolute -top-8 -right-4 bg-red-600 text-white rounded-full p-6 shadow-lg z-10">
              <div className="text-center">
                <div className="text-2xl font-bold">24+</div>
                <div className="text-xs">YEARS</div>
                <div className="text-xs">EXPERIENCE</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Teaching in classroom"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Physics laboratory"
                className="w-full h-64 object-cover rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-red-600 rounded-full"></div>
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
                ABOUT TEACHER
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              විශිෂ්ටතම භෞතික විද්‍යා ගුරුවරයා
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              B.Sc. (Engineering) උපාධිධාරී විශිෂ්ට ප්‍රවීණ ගුරුවරයෙකු වන අමිල සී. එදිරිමන්න මහතා මොරටුව 
              විශ්වවිද්‍යාලයෙන් ඉංජිනේරු උපාධිය ලබා ගත් අතර වසර 15කට වැඩි කාලයක් උසස් පෙළ භෞතික විද්‍යා 
              අධ්‍යාපනයේ නිරත වී සිටී. ඔහුගේ නවීන ගුරු ක්‍රම හා ප්‍රායෝගික ප්‍රවේශය නිසා දහස් ගණන් සිසුන් 
              සාර්ථක ප්‍රතිඵල ලබා ගෙන ඇත. රියෝකෙම්, නනෝද සහ සිසුලක ආයතනවල පන්ති පවත්වන ඔහු ඔන්ලයින් 
              පන්ති හරහාද දිවයින පුරා සිසුන්ට සේවය කරයි.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-red-600" />
                <span className="text-gray-700">වසර 15කට අධික අධ්‍යාපන අත්දැකීම සහිත විශේෂඥ ගුරුවරයා</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-red-600" />
                <span className="text-gray-700">95% ට වැඩි සාර්ථකත්ව අනුපාතයක් සහිත ප්‍රතිඵල</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-red-600" />
                <span className="text-gray-700">නවීන අධ්‍යාපන ක්‍රම හා ප්‍රායෝගික ප්‍රවේශය</span>
              </div>
            </div>

            <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all">
              වැඩි විස්තර →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;