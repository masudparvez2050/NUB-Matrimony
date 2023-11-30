import { useState } from "react";
import Header from "../../Components/Layout/Header";
import LeftSidebar from "./LeftSidebar";
import axios from "axios";
import BASE_URL from "../../utils/URL";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { clearSessionCookie } from "../../utils/session";
import { useNavigate } from "react-router-dom";
function ProfileSettings() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handlePasswordUpdate = (e) => {
    e.preventDefault();

    // Perform validation for passwords
    if (newPassword !== confirmPassword) {
      // Handle password mismatch error
      console.error("Passwords do not match");
      toast.error("Passwords do not match");
      return;
    }
    // Retrieve user ID from cookies
    const userId = Cookies.get("userid");

    // Make API request to update password
    axios
      .put(
        `${BASE_URL}/user/update/${userId}`,
        { password: newPassword },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        // Handle success
        console.log("Password updated successfully");
        toast.success("Password updated successfully");
      })
      .catch((error) => {
        // Handle error
        console.error("Password update failed", error);
        toast.error("Password update failed");
      });
  };

  const handleDeleteAccount = (e) => {
    e.preventDefault();

    // Show confirmation popup
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    // Retrieve user ID from cookies
    const userId = Cookies.get("userid");

    // Make API request to delete account
    axios
      .delete(`${BASE_URL}/user/delete/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        // Handle success
        clearSessionCookie(res.session);
        navigate("/registration");

        window.location.reload(); // Redirect to the login page or another appropriate page
        console.log("Account deleted successfully");
        toast.success("Account deleted successfully");
      })
      .catch((error) => {
        // Handle error
        console.error("Account deletion failed", error);
        toast.error("Account deletion failed");
      })
      .finally(() => {
        // Close the confirmation popup
        setShowConfirmation(false);
      });
  };

  const cancelDelete = () => {
    // Close the confirmation popup
    setShowConfirmation(false);
  };

  return (
    <main className="bg-gray-100">
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <Header />
        </header>
        <div className="py-12 flex flex-wrap flex-col md:flex-row">
          {/* Left Sidebar */}
          <LeftSidebar />
          {/* Right Side */}
          <div className="w-3/4 mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg h-full text-gray-600">
              <h1 className="m-4 p-4 text-2xl border-b">Profile Settings</h1>

              {/* Password Change Form */}
              <form className="m-4 p-4" onSubmit={handlePasswordUpdate}>
                <h1 className="m-2 p-2 border-b">Password Change</h1>
                <p className="m-2 p-2">New Password</p>
                <input
                  className="mx-4 p-2 border rounded-md focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                  type="password"
                  name="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <p className="m-2 p-2">Confirm Password</p>
                <input
                  className="mx-4 p-2 border rounded-md focus:outline-none focus:border-pink-300 focus:ring focus:ring-pink-200"
                  type="password"
                  name="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div>
                  <button
                    type="submit"
                    className="m-4  py-4 px-10 bg-[#ff0081] text-white rounded-full hover:shadow-purple-300 hover:shadow-lg transition-all duration-500 hover:px-12"
                  >
                    Update Password
                  </button>
                </div>
              </form>

              {/* Delete Account Form */}
              <form className="m-4 p-4" onSubmit={handleDeleteAccount}>
                <h1 className="pb-2 mb-2 text-2xl border-b">Delete Account</h1>
                <p>
                  <input className="mr-4" type="checkbox" />{" "}
                  <label htmlFor="">Do you want to Delete your Account?</label>
                </p>
                <button
                  type="button" // Use type="button" to prevent form submission
                  onClick={handleDeleteAccount}
                  className="m-4 py-4 px-10 bg-[#ff0081] text-white rounded-full hover:shadow-purple-300 hover:shadow-lg transition-all duration-500 hover:px-12"
                >
                  Delete Account
                </button>
              </form>

              {/* Confirmation Popup */}
              {showConfirmation && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-md">
                    <p>Are you sure you want to delete your account?</p>
                    <div className="flex justify-end mt-4">
                      <button
                        className="mr-4 px-4 py-2 bg-red-500 text-white rounded"
                        onClick={confirmDelete}
                      >
                        Yes
                      </button>
                      <button
                        className="px-4 py-2 bg-gray-300 rounded"
                        onClick={cancelDelete}
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProfileSettings;
