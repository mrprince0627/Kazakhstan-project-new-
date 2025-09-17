import React, { useState } from 'react';
import { X, DownloadCloud } from 'lucide-react';

interface DownloadFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
  universityName: string;
}

const DownloadFormPopup: React.FC<DownloadFormPopupProps> = ({ isOpen, onClose, universityName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '',
    mobile: '',
    nationality: ''
  });
  const [emailError, setEmailError] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);

  if (!isOpen) return null;

  const validateEmail = (email: string) => {
    if (!email) {
      return 'Email is required.';
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      return 'Invalid email address.';
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleDownload = () => {
    const error = validateEmail(formData.email);
    if (error) {
      setEmailError(error);
      return;
    }
    setEmailError('');
    setIsDownloading(true);

    setTimeout(() => {
      alert(`Downloading brochure for ${universityName} to ${formData.email}`);
      setIsDownloading(false);
      onClose();
      setFormData({ name: '', email: '', countryCode: '', mobile: '', nationality: '' });
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="text-center mb-6">
          <DownloadCloud className="w-12 h-12 text-blue-500 mx-auto mb-2" />
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Download Brochure</h2>
          <p className="text-gray-600">Fill in the details to download the brochure for {universityName}.</p>
        </div>

        <div className="mb-4 space-y-3">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              disabled={isDownloading}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              className={`w-full px-4 py-2 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-blue-500 focus:border-blue-500`}
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              disabled={isDownloading}
            />
            {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Phone Number</label>
            <div className="flex gap-2">
              <select
                id="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                disabled={isDownloading}
                className="w-[90px] px-2 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-700 bg-white"
              >
                <option value="">Code</option>
                <option value="+91">+91 (India)</option>
                <option value="+60">+60 (Malaysia)</option>
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+61">+61 (Australia)</option>
              </select>
              <input
                type="text"
                id="mobile"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="1234567890"
                value={formData.mobile}
                onChange={handleChange}
                disabled={isDownloading}
              />
            </div>
          </div>

          <div>
            <label htmlFor="nationality" className="block text-gray-700 text-sm font-medium mb-1">Nationality</label>
            <input
              type="text"
              id="nationality"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Nationality"
              value={formData.nationality}
              onChange={handleChange}
              disabled={isDownloading}
            />
          </div>
        </div>

        <button
          onClick={handleDownload}
          className="w-full bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition-colors flex items-center justify-center"
          disabled={isDownloading}
        >
          {isDownloading ? (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <DownloadCloud className="w-5 h-5 mr-2" />
          )}
          {isDownloading ? 'Downloading...' : 'Download Now'}
        </button>
      </div>
    </div>
  );
};

export default DownloadFormPopup;