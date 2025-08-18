import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { GraduationCap, LogOut, User } from 'lucide-react';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-black shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 w-50">
          <Link to="/" className="flex items-center space-x-3">
            <GraduationCap className="h-8 w-8 text-cyan-600" />
            <span className="text-2xl font-bold text-white">Physics Academy</span>
          </Link>
          
          <nav className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">{user.name}</span>
                </div>
                <button
                  onClick={logout}
                  className="flex items-center space-x-1 bg-cyan-600 text-gray-600 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="text-sm">Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <Link
                  to="/student/login"
                  className="bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold shadow transition-colors"
                >
                  Login
                </Link>
              
                {/* <Link
                  to="/teacher/login"
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Teacher Portal
                </Link> */}
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;