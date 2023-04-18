import Menu from "../../components/menu";
import Orders from "../../components/orders";
import DashboardLayout from "../../layout/dashboardLayout";
export default function Pos() {
  return (
    <DashboardLayout>
      {/* Added className pos to the main div 
      and to the child elements to give them a fixed grid
       style N.B check pos.scss for changes */}
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
