import React from "react";

const UserProfileTable = ({ data }) => {
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <table className="min-w-full bg-white border border-gray-300 divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left bg-gray-100 border-b">
              General Information
            </th>
            <th className="py-2 px-4 text-left bg-gray-100 border-b">
              Details
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {Object.entries(data).map(([key, value]) => (
            <tr key={key}>
              <td className="py-2 px-4 font-semibold">{key}</td>
              <td className="py-2 px-4">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const UserProfile = () => {
  const userData = {
    "Biodata Type": "Groom",
    "Marital Status": "Married",
    "Date of Birth": "dd-----yyyy",
    Height: "",
    Weight: "",
    "Blood Group": "",
    Nationality: "",
    Address: "",
    "Permanent Address": "",
    "Present Address": "",
    "Academic Qualification": "None",
    "Education Type": "",
    "Last Certificate": "",
    "SSC Passing Year": "",
    Department: "",
    "SSC Institute": "",
    "Result (CGPA/Grade)": "",
    "HSC/Diploma": "",
    Subject: "",
    "HSC/Diploma Institute": "",
    "Passing Year": "",
    "Hons Institute Name": "",
    Year: "",
    "Family Information": "",
    "Father Name": "",
    "Mother Name": "",
    "How Many Persons in Family": "",
    "Brother/Sister": "",
    "Financial Status": "Lower Middle Class",
    "Personal Details": "",
    Name: "",
    "Contact Number": "",
    "Email Address": "",
    Profession: "",
    "Company Name": "",
  };

  return <UserProfileTable data={userData} />;
};

export default UserProfile;
