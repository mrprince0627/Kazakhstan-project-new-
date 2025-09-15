import { useState } from 'react';
import ApplicationForm from './ApplicationForm';
import StudentDashboard from './Dashboard';
import { mockApplications, mockStudent } from './mockData';
import { Student, University, Course } from './index';

interface ApplicationData {
  studentData: Partial<Student>;
  selectedUniversity: University | null;
  selectedCourse: Course | null;
  documents: {[key: string]: File | null};
  submittedDate: string;
}

function StudentDashboardContainer() {
  const [currentView, setCurrentView] = useState<'application' | 'dashboard'>('application');
  const [applications, setApplications] = useState(mockApplications);
  const student = mockStudent;

  const handleApplicationSubmit = (applicationData: ApplicationData) => {
    // In a real app, this would send data to the server
    console.log('Application submitted:', applicationData);
    
    // Simulate adding new application
    const newApplication = {
      id: (applications.length + 1).toString(),
      studentId: student.id,
      universityId: applicationData.selectedUniversity?.id || '',
      courseId: applicationData.selectedCourse?.id || '',
      status: 'submitted' as const,
      progress: 100,
      submittedDate: new Date().toISOString().split('T')[0],
      lastUpdated: new Date().toISOString().split('T')[0],
      documents: Object.entries(applicationData.documents)
        .filter(([, file]) => file)
        .map(([type], index) => ({
          id: (index + 1).toString(),
          name: type.charAt(0).toUpperCase() + type.slice(1),
          type: type,
          status: 'uploaded' as const,
          uploadDate: new Date().toISOString().split('T')[0],
          fileUrl: '#'
        })),
      timeline: [
        {
          id: '1',
          date: new Date().toISOString().split('T')[0],
          title: 'Application Submitted',
          description: 'Your application has been successfully submitted.',
          status: 'completed' as const
        },
        {
          id: '2',
          date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          title: 'Document Verification',
          description: 'Documents will be verified by the admissions team.',
          status: 'pending' as const
        }
      ]
    };

    setApplications(prev => [...prev, newApplication]);
    setCurrentView('dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container mx-auto">
        {currentView === 'application' ? (
          <div className="py-12">
            <div className="text-center mb-8">
              <button
                onClick={() => setCurrentView('dashboard')}
                className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Dashboard
              </button>
            </div>
            <ApplicationForm onApplicationSubmit={handleApplicationSubmit} />
          </div>
        ) : (
          <div>
            <div className="p-4 bg-white border-b border-gray-200">
              <button
                onClick={() => setCurrentView('application')}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                New Application
              </button>
            </div>
            <StudentDashboard applications={applications} student={student} />
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentDashboardContainer;