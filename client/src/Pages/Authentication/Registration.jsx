import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Layout/Header";
import Footer from "./../../Components/Layout/Footer";
import { useLanguage } from "../../contextAPI/ChangeLanguage";
import BASE_URL from "../../utils/URL";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

function Registration() {
  const { changeLanguage } = useLanguage();
  const [selectedGender, setSelectedGender] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "Gender") {
      // Update both selectedGender and formData.gender
      setSelectedGender(value);
      setFormData({
        ...formData,
        gender: value,
      });
    } else if (name === "dob") {
      // Special handling for date of birth to format it as "yyyy-mm-dd"
      const date = new Date(value);
      const formattedDate = date.toISOString().split("T")[0];
      setFormData({
        ...formData,
        [name]: formattedDate,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Include selected gender in formData
    const formDataWithGender = {
      ...formData,
      gender: selectedGender,
    };
    try {
      const url = `${BASE_URL}/user/register`;
      const response = await axios.post(url, formDataWithGender);

      toast.success(response.data.message);
      navigate("/login");
      // You can reset the form or navigate to the login page here
    } catch (error) {
      toast.error(error.response.data.error);
      console.log(error.response.data.error);
    }
  };

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
          <form className="flex justify-center" onSubmit={handleFormSubmit}>
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
                value={formData.username}
                onChange={handleInputChange}
              />

              <input
                className="border rounded-md p-2 w-full my-2 focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                type="password"
                name="password"
                placeholder={changeLanguage ? "পাসওয়ার্ড" : "Password"}
                required
                value={formData.password}
                onChange={handleInputChange}
              />

              <input
                className="border rounded-md p-2 w-full my-2 focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                type="text"
                name="email"
                placeholder={changeLanguage ? "ই-মেইল এড্রেস" : "Email address"}
                required
                value={formData.email}
                onChange={handleInputChange}
              />

              <input
                className="border rounded-md p-2 w-full my-2 focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                type="number"
                name="phone"
                placeholder={
                  changeLanguage ? "মোবাইল নাম্বার" : "Mobile number"
                }
                required
                value={formData.mobileNumber}
                onChange={handleInputChange}
              />

              <select
                className="border rounded-md p-2 w-full my-2 focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200 text-gray-800"
                type="number"
                name="Gender"
                value={selectedGender}
                onChange={handleInputChange}
              >
                <option value="" disabled>
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
                name="dob"
                onChange={handleInputChange}
              />

              <center>
                <button
                  className="py-2 px-8 rounded-full bg-pink-500 text-white font-semibold drop-shadow-md hover:shadow-purple-300 hover:shadow-lg hover:bg-pink-600 transition-all duration-500text-md my-4"
                  type="submit"
                >
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
