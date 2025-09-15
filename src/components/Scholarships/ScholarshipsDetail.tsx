import React from "react";
import { useParams } from "react-router-dom";

const ScholarshipDetail: React.FC = () => {
  const { universityId, scholarshipId } = useParams();

  // ab yaha API call ya static data fetch kar sakte ho
  // Example ke liye console:
  console.log("University:", universityId, "Scholarship:", scholarshipId);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Scholarship Details</h1>
      <p>University ID: {universityId}</p>
      <p>Scholarship ID: {scholarshipId}</p>
    </div>
  );
};

export default ScholarshipDetail;
