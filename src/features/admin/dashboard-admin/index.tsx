import TopMenu from "../../../components/topMenu";
import DashboardLayout from "../../../layout/dashboardLayout";
import DashboardCard from "../../../components/admin/dashboardCard";
import DashboardContent from "../../../components/admin/dashboardContent";
export default function DashboardAdmin() {
  return (
    <DashboardLayout>
      <div className="dashboardAdmin">
        <TopMenu name="Dashboard" />
        <DashboardCard />
        <DashboardContent />
      </div>
    </DashboardLayout>
  );
}
