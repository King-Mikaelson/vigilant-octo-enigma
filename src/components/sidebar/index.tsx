import { BiLogOut } from "react-icons/bi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import uppistLogo from "../../assets/uppistWhite.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { AiOutlineSetting } from "react-icons/ai";

export default function SideBar() {
  const [activeTab, setActiveTab] = useState<string>("menu");

  const activeStyle = {
    color: "#51145a",
    fontWeight: "bold",
  };

  return (
    <div className="sidebar__container">
      <div className="sidebar__logo">
        <img src={uppistLogo} alt="" width={"100%"} />
      </div>
      <div className="sidebar__wrapper">
        <NavLink
          to={"/dashboard-admin"}
          style={activeTab === "dashboard" ? activeStyle : undefined}
          onClick={() => {
            setActiveTab("dashboard");
          }}
          className="sidebar__link"
        >
          <RxDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink
          to={"/admin"}
          style={activeTab === "menu" ? activeStyle : undefined}
          onClick={() => {
            setActiveTab("menu");
          }}
          className="sidebar__link"
        >
          <MdOutlineRestaurantMenu size={20} />
          Menu Manager
        </NavLink>

        <NavLink
          to={"/reports/individual-report"}
          style={activeTab === "report" ? activeStyle : undefined}
          onClick={() => {
            setActiveTab("report");
          }}
          className="sidebar__link"
        >
          <HiOutlineChartSquareBar size={20} />
          Report
        </NavLink>

        <NavLink
          to={"/settings/profile"}
          style={activeTab === "settings" ? activeStyle : undefined}
          onClick={() => {
            setActiveTab("settings");
          }}
          className="sidebar__link"
        >
          <AiOutlineSetting size={20} />
          Settings
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
