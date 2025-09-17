
import { ArrowRight, MapPin, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
 import DownloadFormPopup from '../university/DownloadFormPopup';
import { useState } from 'react';


const Hero = () => {
  
 const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section id="home" className="bg-gradient-to-br from-red-600 via-red-700 to-red-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Study <span className="text-yellow-400">MBBS</span> in Kyrgyzstan
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Join one of Central Asia's premier medical institutions. World-class education, 
              international recognition, and affordable fees await you at Kyrgyz Medical University.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-yellow-400" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-blue-200">Bishkek, Kyrgyzstan</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-yellow-400" />
                <div>
                  <p className="font-semibold">Students</p>
                  <p className="text-blue-200">5000+ International</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-6 w-6 text-yellow-400" />
                <div>
                  <p className="font-semibold">WHO Listed</p>
                  <p className="text-blue-200">NMC Approved</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-sm">%</span>
                </div>
                <div>
                  <p className="font-semibold">FMGE Pass Rate</p>
                  <p className="text-blue-200">85% Success Rate</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link  to="/student/application-form"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-yellow-300 transition-all duration-200 transform hover:scale-105">
                <span>Apply Now</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <button  onClick={() => setIsPopupOpen(true)}

               className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-blue-900 transition-all duration-200">
                Download Brochure
              </button>
            </div>
          </div>

          <div className="lg:pl-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-white/20">
                  <span className="text-blue-200">Course Duration</span>
                  <span className="font-semibold">6 Years (5+1 Internship)</span>
                </div>
                <div className="flex justify-between py-3 border-b border-white/20">
                  <span className="text-blue-200">Medium of Instruction</span>
                  <span className="font-semibold">English</span>
                </div>
                <div className="flex justify-between py-3 border-b border-white/20">
                  <span className="text-blue-200">Annual Tuition Fee</span>
                  <span className="font-semibold">$3,500 - $4,500</span>
                </div>
                <div className="flex justify-between py-3 border-b border-white/20">
                  <span className="text-blue-200">Eligibility</span>
                  <span className="font-semibold">50% in PCB</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-blue-200">NEET Requirement</span>
                  <span className="font-semibold">Qualifying Score</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
<DownloadFormPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        universityName="Kyrgyzstan Universities" 
      />
    </section>
    
  );
};

export default Hero;