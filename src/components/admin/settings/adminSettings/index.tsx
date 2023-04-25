import SettingsLayout from "./layout";
import Profile from "./profile";
import EditProfile from "./profile/EditProfile";

const Settings = () => {
  return (
    <div>
      <SettingsLayout children={undefined} />
      <EditProfile />

      <Profile />
    </div>
  );
};
export default Settings;
