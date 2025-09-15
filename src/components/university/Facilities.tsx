import React from 'react';
import { Microscope, BookOpen, Home, Utensils, Wifi, Car } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      icon: Microscope,
      title: 'Advanced Laboratories',
      description: 'State-of-the-art medical labs with latest equipment for practical learning',
      image: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg'
    },
    {
      icon: BookOpen,
      title: 'Digital Library',
      description: 'Extensive collection of medical books, journals and digital resources',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg'
    },
    {
      icon: Home,
      title: 'Student Hostels',
      description: 'Comfortable accommodation with modern amenities and 24/7 security',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg'
    },
    {
      icon: Utensils,
      title: 'Cafeteria & Dining',
      description: 'Hygienic dining facilities serving international and local cuisine',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg'
    },
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description: 'Campus-wide Wi-Fi connectivity for seamless learning and research',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg'
    },
    {
      icon: Car,
      title: 'Transportation',
      description: 'Regular shuttle service and easy access to public transportation',
      image: 'https://images.pexels.com/photos/1048514/pexels-photo-1048514.jpeg'
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            World-Class Facilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our campus is equipped with modern facilities designed to provide the best learning 
            environment for medical students from around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <facility.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{facility.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;