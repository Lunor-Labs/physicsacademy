import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Header from '../components/Header';
import { BookOpen, Calendar, Users, Award, CreditCard } from 'lucide-react';

const StudentDashboard: React.FC = () => {
  const { user } = useAuth();

  const classes = [
    {
      id: '2026-al',
      title: '2026 A/L Physics',
      description: 'Complete A/L Physics syllabus for 2026 batch',
      students: 1247,
      progress: 85,
      status: 'active'
    },
    {
      id: '2025-al',
      title: '2025 A/L Physics',
      description: 'Comprehensive physics course for 2025 candidates',
      students: 892,
      progress: 100,
      status: 'completed'
    },
    {
      id: '2025-revision',
      title: '2025 A/L Revision',
      description: 'Intensive revision program for final preparation',
      students: 645,
      progress: 60,
      status: 'active'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-xl text-gray-600">
            Continue your physics journey and achieve excellence
          </p>
        </div>

        {!user?.subscription && (
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-6 mb-8 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <CreditCard className="h-8 w-8" />
                <div>
                  <h3 className="text-xl font-bold">Unlock Premium Content</h3>
                  <p className="text-orange-100">Subscribe to access video lessons and Zoom classes</p>
                </div>
              </div>
              <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all">
                Subscribe Now
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem) => (
            <Link
              key={classItem.id}
              to={`/class/${classItem.id}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 overflow-hidden border-l-4 border-red-600"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <BookOpen className="h-8 w-8 text-red-600" />
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    classItem.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {classItem.status === 'active' ? 'Active' : 'Completed'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {classItem.title}
                </h3>
                <p className="text-gray-600 mb-6">{classItem.description}</p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{classItem.students} students</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">12 months</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium text-gray-900">{classItem.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-red-600 h-2 rounded-full transition-all"
                        style={{ width: `${classItem.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-6 py-4 group-hover:bg-red-50 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-red-600 font-medium">View Classes</span>
                  <Award className="h-5 w-5 text-red-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;