import React from 'react';
import { MapPin, Clock, Phone, Mail, Building } from 'lucide-react';

const LocationSection: React.FC = () => {
  const locations = [
    {
      name: 'Riochem Institute',
      address: 'Embilipitiya',
      timings: ['Weekdays: 3:00 PM - 6:00 PM', 'Saturdays: 8:00 AM - 12:00 PM'],
      status: 'active'
    },
    {
      name: 'Nanoda Education Center',
      address: 'Walasmulla',
      timings: ['Weekdays: 4:00 PM - 7:00 PM', 'Sundays: 9:00 AM - 1:00 PM'],
      status: 'active'
    },
    {
      name: 'Sisulaka Learning Hub',
      address: 'Ratnapura',
      timings: ['Weekends: 2:00 PM - 6:00 PM'],
      status: 'coming-soon'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
              PHYSICAL CLASSES
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Visit Our Learning Centers
          </h2>
          <p className="text-xl text-gray-600">
            Experience interactive learning in our modern physics laboratories
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all transform hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Building className="h-6 w-6 text-red-600" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{location.name}</h3>
                      <p className="text-gray-600">{location.address}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    location.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {location.status === 'active' ? 'Active' : 'Coming Soon'}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600 text-sm">Class Timings:</span>
                  </div>
                  {location.timings.map((timing, idx) => (
                    <p key={idx} className="text-gray-700 ml-6 text-sm">{timing}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;