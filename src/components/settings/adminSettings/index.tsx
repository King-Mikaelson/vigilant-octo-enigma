import Profile from "./profile";
import EditProfile from "./profile/EditProfile";

const Settings = () => {
  return (
    <div>
      <div>
        <EditProfile />
      </div>
      <Profile />
    </div>
  );
};
export default Settings;
