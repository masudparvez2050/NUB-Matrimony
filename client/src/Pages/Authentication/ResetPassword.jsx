import Footer from "../../Components/Layout/Footer";
import Header from "../../Components/Layout/Header";

function ResetPassword() {
  return (
    <div>
      <div className=" shadow-md">
        <Header />
      </div>
      <div>
        <form className="flex justify-center mt-28">
          <div className="m-10 p-10 border rounded-md shadow md:w-[400px] hover:shadow-blue-300 hover:shadow-lg transition-all duration-500 bg-white">
            <p className="text-center font-bold text-xl mb-3">Reset Password</p>

            <label className="font-bold text-lg mb-2">Email Address</label>
            <input
              className="border rounded-md bg-gray-100 h-10 w-full my-2 px-2 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
              placeholder="please enter your email address"
              required
              type="email"
              name="email"
            />

            <button
              className="my-2 py-2 px-4 rounded-md bg-blue-500 text-white font-semibold drop-shadow-md hover:shadow-blue-300 w-full"
              type="Submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default ResetPassword;
