import { CiSearch } from "react-icons/ci";
import {GiHamburgerMenu} from "react-icons/gi"
import {RxDashboard} from "react-icons/rx"
import { useNavigate } from "react-router-dom";

function BottomNavigation() {

  const navigate = useNavigate();

  return (
    <div className="bottomBar__container">
      <div className="bottomBar__search">
        <div className="flex" onClick={() => navigate("/dashboard")}>
            <RxDashboard size={25} className="icon" />
            <p>Dashboard</p>
        </div>
        
        <div className="flex" onClick={() => navigate("/menu_manager")}>
            <GiHamburgerMenu size={25} className="icon"/>
            <p>Menu</p>
        </div>
      </div>

    </div>
  );
}

export default BottomNavigation;
