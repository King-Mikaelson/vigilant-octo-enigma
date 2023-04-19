import Menu from "../../components/menu";
// import Orders from "../../components/orders";
import AddItem from "../../components/items/addItem";
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
          {/* Orders and AddItem components would be rendered interchangeably based on the user. Admin or User
             Orders && AddItem for Admin and Orders for users only
          */}
          {/* <Orders /> */}
          <AddItem />
        </aside>
      </div>
    </DashboardLayout>
  );
}
