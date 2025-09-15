import React from 'react';
import { GraduationCap, Phone, Mail, MapPin, Globe, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Universities', href: '#universities' },
    { name: 'About Kyrgyzstan', href: '#about-kyrgyzstan' },
    { name: 'Compare Universities', href: '#compare' },
    { name: 'Scholarships', href: '#scholarships' },
    { name: 'Education System', href: '#education-system' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const universities = [
    { name: 'Kyrgyz State Medical Academy', href: '#' },
    { name: 'International School of Medicine', href: '#' },
    { name: 'Kyrgyz Technical University', href: '#' },
    { name: 'Asian Medical Institute', href: '#' },
    { name: 'Kyrgyz-Turkish Manas University', href: '#' },
    { name: 'View All Universities', href: '#' }
  ];

  const services = [
    { name: 'Admission Assistance', href: '#' },
    { name: 'Visa Support', href: '#' },
    { name: 'Accommodation Help', href: '#' },
    { name: 'Airport Pickup', href: '#' },
    { name: 'Academic Counseling', href: '#' },
    { name: 'Career Guidance', href: '#' }
  ];

  const resources = [
    { name: 'Application Guide', href: '#' },
    { name: 'Scholarship Guide', href: '#' },
    { name: 'Country Information', href: '#' },
    { name: 'Cost Calculator', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Blog', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Study in Kyrgyzstan</h3>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for quality education in Kyrgyzstan. Official representative 
              of Embassy of Kyrgyz Republic in New Delhi.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91-11-2634-2643</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@studyinkyrgyzstan.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Universities */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Top Universities</h4>
            <ul className="space-y-3">
              {universities.map((university, index) => (
                <li key={index}>
                  <a href={university.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {university.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href={resource.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Embassy Information */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="bg-gray-800 rounded-2xl p-6">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-red-400">Embassy of Kyrgyz Republic</h4>
                <p className="text-gray-400 text-sm mb-3">
                  EP-34, Dr. APJ Abdul Kalam Road, New Delhi - 110011
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-red-400" />
                    <span className="text-gray-400">+91-11-2634-2644</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-red-400" />
                    <a href="http://www.kyrgyzembassy.in" target="_blank" rel="noopener noreferrer" 
                       className="text-red-400 hover:text-red-300 transition-colors">
                      Official Website
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
                  Contact Embassy
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
              <div className="flex space-x-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400"
                />
                <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Study in Kyrgyzstan. All rights reserved. | Official Partner of Embassy of Kyrgyz Republic
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;