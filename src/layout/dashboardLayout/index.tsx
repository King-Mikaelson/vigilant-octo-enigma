import AppLogout from "../../features/logout";
import SideBar from "../../components/sidebar";
import { Outlet } from "react-router-dom";
import BottomNavigation from "../../components/bottomNavigation";
import MobileNavMenu from "../../components/mobileNavMenu";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
// import { ChildrenProp } from "../../types";
export default function DashboardLayout() {
  const { openMobileNavMenu } = useContext(AppContext);
  return (
    // <AppLogout>
    <section className="dashboardlayout">
      <aside className="dashboardlayout__left">
        <SideBar />
      </aside>
      <aside className="dashboardlayout__right">
        {openMobileNavMenu ? <MobileNavMenu /> : " "}
        <BottomNavigation />
        <Outlet />
      </aside>
    </section>
    // </AppLogout>
  );
}
