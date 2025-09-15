import React from 'react';
import { Star, CheckCircle, Shield, Globe } from 'lucide-react';

const Rankings = () => {
  const accreditations = [
    {
      title: 'WHO Listed',
      description: 'Listed in World Health Organization Directory',
      icon: Globe,
      status: 'Verified'
    },
    {
      title: 'NMC Approved',
      description: 'Approved by National Medical Commission, India',
      icon: CheckCircle,
      status: 'Approved'
    },
    {
      title: 'Ministry Recognition',
      description: 'Recognized by Ministry of Education, Kyrgyzstan',
      icon: Shield,
      status: 'Licensed'
    },
    {
      title: 'International Standards',
      description: 'Meets global medical education standards',
      icon: Star,
      status: 'Certified'
    }
  ];

  const rankings = [
    { metric: 'Global University Ranking', position: '#485', change: '+15' },
    { metric: 'Medical Schools in Asia', position: '#89', change: '+8' },
    { metric: 'Research Output', position: '#156', change: '+12' },
    { metric: 'International Students', position: '#45', change: '+5' }
  ];

  return (
    <section id="rankings" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Rankings & Accreditation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is reflected in our international rankings and 
            comprehensive accreditations from leading medical education bodies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Accreditations */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Official Accreditations</h3>
            <div className="space-y-6">
              {accreditations.map((accred, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <accred.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{accred.title}</h4>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {accred.status}
                        </span>
                      </div>
                      <p className="text-gray-600">{accred.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rankings */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Global Rankings</h3>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="space-y-6">
                {rankings.map((rank, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div>
                      <h4 className="font-semibold text-gray-900">{rank.metric}</h4>
                      <p className="text-sm text-gray-600">Worldwide Position</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">{rank.position}</p>
                      <p className="text-sm text-green-600 font-medium">{rank.change} this year</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <Star className="h-6 w-6 text-yellow-600" />
                <h4 className="text-lg font-semibold text-gray-900">Excellence Rating</h4>
              </div>
              <p className="text-gray-700">
                Rated 4.7/5 by international students and consistently ranked among 
                the top 10 medical universities in Central Asia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rankings;