import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  MapPin, 
  GraduationCap, 
  FileText, 
  Upload,
  Search,
  Filter,
  Star,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
  MessageCircle
} from 'lucide-react';
import { mockUniversities } from './mockData';
import { University, Course, Student } from './index';
import ChatWidget from './ChatWidget';

interface ApplicationData {
  studentData: Partial<Student>;
  selectedUniversity: University | null;
  selectedCourse: Course | null;
  documents: {[key: string]: File | null};
  submittedDate: string;
}

interface ApplicationFormProps {
  onApplicationSubmit: (applicationData: ApplicationData) => void;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ onApplicationSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [showChat, setShowChat] = useState(false);

  const [studentData, setStudentData] = useState<Partial<Student>>({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      nationality: '',
      passportNumber: '',
      address: {
        street: '',
        city: '',
        state: '',
        country: '',
        zipCode: ''
      }
    },
    academicInfo: {
      currentEducationLevel: '',
      institution: '',
      gpa: '',
      graduationDate: '',
      fieldOfStudy: '',
      englishProficiency: {
        testType: '',
        score: '',
        testDate: ''
      }
    },
    preferences: {
      preferredCountries: [],
      preferredUniversities: [],
      intakeYear: '',
      intakeSemester: ''
    }
  });

  const [documents, setDocuments] = useState<{[key: string]: File | null}>({
    transcript: null,
    personalStatement: null,
    recommendation: null,
    resume: null,
    englishTest: null
  });

  const steps = [
    { id: 1, title: 'Personal Information', icon: User },
    { id: 2, title: 'Academic Background', icon: GraduationCap },
    { id: 3, title: 'University Selection', icon: Search },
    { id: 4, title: 'Documents Upload', icon: Upload },
    { id: 5, title: 'Review & Submit', icon: CheckCircle }
  ];

  const filteredUniversities = mockUniversities.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         uni.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = !countryFilter || uni.country === countryFilter;
    return matchesSearch && matchesCountry;
  });

  const countries = [...new Set(mockUniversities.map(uni => uni.country))];

  const handleInputChange = (section: keyof Student, field: string, value: string) => {
    setStudentData(prev => ({
      ...prev,
      [section]: {
        ...((prev[section] as object) || {}),
        [field]: value
      }
    }));
  };

  const handleAddressChange = (field: string, value: string) => {
    setStudentData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo!,
        address: {
          ...prev.personalInfo!.address,
          [field]: value
        }
      }
    }));
  };

  const handleEnglishProficiencyChange = (field: string, value: string) => {
    setStudentData(prev => ({
      ...prev,
      academicInfo: {
        ...prev.academicInfo!,
        englishProficiency: {
          ...prev.academicInfo!.englishProficiency,
          [field]: value
        }
      }
    }));
  };

  const handleFileUpload = (documentType: string, file: File) => {
    setDocuments(prev => ({
      ...prev,
      [documentType]: file
    }));
  };

  const handleSubmit = () => {
    const applicationData = {
      studentData,
      selectedUniversity,
      selectedCourse,
      documents,
      submittedDate: new Date().toISOString()
    };
    onApplicationSubmit(applicationData);
  };

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Personal Information</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
          <div className="relative">
            <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              required
              value={studentData.personalInfo?.firstName || ''}
              onChange={(e) => handleInputChange('personalInfo', 'firstName', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your first name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
          <div className="relative">
            <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              required
              value={studentData.personalInfo?.lastName || ''}
              onChange={(e) => handleInputChange('personalInfo', 'lastName', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your last name"
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="email"
              required
              value={studentData.personalInfo?.email || ''}
              onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              required
              value={studentData.personalInfo?.phone || ''}
              onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="+1-555-123-4567"
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="date"
              required
              value={studentData.personalInfo?.dateOfBirth || ''}
              onChange={(e) => handleInputChange('personalInfo', 'dateOfBirth', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nationality *</label>
          <input
            type="text"
            required
            value={studentData.personalInfo?.nationality || ''}
            onChange={(e) => handleInputChange('personalInfo', 'nationality', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., Indian, American"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Passport Number</label>
          <input
            type="text"
            value={studentData.personalInfo?.passportNumber || ''}
            onChange={(e) => handleInputChange('personalInfo', 'passportNumber', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="A12345678"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-gray-900">Address</h4>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Street Address *</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              required
              value={studentData.personalInfo?.address?.street || ''}
              onChange={(e) => handleAddressChange('street', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="123 Main Street"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
            <input
              type="text"
              required
              value={studentData.personalInfo?.address?.city || ''}
              onChange={(e) => handleAddressChange('city', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="New York"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">State/Province *</label>
            <input
              type="text"
              required
              value={studentData.personalInfo?.address?.state || ''}
              onChange={(e) => handleAddressChange('state', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="NY"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
            <input
              type="text"
              required
              value={studentData.personalInfo?.address?.country || ''}
              onChange={(e) => handleAddressChange('country', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="United States"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ZIP/Postal Code *</label>
            <input
              type="text"
              required
              value={studentData.personalInfo?.address?.zipCode || ''}
              onChange={(e) => handleAddressChange('zipCode', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="10001"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderAcademicInfo = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Academic Background</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Current Education Level *</label>
          <select
            required
            value={studentData.academicInfo?.currentEducationLevel || ''}
            onChange={(e) => handleInputChange('academicInfo', 'currentEducationLevel', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select education level</option>
            <option value="High School">High School</option>
            <option value="Bachelor's Degree">Bachelor's Degree</option>
            <option value="Master's Degree">Master's Degree</option>
            <option value="PhD">PhD</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Current Institution *</label>
          <input
            type="text"
            required
            value={studentData.academicInfo?.institution || ''}
            onChange={(e) => handleInputChange('academicInfo', 'institution', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="University name"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">GPA/Grade *</label>
          <input
            type="text"
            required
            value={studentData.academicInfo?.gpa || ''}
            onChange={(e) => handleInputChange('academicInfo', 'gpa', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="3.8 or 85%"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Graduation Date *</label>
          <input
            type="date"
            required
            value={studentData.academicInfo?.graduationDate || ''}
            onChange={(e) => handleInputChange('academicInfo', 'graduationDate', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Field of Study *</label>
          <input
            type="text"
            required
            value={studentData.academicInfo?.fieldOfStudy || ''}
            onChange={(e) => handleInputChange('academicInfo', 'fieldOfStudy', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Computer Science"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-gray-900">English Proficiency</h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Test Type</label>
            <select
              value={studentData.academicInfo?.englishProficiency?.testType || ''}
              onChange={(e) => handleEnglishProficiencyChange('testType', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select test</option>
              <option value="IELTS">IELTS</option>
              <option value="TOEFL">TOEFL</option>
              <option value="PTE">PTE</option>
              <option value="Duolingo">Duolingo</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Score</label>
            <input
              type="text"
              value={studentData.academicInfo?.englishProficiency?.score || ''}
              onChange={(e) => handleEnglishProficiencyChange('score', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="7.5 or 100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Test Date</label>
            <input
              type="date"
              value={studentData.academicInfo?.englishProficiency?.testDate || ''}
              onChange={(e) => handleEnglishProficiencyChange('testDate', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-gray-900">Study Preferences</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Intake Year *</label>
            <select
              required
              value={studentData.preferences?.intakeYear || ''}
              onChange={(e) => handleInputChange('preferences', 'intakeYear', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select year</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Intake Semester *</label>
            <select
              required
              value={studentData.preferences?.intakeSemester || ''}
              onChange={(e) => handleInputChange('preferences', 'intakeSemester', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select semester</option>
              <option value="Fall">Fall</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUniversitySelection = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">University & Course Selection</h3>
      
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search universities or cities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <select
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
            className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Countries</option>
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-6">
        {filteredUniversities.map(university => (
          <div
            key={university.id}
            className={`border rounded-xl p-6 cursor-pointer transition-all ${
              selectedUniversity?.id === university.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setSelectedUniversity(university)}
          >
            <div className="flex items-start gap-4">
              <img
                src={university.logo}
                alt={university.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-lg font-bold text-gray-900">{university.name}</h4>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600">#{university.ranking}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-3">{university.city}, {university.country}</p>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Requirements:</strong> GPA {university.requirements.minGPA}+, {university.requirements.englishRequirement}
                  </p>
                </div>

                {selectedUniversity?.id === university.id && (
                  <div className="mt-4 space-y-3">
                    <h5 className="font-medium text-gray-900">Available Courses:</h5>
                    {university.courses.map(course => (
                      <div
                        key={course.id}
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          selectedCourse?.id === course.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCourse(course);
                        }}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h6 className="font-medium text-gray-900">{course.name}</h6>
                          <div className="flex items-center gap-1 text-green-600">
                            <DollarSign className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              {course.tuitionFee.toLocaleString()} {course.currency}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{course.degree}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{course.duration}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 mt-2">{course.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedUniversity && selectedCourse && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <p className="text-green-800">
              <strong>Selected:</strong> {selectedCourse.name} at {selectedUniversity.name}
            </p>
          </div>
        </div>
      )}
    </div>
  );

  const renderDocumentUpload = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Document Upload</h3>
      
      <div className="space-y-4">
        {[
          { key: 'transcript', name: 'Academic Transcripts', required: true },
          { key: 'personalStatement', name: 'Personal Statement/SOP', required: true },
          { key: 'recommendation', name: 'Letters of Recommendation', required: true },
          { key: 'resume', name: 'Resume/CV', required: true },
          { key: 'englishTest', name: 'English Test Scores', required: false }
        ].map(doc => (
          <div key={doc.key} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-gray-500" />
                <span className="font-medium text-gray-900">
                  {doc.name} {doc.required && <span className="text-red-500">*</span>}
                </span>
              </div>
              {documents[doc.key] && (
                <CheckCircle className="w-5 h-5 text-green-500" />
              )}
            </div>
            
            <div className="relative">
              <input
                type="file"
                id={doc.key}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFileUpload(doc.key, file);
                }}
                className="hidden"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              />
              <label
                htmlFor={doc.key}
                className="flex items-center justify-center w-full p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors"
              >
                <div className="text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">
                    {documents[doc.key] 
                      ? `Selected: ${documents[doc.key]!.name}`
                      : 'Click to upload or drag and drop'
                    }
                  </p>
                  <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX, JPG, PNG (Max 10MB)</p>
                </div>
              </label>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-1">Document Guidelines:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>All documents must be in English or officially translated</li>
              <li>Transcripts should be official/certified copies</li>
              <li>Personal statement should be 500-1000 words</li>
              <li>Letters of recommendation should be from academic/professional references</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReviewSubmit = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Review & Submit Application</h3>
      
      <div className="space-y-6">
        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="font-medium text-gray-900 mb-4">Personal Information</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <p><strong>Name:</strong> {studentData.personalInfo?.firstName} {studentData.personalInfo?.lastName}</p>
            <p><strong>Email:</strong> {studentData.personalInfo?.email}</p>
            <p><strong>Phone:</strong> {studentData.personalInfo?.phone}</p>
            <p><strong>Nationality:</strong> {studentData.personalInfo?.nationality}</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="font-medium text-gray-900 mb-4">Academic Background</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <p><strong>Education Level:</strong> {studentData.academicInfo?.currentEducationLevel}</p>
            <p><strong>Institution:</strong> {studentData.academicInfo?.institution}</p>
            <p><strong>GPA:</strong> {studentData.academicInfo?.gpa}</p>
            <p><strong>Field of Study:</strong> {studentData.academicInfo?.fieldOfStudy}</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="font-medium text-gray-900 mb-4">Selected Program</h4>
          {selectedUniversity && selectedCourse ? (
            <div className="text-sm">
              <p><strong>University:</strong> {selectedUniversity.name}</p>
              <p><strong>Course:</strong> {selectedCourse.name}</p>
              <p><strong>Degree:</strong> {selectedCourse.degree}</p>
              <p><strong>Duration:</strong> {selectedCourse.duration}</p>
              <p><strong>Tuition Fee:</strong> {selectedCourse.tuitionFee.toLocaleString()} {selectedCourse.currency}</p>
            </div>
          ) : (
            <p className="text-red-500 text-sm">Please select a university and course</p>
          )}
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h4 className="font-medium text-gray-900 mb-4">Uploaded Documents</h4>
          <div className="space-y-2 text-sm">
            {Object.entries(documents).map(([key, file]) => (
              <div key={key} className="flex items-center gap-2">
                {file ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-red-500" />
                )}
                <span className={file ? 'text-green-700' : 'text-red-700'}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}: {file ? file.name : 'Not uploaded'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">Before Submitting:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Review all information for accuracy</li>
                <li>Ensure all required documents are uploaded</li>
                <li>Application fee may be required after submission</li>
                <li>You will receive a confirmation email after submission</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;
            
            return (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  isCompleted 
                    ? 'bg-green-500 border-green-500 text-white' 
                    : isActive 
                      ? 'bg-blue-500 border-blue-500 text-white' 
                      : 'bg-white border-gray-300 text-gray-400'
                }`}>
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <IconComponent className="w-5 h-5" />
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-2 ${
                    isCompleted ? 'bg-green-500' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            {steps.find(s => s.id === currentStep)?.title}
          </h2>
          <p className="text-gray-600">Step {currentStep} of {steps.length}</p>
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        {currentStep === 1 && renderPersonalInfo()}
        {currentStep === 2 && renderAcademicInfo()}
        {currentStep === 3 && renderUniversitySelection()}
        {currentStep === 4 && renderDocumentUpload()}
        {currentStep === 5 && renderReviewSubmit()}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-8 mt-8 border-t border-gray-200">
          <button
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          {currentStep < 5 ? (
            <button
              onClick={() => setCurrentStep(Math.min(5, currentStep + 1))}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!selectedUniversity || !selectedCourse}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Application
            </button>
          )}
        </div>
      </div>

      {/* Chat Widget */}
      <button
        onClick={() => setShowChat(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {showChat && (
        <ChatWidget onClose={() => setShowChat(false)} />
      )}
    </div>
  );
};

export default ApplicationForm;