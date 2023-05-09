import { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { MdAddCard } from "react-icons/md";
import { TbUsers } from "react-icons/tb";
import { NavLink, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import TopMenu from "../../../topMenu";

export default function SettingsLayout() {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    const path = location.pathname.split("/")[2];
    setSelectedItem(path);
  }, [location]);

  return (
    <>
      <TopMenu name="Settings" />
      <div className="settings-layout">
        <div className="settings-sidebar">
          <NavLink
            to="/settings/profile"
            className={selectedItem === "profile" ? "selected" : ""}
          >
            <span className="layout-icon">
              <CgProfile />
            </span>
            Profile
          </NavLink>

          <NavLink
            to="/settings/manageusers"
            className={selectedItem === "manageusers" ? "selected" : ""}
          >
            <span className="layout-icon">
              <TbUsers />
            </span>
            Manage Users
          </NavLink>

          <NavLink
            to="/settings/managesubscriptions"
            className={selectedItem === "managesubscriptions" ? "selected" : ""}
          >
            <span className="layout-icon">
              <MdAddCard />
            </span>
            Manage Subscriptions
          </NavLink>
        </div>
        <div className="settings-content">
          <Outlet />
        </div>
      </div>
    </>
  );
}
