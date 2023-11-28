import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../../contextAPI/ChangeLanguage";
import { useAuth } from "./../../contextAPI/authContext";
import axios from "axios";
import BASE_URL, { getImageUrl } from "../../utils/URL";
import LoadingBar from "react-top-loading-bar";
import toast from "react-hot-toast";
import { clearSessionCookie } from "../../utils/session";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { changeLanguage, bn, en } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState(
    changeLanguage ? "বাংলা" : "English"
  );
  const { auth } = useAuth();
  const [profileData, setProfileData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

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

  const navigate = useNavigate();

  useEffect(() => {
    const simulateProgress = () => {
      setProgress(30); // Start at 80%
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 90) {
            clearInterval(interval);
            return 100; // Finish at 100%
          } else {
            return prevProgress + 50;
          }
        });
      }, 500); // Adjust the interval as needed
    };

    simulateProgress();
  }, []);

  useEffect(() => {
    // Add a scroll event listener to show or hide the button based on scroll position
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

  // ----Start Dropdown Profle menu------
  const [open, setOpen] = useState(false);

  const toggleProfile = () => {
    setOpen(!open);
  };
  // ----End Dropdown Profle menu------

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguageEn = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    en();
  };
  const changeLanguageBn = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    bn();
  };

  return (
    <header className=" p-3 max-w-screen-xl mx-auto drop ">
      {/* ---Progressbar Animation--- */}
      <div className="App">
        <LoadingBar
          color="#ff0081" // Change the loading bar color as needed
          progress={progress}
          onLoaderFinished={() => setProgress(0)} // Reset progress when finished
        />
      </div>
      {/* ---Progressbar Animation--- */}

      {/* -----Start Scroll-to-top Button----- */}
      <button
        onClick={scrollToTop}
        className={`${
          isVisible ? "block" : "hidden"
        } fixed bottom-6 right-6 bg-rose-500 text-white p-2 rounded-full text-xl shadow-lg cursor-pointer transition duration-300 hover:bg-rose-600 z-[1]`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>

      {/* -----End Scroll-to-top Button----- */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={
                changeLanguage
                  ? "/src/assets/images/Metrimonititle_Bangla-v2.png"
                  : "/src/assets/images/Logo.png"
              } // Add your logo source here
              alt="Logo"
              className=" h-[5rem] w-[12rem] ml-3 mt-2" // Customize the logo size
            />
            {/* <div className="text-white text-xl font-bold">Your Logo Name</div> */}
          </Link>
        </div>
        <div className="hidden sm:flex space-x-6 text-lg  text-[#39182a] font-semibold">
          <Link
            to="/"
            className="hover:underline hover:font-semibold hover:text-rose-700"
          >
            {changeLanguage ? "হোম" : "Home"}
          </Link>
          <Link
            to="/findpartner"
            className="hover:underline hover:font-semibold hover:text-rose-700"
          >
            {changeLanguage ? "সঙ্গী খুঁজুন" : "Find Partner"}
          </Link>
          <Link
            to="/guide"
            className="hover:underline hover:font-semibold hover:text-rose-700"
          >
            {changeLanguage ? "নির্দেশনা" : "Guide"}
          </Link>
          <Link
            to="/team"
            className="hover:underline hover:font-semibold hover:text-rose-700"
          >
            {changeLanguage ? "টিম" : "Team"}
          </Link>

          <Link
            to="/about"
            className="hover:underline hover:font-semibold hover:text-rose-700"
          >
            {changeLanguage ? "আমাদের সম্পর্কে" : "About Us"}
          </Link>
          <Link
            to="/faq"
            className="hover:underline hover:font-semibold hover:text-rose-700"
          >
            {changeLanguage ? "জিজ্ঞাসা" : "FAQ"}
          </Link>
          <Link
            to="/contact"
            className="hover:underline hover:font-semibold hover:text-rose-700"
          >
            {changeLanguage ? "যোগাযোগ" : "Contact"}
          </Link>
        </div>
        <div className="flex items-center">
          {/* ------------start Drop down button--------------- */}
          <div className="relative inline-block text-left mr-2">
            <button
              onClick={toggleDropdown}
              className="p-2  rounded-lg hover:bg-pink-400 hover:text-white "
            >
              {selectedLanguage}
            </button>
            {isOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <a
                    href="#"
                    onClick={() => changeLanguageBn("বাংলা")}
                    className="block px-4 py-2 text-gray-800 hover:bg-rose-500 hover:text-white hover:font-bold"
                  >
                    বাংলা
                  </a>
                  <a
                    href="#"
                    onClick={() => changeLanguageEn("English")}
                    className="block px-4 py-2 text-gray-800 hover:bg-rose-500 hover:text-white hover:font-bold"
                  >
                    English
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* ------------end Drop down button--------------- */}

          {/* <button className="hidden sm:flex   hover:bg-blue-100 px-4 py-2 rounded-full  border-gray-500 border">
            Button 1
          </button> */}
          {/* -----start Is Auth then profile pic show */}
          {auth ? (
            <>
              <div className="relative inline-block text-left z-10">
                <center>
                  <button
                    onClick={toggleProfile}
                    type="button"
                    className="bg-gray-800 rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff0081] shadow-lg hover:drop-shadow-md mb-1 mt-2 "
                    id="options-menu"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>

                    <img
                      className="h-14 w-14 rounded-full border border-[#ff0081]"
                      src={
                        profileData && profileData.profile_pic
                          ? getImageUrl(profileData.profile_pic)
                          : profileData && profileData.gender === "Male"
                          ? "../src/assets/images/groom.png"
                          : profileData && profileData.gender === "Female"
                          ? "../src/assets/images/bridal.png"
                          : null // or provide a default image URL
                      }
                      alt="User"
                    />
                  </button>
                  {profileData && profileData.username && (
                    <p className="text-sm text-gray-800 font-semibold">
                      {profileData.username}
                    </p>
                  )}
                </center>

                {open && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-[#ff0081] ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <div className="py-1" role="none">
                      {profileData && profileData.username && (
                        <p
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ff0081] hover:rounded-md hover:text-white hover:mx-2 w-44 text-left"
                          role="menuitem"
                        >
                          {profileData.username}
                        </p>
                      )}
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ff0081] hover:rounded-md hover:text-white hover:mx-2 w-44 text-left"
                        role="menuitem"
                      >
                        My Profile
                      </Link>
                      <Link
                        to="/profile/settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ff0081] hover:rounded-md hover:text-white hover:mx-2 w-44 text-left"
                        role="menuitem"
                      >
                        Settings
                      </Link>
                      <button
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#ff0081] hover:rounded-md hover:text-white hover:mx-2 w-44 text-left"
                        role="menuitem"
                        onClick={handleLogout}
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
              {/* <button
                    className="bg-secondary text-white py-2 px-8 rounded-lg hover:bg-blue-800 hover:drop-shadow-lg"
                    onClick={handleLogout}
                  >
                    {changeLanguage ? "লগআউট" : "Logout"}
                  </button> */}
            </>
          ) : (
            <Link
              to="/login "
              className="hidden sm:flex hover:shadow-lg px-4 py-2 rounded-xl border-violet-600 text-violet-600 border-2"
            >
              {changeLanguage ? "লগইন" : "Login"}
            </Link>
          )}
          {/* -----End Is Auth then profile pic show */}

          <button className="sm:hidden" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-[#fbbdec] border rounded-md p-4 text-end z-10 absolute w-[350px] ">
          <ul className="">
            <li className="hover:bg-rose-600 hover:text-white hover:rounded-md p-2 pr-4">
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-rose-600 hover:text-white hover:rounded-md p-2 pr-4">
              <Link to="/findpartner">Find Partner</Link>
            </li>
            <li className="hover:bg-rose-600 hover:text-white hover:rounded-md p-2 pr-4">
              {" "}
              <Link to="/guide">Guide</Link>
            </li>
            <li className="hover:bg-rose-600 hover:text-white hover:rounded-md p-2 pr-4">
              {" "}
              <Link to="/team">Team</Link>
            </li>

            <li className="hover:bg-rose-600 hover:text-white hover:rounded-md p-2 pr-4">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:bg-rose-600 hover:text-white hover:rounded-md p-2 pr-4">
              {" "}
              <Link to="/faq">FAQ</Link>
            </li>
            <li className="hover:bg-rose-600 hover:text-white hover:rounded-md p-2 pr-4">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
