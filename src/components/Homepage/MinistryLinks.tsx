import React from 'react';
import { ExternalLink, Building2, Globe, FileText, Phone, Mail } from 'lucide-react';

const MinistryLinks = () => {
  const ministries = [
    {
      name: "Ministry of Education and Science",
      nameKyrgyz: "Билим берүү жана илим министрлиги",
      description: "Primary ministry overseeing higher education and university accreditation",
      website: "http://edu.gov.kg",
      contact: "+996 312 623-239",
      email: "info@edu.gov.kg",
      services: ["University Accreditation", "Education Policy", "Student Affairs", "Quality Assurance"],
      icon: <Building2 className="w-8 h-8" />
    },
    {
      name: "State Agency for Vocational Education",
      nameKyrgyz: "Кесиптик билим берүү боюнча мамлекеттик агенттик",
      description: "Responsible for technical and vocational education programs",
      website: "http://vet.edu.gov.kg",
      contact: "+996 312 664-847",
      email: "info@vet.edu.gov.kg",
      services: ["Technical Education", "Vocational Training", "Skills Development", "Industry Partnerships"],
      icon: <Building2 className="w-8 h-8" />
    },
    {
      name: "National Academy of Sciences",
      nameKyrgyz: "Кыргыз Республикасынын Улуттук илимдер академиясы",
      description: "Leading scientific research institution and higher education oversight",
      website: "http://nas.kg",
      contact: "+996 312 661-181",
      email: "info@nas.kg",
      services: ["Research Programs", "Scientific Collaboration", "Graduate Studies", "International Projects"],
      icon: <Building2 className="w-8 h-8" />
    },
    {
      name: "Ministry of Health",
      nameKyrgyz: "Саламаттык сактоо министрлиги",
      description: "Oversees medical education standards and healthcare training",
      website: "http://med.kg",
      contact: "+996 312 661-205",
      email: "info@med.kg",
      services: ["Medical Education", "Healthcare Standards", "Clinical Training", "Medical Licensing"],
      icon: <Building2 className="w-8 h-8" />
    },
    {
      name: "State Committee for Information Technologies",
      nameKyrgyz: "Маалыматтык технологиялар боюнча мамлекеттик комитет",
      description: "Promotes IT education and digital transformation in universities",
      website: "http://ict.gov.kg",
      contact: "+996 312 906-306",
      email: "info@ict.gov.kg",
      services: ["IT Education", "Digital Infrastructure", "Technology Standards", "Innovation Programs"],
      icon: <Building2 className="w-8 h-8" />
    },
    {
      name: "Ministry of Foreign Affairs",
      nameKyrgyz: "Тышкы иштер министрлиги",
      description: "Handles international education agreements and student visa matters",
      website: "http://mfa.gov.kg",
      contact: "+996 312 622-545",
      email: "info@mfa.gov.kg",
      services: ["Student Visas", "International Agreements", "Educational Partnerships", "Diplomatic Relations"],
      icon: <Building2 className="w-8 h-8" />
    }
  ];

  const embassyInfo = {
    name: "Embassy of Kyrgyz Republic in India",
    address: "EP-34, Dr. APJ Abdul Kalam Road, New Delhi - 110011",
    phone: "+91-11-2634-2643, +91-11-2634-2644",
    email: "kyrgyzembassy.india@gmail.com",
    website: "http://www.kyrgyzembassy.in",
    consular: "consular.kyrgyzembassy@gmail.com",
    hours: "Monday to Friday: 9:00 AM - 6:00 PM"
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Official Government Links
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Direct access to official ministries and government agencies responsible 
            for education in Kyrgyzstan. Get authentic information and official support.
          </p>
        </div>

        {/* Embassy Information */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 mb-16 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Embassy of Kyrgyz Republic, New Delhi</h3>
              <p className="text-red-100 mb-6">
                Your primary point of contact for all education-related queries, visa applications, 
                and official documentation for studying in Kyrgyzstan.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Building2 className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-red-100">{embassyInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="text-red-100">{embassyInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="text-red-100">{embassyInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 flex-shrink-0" />
                  <a href={embassyInfo.website} target="_blank" rel="noopener noreferrer" 
                     className="text-yellow-300 hover:text-yellow-200 transition-colors">
                    {embassyInfo.website}
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="text-xl font-semibold mb-4">Office Hours</h4>
              <p className="text-red-100 mb-4">{embassyInfo.hours}</p>
              <h4 className="text-xl font-semibold mb-4">Consular Services</h4>
              <p className="text-red-100 mb-4">{embassyInfo.consular}</p>
              <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors w-full">
                Contact Embassy
              </button>
            </div>
          </div>
        </div>

        {/* Ministry Links Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {ministries.map((ministry, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 flex-shrink-0">
                    {ministry.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{ministry.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{ministry.nameKyrgyz}</p>
                    <p className="text-gray-600">{ministry.description}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Contact Information */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Contact Information</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Globe className="w-4 h-4 text-red-600 flex-shrink-0" />
                      <a href={ministry.website} target="_blank" rel="noopener noreferrer" 
                         className="text-red-600 hover:text-red-700 transition-colors text-sm">
                        {ministry.website}
                      </a>
                      <ExternalLink className="w-3 h-3 text-gray-400" />
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-red-600 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{ministry.contact}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-red-600 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{ministry.email}</span>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Services</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {ministry.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <a href={ministry.website} target="_blank" rel="noopener noreferrer"
                   className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
                  <span>Visit Official Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-yellow-800" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-yellow-800 mb-3">Important Notice</h3>
              <p className="text-yellow-700 mb-4">
                Always verify information directly with official government sources. These links connect you 
                to authentic government websites for the most up-to-date and accurate information about 
                education policies, requirements, and procedures.
              </p>
              <ul className="space-y-2 text-yellow-700">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>All university accreditations should be verified through the Ministry of Education</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Visa and immigration matters must be handled through official embassy channels</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Medical education standards are regulated by the Ministry of Health</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Need Assistance with Official Procedures?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team can help you navigate official procedures and connect with the right 
            government departments for your education needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Get Official Guidance
            </button>
            <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors">
              Embassy Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinistryLinks;