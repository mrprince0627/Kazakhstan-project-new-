
import { GraduationCap, BookOpen, Users, Building2, Award, TrendingUp, Globe, Calendar,  Target, Clock, FileText, Languages, CheckCircle, School, CaseSensitive as University,  Code, Stethoscope, Calculator, PenTool } from 'lucide-react';

function App() {
  const educationStructure = [
    {
      level: "Pre-Primary Education",
      age: "3-6 years",
      duration: "3-4 years",
      compulsory: false,
      description: "Early childhood development focusing on social skills, basic literacy, and school readiness",
      institutions: "1,200+ kindergartens",
      icon: <Users className="w-6 h-6" />,
      details: [
        "Play-based learning approach",
        "Development of social and motor skills",
        "Introduction to basic concepts",
        "Preparation for primary education"
      ]
    },
    {
      level: "Primary Education",
      age: "7-10 years", 
      duration: "4 years",
      compulsory: true,
      description: "Foundation education covering basic literacy, numeracy, and fundamental knowledge",
      institutions: "2,200+ primary schools",
      icon: <BookOpen className="w-6 h-6" />,
      details: [
        "Reading, writing, and arithmetic",
        "Introduction to sciences and social studies",
        "Physical education and arts",
        "Development of learning habits"
      ]
    },
    {
      level: "Basic Secondary Education",
      age: "11-15 years",
      duration: "5 years",
      compulsory: true,
      description: "Core secondary education with comprehensive subject coverage",
      institutions: "1,800+ basic schools",
      icon: <School className="w-6 h-6" />,
      details: [
        "Mathematics, sciences, languages",
        "History, geography, literature",
        "Technology and computer studies",
        "Preparation for upper secondary"
      ]
    },
    {
      level: "Upper Secondary Education",
      age: "16-17 years",
      duration: "2 years",
      compulsory: false,
      description: "Specialized education preparing students for higher education or vocational training",
      institutions: "900+ secondary schools",
      icon: <GraduationCap className="w-6 h-6" />,
      details: [
        "Academic or vocational tracks",
        "Advanced subject specialization",
        "University entrance preparation",
        "Career guidance and counseling"
      ]
    }
  ];

  const examinations = [
    {
      name: "Primary School Completion",
      grade: "Grade 4",
      subjects: ["Kyrgyz Language", "Mathematics", "Russian Language"],
      type: "School-based assessment"
    },
    {
      name: "Basic Secondary Certificate",
      grade: "Grade 9", 
      subjects: ["Core subjects", "Elective subjects"],
      type: "State examination"
    },
    {
      name: "General Secondary Certificate",
      grade: "Grade 11",
      subjects: ["Mandatory subjects", "Specialized subjects"],
      type: "State examination (ORT)"
    }
  ];

  const languages = [
    {
      language: "Kyrgyz",
      status: "Official state language",
      usage: "Primary medium of instruction in most schools",
      percentage: "65%"
    },
    {
      language: "Russian", 
      status: "Official language",
      usage: "Medium of instruction in Russian-language schools",
      percentage: "30%"
    },
    {
      language: "English",
      status: "Foreign language",
      usage: "Taught as subject, some international schools",
      percentage: "5%"
    }
  ];

  const higherEducationTypes = [
    {
      type: "Universities",
      count: "32",
      description: "Comprehensive institutions offering bachelor's, master's, and doctoral programs",
      icon: <University className="w-8 h-8" />
    },
    {
      type: "Academies",
      count: "8", 
      description: "Specialized institutions focusing on specific fields like arts, agriculture, or medicine",
      icon: <Building2 className="w-8 h-8" />
    },
    {
      type: "Institutes",
      count: "15",
      description: "Technical and professional institutions offering specialized programs",
      icon: <School className="w-8 h-8" />
    }
  ];

  const popularFields = [
    {
      field: "Medicine",
      icon: <Stethoscope className="w-6 h-6" />,
      description: "Medical education with international recognition",
      universities: "6 medical universities",
      duration: "6 years"
    },
    {
      field: "Engineering",
      icon: <Calculator className="w-6 h-6" />,
      description: "Technical and engineering programs",
      universities: "12 technical institutions", 
      duration: "4-5 years"
    },
    {
      field: "Information Technology",
      icon: <Code className="w-6 h-6" />,
      description: "Computer science and IT programs",
      universities: "18 institutions",
      duration: "4 years"
    },
    {
      field: "Humanities",
      icon: <PenTool className="w-6 h-6" />,
      description: "Languages, literature, and social sciences",
      universities: "25 institutions",
      duration: "4 years"
    }
  ];

  const degreeRecognition = [
    {
      level: "Bachelor's Degree",
      duration: "4 years",
      credits: "240 ECTS credits",
      recognition: "Internationally recognized"
    },
    {
      level: "Master's Degree", 
      duration: "2 years",
      credits: "120 ECTS credits",
      recognition: "Bologna Process aligned"
    },
    {
      level: "PhD/Doctorate",
      duration: "3-4 years",
      credits: "180-240 ECTS credits", 
      recognition: "Research-focused programs"
    }
  ];

  const statistics = [
    { label: "Literacy Rate", value: "99.5%", icon: <BookOpen className="w-8 h-8" /> },
    { label: "Primary Enrollment", value: "98.7%", icon: <Users className="w-8 h-8" /> },
    { label: "Secondary Completion", value: "89.2%", icon: <Award className="w-8 h-8" /> },
    { label: "Higher Education Institutions", value: "55", icon: <Building2 className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 rounded-full p-4">
                <GraduationCap className="w-16 h-16" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Education System of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400">
                Kyrgyzstan
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              A comprehensive guide to Kyrgyzstan's educational landscape, from early childhood 
              development through higher education, showcasing the nation's commitment to quality education and international standards.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Introduction to Kyrgyzstan's Education System</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Kyrgyzstan's education system is built on a foundation of accessibility, quality, and cultural preservation. 
              The government plays a central role in regulating and developing educational policies that serve the nation's diverse population.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Government Regulation</h3>
              <p className="text-gray-600">The Ministry of Education and Science oversees policy development, curriculum standards, and quality assurance across all educational levels.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cultural Importance</h3>
              <p className="text-gray-600">Education is highly valued in Kyrgyz society, serving as a pathway to social mobility and preserving cultural heritage while embracing modernization.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Development</h3>
              <p className="text-gray-600">The system continuously evolves through reforms and international partnerships to meet global standards and prepare students for the modern economy.</p>
            </div>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center border border-gray-200">
                <div className="text-red-600 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* School Education Structure */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">School Education Structure</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kyrgyzstan's school system is structured in four main levels, with compulsory education 
            from ages 7-15, ensuring comprehensive development and preparation for higher education or vocational training.
          </p>
        </div>

        <div className="space-y-8">
          {educationStructure.map((level, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      {level.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{level.level}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {level.age}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {level.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      level.compulsory 
                        ? 'bg-red-100 text-red-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {level.compulsory ? 'Compulsory' : 'Optional'}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Building2 className="w-4 h-4 mr-2" />
                    {level.institutions}
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <p className="text-gray-600 mb-6 leading-relaxed">{level.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {level.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Examinations System */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <FileText className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Examination System</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kyrgyzstan employs a comprehensive examination system to assess student progress 
              and ensure educational quality at each level of schooling.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {examinations.map((exam, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                    {exam.grade}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{exam.name}</h3>
                  <p className="text-red-600 font-semibold">{exam.type}</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Subjects:</h4>
                  {exam.subjects.map((subject, subIndex) => (
                    <div key={subIndex} className="flex items-center">
                      <Award className="w-4 h-4 text-red-500 mr-2" />
                      <span className="text-gray-700">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Language of Instruction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <Languages className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Languages of Instruction</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kyrgyzstan's multilingual education system reflects the country's linguistic diversity, 
            with instruction available in multiple languages to serve different communities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {languages.map((lang, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-red-600 mb-2">{lang.percentage}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{lang.language}</h3>
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                  {lang.status}
                </div>
              </div>
              <p className="text-gray-600 text-center leading-relaxed">{lang.usage}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Higher Education */}
      <div className="bg-gradient-to-br from-orange-600 via-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6">
              <University className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Higher Education in Kyrgyzstan</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Kyrgyzstan's higher education system comprises diverse institutions offering internationally 
              recognized programs aligned with the Bologna Process, preparing students for global careers.
            </p>
          </div>

          {/* Types of Institutions */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">Types of Higher Education Institutions</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {higherEducationTypes.map((type, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 text-center">
                  <div className="text-white mb-6 flex justify-center">
                    {type.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2">{type.count}</div>
                  <h4 className="text-xl font-bold mb-4">{type.type}</h4>
                  <p className="text-blue-100">{type.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Fields */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">Popular Fields of Study</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularFields.map((field, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20">
                  <div className="flex items-center mb-4">
                    <div className="bg-white bg-opacity-20 rounded-full p-2 mr-3">
                      {field.icon}
                    </div>
                    <h4 className="text-lg font-bold">{field.field}</h4>
                  </div>
                  <p className="text-blue-100 text-sm mb-4">{field.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-blue-200">
                      <Building2 className="w-4 h-4 mr-2" />
                      {field.universities}
                    </div>
                    <div className="flex items-center text-blue-200">
                      <Clock className="w-4 h-4 mr-2" />
                      {field.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Degree Recognition */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12">Degree Recognition & Bologna Process</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {degreeRecognition.map((degree, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
                  <div className="text-center mb-6">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 py-2 rounded-full text-sm font-bold inline-block mb-4">
                      {degree.duration}
                    </div>
                    <h4 className="text-xl font-bold mb-2">{degree.level}</h4>
                    <p className="text-blue-200 text-sm">{degree.credits}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center text-green-300 mb-2">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="font-semibold">{degree.recognition}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 max-w-4xl mx-auto">
                <h4 className="text-2xl font-bold mb-4">Bologna Process Alignment</h4>
                <p className="text-blue-100 leading-relaxed">
                  Kyrgyzstan has aligned its higher education system with the Bologna Process, ensuring 
                  international recognition of degrees, credit transfer opportunities, and enhanced student 
                  mobility across European and international institutions. This alignment facilitates 
                  academic cooperation and provides students with globally competitive qualifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
}

export default App;