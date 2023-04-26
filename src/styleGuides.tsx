import Subscribe from "./features/subscription";
import TopBar from "./components/topBar/index";
//import DeleteItem from "./components/items/deleteItem";
// import EditItem from "./components/items/editItem";
// import AddItem from "./components/items/addItem";
import Filters from "./components/filters";
import MenuCard from "./components/menuCard";
import Admin from "./features/admin/pos-admin";
import DashboardAdmin from "./features/admin/dashboard-admin";
import TopMenu from "./components/topMenu";
import DashboardCard from "./components/admin/dashboardCard";
import DashboardContent from "./components/admin/dashboardContent";
import EditProfile from "./components/admin/settings/adminSettings/profile/EditProfile";
import ReportLayout from "./features/report/index";
import IndividualReport from "./features/report/individual-report";
import GeneralReport from "./features/report/general-report";
export default function StyleGuides() {
  return (
    <div>
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
      {/* <DeleteItem /> */}
      {/* Commented this out because the background effect affects the ENTIRE screen */}
      {/* <EditItem /> */}
      {/* <AddItem /> */}
      <TopBar />
      <Subscribe />
    </div>
  );
}
