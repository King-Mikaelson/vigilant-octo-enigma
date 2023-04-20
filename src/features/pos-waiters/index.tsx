import Menu from "../../components/menu";
// import Orders from "../../components/orders";
import AddItem from "../../components/items/addItem";
import DashboardLayout from "../../layout/dashboardLayout";

export default function PosWaiters() {
  return (
    <DashboardLayout>
      <div className="pos">
        <aside className="pos__left">
          <Menu />
        </aside>
        <aside className="pos__right">
          <AddItem />
        </aside>
      </div>
    </DashboardLayout>
  );
}
