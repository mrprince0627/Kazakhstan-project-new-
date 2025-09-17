import React, { useState ,useEffect} from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  User, 
  MessageSquare, 

  
  CheckCircle,
  AlertCircle,
  Calendar,
  Video,
  HeadphonesIcon,
 
  ArrowLeft,
  X
} from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  inquiryType: string;
  preferredContact: string;
}

interface ScheduleFormData {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  timezone: string;
  consultationType: string;
  message: string;
}

interface TeamMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  email: string;
  phone: string;
  image: string;
  specialization: string[];
  experience: string;
  languages: string[];
  availability: string;
}

interface ContactTeamProps {
  onBack: () => void;
}

const ContactTeam: React.FC<ContactTeamProps> = ({ onBack }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: '',
    preferredContact: 'email'
  });

  const [scheduleFormData, setScheduleFormData] = useState<ScheduleFormData>({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    timezone: 'IST',
    consultationType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSchedulePopup, setShowSchedulePopup] = useState(false);
  const [isScheduleSubmitting, setIsScheduleSubmitting] = useState(false);
  const [isScheduleSubmitted, setIsScheduleSubmitted] = useState(false);

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Dr. Rajesh Kumar',
      designation: 'Director - International Relations',
      department: 'Leadership',
      email: 'rajesh.kumar@mededu.com',
      phone: '+91 98765 43210',
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialization: ['Medical Education', 'University Partnerships', 'Strategic Planning'],
      experience: '15+ years',
      languages: ['English', 'Hindi', 'Russian'],
      availability: 'Mon-Fri, 9 AM - 6 PM IST'
    },
    {
      id: '2',
      name: 'Priya Sharma',
      designation: 'Head of Admissions',
      department: 'Admissions',
      email: 'priya.sharma@mededu.com',
      phone: '+91 87654 32109',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialization: ['MBBS Admissions', 'Document Verification', 'Student Counseling'],
      experience: '12+ years',
      languages: ['English', 'Hindi', 'Punjabi'],
      availability: 'Mon-Sat, 8 AM - 7 PM IST'
    },
    {
      id: '3',
      name: 'Amit Patel',
      designation: 'Student Support Manager',
      department: 'Student Services',
      email: 'amit.patel@mededu.com',
      phone: '+91 76543 21098',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialization: ['Student Support', 'Accommodation', 'Pre-departure Guidance'],
      experience: '8+ years',
      languages: ['English', 'Hindi', 'Gujarati'],
      availability: 'Mon-Fri, 10 AM - 8 PM IST'
    },
    {
      id: '4',
      name: 'Dr. Sunita Reddy',
      designation: 'Academic Advisor',
      department: 'Academic Affairs',
      email: 'sunita.reddy@mededu.com',
      phone: '+91 65432 10987',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialization: ['Academic Planning', 'Curriculum Guidance', 'Career Counseling'],
      experience: '10+ years',
      languages: ['English', 'Hindi', 'Telugu', 'Tamil'],
      availability: 'Tue-Sat, 9 AM - 5 PM IST'
    },
    {
      id: '5',
      name: 'Vikram Singh',
      designation: 'Partnership Manager',
      department: 'Business Development',
      email: 'vikram.singh@mededu.com',
      phone: '+91 54321 09876',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialization: ['Partnership Development', 'Business Relations', 'Market Expansion'],
      experience: '9+ years',
      languages: ['English', 'Hindi', 'Rajasthani'],
      availability: 'Mon-Fri, 9 AM - 6 PM IST'
    },
    {
      id: '6',
      name: 'Meera Krishnan',
      designation: 'Financial Advisor',
      department: 'Finance & Scholarships',
      email: 'meera.krishnan@mededu.com',
      phone: '+91 43210 98765',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300',
      specialization: ['Financial Planning', 'Scholarship Guidance', 'Education Loans'],
      experience: '11+ years',
      languages: ['English', 'Hindi', 'Malayalam', 'Tamil'],
      availability: 'Mon-Fri, 10 AM - 6 PM IST'
    }
  ];

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleScheduleInputChange = (field: keyof ScheduleFormData, value: string) => {
    setScheduleFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleScheduleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsScheduleSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsScheduleSubmitting(false);
    setIsScheduleSubmitted(true);
  };

  const openSchedulePopup = () => {
    setShowSchedulePopup(true);
  };

  const closeSchedulePopup = () => {
    setShowSchedulePopup(false);
    setIsScheduleSubmitted(false);
    setScheduleFormData({
      name: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      timezone: 'IST',
      consultationType: '',
      message: ''
    });
  };
useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for contacting us. Our team will get back to you within 24 hours.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            For urgent matters, please call us directly at +91 98765 43210
          </p>
          <button 
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '', email: '', phone: '', subject: '', message: '', 
                inquiryType: '', preferredContact: 'email'
              });
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mr-4"
          >
            Send Another Message
          </button>
          <button 
            onClick={onBack}
            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Back to Partners
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={onBack}
            className="flex items-center text-blue-100 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Partners Directory
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <HeadphonesIcon className="w-8 h-8 text-orange-300 mr-3" />
              <span className="text-orange-200 text-lg font-medium">24/7 Support Available</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Contact <span className="text-orange-300">Our Team</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Get in touch with our experienced team of education consultants, admission specialists, 
              and student support professionals. We're here to help you every step of the way.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-300 mb-2">24/7</div>
                <div className="text-blue-200">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-300 mb-2">&lt;24hrs</div>
                <div className="text-blue-200">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-300 mb-2">15+</div>
                <div className="text-blue-200">Languages Supported</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-300 mb-2">98%</div>
                <div className="text-blue-200">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch Instantly</h2>
            <p className="text-xl text-gray-600">Choose your preferred way to reach us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Phone,
                title: 'Call Us',
                description: 'Speak directly with our team',
                contact: '+91 98765 43210',
                action: 'Call Now',
                color: 'bg-green-500',
                available: '24/7 Available'
              },
              {
                icon: Mail,
                title: 'Email Us',
                description: 'Send us your detailed inquiry',
                contact: 'info@mededu.com',
                action: 'Send Email',
                color: 'bg-blue-500',
                available: 'Response within 24hrs'
              },
              {
                icon: MessageSquare,
                title: 'Live Chat',
                description: 'Chat with our support team',
                contact: 'Available on website',
                action: 'Start Chat',
                color: 'bg-purple-500',
                available: 'Mon-Sat, 9 AM - 9 PM'
              },
              {
                icon: Video,
                title: 'Video Call',
                description: 'Schedule a video consultation',
                contact: 'Book appointment',
                action: 'Schedule Call',
                color: 'bg-orange-500',
                available: 'By appointment'
              }
            ].map((option, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 ${option.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <p className="text-sm font-medium text-gray-800 mb-2">{option.contact}</p>
                <p className="text-xs text-green-600 mb-4">{option.available}</p>
                <button 
                  onClick={option.title === 'Video Call' ? openSchedulePopup : undefined}
                  className={`w-full ${option.color} text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity font-medium`}
                >
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated professionals are here to guide you through every step of your medical education journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {member.department}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-2">{member.designation}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.experience} experience</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Mail className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-sm">{member.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-sm">{member.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-sm">{member.availability}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Specializations:</div>
                    <div className="flex flex-wrap gap-1">
                      {member.specialization.slice(0, 2).map((spec, idx) => (
                        <span key={idx} className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                          {spec}
                        </span>
                      ))}
                      {member.specialization.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          +{member.specialization.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Languages:</div>
                    <div className="text-sm text-gray-600">{member.languages.join(', ')}</div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                      Contact Now
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      <Calendar className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type *</label>
                  <select
                    required
                    value={formData.inquiryType}
                    onChange={(e) => handleInputChange('inquiryType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="admission">Admission Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="support">Student Support</option>
                    <option value="general">General Information</option>
                    <option value="complaint">Complaint/Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Brief subject of your inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please provide detailed information about your inquiry..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method</label>
                <div className="flex space-x-4">
                  {['email', 'phone', 'both'].map((method) => (
                    <label key={method} className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value={method}
                        checked={formData.preferredContact === method}
                        onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700 capitalize">{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 mr-3" />
                  <div className="text-sm text-red-800">
                    <p className="font-medium mb-1">Response Time:</p>
                    <ul className="list-disc list-inside space-y-1 text-red-700">
                      <li>General inquiries: Within 24 hours</li>
                      <li>Urgent matters: Within 4 hours</li>
                      <li>Partnership inquiries: Within 48 hours</li>
                    </ul>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-medium flex items-center justify-center ${
                  isSubmitting
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-red-600 text-white hover:bg-red-700'
                } transition-colors`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Offices</h2>
            <p className="text-xl text-gray-600">Visit us at our locations across India</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                city: 'New Delhi',
                address: 'Connaught Place, Central Delhi',
                fullAddress: '123, First Floor, Connaught Place, New Delhi - 110001',
                phone: '+91 11 4567 8901',
                email: 'delhi@mededu.com',
                hours: 'Mon-Sat: 9 AM - 7 PM',
                image: 'https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                city: 'Mumbai',
                address: 'Andheri West, Mumbai',
                fullAddress: '456, Second Floor, Andheri West, Mumbai - 400058',
                phone: '+91 22 9876 5432',
                email: 'mumbai@mededu.com',
                hours: 'Mon-Sat: 9 AM - 7 PM',
                image: 'https://images.pexels.com/photos/1007025/pexels-photo-1007025.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                city: 'Bangalore',
                address: 'Koramangala, Bangalore',
                fullAddress: '789, Third Floor, Koramangala, Bangalore - 560034',
                phone: '+91 80 1234 5678',
                email: 'bangalore@mededu.com',
                hours: 'Mon-Sat: 9 AM - 7 PM',
                image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((office, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={office.image} 
                  alt={office.city}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{office.city} Office</h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 mr-2 mt-0.5 text-gray-400" />
                      <div>
                        <p className="font-medium">{office.address}</p>
                        <p>{office.fullAddress}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{office.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-medium">
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Schedule Call Popup */}
      {showSchedulePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {isScheduleSubmitted ? (
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Appointment Scheduled!</h2>
                <p className="text-gray-600 mb-6">
                  Thank you for scheduling a video consultation. We'll send you a confirmation email with the meeting details.
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Our team will contact you within 24 hours to confirm the appointment.
                </p>
                <button 
                  onClick={closeSchedulePopup}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Video className="w-8 h-8 text-orange-500 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Schedule Video Consultation</h2>
                  </div>
                  <button 
                    onClick={closeSchedulePopup}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <form onSubmit={handleScheduleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          required
                          value={scheduleFormData.name}
                          onChange={(e) => handleScheduleInputChange('name', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          required
                          value={scheduleFormData.email}
                          onChange={(e) => handleScheduleInputChange('email', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          required
                          value={scheduleFormData.phone}
                          onChange={(e) => handleScheduleInputChange('phone', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="+91 88042 04365"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Consultation Type *</label>
                      <select
                        required
                        value={scheduleFormData.consultationType}
                        onChange={(e) => handleScheduleInputChange('consultationType', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select consultation type</option>
                        <option value="admission">Admission Consultation</option>
                        <option value="university">University Selection</option>
                        <option value="documentation">Documentation Help</option>
                        <option value="visa">Visa Guidance</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="date"
                          required
                          value={scheduleFormData.preferredDate}
                          onChange={(e) => handleScheduleInputChange('preferredDate', e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                      <select
                        required
                        value={scheduleFormData.preferredTime}
                        onChange={(e) => handleScheduleInputChange('preferredTime', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select time</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                      <select
                        value={scheduleFormData.timezone}
                        onChange={(e) => handleScheduleInputChange('timezone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="IST">IST (India Standard Time)</option>
                        <option value="UTC">UTC (Coordinated Universal Time)</option>
                        <option value="EST">EST (Eastern Standard Time)</option>
                        <option value="PST">PST (Pacific Standard Time)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
                    <textarea
                      rows={4}
                      value={scheduleFormData.message}
                      onChange={(e) => handleScheduleInputChange('message', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Please provide any additional information about your consultation needs..."
                    />
                  </div>

                  <div className="flex space-x-4">
                    <button
                      type="submit"
                      disabled={isScheduleSubmitting}
                      className={`flex-1 py-4 rounded-lg font-medium flex items-center justify-center ${
                        isScheduleSubmitting
                          ? 'bg-gray-400 text-white cursor-not-allowed'
                          : 'bg-orange-600 text-white hover:bg-orange-700'
                      } transition-colors`}
                    >
                      {isScheduleSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Scheduling...
                        </>
                      ) : (
                        <>
                          <Calendar className="w-5 h-5 mr-2" />
                          Schedule Consultation
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={closeSchedulePopup}
                      className="px-6 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactTeam;