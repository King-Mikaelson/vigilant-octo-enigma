import TopMenu from "../../components/topMenu";
import DashboardLayout from "../../layout/dashboardLayout";
import DashboardCard from "../../components/dashboardCard";
import DashboardContent from "../../components/dashboardContent";

export default function DashboardAdmin() {
  return (
    <DashboardLayout>
     <div  className="dashboardAdmin">
        <TopMenu name="Dashboard"/>
        <DashboardCard/>
        <DashboardContent/>
     </div>
    </DashboardLayout>
  );
}
