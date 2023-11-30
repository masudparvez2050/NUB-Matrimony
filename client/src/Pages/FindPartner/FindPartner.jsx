import { useEffect, useState } from "react";
import { useLanguage } from "../../contextAPI/ChangeLanguage";
import { useAuth } from "../../contextAPI/authContext";
import BASE_URL, { getImageUrl } from "../../utils/URL";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import { format } from "date-fns";

// import {
//   profileDataStudent,
//   profileDataStudentBn,
//   profileDataTeacher,
//   profileDataTeacherBn,
// } from "./TeacherStudentData";

const ProfileCard = ({ profile, onClick }) => {
  const { changeLanguage } = useLanguage();

  return (
    <div className="bg-white shadow-md shadow-purple-300 rounded-2xl pb-4 m-4 cursor-pointer hover:shadow-2xl text-center  flex flex-wrap border hover:shadow-purple-400 transition-all duration-500">
      <div className="w-full transition-all duration-500 ">
        <div className="bg-pink-500 h-24 px-4 rounded-2xl transition-all duration-500"></div>
        <div className="flex justify-center">
          <img
            className="rounded-full  w-32 -mt-14  border-2 border-[#ff0081] bg-white"
            src={
              profile && profile.profile_pic
                ? getImageUrl(profile.profile_pic)
                : profile && profile.gender === "Male"
                ? "../src/assets/images/groom.png"
                : profile && profile.gender === "Female"
                ? "../src/assets/images/bridal.png"
                : null // or provide a default image URL
            }
            alt=""
          />
        </div>{" "}
        <div className="flex justify-center mb-5">
          <img src="../src/assets/images/hadith-bg-top.svg" alt="" />
        </div>
        <div className="mb-5">
          <h2 className="text-md text-gray-700 font-semibold mb-2">
            ID: {profile.id}
          </h2>{" "}
          <h2 className="text-lg text-gray-700 font-semibold mb-2">
            {profile.username}
          </h2>
          <p className="text-gray-500">{profile.gender}</p>
          {/* Add more profile details here */}
        </div>
        <div className="">
          <button
            className="bg-pink-500  hover:shadow-xl text-white font-bold py-3 px-5 rounded-full cursor-pointer transition-all duration-500"
            onClick={() => onClick(profile.id)}
          >
            {changeLanguage ? "বিস্তারিত" : "View Details"}
          </button>
        </div>
      </div>
    </div>
  );
};

