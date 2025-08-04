import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Tharindu Wickramasinghe',
      year: '2024 A/L Graduate',
      district: 'Colombo',
      content: 'Sir Amila\'s teaching method is extraordinary! He made complex physics concepts so easy to understand. Thanks to his guidance, I scored an A for physics and got selected to Engineering Faculty at University of Moratuwa.',
      rating: 5,
      university: 'University of Moratuwa',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 2,
      name: 'Sachini Bandara',
      year: '2024 A/L Graduate', 
      district: 'Kandy',
      content: 'The online classes were perfectly organized and the monthly video lessons helped me practice at my own pace. Sir always made sure we understood every concept thoroughly. Highly recommended!',
      rating: 5,
      university: 'University of Peradeniya',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 3,
      name: 'Kamal Rajapaksa',
      year: '2023 A/L Graduate',
      district: 'Galle',
      content: 'Best physics teacher in Sri Lanka! His teaching style is unique and very effective. The zoom classes were interactive and engaging. I improved my physics marks from C to A+ within 6 months.',
      rating: 5,
      university: 'University of Colombo',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 4,
      name: 'Dilini Perera',
      year: '2024 A/L Graduate',
      district: 'Ratnapura',
      content: 'Sir Amila\'s classes at Riochem Embilipitiya were amazing. His practical approach to teaching physics made everything clear. I got 95 marks for physics and now studying at University of Ruhuna.',
      rating: 5,
      university: 'University of Ruhuna',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
              SUCCESS STORIES
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Student Testimonials
          </h2>
          <p className="text-xl text-gray-400">
            Real stories from students who achieved their university dreams
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 mx-4">
            <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-red-100"
                />
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-red-600 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl lg:text-2xl text-gray-800 italic leading-relaxed mb-6">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="font-semibold text-xl text-gray-900">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-red-600 font-medium">
                    {testimonials[currentIndex].year} • {testimonials[currentIndex].district}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Now studying at {testimonials[currentIndex].university}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-600 text-white rounded-full p-3 shadow-lg hover:bg-red-700 transition-all hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-600 text-white rounded-full p-3 shadow-lg hover:bg-red-700 transition-all hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-red-600' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;