
import { 
  Mountain, 
  Globe, 
  Users, 
  MapPin, 
  Utensils, 
  Building, 
  TrendingUp, 
  GraduationCap,
  Compass,
  Sun,
  Snowflake,
  Star,
  Flag,
  Heart,

  Plane,
  Calendar,
  Clock,
  DollarSign,
  Languages,
  Stethoscope,
  Car,
  Wifi,
  Award,
  TreePine,
  Waves
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-orange-600 to-red-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Mountain className="h-16 w-16 text-blue-300" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
              Kyrgyz Republic
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Land of Celestial Mountains - Gateway to Quality Education in Central Asia
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-800/50 px-4 py-2 rounded-full">🏔️ Tian Shan Mountains</span>
              <span className="bg-indigo-800/50 px-4 py-2 rounded-full">🎓 WHO Recognized Universities</span>
              <span className="bg-purple-800/50 px-4 py-2 rounded-full">🌍 Silk Road Heritage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Facts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Essential Information</h2>
            <p className="text-lg text-gray-600">Key facts about the Kyrgyz Republic</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl hover:shadow-lg transition-shadow">
              <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800">Capital</h3>
              <p className="text-gray-600">Bishkek</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800">Population</h3>
              <p className="text-gray-600">6.7 Million</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl hover:shadow-lg transition-shadow">
              <Languages className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800">Languages</h3>
              <p className="text-gray-600">Kyrgyz, Russian</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-xl hover:shadow-lg transition-shadow">
              <DollarSign className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800">Currency</h3>
              <p className="text-gray-600">Som (KGS)</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-pink-100 rounded-xl hover:shadow-lg transition-shadow">
              <MapPin className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800">Location</h3>
              <p className="text-gray-600">Central Asia</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-cyan-100 rounded-xl hover:shadow-lg transition-shadow">
              <Clock className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800">Timezone</h3>
              <p className="text-gray-600">GMT +6</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-amber-100 rounded-xl hover:shadow-lg transition-shadow">
              <Flag className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800">Independence</h3>
              <p className="text-gray-600">August 31, 1991</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-xl hover:shadow-lg transition-shadow">
              <Mountain className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800">Highest Peak</h3>
              <p className="text-gray-600">Jengish Chokusu (7,439m)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Geography & Climate */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Mountain className="h-16 w-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Geography & Climate</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The "Land of Celestial Mountains" with breathtaking landscapes and diverse climate zones
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Mountain Ranges & Features</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mountain className="h-6 w-6 text-blue-600 mr-3" />
                  <span>Tian Shan & Pamir mountain ranges</span>
                </div>
                <div className="flex items-center">
                  <Waves className="h-6 w-6 text-blue-400 mr-3" />
                  <span>Issyk-Kul - 2nd largest alpine lake globally</span>
                </div>
                <div className="flex items-center">
                  <TreePine className="h-6 w-6 text-green-600 mr-3" />
                  <span>Multiple national parks & nature reserves</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-6 w-6 text-purple-600 mr-3" />
                  <span>Borders: Kazakhstan, Uzbekistan, Tajikistan, China</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Climate Zones</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Sun className="h-6 w-6 text-yellow-500 mr-3" />
                  <span>Continental climate - hot summers</span>
                </div>
                <div className="flex items-center">
                  <Snowflake className="h-6 w-6 text-blue-500 mr-3" />
                  <span>Cold winters - perfect for skiing</span>
                </div>
                <div className="flex items-center">
                  <Mountain className="h-6 w-6 text-green-500 mr-3" />
                  <span>Ideal for trekking & adventure tourism</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 text-orange-500 mr-3" />
                  <span>Best visit: Spring (Apr-Jun) & Autumn (Sep-Oct)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Top Attractions */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Top Tourist Attractions</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <Waves className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                <h4 className="font-semibold">Issyk-Kul Lake</h4>
                <p className="text-sm text-indigo-100">Alpine paradise</p>
              </div>
              <div className="text-center">
                <TreePine className="h-8 w-8 mx-auto mb-2 text-green-200" />
                <h4 className="font-semibold">Ala-Archa National Park</h4>
                <p className="text-sm text-indigo-100">Mountain trekking</p>
              </div>
              <div className="text-center">
                <Mountain className="h-8 w-8 mx-auto mb-2 text-purple-200" />
                <h4 className="font-semibold">Song-Kol Lake</h4>
                <p className="text-sm text-indigo-100">Yurt experiences</p>
              </div>
              <div className="text-center">
                <Compass className="h-8 w-8 mx-auto mb-2 text-yellow-200" />
                <h4 className="font-semibold">Silk Road Sites</h4>
                <p className="text-sm text-indigo-100">Historical heritage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History & Culture */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Compass className="h-16 w-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Rich History & Culture</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From ancient Silk Road heritage to vibrant nomadic traditions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">🏛️ Ancient Silk Road</h3>
                <p className="text-gray-600">
                  Strategic crossroads connecting East and West for over 2,000 years, facilitating trade, culture, and knowledge exchange.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">🏇 Nomadic Heritage</h3>
                <p className="text-gray-600">
                  Rich traditions of horse culture, yurt dwelling, and the epic "Manas" - one of the world's longest oral poems.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">🕌 Religion & Diversity</h3>
                <p className="text-gray-600">
                  Predominantly Sunni Islam with Russian Orthodox minority, creating a harmonious multicultural society.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-600 to-orange-700 p-8 rounded-2xl text-white">
              <Star className="h-16 w-16 mb-6 text-purple-200" />
              <h3 className="text-2xl font-bold mb-4">Cultural Highlights</h3>
              <ul className="space-y-3 text-purple-100">
                <li>• Traditional felt-making and carpet weaving</li>
                <li>• Kok-boru (national horse sport)</li>
                <li>• UNESCO World Heritage: Sulayman-Too Sacred Mountain</li>
                <li>• Vibrant music and dance traditions</li>
                <li>• Renowned hospitality and tea culture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MBBS & Education - High Priority Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <GraduationCap className="h-16 w-16 text-green-200 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">MBBS Education Hub</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Growing destination for international medical students with WHO & NMC recognized universities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all">
              <Stethoscope className="h-12 w-12 text-green-200 mb-4" />
              <h3 className="text-xl font-bold mb-4">WHO Recognized</h3>
              <p className="text-green-100">Medical universities recognized by WHO and NMC for international practice</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all">
              <DollarSign className="h-12 w-12 text-blue-200 mb-4" />
              <h3 className="text-xl font-bold mb-4">Affordable Education</h3>
              <p className="text-blue-100">Lower tuition fees and living costs compared to other countries</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all">
              <Languages className="h-12 w-12 text-purple-200 mb-4" />
              <h3 className="text-xl font-bold mb-4">English Medium</h3>
              <p className="text-purple-100">MBBS programs taught in English for international students</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Kyrgyzstan for MBBS?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Academic Excellence</h4>
                <ul className="space-y-2 text-green-100">
                  <li>• 50+ higher education institutions</li>
                  <li>• Modern medical facilities and labs</li>
                  <li>• Experienced international faculty</li>
                  <li>• Clinical training in government hospitals</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Student Life</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• Safe and welcoming environment</li>
                  <li>• Vibrant student communities in Bishkek & Osh</li>
                  <li>• Cultural exchange opportunities</li>
                  <li>• Easy visa process with e-Visa facility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <TrendingUp className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Growing Economy</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Diverse economy with strong potential in mining, agriculture, hydropower, and tourism
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-yellow-50 to-amber-100 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">🏆 Key Sectors</h3>
                <p className="text-gray-600">Mining (gold, uranium), agriculture, hydropower generation, and growing tourism industry.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">📈 Major Exports</h3>
                <p className="text-gray-600">Gold, cotton, wool, meat products, and agricultural commodities to regional markets.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">🌍 Investment Opportunities</h3>
                <p className="text-gray-600">Growing opportunities in renewable energy, eco-tourism, and educational services.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-blue-700 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Economic Indicators</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>GDP Growth</span>
                  <span className="font-semibold">4-6% annually</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Main Industries</span>
                  <span className="font-semibold">Mining, Agriculture</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Tourism Growth</span>
                  <span className="font-semibold">15% yearly</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Hydropower Potential</span>
                  <span className="font-semibold">142 billion kWh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food & Lifestyle */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Utensils className="h-16 w-16 text-orange-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Cuisine & Lifestyle</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Rich culinary traditions blending nomadic, Central Asian, and Russian influences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-800 mb-2">🍖 Beshbarmak</h3>
              <p className="text-gray-600 text-sm">National dish - boiled meat with noodles and onions</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-800 mb-2">🥟 Manti</h3>
              <p className="text-gray-600 text-sm">Steamed dumplings filled with seasoned meat</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-800 mb-2">🍜 Lagman</h3>
              <p className="text-gray-600 text-sm">Hand-pulled noodle soup with vegetables and meat</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-800 mb-2">🥛 Kumys</h3>
              <p className="text-gray-600 text-sm">Traditional fermented mare's milk beverage</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-red-700 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Lifestyle & Culture</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Heart className="h-8 w-8 mx-auto mb-2 text-orange-200" />
                <h4 className="font-semibold">Tea Culture</h4>
                <p className="text-sm text-orange-100">Central to social life and hospitality</p>
              </div>
              <div className="text-center">
                <Building className="h-8 w-8 mx-auto mb-2 text-red-200" />
                <h4 className="font-semibold">Bazaars & Markets</h4>
                <p className="text-sm text-red-100">Fresh local produce and traditional crafts</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-yellow-200" />
                <h4 className="font-semibold">Modern City Life</h4>
                <p className="text-sm text-yellow-100">Blend of urban amenities and traditions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Building className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Major Cities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Urban centers offering modern amenities and educational opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold mb-3">Bishkek</h3>
              <p className="text-blue-100 mb-4">Capital city, political and economic center with major universities</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-blue-200">
                  <Users className="h-4 w-4 mr-2" />
                  <span>1 million+ residents</span>
                </div>
                <div className="flex items-center text-blue-200">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  <span>Major medical universities</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 text-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold mb-3">Osh</h3>
              <p className="text-green-100 mb-4">Second largest city, cultural heart with ancient bazaar</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-green-200">
                  <Users className="h-4 w-4 mr-2" />
                  <span>280,000+ residents</span>
                </div>
                <div className="flex items-center text-green-200">
                  <Star className="h-4 w-4 mr-2" />
                  <span>UNESCO World Heritage site</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600 to-red-700 text-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold mb-3">Jalal-Abad</h3>
              <p className="text-orange-100 mb-4">Industrial center with growing educational facilities</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-orange-200">
                  <Users className="h-4 w-4 mr-2" />
                  <span>110,000+ residents</span>
                </div>
                <div className="flex items-center text-orange-200">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  <span>Mining & agriculture hub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel & Transport */}
      <section className="py-16 bg-gradient-to-r from-slate-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Plane className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Travel & Connectivity</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Easy access and excellent connectivity for international students
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Transportation</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Plane className="h-6 w-6 text-blue-600 mr-3" />
                  <span>Manas International Airport (Bishkek)</span>
                </div>
                <div className="flex items-center">
                  <Plane className="h-6 w-6 text-green-600 mr-3" />
                  <span>Osh International Airport</span>
                </div>
                <div className="flex items-center">
                  <Car className="h-6 w-6 text-orange-600 mr-3" />
                  <span>Domestic buses and marshrutkas</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-6 w-6 text-purple-600 mr-3" />
                  <span>Road links with neighboring countries</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Visa & Connectivity</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-green-600 mr-3" />
                  <span>e-Visa available for many countries</span>
                </div>
                <div className="flex items-center">
                  <Wifi className="h-6 w-6 text-blue-600 mr-3" />
                  <span>Good internet & telecom coverage</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 text-orange-600 mr-3" />
                  <span>Student visa processing support</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-6 w-6 text-red-600 mr-3" />
                  <span>International student services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Stethoscope className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Healthcare System</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Affordable healthcare facilities for locals and international students
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Public Healthcare</h3>
              <p className="text-gray-600 mb-4">Government hospitals and clinics providing basic healthcare services</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Subsidized medical care</li>
                <li>• Emergency services</li>
                <li>• Preventive care programs</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Private Healthcare</h3>
              <p className="text-gray-600 mb-4">Modern private hospitals with international standards</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Advanced medical equipment</li>
                <li>• Specialist consultations</li>
                <li>• International insurance accepted</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Student Healthcare</h3>
              <p className="text-gray-600 mb-4">Special healthcare provisions for international students</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• University health centers</li>
                <li>• Affordable medical insurance</li>
                <li>• 24/7 emergency support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Star className="h-16 w-16 text-indigo-200 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Quick Facts</h2>
            <p className="text-xl text-indigo-100">Interesting facts about Kyrgyzstan</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3 text-indigo-200" />
              <h3 className="font-bold">Independence Day</h3>
              <p className="text-indigo-100">August 31st</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Users className="h-8 w-8 mx-auto mb-3 text-purple-200" />
              <h3 className="font-bold">National Sport</h3>
              <p className="text-purple-100">Kok-boru (horse polo)</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Mountain className="h-8 w-8 mx-auto mb-3 text-blue-200" />
              <h3 className="font-bold">Highest Peak</h3>
              <p className="text-blue-100">Jengish Chokusu (7,439m)</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Award className="h-8 w-8 mx-auto mb-3 text-green-200" />
              <h3 className="font-bold">UNESCO Sites</h3>
              <p className="text-green-100">Sulayman-Too Mountain</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Start Your MBBS Journey in Kyrgyzstan</h2>
          <p className="text-xl text-blue-100 mb-8">
            Discover world-class medical education in the heart of Central Asia's most beautiful country
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors">
              Explore MBBS Programs
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-700 transition-colors">
              Contact Universities
            </button>
          </div>
        </div>
      </section>

    
    </div>
  );
}

export default App;