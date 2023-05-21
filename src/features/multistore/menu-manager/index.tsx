import FoodCategories from "../../../components/foodCategories";
import MultiStoreMenu from "../../../components/multistore-menu";


export default function MultiStoreMenuManager() {
  return (
      <div className="pos">
        <aside className="pos__left">
          <MultiStoreMenu />
        </aside>
        <aside className="pos__right">
          <FoodCategories />
        </aside>
      </div>
  );
}