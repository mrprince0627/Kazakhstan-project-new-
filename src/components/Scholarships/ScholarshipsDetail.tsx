import React, { useState , useEffect } from 'react';
import { Star, MapPin, Users, Award, BookOpen, Globe, Phone, Mail, CheckCircle, ArrowRight, GraduationCap, Heart } from 'lucide-react';

interface ScholarshipDetails {
  name: string;
  amount: string;
  duration: string;
  eligibility: string[];
  benefits: string[];
}

const KyrgyzstanScholarshipPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'eligibility' | 'application' | 'contact'>('overview');
  const [selectedScholarship, setSelectedScholarship] = useState<number>(0);

  const scholarships: ScholarshipDetails[] = [
    {
      name: "Merit-Based Excellence Scholarship",
      amount: "100% Tuition Coverage + Monthly Stipend",
      duration: "Full Program Duration",
      eligibility: ["Minimum 85% in 12th grade", "Strong academic record", "English proficiency", "Leadership experience"],
      benefits: ["Full tuition waiver", "$400 monthly stipend", "Free accommodation", "Health insurance", "Airport pickup"]
    },
    {
      name: "International Student Grant",
      amount: "75% Tuition Reduction",
      duration: "Renewable Annually",
      eligibility: ["Minimum 75% in 12th grade", "Valid passport", "Medical certificate", "Financial documents"],
      benefits: ["75% tuition discount", "Subsidized housing", "Cultural integration program", "Career counseling"]
    },
    {
      name: "STEM Excellence Award",
      amount: "50% Tuition + Research Fund",
      duration: "4 Years",
      eligibility: ["Science/Math background", "Research interest", "Minimum 80% marks", "Letter of motivation"],
      benefits: ["50% tuition coverage", "Research opportunities", "Lab access", "Mentorship program"]
    }
  ];

  const universities = [
    "Kyrgyz-Turkish Manas University",
    "American University of Central Asia",
    "Kyrgyz State Medical University",
    "Bishkek Academy of Finance"
  ];
useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-red-600">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-red-600"></div>
        
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-full p-4">
                <GraduationCap className="w-16 h-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Study in Kyrgyzstan
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Unlock world-class education opportunities with prestigious scholarships in the heart of Central Asia
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Apply Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <Star className="w-8 h-8 text-yellow-300 opacity-70" />
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse">
          <Award className="w-10 h-10 text-white opacity-50" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white shadow-lg -mt-10 mx-6 rounded-2xl relative z-10">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600">Students Placed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
              <div className="text-gray-600">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">$2M+</div>
              <div className="text-gray-600">Scholarships Awarded</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 ">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-12 bg-white rounded-2xl p-2 shadow-lg">
          {[
            { id: 'overview', label: 'Overview', icon: BookOpen },
            { id: 'eligibility', label: 'Eligibility', icon: CheckCircle },
            { id: 'application', label: 'Application', icon: ArrowRight },
            { id: 'contact', label: 'Contact', icon: Phone }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === id
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-5 h-5" />
              {label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <Globe className="w-8 h-8 text-red-600" />
                    Why Study in Kyrgyzstan?
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { title: "Affordable Education", desc: "Low tuition fees and living costs compared to European countries", icon: Heart },
                      { title: "Quality Education", desc: "Internationally recognized degrees and modern curriculum", icon: Award },
                      { title: "Cultural Diversity", desc: "Experience rich Central Asian culture and traditions", icon: Globe },
                      { title: "Safe Environment", desc: "Peaceful country with friendly locals and safe campuses", icon: CheckCircle }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                        <div className="flex-shrink-0">
                          <item.icon className="w-8 h-8 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scholarship Options */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <Award className="w-8 h-8 text-red-600" />
                    Available Scholarships
                  </h2>
                  
                  <div className="space-y-4">
                    {scholarships.map((scholarship, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedScholarship(idx)}
                        className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          selectedScholarship === idx
                            ? 'border-indigo-500 bg-gradient-to-r from-indigo-50 to-purple-50 shadow-lg'
                            : 'border-gray-200 hover:border-indigo-300 hover:shadow-md'
                        }`}
                      >
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{scholarship.name}</h3>
                        <p className="text-indigo-600 font-semibold mb-3">{scholarship.amount}</p>
                        <div className="flex flex-wrap gap-2">
                          {scholarship.benefits.slice(0, 3).map((benefit, bidx) => (
                            <span key={bidx} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'eligibility' && (
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  Eligibility Requirements
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      {scholarships[selectedScholarship].name}
                    </h3>
                    <ul className="space-y-3">
                      {scholarships[selectedScholarship].eligibility.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">General Requirements</h3>
                    <ul className="space-y-3">
                      {[
                        "Valid passport with minimum 18 months validity",
                        "Completed high school with official transcripts",
                        "Medical certificate and health insurance",
                        "English proficiency test (IELTS/TOEFL) - preferred",
                        "Statement of purpose and academic goals",
                        "Letters of recommendation (2-3 required)"
                      ].map((req, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'application' && (
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <ArrowRight className="w-8 h-8 text-indigo-600" />
                  Application Process
                </h2>
                
                <div className="space-y-6">
                  {[
                    { step: 1, title: "Document Preparation", desc: "Gather all required documents and get them verified", time: "1-2 weeks" },
                    { step: 2, title: "Online Application", desc: "Fill out the university application form online", time: "2-3 days" },
                    { step: 3, title: "Document Submission", desc: "Submit all documents and pay application fee", time: "1 week" },
                    { step: 4, title: "Review Process", desc: "University reviews application and conducts interview if needed", time: "2-4 weeks" },
                    { step: 5, title: "Admission Decision", desc: "Receive admission letter and scholarship confirmation", time: "1-2 weeks" },
                    { step: 6, title: "Visa Application", desc: "Apply for student visa with admission documents", time: "2-3 weeks" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-2">{item.desc}</p>
                        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
                          Timeline: {item.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Phone className="w-8 h-8 text-green-600" />
                  Get in Touch
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                      <Phone className="w-6 h-6 text-green-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Phone</h3>
                        <p className="text-gray-600">+91 98765 43210</p>
                        <p className="text-gray-600">+996 312 123456</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                      <Mail className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Email</h3>
                        <p className="text-gray-600">admissions@kyrgyz-edu.com</p>
                        <p className="text-gray-600">scholarships@kyrgyz-uni.kg</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                      <MapPin className="w-6 h-6 text-purple-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Office</h3>
                        <p className="text-gray-600">Connaught Place, New Delhi</p>
                        <p className="text-gray-600">Bishkek, Kyrgyzstan</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Inquiry</h3>
                    <form className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                      <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* University Partners */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-indigo-600" />
                Partner Universities
              </h3>
              <div className="space-y-3">
                {universities.map((uni, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors duration-300">
                    <GraduationCap className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700 text-sm">{uni}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Application Deadline</span>
                  <span className="font-semibold">June 30, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span>Academic Year</span>
                  <span className="font-semibold">September 2025</span>
                </div>
                <div className="flex justify-between">
                  <span>Processing Time</span>
                  <span className="font-semibold">4-6 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Language</span>
                  <span className="font-semibold">English/Russian</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl p-6 shadow-lg text-center">
              <h3 className="text-xl font-bold mb-4">Ready to Apply?</h3>
              <p className="mb-6">Don't miss this opportunity to study abroad with scholarships!</p>
              <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Start Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KyrgyzstanScholarshipPage;