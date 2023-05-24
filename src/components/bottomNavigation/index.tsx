import { CiSearch } from "react-icons/ci";
import {GiHamburgerMenu} from "react-icons/gi"
import {RxDashboard} from "react-icons/rx"

function BottomNavigation() {

  return (
    <div className="bottomBar__container">
      <div className="bottomBar__search">
        <div className="flex">
            <RxDashboard size={25} className="icon" />
            <p>Dashboard</p>
        </div>
        
        <div className="flex">
            <GiHamburgerMenu size={25} className="icon"/>
            <p>Menu</p>
        </div>
      </div>

    </div>
  );
}

export default BottomNavigation;
