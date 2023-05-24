import Menu from "../../../components/menu";
import AddItem from "../../../components/admin/items/addItem";
import { useContext } from "react";
import AppContext from "../../../context/AppContext";



export default function Admin() {

  const {openAddItem} = useContext(AppContext);

  return (
    <>
    {/* This component and state displays Add Item on small mobile screens,set to false/hidden on big screens */}
      { openAddItem ? <div className="pos__addItem"><AddItem/></div>: null}
      <div className="pos">
        <aside className="pos__left">
          <Menu />
        </aside>
        <aside className="pos__right">
          <AddItem />
        </aside>
      </div>
      </>
  );
}
