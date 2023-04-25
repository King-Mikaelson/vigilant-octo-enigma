import SettingsLayout from "./layout";
import Profile from "./profile";
import EditProfile from "./profile/EditProfile";
import DashboardLayout from "../../../layout/dashboardLayout";

const Settings = () => {
  return (
    <DashboardLayout>
    <div>
      <SettingsLayout children={undefined} />
      <EditProfile />

      <Profile />
    </div>
    </DashboardLayout>
  );
};
export default Settings;
