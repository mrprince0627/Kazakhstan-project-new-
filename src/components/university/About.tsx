import React from 'react';
import { BookOpen, Globe, Users, Award } from 'lucide-react';

const AboutUniversity = () => {
  const stats = [
    { icon: BookOpen, label: 'Years of Excellence', value: '30+' },
    { icon: Globe, label: 'Countries Represented', value: '45+' },
    { icon: Users, label: 'Total Students', value: '12,000+' },
    { icon: Award, label: 'Global Ranking', value: 'Top 500' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Kyrgyz Medical University
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established in 1992, we are one of the leading medical universities in Central Asia, 
            committed to providing world-class medical education and producing skilled healthcare professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">International Recognition</h4>
                  <p className="text-gray-600">WHO listed, NMC approved, and recognized by major medical councils worldwide.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">English Medium</h4>
                  <p className="text-gray-600">Complete MBBS program taught in English with experienced international faculty.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Diverse Community</h4>
                  <p className="text-gray-600">Students from 45+ countries create a truly international learning environment.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl">
            <img 
              src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg" 
              alt="Medical students in modern laboratory"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Modern Campus & Facilities</h4>
            <p className="text-gray-600">
              Our state-of-the-art campus features modern laboratories, well-equipped libraries, 
              comfortable hostels, and all amenities needed for a complete educational experience.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-blue-600 to-green-600 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                <stat.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUniversity;