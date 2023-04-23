import { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { MdAddCard } from "react-icons/md";
import { TbUsers } from "react-icons/tb";
import { NavLink, useLocation } from "react-router-dom";
import DashboardLayout from "../../../../../layout/dashboardLayout";
interface SettingsLayoutProps {
  children: React.ReactNode;
}
export default function SettingsLayout({ children }: SettingsLayoutProps) {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    const path = location.pathname.split("/")[2];
    setSelectedItem(path);
  }, [location]);

  return (
    <>
      <DashboardLayout>
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
              className={
                selectedItem === "managesubscriptions" ? "selected" : ""
              }
            >
              <span className="layout-icon">
                <MdAddCard />
              </span>
              Manage Subscriptions
            </NavLink>
          </div>
          <div className="settings-content">{children}</div>
        </div>
      </DashboardLayout>
    </>
  );
}
