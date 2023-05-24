import AppLogout from "../../features/logout";
import SideBar from "../../components/sidebar";
import { Outlet } from "react-router-dom";
import BottomNavigation from "../../components/bottomNavigation";
// import { ChildrenProp } from "../../types";
export default function DashboardLayout() {
  return (
    <AppLogout>
      <section className="dashboardlayout">
        <aside className="dashboardlayout__left">
          <SideBar />
        </aside>
        <aside className="dashboardlayout__right">
        <BottomNavigation />
          <Outlet />
        </aside>
      </section>
    </AppLogout>
  );
}
