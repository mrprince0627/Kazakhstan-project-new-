import React, { useState } from 'react';
import { 
  GraduationCap, 
  Clock, 
  DollarSign, 
  BookOpen, 
  Building2, 
  Stethoscope,
  Users,
  Award,
  Globe,
  CheckCircle,
  Calendar,
  MapPin,
  Star,
  Heart,
  Brain,
  Eye,
  Activity,
  Microscope,
  Shield,
  FileText,
  ChevronDown,
  ChevronUp,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import DownloadFormPopup from '../DownloadFormPopup';

export const MBBSCoursePage: React.FC = () => {
  const [activeYear, setActiveYear] = useState(1);
  const [openFacility, setOpenFacility] = useState<number | null>(null);
 const [isPopupOpen, setIsPopupOpen] = useState(false);

  const courseHighlights = [
    { icon: <Clock className="w-6 h-6" />, title: "6 Years Duration", description: "5 years academic + 1 year internship" },
    { icon: <Globe className="w-6 h-6" />, title: "WHO/MCI Recognized", description: "Globally accepted medical degree" },
    { icon: <DollarSign className="w-6 h-6" />, title: "Affordable Fees", description: "Starting from $3,000/year" },
    { icon: <Users className="w-6 h-6" />, title: "English Medium", description: "Complete instruction in English" }
  ];

  const eligibilityCriteria = [
    "NEET qualification mandatory for Indian students",
    "Minimum 50% in Physics, Chemistry, Biology (PCB) in Class 12",
    "Age limit: 17-25 years as on December 31st of admission year",
    "English proficiency (IELTS 6.0 or equivalent preferred)",
    "Medical fitness certificate required",
    "Valid passport with minimum 2 years validity"
  ];

  const yearWiseSyllabus = [
    {
      year: 1,
      title: "First Year - Foundation Sciences",
      subjects: [
        "Anatomy", "Physiology", "Biochemistry", "Histology", 
        "Medical Terminology", "Medical Ethics", "Russian Language"
      ],
      focus: "Basic medical sciences and human body structure"
    },
    {
      year: 2,
      title: "Second Year - Advanced Basic Sciences",
      subjects: [
        "Pathology", "Microbiology", "Pharmacology", "Pathophysiology",
        "Medical Psychology", "Biostatistics"
      ],
      focus: "Disease processes and drug mechanisms"
    },
    {
      year: 3,
      title: "Third Year - Clinical Introduction",
      subjects: [
        "Internal Medicine", "Surgery", "Obstetrics & Gynecology",
        "Pediatrics", "Clinical Skills", "Medical Imaging"
      ],
      focus: "Introduction to clinical practice and patient care"
    },
    {
      year: 4,
      title: "Fourth Year - Clinical Specialties",
      subjects: [
        "Cardiology", "Neurology", "Orthopedics", "Dermatology",
        "Psychiatry", "Ophthalmology", "ENT"
      ],
      focus: "Specialized medical fields and advanced diagnostics"
    },
    {
      year: 5,
      title: "Fifth Year - Advanced Clinical Practice",
      subjects: [
        "Emergency Medicine", "Intensive Care", "Radiology",
        "Anesthesiology", "Clinical Research", "Medical Management"
      ],
      focus: "Advanced clinical skills and research methodology"
    },
    {
      year: 6,
      title: "Sixth Year - Internship",
      subjects: [
        "Hospital Rotations", "Clinical Practice", "Patient Management",
        "Medical Documentation", "Professional Development"
      ],
      focus: "Hands-on clinical experience and professional preparation"
    }
  ];

  const topUniversities = [
    {
      name: "Ala-Too International University",
      city: "Bishkek",
      established: "1996",
      ranking: "#1 Private Medical University",
      tuitionFee: "$4,500/year",
      features: ["Modern Campus", "International Faculty", "Research Centers"]
    },
    {
      name: "Kyrgyz State Medical Academy",
      city: "Bishkek", 
      established: "1939",
      ranking: "#1 Government Medical University",
      tuitionFee: "$3,500/year",
      features: ["Government Institution", "Low Fees", "Strong Alumni Network"]
    },
    {
      name: "International School of Medicine",
      city: "Bishkek",
      established: "2003",
      ranking: "Top Private Institution",
      tuitionFee: "$4,000/year",
      features: ["English Medium", "Modern Facilities", "Clinical Training"]
    }
  ];

  const hospitalAffiliations = [
    {
      name: "National Hospital of Kyrgyzstan",
      type: "Multi-specialty Government Hospital",
      beds: "800+ beds",
      specialties: ["Cardiology", "Neurology", "Oncology", "Emergency Medicine"],
      location: "Bishkek"
    },
    {
      name: "Bishkek Research Institute of Heart Surgery",
      type: "Specialized Cardiac Center",
      beds: "200+ beds",
      specialties: ["Cardiac Surgery", "Interventional Cardiology", "Pediatric Cardiology"],
      location: "Bishkek"
    },
    {
      name: "Republican Clinical Hospital",
      type: "Teaching Hospital",
      beds: "600+ beds",
      specialties: ["Internal Medicine", "Surgery", "Obstetrics", "Pediatrics"],
      location: "Bishkek"
    },
    {
      name: "Osh Regional Hospital",
      type: "Regional Medical Center",
      beds: "400+ beds",
      specialties: ["General Medicine", "Surgery", "Emergency Care"],
      location: "Osh"
    }
  ];

  const facilities = [
    {
      title: "Modern Laboratories",
      description: "State-of-the-art pathology, microbiology, and biochemistry labs with latest equipment",
      icon: <Microscope className="w-8 h-8 text-blue-600" />,
      details: [
        "Digital microscopy systems",
        "Automated analyzers",
        "PCR and molecular diagnostic equipment",
        "Tissue processing units"
      ]
    },
    {
      title: "Simulation Centers",
      description: "Advanced medical simulation labs for hands-on training before real patient interaction",
      icon: <Activity className="w-8 h-8 text-green-600" />,
      details: [
        "High-fidelity patient simulators",
        "Surgical training models",
        "Emergency response scenarios",
        "Virtual reality medical training"
      ]
    },
    {
      title: "Digital Libraries",
      description: "Comprehensive medical libraries with access to international journals and databases",
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      details: [
        "Access to PubMed and medical databases",
        "Digital textbooks and journals",
        "Research paper repositories",
        "24/7 online access"
      ]
    },
    {
      title: "Student Accommodation",
      description: "Comfortable hostel facilities with modern amenities for international students",
      icon: <Building2 className="w-8 h-8 text-orange-600" />,
      details: [
        "Furnished rooms with Wi-Fi",
        "Common areas and study rooms",
        "Cafeteria with Indian food options",
        "24/7 security and support"
      ]
    }
  ];

  const admissionProcess = [
    {
      step: 1,
      title: "NEET Qualification",
      description: "Clear NEET with minimum qualifying percentile",
      timeline: "May-June"
    },
    {
      step: 2,
      title: "University Selection",
      description: "Choose university and submit application with documents",
      timeline: "June-July"
    },
    {
      step: 3,
      title: "Document Verification",
      description: "University verifies documents and academic credentials",
      timeline: "July-August"
    },
    {
      step: 4,
      title: "Admission Letter",
      description: "Receive official admission letter and fee payment details",
      timeline: "August"
    },
    {
      step: 5,
      title: "Visa Processing",
      description: "Apply for student visa with admission documents",
      timeline: "August-September"
    },
    {
      step: 6,
      title: "Travel & Enrollment",
      description: "Travel to Kyrgyzstan and complete enrollment process",
      timeline: "September"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 rounded-full p-4">
                <GraduationCap className="w-16 h-16" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">MBBS in Kyrgyzstan</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Pursue your medical dreams with world-class education at affordable costs. 
              WHO/MCI recognized universities offering quality medical education in English medium.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold">
                WHO Recognized
              </span>
              <span className="bg-purple-500 text-white px-4 py-2 rounded-full font-semibold">
                MCI Approved
              </span>
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">
                English Medium
              </span>
            </div>
          </div>

          {/* Course Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseHighlights.map((highlight, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-blue-200 mb-3">{highlight.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                <p className="text-blue-100 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Course Overview */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <BookOpen className="w-8 h-8 text-red-600 mr-3" />
              Course Overview
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Program Structure</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                    <div>
                      <p className="font-semibold text-blue-900">Duration: 6 Years</p>
                      <p className="text-blue-700 text-sm">5 years academic study + 1 year internship</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <Globe className="w-6 h-6 text-green-600 mr-3" />
                    <div>
                      <p className="font-semibold text-green-900">Medium of Instruction</p>
                      <p className="text-green-700 text-sm">Complete course taught in English</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <Award className="w-6 h-6 text-purple-600 mr-3" />
                    <div>
                      <p className="font-semibold text-purple-900">Recognition</p>
                      <p className="text-purple-700 text-sm">WHO, MCI, UNESCO approved</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Kyrgyzstan?</h3>
                <ul className="space-y-3">
                  {[
                    "Affordable tuition fees compared to private colleges in India",
                    "No donation or capitation fees required",
                    "Direct admission without entrance exams (NEET qualified)",
                    "Safe and student-friendly environment",
                    "Similar climate and culture to India",
                    "Easy visa process for Indian students",
                    "Quality education with modern facilities",
                    "Opportunity to practice in India after clearing MCI screening"
                  ].map((point, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
              Eligibility Criteria
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {eligibilityCriteria.map((criterion, index) => (
                <div key={index} className="flex items-start p-4 bg-green-50 rounded-lg border border-green-200">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{criterion}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">Important Note for Indian Students</h3>
              <p className="text-yellow-800">
                NEET qualification is mandatory for Indian students as per MCI guidelines. Students must also 
                clear the Foreign Medical Graduate Examination (FMGE) to practice in India after graduation.
              </p>
            </div>
          </div>
        </section>

        {/* Fee Structure */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <DollarSign className="w-8 h-8 text-green-600 mr-3" />
              Fee Structure
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {topUniversities.map((university, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{university.name}</h3>
                    <p className="text-gray-600 flex items-center justify-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {university.city}
                    </p>
                    <p className="text-sm text-blue-600 font-medium mt-1">{university.ranking}</p>
                  </div>
                  
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-green-600 mb-1">{university.tuitionFee}</div>
                    <p className="text-gray-600 text-sm">Annual Tuition Fee</p>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Established:</span> {university.established}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    {university.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <Star className="w-4 h-4 text-yellow-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-red-50 rounded-lg border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-4">Additional Costs (Approximate)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">$800-1200</div>
                  <div className="text-sm text-red-800">Hostel (Annual)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">$200-300</div>
                  <div className="text-sm text-red-800">Food (Monthly)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">$100-150</div>
                  <div className="text-sm text-red-800">Books (Annual)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">$50-100</div>
                  <div className="text-sm text-red-800">Misc (Monthly)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Syllabus */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <BookOpen className="w-8 h-8 text-red-600 mr-3" />
              Year-wise Syllabus
            </h2>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {yearWiseSyllabus.map((year) => (
                <button
                  key={year.year}
                  onClick={() => setActiveYear(year.year)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeYear === year.year
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Year {year.year}
                </button>
              ))}
            </div>
            
            {yearWiseSyllabus.map((year) => (
              activeYear === year.year && (
                <div key={year.year} className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-2xl font-bold text-red-900 mb-3">{year.title}</h3>
                  <p className="text-red-700 mb-6">{year.focus}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {year.subjects.map((subject, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg border border-red-200 shadow-sm">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-red-600 rounded-full mr-3"></div>
                          <span className="font-medium text-gray-900">{subject}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </section>

        {/* Facilities */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Building2 className="w-8 h-8 text-orange-600 mr-3" />
              University Facilities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facilities.map((facility, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div 
                    className="p-6 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => setOpenFacility(openFacility === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {facility.icon}
                        <div className="ml-4">
                          <h3 className="text-xl font-semibold text-gray-900">{facility.title}</h3>
                          <p className="text-gray-600 mt-1">{facility.description}</p>
                        </div>
                      </div>
                      {openFacility === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </div>
                  
                  {openFacility === index && (
                    <div className="p-6 bg-white border-t border-gray-200">
                      <ul className="space-y-2">
                        {facility.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hospital Affiliations */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Stethoscope className="w-8 h-8 text-red-600 mr-3" />
              Hospital Affiliations & Clinical Training
            </h2>
            
            <p className="text-gray-600 mb-8 text-lg">
              Students get hands-on clinical experience at top-tier hospitals and medical centers 
              across Kyrgyzstan, ensuring comprehensive practical training.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {hospitalAffiliations.map((hospital, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{hospital.name}</h3>
                      <p className="text-red-600 font-medium">{hospital.type}</p>
                      <p className="text-gray-600 flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {hospital.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                        {hospital.beds}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {hospital.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="w-8 h-8 text-red-600 mr-3" />
              Admission Process
            </h2>
            
            <div className="space-y-6">
              {admissionProcess.map((process, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-6">
                    {process.step}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{process.title}</h3>
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                        {process.timeline}
                      </span>
                    </div>
                    <p className="text-gray-700">{process.description}</p>
                  </div>
                  {index < admissionProcess.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-gray-400 ml-6 mt-3" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-red-600 rounded-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Medical Journey?</h2>
            <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of Indian students who have successfully completed their MBBS from Kyrgyzstan. 
              Get personalized guidance and support throughout your admission process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/student/application-form"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                Apply Now
              </Link>
              <button onClick={() => setIsPopupOpen(true)}

              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                Download Brochure
              </button>
              <Link to="/contact-us"
               className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                Contact Counselor
              </Link>
            </div>
          </div>
        </section>
        <DownloadFormPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        universityName="Kyrgyzstan Universities" 
      />
      </div>
    </div>
  );
};