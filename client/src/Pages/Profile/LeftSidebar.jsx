import axios from "axios";
import { Link } from "react-router-dom";
import BASE_URL, { getImageUrl } from "../../utils/URL";
import { clearSessionCookie } from "../../utils/session";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function LeftSidebar() {
  const navigate = useNavigate();
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

  //logout function
  const handleLogout = async () => {
    try {
      // Send a POST request to the logout endpoint on your backend
      const response = await axios.get(`${BASE_URL}/logout`);

      if (response.status === 200) {
        // Successful logout; handle any cleanup and navigation
        clearSessionCookie(response.session);
        navigate("/login");
        toast.success(response.data.message);
        window.location.reload(); // Redirect to the login page or another appropriate page
      } else {
        // Handle logout failure
        console.log("Logout failed");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {" "}
      <center className="w-1/4 max-w-xl mx-auto sm:px-6 lg:px-8 ">
        <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg p-4 md:flex-col flex-row">
          {" "}
          <img
            className="h-24 w-24 rounded-full object-cover mt-5 mb-2"
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
          <p className="text-sm text-gray-500">ID: 0{profileData.id}</p>
          <p className="text-sm text-gray-500">{profileData.username}</p>
          <div className="mt-10">
            {/* ---button--- */}

            <div className="group flex flex-col xl:mx-10">
              <Link
                to="/profile/details"
                className="border rounded-full w-full p-5 my-4  group-hover:bg-[#ff0081] drop-shadow-md hover:shadow-xl hover:border-none transition-all duration-300 hover:text-white text-gray-600 hover:text-xl"
              >
                <i className="fa-solid fa-user mr-2"></i>
                Profile
              </Link>
            </div>
            {/* ---button--- */}
            {/* ---button--- */}

            <div className="group flex flex-col xl:mx-10">
              <Link
                to="/profile/updateprofile"
                className="border rounded-full w-full p-5 my-4  group-hover:bg-[#ff0081] drop-shadow-md hover:shadow-xl hover:border-none transition-all duration-300 hover:text-white text-gray-600 hover:text-xl"
              >
                <i className="fa-solid fa-address-card mr-2"></i>
                Update Profile
              </Link>
            </div>
            {/* ---button--- */}
            {/* ---button--- */}

            <div className="group flex flex-col xl:mx-10">
              <Link
                to="/profile/favoritelist"
                className="border rounded-full w-full p-5 my-4  group-hover:bg-[#ff0081] drop-shadow-md hover:shadow-xl hover:border-none transition-all duration-300 hover:text-white text-gray-600 hover:text-xl"
              >
                <i className="fa-solid fa-heart mr-2"></i>
                Favorite List
              </Link>
            </div>
            {/* ---button--- */}
            {/* ---button--- */}

            <div className="group flex flex-col xl:mx-10">
              <Link
                to="/profile/settings"
                className="border rounded-full w-full p-5 my-4  group-hover:bg-[#ff0081] drop-shadow-md hover:shadow-xl hover:border-none transition-all duration-300 hover:text-white text-gray-600 hover:text-xl"
              >
                <i className="fa-solid fa-sliders mr-2"></i>
                Settings
              </Link>
            </div>
            {/* ---button--- */}
            {/* ---button--- */}

            <div className="group flex flex-col xl:mx-10">
              <div className="">
                <button
                  className="text-gray-600  group-hover:text-white border rounded-full w-full p-5 my-4 group-hover:bg-[#ff0081] drop-shadow-md hover:shadow-xl hover:border-none transition-all duration-300 hover:text-xl"
                  onClick={handleLogout}
                >
                  <i className="fa-solid fa-right-from-bracket mr-2 "></i>
                  Logout
                </button>
              </div>
            </div>
            {/* ---button--- */}
          </div>
        </div>
      </center>
    </>
  );
}
export default LeftSidebar;
