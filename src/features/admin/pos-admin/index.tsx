import Menu from "../../../components/menu";
import AddItem from "../../../components/admin/items/addItem";


export default function Admin() {
  return (
      <div className="pos">
        <aside className="pos__left">
          <Menu />
        </aside>
        <aside className="pos__right">
          <AddItem />
        </aside>
      </div>
  );
}
