import { Routes, Route } from "react-router-dom";
import MyProfile from "./MyProfile";
import UpdateProfile from "./UpdateProfile";
import FavoriteList from "./FavoriteList";
import ProfileSettings from "./ProfileSettings";
import MyProfileDetails from "./MyProfileDetails";

function Profile() {
  return (
    <Routes>
      <Route path="/" element={<MyProfile />} />
      <Route path="/details" element={<MyProfileDetails />} />
      <Route path="/updateprofile" element={<UpdateProfile />} />
      <Route path="/favoritelist" element={<FavoriteList />} />
      <Route path="/settings" element={<ProfileSettings />} />
    </Routes>
  );
}

export default Profile;
