import React from 'react';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold mb-4">Physics Academy</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering Sri Lankan students to excel in Advanced Level Physics through innovative teaching methods by Amila C Edirimanna.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Teacher</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Course Syllabus</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Past Papers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Student Results</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Physical Classes</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <MapPin className="h-4 w-4 text-red-400" />
                <span className="text-gray-400 text-sm">Riochem - Embilipitiya</span>
              </div>
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <MapPin className="h-4 w-4 text-red-400" />
                <span className="text-gray-400 text-sm">Nanoda - Walasmulla</span>
              </div>
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-gray-400 text-sm">Sisulaka - Ratnapura (Soon)</span>
              </div>
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <Phone className="h-4 w-4 text-red-400" />
                <span className="text-gray-400 text-sm">+94 77 123 4567</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Class Timings</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 justify-center md:justify-start">
                <Clock className="h-4 w-4 text-red-400 mt-1" />
                <div className="text-gray-400 text-sm">
                  <p className="font-medium">Physical Classes:</p>
                  <p>Weekdays: 3:00 PM - 6:00 PM</p>
                  <p>Weekends: 8:00 AM - 12:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 justify-center md:justify-start">
                <Clock className="h-4 w-4 text-red-400 mt-1" />
                <div className="text-gray-400 text-sm">
                  <p className="font-medium">Online Classes:</p>
                  <p>Live: Sundays 7:00 PM</p>
                  <p>Q&A: Wednesdays 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Physics Academy by Amila C Edirimanna. All rights reserved. Designed for A/L Physics Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;