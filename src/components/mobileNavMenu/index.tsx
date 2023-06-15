import { NavLink } from "react-router-dom";
import uppistLogo from "../../assets/uppistWhite.png";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

function MobileNavMenu() {
  const { setOpenMobileNavMenu } = useContext(AppContext);
  return (
    <div className="mobile__nav">
      <div className="topBarMobile__dashboard">
        <img src={uppistLogo} alt="" />
        <div className="topbar__button">
          <h3>Log out</h3>
        </div>
      </div>

      <div className="mobileMenu">
        <NavLink
          to={"/menu_manager"}
          className="mobileMenu__child"
          onClick={() => setOpenMobileNavMenu?.(false)}
        >
          <MdOutlineRestaurantMenu size={25} />
          <p>Menu Manager</p>
        </NavLink>

          <NavLink
            to={"/reports"}
            className="mobileMenu__child"
            onClick={() => setOpenMobileNavMenu?.(false)}

          >
            <HiOutlineChartSquareBar size={25} />
            <p>Report</p>
          </NavLink>

      
          <NavLink
            to={"/settings"}
            className="mobileMenu__child"
            onClick={() => setOpenMobileNavMenu?.(false)}

          >
            <AiOutlineSetting size={25} />
            <p>Settings</p>
          </NavLink>


          <NavLink
            to={"/logOut"}
            className="mobileMenu__child"
            onClick={() => setOpenMobileNavMenu?.(false)}

          >
            <BiLogOut size={25} />
            <p>Log Out</p>
          </NavLink>
      </div>
    </div>
  );
}

export default MobileNavMenu;
