import Menu from "../../components/menu";
import Orders from "../../components/orders";
import DashboardLayout from "../../layout/dashboardLayout";

export default function Pos() {
  return (
    <DashboardLayout>
      <aside>
        <Menu />
      </aside>
      <aside>
        <Orders />
      </aside>
    </DashboardLayout>
  );
}
