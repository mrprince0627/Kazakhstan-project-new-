import { Link } from 'react-router-dom';
import { BookOpen, Clock, Users, Award, Globe, CheckCircle, ArrowRight, GraduationCap,  } from 'lucide-react';

const EducationSystem = () => {
  const systemFeatures = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "International Standards",
      description: "Education system follows international standards with WHO, UNESCO recognition"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "English Medium",
      description: "All programs taught in English with experienced international faculty"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Small Class Sizes",
      description: "Low student-to-teacher ratio ensuring personalized attention"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Practical Learning",
      description: "Emphasis on hands-on experience and clinical practice"
    }
  ];

  const academicStructure = [
    {
      level: "Foundation Year",
      duration: "1 Year",
      description: "Language preparation and basic sciences",
      subjects: ["English Language", "Biology", "Chemistry", "Physics", "Mathematics"]
    },
    {
      level: "Pre-Clinical Years",
      duration: "2-3 Years",
      description: "Theoretical foundation and laboratory work",
      subjects: ["Anatomy", "Physiology", "Biochemistry", "Pathology", "Pharmacology"]
    },
    {
      level: "Clinical Years",
      duration: "2-3 Years",
      description: "Hospital rotations and practical training",
      subjects: ["Internal Medicine", "Surgery", "Pediatrics", "Gynecology", "Psychiatry"]
    },
    {
      level: "Internship",
      duration: "1 Year",
      description: "Supervised clinical practice",
      subjects: ["Clinical Rotations", "Patient Care", "Medical Procedures", "Research"]
    }
  ];

  const gradingSystem = [
    { grade: "A", percentage: "90-100%", gpa: "4.0", description: "Excellent" },
    { grade: "B", percentage: "80-89%", gpa: "3.0-3.9", description: "Good" },
    { grade: "C", percentage: "70-79%", gpa: "2.0-2.9", description: "Satisfactory" },
    { grade: "D", percentage: "60-69%", gpa: "1.0-1.9", description: "Pass" },
    { grade: "F", percentage: "Below 60%", gpa: "0.0", description: "Fail" }
  ];

  return (
    <section id="education-system" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Education System in Kyrgyzstan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understand the comprehensive education system that has produced thousands 
            of successful medical professionals and engineers worldwide.
          </p>
        </div>

        {/* System Overview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                World-Class Education Standards
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Kyrgyzstan's higher education system is built on strong academic foundations 
                with international recognition. The country has been a preferred destination 
                for medical education for over two decades.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Universities follow the European Credit Transfer System (ECTS) making it 
                easier for students to transfer credits and pursue further studies globally.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Key Highlights</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Bologna Process compliant education system</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">ECTS credit system for international mobility</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Quality assurance and regular accreditation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Modern teaching methodologies and technology</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Students in classroom"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-red-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-red-100">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* System Features */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Why Choose Kyrgyzstan's Education System?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {systemFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mx-auto mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Structure */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Academic Structure (Medical Programs)
          </h3>
          <div className="space-y-6">
            {academicStructure.map((level, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="grid lg:grid-cols-4 gap-6 items-center">
                    <div className="lg:col-span-1">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800">{level.level}</h4>
                          <div className="flex items-center text-gray-600 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{level.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-1">
                      <p className="text-gray-600">{level.description}</p>
                    </div>
                    <div className="lg:col-span-2">
                      <div className="flex flex-wrap gap-2">
                        {level.subjects.map((subject, subIndex) => (
                          <span key={subIndex} className="px-3 py-1 bg-red-50 text-red-600 text-sm rounded-full">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grading System */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Grading System
          </h3>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-red-600 text-white">
                  <tr>
                    <th className="text-left p-6 font-semibold">Grade</th>
                    <th className="text-left p-6 font-semibold">Percentage</th>
                    <th className="text-left p-6 font-semibold">GPA</th>
                    <th className="text-left p-6 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {gradingSystem.map((grade, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-6">
                        <span className="text-2xl font-bold text-red-600">{grade.grade}</span>
                      </td>
                      <td className="p-6 text-gray-700">{grade.percentage}</td>
                      <td className="p-6 text-gray-700">{grade.gpa}</td>
                      <td className="p-6 text-gray-700">{grade.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Assessment Methods */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Assessment & Evaluation</h3>
            <p className="text-red-100 text-lg max-w-2xl mx-auto">
              Comprehensive evaluation system ensuring thorough understanding and practical competency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Continuous Assessment</h4>
              <p className="text-red-100">Regular quizzes, assignments, and practical evaluations throughout the semester.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Semester Exams</h4>
              <p className="text-red-100">Comprehensive written and practical examinations at the end of each semester.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Clinical Evaluation</h4>
              <p className="text-red-100">Hands-on assessment in hospitals and clinical settings with real patients.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Join This Excellent Education System?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get detailed information about admission requirements, curriculum, and how to apply 
            to universities in Kyrgyzstan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
              <span>Get Admission Guide</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link to="/contact-us"  
             className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors">
              Schedule Counseling
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSystem;