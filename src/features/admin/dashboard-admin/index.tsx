import TopMenu from "../../../components/topMenu";
import DashboardCard from "../../../components/admin/dashboardCard";
import DashboardContent from "../../../components/admin/dashboardContent";
export default function DashboardAdmin() {
  return (
      <div className="dashboardAdmin">
        <TopMenu name="Dashboard" />
        <DashboardCard />
        <DashboardContent />
      </div>
  );
}
