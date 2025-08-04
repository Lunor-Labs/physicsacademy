import React, { useState } from 'react';
import Header from '../components/Header';
import { BookOpen, Video, Users, Plus, Calendar, Upload, ExternalLink } from 'lucide-react';

const TeacherDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const classes = [
    { id: '2026-al', title: '2026 A/L Physics', students: 1247, videos: 8 },
    { id: '2025-al', title: '2025 A/L Physics', students: 892, videos: 12 },
    { id: '2025-revision', title: '2025 A/L Revision', students: 645, videos: 6 }
  ];

  const recentUploads = [
    { title: 'Mechanics - Motion', date: '2025-01-15', views: 324 },
    { title: 'Forces and Newton\'s Laws', date: '2025-01-10', views: 298 },
    { title: 'Work and Energy', date: '2025-01-05', views: 412 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Teacher Dashboard
          </h1>
          <p className="text-xl text-gray-600">
            Manage your classes, upload content, and track student progress
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Users className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">2,784</div>
              <div className="text-gray-600">Total Students</div>
            </div>
            <div className="text-center">
              <BookOpen className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">3</div>
              <div className="text-gray-600">Active Classes</div>
            </div>
            <div className="text-center">
              <Video className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">26</div>
              <div className="text-gray-600">Video Lessons</div>
            </div>
            <div className="text-center">
              <Calendar className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">12</div>
              <div className="text-gray-600">Zoom Sessions</div>
            </div>
          </div>
        </div>

        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
              activeTab === 'overview'
                ? 'bg-white text-red-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('classes')}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
              activeTab === 'classes'
                ? 'bg-white text-red-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Manage Classes
          </button>
          <button
            onClick={() => setActiveTab('upload')}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
              activeTab === 'upload'
                ? 'bg-white text-red-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Upload Content
          </button>
        </div>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Class Overview</h3>
              <div className="space-y-4">
                {classes.map((classItem) => (
                  <div key={classItem.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-gray-900">{classItem.title}</h4>
                        <p className="text-gray-600 text-sm">{classItem.students} students • {classItem.videos} videos</p>
                      </div>
                      <button className="text-red-600 hover:text-red-700">
                        <ExternalLink className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Uploads</h3>
              <div className="space-y-4">
                {recentUploads.map((upload, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900">{upload.title}</h4>
                    <p className="text-gray-600 text-sm">Uploaded on {upload.date} • {upload.views} views</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'classes' && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Manage Classes</h3>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all flex items-center space-x-2">
                <Plus className="h-5 w-5" />
                <span>Create New Class</span>
              </button>
            </div>
            
            <div className="grid gap-6">
              {classes.map((classItem) => (
                <div key={classItem.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{classItem.title}</h4>
                      <p className="text-gray-600 mb-4">{classItem.students} enrolled students</p>
                      <div className="flex space-x-3">
                        <button className="text-red-600 hover:text-red-700 font-medium">Edit Details</button>
                        <button className="text-green-600 hover:text-green-700 font-medium">View Students</button>
                        <button className="text-red-600 hover:text-red-700 font-medium">Delete</button>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{classItem.videos}</div>
                      <div className="text-gray-600 text-sm">Videos</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'upload' && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Upload Content</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-red-400 transition-colors">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Upload Video Lesson</h4>
                <p className="text-gray-600 mb-4">Upload video files for monthly lessons</p>
                <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-all">
                  Choose Video File
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Class
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent">
                    <option>2026 A/L Physics</option>
                    <option>2025 A/L Physics</option>
                    <option>2025 A/L Revision</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Month
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent">
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lesson Title
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="e.g., Mechanics - Motion in a Straight Line"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Zoom Meeting Link
                  </label>
                  <input
                    type="url"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="https://zoom.us/j/..."
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default TeacherDashboard;