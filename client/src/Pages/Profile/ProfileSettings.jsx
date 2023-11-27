import Footer from "../../Components/Layout/Footer";
import Header from "../../Components/Layout/Header";
import LeftSidebar from "./LeftSidebar";

function ProfileSettings() {
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
              {/*  --- Left Sidebar ---  */}
              <LeftSidebar />
              {/*  ---start  Right Side ---  */}
              <div className=" w-2/4  mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg h-full text-gray-600">
                  <h1 className="m-4 p-4 text-2xl border-b">
                    Profile Settings
                  </h1>
                  <form className=" m-4 p-4">
                    <h1 className="m-2 p-2 border-b">Password Change</h1>
                    <p className="m-2 p-2">New Password</p>
                    <input
                      className="mx-4 p-2 border rounded-md focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                      type="password"
                    />
                    <p className="m-2 p-2">Confirm Password</p>
                    <input
                      className="mx-4 p-2 border rounded-md focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                      type="password"
                    />
                    <div>
                      {" "}
                      <button
                        type="submit"
                        className="m-4  py-4 px-10 bg-[#ff0081] text-white rounded-full hover:shadow-purple-300 hover:shadow-lg transition-all duration-500 hover:px-12"
                      >
                        Update Password
                      </button>
                    </div>
                  </form>

                  <form className="m-4 p-4" action="">
                    <h1 className="pb-2 mb-2 text-2xl border-b">
                      Delete Account
                    </h1>
                    <p>
                      <input className="mr-4" type="checkbox" />{" "}
                      <label htmlFor="">
                        Do you want to Delete your Accout?
                      </label>
                    </p>
                    <button
                      type="submit"
                      className=" m-4  py-4 px-10 bg-[#ff0081] text-white rounded-full hover:shadow-purple-300 hover:shadow-lg transition-all duration-500 hover:px-12"
                    >
                      Delete Account
                    </button>
                  </form>
                </div>
              </div>

              {/*  ---End  Right Side ---  */}
              <div className="w-1/4"></div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
export default ProfileSettings;
