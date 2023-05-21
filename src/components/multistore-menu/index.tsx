import TopBar from "../../components/topBar/index";
import Filters from "../../components/filters/index";
import MultiStoreMenuCard from "../multistore-menuCard";

export default function MultiStoreMenu() {
  return (
    <div className="menu">
      <TopBar />
      <Filters />
      <MultiStoreMenuCard />
    </div>
  );
}
