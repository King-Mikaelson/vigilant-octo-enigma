import Menu from "../../components/menu";
import Orders from "../../components/orders";
import DashboardLayout from "../../layout/dashboardLayout";

export default function Pos() {
  return (
    <DashboardLayout>
      <section className="pos">
        <aside className="pos__left">
          <Menu />
        </aside>
        <aside className="pos__right">
          <Orders />
        </aside>
      </section>
    </DashboardLayout>
  );
}
