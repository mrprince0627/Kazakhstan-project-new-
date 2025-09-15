import React, { useState } from 'react';
import { X, DownloadCloud } from 'lucide-react';

interface DownloadFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
  universityName: string;
}

const DownloadFormPopup: React.FC<DownloadFormPopupProps> = ({ isOpen, onClose, universityName }) => {
  const [email, setEmail] = useState('');
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

  const handleDownload = () => {
    const error = validateEmail(email);
    if (error) {
      setEmailError(error);
      return;
    }
    setEmailError('');
    setIsDownloading(true);

    // Simulate download
    setTimeout(() => {
      alert(`Downloading brochure for ${universityName} to ${email}`);
      setIsDownloading(false);
      onClose();
      setEmail(''); // Clear email after download
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
          <DownloadCloud className="w-12 h-12 text-blue-500 mx-auto mb-3" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Download Brochure</h2>
          <p className="text-gray-600">Enter your email to download the brochure for {universityName}.</p>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            className={`w-full px-4 py-2 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-blue-500 focus:border-blue-500`}
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isDownloading}
          />
          {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
        </div>

        <button
          onClick={handleDownload}
          className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
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