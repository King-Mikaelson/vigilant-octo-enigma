import Subscribe from "./features/subscription";
import TopBar from "./components/topBar/index";
import Filters from "./components/filters";
import MenuCard from "./components/menuCard";
import Admin from "./features/admin/pos-admin";
import DashboardAdmin from "./features/admin/dashboard-admin";
import TopMenu from "./components/topMenu";
import DashboardCard from "./components/admin/dashboardCard";
import DashboardContent from "./components/admin/dashboardContent";
import ReportLayout from "./features/report/index";
import IndividualReport from "./features/report/individual-report";
import GeneralReport from "./features/report/general-report";
import EditProfile from "./components/admin/settings/profile/editProfile";
import AddUsers from "./components/admin/settings/manageUsers/addUsers";
import UserLists from "./components/admin/settings/manageUsers/userLists";

export default function StyleGuides() {
  return (
    <div>
      <UserLists />
      <AddUsers />
      <ReportLayout />
      <IndividualReport />
      <GeneralReport />
      <DashboardContent />
      <DashboardCard />
      <TopMenu />
      <DashboardAdmin />
      <EditProfile />
      <MenuCard />
      <Filters />
      <Admin />
      <TopBar />
      <Subscribe />
    </div>
  );
}
