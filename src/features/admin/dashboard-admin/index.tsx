import TopMenu from "../../../components/topMenu";
import DashboardCard from "../../../components/admin/dashboardCard";
import DashboardContent from "../../../components/admin/dashboardContent";
export default function DashboardAdmin() {
  return (
    <div className="dashboardAdmin">
      <TopMenu
        name="Dashboard"
        branch="Hot n’ Spicy Restaurant, New Haven, Enugu"
      />
      <DashboardCard />
      <DashboardContent />
    </div>
  );
}
