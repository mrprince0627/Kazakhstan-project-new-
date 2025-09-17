import  { useState } from 'react';
import { Search, TrendingUp, TrendingDown, Minus, ChevronUp, ChevronDown, Calendar, Filter } from 'lucide-react';
import ExpandableTextboxProps from "../ExpandableTextboxProps"


interface UniversityData {
  name: string;
  year: number;
  totalApplications: number;
  acceptedStudents: number;
  acceptanceRate: number;
}

const universitiesData: UniversityData[] = [
  // 2023 Data
  {
    name: "S TENTISHEV ASIAN MEDICAL INSTITUTE",
    year: 2023,
    totalApplications: 1450,
    acceptedStudents: 280,
    acceptanceRate: 19.31
  },
  {
    name: "INTERNATIONAL HIGHER SCHOOL OF MEDICINE",
    year: 2023,
    totalApplications: 3800,
    acceptedStudents: 627,
    acceptanceRate: 16.50
  },
  {
    name: "I K AKHUNBAEV KYRGYZ STATE MEDICAL ACADEMY FACULTY OF GENERAL MEDICINE",
    year: 2023,
    totalApplications: 980,
    acceptedStudents: 321,
    acceptanceRate: 32.76
  },
  {
    name: "INTERNATIONAL MEDICAL UNIVERSITY",
    year: 2023,
    totalApplications: 45,
    acceptedStudents: 6,
    acceptanceRate: 13.33
  },
  {
    name: "EURASIAN INTERNATIONAL MEDICAL UNIVERSITY FACULTY OF MEDICINE",
    year: 2023,
    totalApplications: 5,
    acceptedStudents: 0,
    acceptanceRate: 0.00
  },
  {
    name: "BISHKEK INTERNATIONAL MEDICAL INSTITUTE",
    year: 2023,
    totalApplications: 2,
    acceptedStudents: 0,
    acceptanceRate: 0.00
  },
  {
    name: "INTERNATIONAL MEDICAL INSTITUTE INTERNATIONAL UNIVERSITY OF SCIENCE AND BUSINESS",
    year: 2023,
    totalApplications: 1,
    acceptedStudents: 0,
    acceptanceRate: 0.00
  },
  {
    name: "CENTRAL ASIAN INTERNATIONAL MEDICAL UNIVERSITY",
    year: 2023,
    totalApplications: 1,
    acceptedStudents: 0,
    acceptanceRate: 0.00
  },
  {
    name: "BISH INTERNATIONAL MEDICAL INSTITUTE",
    year: 2023,
    totalApplications: 1,
    acceptedStudents: 0,
    acceptanceRate: 0.00
  },
  
  // 2024 Data (Current year from your image)
  {
    name: "S TENTISHEV ASIAN MEDICAL INSTITUTE",
    year: 2024,
    totalApplications: 1590,
    acceptedStudents: 307,
    acceptanceRate: 19.31
  },
  {
    name: "INTERNATIONAL HIGHER SCHOOL OF MEDICINE",
    year: 2024,
    totalApplications: 4112,
    acceptedStudents: 679,
    acceptanceRate: 16.51
  },
  {
    name: "I K AKHUNBAEV KYRGYZ STATE MEDICAL ACADEMY FACULTY OF GENERAL MEDICINE",
    year: 2024,
    totalApplications: 1056,
    acceptedStudents: 346,
    acceptanceRate: 32.77
  },
  {
    name: "INTERNATIONAL MEDICAL UNIVERSITY",
    year: 2024,
    totalApplications: 50,
    acceptedStudents: 7,
    acceptanceRate: 14.00
  },
  {
    name: "EURASIAN INTERNATIONAL MEDICAL UNIVERSITY FACULTY OF MEDICINE",
    year: 2024,
    totalApplications: 8,
    acceptedStudents: 0,
    acceptanceRate: 0.00
  },
  {
    name: "BISHKEK INTERNATIONAL MEDICAL INSTITUTE",
    year: 2024,
    totalApplications: 3,
    acceptedStudents: 0,
    acceptanceRate: 0.00
  },
  {
    name: "INTERNATIONAL MEDICAL INSTITUTE INTERNATIONAL UNIVERSITY OF SCIENCE AND BUSINESS",
    year: 2024,
    totalApplications: 2,
    acceptedStudents: 0,
    acceptanceRate: 0.00
  },
  {
    name: "CENTRAL ASIAN INTERNATIONAL MEDICAL UNIVERSITY",
    year: 2024,
    totalApplications: 1,
    acceptedStudents: 0,
    acceptanceRate: 0.00
  },
  {
    name: "BISH INTERNATIONAL MEDICAL INSTITUTE",
    year: 2024,
    totalApplications: 1,
    acceptedStudents: 0,
    acceptanceRate: 0.00
  },

  // 2025 Data (Projected)
  {
    name: "S TENTISHEV ASIAN MEDICAL INSTITUTE",
    year: 2025,
    totalApplications: 1720,
    acceptedStudents: 332,
    acceptanceRate: 19.30
  },
  {
    name: "INTERNATIONAL HIGHER SCHOOL OF MEDICINE",
    year: 2025,
    totalApplications: 4350,
    acceptedStudents: 718,
    acceptanceRate: 16.50
  },
  {
    name: "I K AKHUNBAEV KYRGYZ STATE MEDICAL ACADEMY FACULTY OF GENERAL MEDICINE",
    year: 2025,
    totalApplications: 1150,
    acceptedStudents: 377,
    acceptanceRate: 32.78
  },
  {
    name: "INTERNATIONAL MEDICAL UNIVERSITY",
    year: 2025,
    totalApplications: 55,
    acceptedStudents: 8,
    acceptanceRate: 14.55
  },
  {
    name: "EURASIAN INTERNATIONAL MEDICAL UNIVERSITY FACULTY OF MEDICINE",
    year: 2025,
    totalApplications: 12,
    acceptedStudents: 1,
    acceptanceRate: 8.33
  },
  {
    name: "BISHKEK INTERNATIONAL MEDICAL INSTITUTE",
    year: 2025,
    totalApplications: 5,
    acceptedStudents: 0,
    acceptanceRate: 0.00
  },
  {
    name: "INTERNATIONAL MEDICAL INSTITUTE INTERNATIONAL UNIVERSITY OF SCIENCE AND BUSINESS",
    year: 2025,
    totalApplications: 3,
    acceptedStudents: 0,
    acceptanceRate: 0.00
  },
  {
    name: "CENTRAL ASIAN INTERNATIONAL MEDICAL UNIVERSITY",
    year: 2025,
    totalApplications: 2,
    acceptedStudents: 0,
    acceptanceRate: 0.00
  },
  {
    name: "BISH INTERNATIONAL MEDICAL INSTITUTE",
    year: 2025,
    totalApplications: 2,
    acceptedStudents: 0,
    acceptanceRate: 0.00
  }
];

