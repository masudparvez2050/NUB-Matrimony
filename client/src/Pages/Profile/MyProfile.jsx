import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Components/Layout/Footer";
import Header from "../../Components/Layout/Header";
import LeftSidebar from "./LeftSidebar";
import axios from "axios";
import BASE_URL from "../../utils/URL";
import { clearSessionCookie } from "../../utils/session";
import toast from "react-hot-toast";

function MyProfile() {
  const navigate = useNavigate();
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
      <main className="bg-gray-100">
        <div className="min-h-screen bg-gray-100">
          <header className="bg-white shadow">
            <Header />
          </header>
          <div>
            <div className="py-12 flex flex-wrap flex-col md:flex-row">
              {/*  ---Start Left Sidebar ---  */}

              <LeftSidebar />

              {/*  ---End Left Sidebar ---  */}

              {/*  --- Right Side ---  */}
              <div className=" w-3/4  mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg flex h-full flex-wrap justify-around ">
                  <div className="flex flex-wrap w-full m-4 p-4">
                    {" "}
                    <Link
                      to="/profile/details"
                      className=" mx-4  p-4 rounded-3xl  font-semibold flex items-center justify-center h-[280px] w-[380px] border text-4xl hover:text-6xl text-gray-600 hover:bg-[#ff0081] hover:text-white transition-all duration-500 hover:shadow-xl hover:shadow-purple-300 hover:border-none shadow-md shadow-purple-200"
                    >
                      <i className="fa-solid fa-user mr-4"></i>
                      Profile
                    </Link>
                    <Link
                      to="/profile/updateprofile"
                      className=" mx-4  p-4 rounded-3xl  font-semibold flex items-center justify-center h-[280px] w-[380px] border text-4xl hover:text-6xl text-gray-600 hover:bg-[#ff0081] hover:text-white transition-all duration-500 hover:shadow-xl hover:shadow-purple-300 hover:border-none shadow-md shadow-purple-200"
                    >
                      <i className="fa-solid fa-address-card mr-4"></i>
                      Update Profile
                    </Link>
                    <Link
                      to="/profile/favoritelist"
                      className=" mx-4  p-4 rounded-3xl  font-semibold flex items-center justify-center h-[280px] w-[380px] border text-4xl hover:text-6xl text-gray-600 hover:bg-[#ff0081] hover:text-white transition-all duration-500 hover:shadow-xl hover:shadow-purple-300 hover:border-none shadow-md shadow-purple-200"
                    >
                      <p>
                        <i className="fa-solid fa-heart mr-4"></i>
                      </p>
                      <h1>Favorite List</h1>
                    </Link>
                    <Link
                      to="/profile/settings"
                      className=" mx-4  p-4 rounded-3xl  font-semibold flex items-center justify-center h-[280px] w-[380px] border text-4xl hover:text-6xl text-gray-600 hover:bg-[#ff0081] hover:text-white transition-all duration-500 hover:shadow-xl hover:shadow-purple-300 hover:border-none shadow-md shadow-purple-200"
                    >
                      <i className="fa-solid fa-sliders mr-4"></i>
                      Serrings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className=" mx-4  p-4 rounded-3xl  font-semibold flex items-center justify-center h-[280px] w-[380px] border text-4xl hover:text-6xl text-gray-600 hover:bg-[#ff0081] hover:text-white transition-all duration-500 hover:shadow-xl hover:shadow-purple-300 hover:border-none shadow-md shadow-purple-200"
                    >
                      <i className="fa-solid fa-right-from-bracket"></i>
                      Logout
                    </button>
                  </div>
                </div>
              </div>
              {/* ----------------------
               */}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
export default MyProfile;
