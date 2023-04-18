import { MdOutlineTableChart } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { TfiReceipt } from "react-icons/tfi";
import uppistLogo from "../../assets/uppist.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function SideBar() {
  const [activeTab, setActiveTab] = useState<string>("orders");

  const activeStyle = {
    color: "#ec9c04",
    fontWeight: "bold",
  };

  return (
    <div className="sidebar__container">
      <div className="sidebar__logo">
        <img src={uppistLogo} alt="" width={"100%"} />
      </div>
      <div className="sidebar__wrapper">
        <NavLink
          to={"/orders"}
          style={activeTab === "orders" ? activeStyle : undefined}
          onClick={() => {
            setActiveTab("orders");
          }}
          className="sidebar__link"
        >
          <TfiReceipt size={20} />
          New Order
        </NavLink>

        <NavLink
          to={"/table"}
          style={activeTab === "table" ? activeStyle : undefined}
          onClick={() => {
            setActiveTab("table");
          }}
          className="sidebar__link"
        >
          <MdOutlineTableChart size={20} />
          Table Manager
        </NavLink>

        <NavLink
          to={"/logOut"}
          style={activeTab === "logOut" ? activeStyle : undefined}
          onClick={() => {
            setActiveTab("logOut");
          }}
          className="sidebar__link"
        >
          <BiLogOut size={20} />
          Log Out
        </NavLink>
      </div>
    </div>
  );
}