type SortField = 'name' | 'totalApplications' | 'acceptedStudents' | 'acceptanceRate';
type SortDirection = 'asc' | 'desc';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedUniversity, setSelectedUniversity] = useState<string | 'all'>('all');
  const [sortField, setSortField] = useState<SortField>('totalApplications');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const availableYears = [...new Set(universitiesData.map(uni => uni.year))].sort();
  const availableUniversities = [...new Set(universitiesData.map(uni => uni.name))].sort();

  const filteredData = universitiesData.filter(university => {
    const matchesSearch = university.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === 'all' || university.year === selectedYear;
    const matchesUniversity = selectedUniversity === 'all' || university.name === selectedUniversity;
    return matchesSearch && matchesYear && matchesUniversity;
  });

  const sortedData = [...filteredData].sort((a, b) => {
    let aVal = a[sortField];
    let bVal = b[sortField];
    
    if (typeof aVal === 'string' && typeof bVal === 'string') {
      aVal = aVal.toLowerCase();
      bVal = bVal.toLowerCase();
    }
    
    if (sortDirection === 'asc') {
      return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
    } else {
      return aVal > bVal ? -1 : aVal < bVal ? 1 : 0;
    }
  });

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const getTrendIcon = (rate: number) => {
    if (rate > 20) return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (rate > 0) return <Minus className="w-4 h-4 text-yellow-500" />;
    return <TrendingDown className="w-4 h-4 text-red-500" />;
  };

  const getAcceptanceRateColor = (rate: number) => {
    if (rate >= 30) return 'text-green-600 bg-green-50';
    if (rate >= 15) return 'text-blue-600 bg-blue-50';
    if (rate > 0) return 'text-orange-600 bg-orange-50';
    return 'text-red-600 bg-red-50';
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? 
      <ChevronUp className="w-4 h-4" /> : 
      <ChevronDown className="w-4 h-4" />;
  };

  const totalApplications = filteredData.reduce((sum, uni) => sum + uni.totalApplications, 0);
  const totalAccepted = filteredData.reduce((sum, uni) => sum + uni.acceptedStudents, 0);
  const overallAcceptanceRate = totalApplications > 0 ? (totalAccepted / totalApplications) * 100 : 0;

  // Year-over-year comparison for selected universities
  const getYearOverYearData = (universityName: string) => {
    return universitiesData
      .filter(uni => uni.name === universityName)
      .sort((a, b) => a.year - b.year);
  };

  const getYearOverYearChange = (universityName: string, metric: keyof UniversityData) => {
    const yearData = getYearOverYearData(universityName);
    if (yearData.length < 2) return null;
    
    const latest = yearData[yearData.length - 1];
    const previous = yearData[yearData.length - 2];
    
    if (typeof latest[metric] === 'number' && typeof previous[metric] === 'number') {
      const change = ((latest[metric] as number) - (previous[metric] as number)) / (previous[metric] as number) * 100;
      return change;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 -mt-10">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">   
          {/* Header Section */}
          <div className="bg-gradient-to-r from-red-500 to-red-700 px-8 py-6 text-white">
            <h1 className="text-3xl font-bold mb-2">Kyrgyzstan Medical Universities</h1>
            <p className="text-blue-100 mb-4">Year-wise Admission Statistics & Performance Comparison</p>
            
            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-blue-200 text-sm">Selected Year</p>
                <p className="text-2xl font-bold">{selectedYear === 'all' ? 'All Years' : selectedYear}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-blue-200 text-sm">Total Applications</p>
                <p className="text-2xl font-bold">{totalApplications.toLocaleString()}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-blue-200 text-sm">Total Accepted</p>
                <p className="text-2xl font-bold">{totalAccepted.toLocaleString()}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-blue-200 text-sm">Overall Acceptance Rate</p>
                <p className="text-2xl font-bold">{overallAcceptanceRate.toFixed(2)}%</p>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search universities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              
              {/* University Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedUniversity}
                  onChange={(e) => setSelectedUniversity(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white min-w-[200px]"
                >
                  <option value="all">All Universities</option>
                  {availableUniversities.map(university => (
                    <option key={university} value={university}>
                      {university.length > 40 ? university.substring(0, 40) + '...' : university}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Year Filter */}
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value === 'all' ? 'all' : parseInt(e.target.value))}
                  className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white min-w-[150px]"
                >
                  <option value="all">All Years</option>
                  {availableYears.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              
              {/* Filter indicator */}
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Filter className="w-4 h-4" />
                <span>Showing {sortedData.length} results</span>
              </div>
            </div>
            
            {/* Active Filters Display */}
            {(selectedUniversity !== 'all' || selectedYear !== 'all' || searchTerm) && (
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm text-gray-600">Active filters:</span>
                {selectedUniversity !== 'all' && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    University: {selectedUniversity.length > 30 ? selectedUniversity.substring(0, 30) + '...' : selectedUniversity}
                    <button
                      onClick={() => setSelectedUniversity('all')}
                      className="ml-2 text-blue-600 hover:text-blue-800"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedYear !== 'all' && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Year: {selectedYear}
                    <button
                      onClick={() => setSelectedYear('all')}
                      className="ml-2 text-green-600 hover:text-green-800"
                    >
                      ×
                    </button>
                  </span>
                )}
                {searchTerm && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    Search: "{searchTerm}"
                    <button
                      onClick={() => setSearchTerm('')}
                      className="ml-2 text-purple-600 hover:text-purple-800"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>

          {/* University-specific Analysis Section */}
          {selectedUniversity !== 'all' && (
            <div className="p-6 bg-gradient-to-r from-indigo-50 to-blue-50 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {selectedUniversity} - Year-wise Performance
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {getYearOverYearData(selectedUniversity).map((yearData, index, array) => {
                  const prevYear = array[index - 1];
                  const applicationChange = prevYear ? 
                    ((yearData.totalApplications - prevYear.totalApplications) / prevYear.totalApplications * 100) : null;
                  const acceptanceChange = prevYear ? 
                    ((yearData.acceptedStudents - prevYear.acceptedStudents) / prevYear.acceptedStudents * 100) : null;
                  const rateChange = prevYear ? 
                    (yearData.acceptanceRate - prevYear.acceptanceRate) : null;

                  return (
                    <div key={yearData.year} className="bg-white rounded-lg shadow-md p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900">{yearData.year}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAcceptanceRateColor(yearData.acceptanceRate)}`}>
                          {yearData.acceptanceRate.toFixed(2)}%
                        </span>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Applications</span>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{yearData.totalApplications.toLocaleString()}</span>
                              {applicationChange !== null && (
                                <span className={`text-xs px-1 py-0.5 rounded ${
                                  applicationChange > 0 ? 'bg-green-100 text-green-700' : 
                                  applicationChange < 0 ? 'bg-red-100 text-red-700' : 
                                  'bg-gray-100 text-gray-700'
                                }`}>
                                  {applicationChange > 0 ? '+' : ''}{applicationChange.toFixed(1)}%
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Accepted</span>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{yearData.acceptedStudents.toLocaleString()}</span>
                              {acceptanceChange !== null && (
                                <span className={`text-xs px-1 py-0.5 rounded ${
                                  acceptanceChange > 0 ? 'bg-green-100 text-green-700' : 
                                  acceptanceChange < 0 ? 'bg-red-100 text-red-700' : 
                                  'bg-gray-100 text-gray-700'
                                }`}>
                                  {acceptanceChange > 0 ? '+' : ''}{acceptanceChange.toFixed(1)}%
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Rate Change</span>
                            <div className="flex items-center gap-2">
                              {rateChange !== null && (
                                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                                  rateChange > 0 ? 'bg-green-100 text-green-700' : 
                                  rateChange < 0 ? 'bg-red-100 text-red-700' : 
                                  'bg-gray-100 text-gray-700'
                                }`}>
                                  {rateChange > 0 ? '+' : ''}{rateChange.toFixed(2)}pp
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    <button
                      onClick={() => handleSort('name')}
                      className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                    >
                      University Name
                      <SortIcon field="name" />
                    </button>
                  </th>
                  {selectedYear === 'all' && (
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Year
                    </th>
                  )}
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    <button
                      onClick={() => handleSort('totalApplications')}
                      className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                    >
                      Total Applications
                      <SortIcon field="totalApplications" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    <button
                      onClick={() => handleSort('acceptedStudents')}
                      className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                    >
                      Accepted Students
                      <SortIcon field="acceptedStudents" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    <button
                      onClick={() => handleSort('acceptanceRate')}
                      className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                    >
                      Acceptance Rate
                      <SortIcon field="acceptanceRate" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    Trend
                  </th>
                  {selectedYear !== 'all' && (
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      YoY Change
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sortedData.map((university, index) => {
                  const yoyChange = getYearOverYearChange(university.name, 'acceptanceRate');
                  return (
                    <tr 
                      key={`${university.name}-${university.year}`} 
                      className="hover:bg-gray-50 transition-colors duration-150"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-sm font-medium text-blue-600">{index + 1}</span>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-900 leading-5">
                              {university.name}
                            </h3>
                          </div>
                        </div>
                      </td>
                      {selectedYear === 'all' && (
                        <td className="px-6 py-4 text-center">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {university.year}
                          </span>
                        </td>
                      )}
                      <td className="px-6 py-4 text-center">
                        <span className="text-lg font-semibold text-gray-900">
                          {university.totalApplications.toLocaleString()}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-lg font-semibold text-gray-900">
                          {university.acceptedStudents.toLocaleString()}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getAcceptanceRateColor(university.acceptanceRate)}`}>
                          {university.acceptanceRate.toFixed(2)}%
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center">
                          {getTrendIcon(university.acceptanceRate)}
                        </div>
                      </td>
                      {selectedYear !== 'all' && (
                        <td className="px-6 py-4 text-center">
                          {yoyChange !== null ? (
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              yoyChange > 0 ? 'bg-green-100 text-green-800' : 
                              yoyChange < 0 ? 'bg-red-100 text-red-800' : 
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {yoyChange > 0 ? '+' : ''}{yoyChange.toFixed(1)}%
                            </span>
                          ) : (
                            <span className="text-gray-400 text-sm">N/A</span>
                          )}
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              Showing {sortedData.length} results 
              {selectedYear !== 'all' && ` for ${selectedYear}`}
              {selectedUniversity !== 'all' && ` for ${selectedUniversity.length > 40 ? selectedUniversity.substring(0, 40) + '...' : selectedUniversity}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>
        </div>

        {/* Year-wise Insights - Only show when no specific university is selected */}
        {selectedUniversity === 'all' && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableYears.map(year => {
              const yearData = universitiesData.filter(uni => uni.year === year);
              const yearTotal = yearData.reduce((sum, uni) => sum + uni.totalApplications, 0);
              const yearAccepted = yearData.reduce((sum, uni) => sum + uni.acceptedStudents, 0);
              const yearRate = yearTotal > 0 ? (yearAccepted / yearTotal) * 100 : 0;
              
              return (
                <div key={year} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{year} Overview</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Applications:</span>
                      <span className="font-medium">{yearTotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Accepted:</span>
                      <span className="font-medium">{yearAccepted.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Rate:</span>
                      <span className="font-medium text-blue-600">{yearRate.toFixed(2)}%</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        
      </div>
      <ExpandableTextboxProps/>
    </div>
  );
}

export default App;