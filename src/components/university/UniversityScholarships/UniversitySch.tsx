import React, { useState, useMemo } from 'react';
import { GraduationCap, BookOpen, DollarSign, Calendar } from 'lucide-react';
import { ScholarshipCard } from './ScholarshipCard';
import { FilterBar } from './FilterBar';
import { RequiredDocuments } from './RequiredDocuments';
import { FAQ } from '../UniversityCourses/FAQ';
import { StatsBanner } from './StatsBanner';
import { ScholarshipDetailPage } from './ScholarshipDetailPage';
import { universities } from './data/scholarships';
import { scholarshipDetails } from './data/scholarshipDetails';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedMode, setSelectedMode] = useState('');
  const [activeSection, setActiveSection] = useState('scholarships');
  const [selectedScholarship, setSelectedScholarship] = useState<{
    universityId: string;
    scholarshipId: string;
  } | null>(null);

  // Flatten all scholarships with university info
  const allScholarships = useMemo(() => {
    return universities.flatMap(university => 
      university.scholarships.map(scholarship => ({
        university,
        scholarship
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

  const handleViewDetails = (universityId: string, scholarshipId: string) => {
    const detailKey = `${universityId}-${scholarshipId}`;
    if (scholarshipDetails[detailKey]) {
      setSelectedScholarship({ universityId, scholarshipId });
    } else {
      alert('Detailed information not available for this scholarship yet.');
    }
  };

  const handleBackToList = () => {
    setSelectedScholarship(null);
  };

  const navigationItems = [
    { id: 'scholarships', label: 'Scholarships', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'documents', label: 'Documents', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'faq', label: 'FAQ', icon: <DollarSign className="w-5 h-5" /> }
  ];

  // If a scholarship is selected, show the detail page
  if (selectedScholarship) {
    const detailKey = `${selectedScholarship.universityId}-${selectedScholarship.scholarshipId}`;
    const scholarshipDetail = scholarshipDetails[detailKey];
    const university = universities.find(u => u.id === selectedScholarship.universityId);
    
    if (scholarshipDetail && university) {
      return (
        <ScholarshipDetailPage
          scholarship={scholarshipDetail}
          universityName={university.name}
          universityLocation={`${university.city}, ${university.country}`}
          onBack={handleBackToList}
        />
      );
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 -mt-10">
     

       
   

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeSection === 'scholarships' && (
          <>
            {/* <StatsBanner /> */}
            
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Scholarships</h2>
              <p className="text-gray-600 text-lg mb-6">
                Discover scholarship opportunities at top medical universities in Kyrgyzstan. 
                Filter by scholarship type, application mode, or search for specific universities.
              </p>
            </div>

            

            {/* Scholarships Grid */}
            {filteredScholarships.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
                {filteredScholarships.map(({ university, scholarship }) => (
                  <ScholarshipCard
                    key={`${university.id}-${scholarship.id}`}
                    university={university}
                    scholarship={scholarship}
                    onViewDetails={handleViewDetails}
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
        )}

        {activeSection === 'documents' && <RequiredDocuments />}
        {activeSection === 'faq' && <FAQ />}
      </main>

     
    </div>
  );
}

export default App;