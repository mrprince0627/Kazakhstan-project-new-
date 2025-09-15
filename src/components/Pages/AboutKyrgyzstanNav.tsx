
import { Users, GraduationCap, Globe, Award, Handshake as Target, CheckCircle, Building, Phone, Mail, MapPin, Star, TrendingUp, Shield } from 'lucide-react';

const AboutUs = () => {
  const services = [
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      title: "University Listings",
      description: "Comprehensive database of all recognized MBBS universities in Kyrgyzstan with detailed information, admission requirements, and fee structures."
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Student Counseling",
      description: "Expert guidance and counseling services to help students choose the right university and program that aligns with their career goals."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Admission Assistance",
      description: "End-to-end admission support including document verification, application processing, and visa assistance for international students."
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-600" />,
      title: "International Support",
      description: "Dedicated support for international students including accommodation, travel arrangements, and cultural orientation programs."
    }
  ];

  const partnerBenefits = [
    "Attractive commission structure",
    "Marketing support and materials",
    "Dedicated partner portal access",
    "Regular training and updates",
    "24/7 technical support",
    "Brand recognition and certification"
  ];

  const stats = [
    { number: "25+", label: "Partner Universities" },
    { number: "5000+", label: "Students Placed" },
    { number: "50+", label: "Channel Partners" },
    { number: "15+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-red-600">Kyrgyzstan University</span>
              <br /> 
              <span className="text-red-600 ">MBBS Admission</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner for MBBS education in Kyrgyzstan. We connect ambitious students 
              with world-class medical universities, making quality medical education accessible and affordable.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Explore Universities
              </button>
              <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors">
                Become a Partner
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Target className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Mission</h3>
                    <p className="text-gray-600">
                      To bridge the gap between aspiring medical students and quality education by providing 
                      comprehensive information about MBBS programs in Kyrgyzstan's top universities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Vision</h3>
                    <p className="text-gray-600">
                      To become the most trusted and comprehensive platform for MBBS admissions in Kyrgyzstan, 
                      empowering students to achieve their dreams of becoming medical professionals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">MCI/WHO recognized universities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">Affordable fee structure</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">High-quality medical education</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">English medium instruction</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">Safe and friendly environment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for your MBBS journey in Kyrgyzstan
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Partners */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Channel Partners</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              We work with trusted education consultants and agencies worldwide to reach students globally
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Partner With Us</h3>
              <p className="text-white opacity-90 mb-8 text-lg">
                Join our network of successful channel partners and help students achieve their medical career dreams 
                while building a profitable business relationship with us.
              </p>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white">Partner Benefits:</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {partnerBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="text-white">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Become Our Partner</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Organization Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Tell us about your organization and experience in education consulting"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Apply for Partnership
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Kyrgyzstan */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Study MBBS in Kyrgyzstan?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kyrgyzstan has emerged as a premier destination for medical education, offering world-class facilities at affordable costs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <Building className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">MCI/WHO Approved</h3>
              <p className="text-gray-600">
                All universities are recognized by MCI, WHO, and other international medical councils
              </p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Affordable Fees</h3>
              <p className="text-gray-600">
                Cost-effective medical education with fees starting from $3000 per year
              </p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">English Medium</h3>
              <p className="text-gray-600">
                Complete MBBS program taught in English with experienced international faculty
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to start your MBBS journey? Contact us today for personalized guidance
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-800 rounded-xl">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+91 9876543210</p>
              <p className="text-gray-300">+1 234 567 8900</p>
            </div>
            
            <div className="text-center p-6 bg-gray-800 rounded-xl">
              <Mail className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">info@kyrgyzstanuniversity.com</p>
              <p className="text-gray-300">admissions@mymbbsadmission.com</p>
            </div>
            
            <div className="text-center p-6 bg-gray-800 rounded-xl">
              <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">Education District</p>
              <p className="text-gray-300">New Delhi, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Your Medical Journey Today
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Join thousands of successful doctors who started their journey with us
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;