const ProfileSection = () => {
  const { auth } = useAuth();
  // ------------Start API Fetch----------
  const [profileDataUser, setProfileDataUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user/api`);
        const data = await response.data;
        setProfileDataUser(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // -----------End API Fetch----------
  const { changeLanguage } = useLanguage();
  const initialSelectedFilter = changeLanguage ? "সকল" : "All";
  const [selectedRole, setSelectedRole] = useState(initialSelectedFilter);
  const [searchLocation, setSearchLocation] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchId, setSearchId] = useState("");
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const profilesPerPage = 8;

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
    setSelectedProfile(null); // Clear the selected profile when changing filters
  };

  const handleLocationChange = (event) => {
    setSearchLocation(event.target.value);
    setSelectedProfile(null); // Clear the selected profile when changing filters
  };

  const handleNameChange = (event) => {
    setSearchName(event.target.value);
    setSelectedProfile(null); // Clear the selected profile when changing filters
  };

  const handleIdChange = (event) => {
    setSearchId(event.target.value);
    setSelectedProfile(null); // Clear the selected profile when changing filters
  };

  const openProfileDetails = (profileId) => {
    const selected = profileDataUser.find(
      (profile) => profile.id === profileId
    );
    setSelectedProfile(selected);
  };

  const goBack = () => {
    setSelectedProfile(null);
  };

  const filteredProfiles = profileDataUser.filter((profile) => {
    const nameMatch = profile.username.includes(searchName);
    const idMatch = profile.id.toString().includes(searchId);
    const locationMatch = profile.gender.includes(searchLocation);

    const All = changeLanguage ? "সকল" : "All";

    return (
      (selectedRole === All || profile.gender === selectedRole) &&
      (searchLocation === "" || locationMatch) &&
      (searchName === "" || nameMatch) &&
      (searchId === "" || idMatch)
    );
  });

  // Calculate the range of profiles to display based on the current page.
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = filteredProfiles.slice(
    indexOfFirstProfile,
    indexOfLastProfile
  );

  // Function to handle page navigation.
  const totalPages = Math.ceil(filteredProfiles.length / profilesPerPage);
  // const paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    // Scroll to the top of the page smoothly when a button is clicked
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const generatePagination = () => {
    const totalPages = Math.ceil(filteredProfiles.length / profilesPerPage);
    const pagination = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pagination.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pagination.push(i);
        }
        pagination.push("...");
        pagination.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pagination.push(1);
        pagination.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pagination.push(i);
        }
      } else {
        pagination.push(1);
        pagination.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pagination.push(i);
        }
        pagination.push("...");
        pagination.push(totalPages);
      }
    }

    return pagination.map((page) => (
      <li
        key={page}
        className={`page-item ${
          currentPage === page ? "text-white bg-[#ff0081] rounded-md" : "m-1"
        }`}
      >
        <button
          onClick={() => handlePageClick(page)}
          className={`page-item ${
            currentPage === page
              ? "text-white border px-4 p-1 rounded-md"
              : "page-link text-lg hover:text-white text-gray-600 border px-4 hover:bg-blue-500 rounded-md"
          }`}
          // className=""
          // disabled={currentPage === page}
        >
          {page}
        </button>
      </li>
    ));
  };

  return (
    <div className="flex justify-center flex-col md:flex-row bg-gray-100 ">
      <div
        className={`md:w-3/5 xl:w-1/5 mr-4 p-4 bg-white shadow-xl xl:h-screen rounded-md ${
          selectedProfile ? "hidden" : "block"
        }`}
      >
        <h1 className="text-2xl font-semibold mb-4 text-center">
          {changeLanguage ? "" : "Seacher Groom or Bridal"}
        </h1>
        <div className="mb-4">
          <label
            htmlFor="roleFilter"
            className="block text-sm font-medium text-gray-700"
          >
            {changeLanguage ? "" : "Select Groom/Bridal"}
          </label>
          <select
            id="roleFilter"
            name="roleFilter"
            className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border"
            onChange={handleRoleChange}
            value={selectedRole}
          >
            <option value={changeLanguage ? "সকল" : "All"}>
              {changeLanguage ? "সকল" : "All"}
            </option>
            <option value={changeLanguage ? "পাত্র" : "Male"}>
              {changeLanguage ? "পাত্র" : "Male"}
            </option>
            <option value={changeLanguage ? "পাত্রী" : "Female"}>
              {changeLanguage ? "পাত্রী" : "Female"}
            </option>
          </select>
        </div>
        {/* <div className="mb-4">
          <label
            htmlFor="nameFilter"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <select
            id="roleFilter"
            name="roleFilter"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onChange={handleNameChange}
            value={searchName}
          >
            <option value="All">All</option>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
          </select>
          <input
            type="text"
            id="nameFilter"
            name="nameFilter"
            className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter name"
            onChange={handleNameChange}
            value={searchName}
          />
        </div> */}
        {/* <div className="mb-4">
          <label
            htmlFor="idFilter"
            className="block text-sm font-medium text-gray-700"
          >
            ID
          </label>
          <input
            type="text"
            id="idFilter"
            name="idFilter"
            className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter ID"
            onChange={handleIdChange}
            value={searchId}
          />
        </div> */}
        <div className="mb-4">
          <label
            htmlFor="locationFilter"
            className="block text-sm font-medium text-gray-700"
          >
            Location
          </label>
          <input
            type="text"
            id="locationFilter"
            name="locationFilter"
            className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border"
            placeholder="Enter location"
            onChange={handleLocationChange}
            value={searchLocation}
          />
        </div>
      </div>
      <div
        className={`w-full xl:w-4/5 md:ml-10  p-4 flex flex-wrap justify-center xl:justify-start shadow-xl bg-white ${
          selectedProfile ? "hidden" : "block"
        }`}
      >
        {currentProfiles.map((profile) => (
          <div key={profile.id} className="w-full sm:w-2/3 md:w-3/3 xl:w-1/4">
            <ProfileCard profile={profile} onClick={openProfileDetails} />
          </div>
        ))}

        {/* ------------- Start Pagination ----------------- */}

        <div className="w-full xl:w-4/5 p-4 flex justify-center">
          <ul className="pagination flex  justify-center items-center ">
            <li className="page-item ">
              <button
                onClick={() => goToPage(currentPage - 1)}
                className="page-link text-2xl text-gray-600 mr-2 items"
                disabled={currentPage === 1}
              >
                <i className="fa-solid fa-angle-left w-5 text-[#ff0081]"></i>
              </button>
            </li>
            {generatePagination()}
            <li className="page-item">
              <button
                onClick={() => goToPage(currentPage + 1)}
                className="page-link text-2xl text-gray-600 ml-2"
                disabled={currentPage === totalPages}
              >
                <i className="fa-solid fa-angle-right w-5 text-[#ff0081]"></i>
              </button>
            </li>
          </ul>
        </div>
        {/* ---------------End Pagination--------------- */}
      </div>
      {selectedProfile && (
        <div className="md:w-3/4 p-4">
          <h2 className="text-2xl font-semibold mb-4 text-center bg-[#ff0081] text-white w-auto py-3 rounded">
            {changeLanguage ? "বিস্তারিত প্রোফাইল" : "Profile Details"}
          </h2>
          <div className="bg-white shadow-xl rounded-md p-4 text-center">
            <div className="md:ml-32 flex items-center">
              <img
                className="w-40 h-40 rounded-full mb-2 border-2 border-[#ff0081] bg-white"
                src={
                  selectedProfile && selectedProfile.profile_pic
                    ? getImageUrl(selectedProfile.profile_pic)
                    : selectedProfile && selectedProfile.gender === "Male"
                    ? "../src/assets/images/groom.png"
                    : selectedProfile && selectedProfile.gender === "Female"
                    ? "../src/assets/images/bridal.png"
                    : null // or provide a default image URL
                }
                alt=""
              />
              <div className="text-left ml-4">
                {" "}
                <h2 className="text-lg font-semibold">
                  {selectedProfile.username.charAt(0).toUpperCase() +
                    selectedProfile.username.slice(1)}
                </h2>
                <p className="text-gray-500">
                  {selectedProfile.gender.charAt(0).toUpperCase() +
                    selectedProfile.gender.slice(1)}
                </p>{" "}
                <p className="text-gray-500"> ID: {selectedProfile.id}</p>
              </div>
            </div>

            <div className="flex flex-col m-5 overflow-x-auto">
              <table className="table table-fixed border text-left md:mx-20 break-all whitespace-nowrap ">
                {/* --- Start Personal Information Table ---  */}
                <thead>
                  <tr className="">
                    <th
                      colSpan="2"
                      className=" px-4 py-4 text-xl text-gray-700 "
                    >
                      {changeLanguage
                        ? "ব্যাক্তিগত তথ্য"
                        : "Personal Information"}
                    </th>
                  </tr>
                </thead>
                <tbody className=" border">
                  <tr className="border ">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "আইডি" : "ID"}
                    </td>
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {selectedProfile.id}
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "নাম" : "Name"}
                    </td>
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {selectedProfile.username.charAt(0).toUpperCase() +
                        selectedProfile.username.slice(1)}
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "ই-মেইল" : "Email"}
                    </td>
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {selectedProfile.email}
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "ফোন" : "Phone"}
                    </td>
                    <td className="px-4 py-2 xl:pl-10 text-gray-700">
                      {selectedProfile.phone}
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "ঠিকানা" : "Date of Birth"}
                    </td>
                    <td className="px-4 py-2 xl:pl-10 text-gray-700 border">
                      {selectedProfile.dob
                        ? format(new Date(selectedProfile.dob), "dd-MMM-yyyy")
                        : "Invalid Date"}
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "লিঙ্গ" : "Gender"}
                    </td>
                    <td className="px-4 py-2 xl:pl-10 text-gray-700">
                      {selectedProfile.gender}
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "বৈবাহিক অবস্থা" : "Marital Status"}
                    </td>
                    <td className="px-4 py-2 xl:pl-10 text-gray-700">-</td>
                  </tr>
                  {/* --- End Personal Information Table ---  */}

                  {/* --- Start General Information Table ---  */}
                  <thead>
                    <tr className="">
                      <th
                        colSpan="2"
                        className=" px-4 py-4 text-xl text-gray-700 "
                      >
                        {changeLanguage
                          ? "ব্যাক্তিগত তথ্য"
                          : "General Information"}
                      </th>
                    </tr>
                  </thead>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "বায়োডাটা টাইপ" : "Biodata Type"}
                    </td>
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      -
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "উচ্চতা" : "Height"}
                    </td>
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      -
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "ওজন" : "Weight"}
                    </td>
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      -
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "রক্তের গ্রুপ" : "Blood Group"}
                    </td>
                    <td className="px-4 py-2 xl:pl-10 text-gray-700">-</td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "ধর্ম" : "Religion"}
                    </td>
                    <td className="px-4 py-2 xl:pl-10 text-gray-700 border">
                      -
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "জাতীয়তা" : "Nationality"}
                    </td>
                    <td className="px-4 py-2 xl:pl-10 text-gray-700">-</td>
                  </tr>

                  {/* --- End General Information Table ---  */}

                  {/* --- Start Address  Table ---  */}
                  <thead>
                    <tr className="">
                      <th
                        colSpan="2"
                        className=" px-4 py-4 text-xl text-gray-700 "
                      >
                        {changeLanguage ? "ঠিকানা" : "Address"}
                      </th>
                    </tr>
                  </thead>
                  <tr className="border">
                    <td
                      colSpan="2"
                      className=" px-4 py-2 xl:pl-10 text-gray-700 border"
                    >
                      {" "}
                      {changeLanguage ? "স্থায়ী ঠিকানা" : "Permanent Address"}
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "জেলা" : "District"}
                    </td>
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      -
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "উপজেলা" : "Upazila"}
                    </td>
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      -
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "থানা" : "Thana"}
                    </td>
                    <td className="px-4 py-2 xl:pl-10 text-gray-700">-</td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "গ্রাম" : "Village"}
                    </td>
                    <td className="px-4 py-2 xl:pl-10 text-gray-700 border">
                      -
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "এলাকা" : "Area"}
                    </td>
                    <td className="px-4 py-2 xl:pl-10 text-gray-700">-</td>
                  </tr>
                  <tr className="border">
                    <td
                      colSpan="2"
                      className=" px-4 py-2 xl:pl-10 text-gray-700 border"
                    >
                      {" "}
                      {changeLanguage ? "বর্তমান ঠিকানা" : "Present Address"}
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "জেলা" : "District"}
                    </td>
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      -
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "উপজেলা" : "Upazila"}
                    </td>
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      -
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "থানা" : "Thana"}
                    </td>
                    <td className="px-4 py-2 xl:pl-10 text-gray-700">-</td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "গ্রাম" : "Village"}
                    </td>
                    <td className="px-4 py-2 xl:pl-10 text-gray-700 border">
                      -
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "এলাকা" : "Area"}
                    </td>
                    <td className="px-4 py-2 xl:pl-10 text-gray-700">-</td>
                  </tr>

                  {/* --- End Address Table ---  */}

                  {/* --- Start Academic Qualification Table ---  */}
                  <thead>
                    <tr className="">
                      <th
                        colSpan="2"
                        className=" px-4 py-4 text-xl text-gray-700 "
                      >
                        {changeLanguage
                          ? "শিক্ষাগত যোগ্যতা"
                          : "Academic Qualification"}
                      </th>
                    </tr>
                  </thead>
                  <tr className="border">
                    <td
                      colSpan={2}
                      className=" px-4 py-2 xl:pl-10 text-gray-900 border"
                    >
                      {" "}
                      {changeLanguage
                        ? "মাধ্যমিক সার্টিফিকেট"
                        : "Secondary Certificate"}
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "শিক্ষার ধরণ" : "Education Type"}
                    </td>
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      -
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "গ্রুপ" : "Group"}
                    </td>
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      -
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "পাসের বছর" : "Passing Year"}
                    </td>
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      -
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "সেশন" : "Session"}
                    </td>
                    <td className="px-4 py-2 xl:pl-10 text-gray-700">-</td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "জিপিএ" : "GPA"}
                    </td>
                    <td className="px-4 py-2 xl:pl-10 text-gray-700 border">
                      -
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "স্কুল" : "School"}
                    </td>
                    <td className="px-4 py-2 xl:pl-10 text-gray-700">-</td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "বোর্ড" : "Board"}
                    </td>
                    <td className="px-4 py-2 xl:pl-10 text-gray-700">-</td>
                  </tr>

                  <tr className="border">
                    <td
                      colSpan={2}
                      className=" px-4 py-2 xl:pl-10 text-gray-900 border"
                    >
                      {" "}
                      {changeLanguage
                        ? "উচ্চ মাধ্যমিক সার্টিফিকেট"
                        : "Higher Secondary Certificate"}
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "শিক্ষার ধরণ" : "Education Type"}
                    </td>
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      -
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "গ্রুপ" : "Group"}
                    </td>
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      -
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "পাসের বছর" : "Passing Year"}
                    </td>
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      -
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "সেশন" : "Session"}
                    </td>
                    <td className="px-4 py-2 xl:pl-10 text-gray-700">-</td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "সিজিপিএ" : "CGPA"}
                    </td>
                    <td className="px-4 py-2 xl:pl-10 text-gray-700 border">
                      -
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "ইন্সিটিউট" : "Institute"}
                    </td>
                    <td className="px-4 py-2 xl:pl-10 text-gray-700">-</td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "বোর্ড" : "Board"}
                    </td>
                    <td className="px-4 py-2 xl:pl-10 text-gray-700">-</td>
                  </tr>

                  <tr className="border">
                    <td
                      colSpan={2}
                      className=" px-4 py-2 xl:pl-10 text-gray-700 border"
                    >
                      {" "}
                      {changeLanguage ? "স্নাতক" : "Geaduation"}
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "শিক্ষার ধরণ" : "Education Type"}
                    </td>
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      -
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "গ্রুপ" : "Group"}
                    </td>
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      -
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "পাসের বছর" : "Passing Year"}
                    </td>
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      -
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "সেশন" : "Session"}
                    </td>
                    <td className="px-4 py-2 xl:pl-10 text-gray-700">-</td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "সিজিপিএ" : "CGPA"}
                    </td>
                    <td className="px-4 py-2 xl:pl-10 text-gray-700 border">
                      -
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "ইউনিভার্সিটি" : "Univarsity"}
                    </td>
                    <td className="px-4 py-2 xl:pl-10 text-gray-700">-</td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "বোর্ড" : "Board"}
                    </td>
                    <td className="px-4 py-2 xl:pl-10 text-gray-700">-</td>
                  </tr>

                  {/* --- End Academic Qualification Table ---  */}

                  {/* --- Start Family Information Table ---  */}
                  <thead>
                    <tr className="">
                      <th
                        colSpan="2"
                        className=" px-4 py-4 text-xl text-gray-700 "
                      >
                        {changeLanguage
                          ? "ব্যাক্তিগত তথ্য"
                          : "Family Information"}
                      </th>
                    </tr>
                  </thead>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "পিতার নাম" : "Father's Name"}
                    </td>
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      -
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "মাতার নাম" : "Mother's Name"}
                    </td>
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      -
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage
                        ? "পরিবারে কতজন সদস্য আছে?"
                        : "How Many Person in Family?"}
                    </td>
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      -
                    </td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "ভাই ও বোন" : "Brother & Sister"}
                    </td>
                    <td className="px-4 py-2 xl:pl-10 text-gray-700">-</td>
                  </tr>
                  <tr className="border">
                    <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                      {" "}
                      {changeLanguage ? "আর্থিক অবস্থা" : "Financial Status"}
                    </td>
                    <td className="px-4 py-2 xl:pl-10 text-gray-700 border">
                      -
                    </td>
                  </tr>

                  {/* --- End Family Information Table ---  */}

                  {/* --------------------- */}
                  {auth ? (
                    <>
                      {" "}
                      <tr className="border">
                        <td
                          colSpan={2}
                          className=" px-4 py-2 xl:pl-10 text-gray-700 border bg-blue-200"
                        >
                          <center>
                            {changeLanguage
                              ? "যোগাযোগের জন্য নীচের ই-মেইল বা ফোন নাম্বার ব্যাবহার করুন"
                              : "Please use the email or phone number below to contact"}
                          </center>
                        </td>
                      </tr>
                      <tr className="border">
                        <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                          {" "}
                          {changeLanguage ? "ই-মেইল" : "Email"}
                        </td>
                        <td className=" whitespace-normal px-4 py-2 xl:pl-10 text-gray-700 border">
                          <a href="mailto:masudparvez2050@gmail.com">
                            nubmatrimony@gmail.com
                          </a>
                        </td>
                      </tr>
                      <tr className="border">
                        <td className=" px-4 py-2 xl:pl-10 text-gray-700 border">
                          {" "}
                          {changeLanguage ? "মোবাইল" : "Mobile"}
                        </td>
                        <td className="px-4 py-2 xl:pl-10 text-gray-700 border">
                          <a href="tel:+8801601332914"> +880 00000-000000</a>
                        </td>
                      </tr>
                    </>
                  ) : (
                    <>
                      <tr>
                        <td colSpan="2" className="p-6">
                          {" "}
                          <center>
                            <Link
                              to="/login"
                              className="mt-4 bg-[#ff0081] hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-md"
                            >
                              {changeLanguage
                                ? "যোগাযোগের তথ্য দেখুন"
                                : "View Contact Information"}
                            </Link>
                          </center>
                        </td>
                      </tr>
                    </>
                  )}

                  {/* ---------------------- */}
                </tbody>
              </table>
            </div>
            <button
              onClick={goBack}
              className="mt-4 bg-[#ff0081] hover:bg-pink-600 text-white font-normal py-2 px-4 rounded-md"
            >
              {changeLanguage ? "পিছনে" : "Back"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

function FindPartner() {
  return (
    <>
      <Header />

      {/* ------------------------------- */}

      <main className=" mx-auto bg-gray-100 md:p-4 g-blue-100 border rounded-lg  m-5">
        <ProfileSection />
      </main>

      {/* ------------------------------- */}

      <Footer />
    </>
  );
}

export default FindPartner;
