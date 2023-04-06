import AppLogout from "../../features/logout";
import SideBar from "../../components/sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <AppLogout>
      <div>
        <aside>
          <SideBar />
        </aside>
        <aside>{<Outlet />}</aside>
      </div>
    </AppLogout>
  );
}
