import React, { useState, useEffect } from 'react';
import { Trophy, Medal, Award, ChevronLeft, ChevronRight } from 'lucide-react';

const TestRankings: React.FC = () => {
  const [currentClass, setCurrentClass] = useState(0);

  const classRankings = [
    {
      className: '2026 A/L Physics',
      students: [
        { rank: 1, name: 'Kavindi Silva', district: 'Colombo', score: 95, icon: Trophy, color: 'text-yellow-500' },
        { rank: 2, name: 'Hasitha Fernando', district: 'Kandy', score: 92, icon: Medal, color: 'text-gray-400' },
        { rank: 3, name: 'Nethmi Perera', district: 'Galle', score: 89, icon: Award, color: 'text-orange-500' },
        { rank: 4, name: 'Chathura Dias', district: 'Kurunegala', score: 87, icon: Award, color: 'text-red-600' },
        { rank: 5, name: 'Amaya Wickramasinghe', district: 'Matara', score: 85, icon: Award, color: 'text-red-500' },
      ]
    },
    {
      className: '2025 A/L Physics',
      students: [
        { rank: 1, name: 'Sahan Perera', district: 'Gampaha', score: 97, icon: Trophy, color: 'text-yellow-500' },
        { rank: 2, name: 'Dilini Rajapaksa', district: 'Ratnapura', score: 94, icon: Medal, color: 'text-gray-400' },
        { rank: 3, name: 'Kasun Silva', district: 'Hambantota', score: 91, icon: Award, color: 'text-orange-500' },
        { rank: 4, name: 'Nimali Fernando', district: 'Badulla', score: 88, icon: Award, color: 'text-red-600' },
        { rank: 5, name: 'Ruwan Jayasinghe', district: 'Anuradhapura', score: 86, icon: Award, color: 'text-red-500' },
      ]
    },
    {
      className: '2025 Revision Class',
      students: [
        { rank: 1, name: 'Thilini Mendis', district: 'Kalutara', score: 96, icon: Trophy, color: 'text-yellow-500' },
        { rank: 2, name: 'Chamara Bandara', district: 'Polonnaruwa', score: 93, icon: Medal, color: 'text-gray-400' },
        { rank: 3, name: 'Sanduni Wijesinghe', district: 'Kegalle', score: 90, icon: Award, color: 'text-orange-500' },
        { rank: 4, name: 'Lahiru Dissanayake', district: 'Puttalam', score: 87, icon: Award, color: 'text-red-600' },
        { rank: 5, name: 'Ishara Gunasekara', district: 'Trincomalee', score: 84, icon: Award, color: 'text-red-500' },
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentClass((prev) => (prev + 1) % classRankings.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [classRankings.length]);

  const nextClass = () => {
    setCurrentClass((prev) => (prev + 1) % classRankings.length);
  };

  const prevClass = () => {
    setCurrentClass((prev) => (prev - 1 + classRankings.length) % classRankings.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
              STUDENT ACHIEVEMENTS
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Latest Test Rankings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating our top performers across different classes. 
            Your dedication and hard work inspire us all!
          </p>
        </div>

        <div className="relative">
          {/* Class Navigation */}
          <div className="flex justify-center mb-8 px-4">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 bg-white rounded-lg sm:rounded-full p-2 shadow-lg w-full sm:w-auto">
              {classRankings.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentClass(index)}
                  className={`px-4 sm:px-6 py-2 rounded-md sm:rounded-full font-medium transition-all text-sm sm:text-base ${
                    index === currentClass
                      ? 'bg-red-600 text-white'
                      : 'text-gray-600 hover:text-red-600'
                  }`}
                >
                  <span className="hidden sm:inline">{classRankings[index].className}</span>
                  <span className="sm:hidden">{classRankings[index].className.split(' ')[0]} {classRankings[index].className.split(' ')[1]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Rankings Display */}
          <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-xl relative overflow-hidden mx-4 sm:mx-0">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-red-400"></div>
            
            <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center px-2">
              {classRankings[currentClass].className} - Monthly Test Results
            </h3>

            <div className="space-y-3 sm:space-y-4">
              {classRankings[currentClass].students.map((student, index) => {
                const IconComponent = student.icon;
                return (
                  <div
                    key={student.rank}
                    className="bg-gray-50 rounded-xl p-4 sm:p-6 hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-lg"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <IconComponent className={`h-6 w-6 sm:h-8 sm:w-8 ${student.color}`} />
                          <div className="text-xl sm:text-2xl font-bold text-gray-800">#{student.rank}</div>
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-semibold text-gray-900">{student.name}</h4>
                          <p className="text-sm sm:text-base text-gray-600">{student.district} District</p>
                        </div>
                      </div>
                      <div className="text-center sm:text-right">
                        <div className="text-2xl sm:text-3xl font-bold text-red-600">{student.score}%</div>
                        <div className="text-xs sm:text-sm text-gray-500">Score</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevClass}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
            >
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextClass}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
            >
              <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-gray-600" />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {classRankings.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentClass(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentClass ? 'bg-red-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestRankings;