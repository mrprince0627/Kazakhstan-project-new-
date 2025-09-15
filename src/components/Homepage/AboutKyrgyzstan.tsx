
import { MapPin, Users, Globe, Mountain, Thermometer, Calendar } from 'lucide-react';

const AboutKyrgyzstan = () => {
  const facts = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      description: "Central Asia, bordered by Kazakhstan, Uzbekistan, Tajikistan, and China"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Population",
      description: "6.7 million people with rich cultural diversity"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Languages",
      description: "Kyrgyz and Russian (official), English widely spoken in universities"
    },
    {
      icon: <Mountain className="w-6 h-6" />,
      title: "Geography",
      description: "Mountainous country with stunning natural beauty and clean environment"
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Climate",
      description: "Continental climate with warm summers and cold winters"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Time Zone",
      description: "UTC+6, convenient for Indian students (30 minutes ahead of IST)"
    }
  ];

  return (
    <section id="about-kyrgyzstan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Discover Beautiful Kyrgyzstan
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Kyrgyzstan, known as the "Switzerland of Central Asia," offers a unique blend of 
                natural beauty, rich culture, and excellent educational opportunities. This landlocked 
                country provides a safe and welcoming environment for international students.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With its strategic location along the ancient Silk Road, Kyrgyzstan has been a 
                crossroads of cultures for centuries. Today, it continues this tradition by 
                welcoming students from around the world to its modern universities.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="bg-gradient-to-r from-red-50 to-yellow-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Why Students Love Kyrgyzstan</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Safe and peaceful country with low crime rates</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Affordable cost of living compared to other study destinations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Rich cultural heritage and warm hospitality</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Beautiful landscapes perfect for outdoor activities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Content - Country Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Kyrgyzstan landscape"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Issyk-Kul Lake</h3>
                <p className="text-white/90">One of the world's largest alpine lakes</p>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">94%</div>
                <div className="text-gray-600 text-sm">Literacy Rate</div>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-xl p-6 border">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">25+</div>
                <div className="text-gray-600 text-sm">Universities</div>
              </div>
            </div>
          </div>
        </div>

        {/* Country Facts Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Quick Facts About Kyrgyzstan
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facts.map((fact, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-4">
                  {fact.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{fact.title}</h4>
                <p className="text-gray-600">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cultural Section */}
        <div className="mt-20 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Rich Cultural Heritage</h3>
              <p className="text-red-100 text-lg leading-relaxed mb-6">
                Experience the nomadic traditions, epic tales of Manas, and the warm hospitality 
                of Kyrgyz people. The country celebrates diversity and welcomes international 
                students as part of their extended family.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Traditional festivals and celebrations throughout the year</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Delicious cuisine blending Central Asian and Russian influences</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Opportunities to learn about nomadic lifestyle and traditions</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Kyrgyz culture"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutKyrgyzstan;