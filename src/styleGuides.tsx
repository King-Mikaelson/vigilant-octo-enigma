import Subscribe from "./features/subscription";
import TopBar from "./components/topBar/index";
//import DeleteItem from "./components/items/deleteItem";
// import EditItem from "./components/items/editItem";
// import AddItem from "./components/items/addItem";
import Filters from "./components/filters";
import MenuCard from "./components/menuCard";
import Admin from "./features/pos-admin";

export default function StyleGuides() {
  return (
    <div>
      <MenuCard />
      <Filters />
      <Admin />
      {/* <DeleteItem /> */}
      {/* Commented this out because the background effect affects the ENTIRE screen */}
      {/* <EditItem /> */}
      {/* <AddItem /> */}
      <TopBar />
      <Subscribe />
    </div>
  );
}
