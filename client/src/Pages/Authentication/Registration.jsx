import { Link } from "react-router-dom";
import Header from "../../Components/Layout/Header";
import Footer from "./../../Components/Layout/Footer";

function Registration() {
  return (
    <div>
      <div className=" shadow-md">
        <Header />
      </div>
      <div>
        <form className="flex justify-center">
          <div className="m-10 p-10 border rounded-md shadow w-full md:w-[600px] hover:shadow-blue-300 hover:shadow-lg transition-all duration-500 bg-white">
            <p className="font-bold text-center text-xl mb-3">Registration</p>

            <p className="font-bold text-md ">Username</p>
            <input
              className="border rounded-md p-2 w-full my-2"
              type="text"
              name="username"
              placeholder="Please input your username"
              required
            />

            <p className="font-bold text-md">Password</p>

            <input
              className="border rounded-md p-2 w-full my-2"
              type="password"
              name="password"
              placeholder="Please input you password"
              required
            />

            <p className="font-bold text-md">Email</p>
            <input
              className="border rounded-md p-2 w-full my-2"
              type="text"
              name="email"
              placeholder="Please input you email address"
              required
            />

            <p className="font-bold text-md">Mobile Number</p>
            <input
              className="border rounded-md p-2 w-full my-2"
              type="number"
              name="mobile-number"
              placeholder="Please input your mobile number"
              required
            />

            <p className="font-bold text-md">Gender</p>
            <select
              className="border rounded-md p-2 w-full my-2"
              type="number"
              name="Gender"
            >
              <option value="" disabled>
                Select your gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <p className="font-bold text-md">Date of Birth</p>
            <input
              className="border rounded-md p-2 w-full my-2"
              type="date"
              name="date-of-birth"
              required
            />

            <button className="py-2 px-4 rounded-md bg-blue-500 text-white font-semibold drop-shadow-md hover:shadow-blue-300 text-md">
              Registration
            </button>

            <label className="font-semibold mx-2">Have an account ?</label>

            <Link
              to="/login"
              className="rounder-md font-semibold text-md text-blue-800"
            >
              Sign in
            </Link>
          </div>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Registration;
