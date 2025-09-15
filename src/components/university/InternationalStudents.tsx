import React from 'react';
import { Users, TrendingUp, MapPin, GraduationCap } from 'lucide-react';

const InternationalStudents = () => {
  const countries = [
    { name: 'India', students: '2,800+', flag: '🇮🇳' },
    { name: 'Bangladesh', students: '850+', flag: '🇧🇩' },
    { name: 'Pakistan', students: '650+', flag: '🇵🇰' },
    { name: 'Sri Lanka', students: '420+', flag: '🇱🇰' },
    { name: 'Nigeria', students: '380+', flag: '🇳🇬' },
    { name: 'Nepal', students: '290+', flag: '🇳🇵' }
  ];

  const fmgeStats = [
    { year: '2023', passRate: '87%', students: '456' },
    { year: '2022', passRate: '85%', students: '423' },
    { year: '2021', passRate: '83%', students: '398' },
    { year: '2020', passRate: '81%', students: '365' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            International Students Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful international students who have chosen our university 
            for their medical education and achieved outstanding results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* International Students by Country */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-blue-100 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Students by Country</h3>
            </div>
            
            <div className="space-y-4">
              {countries.map((country, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{country.flag}</span>
                    <span className="font-semibold text-gray-900">{country.name}</span>
                  </div>
                  <span className="text-blue-600 font-bold">{country.students}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <Users className="h-6 w-6 text-blue-600" />
                <h4 className="text-lg font-semibold text-gray-900">Total International Students</h4>
              </div>
              <p className="text-3xl font-bold text-blue-600 mb-2">5,200+</p>
              <p className="text-gray-600">From 45+ countries worldwide</p>
            </div>
          </div>

          {/* FMGE Pass Rates */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-green-100 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">FMGE Success Rate</h3>
            </div>

            <div className="space-y-4 mb-8">
              {fmgeStats.map((stat, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors duration-200"
                >
                  <div>
                    <span className="font-semibold text-gray-900">{stat.year}</span>
                    <p className="text-sm text-gray-600">{stat.students} students appeared</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-green-600">{stat.passRate}</span>
                    <p className="text-sm text-gray-600">Pass Rate</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <GraduationCap className="h-6 w-6" />
                <h4 className="text-lg font-semibold">Average FMGE Success</h4>
              </div>
              <p className="text-3xl font-bold mb-2">85%</p>
              <p className="text-green-100">Consistently above national average</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why International Students Choose Us
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">$</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Affordable Fees</h4>
              <p className="text-gray-600">Low tuition fees with no hidden costs</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-green-600 font-bold text-xl">EN</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">English Medium</h4>
              <p className="text-gray-600">Complete curriculum in English language</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-purple-600 font-bold text-xl">✓</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Easy Admission</h4>
              <p className="text-gray-600">Simple application process, no entrance exam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalStudents;