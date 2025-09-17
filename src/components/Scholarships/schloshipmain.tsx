import  { useState, useMemo ,useEffect } from 'react';
import {  Calendar, CheckSquare, Square, Download } from 'lucide-react';
import { ScholarshipCard } from './ScholarshipCard';
import { FilterBar } from './FilterBar';
import { RequiredDocuments } from './RequiredDocuments';
import { FAQ } from './FAQ';
import { StatsBanner } from './StatsBanner';
import { universities } from './data/scholarships';
import { generateScholarshipPDF } from './pdfGenerator'; // Assuming pdfGenerator exists or will be created

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedMode, setSelectedMode] = useState('');
  const [selectedScholarships, setSelectedScholarships] = useState<string[]>([]);
  const [isDownloading, setIsDownloading] = useState(false);
 

  // Flatten all scholarships with university info
  const allScholarships = useMemo(() => {
    return universities.flatMap(university => 
      university.scholarships.map(scholarship => ({
        university,
        scholarship,
        uniqueId: `${university.id}-${scholarship.name}` // Create a unique ID for each scholarship
      }))
    );
  }, []);

  // Filter scholarships based on search and filters
  const filteredScholarships = useMemo(() => {
    return allScholarships.filter(({ university, scholarship }) => {
      const matchesSearch = 
        university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        university.city.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = !selectedType || scholarship.type === selectedType;
      const matchesMode = !selectedMode || scholarship.applicationMode === selectedMode;
      
      return matchesSearch && matchesType && matchesMode;
    });
  }, [allScholarships, searchTerm, selectedType, selectedMode]);

  const handleScholarshipSelect = (uniqueId: string) => {
    setSelectedScholarships(prev =>
      prev.includes(uniqueId)
        ? prev.filter(id => id !== uniqueId)
        : [...prev, uniqueId]
    );
  };

  const handleSelectAllScholarships = () => {
    if (selectedScholarships.length === filteredScholarships.length) {
      setSelectedScholarships([]);
    } else {
      setSelectedScholarships(filteredScholarships.map(s => s.uniqueId));
    }
  };

  const handleDownloadScholarshipGuides = async () => {
    if (selectedScholarships.length === 0) {
      alert('Please select at least one scholarship to download.');
      return;
    }

    setIsDownloading(true);

    try {
      const selectedData = allScholarships.filter(s => selectedScholarships.includes(s.uniqueId));
      await generateScholarshipPDF(selectedData);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }

    setIsDownloading(false);
  };

  const handleViewDetails = (universityId: string, scholarshipId: string) => {
    // In a real app, this would navigate to a detailed page
    alert(`View details for ${scholarshipId} at ${universityId}`);
  };
useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
     

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8">
            
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
       
          <>
            <StatsBanner />
            
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Scholarships</h2>
              <p className="text-gray-600 text-lg mb-6">
                Discover scholarship opportunities at top medical universities in Kyrgyzstan. 
                Filter by scholarship type, application mode, or search for specific universities.
              </p>
            </div>

            <FilterBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedType={selectedType}
              onTypeChange={setSelectedType}
              selectedMode={selectedMode}
              onModeChange={setSelectedMode}
            />

            {/* Control Panel for Selection and Download */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleSelectAllScholarships}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                  >
                    {selectedScholarships.length === filteredScholarships.length && filteredScholarships.length > 0 ? (
                      <CheckSquare className="h-5 w-5 text-red-600" />
                    ) : (
                      <Square className="h-5 w-5 text-gray-500" />
                    )}
                    <span className="font-medium text-gray-700">
                      {selectedScholarships.length === filteredScholarships.length && filteredScholarships.length > 0 ? 'Deselect All' : 'Select All'}
                    </span>
                  </button>
                  <div className="text-sm text-gray-600">
                    {selectedScholarships.length} of {filteredScholarships.length} selected
                  </div>
                </div>

                <button
                  onClick={handleDownloadScholarshipGuides}
                  disabled={selectedScholarships.length === 0 || isDownloading}
                  className="flex items-center space-x-2 px-6 py-3 bg-red-600 hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <Download className="h-5 w-5" />
                  <span>
                    {isDownloading ? 'Generating PDF...' : 'Download Guides'}
                  </span>
                </button>
              </div>
            </div>

            {/* Results Summary */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filteredScholarships.length}</span> scholarship
                {filteredScholarships.length !== 1 ? 's' : ''} 
                {(searchTerm || selectedType || selectedMode) && (
                  <span> matching your criteria</span>
                )}
              </p>
              
              {(searchTerm || selectedType || selectedMode) && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedType('');
                    setSelectedMode('');
                  }}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {/* Scholarships Grid */}
            {filteredScholarships.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
                {filteredScholarships.map(({ university, scholarship, uniqueId }) => (
                  <ScholarshipCard
                    key={uniqueId}
                    university={university}
                    scholarship={scholarship}
                    onViewDetails={handleViewDetails}
                    isSelected={selectedScholarships.includes(uniqueId)}
                    onSelect={() => handleScholarshipSelect(uniqueId)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Calendar className="w-16 h-16 mx-auto mb-4" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No scholarships found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search criteria or clear the filters to see all available scholarships.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedType('');
                    setSelectedMode('');
                  }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Show All Scholarships
                </button>
              </div>
            )}

            {/* Intake Information */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Intakes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold text-green-700 mb-2">September Intake (Main)</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Application Deadline: July 31st</li>
                    <li>• Classes Begin: September 1st</li>
                    <li>• Most scholarships available</li>
                    <li>• Recommended for fresh graduates</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold text-blue-700 mb-2">February Intake</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Application Deadline: December 31st</li>
                    <li>• Classes Begin: February 1st</li>
                    <li>• Limited scholarships available</li>
                    <li>• Good for gap year students</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
 

         <RequiredDocuments />
     <FAQ />
      </main>

     
    </div>
  );
}

export default App;