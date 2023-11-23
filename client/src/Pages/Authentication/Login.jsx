import { Link } from "react-router-dom";
import Footer from "../../Components/Layout/Footer";
import Header from "../../Components/Layout/Header";

function Login() {
  return (
    <>
      <div>
        <div className="shadow-md">
          <Header />
        </div>

        <div className="flex justify-center items-center my-[75px]">
          <form className="flex justify-center items-center">
            <div className="m-10 p-10 border rounded-md shadow md:w-[500px] hover:shadow-purple-300 hover:shadow-lg transition-all duration-500 bg-white">
              <p className="text-center font-bold text-xl mb-3">Login form</p>

              <label className="font-bold text-lg mb-2">Username</label>
              <input
                className="border rounded-md bg-gray-100 h-10 w-full my-2 px-2 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
                placeholder="please enter your username"
                required
                type="text"
                name="username"
              />

              <label className="font-bold text-lg ">Password</label>
              <input
                className="border rounded-md bg-gray-100 h-10 w-full my-2 px-2 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
                placeholder="please enter your password"
                required
                type="password"
                name="password"
              />

              {/* <!--start- keep login and forget password --> */}
              <div className="flex justify-between">
                <div>
                  <input className="my-4" type="checkbox" name="checkbox" />
                  <label className="font-semibold my-4 mx-2">
                    Keep me login
                  </label>
                </div>
                <Link to="/reset" className="font-semibold my-3 text-red-600 ">
                  Forget password
                </Link>
              </div>
              {/* <!--end- keep login and forget password -->   */}

              <button
                className="my-2 py-2 px-4 rounded-md bg-blue-500 text-white font-semibold drop-shadow-md hover:shadow-blue-300"
                type="Submit"
              >
                Log in
              </button>

              <label className="font-semibold mx-2 ">
                Don&apos;t have account ?
              </label>
              <Link
                to="/registration"
                className="rounder-md  font-semibold text-md text-blue-800"
              >
                Click Here
              </Link>
            </div>
          </form>
        </div>
        <Footer />
      </div>
      ;
    </>
  );
}
export default Login;
