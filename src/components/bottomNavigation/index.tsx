import { CiSearch } from "react-icons/ci";
import {GiHamburgerMenu} from "react-icons/gi"
import {RxDashboard} from "react-icons/rx"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

function BottomNavigation() {

  const navigate = useNavigate();
  const { setOpenMobileNavMenu } = useContext(AppContext);

  return (
    <div className="bottomBar__container">
      <div className="bottomBar__search">
        <div className="flex" onClick={() => {navigate("/dashboard"); setOpenMobileNavMenu?.(false)}}>
            <RxDashboard size={25} className="icon" />
            <p>Dashboard</p>
        </div>
        
        <div className="flex" onClick={() => setOpenMobileNavMenu?.((prev:boolean)=> !prev)}>
            <GiHamburgerMenu size={25} className="icon"/>
            <p>Menu</p>
        </div>
      </div>

    </div>
  );
}

export default BottomNavigation;
