import  { useState , useEffect} from 'react';
import { Check, X, Star, Users, MapPin, DollarSign, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Newanup from './Newanup';

const CompareUniversities = () => {
  const [selectedUniversities, setSelectedUniversities] = useState([1, 2, 3]);

  const universities = [
    {
      id: 1,
      name: "Kyrgyz State Medical Academy",
      location: "Bishkek",
      established: "1939",
      type: "Medical",
      rating: 4.8,
      students: 2500,
      fees: 3500,
      duration: "6 years",
      recognition: ["WHO", "MCI", "UNESCO"],
      programs: ["MBBS", "Dentistry", "Pharmacy"],
      hostel: true,
      library: true,
      labs: true,
      sports: true,
      cafeteria: true,
      wifi: true,
      image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      name: "International School of Medicine",
      location: "Bishkek",
      established: "2003",
      type: "Medical",
      rating: 4.7,
      students: 1800,
      fees: 4000,
      duration: "6 years",
      recognition: ["WHO", "ECFMG", "GMC"],
      programs: ["MBBS", "General Medicine"],
      hostel: true,
      library: true,
      labs: true,
      sports: false,
      cafeteria: true,
      wifi: true,
      image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      name: "Kyrgyz Technical University",
      location: "Bishkek",
      established: "1954",
      type: "Technical",
      rating: 4.6,
      students: 3200,
      fees: 2800,
      duration: "4 years",
      recognition: ["UNESCO", "ABET"],
      programs: ["Engineering", "IT", "Architecture"],
      hostel: true,
      library: true,
      labs: true,
      sports: true,
      cafeteria: true,
      wifi: true,
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      name: "Asian Medical Institute",
      location: "Kant",
      established: "2012",
      type: "Medical",
      rating: 4.5,
      students: 1200,
      fees: 3200,
      duration: "6 years",
      recognition: ["WHO", "MCI"],
      programs: ["MBBS", "Nursing"],
      hostel: true,
      library: true,
      labs: true,
      sports: false,
      cafeteria: true,
      wifi: true,
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const availableUniversities = universities.filter(u => !selectedUniversities.includes(u.id));

  const handleUniversityChange = (index: number, universityId: number) => {
    const newSelected = [...selectedUniversities];
    newSelected[index] = universityId;
    setSelectedUniversities(newSelected);
  };

  const getUniversityById = (id: number) => universities.find(u => u.id === id);
 useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  
  return (
    <section id="compare" className="py-20 bg-gray-50 -mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 -mt-10">
            Compare Universities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make an informed decision by comparing different universities side by side. 
            Analyze fees, programs, facilities, and more.
          </p>
        </div>

        {/* University Selector */}
        <div className="mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            {selectedUniversities.map((selectedId, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  University {index + 1}
                </label>
                <select
                  value={selectedId}
                  onChange={(e) => handleUniversityChange(index, parseInt(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value={selectedId}>
                    {getUniversityById(selectedId)?.name}
                  </option>
                  {availableUniversities.map((university) => (
                    <option key={university.id} value={university.id}>
                      {university.name}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="text-left p-6 font-semibold">Features</th>
                  {selectedUniversities.map((id) => {
                    const university = getUniversityById(id);
                    return (
                      <th key={id} className="text-center p-6 font-semibold min-w-64">
                        <div className="space-y-2">
                          <img 
                            src={university?.image} 
                            alt={university?.name}
                            className="w-16 h-16 rounded-lg mx-auto object-cover"
                          />
                          <div className="text-sm">{university?.name}</div>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {/* Basic Information */}
                <tr className="border-b border-gray-200">
                  <td className="p-6 font-medium text-gray-800 bg-gray-50">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-red-600" />
                      <span>Location</span>
                    </div>
                  </td>
                  {selectedUniversities.map((id) => {
                    const university = getUniversityById(id);
                    return (
                      <td key={id} className="p-6 text-center text-gray-700">
                        {university?.location}
                      </td>
                    );
                  })}
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="p-6 font-medium text-gray-800 bg-gray-50">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-red-600" />
                      <span>Established</span>
                    </div>
                  </td>
                  {selectedUniversities.map((id) => {
                    const university = getUniversityById(id);
                    return (
                      <td key={id} className="p-6 text-center text-gray-700">
                        {university?.established}
                      </td>
                    );
                  })}
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="p-6 font-medium text-gray-800 bg-gray-50">
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-red-600" />
                      <span>Rating</span>
                    </div>
                  </td>
                  {selectedUniversities.map((id) => {
                    const university = getUniversityById(id);
                    return (
                      <td key={id} className="p-6 text-center">
                        <div className="flex items-center justify-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-semibold text-gray-800">{university?.rating}</span>
                        </div>
                      </td>
                    );
                  })}
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="p-6 font-medium text-gray-800 bg-gray-50">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-red-600" />
                      <span>Total Students</span>
                    </div>
                  </td>
                  {selectedUniversities.map((id) => {
                    const university = getUniversityById(id);
                    return (
                      <td key={id} className="p-6 text-center text-gray-700">
                        {university?.students.toLocaleString()}+
                      </td>
                    );
                  })}
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="p-6 font-medium text-gray-800 bg-gray-50">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-5 h-5 text-red-600" />
                      <span>Annual Fees (USD)</span>
                    </div>
                  </td>
                  {selectedUniversities.map((id) => {
                    const university = getUniversityById(id);
                    return (
                      <td key={id} className="p-6 text-center">
                        <span className="font-semibold text-green-600">
                          ${university?.fees.toLocaleString()}
                        </span>
                      </td>
                    );
                  })}
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="p-6 font-medium text-gray-800 bg-gray-50">
                    <div className="flex items-center space-x-2">
                      <Award className="w-5 h-5 text-red-600" />
                      <span>Course Duration</span>
                    </div>
                  </td>
                  {selectedUniversities.map((id) => {
                    const university = getUniversityById(id);
                    return (
                      <td key={id} className="p-6 text-center text-gray-700">
                        {university?.duration}
                      </td>
                    );
                  })}
                </tr>

                {/* Programs */}
                <tr className="border-b border-gray-200">
                  <td className="p-6 font-medium text-gray-800 bg-gray-50">Programs Offered</td>
                  {selectedUniversities.map((id) => {
                    const university = getUniversityById(id);
                    return (
                      <td key={id} className="p-6 text-center">
                        <div className="space-y-1">
                          {university?.programs.map((program, index) => (
                            <span key={index} className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-md mr-1 mb-1">
                              {program}
                            </span>
                          ))}
                        </div>
                      </td>
                    );
                  })}
                </tr>

                {/* Recognition */}
                <tr className="border-b border-gray-200">
                  <td className="p-6 font-medium text-gray-800 bg-gray-50">Recognition</td>
                  {selectedUniversities.map((id) => {
                    const university = getUniversityById(id);
                    return (
                      <td key={id} className="p-6 text-center">
                        <div className="space-y-1">
                          {university?.recognition.map((rec, index) => (
                            <span key={index} className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-md mr-1 mb-1">
                              {rec}
                            </span>
                          ))}
                        </div>
                      </td>
                    );
                  })}
                </tr>

                {/* Facilities */}
                {[
                  { key: 'hostel', label: 'Hostel Facility' },
                  { key: 'library', label: 'Library' },
                  { key: 'labs', label: 'Modern Labs' },
                  { key: 'sports', label: 'Sports Complex' },
                  { key: 'cafeteria', label: 'Cafeteria' },
                  { key: 'wifi', label: 'WiFi Campus' }
                ].map((facility) => (
                  <tr key={facility.key} className="border-b border-gray-200">
                    <td className="p-6 font-medium text-gray-800 bg-gray-50">{facility.label}</td>
                    {selectedUniversities.map((id) => {
                      const university = getUniversityById(id);
                      const hasFeature = university?.[facility.key as keyof typeof university];
                      return (
                        <td key={id} className="p-6 text-center">
                          {hasFeature ? (
                            <Check className="w-6 h-6 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-6 h-6 text-red-500 mx-auto" />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center mt-12 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
            to="/compare" 
            className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Get Detailed Comparison Report
            </Link>
            <Link
            to="/contact-us"
            className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors">
              Schedule Counseling
            </Link>
          </div>
          <p className="text-gray-600 text-sm">
            Need help choosing? Our education counselors are here to assist you.
          </p>
        </div>

        {/* Newanup Component */}
        <div className="mt-16">
          <Newanup />
        </div>
      </div>
    </section>
  );
};

export default CompareUniversities;