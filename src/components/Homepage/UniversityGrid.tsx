
import { MapPin, Users, Star, ArrowRight, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const UniversityGrid = () => {
  const universities = [
    {
      id: 1,
      name: "Kyrgyz State Medical Academy",
      location: "Bishkek",
      type: "Medical",
      rating: 4.8,
      students: "2,500+",
      established: "1939",
      image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
      specialties: ["MBBS", "Dentistry", "Pharmacy"],
      fees: "$3,500/year",
      recognition: ["WHO", "MCI", "UNESCO"]
    },
    {
      id: 2,
      name: "International School of Medicine",
      location: "Bishkek",
      type: "Medical",
      rating: 4.7,
      students: "1,800+",
      established: "2003",
      image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800",
      specialties: ["MBBS", "General Medicine"],
      fees: "$4,000/year",
      recognition: ["WHO", "ECFMG", "GMC"]
    },
    {
      id: 3,
      name: "Kyrgyz Technical University",
      location: "Bishkek",
      type: "Technical",
      rating: 4.6,
      students: "3,200+",
      established: "1954",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      specialties: ["Engineering", "IT", "Architecture"],
      fees: "$2,800/year",
      recognition: ["UNESCO", "ABET"]
    },
    {
      id: 4,
      name: "Asian Medical Institute",
      location: "Kant",
      type: "Medical",
      rating: 4.5,
      students: "1,200+",
      established: "2012",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      specialties: ["MBBS", "Nursing"],
      fees: "$3,200/year",
      recognition: ["WHO", "MCI"]
    },
    {
      id: 5,
      name: "Kyrgyz-Turkish Manas University",
      location: "Bishkek",
      type: "General",
      rating: 4.9,
      students: "4,000+",
      established: "1995",
      image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800",
      specialties: ["Business", "Engineering", "Medicine"],
      fees: "$3,800/year",
      recognition: ["UNESCO", "YÖK"]
    },
    {
      id: 6,
      name: "American University of Central Asia",
      location: "Bishkek",
      type: "General",
      rating: 4.7,
      students: "1,500+",
      established: "1993",
      image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800",
      specialties: ["Liberal Arts", "Business", "IT"],
      fees: "$4,500/year",
      recognition: ["WASC", "UNESCO"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Medical': return 'bg-green-100 text-green-800';
      case 'Technical': return 'bg-blue-100 text-blue-800';
      case 'General': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Top Universities in Kyrgyzstan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore world-class educational institutions offering quality programs 
            recognized globally and designed for international students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universities.map((university) => (
            <div key={university.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={university.image} 
                  alt={university.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(university.type)}`}>
                    {university.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{university.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
                    {university.name}
                  </h3>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{university.location}</span>
                    <span className="mx-2">•</span>
                    <span>Est. {university.established}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Users className="w-5 h-5 text-red-600 mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-800">{university.students}</div>
                    <div className="text-xs text-gray-600">Students</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Award className="w-5 h-5 text-red-600 mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-800">{university.fees}</div>
                    <div className="text-xs text-gray-600">Annual Fees</div>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {university.specialties.map((specialty, index) => (
                      <span key={index} className="px-2 py-1 bg-red-50 text-red-600 text-xs rounded-md">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Recognition */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Globe className="w-4 h-4" />
                    <span>Recognized by: {university.recognition.join(', ')}</span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center space-x-2 group">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            to="/universities"
            className="bg-white text-red-600 border-2 border-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors">
            View All Universities
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UniversityGrid;