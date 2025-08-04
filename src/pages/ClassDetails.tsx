import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Header from '../components/Header';
import { Play, Video, Lock, Calendar, Clock, Users } from 'lucide-react';

const ClassDetails: React.FC = () => {
  const { classId } = useParams<{ classId: string }>();
  const { user } = useAuth();

  const monthlyLessons = [
    {
      month: 'January',
      title: 'Mechanics - Motion in a Straight Line',
      description: 'Understanding displacement, velocity, acceleration and equations of motion',
      duration: '2.5 hours',
      videoUrl: '#',
      zoomLink: 'https://zoom.us/j/123456789',
      materials: ['Notes.pdf', 'Practice Problems.pdf']
    },
    {
      month: 'February', 
      title: 'Mechanics - Forces and Newton\'s Laws',
      description: 'Forces, friction, tension and applications of Newton\'s laws',
      duration: '3 hours',
      videoUrl: '#',
      zoomLink: 'https://zoom.us/j/987654321',
      materials: ['Force Diagrams.pdf', 'Solved Examples.pdf']
    },
    {
      month: 'March',
      title: 'Mechanics - Work, Energy and Power',
      description: 'Work-energy theorem, conservation of energy, and power calculations',
      duration: '2.8 hours',
      videoUrl: '#',
      zoomLink: 'https://zoom.us/j/456789123',
      materials: ['Energy Notes.pdf', 'Power Calculations.pdf']
    },
    {
      month: 'April',
      title: 'Waves and Oscillations',
      description: 'Simple harmonic motion, wave properties, and sound waves',
      duration: '3.2 hours',
      videoUrl: '#',
      zoomLink: 'https://zoom.us/j/789123456',
      materials: ['Wave Theory.pdf', 'SHM Examples.pdf']
    }
  ];

  const classInfo = {
    '2026-al': { title: '2026 A/L Physics', year: '2026' },
    '2025-al': { title: '2025 A/L Physics', year: '2025' },
    '2025-revision': { title: '2025 A/L Revision', year: '2025' }
  };

  const currentClass = classInfo[classId as keyof typeof classInfo];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            {currentClass?.title}
          </h1>
          <p className="text-xl text-gray-600">
            Monthly lesson plan and resources
          </p>
        </div>

        <div className="grid gap-6">
          {monthlyLessons.map((lesson, index) => (
            <div key={lesson.month} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <Calendar className="h-6 w-6 text-blue-600" />
                      <h3 className="text-2xl font-bold text-gray-900">{lesson.month}</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{lesson.title}</h4>
                    <p className="text-gray-600 mb-4">{lesson.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{lesson.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>Live Zoom Class</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3">
                    <button
                      className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                        user?.subscription
                          ? 'bg-red-600 text-white hover:bg-red-700'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={!user?.subscription}
                    >
                      {user?.subscription ? (
                        <>
                          <Play className="h-5 w-5" />
                          <span>Watch Video</span>
                        </>
                      ) : (
                        <>
                          <Lock className="h-5 w-5" />
                          <span>Subscribe to Watch</span>
                        </>
                      )}
                    </button>

                    {user?.subscription && (
                      <a
                        href={lesson.zoomLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-all text-center"
                      >
                        <Video className="h-5 w-5" />
                        <span>Join Zoom Class</span>
                      </a>
                    )}
                  </div>
                </div>

                {user?.subscription && (
                  <div className="border-t border-gray-200 pt-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Course Materials</h5>
                    <div className="flex flex-wrap gap-3">
                      {lesson.materials.map((material, idx) => (
                        <a
                          key={idx}
                          href="#"
                          className="inline-flex items-center space-x-2 bg-red-50 text-red-700 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors"
                        >
                          <span>📄</span>
                          <span>{material}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {!user?.subscription && (
          <div className="mt-12 bg-gradient-to-r from-red-600 to-gray-900 text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Unlock Full Access</h3>
            <p className="text-red-100 mb-6 text-lg">
              Subscribe to access all video lessons, Zoom classes, and downloadable materials
            </p>
            <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105">
              Subscribe Now - Rs. 2,500/month
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default ClassDetails;