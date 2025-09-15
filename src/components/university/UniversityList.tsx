import  { useState} from 'react';
import { 
  MapPin, 

  GraduationCap, 

  CheckCircle, 
 
  Globe,

  Award,
 
  Search,

  Star,

  Eye,
  Heart,
  Share2
} from 'lucide-react';

import { Form, Link } from 'react-router-dom';
import WhyChooseKyrgyzstan from './WhyChooseKyrgyzstan';
import ApplicationProcess from './AdmissionProcess';
import Testimonials from './Testimonials';
import FAQ2  from './FAQ 2';
import { FaDownload } from "react-icons/fa6";
import DownloadFormPopup from './DownloadFormPopup';

interface University {
  id: number;
  name: string;
  location: string;
  country: string;
  image: string;
  rating: number;
  reviews: number;
  scholarships: {
    name: string;
    amount: string;
    discount: string;
    deadline: string;
    seats: number;
    program: string;
    type: 'Merit' | 'Need-based' | 'Sports' | 'Early Bird';
  }[];
  established: number;
  students: string;
  recognition: string[];
  tuitionFee: string;
  featured: boolean;
}

const universities: University[] = [
  {
    id: 1,
    name: "Ala-Too International University",
    location: "Bishkek",
    country: "Kyrgyzstan",
    image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.8,
    reviews: 245,
    scholarships: [
      {
        name: "Merit-Based Scholarship",
        amount: "$2,000 - $4,000",
        discount: "30% off tuition",
        deadline: "2024-06-30",
        seats: 25,
        program: "MBBS",
        type: "Merit"
      }
    ],
    established: 1996,
    students: "5,000+",
    recognition: ["WHO", "MCI", "WFME"],
    tuitionFee: "$3,500/year",
    featured: true
  },
  {
    id: 2,
    name: "Asian Medical Institute",
    location: "Kant",
    country: "Kyrgyzstan",
    image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.6,
    reviews: 189,
    scholarships: [
      {
        name: "Early Application Scholarship",
        amount: "$2,500",
        discount: "35% off tuition",
        deadline: "2024-05-30",
        seats: 30,
        program: "MBBS",
        type: "Early Bird"
      }
    ],
    established: 2003,
    students: "3,200+",
    recognition: ["WHO", "MCI"],
    tuitionFee: "$3,200/year",
    featured: true
  },
  {
    id: 3,
    name: "Osh State University Medical Faculty",
    location: "Osh",
    country: "Kyrgyzstan",
    image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.7,
    reviews: 156,
    scholarships: [
      {
        name: "Sports Excellence Scholarship",
        amount: "$1,800",
        discount: "20% off tuition",
        deadline: "2024-06-15",
        seats: 12,
        program: "MBBS",
        type: "Sports"
      }
    ],
    established: 1951,
    students: "8,500+",
    recognition: ["WHO", "MCI", "UNESCO"],
    tuitionFee: "$2,800/year",
    featured: false
  },
  {
    id: 4,
    name: "International School of Medicine",
    location: "Bishkek",
    country: "Kyrgyzstan",
    image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.5,
    reviews: 203,
    scholarships: [
      {
        name: "Academic Excellence Award",
        amount: "$3,000",
        discount: "40% off tuition",
        deadline: "2024-07-15",
        seats: 20,
        program: "MBBS",
        type: "Merit"
      }
    ],
    established: 2000,
    students: "4,100+",
    recognition: ["WHO", "MCI"],
    tuitionFee: "$3,800/year",
    featured: true
  },
  {
    id: 5,
    name: "Kyrgyz State Medical Academy",
    location: "Bishkek",
    country: "Kyrgyzstan",
    image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.9,
    reviews: 312,
    scholarships: [
      {
        name: "Need-Based Financial Aid",
        amount: "$1,500 - $2,800",
        discount: "25% off tuition",
        deadline: "2024-08-01",
        seats: 35,
        program: "MBBS",
        type: "Need-based"
      }
    ],
    established: 1939,
    students: "6,800+",
    recognition: ["WHO", "MCI", "WFME", "ECFMG"],
    tuitionFee: "$3,000/year",
    featured: true
  },
  {
    id: 6,
    name: "Jalal-Abad State University",
    location: "Jalal-Abad",
    country: "Kyrgyzstan",
    image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.4,
    reviews: 128,
    scholarships: [
      {
        name: "Regional Development Scholarship",
        amount: "$2,200",
        discount: "30% off tuition",
        deadline: "2024-06-20",
        seats: 18,
        program: "MBBS",
        type: "Merit"
      }
    ],
    established: 1993,
    students: "4,500+",
    recognition: ["WHO", "MCI"],
    tuitionFee: "$2,900/year",
    featured: false
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [favorites, setFavorites] = useState<number[]>([]);
  // const [showFilters, setShowFilters] = useState(false);
  const [compareList, setCompareList] = useState<number[]>([]);
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [selectedUniversityForDownload, setSelectedUniversityForDownload] = useState<University | null>(null);

  const countries = ['All', ...Array.from(new Set(universities.map(u => u.country)))];
  const scholarshipTypes = ['All', 'Merit', 'Need-based', 'Sports', 'Early Bird'];

  const filteredUniversities = universities
    .filter(uni => {
      const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           uni.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCountry = selectedCountry === 'All' || uni.country === selectedCountry;
      const matchesType = selectedType === 'All' || 
                         uni.scholarships.some(s => s.type === selectedType);
      return matchesSearch && matchesCountry && matchesType;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'featured':
          return b.featured ? 1 : -1;
        case 'rating':
          return b.rating - a.rating;
        case 'tuition':
          return parseInt(a.tuitionFee.replace(/[^0-9]/g, '')) - parseInt(b.tuitionFee.replace(/[^0-9]/g, ''));
        case 'established':
          return b.established - a.established;
        default:
          return 0;
      }
    });

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const toggleCompare = (id: number) => {
    setCompareList(prev => {
      if (prev.includes(id)) {
        return prev.filter(comp => comp !== id);
      } else if (prev.length < 3) {
        return [...prev, id];
      } else {
        // Replace the first item if already at max (3)
        return [prev[1], prev[2], id];
      }
    });
  };

  const clearCompare = () => {
    setCompareList([]);
  };
  const getScholarshipTypeColor = (type: string) => {
    switch (type) {
      case 'Merit': return 'bg-blue-100 text-blue-800';
      case 'Need-based': return 'bg-green-100 text-green-800';
      case 'Sports': return 'bg-orange-100 text-orange-800';
      case 'Early Bird': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")      // spaces → hyphens
    .replace(/[^\w-]+/g, "");  // remove special chars
}

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">MBBS Scholarships Hub</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-blue-600 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              {compareList.length > 0 && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Compare ({compareList.length})</span>
                  <button 
                    onClick={clearCompare}
                    className="text-xs text-blue-600 hover:text-blue-800 underline"
                  >
                    Clear
                  </button>
                </div>
              )}
              <button className="text-gray-600 hover:text-blue-600 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Your Perfect
              <span className="block text-blue-200">Medical University</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Explore top-ranked medical universities offering MBBS programs with 
              scholarships and financial aid opportunities worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span>WHO Recognized</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-yellow-400" />
                <span>Scholarship Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-6 h-6 text-blue-300" />
                <span>International Programs</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search universities, locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {scholarshipTypes.map(type => (
                  <option key={type} value={type}>{type} Scholarship</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="featured">Featured First</option>
                <option value="rating">Highest Rated</option>
                <option value="tuition">Lowest Tuition</option>
                <option value="established">Newest First</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-gray-600">
            Showing {filteredUniversities.length} of {universities.length} universities
          </div>
        </div>
      </div>

      {/* Universities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUniversities.map((university) => (
            <div key={university.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={university.image} 
                  alt={university.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {university.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                <button
                  onClick={() => toggleFavorite(university.id)}
                  className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                >
                  <Heart 
                    className={`w-5 h-5 ${favorites.includes(university.id) ? 'text-red-500 fill-current' : 'text-gray-600'}`} 
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {university.name}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{university.location}, {university.country}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-semibold">{university.rating}</span>
                      <span className="ml-1 text-sm text-gray-500">({university.reviews})</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      Est. {university.established}
                    </div>
                  </div>
                </div>

                {/* Scholarship Info */}
                <div className="mb-4 p-4 bg-blue-50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{university.scholarships[0].name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getScholarshipTypeColor(university.scholarships[0].type)}`}>
                      {university.scholarships[0].type}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-600">Amount:</span>
                      <div className="font-semibold text-green-600">{university.scholarships[0].amount}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Seats:</span>
                      <div className="font-semibold">{university.scholarships[0].seats} available</div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-600">Students:</span>
                    <div className="font-semibold">{university.students}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Tuition:</span>
                    <div className="font-semibold text-blue-600">{university.tuitionFee}</div>
                  </div>
                </div>

                {/* Recognition Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {university.recognition.map((org, index) => (
                    <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      {org}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Link  to={`/universities/${slugify(university.name)}`}
                  className="flex-1 bg-red-600 text-white py-3 px-4 rounded-xl hover:bg-red-700 transition-colors font-semibold">
                    View Details
                  </Link>
                  <button 
                    onClick={() => toggleCompare(university.id)}
                    className={`flex-1 py-3 px-4 rounded-xl transition-colors font-semibold ${
                      compareList.includes(university.id)
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    disabled={!compareList.includes(university.id) && compareList.length >= 3}
                  >
                    {compareList.includes(university.id) ? 'Added to Compare' : 'Compare'}
                  </button>
                  <button 
                    onClick={() => {
                      setSelectedUniversityForDownload(university);
                      setShowDownloadPopup(true);
                    }}
                    className="p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <FaDownload className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredUniversities.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No universities found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>

      {/* Compare Bar */}
      {compareList.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-gray-900">
                  Compare Universities ({compareList.length}/3)
                </span>
                <div className="flex space-x-2">
                  {compareList.map(id => {
                    const uni = universities.find(u => u.id === id);
                    return uni ? (
                      <div key={id} className="flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full">
                        <span className="text-sm text-blue-800">{uni.name.split(' ')[0]}</span>
                        <button 
                          onClick={() => toggleCompare(id)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          ×
                        </button>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
              <div className="flex space-x-3">
                <button 
                  onClick={clearCompare}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Clear All
                </button>
                <button 
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  disabled={compareList.length < 2}
                >
                  Compare Now ({compareList.length})
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-red-600 via-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Medical Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get personalized guidance and support throughout your application process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

< WhyChooseKyrgyzstan/>
<ApplicationProcess/>
<Testimonials/>
<FAQ2/>

    {selectedUniversityForDownload && (
        <DownloadFormPopup
          isOpen={showDownloadPopup}
          onClose={() => setShowDownloadPopup(false)}
          universityName={selectedUniversityForDownload.name}
        />
      )}
    </div>
  );
}

export default App;