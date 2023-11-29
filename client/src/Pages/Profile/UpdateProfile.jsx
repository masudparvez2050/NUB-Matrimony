import { useEffect, useState } from "react";
import Footer from "../../Components/Layout/Footer";
import Header from "../../Components/Layout/Header";
import LeftSidebar from "./LeftSidebar";
import axios from "axios";
import BASE_URL, { getImageUrl } from "../../utils/URL";
import { format, parse } from "date-fns";
import { useAuth } from "../../contextAPI/authContext";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

function UpdateProfile() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [file, setFile] = useState();
  const [dateFormat, setDateFormat] = useState();
  const [profileData, setProfileData] = useState({
    // Initialize with default values for your form fields
    id: "",
    username: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
  });
  const { auth } = useAuth();

  const handleTabClick = (tabNumber) => {
    setSelectedTab(tabNumber);
  };

  // image upload function
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formdata = new FormData();
    formdata.append("image", file);
    axios
      .post(`${BASE_URL}/user/upload`, formdata)
      .then((res) => {
        if (res.data.Status === "Success") {
          console.log("Image uploaded successfully");
          toast.success("Image uploaded successfully");
          window.location.reload();
        } else {
          console.log("Image Upload failed");
          console.log(res.data.Status);
          toast.error("Upload failed");
        }
      })
      .catch((err) => console.log(err));
  };

  // profileData Api
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${BASE_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setProfileData(response.data[0]);

        const parsedDate = parse(
          response.data[0].dob,
          "yyyy-MM-dd",
          new Date()
        );

        const formattedDate = format(parsedDate, "dd-MM-yyyy");

        setDateFormat(formattedDate);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!auth) {
    return <Navigate to="/login" />; //
  }

  // Handle form input changes
  const handleInputChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .put(`${BASE_URL}/user/update/${profileData.id}`, profileData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.Status === "Success") {
          console.log("Profile updated successfully");
          toast.success("Profile updated successfully");
          console.log(res.data);
        } else {
          console.log("Profile update failed");
          console.log(res.data.Status);
          toast.error("Update failed");
        }
      })
      .catch((err) => console.log(err));
  };
  // Date Formatting
  const formattedDate = profileData.dob
    ? format(new Date(profileData.dob), "dd-MMM-yyyy")
    : "Invalid Date";

  return (
    <>
      {" "}
      <main className="bg-gray-100">
        <div className="min-h-screen bg-gray-100">
          <header className="bg-white shadow">
            <Header />
          </header>
          <div>
            <div className="py-12 flex flex-wrap flex-col md:flex-row">
              {/*  --- start Left Sidebar ---  */}

              <LeftSidebar />

              {/*  --- End Left Sidebar ---  */}

              {/*  ---Start update Profile Side ---  */}
              <div className=" w-[70%]  mx-auto sm:px-6 lg:px-8">
                {/* ---start Button menu----- */}
                <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg mb-4 p-4 flex justify-center flex-wrap text-gray-600 space-x-6">
                  <button
                    className={
                      selectedTab === 1
                        ? "border py-4 px-4 rounded-xl bg-[#ff0081] text-white transition-all duration-500 hover:text-lg"
                        : "border py-4 px-4 rounded-xl hover:bg-[#ff0081] hover:text-white transition-all duration-500 hover:text-lg"
                    }
                    onClick={() => handleTabClick(1)}
                  >
                    Personal Info
                  </button>
                  <button
                    className={
                      selectedTab === 2
                        ? "border py-4 px-4 rounded-xl bg-[#ff0081] text-white transition-all duration-500 hover:text-lg"
                        : "border py-4 px-4 rounded-xl hover:bg-[#ff0081] hover:text-white transition-all duration-500 hover:text-lg"
                    }
                    onClick={() => handleTabClick(2)}
                  >
                    General Info
                  </button>
                  <button
                    className={
                      selectedTab === 3
                        ? "border py-4 px-4 rounded-xl bg-[#ff0081] text-white transition-all duration-500 hover:text-lg"
                        : "border py-4 px-4 rounded-xl hover:bg-[#ff0081] hover:text-white transition-all duration-500 hover:text-lg"
                    }
                    onClick={() => handleTabClick(3)}
                  >
                    Address Info
                  </button>
                  <button
                    className={
                      selectedTab === 4
                        ? "border py-4 px-4 rounded-xl bg-[#ff0081] text-white transition-all duration-500 hover:text-lg"
                        : "border py-4 px-4 rounded-xl hover:bg-[#ff0081] hover:text-white transition-all duration-500 hover:text-lg"
                    }
                    onClick={() => handleTabClick(4)}
                  >
                    Academic Info
                  </button>
                  <button
                    className={
                      selectedTab === 5
                        ? "border py-4 px-4 rounded-xl bg-[#ff0081] text-white transition-all duration-500 hover:text-lg"
                        : "border py-4 px-4 rounded-xl hover:bg-[#ff0081] hover:text-white transition-all duration-500 hover:text-lg"
                    }
                    onClick={() => handleTabClick(5)}
                  >
                    Family Info
                  </button>
                </div>
                {/* ---End Button menu----- */}

                <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                  {/* -------Start Personal Information------- */}
                  {selectedTab === 1 && (
                    <>
                      <div className="p-6 sm:px-20 bg-white border-b border-gray-200">
                        <div className="mt-2 text-gray-600">
                          <div className="flex items-center">
                            <img
                              className="h-32 w-32 rounded-md object-cover "
                              src={
                                profileData && profileData.profile_pic
                                  ? getImageUrl(profileData.profile_pic)
                                  : profileData && profileData.gender === "Male"
                                  ? "../src/assets/images/groom.png"
                                  : profileData &&
                                    profileData.gender === "Female"
                                  ? "../src/assets/images/bridal.png"
                                  : null // or provide a default image URL
                              }
                              alt="Profile image"
                            />
                            <div className="ml-4">
                              <input
                                type="file"
                                onChange={handleFile}
                                name="profile_pic"
                                className="leading-6 font-medium mb-6 text-sm text-gray-300 "
                              />
                              <div>
                                <button
                                  onClick={handleUpload}
                                  className="bg-[#ff0081] hover:bg-[#e3215b] text-white py-2 px-4 rounded-full transition-all duration-300 shadow-xl mt-6"
                                >
                                  Update Photo
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <form
                        onSubmit={handleFormSubmit}
                        className="m-4 mx-8 p-4 font-normal  text-gray-600"
                      >
                        <h1 className="text-xl font-bold text-gray-800 pb-2 mb-3 border-b ml-10">
                          Personal Information
                        </h1>
                        <div className="ml-28 m-2 p-2">
                          <div className="">
                            <p className="">ID</p>
                            <input
                              className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                              type="text"
                              name="id"
                              value={profileData.id}
                              onChange={handleInputChange}
                              readOnly // Read-only because ID should not be modified
                            />
                          </div>
                        </div>
                        {/* ------------- */}
                        <div className="ml-28 m-2 p-2">
                          <div className="">
                            <p className="">Full Name</p>
                            <input
                              className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                              type="text"
                              name="username"
                              value={profileData.username}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>

                        <div className="flex">
                          {/* ------------- */}
                          <div className="ml-28 m-2 p-2 w-full">
                            <div className="">
                              <p className="">Email</p>
                              <input
                                className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                                type="email"
                                name="email"
                                value={profileData.email}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          {/* ------------- */}
                          <div className="ml-4 m-2 p-2 w-full">
                            <div className="">
                              <p className="">Phone</p>
                              <input
                                className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                                type="text"
                                name="phone"
                                value={profileData.phone}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex">
                          {" "}
                          <div className="flex justify-start">
                            {/* ------------- */}
                            <div className="ml-28 my-2 py-2 ">
                              <div className="">
                                <p className="">Date of Birth</p>
                                <p
                                  className="border p-3 my-1 rounded-lg "
                                  name="dob"
                                >
                                  {formattedDate}
                                </p>
                              </div>
                            </div>
                            {/* ------------- */}
                            <div className=" my-2 py-2 w-[13%]">
                              <div className="">
                                <p className="text-white">DOB</p>
                                <input
                                  className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                                  type="date"
                                  name="dob"
                                  value={dateFormat}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>
                          </div>
                          {/* ------------- */}
                          <div className="ml-2 m-2 p-2 w-full">
                            <div className="">
                              <p className="">Gender</p>

                              <select
                                className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                                type="text"
                                name="gender"
                                value={profileData.gender}
                                onChange={handleInputChange}
                              >
                                <option value="" disabled selected>
                                  Select your gender
                                </option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="my-4 ml-28 py-4 px-10 bg-[#ff0081] text-white rounded-full"
                        >
                          Save
                        </button>

                        {/* ------------- */}
                      </form>
                    </>
                  )}

                  {/* -------End Personal Information------- */}

                  {/* -------Start General Information------- */}
                  {selectedTab === 2 && (
                    <form className="m-4 mx-8 p-4 font-normal  text-gray-600">
                      <h1 className="text-xl font-bold text-gray-800 pb-2 mb-3 border-b ml-10">
                        General Information
                      </h1>
                      <div className="ml-28 m-2 p-2">
                        <div className="">
                          <p className="">Biodata Type</p>
                          <select
                            className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                            name=""
                            id=""
                          >
                            <option value="" disabled selected>
                              Select Diodata Type
                            </option>
                            <option value="Groom">Groom</option>
                            <option value="Bridal">Bridal</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex">
                        {" "}
                        {/* ------------- */}
                        <div className="ml-28 m-2 p-2 w-full">
                          <div className="">
                            <p className="">Marital Status</p>
                            <input
                              className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                              type="text"
                            />
                          </div>
                        </div>
                        {/* ------------- */}
                        <div className="ml-2 m-2 p-2 w-full">
                          <div className="">
                            <p className="">Height</p>
                            <input
                              className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex">
                        {/* ------------- */}
                        <div className="ml-28 m-2 p-2 w-full">
                          <div className="">
                            <p className="">Weight</p>
                            <input
                              className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                              type="text"
                            />
                          </div>
                        </div>
                        {/* ------------- */}
                        <div className="ml-2 m-2 p-2 w-full">
                          <div className="">
                            <p className="">Blood Group</p>
                            <input
                              className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        {/* ------------- */}
                        <div className="ml-28 m-2 p-2 w-full">
                          <div className="">
                            <p className="">Religion</p>
                            <input
                              className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                              type="text"
                            />
                          </div>
                        </div>
                        {/* ------------- */}
                        <div className="ml-2 m-2 p-2 w-full">
                          <div className="">
                            <p className="">Nationality</p>
                            <input
                              className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="my-4 ml-28 py-4 px-10 bg-[#ff0081] text-white rounded-full"
                      >
                        Save
                      </button>

                      {/* ------------- */}
                    </form>
                  )}

                  {/* -------End General Information------- */}

                  {/* -------Start Address------- */}
                  {selectedTab === 3 && (
                    <form className="m-4 mx-8 p-4 font-normal  text-gray-600">
                      <h1 className="text-xl font-bold text-gray-800 pb-2 mb-3 border-b ml-10">
                        Address
                      </h1>
                      <div className="ml-28 m-2 p-2">
                        <div className="">
                          <p className="">Permanent Address</p>
                          <input
                            className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                            type="text"
                          />
                        </div>
                      </div>
                      {/* ------------- */}
                      <div className="ml-28 m-2 p-2">
                        <div className="">
                          <p className="">Present Address</p>
                          <input
                            className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                            type="text"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="my-4 ml-28 py-4 px-10 bg-[#ff0081] text-white rounded-full"
                      >
                        Save
                      </button>
                    </form>
                  )}

                  {/* -------End Address------- */}

                  {/* -------Start Academic Qualification------- */}
                  {selectedTab === 4 && (
                    <form className="m-4 mx-8 p-4 font-normal  text-gray-600">
                      <h1 className="text-xl font-bold text-gray-800 pb-2 mb-3 border-b ml-10">
                        Academic Qualification
                      </h1>
                      <div className="ml-28 m-2 p-2 bg-gray-400 text-white">
                        <div className="flex ">
                          <p className="">Secondary Certificate</p>
                        </div>
                      </div>
                      {/* ------------- */}
                      <div className="ml-28 m-2 p-2">
                        <div className="">
                          <p className="">Education Type</p>
                          <input
                            className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                            type="text"
                          />
                        </div>
                      </div>

                      <div className="flex">
                        {/* ------------- */}
                        <div className="ml-28 m-2 p-2 w-full">
                          <div className="">
                            <p className="">Group</p>
                            <input
                              className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                              type="text"
                            />
                          </div>
                        </div>
                        {/* ------------- */}
                        <div className="ml-2 m-2 p-2 w-full">
                          <div className="">
                            <p className="">Passing Year</p>
                            <input
                              className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex">
                        {/* ------------- */}
                        <div className="ml-28 m-2 p-2 w-full">
                          <div className="">
                            <p className="">Session</p>
                            <input
                              className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                              type="text"
                            />
                          </div>
                        </div>
                        {/* ------------- */}
                        <div className="ml-2 m-2 p-2 w-full">
                          <div className="">
                            <p className="">GPA</p>
                            <input
                              className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex">
                        {/* ------------- */}
                        <div className="ml-28 m-2 p-2 w-full">
                          <div className="">
                            <p className="">School</p>
                            <input
                              className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                              type="text"
                            />
                          </div>
                        </div>
                        {/* ------------- */}
                        <div className="ml-2 m-2 p-2 w-full">
                          <div className="">
                            <p className="">Board</p>
                            <input
                              className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>

                      {/* ------------- */}
                      <div className="ml-28 m-2 p-2 bg-gray-400 text-white">
                        <div className="">
                          <p className="">Higier Secondary Certificate</p>
                        </div>
                      </div>
                      {/* ------------- */}
                      <div className="ml-28 m-2 p-2">
                        <div className="">
                          <p className="">Education Type</p>
                          <input
                            className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                            type="text"
                          />
                        </div>
                      </div>

                      <div className="flex">
                        {/* ------------- */}
                        <div className="ml-28 m-2 p-2 w-full">
                          <div className="">
                            <p className="">Group</p>
                            <input
                              className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                              type="text"
                            />
                          </div>
                        </div>
                        {/* ------------- */}
                        <div className="ml-2 m-2 p-2 w-full">
                          <div className="">
                            <p className="">Passing Year</p>
                            <input
                              className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex">
                        {" "}
                        {/* ------------- */}
                        <div className="ml-28 m-2 p-2 w-full">
                          <div className="">
                            <p className="">Session</p>
                            <input
                              className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                              type="text"
                            />
                          </div>
                        </div>
                        {/* ------------- */}
                        <div className="ml-2 m-2 p-2 w-full">
                          <div className="">
                            <p className="">CGPA</p>
                            <input
                              className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex">
                        {/* ------------- */}
                        <div className="ml-28 m-2 p-2 w-full">
                          <div className="">
                            <p className="">Insititute</p>
                            <input
                              className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                              type="text"
                            />
                          </div>
                        </div>
                        {/* ------------- */}
                        <div className="ml-2 m-2 p-2 w-full">
                          <div className="">
                            <p className="">Board</p>
                            <input
                              className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>

                      {/* ------------- */}
                      <div className="ml-28 m-2 p-2 bg-gray-400 text-white">
                        <div className="">
                          <p className="">Graduation</p>
                        </div>
                      </div>
                      {/* ------------- */}
                      <div className="ml-28 m-2 p-2">
                        <div className="">
                          <p className="">Education type</p>
                          <input
                            className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                            type="text"
                          />
                        </div>
                      </div>

                      <div className="flex">
                        {/* ------------- */}
                        <div className="ml-28 m-2 p-2 w-full">
                          <div className="">
                            <p className="">Department</p>
                            <input
                              className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                              type="text"
                            />
                          </div>
                        </div>
                        {/* ------------- */}
                        <div className="ml-2 m-2 p-2 w-full">
                          <div className="">
                            <p className="">Passing Year</p>
                            <input
                              className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex">
                        {/* ------------- */}
                        <div className="ml-28 m-2 p-2 w-full">
                          <div className="">
                            <p className="">Session</p>
                            <input
                              className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                              type="text"
                            />
                          </div>
                        </div>

                        <div className=""></div>
                        {/* ------------- */}
                        <div className="ml-2 m-2 p-2 w-full">
                          <div className="">
                            <p className="">CGPA</p>
                            <input
                              className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex">
                        {/* ------------- */}
                        <div className="ml-28 m-2 p-2 w-full">
                          <div className="">
                            <p className="">University</p>
                            <input
                              className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                              type="text"
                            />
                          </div>
                        </div>
                        {/* ------------- */}
                        <div className="ml-2 m-2 p-2 w-full">
                          <div className="">
                            <p className="">Board</p>
                            <input
                              className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="my-4 ml-28 py-4 px-10 bg-[#ff0081] text-white rounded-full"
                      >
                        Save
                      </button>
                      {/* ------------- */}
                    </form>
                  )}

                  {/* -------End Academic Qualification------- */}

                  {/* -------Start Family Information------- */}
                  {selectedTab === 5 && (
                    <form className="m-4 mx-8 p-4 font-normal  text-gray-600">
                      <h1 className="text-xl font-bold text-gray-800 pb-2 mb-3 border-b ml-10">
                        Family Information
                      </h1>
                      <div className="ml-28 m-2 p-2">
                        <div className="">
                          <p className="">Father&apos;s Name</p>
                          <input
                            className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                            type="text"
                          />
                        </div>
                      </div>
                      {/* ------------- */}
                      <div className="ml-28 m-2 p-2">
                        <div className="">
                          <p className="">Mother&apos;s Name</p>
                          <input
                            className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                            type="text"
                          />
                        </div>
                      </div>
                      {/* ------------- */}
                      <div className="ml-28 m-2 p-2">
                        <div className="">
                          <p className="">How Many Person in Family?</p>
                          <input
                            className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                            type="text"
                          />
                        </div>
                      </div>
                      {/* ------------- */}
                      <div className="ml-28 m-2 p-2">
                        <div className="">
                          <p className="">Brother & Sister </p>
                          <input
                            className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                            type="text"
                          />
                        </div>
                      </div>
                      {/* ------------- */}
                      <div className="ml-28 m-2 p-2">
                        <div className="">
                          <p className="">Financial Status</p>
                          <input
                            className="border w-full p-3 my-1 rounded-lg focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                            type="text"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="my-4 ml-28 py-4 px-10 bg-[#ff0081] text-white rounded-full"
                      >
                        Save
                      </button>
                      {/* ------------- */}
                    </form>
                  )}

                  {/* -------End Family Information------- */}

                  {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-center">
            <span className="text-xl text-gray-600">
              <i className="fas fa-calendar-day"></i>
            </span>
            <p className="mt-2 text-gray-500">DD-MM-YYYY</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-center">
            <span className="text-xl text-gray-600">
              <i className="fas fa-clock"></i>
            </span>
            <p className="mt-2 text-gray-500">HH:MM AM/PM</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-center">
            <span className="text-xl text-gray-600">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <p className="mt-2 text-gray-500">Venue Address</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="text-center">
            <span className="text-xl text-gray-600">
              <i className="fas fa-user-friends"></i>
            </span>
            <p className="mt-2 text-gray-500">Number of Guests</p>
          </div>
        </div>
      </div> */}
                </div>
              </div>
              {/*  ---End update Profile Side ---  */}

              {/* ------start blank side -------- */}
              <div className="  mx-auto sm:px-6 lg:px-8"></div>
              {/* ------End blank side -------- */}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
export default UpdateProfile;
