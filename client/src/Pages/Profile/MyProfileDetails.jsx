import Header from "./../../Components/Layout/Header";
import LeftSidebar from "./LeftSidebar";
import Footer from "./../../Components/Layout/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL, { getImageUrl } from "../../utils/URL";

function MyProfileDetails() {
  const [profileData, setProfileData] = useState([]);

  // profileData
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
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <main className="bg-gray-100">
        <div className="min-h-screen bg-gray-100">
          <header className="bg-white shadow">
            <Header />
          </header>
          <div>
            <div className="py-12 flex flex-wrap flex-col md:flex-row">
              {/*  --- Left Sidebar ---  */}
              <LeftSidebar />
              {/*  --- Right Side ---  */}
              <div className=" w-3/4  mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                  <div className="p-6 sm:px-20 bg-white border-b border-gray-200">
                    <div className="mt-2 text-gray-600">
                      <div className="flex items-center">
                        <img
                          className="h-24 w-24 rounded-full object-cover"
                          src={
                            profileData && profileData.profile_pic
                              ? getImageUrl(profileData.profile_pic)
                              : profileData && profileData.gender === "Male"
                              ? "../src/assets/images/groom.png"
                              : profileData && profileData.gender === "Female"
                              ? "../src/assets/images/bridal.png"
                              : null // or provide a default image URL
                          }
                          alt="Profile image"
                        />
                        <div className="ml-4">
                          <h2 className="text-lg leading-6 font-medium text-gray-900">
                            Masudur Rahman
                          </h2>
                          <p className="text-sm text-gray-500">Dhaka</p>
                          <p className="text-sm text-gray-500">ID: 01</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* -------Start Personal Information------- */}

                  <div className="m-4 mx-8 p-4 font-normal  text-gray-600">
                    <h1 className="text-xl font-bold text-gray-800 pb-2 mb-3 border-b ml-10">
                      Personal Information
                    </h1>
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">ID</p>
                        <p className="w-2/4">01</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Name</p>
                        <p className="w-2/4">Masudur Rahman</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Email</p>
                        <p className="w-2/4">masudparvez2050@gmail.com</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Phone</p>
                        <p className="w-2/4">+880 1686 771198</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Date of Birth</p>
                        <p className="w-2/4">18 March 1995</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Gender</p>
                        <p className="w-2/4">Male</p>
                      </div>
                    </div>
                    {/* ------------- */}
                  </div>
                  {/* -------End Personal Information------- */}

                  {/* -------Start General Information------- */}

                  <div className="m-4 mx-8 p-4 font-normal  text-gray-600">
                    <h1 className="text-xl font-bold text-gray-800 pb-2 mb-3 border-b ml-10">
                      General Information
                    </h1>
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Biodata Type</p>
                        <p className="w-2/4">Groom</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Marital Status</p>
                        <p className="w-2/4">Unmarried</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Height</p>
                        <p className="w-2/4">170 cm</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Weight</p>
                        <p className="w-2/4">62 Kg</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Blood Group</p>
                        <p className="w-2/4">O+(ev)</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Religion</p>
                        <p className="w-2/4">Islam</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Nationality</p>
                        <p className="w-2/4">Bangladeshi</p>
                      </div>
                    </div>
                    {/* ------------- */}
                  </div>
                  {/* -------End General Information------- */}

                  {/* -------Start Address------- */}

                  <div className="m-4 mx-8 p-4 font-normal  text-gray-600">
                    <h1 className="text-xl font-bold text-gray-800 pb-2 mb-3 border-b ml-10">
                      Address
                    </h1>
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Permanent Address</p>
                        <p className="w-2/4">Borabo, Rupganj, Narayanganj</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Present Address</p>
                        <p className="w-2/4">Borabo, Rupganj, Narayanganj</p>
                      </div>
                    </div>
                  </div>
                  {/* -------End Address------- */}

                  {/* -------Start Academic Qualification------- */}

                  <div className="m-4 mx-8 p-4 font-normal  text-gray-600">
                    <h1 className="text-xl font-bold text-gray-800 pb-2 mb-3 border-b ml-10">
                      Academic Qualification
                    </h1>
                    <div className="ml-28 border-b m-6 p-2 bg-gray-400 text-white">
                      <div className="flex ">
                        <p className="w-1/4">SSC</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Group</p>
                        <p className="w-2/4">Srience</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Passing Year</p>
                        <p className="w-2/4">2011</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Session</p>
                        <p className="w-2/4">2009-2010</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">GPA</p>
                        <p className="w-2/4">4.56</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">School</p>
                        <p className="w-2/4">
                          Hazi Ayet Ali Bhuyan High School
                        </p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Board</p>
                        <p className="w-2/4">Dhaka</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2 bg-gray-400 text-white">
                      <div className="flex">
                        <p className="w-1/4">Diploma</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Group</p>
                        <p className="w-2/4">Computer</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Passing Year</p>
                        <p className="w-2/4">2021</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Session</p>
                        <p className="w-2/4">2017-2018</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">CGPA</p>
                        <p className="w-2/4">3.61</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Insititute</p>
                        <p className="w-2/4">Greenland Polytecnic Institute</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Board</p>
                        <p className="w-2/4">Technical Board</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2 bg-gray-400 text-white">
                      <div className="flex">
                        <p className="w-1/4">Gaduation</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Dipartmetn</p>
                        <p className="w-2/4">CSE</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Passing Year</p>
                        <p className="w-2/4">Running</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Session</p>
                        <p className="w-2/4">2021-2022</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">CGPA</p>
                        <p className="w-2/4">-</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Univarsity</p>
                        <p className="w-2/4">Northern Univarsity Bangladesh</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Board</p>
                        <p className="w-2/4">UGC</p>
                      </div>
                    </div>
                    {/* ------------- */}
                  </div>
                  {/* -------End Academic Qualification------- */}

                  {/* -------Start Family Information------- */}

                  <div className="m-4 mx-8 p-4 font-normal  text-gray-600">
                    <h1 className="text-xl font-bold text-gray-800 pb-2 mb-3 border-b ml-10">
                      Family Information
                    </h1>
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Father&apos;s Name</p>
                        <p className="w-2/4">Billal Hossain</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Mother&apos;s Name</p>
                        <p className="w-2/4">Aysha Akter</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">How Many Person in Family?</p>
                        <p className="w-2/4">06</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Brother & Sister </p>
                        <p className="w-2/4">3 Brothers and 1 sister</p>
                      </div>
                    </div>
                    {/* ------------- */}
                    <div className="ml-28 border-b m-6 p-2">
                      <div className="flex">
                        <p className="w-1/4">Financial Status</p>
                        <p className="w-2/4">Middle CLass</p>
                      </div>
                    </div>

                    {/* ------------- */}
                  </div>
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
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
export default MyProfileDetails;
