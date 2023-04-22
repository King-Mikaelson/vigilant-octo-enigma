import Menu from "../../../components/menu";
// import Orders from "../../components/orders";
import DashboardLayout from "../../../layout/dashboardLayout";
import Orders from "../../../components/waiters/orders";

export default function PosWaiters() {
  return (
    <DashboardLayout>
      <div className="pos">
        <aside className="pos__left">
          <Menu />
        </aside>
        <aside className="pos__right">
          <Orders />
        </aside>
      </div>
    </DashboardLayout>
  );
}
