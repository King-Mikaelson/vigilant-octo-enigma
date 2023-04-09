import AppLogout from "../../features/logout";
import SideBar from "../../components/sidebar";
import { ChildrenProp } from "../../types";
export default function DashboardLayout({ children }: ChildrenProp) {
  return (
    <AppLogout>
      <section className="dashboardlayout">
        <aside className="dashboardlayout__left">
          <SideBar />
        </aside>
        <aside className="dashboardlayout__right">{children}</aside>
      </section>
    </AppLogout>
  );
}
