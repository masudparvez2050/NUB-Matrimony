import { Link } from "react-router-dom";
import Header from "../../Components/Layout/Header";
import Footer from "./../../Components/Layout/Footer";
import { useLanguage } from "../../contextAPI/ChangeLanguage";

function Registration() {
  const { changeLanguage } = useLanguage();
  return (
    <div>
      <div className=" shadow-md">
        <Header />
      </div>

      <div className="flex h-auto p-12 justify-center items-center">
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
              className="w-72 mt-10 mx-auto"
              src="/src/assets/images/Wedding.png"
              alt="error"
            />
          </div>
        </div>
        {/* <!-- End Left Section -->

            <!-- Start Right Section --> */}
        <div className="w-1/2 bg-white-300">
          <form className="flex justify-center">
            <div className="m-10 p-10 border rounded-md w-full md:w-[450px] shadow-purple-300 shadow-lg hover:shadow-purple-400 hover:shadow-xl transition-all duration-500 bg-white">
              <p className="font-bold text-center text-xl mb-3">
                {changeLanguage ? "রেজিস্ট্রেশন" : "Registration"}
              </p>

              <input
                className="border rounded-md p-2 w-full my-2 focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                type="text"
                name="username"
                placeholder={changeLanguage ? "ইউজারনেম" : "Username"}
                required
              />

              <input
                className="border rounded-md p-2 w-full my-2 focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                type="password"
                name="password"
                placeholder={changeLanguage ? "পাসওয়ার্ড" : "Password"}
                required
              />

              <input
                className="border rounded-md p-2 w-full my-2 focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                type="text"
                name="email"
                placeholder={changeLanguage ? "ই-মেইল এড্রেস" : "Email address"}
                required
              />

              <input
                className="border rounded-md p-2 w-full my-2 focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                type="number"
                name="mobile-number"
                placeholder={
                  changeLanguage ? "মোবাইল নাম্বার" : "Mobile number"
                }
                required
              />

              <select
                className="border rounded-md p-2 w-full my-2 focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200 text-gray-400"
                type="number"
                name="Gender"
              >
                <option value>
                  {changeLanguage
                    ? "জেন্ডার নির্বাচন করুন"
                    : "Select your gender"}
                </option>
                <option value="Male">
                  {changeLanguage ? "পুরুষ" : "Male"}
                </option>
                <option value="Female">
                  {changeLanguage ? "মহিলা" : "Female"}
                </option>
              </select>

              <input
                className="border rounded-md p-2 w-full my-2 focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200 text-gray-400"
                type="date"
                name="date-of-birth"
                required
              />

              <center>
                <button className="py-2 px-8 rounded-full bg-pink-500 text-white font-semibold drop-shadow-md hover:shadow-pink-300 text-md my-4">
                  {changeLanguage ? "রেজিস্ট্রেশন" : "Registration"}
                </button>
              </center>

              <center>
                <label className="font-sm text-sm text-gray-500 mx-2">
                  {changeLanguage ? "একাউন্ট আছে?" : "Have an account ?"}
                </label>

                <Link
                  className="rounder-md font-bold text-sm text-blue-800"
                  to="/login"
                >
                  {changeLanguage ? "সাইন ইন করুন" : "Sign in"}
                </Link>
              </center>
            </div>
          </form>

          {/* <!-- End Right Section --> */}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Registration;
