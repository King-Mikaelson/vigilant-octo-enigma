import TopMenu from "../../../components/topMenu";
import DashboardCard from "../../../components/admin/dashboardCard";
import { useContext } from "react";
import DashboardContent from "../../../components/admin/dashboardContent";
import AuthContext from "../../authentication/context/AuthContext";
export default function DashboardAdmin() {
  const { user } = useContext(AuthContext);
  return (
    <div className="dashboardAdmin">
      <TopMenu name="Dashboard" branch={user.works_at} />
      <DashboardCard />
      <DashboardContent />
    </div>
  );
}
