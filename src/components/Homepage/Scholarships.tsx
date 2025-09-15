import React from 'react';
import { Award, Users, DollarSign, Calendar, CheckCircle, ArrowRight, Star } from 'lucide-react';

const Scholarships = () => {
  const scholarships = [
    {
      id: 1,
      title: "Government of Kyrgyzstan Scholarship",
      provider: "Ministry of Education, Kyrgyzstan",
      amount: "Full Tuition + Living Allowance",
      eligibility: "Academic Excellence (85%+ in 12th)",
      deadline: "March 31, 2024",
      coverage: ["Full tuition fees", "Monthly stipend", "Accommodation", "Medical insurance"],
      requirements: ["Academic transcripts", "English proficiency", "Medical certificate", "Recommendation letters"],
      type: "Government",
      available: 50,
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "Embassy Merit Scholarship",
      provider: "Embassy of Kyrgyz Republic, Delhi",
      amount: "$2,000 per year",
      eligibility: "Indian Citizens with 80%+ marks",
      deadline: "April 15, 2024",
      coverage: ["Partial tuition coverage", "Books allowance", "Exam fee support"],
      requirements: ["Indian passport", "Academic records", "Income certificate", "Essay submission"],
      type: "Embassy",
      available: 25,
      image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "Medical Excellence Scholarship",
      provider: "Kyrgyz Medical Universities Consortium",
      amount: "$1,500 per year",
      eligibility: "NEET qualified students",
      deadline: "May 30, 2024",
      coverage: ["Tuition discount", "Lab fee waiver", "Clinical training support"],
      requirements: ["NEET scorecard", "Medical fitness", "English test", "Interview"],
      type: "University",
      available: 100,
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      title: "Technical Innovation Scholarship",
      provider: "Kyrgyz Technical Universities",
      amount: "$1,200 per year",
      eligibility: "Engineering aspirants with 75%+",
      deadline: "June 15, 2024",
      coverage: ["Tuition reduction", "Project funding", "Internship placement"],
      requirements: ["JEE/SAT scores", "Portfolio", "Technical aptitude test", "Interview"],
      type: "University",
      available: 75,
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Government': return 'bg-green-100 text-green-800';
      case 'Embassy': return 'bg-blue-100 text-blue-800';
      case 'University': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="scholarships" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Scholarships & Financial Aid
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make your education dreams affordable with various scholarship opportunities 
            available for Indian students studying in Kyrgyzstan.
          </p>
        </div>

        {/* Scholarship Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl">
            <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-red-600 mb-2">250+</div>
            <div className="text-gray-700 font-medium">Scholarships Available</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
            <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-green-600 mb-2">$2M+</div>
            <div className="text-gray-700 font-medium">Total Aid Distributed</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
            <div className="text-gray-700 font-medium">Students Receive Aid</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
            <Star className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-gray-700 font-medium">Success Rate</div>
          </div>
        </div>

        {/* Scholarship Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {scholarships.map((scholarship) => (
            <div key={scholarship.id} className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Header */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={scholarship.image} 
                  alt={scholarship.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(scholarship.type)}`}>
                    {scholarship.type}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{scholarship.title}</h3>
                  <p className="text-white/90 text-sm">{scholarship.provider}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Key Info */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <DollarSign className="w-5 h-5 text-green-600 mb-2" />
                    <div className="text-sm text-gray-600">Amount</div>
                    <div className="font-semibold text-gray-800">{scholarship.amount}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <Calendar className="w-5 h-5 text-blue-600 mb-2" />
                    <div className="text-sm text-gray-600">Deadline</div>
                    <div className="font-semibold text-gray-800">{scholarship.deadline}</div>
                  </div>
                </div>

                {/* Eligibility */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Eligibility</h4>
                  <p className="text-gray-600">{scholarship.eligibility}</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{scholarship.available} scholarships available</span>
                  </div>
                </div>

                {/* Coverage */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Coverage Includes</h4>
                  <div className="space-y-2">
                    {scholarship.coverage.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Requirements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Requirements</h4>
                  <div className="flex flex-wrap gap-2">
                    {scholarship.requirements.map((req, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Application Process */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">How to Apply for Scholarships</h3>
            <p className="text-red-100 text-lg max-w-2xl mx-auto">
              Follow these simple steps to apply for scholarships and secure financial aid for your education.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Research",
                description: "Browse available scholarships and check eligibility criteria"
              },
              {
                step: "02",
                title: "Prepare",
                description: "Gather required documents and prepare application materials"
              },
              {
                step: "03",
                title: "Apply",
                description: "Submit your application before the deadline with all documents"
              },
              {
                step: "04",
                title: "Follow Up",
                description: "Track your application status and prepare for interviews if required"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{step.step}</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-red-100">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Need Help with Scholarship Applications?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our scholarship counselors are here to guide you through the application process 
            and help you secure the best financial aid opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Get Scholarship Guidance
            </button>
            <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors">
              Download Scholarship Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scholarships;