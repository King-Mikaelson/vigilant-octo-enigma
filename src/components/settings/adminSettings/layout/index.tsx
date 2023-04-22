import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdAddCard } from "react-icons/md";
import { TbUsers } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import DashboardLayout from "../../../../layout/dashboardLayout";

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  const [selectedItem, setSelectedItem] = useState("profile");

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };
  return (
    <>
      <DashboardLayout>
        <div className="settings-layout">
          <div className="settings-sidebar">
            <NavLink
              to="/settings"
              className={selectedItem === "profile" ? "selected" : ""}
              onClick={() => handleItemClick("profile")}
            >
              <span className="layout-icon">
                <CgProfile />
              </span>
              Profile
            </NavLink>

            <NavLink
              to="/settings/manageusers"
              className={selectedItem === "users" ? "selected" : ""}
              onClick={() => handleItemClick("users")}
            >
              <span className="layout-icon">
                <TbUsers />
              </span>
              Manage Users
            </NavLink>
            <NavLink
              to="/settings/managesubscriptions"
              className={selectedItem === "subscriptions" ? "selected" : ""}
              onClick={() => handleItemClick("subscriptions")}
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
