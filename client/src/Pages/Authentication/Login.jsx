import { Link } from "react-router-dom";
import Footer from "../../Components/Layout/Footer";
import Header from "../../Components/Layout/Header";
import { useLanguage } from "../../contextAPI/ChangeLanguage";

function Login() {
  const { changeLanguage } = useLanguage();
  return (
    <>
      <div>
        <div className="shadow-md">
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
              <div className="m-10 p-10 border rounded-2xl shadow md:w-[400px] hover:shadow-purple-300 hover:shadow-lg transition-all duration-500 bg-pink">
                {/* <!-- <center> --> */}
                <img
                  className="w-24 h-24 mx-auto rounded-full"
                  src="/src/assets/images/Male.png"
                  alt=""
                />
                {/* <!-- </center> --> */}
                <p className="text-center font-bold text-xl mb-2">Login</p>
                <p className="text-center font-semibold mb-3">Welcome Back</p>

                <input
                  className="border rounded-md bg-gray-100 h-10 w-full my-2 px-2 focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                  placeholder="Enter Email"
                  required
                  type="text"
                  name="username"
                />

                <input
                  className="border rounded-md bg-gray-100 h-10 w-full my-2 px-2 focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                  placeholder="Enter password"
                  required
                  type="password"
                  name="password"
                />

                {/* <!--start- keep login and forget password --> */}
                <div className="flex justify-between">
                  <div>
                    <input className="my-4" type="checkbox" name="checkbox" />
                    <label className="font-semibold my-4 mx-2 text-gray-600">
                      Keep me login
                    </label>
                  </div>
                  <Link
                    className="font-semibold my-3 text-gray-600 "
                    to="/reset">
                    Forget password
                  </Link>
                </div>
                {/* <!--end- keep login and forget password -->   */}
                <div className="flex justify-center">
                  <button
                    className="my-2 py-2 px-10 rounded-full bg-pink-500 text-white font-semibold drop-shadow-md hover:shadow-blue-300"
                    type="Submit">
                    Log in
                  </button>
                </div>
                <center>
                  <label className="text-sm text-gray-600">
                    don&apos;t have account? &nbsp;
                  </label>
                  <Link
                    to="/registration"
                    className="rounder-md font-semibold text-sm text-blue-800">
                    Click Here
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
