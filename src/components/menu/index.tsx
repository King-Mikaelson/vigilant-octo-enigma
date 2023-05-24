import TopBar from "../../components/topBar/index";
import Filters from "../../components/filters/index"
import MenuCard from "../../components/menuCard/index"
import BottomNavigation from "../bottomNavigation";

export default function Menu() {
  return (

<div  className='menu'>
    <TopBar/>
    <Filters/>
    <MenuCard/>
    <BottomNavigation/>
  </div>);
}
