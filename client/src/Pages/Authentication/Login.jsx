import { Link } from "react-router-dom";
import Footer from "../../Components/Layout/Footer";
import Header from "../../Components/Layout/Header";
import { useLanguage } from "../../contextAPI/ChangeLanguage";
// import { useState } from "react";
// import toast from "react-hot-toast";
function Login() {
  const { changeLanguage } = useLanguage();
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const navigate = useNavigate();

  return (
    <>
      <div>
        <div className="shadow-md">
          <Header />
        </div>
        <div className="flex h-auto p-12 justify-center items-center transition-all duration-500">
          {/* <!-- Start Left Section --> */}
          <div className="w-1/2 bg-white flex justify-center">
            <div className="md:w-[405px] text-center">
              <h2 className="font-bold text-pink-500 text-4xl">
                {changeLanguage ? "NUB মেট্রিমণি" : "NUB Metrimony"}
              </h2>
              <h3 className="text-black font-semibold mt-4">
                {changeLanguage
                  ? "সেরা ভার্চুয়াল মিটিং, সাফল্যের গল্প, সহজ নিবন্ধন, ব্যবহারকারী বান্ধব ইন্টারফেস সহ বাংলাদেশের সবচেয়ে বিশ্বস্ত ম্যাট্রিমনি ওয়েব অ্যাপ"
                  : "Bangladesh most trusted Matrimony Web App with best Virtual Meetings,Success Stories,Easy Registration,User Friendly Interface"}
              </h3>
              <img
                className="w-72 m-10 mx-auto"
                src="/src/assets/images/Wedding.png"
                alt="error"
              />
            </div>
          </div>
          {/* <!-- End Left Section -->

          <!-- Start Right Section --> */}
          <div className="w-1/2 bg-white-300">
            <form className="flex justify-center">
              <div
                className="m-10 p-10 border rounded-2xl md:w-[400px] shadow-purple-300 shadow-lg
              hover:shadow-purple-400 hover:shadow-xl  
              transition-all duration-500 bg-pink"
              >
                {/* <!-- <center> --> */}
                <img
                  className="w-24 h-24 mx-auto mb-4"
                  src="/src/assets/images/ring.jpg"
                  alt=""
                />
                {/* <!-- </center> --> */}
                <p className="text-center font-bold text-xl mb-2">
                  {changeLanguage ? "লগইন" : "Login"}
                </p>
                <p className="text-center font-semibold text-gray-600 mb-3">
                  {changeLanguage ? "স্বাগতম" : "Welcome Back"}
                </p>

                <input
                  className="border font-extralight rounded-md h-10 w-full my-2 px-2 focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                  placeholder={changeLanguage ? "ই-মেইল এড্রেস" : "Enter Email"}
                  required
                  type="text"
                  name="username"
                />

                <input
                  className="border font-extralight rounded-md h-10 w-full my-2 px-2 focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                  placeholder={changeLanguage ? "পাসওয়ার্ড" : "Enter password"}
                  required
                  type="password"
                  name="password"
                />

                {/* <!--start- keep login and forget password --> */}
                <div className="flex justify-between">
                  <div>
                    <input className="my-4" type="checkbox" name="checkbox" />
                    <label className=" my-4 mx-2 text-sm text-gray-500">
                      {changeLanguage ? "লগইন থাকুন" : "Rememder me"}
                    </label>
                  </div>
                  <Link className=" text-sm my-3 text-rose-500 " to="/reset">
                    {changeLanguage
                      ? "পাসওয়ার্ড ভুলে গিয়েছেন?"
                      : "Forget password?"}
                  </Link>
                </div>
                {/* <!--end- keep login and forget password -->   */}
                <div className="flex justify-center">
                  <button
                    className="my-4 py-2 px-10 rounded-full bg-pink-500 text-white font-semibold drop-shadow-md hover:shadow-purple-300 hover:shadow-lg hover:bg-pink-600 transition-all duration-500"
                    type="Submit"
                  >
                    {changeLanguage ? "লগইন" : "Log in"}
                  </button>
                </div>
                <center>
                  <label className="text-sm text-gray-600">
                    {changeLanguage ? "একাউন্ট নেই?" : "Don't have account? "}
                    &nbsp;
                  </label>
                  <Link
                    to="/registration"
                    className="rounder-md font-semibold text-sm text-blue-800"
                  >
                    {changeLanguage ? "এখানে ক্লিক করুন" : "Click Here"}
                  </Link>
                </center>
              </div>
            </form>
          </div>
          {/* <!-- End Right Section --> */}
        </div>

        <Footer />
      </div>
      ;
    </>
  );
}
export default Login;
